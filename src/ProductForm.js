import { useFormik, Field, form } from "formik";
import { useState } from "react";
const ProductForm = () => {
    let [products,setProducts] = useState([{}]);
    let formik = useFormik({
        initialValues: {
            productName: "",
            price: "",
            description: "",
            category: [],
        },
        onSubmit(values) {
            console.log(`form submit`);
            console.log(values);
            let productOb = {
                name: values.productName,
                price: values.price,
                description: values.description,
                category:values.category,  
            }
            console.log(productOb);
            let newProducts = [...products,productOb]
            setProducts(newProducts);
            console.log(products);
        },
        validate() {
            const errors = {};
            if (formik.values.productName.length <= 3 || formik.values.productName.length >= 10) {
                errors.productName = "Product Name shoud be min 3 characters and max 20 characters"
            }
            if (formik.values.description.length <= 20 || formik.values.description.length >= 100) {
                errors.description = "description should be more than 20 characters and less than 100 characters";
            }
            if (formik.values.price <= 5 || formik.values.price.length >= 50000) {
                errors.price = "Product price is minimum Rs: 5 and maximum Rs: 50000";
            }
            return errors;
        },
    });
    console.log(`Formiks:${formik}`);
    return (
        <div className="content">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1>Product Form</h1>
                <input
                    type="text"
                    name="productName"
                    placeholder="Enter Product Name"
                    value={formik.values.productName}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.productName ? formik.errors.productName : null}
                </div>
                <input
                    type="number"
                    name="price"
                    placeholder="Enter product price"
                    value={formik.values.price}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.price ? formik.errors.price : null}
                </div>
                <textarea type="text" 
                    name="description" 
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    rows="4" cols="40">
                </textarea>
                <div className="text-danger">
                    {formik.errors.description ? formik.errors.description : null}
                </div>
                <div className="checkbox">
                <input type="checkbox" name="category" value="menClothing" onChange={formik.handleChange} />
                <label for="menClothing"> Men Clothing</label>
                <br />
                <input type="checkbox" name="category" value="womenClothing" onChange={formik.handleChange} />
                <label for="womenClothing"> Women Clothing</label>
                <br />
                <input type="checkbox" name="category" value="kidsClothing" onChange={formik.handleChange} />
                <label for="kidsClothing"> Kids Clothing</label>
                </div>
                
                <br/>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
            {products[0].Name}
            <table>

            {products.map((val,index) => {
                    return (
                        <div className="bordering">
                            <td>{val.name}</td>
                            <td>{val.price}</td>
                            <td>{val.category}</td>
                            <td>{val.description}</td>
                        </div>
                    )
                })}
                
            </table>
        </div>

    )
}
export default ProductForm;