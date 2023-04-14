import React,{useState} from 'react'
import './App.css';

function App() {
  // let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  const [currTime, setCurrTime] = useState(time)

  function updateTime(){
    time = new Date().toLocaleTimeString();
    setCurrTime(time);
  }

  setInterval(updateTime,1000)

  return (
    <div className="App">
      <h1>{currTime}</h1>
    </div>
  );
}

export default App;
