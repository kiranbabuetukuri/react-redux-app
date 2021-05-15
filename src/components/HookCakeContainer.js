import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import {buyCake} from '../redux/'
function HookCakeContainer() {

const numOfCakes=useSelector(state=>state.cake.numOfCakes)
 const dispatch = useDispatch()
    return (
        <div>
            <h2>Hellow usehook  numOfCakes{numOfCakes}</h2>
            <button onClick={()=>{dispatch(buyCake())}}> Click me UseHooks</button>
        </div>
    )
}

export default HookCakeContainer
