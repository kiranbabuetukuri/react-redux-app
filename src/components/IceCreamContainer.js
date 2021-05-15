import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import { buyIcecream } from './Icecream'

function IceCreamContainer(props) {

    useEffect(()=>{
        props.buyIcecream1()
        console.log( props.buyIcecream1)
     
    },[])
    return (
        <div>
   
            <h2>IcecreamContainer</h2>
            <div> Number Of icecreams  {props.numOfIceCreams}  </div>
            <button onClick={props.buyIcecream1}>Clcik Icecreams</button>
        </div>
    )
}
const mapStateToProps=(state)=> {
    return{
    numOfIceCreams:state.ice.numOfIceCreams
}
}
const mapDispatchToProps=(dispatch)=>{
   return {
    buyIcecream1:()=>dispatch(buyIcecream())
   }
}
export default  connect(mapStateToProps,mapDispatchToProps)( IceCreamContainer)
