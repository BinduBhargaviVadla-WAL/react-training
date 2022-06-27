import PropTypes from "prop-types"
function GreetProps(props) {
    return (
        <div className="border">
            <h1>{props.message}</h1>
            <h1>{props.date}</h1>
            <h1>{props.no}</h1>
        </div>
    );
}
GreetProps.propTypes = {
    no: PropTypes.number,
    date: PropTypes.string,
    message: PropTypes.string,
};
export default GreetProps;