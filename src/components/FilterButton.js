import React from "react"

function FilterButton(props) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed={props.is_pressed} onClick={() => props.setFilter(props.status)}>
            <span className="visually-hidden">Show</span>
            <span>{props.status} </span>
            <span className="visually-hidden">tasks</span>
        </button>)
}

export default FilterButton;