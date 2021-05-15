import { USER_FETCH_REQUEST , USER_FETCH_SUCCESS,
    USER_FETCH_ERROR } from './UserTypes'
    import axios from 'axios'
export const fettchUserRequest=()=>{
    console.log(11111111111111111)
return {
    type:USER_FETCH_REQUEST
}

}
export const fettchUserSuccess=(users)=>{
    return {
        type:USER_FETCH_SUCCESS,
        payload:users,
        error:''
    }
    
    }
    export const fettchUserError=(error)=>{
        return {
            type:USER_FETCH_ERROR,
            payload:[],
            error:error
        }
        
        }

      export  const fetchUsers=()=>{
return (dispatch)=>{
    console.log('disppppp-')
   dispatch(fettchUserRequest())
   
axios.get('https://jsonplaceholder.typicode.com/albums').
then((result)=>{
let users=result.data
console.log('Okkkkkkkkkkk-')
dispatch(fettchUserSuccess(users))
}).
catch((error)=>{
 console.log('Erororororo-')
    dispatch(fettchUserError(error.message))

})

}

        }