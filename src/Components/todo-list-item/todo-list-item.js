import { Component } from "react"
import "./todo-list-item.css"

export default class TodoListItem extends Component {
	render(){
		const { label, important } = this.props
		const style = {
			color: important ? 'tomato' : 'grey',
			fontWeight: important ? 'bold' : 'normal'
		}
		return (
			<span className="todo-list-item">
				<span
					className="todo-list-item-label"
					style={style}>
					{label}
				</span>

				<button type="button"
					className="btn btn-outline-success btn-sm float-right">
					<i className="fa fa-exclamation" />
				</button>

				<button type="button"
					className="btn btn-outline-danger btn-sm float-right">
					<i className="fa fa-trash-o" />
				</button>
			</span>
		)
		
	}
}