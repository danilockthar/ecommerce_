import React, {useState, useEffect, useContext} from 'react'
import Layout from '../components/Layout'
import {ContextState} from '../components/ContextSetter'
import CartList from '../components/CartList'
import CartChecking from '../components/CartChecking'
import {getItems, RemoveFromCart} from '../lib/wooCart.js'
import fetch from 'isomorphic-unfetch'
import { motion } from 'framer-motion'

const Cart = () => {

    const [itemCart, setItemCart] = useContext(ContextState);

    const [items, setItems] = useState([]);
    const [meta, setMeta] = useState([]);
    const [loading, setLoading] = useState(true);
    const [cartID, setCartID] = useState("");
    const [prefID, setPrefID] = useState("");

    const getCartItems = async() => {
        const data = await getItems()
        setItems(data.items_cart)
        setMeta(data.total)
        //setCartID(cart_ID);
        setLoading(false);
    }
    
    const _handleRemove = async itemID => {
        setLoading(true);
        const data = await RemoveFromCart(itemID);

        setItems(data.items_cart);
        
        setMeta(data.total);
        setLoading(false);
    }

    const getPreferenceId = async () => {
        let pref = {};
        pref.payer = {
            name: "Canibal",
            surname: "Fernandez",
            email: "canibal_fernandez@gabinete.com",
            date_created: Date.now(),
            phone: {
              area_code: "",
              number: parseInt("291 472 4275")
            }
        }
        pref.items = [];
        items.map(item => {
            pref.items.push({
                id: item.id,
                title: item.name,
                picture_url : item.image,
                unit_price: parseInt(item.price),
                quantity: parseInt(item.quantity)
            })
        })

        let ruta_env = "";
        if(process.env.NODE_ENV !== 'production'){
            ruta_env = "http://localhost:3000";
        }else{
            ruta_env = "https://ecotienda.now.sh";
        }
        const rawResponse = await fetch(ruta_env+'/api/checkout', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(pref)
        });
        const content = await rawResponse.json();
        setPrefID(content.initPoint);
    }

    useEffect(() => {
        setItemCart(items.length);
        getPreferenceId();
      }, [items]);

    useEffect(() => {
        getCartItems();
      }, []);

    return(
        <motion.div exit={{opacity: 0}} initial={{opacity:0}} animate={{opacity:1}}>
        <Layout>
            <div className="cart_block">
            <CartList cartlist={items} loading={loading} removeItem={_handleRemove}/>
            <CartChecking checkoutData={meta} loading={loading} preferenceID={prefID}/>
            <style jsx>{`
            h1{
                margin-top:140px;
            }
            .cart_block{
                padding:0px 100px 0px 100px;
                background:#eff3f5;
                display:grid;
                grid-template-rows:70% 30%;
                grid-row-gap:14px;
                max-height:100vh;
                height:100vh;
                overflow-y:hidden;
            }
        `}</style>
            </div>
        </Layout>
        </motion.div>
    )
}

export default Cart

