import {Button, Icon, Dimmer, Loader,} from 'semantic-ui-react'

const CartList = (props) => {
    
    if(props.loading){
        return( 
            <div className="temp_loader">
                <Loader active inline='centered' />
                <style jsx>{`
                    .temp_loader{
                        display:grid;
                        justify-content:center;
                        align-items:center;
                    }
                `}</style>
            </div>
            )
    }else{
        if(props.cartlist.length == 0){
            return(
                <div className="cart_list_empty">
                    <h1> No hay items en su carro de compras.</h1>
                    <style jsx>{`
                        .cart_list_empty{
                            padding:100px 100px 50px 100px;
                            display:grid;
                            justify-content:center;
                            align-items:center;
                        }
                    `}</style>
                </div>
            )
        }else{
            return(
                <div className="cart_list_grid">
                    {console.log(props.cartlist, "itemsss")}
                    {props.cartlist.map(singleprod => (
                        <div key={singleprod.id} className="single_cart_item">
                            <div className="all_single_item">
                                <img src={singleprod.image} />
                                <div className="info_single_item">
                                    <h3> {singleprod.name}</h3>
                                    <p> {`${singleprod.quantity} x $${singleprod.price}`}</p>
                                </div>
                            </div>
                            <Button
                            onClick={()=> props.removeItem(singleprod.id)} 
                            icon>
                                <Icon 
                                name='window close outline'
                                size="large"
                                
                                />
                            </Button>
                        </div>
                    ))}
                    <style jsx>{`
                        .cart_list_grid{
                            margin-top:24px;
                            padding:50px 30px 0px 30px;
                            display:grid;
                            grid-row-gap:20px;
                            justify-content:center;
                            align-items:center;
                            justify-self:baseline;
                            height:80%;
                            overflow-y:scroll;
                        }
                        .single_cart_item{
                            padding:15px;
                            background:white;
                            border-radius:6px;
                            display:grid;
                            grid-template-columns:500px 50px;
                            box-shadow: 8px 8px 16px #bababa, -8px -8px 16px #ffffff;
                        }
                        .info_single_item{
                            display:grid;
                            grid-template-rows:30px 30px;
                        }
                        .all_single_item{
                            display:grid;
                            grid-template-columns:110px 150px;
                            grid-column-gap:5px;
                        }
                        img{
                            max-width:100px;
                        }
                        h3{
                            color: #ef3c59;
                        }
                    `}</style>
                </div>
            )
        }
        
    }
    
}

export default CartList;