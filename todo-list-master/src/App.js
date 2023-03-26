import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Request from "./components/fetch/Request";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

function App() {
    let datelocal = localStorage.getItem("dateitem")
        ? JSON.parse(localStorage.getItem("dateitem"))
        : [];
    let darklightlocal = localStorage.getItem("darklight")
        ? JSON.parse(localStorage.getItem("darklight"))
        : [];
    const [data, setData] = useState(datelocal);
    const [todo, setTodo] = useState("");
    const [time, setTime] = useState(false);
    const [edititemText, setedititemText] = useState(false);
    const [edititemID, setedititemID] = useState(0);
    const [darkMode, setdarkMode] = useState(darklightlocal);

    useEffect(() => {
        localStorage.setItem("darklight", JSON.stringify(darkMode));
    }, [darkMode]);

    useEffect(() => {
        console.log("hello useEffect");
        localStorage.setItem("dateitem", JSON.stringify(data));
    }, [data]);

    const selectData = (id) => {
        const newData = data.map((item) => {
            if (item.id === id) {
                return { ...item, selected: !item.selected };
            }
            return item;
        });
        setData(newData);
    };

    // form
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.trim().length !== 0) {
            if (edititemText) {
                let editNewData = data.map((data) => {
                    return data.id === edititemID
                        ? { ...data, text: todo }
                        : data;
                });
                setData(editNewData);
                setedititemText(false);
                setTodo("");
            } else {
                let item = {
                    id: uuidv4(),
                    text: todo,
                    selected: false,
                };
                setData((prev) => {
                    return [...prev, item];
                });
                setTodo("");
            }
        } else {
            setTime(true);
            setTimeout(() => {
                setTime(false);
            }, 1000);
        }
    };

    const deleteData = (id) => {
        const newData = data.filter((item) => {
            return item.id !== id;
        });
        setData(newData);
        setTodo("");
        setedititemText(false);
    };

    // edit function
    function editItem(index) {
        const editData = data.filter((item) => {
            if (item.id === index) return item;
        });

        setedititemID(index);
        setedititemText(true);
        setTodo(editData[0].text);
    }

    // dark mode function
    const DarkMode = (mode) => {
        if (mode) {
        }
    };

    return (
        <div className={darkMode ? "dark-mode App" : "App"}>
            <div className="App_container">
                <div className="container">
                    <div className="dark_ligth_mode">
                        <span
                            onClick={() => {
                                setdarkMode(false);
                            }}
                            className={
                                darkMode
                                    ? "dark_icon dark_icon-active"
                                    : "dark_icon"
                            }
                        >
                            <FontAwesomeIcon icon={faMoon} />
                        </span>

                        <span
                            onClick={() => {
                                setdarkMode(true);
                            }}
                            className={
                                darkMode
                                    ? "light_icon"
                                    : "light_icon light_icon-active"
                            }
                        >
                            <FontAwesomeIcon icon={faSun} />
                        </span>
                    </div>
                    <h1 className="title">Daily To Do List</h1>
                    <Form
                        handleSubmit={handleSubmit}
                        setTodo={setTodo}
                        todo={todo}
                    />
                    {time && <p className="warning">Oops not text</p>}
                    <TodoList
                        data={data}
                        selectData={selectData}
                        deleteData={deleteData}
                        editItem={editItem}
                    />
                    <hr />
                    <footer>
                        <p className="items">Items: {data.length}</p>
                        <button
                            className="clear"
                            onClick={() => {
                                setData([]);
                            }}
                        >
                            Clear All
                        </button>
                    </footer>
                </div>
            </div>
        </div>
    );
}

export default App;
