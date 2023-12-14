
const profile = (state = null, action) =>{
    switch (action.type){
        case 'fetch-user-by-id':
            console.log("reducer fetch by id", action.profile)
            return action.profile
        case "update-user-profile":
            console.log("reducer update", action.profile)
            return ({ ...state, ...action.profile })
        case 'set-user-profile':
            return action.profile
        default:
            return(state);
    }
};

export default profile;
