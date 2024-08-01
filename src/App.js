import './App.css';
import styled from 'styled-components';
import React, { useState } from 'react';
import TaskLists from './TaskLists';


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

//confusion
const deleteTask = (id)=>{
  console.log("raman")
  setTasks((oldTask)=>{
    return oldTask.filter((element,index)=>{
      return index !== id;
    })
  })
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

        <button className='button1' onClick={addTask}>ADD TASK</button>
        </div><br/ >
        
      
        <ul>
        {
          tasks.map( (value,index)=> {
          return <TaskLists
          value={value}
          key={index}
          id={index}
          deleteTask={deleteTask}
           />
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
  height: 70%;
  width: 30%;
  padding: 20px;
  background-color: white;
  border: 5px double red;
}

.inputBox{
  height: 35px;
  display: flex;
  justify-content: center;
  gap: 10px;
  
}

input{
  padding-left:6px;
  width: 95%;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
}

input:focus{
  color:black;
  font-size: large;
  font-weight: bold;
}

h1{
  text-align: center;
}

.listBox{
  display: flex;
  gap: 8px;
}

ul{
  list-style-type: none;
}

li{
  font-size: larger;
  margin-bottom: 5px;
  padding: 0 4px;
  color: white;
  background-color: blueviolet;
  
}

.button1{
  background-color: red;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  border-radius: 30px;
  cursor: pointer;
  width: 30%;
  transition: 0.5s background ease-in;
}

.button2{
  background-color: red;
  color: white;
  font-weight: bold;
  border: 1px solid white;
  padding: 1px 4px;
  margin-bottom: 5px;
  cursor: pointer;
}

.button1:hover,.button2:hover{
  background-color: aliceblue;
  color: black;
  border: 2px solid black;
  transition: 0.3s background ease-in;
}

@media (max-width: 480px){
  .centerDiv{
    width: 85%;
    height: 55%;
    padding: 10px;
  }
}
`
