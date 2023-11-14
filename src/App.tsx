
import logo from './logo.svg';
import './App.css';

function App() {
    const element = document.documentElement; // 전체 화면으로 보여줄 요소 선택
    if (element.requestFullscreen) {
        element.requestFullscreen().then(r => console.log); // 전체 화면 진입 요청
    }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
