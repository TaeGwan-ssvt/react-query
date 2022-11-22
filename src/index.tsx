import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider, useQueryClient } from '@tanstack/react-query';
import App from './App';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
// https://kyounghwan01.github.io/blog/React/react-query/basic/#usequery
