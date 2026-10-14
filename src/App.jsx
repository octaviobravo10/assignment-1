import { useState } from 'react';

const initialItems = ['Apples', 'Bananas', 'Cherries', 'Dates'];

const Header = () => {
  return <h1>My Grocery List & Counter</h1>;
};

const Search = ({ searchTerm, onSearch }) => {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
};

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

const Counter = ({ title }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset} style={{ marginLeft: '8px' }}>Reset</button>
    </div>
  );
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = initialItems.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <Search searchTerm={searchTerm} onSearch={handleSearch} />
      <List items={filteredItems} />
      <p>Searching for: {searchTerm}</p>
      <hr />
      <Counter title="Interactive Counter" />
    </div>
  );
};

export default App;