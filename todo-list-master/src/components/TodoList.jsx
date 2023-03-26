import React from "react";
import "./TodoList.css";

// fontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePen, faTrash } from "@fortawesome/free-solid-svg-icons";
// import Icon from './Icon';
function TodoList({ data, selectData, deleteData, editItem }) {
    return (
        <ul className="list">
            {data &&
                data.map((todo) => {
                    return (
                        <li className="list-item" key={todo.id}>
                            <div
                                className={"item-text"}
                                onClick={() => {
                                    selectData(todo.id);
                                }}
                            >
                                {todo.selected ? (
                                    <div className="circle select">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="32"
                                            height="32"
                                            x="0"
                                            y="0"
                                            version="1.1"
                                            viewBox="0 0 96 96"
                                            xmlSpace="preserve"
                                        >
                                            <path
                                                fill="#6BBE66"
                                                fillRule="evenodd"
                                                d="M48 0c26.51 0 48 21.49 48 48S74.51 96 48 96 0 74.51 0 48 21.49 0 48 0zM26.764 49.277c.644-3.734 4.906-5.813 8.269-3.79.305.182.596.398.867.646l.026.025c1.509 1.446 3.2 2.951 4.876 4.443l1.438 1.291 17.063-17.898c1.019-1.067 1.764-1.757 3.293-2.101 5.235-1.155 8.916 5.244 5.206 9.155L46.536 63.366c-2.003 2.137-5.583 2.332-7.736.291-1.234-1.146-2.576-2.312-3.933-3.489-2.35-2.042-4.747-4.125-6.701-6.187-1.173-1.172-1.679-3.091-1.402-4.704z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                    </div>
                                ) : (
                                    <div className="circle"></div>
                                )}
                                <p>{todo.text}</p>
                            </div>

                            <div className="list_icons">
                                {/* edit */}
                                <span
                                    className="edit_item"
                                    onClick={() => editItem(todo.id)}
                                >
                                    <FontAwesomeIcon icon={faFilePen} />
                                </span>

                                {/* delete */}
                                <span
                                    className="delete_item"
                                    onClick={() => {
                                        deleteData(todo.id);
                                    }}
                                >
                                    <FontAwesomeIcon icon={faTrash} />
                                </span>
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
}

export default TodoList;
