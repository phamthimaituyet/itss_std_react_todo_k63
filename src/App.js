import React from 'react'

/* スタイルシート */
import './styles/main.css';

/* コンポーネント */
import Todo from './components/Todo';
import Todo1 from './components/Todo1';

function App() {
  return (
    <div className="container is-fluid">
      <Todo />
      <Todo1 />
    </div>
  );
}

export default App;
