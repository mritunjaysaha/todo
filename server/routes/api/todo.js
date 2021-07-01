const express = require("express");

const router = express.Router();

const Todo = require("../../models/todo");

/**
 * @route GET api/todo
 * @description get all todos
 * @access public
 */

router.get("/", (req, res) => {
    Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
                .status(404)
                .json({ message: "no todos found", error: err.message })
        );
});

/**
 * @route POST api/todo
 * @description Add a new TODO
 * @access public
 */

router.post("/", (req, res) => {
    Todo.create(req.body)
        .then((data) => {
            console.log({ data });
            res.json({ message: "todo added successfully", data });
        })
        .catch((err) =>
            res.status(400).json({
                message: "unable to add new todo",
                error: err.message,
            })
        );
});

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", (req, res) => {
    Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((todo) => res.json({ message: "updated successfully", todo }))
        .catch((err) =>
            res
                .status(400)
                .json({ error: "unable to update todo", message: err.message })
        );
});

/**
 * @route DELETE api/todo/:id
 * @description delete todo by id
 * @access public
 */

router.delete("/:id", (req, res) => {
    Todo.findByIdAndRemove(req.params.id, req.body).then((data) =>
        res
            .json({ message: "todo deleted successfully", data })
            .catch((err) =>
                res
                    .status(404)
                    .json({ error: "book not found", message: err.message })
            )
    );
});

module.exports = router;
