import './App.css';

const greet=()=>alert('hello')

function App(props) {
  return (
    <div>
    <h1>Hello,{props.name}!</h1>
    <button onClick={greet}>click me</button>
    </div>
  );
}

export default App;
