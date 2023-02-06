
import  './App.css';
import Date from './components/Date.jsx';
import Job from './components/Job.jsx';
import User from './components/User.jsx';

function App() {
  const name = "Kevin";
  const isGrenn = true;

  return (
    
    <div className="App">
      <h1 style={{color: isGrenn ? "green" : "red"}}>Probando estilos</h1>
      <Date name="Kevin" lastName= "Jaramillo" email = "kjdvdevelop@gmail.com" />
      <Job salary={1300} position="Mid lever" company="Amazon"/>
      <Job salary={2500} position="Senior" company="Netflix"/>
      <Job salary={1400} position="Junior" company="Microsoft"/>
      {isGrenn && <button>This a button</button>}   {/*si es true muestra el botton  */}
      <User/>
    </div>
  );
}

export default App;
