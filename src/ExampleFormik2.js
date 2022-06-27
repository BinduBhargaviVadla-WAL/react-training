import { useFormik, Field, form } from "formik";
const ExampleFormik2 = () => {
    let formik = useFormik({
        initialValues: {
            email: "abc@gmail.com",
            password: "dl"
        },
        onSubmit(values){
            console.log(`form submit`);
            console.log(values);
        },
        validate(){
            const errors = {};
            
            if( formik.values.password.length <= 4){
                errors.password = "Must be more than 4 characters";
            }
            if(formik.values.email.length >= 20){
                errors.email = "Can't be more than 20 characters";
            }
            return errors;
        },
    });
    localStorage.setItem("Bindu","Bindu");
    console.log(`Formiks:${formik}`);
    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <div className="text-danger">
                {formik.errors.email ? formik.errors.email : null}
            </div>

            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
            <div className="text-danger">
                {formik.errors.password ? formik.errors.password : null}
            </div>
            <span>hello it is touched{formik.touched["password"] && formik.errors['password']}</span>
            <button>Submit</button>
        </form>
    )
}
export default ExampleFormik2;