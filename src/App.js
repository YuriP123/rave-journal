import React from "react";
import Header from "./components/Header";
import Main from "./components/Main"
import './App.scss'
import data from "./Data"

function App() {
  let events = data.map(item => {
    return (
      <Main
        key={item.id}
        item={item}
      />
    )
  });
  return (
    <div className="App">
        <Header/>
        <section className="events-container">
          {events}
        </section>
    </div>
  );
}

export default App;
