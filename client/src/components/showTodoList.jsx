import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "../App.scss";

export function ShowTodoList() {
    const [todo, setTodo] = useState([]);
    let history = useHistory();

    useEffect(function () {
        axios
            .get("http://localhost:8000/api/todo")
            .then((res) => {
                console.log(res.data);
                setTodo(res.data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    function handleDelete(e) {
        axios.delete(`http://localhost:8000/api/todo/${e.target.name}`);

        setTodo((data) => {
            return data.filter((todo) => todo._id !== e.target.name);
        });
    }

    return (
        <section className="container">
            <button
                className="button button-new"
                onClick={() => {
                    history.push("/create-todo");
                }}
            >
                New
            </button>
            <section className="contents">
                <h1>TODO</h1>
                <ul className="list-container">
                    {todo.map((data) => (
                        <li key={data._id}>
                            <div className="title-description">
                                <h3>{data.title}</h3>
                                <p>{data.description}</p>
                            </div>

                            <div className="button-container">
                                <button className="button" name={data._id}>
                                    edit
                                </button>
                                <button
                                    className="button"
                                    name={data._id}
                                    onClick={handleDelete}
                                >
                                    delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
}
