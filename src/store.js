import { createStore } from "redux";

const initialState ={
    session: 25,
    breake: 5,
    touch: true
}

const reducerClock = (state = initialState, action) =>{
    switch(action.type){
        case "CSESSION":
            if(action.play){
                if(state.session !== 1){
                    return {
                        ...state,
                        session: state.session + action.o,
                        touch: true
                    }
                }else{
                    return state
                }
            }else{
                return state
            }
        case "CBREAKE":
            if(action.play){
                if(state.breake !== 1){
                    return{
                    ...state,
                    breake: state.breake + action.o,
                    }
                }else{
                    return state
                }
            }else{
                return state
            }
        case "OFFTOUCH":
            return {
                ...state,
                touch: false
            }
        default:
            return initialState;
        }
};
export default createStore(reducerClock);