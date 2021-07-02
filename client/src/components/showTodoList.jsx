import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../App.scss";

export function ShowTodoList() {
    const [todo, setTodo] = useState([]);

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

    return (
        <section className="container">
            <section className="list-container">
                <h1>TODO</h1>
                <ul>
                    {todo.map((data) => (
                        <li key={data._id}>
                            <h3>{data.title}</h3>
                            <p>{data.description}</p>
                        </li>
                    ))}
                </ul>
                <Link to="/create-todo">New</Link>
            </section>
        </section>
    );
}
