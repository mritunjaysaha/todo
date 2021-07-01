import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.scss";
import axios from "axios";

export function CreateTodo() {
    const [data, setData] = useState({ title: "", description: "" });

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
        <section className="form-container">
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    value={data.title}
                    onChange={handleChange}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    name="description"
                    value={data.description}
                    onChange={handleChange}
                />
                <button type="submit">create todo</button>
            </form>
        </section>
    );
}
