import HobbyComp from "../HobbyComp";

const HobbiesReducer = (state,action) => {
    console.log(state);
    console.log(action);
    if(action.type == "add"){
        return [...state,action.name]
    }
    if(action.type == "clearAll"){
        return []
    }
    if(action.type == "deleteIndex"){
        return state.filter((val,index) => index != action.index)
    }
}
export default HobbiesReducer;