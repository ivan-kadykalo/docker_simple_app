import React, { useState, useEffect } from 'react';

function App() {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    fetch('http://localhost:5000/api')
      .then((response) => response.text())
      .then((data) => setMessage(data))
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <div>
      <h1>Server response:</h1>
      
      <h2>{message}</h2>
    </div>
  );
}

export default App;
