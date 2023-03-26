import React, { useState } from "react";
import "./Form.css";
function Form({ handleSubmit, setTodo, todo }) {
    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                id="input"
                className="input"
                type="text"
                placeholder="Add new list item"
                autoComplete="off"
                onChange={(e) => {
                    setTodo(e.target.value);
                }}
                value={todo}
            />

            <button className="btn" type="submit">
                Add
            </button>
        </form>
    );
}

export default Form;
