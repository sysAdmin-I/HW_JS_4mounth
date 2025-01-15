import {useState, useEffect} from "react";

function MainPage({ user }) {
    const [userAuthorized, setUserAuthorized] = useState({ name: "", lastname: "" });

    useEffect(() => {
        setUserAuthorized(user);
    }, [user]);

    return (
        <div>
            <h1>
                Добро пожаловать {userAuthorized.name} {userAuthorized.lastname}, мы тебя ждали
            </h1>
        </div>
    );
}

export default MainPage;




