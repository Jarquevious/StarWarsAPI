import './App.css';
import Home from './components/Home';
import StarWars from './components/StarWars'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Home />
       <StarWars />
      </header>
    </div>
  );
}

export default App;
