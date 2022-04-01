import React from "react"

function FilterButton({ status }) {
    return (
        <button type="button" className="btn toggle-btn" aria-pressed="true">
            <span className="visually-hidden">Show</span>
            <span>{status} </span>
            <span className="visually-hidden">tasks</span>
        </button>)
}

export default FilterButton;