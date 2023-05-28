import React, { useState } from 'react';

import Components from './Components';

const App = () => {

  const [password, setPassword]= useState('');

  return (
    <div className='container'>
      <div>
        <label for='password' >password:</label>

        <div className='holder-password'>
          <input type='text'
           placeholder='password...'
           id='password'
           onChange={(e)=> setPassword(e.target.value)}
           />
        </div>

        <Components 
        password={password}
        />
        
      </div>
    </div>
  );
};

export default App;