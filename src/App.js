import React,{useState, useEffect} from 'react';
import {Button,FormControl,Input,InputLabel} from '@material-ui/core';
import './App.css';
import Message from './Message';

function App() {

const [input,setInput] = useState('');
const [messages,setMessages] = useState(["Haii","How","Where"]);
const [userName, setUserName] = useState('');
console.log(input);
console.log(messages);

useEffect(() =>{
  setUserName(prompt('Enter the Name'));
},[])

const sendMessage = (e) => {
  e.preventDefault();
setMessages([...messages,input]);
setInput('');
}

  return (
    <div className="App">
<h1>Hello World</h1>
<h2>Welcome {userName} </h2>
<form>
<FormControl>
<InputLabel>Enter Message</InputLabel>
<Input value={input} onChange={(e) => setInput(e.target.value)}/>
<Button disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>Send Message</Button>
</FormControl></form>
  {messages.map(message => <Message text={message}/>)}


    </div>
  );
}

export default App;
