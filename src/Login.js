/* function name always start with Capital Letter, Its a rule
Ex: Login()  L is capital
the components and custom tags will have the same as the name of the function
What ever the html written in Login should be return to imported page access by Login Tag*/
function Login(){
    let title = "This is a Login component title";
    let description = "This is the description of the component";
    function signIn(){
        alert("You are signed in");
    }
    return (
        <div className="Login">
            <h1>{title}</h1>
            <h1>{description}</h1>
            {signIn()}
            5+4 = {5+4}
            <br/>
            <input type="email" name="email" placeholder="Enter Email"/>
            <br/>
            <input type="password" name="password" placeholder="Enter Password"/>
            <br/>
            <button onClick={signIn}>Sign in</button>
        </div>
    );

}
// It is mandatory to make the component available to all can imported to html
export default Login;