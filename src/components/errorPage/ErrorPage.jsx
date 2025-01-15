import {useState, useEffect} from "react";

function ErrorPage({ user }) {
    const [userAuthorized, setUserAuthorized] = useState({ name: "", lastname: "" });

    useEffect(() => {
        setUserAuthorized(user);
    }, [user]);

    return (
        <div>
            <h1>
                Тебе сюда нельзя - {userAuthorized.name} {userAuthorized.lastname}
            </h1>
        </div>
    );
}

export default ErrorPage;
