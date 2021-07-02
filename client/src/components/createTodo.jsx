import { useState } from "react";
import { useHistory } from "react-router-dom";

import "../App.scss";
import axios from "axios";

export function CreateTodo() {
    const [data, setData] = useState({ title: "", description: "" });
    let history = useHistory();

    function handleChange(e) {
        setData((data) => ({ ...data, [e.target.name]: e.target.value }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const todo = {
            title: data.title,
            description: data.description,
        };

        console.log({ todo });
        axios
            .post("http://localhost:8000/api/todo", todo)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Error couldn't create TODO");
                console.log(err.message);
            });
    }

    return (
        <section className="container">
            <button
                type="button"
                onClick={() => {
                    history.push("/");
                }}
                className="button button-back"
            >
                back
            </button>
            <form onSubmit={handleSubmit} className="form-container" noValidate>
                <label className="label" htmlFor="title">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                    className="input"
                />
                <label className="label" htmlFor="description">
                    Description
                </label>
                <input
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                    className="input"
                />
                <button type="submit" className="button">
                    create todo
                </button>
            </form>
        </section>
    );
}
