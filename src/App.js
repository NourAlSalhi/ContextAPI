import GlobelState from './utils/context/GlobelContext';
import './App.css';

function App() {
  return (
    <div className="App">
        <GlobelState>
        <h1>Hello World</h1>
      </GlobelState>
    </div>
  );
}

export default App;
