import React, { useState } from "react"


function Form(props) {
    const [task, setTask] = useState("");

    function handleChange(e) {
        setTask(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault();
        props.addTask(task);
        setTask("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>
                <label htmlFor="new-todo">What needs to be done?</label>
            </h2>
            <input type="text" id="new-todo" value={task} onChange={handleChange} />
            <button type="submit" className="btn btn__primary btn__lg">Add</button>
        </form>
    );
}

export default Form;