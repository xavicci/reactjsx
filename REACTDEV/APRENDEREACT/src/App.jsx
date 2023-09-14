import './App.css'
import './button.css'
import './avatar.css'
import React, { useState } from 'react';


const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
};

function MyButton(){
  const [counter, setCounter] = useState(0);

  const onClick = () => {
  setCounter(counter+1);
  }

  return (
    <button 
    className='button'
    onClick={onClick}
    >
    Contador : {counter}
    </button>
  );
}

export const App = () => {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>

      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
      />
      <MyButton/>
      <MyButton/>
      <MyButton/>
    </div>
  );
}