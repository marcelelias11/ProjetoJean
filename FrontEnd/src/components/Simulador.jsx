import { useState } from 'react';

const Simulador = () => {
  const [notas, setNotas] = useState({
    cienciasNatureza: '',
    cienciasHumanas: '',
    linguagens: '',
    matematica: '',
    redacao: '',
  });

  const [campus, setCampus] = useState('');
  const [curso, setCurso] = useState('');
  const [tipoGraduacao, setTipoGraduacao] = useState('');
  const [turno, setTurno] = useState('');
  const [notaCalculada, setNotaCalculada] = useState(null);
  const [mensagem, setMensagem] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNotas({ ...notas, [name]: value });
  };

  const handleSelectChange = (event) => {
    setCurso(event.target.value);
  };

  const handleSimular = () => {
    // Aqui você vai implementar a lógica para calcular a nota
    // e comparar com a nota de corte
    //const nota = calcularNota(notas); // essa função será implementada posteriormente
    //const mensagem = compararNota(nota); // essa função será implementada posteriormente
    //setNotaCalculada(nota);
    //setMensagem(mensagem);
  };

  return (
    <div className="container py-4">
      <div className="flex flex-col gap-4 mb-4">
        <h2 className="text-2xl font-bold text-center">Simulador</h2>
        <span className="font-semibold text-lg">Digite suas notas e escolha seu curso:</span>
      </div>
      <form className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <label className="flex flex-col gap-2">
            Ciências da Natureza:
            <input
              className="border-red-900 border-2 rounded"
              type="number"
              name="cienciasNatureza"
              value={notas.cienciasNatureza}
              onChange={handleInputChange}
              placeholder="Digite sua nota de Ciência da Natureza"
            />
          </label>
          <label className="flex flex-col gap-2">
            Ciências Humanas:
            <input
              className="border-red-900 border-2 rounded"
              type="number"
              name="cienciasHumanas"
              value={notas.cienciasHumanas}
              onChange={handleInputChange}
              placeholder="Digite a nota"
            />
          </label>
          <label className="flex flex-col gap-2">
            Linguagens:
            <input
              className="border-red-900 border-2 rounded"
              type="number"
              name="linguagens"
              value={notas.linguagens}
              onChange={handleInputChange}
              placeholder="Digite a nota"
            />
          </label>
          <label className="flex flex-col gap-2">
            Matemática:
            <input
              className="border-red-900 border-2 rounded"
              type="number"
              name="matematica"
              value={notas.matematica}
              onChange={handleInputChange}
              placeholder="Digite a nota"
            />
          </label>
        </div>
        <label className="flex flex-col gap-2">
          Redação:
          <input
            className="border-red-900 border-2 rounded"
            type="number"
            name="redacao"
            value={notas.redacao}
            onChange={handleInputChange}
            placeholder="Digite a nota"
          />
        </label>
      </form>

      {notaCalculada && (
        <div>
          <h3>Nota calculada: {notaCalculada}</h3>
          <p>{mensagem}</p>
        </div>
      )}
    </div>
  );
};

export default Simulador;
