import { USER_FETCH_REQUEST , USER_FETCH_SUCCESS,
    USER_FETCH_ERROR } from './UserTypes'
const initialState={

    loading:false,
    users:[],
    error:''
}

 const useReducer = (state=initialState,action)=>{
     console.log(5555)
     console.log(action)
switch (action.type) {
    case USER_FETCH_REQUEST:
        return {
            loading:true,
            users:[],
            error:''

        }
        break;
        case USER_FETCH_SUCCESS:
            return {
                loading:false,
                users:action.payload,
                error:''
    
            }
            break;
            case USER_FETCH_ERROR:
                return {
                    loading:false,
                    users:[],
                    error:action.payload
        
                }
                break;

    default:
     return    state
        break;
}
 }
 export default useReducer