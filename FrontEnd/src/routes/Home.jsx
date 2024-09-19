import React from 'react';

const Home = () => {
  return (
    <div className="w-screen h-screen bg-amber-200">
      <div className="container flex items-center justify-center flex-col gap-4 h-screen">
        <img src="/vite.svg" alt="Logo" className="w-32 h-32" />
        <h1 className="text-3xl font-bold text-sky-700">Nota Fácil</h1>
        <a href="/curso">
          <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
            Primeiros Passos
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
