export const initialDepartment = {
    isActive: true, name: ""
}

export default (state, action) => {
    switch (action.type) {
        case "reset":
            return { ...initialDepartment };
        case "update":
            const updateState = {...state};
            updateState[action.field] = action.value;
            return updateState;
        case "updateAll":
            const completeUpdate = action.value;
            return completeUpdate;
        default:
            return state;
    }
}