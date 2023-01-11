export const task = (data) => {
    return{
        type: "TASK_DATA",
        payload: data
    }
}
export const reorderTask = (data) => {
    return{
        type: "REORDER_DATA",
        payload: data
    }
}

export const deleteTodo = (data) => {
    return{
        type: "DELETE_DATA",
        payload: data
    }
}