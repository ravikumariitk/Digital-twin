import './App.css';
import Header from "./components/header"
import Todos from './components/Machines';
import Footer from './components/footer';
import React, { useState} from 'react';
import Add from './components/Add';
function App() {
  const deleteItem=(machine)=>{
    setMachines(Machines.filter((e)=>{
      return e!==machine;
    }));
  }
  const addTodo=(Name,Id,temp,X,Y)=>{
    let sr=Machines.length;
     const item={};
     if(Name)
     {
      item["Name"]=allMachine[sr].Name;
     }
     else{
      item["Name"]="NA";
     }

     if(Id)
     {
       item['Id']=allMachine[sr].Id;
     }
     else{
      item['Id']="NA";
     }
     if(temp) 
     {
       item['temp']=allMachine[sr].temp;
     }
     else{
      item['temp']="NA";
     }
     if(X)
     {
       item['X']=allMachine[sr].X;
     }
     else{
       item['X']="NA";
     }
     if(Y) 
     {
       item['Y']=allMachine[sr].Y;
     }
     else{
      item['Y']="NA";
     }
     setMachines([...Machines,item]);
  }
  const [Machines,setMachines] = useState([]);
  const allMachine=[
    {
      "Name":"Machine12",
      "Id":"527HRG&",
      "temp":"123.45",
      "X":"1754.34",
      "Y":"456.34"
    },
    {
      "Name":"Machine2",
      "Id":"TGG67",
      "temp":"123.45",
      "X":"1754.34",
      "Y":"456.34"
    },
    {
      "Name":"Machine3",
      "Id":"DTYGFG67FGH&",
      "temp":"123.45",
      "X":"1754.34",
      "Y":"456.34"
    },
    {
      "Name":"Machine4",
      "Id":"456GH6",
      "temp":"123.45",
      "X":"1754.34",
      "Y":"456.34"
    },
    {
      "Name":"Machine5",
      "Id":"456FGH6",
      "temp":"123.45",
      "X":"1754.34",
      "Y":"456.34"
    }
  ]
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