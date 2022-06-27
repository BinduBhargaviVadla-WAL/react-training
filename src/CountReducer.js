const intialValue = {count :0,title:"REDUX"};
const CountReducer=(state=intialValue,action)=>{
    console.log(state);
    console.log(action);
    if (action.type=='increase'){
        return{count:state.count+ action.step}
    }
    if (action.type=="decrease"){
        return{count:state.count- action.step}
    }
    return state;
}
export default CountReducer;