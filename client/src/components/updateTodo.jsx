import { useState } from "react";
import axios from "axios";
import "../App.scss";

export function UpdateTodo({ _id }) {
    const [data, setData] = useState({ title: "", description: "" });

    function handleChange(e) {
        setData((data) => ({
            ...data,
            [e.target.name]: e.target.values,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();

        const todo = { title: data.title, description: data.description };

        axios
            .put(`http://localhost:8000/api/todo/${_id}`, todo)
            .then((res) => {
                setData({ title: "", description: "" });
                console.log(res.data.message);
            })
            .catch((err) => {
                console.log("Failed to update todo");
                console.log(err.message);
            });
    }

    return (
        <section className="update-container">
            {/*the container will contain background overlay*/}
            <div className="update-contents">
                <form className="form-container" onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        name="title"
                        className="input"
                        onChange={handleChange}
                    />
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        name="description"
                        className="input"
                        onChange={handleChange}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </section>
    );
}
