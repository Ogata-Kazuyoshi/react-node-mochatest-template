import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import dbApi from './api/getData';

function App() {
  const [count, setCount] = useState(0);
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');

  const clickGetHandler = async () => {
    console.log('clicked');
    const res = await dbApi.getDB();
    console.log('res : ', res);
  };

  const nameChange = (e) => {
    setUsername(e.target.value);
  };
  const descriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = async () => {
    const res = await dbApi.postDB({ name: username, description });
    console.log('res : ', res);
  };
  return (
    <>
      <h1>開発時の雛形を作ります。</h1>
      <p>
        <button onClick={clickGetHandler}>データゲットボタン</button>
      </p>
      <div>
        <br />
        <br />
        <div>
          <label htmlFor="">name</label>
          <input type="text" onChange={nameChange} />
        </div>
        <div>
          <label htmlFor="">description</label>
          <input type="text" onChange={descriptionChange} />
        </div>
        <div>
          <button onClick={submitHandler}>提出！！！</button>
        </div>
      </div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
