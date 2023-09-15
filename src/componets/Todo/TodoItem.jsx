
import './TodoItem.css'

function TodoItem(props) {
    let { id, completed, label } = props

    return (
        <li className="todo-item">
            <div className='flex-container'>
                <input
                    checked={completed}
                    onChange={() => (props.toggleTaskCompleted(id))}
                    type="checkbox"
                />
                <label> {label} </label>
            </div>
            <div>
                <button className='item-button' onClick={() => (props.deleteTodo(id))}>Delete</button>
                <button className='item-button' onClick={() => (props.editTodo(id))}>Edit</button>
            </div>
        </li>
    )
}

export default TodoItem