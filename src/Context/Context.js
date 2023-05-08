import  { useReducer,createContext } from "react";
export const Cartcontext= createContext()
export const Context=(props)=> {

const reducer=(state,action)=>{
    switch(action.type)
    {
     case "ADD":
        const tempstate=state.filter((item)=>action.payload.id===item.id)
        if(tempstate.length>0)
        {
            return state
        }
        else {
            return [...state,action.payload]
        }
     case "REMOVE": return state.filter((item) => item.id !== action.payload);  
        default: return state
    }
}    
const[state,dispatch]=useReducer(reducer,[])

 const info={state,dispatch}
  return (
    <Cartcontext.Provider value={info}>
    {props.children}
    </Cartcontext.Provider>
  )
}
