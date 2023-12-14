import user from './data/profile.json';
const initialState = {
    profile: user
}

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

// import user from './data/profile.json';
// const initialState = {
//     profile: user
// }

// const profile = (state = initialState, action) =>{
//     switch (action.type){
//         case 'get-current-profile':
//             return({
//                 profile: action.profile
//             })
//             break;
//         case 'edit-profile':
//             return {
//                 profile: [action.profile]
//             };
//             break
//         case 'discard-change':
//             return(state);
//             break
//         default:
//             return(state);
//     }
// };

// export default profile;