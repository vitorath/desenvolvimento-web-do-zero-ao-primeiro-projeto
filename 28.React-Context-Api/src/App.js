import Counter from './components/Counter';
import Header from './components/Header';

import { CounterProvider } from './CounterContext';

import './App.css'

function App() {
  return (
    <CounterProvider>
      <Header />
      <Counter />
    </CounterProvider>
  );
}

export default App;
