
import AppHeader from "../app-header";
import ItemStatusFilter from "../item-status-filter";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import "./app.css"

const App = () => {
  const todoData = [
    { label: "drink tea", important: false, id: 1 },
    { label: "drink coffe", important: false, id: 2 },
    { label: "programming", important: true, id: 3 },
  ]
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />
      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>

      <TodoList todos={todoData} />
    </div>
  )
}

export default App