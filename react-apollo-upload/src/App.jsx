import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Uploads from './components/Uploads';

function App() {
  return (
    <div className='App'>
      <h1>Upload files effortlessly</h1>
      <div className='container'>
        <Form />
        <Uploads />
      </div>
    </div>
  );
}

export default App;
