/**
 * useLocalStorage - React hook para sincronizar estado com localStorage
 *
 * @param key Chave do localStorage
 * @param initialValue Valor inicial
 * @returns [valor, setValor]
 *
 * Exemplo de uso:
 * const [todos, setTodos] = useLocalStorage('todos', []);
 */
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      // Falha silenciosa
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;