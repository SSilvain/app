import React from "react";
import ReactDOM from "react-dom";
import AppHeader from "./Components/app-header";
import SearchPanel from "./Components/search-panel";
import TodoList from "./Components/todo-list";

const App = () => {
  const todos = [
    {label: "drink tea", important: false},
    { label: "drink coffe", important: false},
    { label: "programming", important: true},
  ]
  return(
    <div>
      <AppHeader/>
      <SearchPanel/>
      <TodoList todos={todos}/>
    </div>
  )
}


ReactDOM.render(<App/>,document.getElementById('root'));