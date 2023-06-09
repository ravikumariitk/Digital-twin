import './App.css';
import Header from "./components/header"
import Todos from './components/Machines';
import Footer from './components/footer';
import React, { useState} from 'react';
import Add from './components/Add';
function App() {
  let sr=0;
  const deleteItem=(machine)=>{
    setMachines(Machines.filter((e)=>{
      return e!==machine;
    }));
  }
  const addTodo=(Name,Id,temp,X,Y)=>{
     const item={
      id:{sr},
      Name:Name,
      Id:Id,
      temp:temp,
      X:X,
      Y:Y
     }
     sr=sr+1;
     setMachines([...Machines,item]);
  }
  const [Machines,setMachines] = useState([]);
  return (
    <>
    <Header title="toDO" searchBar={false}/>
    <Add addTodo={addTodo}/>
    <Todos list={Machines} deleteItem={deleteItem}  />
    {/* <Footer/> */}
     </>
  );
}
export default App;