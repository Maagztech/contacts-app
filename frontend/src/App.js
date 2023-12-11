import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Contacts</h1>
        <div className='top'>
          <input type='text' placeholder="Add name..." />
          <input type='text' placeholder="Add contact Number..." />
          <div className="add">Add</div>
        </div>
        <div className="list">
          <Contact name="A" contact="B" />
        </div>
      </div>
    </div>
  );
}

export default App;
