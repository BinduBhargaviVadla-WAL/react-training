const initialValue = {count:0,title:"REDUX"};
const CountReducer = (state,action) => {
    console.log(state);
    console.log(action);
    if(action.type == "increase"){
        return {count: state.count+1};
    }
    if( action.type == "decrease"){
        return {count: state.count - 1};
    }
}
export default CountReducer;