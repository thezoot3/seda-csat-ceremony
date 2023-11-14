
import logo from './logo.svg';
import './App.css';

function App() {
    // 플래시 켜기
function turnOnFlashlight() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      const track = stream.getVideoTracks()[0];
      const imageCapture = new ImageCapture(track);
      const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {
        track.applyConstraints({
          advanced: [{ torch: true }]
        });
      });
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
}

// 플래시 끄기
function turnOffFlashlight() {
  navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
    .then(function(stream) {
      const track = stream.getVideoTracks()[0];
      track.applyConstraints({
        advanced: [{ torch: false }]
      });
    })
    .catch(function(err) {
      console.log('Error: ', err);
    });
}
  return (
    <div className="App">
        <button onClick={turnOnFlashlight}>키기</button>
        <button onClick={turnOffFlashlight}>끄기</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
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
