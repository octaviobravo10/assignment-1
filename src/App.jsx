import React from 'react';


const items = ['Apples', 'Bananas', 'Cherries', 'Dates'];

function Header() {
  return <h1>My Grocery List</h1>;
}


function List() {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}


function App() {
  return (
    <div>
      <Header />
      <List />
      <List />
    </div>
  );
}

export default App;