import React, { useEffect, useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Form from './components/Form';

import {Sub} from './types'
interface AppState{
  subs: Sub[]
  newSubsNumber: 0
}

const initialState = [
  {
    nick: 'Aaron',
    subMonths : 3, 
    avatar: 'https://i.pravatar.cc/150?u=Aaron',
    description: 'Aaron hace de moderador'
  },
  {
    nick: 'Antonio',
    subMonths : 7, 
    avatar: 'https://i.pravatar.cc/150?u=Antonio',
  }
]

function App() {
  // entre llaves estoy tipando el tipo de dato
  const [subs , setsubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setsubs(initialState)
  }, [])
  
  const handleNewSub = (newSub: Sub):void => {
    setsubs(subs => [...subs, newSub])
  }

  return (
    <div className="App" ref={divRef}>
      <h1>Harold Subs</h1>
      < List subs={subs}/>
      <Form onNewSub={handleNewSub}/>
    </div>
  );
}

export default App;
