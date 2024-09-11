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
db.query("SELECT * FROM dimcurso") //Queries de teste
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
/*db.query("SELECT * FROM dimcurso")
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("ERROR:", error);
  });*/

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

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); //Faz com o que o servidor ouça as requisições
