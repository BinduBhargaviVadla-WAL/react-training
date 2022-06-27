import { useFormik, Field, form } from "formik";
import { useState } from "react";
const Library = () => {
    let [books,setBooks] = useState([]);
    let formik = useFormik({
        initialValues: {
            bookName: "bookName",
            addedDate: "11-01-2021",
            author: "author",
        },
        onSubmit(values) {
            console.log(`form submit`);
            console.log(values);
            let bookOb = {
                bName: formik.values.bookName,
                date: formik.values.addedDate,
                bAuthor: formik.values.author
            }
            let newOb = [...books,bookOb];
            setBooks(newOb);
        },
    });
    console.log(`Formiks:${formik}`);
    return (
        <div className="content">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1>Registration Form</h1>
                <input
                    type="text"
                    name="bookName"
                    placeholder="Enter Book Name"
                    value={formik.values.bookName}
                    onChange={formik.handleChange}
                /><br/>
                <input
                    type="date"
                    name="addedDate"
                    placeholder="Enter Date of Adding"
                    value={formik.values.dateOfAdding}
                    onChange={formik.handleChange}
                /><br/>
                <input
                    type="text"
                    name="author"
                    placeholder="Enter Author"
                    value={formik.values.author}
                    onChange={formik.handleChange}
                /><br/>
                <button type="submit" className="submitBtn">Submit</button>
            </form>

            {books.map(function(val,index){
                return (
                    <div className="card">
                        <h3>{val.bName}</h3>
                        <h5>{val.date}</h5>
                        <h5>{val.bAuthor}</h5>
                    </div>
                )
            })}
        </div>
    )
}
export default Library;