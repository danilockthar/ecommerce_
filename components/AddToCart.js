import React, {useState, useContext} from 'react'
import {Select, Button, Label, Icon} from 'semantic-ui-react'
import {addItem} from '../lib/wooCart.js'
import {ContextState} from './ContextSetter'


const AddToCart = ({productInfo}) => {

    const [itemCart, setItemCart] = useContext(ContextState); // creo el contexto y los states
    const [loading, setLoading] = useState(false)
    const [quantity, setQuantity] = useState(1)


    // React Semantic UI Select necesita de 2 argumentos para funcionar a diferencia de Select basico.
    const _handleChange = (e, data) => {
        setQuantity(data.value);
    }
    const _handleSubmit = async () => {
        setLoading(true);
        setTimeout(()=> {
            const allProducts = addItem(productInfo.id, quantity); // retorno todos los items ademas de sumar 
            setItemCart(allProducts.length); // seteo el estadoglobal del navbar con el length de los items
                setLoading(false);
        }, 500)
       
        
    }
    const numberSelect = [
        { key: 0, value: 1, text: '1' },
        { key: 1, value: 2, text: '2' },
        { key: 2, value: 3, text: '3' },
        { key: 3, value: 4, text: '4' },
        { key: 4, value: 5, text: '5'},
        { key: 5, value: 6, text: '6' },
        { key: 6, value: 7, text: '7' },
        { key: 7, value: 8, text: '8' },
        { key: 8, value: 9, text: '9' },
        { key: 9, value: 10, text: '10' }
      ]
    return(
        <div className="addtocart">
            <h1>{productInfo.name}</h1>
            <h4>${productInfo.price}</h4>
            <div className="selectsubmit">
                <Select placeholder='Cantidad' value={quantity} onChange={_handleChange} options={numberSelect} />
                {console.log(productInfo, "info")}
                <Button 
                icon
                loading={loading}
                disabled={loading}
                labelPosition='left' 
                onClick={_handleSubmit} color='gray'>
                <Icon name='shopping bag' />
                Agregar Producto
                </Button>
            </div>
            
            <style jsx>{`
            h1{
                color:#ef3c59;
            }
            h4{
                color:#ef3c59;
            }
            .selectsubmit{
                display:grid;
                grid-row-gap:5px;
            }
            .ui.selection.dropdown{
                min-width: 5em !important;
                max-width: 5em !important;
            }
            
        `}</style>
        </div>
    )
}

export default AddToCart;