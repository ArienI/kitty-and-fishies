import React from 'react';
import Main from '../Main/Main';

function App() {
  const appStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100vw',
    backgroundColor: '#f4eedb'
  };

  return (
    <div style={appStyle}>
      <Main />
    </div>
  );
}

export default App;