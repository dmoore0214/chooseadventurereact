
import './App.css';
import { Link } from 'react-router-dom';
import name from './Start';
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Choose Your Adventure</h1>
        <ButtonLink to="/start">Click Me To Start!</ButtonLink>
        <p>{name}</p>
      </header>
    </div>
  );
}

function ButtonLink({ to , children}){
  return <Link to={to}><button>{children}</button></Link>
}



export default App;
