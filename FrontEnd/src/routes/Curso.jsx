import { useState } from 'react';

const Curso = () => {
  const [campus, setCampus] = useState('');
  const [curso, setCurso] = useState('');
  const [tipoGraduacao, setTipoGraduacao] = useState('');
  const [turno, setTurno] = useState('');

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    setCampus(value);
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
    <div className="w-screen h-screen bg-amber-200">
      <form className="container flex items-center justify-center flex-col gap-4 h-screen">
        <img src="/vite.svg" alt="Logo" className="w-32 h-32" />
        <label className="flex flex-col gap-2 w-1/2">
          Campus:
          <select className="border-amber-900 w-full border-2 rounded" value={campus} onChange={handleSelectChange}>
            <option value="">Selecione um campus</option>
            {/* Aqui você vai adicionar as opções de campus */}
          </select>
        </label>
        <label className="flex flex-col gap-2 w-1/2">
          Curso:
          <select className="border-amber-900 w-full border-2 rounded" value={curso} onChange={handleSelectChange}>
            <option value="">Selecione um curso</option>
            {/* Aqui você vai adicionar as opções de cursos */}
          </select>
        </label>
        <label className="flex flex-col gap-2 w-1/2">
          Tipo de Graduação:
          <select
            className="border-amber-900 w-full border-2 rounded"
            value={tipoGraduacao}
            onChange={handleSelectChange}
          >
            <option value="">Selecione um tipo de graduação</option>
            {/* Aqui você vai adicionar as opções de tipo de graduação */}
          </select>
        </label>{' '}
        <label className="flex flex-col gap-2 w-1/2">
          Turno:
          <select className="border-amber-900 w-full border-2 rounded" value={turno} onChange={handleSelectChange}>
            <option value="">Selecione um turno</option>
            {/* Aqui você vai adicionar as opções de turnos */}
          </select>
        </label>
        <button
          className=" text-white px-4 py-2 rounded bg-amber-600 hover:bg-amber-700"
          type="button"
          onClick={handleSimular}
        >
          Simular
        </button>
      </form>
    </div>
  );
};

export default Curso;
