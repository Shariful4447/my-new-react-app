import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks=['Anawar','Rubel','Salman Muqtadir']
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
        {/* <img src={logo} className="App-logo" alt="logo" />
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
        <Person name={nayoks[0]} Nayika="Moushumi"></Person>
        <Person name="Jasim Nayok" Nayika="Moyori"></Person>
        <Person name="Umar sani" Nayika="Dilruba khan"></Person>
         */}

         <p>I am React person</p>
         <Person name="Munna Bhai" job="Football khele"></Person>
         <Person name="Masum" job="Khela dekhe"></Person>
      </header>
    </div>
  );
}

// function Person(props){
//   // const personStyle={
//   //   border:'2px solid red',
//   //   margin:'10px'
//   // }
//   return(
//   <div style={{border:'2px solid yellow',margin:'10px'}}>
//   <h1>Nayok : {props.name} </h1>
//   <h3>Hero of :{props.Nayika} </h3>
//   </div>)
  
// }
// // function Person2(){
// //   const personStyle={
// //     border:'2px solid red',
// //     margin:'10px'
// //   }
// //   return(
// //   <div style={personStyle}>
// //   <h1>Name : sakib khan </h1>
// //   <h3>Hero of the year</h3>
// //   </div>)
  
// // }


function Person(props){
  return(
  <div style={{border:'2px solid yellow',width:'400px'}}>
    <h3>My Name : {props.name}</h3>
    <p>My Profession: {props.job} </p>

  </div>)
}

export default App;
