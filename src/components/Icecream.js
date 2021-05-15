 
export const BUY_ICECREAM='ICE_CREAM'
export const buyIcecream=()=>{
    return {
type: BUY_ICECREAM

    }
}
const initialIcecreamState={numOfIceCreams:10}
export const iceCreamReducer=(state=initialIcecreamState,action )=>{
switch (action.type) {
    case BUY_ICECREAM:
      
    return {
        ...state,
        numOfIceCreams:state.numOfIceCreams-1
    }
        break;

    default: 
    return state
        break;
}

}

 