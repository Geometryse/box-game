import "./App.css";
import BoxGame from "./components/Game.jsx";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>BOX GAME</h1>
        <h3>Make all boxes light as fast as possible!</h3>
        <BoxGame />
      </header>
    </div>
  );
}

export default App;
