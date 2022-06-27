import { useState } from 'react'
function HobbyComp() {
    let [hobbies, setHobbies] = useState([])
    const addHobby = (event) => {
        event.preventDefault();
        let hobbyObject = {
            name: event.target.name.value,
            description: event.target.description.value,
            date: event.target.date.value,
        }
        let newHobbies = [...hobbies, hobbyObject];
        setHobbies(newHobbies)
    }
    let deleteHobby = (indexVal) => {
        let newHobbies = hobbies.filter(function (val, index) {
            if (indexVal == index) {
                return false
            }
            return true
        })
        setHobbies(newHobbies)
    }
    let ClearAll = () => {
        setHobbies([])
    }

    return (
        <div className="card">
            <h1>hobbies</h1>
            <form onSubmit={addHobby}>
                <input type="text" name="name" placeholder="Enter name" /><br />
                <input type="text" placeholder="Enter Description" name="description" /><br />
                <input type="date" name="date" /><br />
                <div class="button-card">
                    <button>Add</button>

                </div>
            </form>
            <button onClick={() => { ClearAll() }}>Clear</button>
            <table>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>Date of Creation</th>
                </tr>
                {hobbies.map((val, index) => (
                    <tr>
                        <td className="Border">{val.name} </td>
                        <td className="Border">{val.description} </td>
                        <td className="Border">{val.date} </td>

                        <button onClick={() => { deleteHobby(index) }}>Delete</button>
                    </tr>
                ))}
            </table>

        </div>
    )
}
export default HobbyComp;