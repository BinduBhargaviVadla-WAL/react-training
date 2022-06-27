import useLocalStorage from "use-local-storage";

function ExampleUseLocalStorage() {
    const [username, setUsername] = useLocalStorage("name", "");
    const saveName = (event) => {
        event.preventDefault();
        setUsername(event.target.userName.value);
    }
    const show = () => {
        alert(username);
    }
    return (
        <>
            <form onSubmit={saveName}>
                <input
                    name="userName"
                    placeholder="Enter UserName"
                />
                <button>Save</button>
                <button onClick={show}>Show</button>
            </form>
        </>
    );
}
export default ExampleUseLocalStorage;