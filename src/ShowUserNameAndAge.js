import { useParams} from 'react-router-dom';
const ShowUserNameAndAge = () =>{
    const urlParams = useParams();
    console.log(urlParams);
    return (
        <div>
            The name is {urlParams.name} and age is {urlParams.age}
        </div>
    );
}
export default ShowUserNameAndAge;