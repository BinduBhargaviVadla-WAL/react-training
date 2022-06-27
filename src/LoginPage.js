function LoginPage(){
    function signIn(){
        alert("You are signed in");
    }
    return (
        <div className="form">
                <h1>Login</h1>
            <div >
            <input type="email" name="email" placeholder="Enter Email"/>
            <br/>
            <input type="password" name="password" placeholder="Enter Password"/>
            <br/>
            </div>
            <button onClick={signIn}>Sign in</button>
        </div>
    );

}
export default LoginPage;