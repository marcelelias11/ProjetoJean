import { useState, useEffect } from "react";

export const NoteLocalStorage = (key, initialValue) => {
  // Função para obter o valor inicial do sessionStorage
  const getStoredValue = () => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  console.log(key);

  // Usando useState para gerenciar o estado
  const [value, setValue] = useState(getStoredValue);

  // Efeito para atualizar o sessionStorage sempre que o valor mudar
  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
