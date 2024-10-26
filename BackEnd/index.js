const express = require("express"); //O express em si
const app = express(); //Responsável pela estrutura do servidor
const cors = require("cors"); //Protocolo de segurança caso queiramos acessar o servidor por uma página web
const PORT = 8080; //A porta de saída do servidor
const compression = require("compression"); //Compressão dos dados
const bodyParser = require("body-parser"); //Creio que não seja mais necessário, mas deixa aqui caso precise
const helmet = require("helmet"); //Para criar nossos protocolos customizados de segurança, atualmente não utilizado
const RateLimit = require("express-rate-limit"); //O limite de requisições do servidor, atualmente não utilizado
const path = require("path"); //Biblioteca para utilizarmos outras pastas dentro do servidor

const pgp = require("pg-promise")(); //Biblioteca responsável pela conexão ao servidor postgre
const connection = {
  //O objeto com os dados de autenticação
  host: "dadosenem-notasenem.l.aivencloud.com",
  port: 19569,
  database: "defaultdb",
  user: "avnadmin",
  password: "AVNS_jJn7mrbLmIrdXsjprmr",
  ssl: { require: true, rejectUnauthorized: false }, //Extremamente importante, não mexer
};
const db = pgp(connection); //A conexão com o banco de dados em si
/*db.query("SELECT * FROM dimcurso") //Queries de teste
  .then((data) => {
    console.log("Cursos:");
    console.log(data);
  }) //Os dados da query saem pelo "data"
  .catch((error) => {
    console.log("ERROR:", error);
  }); //Avisar em caso de erro
db.query("SELECT * FROM dimturno") //Queries de teste
  .then((data) => {
    console.log("Turnos:");
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });
db.query("SELECT * FROM dimcampus") //Queries de teste
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Campus:");
    console.log("ERROR:", error);
  });
db.query("SELECT * FROM dimtipograd") //Queries de teste
  .then((data) => {
    console.log("Tipo de Graduação:");
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });

db.query(
  "SELECT nomecurso FROM dimcurso WHERE idcurso IN (SELECT idcurso FROM fatoregistros WHERE idcampus = 1 AND idtipo = 2)"
)
  .then((data) => {
    console.log("Tabela final");
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  }); //Query de teste, não utilizada*/

app.use(cors()); //Implementa o protocolo "CORS" no servidor

/*app.use(
  helmet.contentSecurityPolicy({
    directives: {
      "script-src": [
        "'self'",
        "code.jquery.com",
        "cdn.jsdelivr.net",
        "https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js",
        "https://html2canvas.hertzen.com/dist/html2canvas.js",
      ],
    },
  })
);*/ //Ignorar por enquanto

const limiter = RateLimit({
  windowMs: 1 * 30 * 1000,
  max: 20,
}); //Limitador de requisitos, não está em uso
//app.use(limiter);

app.use(express.json()); //Parte do servidor que é responsável por receber os dados das requisições que faremos no app

app.use(express.static("src")); //Pasta onde irá ficar os arquivos extras, pode ser alterada
app.use(compression()); //Compressão de dados

app.get("/campus", (req, res) => {
  //Requisição que retorna as opções de campus e as envia para o app
  db.query("SELECT * FROM dimcampus")
    .then((data) => {
      console.log(data); //Teste
      const dataArr = []; //Cria um array para armazenar os dados
      for (let x in data) {
        //Transforma os dados de um objeto para um array
        dataArr.push(data[x].nomecampus);
      }
      console.log(dataArr); //Teste
      res.status(200).send(dataArr); //Envia os dados para o app
    })
    .catch((error) => {
      //Retorna se houve erros
      console.log("ERROR:", error);
    });
});

app.get("/tipo", (req, res) => {
  //Requisição que retorna as opções de tipo de gradução e as envia para o app, ver detalhes acima
  db.query("SELECT * FROM dimtipograd")
    .then((data) => {
      console.log(data);
      const dataArr = [];
      for (let x in data) {
        dataArr.push(data[x].tipograduacao);
      }
      console.log(dataArr);
      res.status(200).send(dataArr);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
});
app.get("/turno", (req, res) => {
  //Requisição que retorna as opções de turno e as envia para o app, ver detalhes acima
  db.query("SELECT * FROM dimturno")
    .then((data) => {
      console.log(data);
      const dataArr = [];
      for (let x in data) {
        dataArr.push(data[x].turno);
      }
      console.log(dataArr);
      res.status(200).send(dataArr);
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
});

app.post("/curso", (req, res) => {
  //Função que recebe do app o campus e o tipo de graduação escolhida, e retorna quais cursos estão disponíveis baseado nestas escolhas
  console.log(req.body.campus); //Teste
  console.log(req.body.tipo); //Teste
  db.query(
    `SELECT idcampus FROM dimcampus WHERE nomecampus = '${req.body.campus}'`
  ) //Pega o id do campus escolhido
    .then((idcampus) => {
      console.log(idcampus[0].idcampus); //teste
      db.query(
        `SELECT idtipo FROM dimtipograd WHERE tipograduacao = '${req.body.tipo}'`
      ) //Pega o id do tipo da graduação escolhida
        .then((idtipo) => {
          console.log(idtipo[0].idtipo);
          db.query(
            `SELECT nomecurso FROM dimcurso WHERE idcurso IN (SELECT idcurso FROM fatoregistros WHERE idcampus = '${idcampus[0].idcampus}' AND idtipo = '${idtipo[0].idtipo}')`
          ) //Busca o curso disponível em um banco de dados dimensional baseado nos ids escolhidos; ver outras queries para mais detalhes
            .then((data) => {
              console.log(data);
              const dataArr = [];
              for (let x in data) {
                dataArr.push(data[x].nomecurso);
              }
              console.log(dataArr);
              res.status(201).send(dataArr);
            })
            .catch((error) => {
              console.log("ERROR:", error);
            });
        })
        .catch((error) => {
          console.log("ERROR:", error);
        });
    })
    .catch((error) => {
      console.log("ERROR:", error);
    });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); //Faz com o que o servidor ouça as requisições
