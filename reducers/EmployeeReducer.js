export const initialEmployee = {
    "department": {}, "firstName": "", "jobTitle": {}, "lastName": "", "manager": {}, "middleInitial": "", "email":'', "isActive": true, "isManager": false
}

export default (state, action) => {
    switch (action.type) {
        case "reset":
            return { ...initialEmployee };
        case "update":
            const updateState = {...state};
            updateState[action.field] = action.value;
            return updateState;
        case "updateAll":
            const completeUpdate = {...state};
            for (const key in action.value){
                completeUpdate[key] = action.value[key]
            }
            return completeUpdate;
        default:
            return state;
    }
}