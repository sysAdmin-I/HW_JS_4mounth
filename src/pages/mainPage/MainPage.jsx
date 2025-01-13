import AboutPage from "../../components/aboutPage/AboutPage";
import TitlePage from "../../components/titlePage/TitlePage";

function MainPage() {
    return (
        <div>
            <AboutPage info={{ title: "Some Title", body: "Some body" }} />
            <TitlePage text="Hello world" />
        </div>
    );
}

export default MainPage;