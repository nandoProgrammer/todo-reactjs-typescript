import React, { useState } from 'react';

const App: React.FC = () => {

    const [todos, setTodos] = useState<string[]>([]);
    const [value, setValue] = useState<string>('');    
 
    return(
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            setTodos([...todos, value]);
          }}
        >
            <input type="text" onChange={event => setValue(event.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
        <ul>
        {
          todos.map((item, index) => (
            <li key={index}>{item}</li>
          ))
        }
        </ul>
      </div>
    )
};

export default App;