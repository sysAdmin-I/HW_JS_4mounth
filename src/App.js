import MainPage from "./pages/mainPage/MainPage";
import { useState } from "react";
import ErrorPage from "./components/errorPage/ErrorPage";
import "./App.css";

function App() {
    const [user, setUser] = useState({ name: "", lastname: "" });
    const [authorized, setAuthorized] = useState(false);
    const [initialized, setInitialized] = useState(false);

    const userPrompt = () => {
        const name = prompt("Введите ваше имя:")?.toLowerCase();
        const lastname = prompt("Введите вашу фамилию:")?.toLowerCase();

        if (name && lastname) {
            const newUser = { name, lastname };
            setUser(newUser);
            setAuthorized(name.toLowerCase() === "John" && lastname.toLowerCase() === "Johns");
        }
        setInitialized(true);
    };

    if (!initialized) {
        userPrompt();
    }

    return (
        <div className="App">
            {authorized ? <MainPage user={user} /> : <ErrorPage user={user} />}
        </div>
    );
}

export default App;

