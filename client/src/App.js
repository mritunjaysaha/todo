import { BrowserRouter, Route } from "react-router-dom";
import { ShowTodoList } from "./components/showTodoList";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {
    return (
        <div className="app-contents">
            <BrowserRouter>
                <Route exact path="/" component={ShowTodoList} />
                <Route path="/create-todo" component={CreateTodo} />
            </BrowserRouter>
        </div>
    );
}

export default App;
