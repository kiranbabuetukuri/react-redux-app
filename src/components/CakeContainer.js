import React from 'react'
import {buyCake} from '../redux'
import {connect} from 'react-redux'
function CakeContainer(props) {
    return (
        <div>
            <h2>Hellow React Redux {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Clcik Me</button>
        </div>
    )
}
const mapStateToProps=state=>{
    return {numOfCakes:state.cake.numOfCakes}
}
const mapDispatchToProps=dispatch=>{
    return {buyCake:()=>dispatch(buyCake())}
}

export default connect(mapStateToProps,mapDispatchToProps) (CakeContainer)
