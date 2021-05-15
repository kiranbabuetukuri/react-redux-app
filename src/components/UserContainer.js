import React ,{useEffect}from 'react'
import {fettchUserRequest} from '../redux/'
import {connect } from 'react-redux'
import {fetchUsers} from '../redux/users/UserActions'
import { buyIcecream } from './Icecream'
function UserContainer({k1,buyIcecream1}) {
     
    useEffect(()=>{
      //  console.log(fetchUsers)
      buyIcecream1()
        //fetchUsers()
     // console.log(k1)
    },[])
    return (
        <div>
            <h2>Users</h2>
           {
               
  k1 && k1.users && k1.users.map(user=><p key={user.id}>{user.id}</p>)

           }
        </div>
    )
}
const a1=(state)=>{
return {
k1:state.users
}

}
const a2=dispatch=>{
    return {
    buyIcecream1:()=>dispatch(fetchUsers())
    }
    
    }


  
export default connect(a1,a2)( UserContainer)
