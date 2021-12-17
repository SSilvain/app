const TodoListItem = ({ label, important }) => {
	const styleItem = {
		color: important ? 'tomato': 'grey'
	}
	return (
		<div>
			<span style={styleItem}>{label}</span>
		</div>
	)
}

export default TodoListItem