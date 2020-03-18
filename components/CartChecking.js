import {Button, Icon, Loader} from 'semantic-ui-react'
import React, {useState} from 'react';

const CarChecking = (props) => {
        if(props.loading){
            return (
                <React.Fragment>
                    <h1> Cargando items..</h1>
                    <style jsx>{`
                        h1{
                            text-align:center;
                            padding-top:200px;
                        }
                    `}</style>
                </React.Fragment>
            )
        }else{
            return(
                <div className="checking_cart">
                    <h1>Total a pagar: ${ props.checkoutData}</h1>
                    <Button
                     href={props.preferenceID}
                     icon 
                     labelPosition='right'>
                        Checkout
                        <Icon name='right arrow' />
                    </Button>
                    
                    <style jsx>{`
                        .checking_cart{
                            padding-bottom:100px;
                            display:grid;
                            grid-template-columns:500px 150px;
                            justify-content:center;
                            align-items:center;
                        }
                        h1{
                            font-family: 'Fredoka One', cursive;
                        }
                    `}</style>
                </div>
            )
        }
   
        
    

    
}

export default CarChecking;