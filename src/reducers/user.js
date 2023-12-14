const user = (state = null, action) => {
    switch (action.type) {
        case 'fetch-user':
            console.log("reducer fetch", action.user)
            return action.user
        // case 'fetch-user-by-id':
        //     console.log("reducer fetch by id", action.user)
        //     return action.user
        case 'user-login':
            console.log("reducer login", action.user)
            return action.user
        case 'user-logout':
            console.log("reducer logout", action.user)
            return null
        case "update-user-profile":
            console.log("reducer update", action.user)
            return ({ ...state, ...action.user })
        default:
            return state
    }

};
export default user;