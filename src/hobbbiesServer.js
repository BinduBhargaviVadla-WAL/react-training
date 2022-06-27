import { useState, useEffect } from "react";
import axios from "axios";
const HobbiesServer = () => {
  let [hobbies, setHobbies] = useState([
    {
      hobby: "coding",
      description: "Coding is a good skill.",
      doc: "12 - 3 - 2022",
    },
  ]);
  useEffect(() => {
    getHobby();
  }, []);
  const getHobby = () => {
    axios
      .get("/hobbies")
      .then((res) => {
        setHobbies(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let addHobby = (event) => {
    event.preventDefault();
    let hobbyObject = {
      hobby: event.target.hobby.value,
      description: event.target.description.value,
      doc: event.target.date.value,
    };
    console.log(hobbyObject);
    axios
      .post("/hobbies", hobbyObject)
      .then((res) => {
        getHobby();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  let deleteHobby = (indexToDelete) => {
    axios
      .delete("/hobbies/" + indexToDelete)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    getHobby();
  };
  return (
    <div>
      <h1>Hobbies</h1>
      <form onSubmit={addHobby}>
        <input type='text' name='hobby' placeholder='Hobby' />
        <br />
        <input type='date' name='date' placeholder='Date' />
        <br />
        <textarea name='description' placeholder='Description'></textarea>
        <br />
        <button>Add</button>
      </form>
      {hobbies.map(function (val, index) {
        return (
          <div>
            Hobby : {val.hobby}
            <br />
            description: {val.description}
            <br />
            date of creation: {val.doc}
            <br />
            <button
              onClick={() => {
                deleteHobby(index);
              }}
            >
              {" "}
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default HobbiesServer;
