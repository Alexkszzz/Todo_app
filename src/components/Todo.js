import React, { useState } from "react";

export default function Todo(props) {
    const [isEdited, setEdited] = useState(false);
    const [newName, setnewName] = useState('')

    function handleChange(e) {
        setnewName(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.editTask(props.id, newName)
        setEdited(false)
    }
    const viewPlate = (
        <div className="todo stack-small">
            <div className="c-cb">
                <input id={props.id} type="checkbox" defaultChecked={props.completed} onChange={() => props.toggleTaskCompleted(props.id)} />
                <label className="todo-label" htmlFor={props.id}>
                    {props.action}
                </label>
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={() => setEdited(!isEdited)}>
                    Edit <span className="visually-hidden">{props.action}</span>
                </button>
                <button type="button" className="btn btn__danger" onClick={() => props.deleteTask(props.id)}>
                    Delete <span className="visually-hidden">{props.action}</span>
                </button>
            </div>
        </div>
    );

    const viewEdit = (
        <form className="stack-small">
            <div className="form-group">
                <label className="todo-label" htmlFor={props.id}>Enter new name for {props.action}</label>
                <input className="todo-text" id={props.id} type="text" onChange={handleChange} />
            </div>
            <div className="btn-group">
                <button type="button" className="btn" onClick={handleSubmit}>
                    Save <span className="visually-hidden">{props.action}</span>
                </button>
                <button type="button" className="btn btn__danger" onClick={() => setEdited(!isEdited)}>
                    Cancel <span className="visually-hidden">{props.action}</span>
                </button>
            </div>
        </form>
    )
    return <li className="todo">{isEdited ? viewEdit : viewPlate}</li>
}