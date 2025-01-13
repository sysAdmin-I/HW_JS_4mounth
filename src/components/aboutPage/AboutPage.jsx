

function AboutPage({info}) {
    return (
        <div>
            <h2>{info.title}</h2>
            <p>{info.body}</p>
        </div>
    );
}

export default AboutPage;