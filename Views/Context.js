import React, { useContext } from "react"

const Context = React.createContext();

  const colors = {
    darkBlue: '#292e49',
    myGrey: '#e5e8f4', 
    myBlue: '#0d98ba', 
    bgColor: 'white', 
    myDarkGrey: '#B4B6B6'
  };

const ContextProvider = (props) => {

    return (
    <Context.Provider value={colors}>
        {props.children}
    </Context.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(Context)
}

export {Context, ContextProvider}