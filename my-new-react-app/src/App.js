import logo from './logo.svg';
import './App.css';

function App() {
  var person = {name:"Akkas",
          job: "Singer" };
  var person2 = {
    name: "kakoli",
    job:"kokil konthi"
  } ;  
  var style={
    color: 'red',
    backgroundColor:'green'
  };     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 class='' style={style}>The Sum of Two Numbers : {2+4} & Name Is : {person.name + ' ' + person.job}</h1>
        <p>New App startet Happy Learning </p>
        <h3>Singer : {person2.name +' '+ person2.job}</h3>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>new Name</h1>
        <Person></Person>
        <Person2></Person2>
        <Person></Person>
        
      </header>
    </div>
  );
}

function Person(){
  // const personStyle={
  //   border:'2px solid red',
  //   margin:'10px'
  // }
  return(
  <div style={{border:'2px solid yellow',margin:'10px'}}>
  <h1>Name : sakib khan </h1>
  <h3>Hero of the year</h3>
  </div>)
  
}
function Person2(){
  const personStyle={
    border:'2px solid red',
    margin:'10px'
  }
  return(
  <div style={personStyle}>
  <h1>Name : sakib khan </h1>
  <h3>Hero of the year</h3>
  </div>)
  
}

export default App;
