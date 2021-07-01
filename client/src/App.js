import { BrowserRouter, Route } from "react-router-dom";
import { CreateTodo } from "./components/createTodo";
import "./App.scss";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header className="App-header">
                    {/* <Route exact path="/" component={}/> */}
                    <Route path="/create-todo" component={CreateTodo} />
                </header>
            </BrowserRouter>
        </div>
    );
}

export default App;
