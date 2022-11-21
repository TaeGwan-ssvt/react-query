import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';

const fetchTodoList = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json());
  return data;
};

function Todos() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchTodoList().then((res) => setData(res));
  }, []);

  return (
    <div />
  );
}

export default Todos;
