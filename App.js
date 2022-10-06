import { ContextProvider } from './Components/Context';
import Index from './Components/Index';

export default function App() {

  return (
    <ContextProvider>
      <Index/>
    </ContextProvider>
  );
}