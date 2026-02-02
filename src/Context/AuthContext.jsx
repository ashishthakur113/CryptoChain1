import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

const initialState ={
    user:JSON.parse(localStorage.getItem("user")) || null,
    isAuthenticated : !!localStorage.getItem("user")      // for checking the data is in String or null if null then false , string = true
}

const authReducer=(state , action)=>{
    switch(action.type){
        case "LOGIN":
            return{
                user:action.payload,
                isAuthenticated:true,
            };
        case "LOGOUT":
            return{
                user:null,
                isAuthenticated:false,
            };
        default:
            return state;
    }
}

const AuthProvider = ({children})=>{
     const [state ,dispatch]= useReducer(authReducer , initialState);

     useEffect(()=>{
        if(state.user){
            localStorage.setItem("user",JSON.stringify(state.user));
        }else{
            localStorage.removeItem("user");
        }
     } , [state.user]);

     const login =(userData)=>{
        dispatch({type:"LOGIN",payload:userData})
     }
     const logout =()=>{
        dispatch({type:"LOGOUT",})
     }

     const authValue ={
        user:state.user,
        isAuthenticated:state.isAuthenticated,
        login,
        logout,
     }

     return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
     )
}

export default AuthProvider
