const initialState = [];

function ListReducer(state = initialState, action) {
    switch (action.type) {
        case "TASK_DATA":
            state = [
                action.payload,
                ...state
            ]
            return state;
        case "REORDER_DATA":
            return state = action.payload
        case "DELETE_DATA":
            return state.filter(e => e.id !== action.payload);
        default:
            return state;
    }
}


export default ListReducer