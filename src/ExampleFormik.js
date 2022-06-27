import { useFormik } from "formik";
const ExampleFormik = () => {
    let formik = useFormik({
        initialValues: {
            email: "abc@gmail.com",
            password: "slkdl"
        },
        onSubmit(values){
            console.log(`form submit`);
            console.log(values);
        },
    });
    
    console.log(`Formiks:${formik}`);
    return (
        <form onSubmit={formik.handleSubmit} noValidate>
            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange}/>
            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange}/>
            <button>Submit</button>
        </form>
    )
}
export default ExampleFormik;