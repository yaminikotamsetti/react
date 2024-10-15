import React from 'react';
import './App.css';
import DataList from './DataList';  // Import the DataList component

function App() {
  return (
    <div className="App">
      <h1>API Data List</h1>
      <DataList />  {/* Display the DataList component */}
    </div>
  );
}

export default App;
