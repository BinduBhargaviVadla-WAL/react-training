const Profile = (props) => {
    return (
        <div>
            <h1>I am a Profile Component, See Hobbies of user below </h1>
            <ul>
                {props.userOb.hobbies.map((val) => {
                    return <li>{val}</li>
                })}
            </ul>
        </div>
    );
}
export default Profile;