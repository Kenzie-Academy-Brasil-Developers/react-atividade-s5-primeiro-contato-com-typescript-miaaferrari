import React, { useState } from 'react';
import './App.css';
import { Card } from './components/Card';
import { Input } from './components/Input';
import { useList } from './providers/Providers';

function App() {
  const [name, setName] = useState("");
  const [hobby, setHobby] = useState("");
  const [stringAge, setStringAge] = useState("");

  const { createNewUser, newUser, list } = useList()

  const handleClick = (name: string, hobby: string, stringAge: string) => {
    const age = Number(stringAge);
    const user = {name, hobby, age};
    createNewUser(user);
  }

  return (
    <main className="App-header">
      <section className='formBox'>
        <h1>Register</h1>
        <Input placeholder='nome' label='Nome' onChange={(e) => setName(e.target.value)} />
        <Input placeholder='hobby' label='Hobby' onChange={(e) => setHobby(e.target.value)}/>
        <Input placeholder='idade' label='Idade' onChange={(e) => setStringAge(e.target.value)}/>
        <button onClick={() => handleClick(name, hobby, stringAge)}>Enviar</button>
      </section>
      <section>
        <ul>
        {list.map((item, index) => (
          <li key={index}>
          <Card age={item.age} hobby={item.hobby} name={item.name} />
          </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
