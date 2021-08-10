/* using id to style*/
import './App.css';
function App(props) {
  return (
    <div id="content">
    <h1>Hello,{props.name}!</h1>
    <button>click me</button>
    </div>
  );
}

export default App;
/* content of App.css*/
#content{
  text-align:center;
}

/* using class to style*/
import './App.css';
function App(props) {
  return (
    <div className="content">
    <h1>Hello,{props.name}!</h1>
    <button>click me</button>
    </div>
  );
}
/* content of App.css*/
.content{
  text-align:center;
}
