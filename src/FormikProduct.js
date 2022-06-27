import {useState} from 'react'
import { useFormik } from "formik";
const FormikProduct = () => {
    let [product, setProduct] = useState([])
    let formik = useFormik({
        initialValues: {
            name: "",
            price:"",
            category:"men clothing",
            description:"",
            
        },

        onSubmit(values) {
            console.log(values)
            let todoObject={
                name:values.name,
                price:values.price,
                category:values.category,
                description:values.description,
            }
            let newTodos=[...product,todoObject];
            setProduct(newTodos)

        },
        validate() {
            const errors = {}
            if ((formik.values.name.length <= 3) || (formik.values.name.length >= 10)) {
                errors.name = "* min 3 and max 10 characters"
            }
            if ((parseInt(formik.values.price) <= 5) || (parseInt(formik.values.price) >= 5000)) {
                errors.price = "* price should be min 5 and max 50000"
            }
            if ((formik.values.description.length <= 20) || (formik.values.description.length >= 100)) {
                errors.description = "* min 20 characters and max 100 characters"
            }
            
            return errors

        }
    });

    console.log(formik);
    return (

        <div class="card-container">
            <form onSubmit={formik.handleSubmit} noValidate className="Border">
                <h1>Product Form</h1>
                <input type="text" name="name" value={formik.values.name} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter name" />
                <div className="text-danger">{formik.errors.name ? formik.errors.name : null}</div>
                <input type="number" name="price" value={formik.values.price} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Price" />
                <div className="text-danger">{formik.errors.price ? formik.errors.price : null}</div>
                <select className="todo-user-input" onChange={formik.handleChange} value={formik.values.category} name="category">
                    <option value="men clothing">men clothing</option>
                    <option value="women clothing">women clothing</option>
                    <option value="kids">kids</option>
                </select>
                <textarea cols="20" row="3" name="description" value={formik.values.description} onChange={formik.handleChange} className="todo-user-input" placeholder="Enter Description" ></textarea>
                <div className="text-danger">{formik.errors.description ? formik.errors.description : null}</div>
                
                <div className="box">
                    <button>Submit</button>
                </div>
            </form>
            <div>
            {product.map((val,index) => {
                    return (

                        <div className="bordering">
                            <div>product {index+1}</div>
                            <p>{val.name}</p>
                            <p>{val.price}</p>
                            <p>{val.category}</p>
                            <p>{val.description}</p>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}
export default FormikProduct;