import TodoListItem from "./todo-list-item"

const TodoList = ({todos}) => {
	const elements = todos.map((item)=>{
		return(
			<li><TodoListItem {...item}/></li>
		)
	})
	return(
		<div>
			<ul>
				{elements}
			</ul>
		</div>
	)
}

export default TodoList