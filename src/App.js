
import { useState } from 'react';
import './App.css';
import News from './components/News';


function App() {
  // Create a state to store the selected category
  const[category,setCategory] =useState("general");

  return (
    <div className="App">
      <h1>My news Application</h1>
      {/* Buttons to change the category */}
      <button onClick={()=> setCategory("general")}>General</button>
      <button onClick={()=> setCategory("technology")}>Technology</button>
      <button onClick={()=> setCategory("sports")}>Sports</button>
      {/* Passing the category to News */}
      <News category={category}/>
    </div>
  );
}

export default App;
