import { useQuery, UseQueryResult } from '@tanstack/react-query';

interface DataType {
  id: number
  name?: string
  age?: string
}

const fetchTodoList = async () => {
  const data = await fetch('http://localhost:4000/user')
    .then((res) => res.json());
  return data;
};

function Todos() {
  const { data } = useQuery<DataType[]>(['todos'], fetchTodoList);
  console.log(useQuery<DataType[]>(['todos'], fetchTodoList));

  // const result = useQuery<DataType[]>(['todos'], fetchTodoList);

  // if (!data) return null;
  return (
    <div>
      {data?.map((el) => <div key={el.name}>{el.name}</div>)}
      {/* {data && <div>{data.age}</div>} */}
    </div>
  );
}

export default Todos;

// 데이터 패칭시 처음에 undefined인거 해결법
// 데이터가 배열이면 옵셔널체이닝
// 조건문 early return
// &&연산자 사용
