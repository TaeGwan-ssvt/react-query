import { useQueryClient } from '@tanstack/react-query';
import Todos from './Todos';

function App() {
  const queryClient2 = useQueryClient();
  console.log(queryClient2);

  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;
