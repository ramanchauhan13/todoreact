import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';


function App() {

const [inputText, setInputText] = useState();
const [tasks, setTasks] = useState([]);

let addTask = ()=>{
  if(inputText.trim() !== ''){
  setTasks((oldTask)=>{
    return [...oldTask, inputText];
  });
  setInputText('');
}
else{
  alert("Write Task First");
}
};

const handleKeyPress = (event)=>{
  if(event.key==="Enter"){
    addTask()
  }
}

  return (
    <>
    <MainContainer className='main'>
      <div className='centerDiv'>
        <h1>TO-DO LIST</h1><br/ >
       
        <div className='inputBox'>
                  <input 
                  type='text' 
                  placeholder='Add A Task' 
                  onChange={(e)=>setInputText(e.target.value)} 
                  value={inputText}
                  onKeyPress={handleKeyPress}
                  ></input>

        <button onClick={addTask}>ADD TASK</button>
        </div><br/ >
        
      
        <ul>
        {
          tasks.map( (value)=> {
          return <li><button>X</button>{value}</li>
          })
        }
        </ul>
        
      </div>
    </MainContainer>
    </>
  );
}

export default App;

let MainContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: blueviolet;
  display: grid;
  place-items: center;

.centerDiv{
  border: 2px solid red;
  height: 60%;
  width: 25%;
  padding: 20px;
}

.inputBox{
  height: 35px;
  display: flex;
  justify-content: center;
  gap: 20px;
}

input{
  width: 95%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
}

h1{
  text-align: center;
}

ul{
  list-style-type: none;
  border: 2px solid red;
}

li{
  border: 2px solid black;
  margin-bottom: 5px;
}

button{
  background-color: red;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  cursor: pointer;
}
`
