function RegistrationForm() {
    return (
        <form className="form">
            <h1>Registation Form</h1>
                <div className="divReg">
            <input type="text" name="firstName" placeholder="First Name"/>
            <input type="text" name="lastName" placeholder="Last Name"/>
            <input type="email" name="email" placeholder="Email"/>
            <input type="text" name="userName" placeholder="User Name"/>
            <input type="number" name="age" placeholder="age"/>
            </div>
            
            <button>Register</button>
            
            
            
        </form>
    )   
}
export default RegistrationForm;

/* */