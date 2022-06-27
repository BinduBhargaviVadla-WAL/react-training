const initialValue={count:0}
const CountReducer = (state=initialValue,action) => {
    console.log(state);
    console.log(action);
    if(action.type == "increase"){
        return {count: state.count+1};
    }
    if( action.type == "decrease"){
        return {count: state.count - 1};
    }
    return state
}
export default CountReducer;