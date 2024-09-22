import './App.css'
import Grid from './components/Grid/Grid';


function App() {
  return (
    <>
      <div className="main">
        <div className="title">
          <h1>Tic Tac Toe</h1>
        </div>
      </div>  
      <Grid numberOfCards={9}/>
    </>
  );
}

export default App
