
export const initialstate={
    forms:[],
    edit: []
}

export const stateReducer = (state,action) => {
    switch(action.type){
        case"form":
        return {
            ...state,
            forms:action.payload,
        }
        case"edit":
        return {
            ...state,
            edit:action.payload,
        }
        default: return state;
    }
}

