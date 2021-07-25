const express = require("express");

const router = express.Router();

const {
    getAllTodo,
    postCreateTodo,
    putUpdateTodo,
    deleteTodo,
} = require("../controllers/todo");

/**
 * @route GET api/todo
 * @description get all todos
 * @access public
 */

router.get("/", getAllTodo);

/**
 * @route POST api/todo
 * @description Add a new TODO
 * @access public
 */

router.post("/", postCreateTodo);

/**
 * @route PUT api/todo/:id
 * @description update todo
 * @access public
 */
router.put("/:id", putUpdateTodo);

/**
 * @route DELETE api/todo/:id
 * @description delete todo by id
 * @access public
 */

router.delete("/:id", deleteTodo);

const User = require("../models/user");
const Todo = require("../models/todo");

router.post("/user", (req, res) => {
    User.create(req.body)
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: "error", error: err.message }));
});

router.post("/create/:userId", (req, res) => {
    const newTodo = new Todo(req.body);
    newTodo.save();

    User.findByIdAndUpdate(
        req.params.userId,
        { $push: { todo: newTodo._id } },
        { new: true, upsert: true },
        (err, user) => {
            if (err) {
                res.status(400).json({ message: "Error" });
            }

            res.json({ user });
        }
    );
});

router.get("/all/:userId", (req, res) => {
    User.findById(req.params.userId)
        .populate("todo")
        .exec((err, user) => {
            if (err) {
                res.status(400).json({
                    message: "failed to populate",
                    error: err.message,
                });
            }

            res.json({ user });
        });
});

module.exports = router;
