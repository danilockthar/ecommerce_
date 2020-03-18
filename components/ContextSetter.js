import React, {useState, useEffect} from 'react'

export const ContextState = React.createContext();

export const CartProvider = (props) => {
    const [itemCart, setItemCart] = useState();

  useEffect(() => {
    let initialStorage = 0;
    if(localStorage.getItem('woocart') === null){
        localStorage.setItem('woocart', JSON.stringify([]));
    }
    initialStorage = JSON.parse(localStorage.getItem('woocart')).length;
    setItemCart(initialStorage);
  })

    return(
        <ContextState.Provider value={[itemCart, setItemCart]}>
            {props.children}
        </ContextState.Provider>
    )
}