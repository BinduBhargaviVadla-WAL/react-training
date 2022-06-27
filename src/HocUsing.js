const HocUsing = () => {
    const ModifiedProfile = Hoc(Profile);
    const ModifiedGetUserName = Hoc(ShowUserName);
    return (
        <div>
            <ModifiedProfile />
            <ModifiedGetUserName />
        </div>
    )
}
export default HocUsing;