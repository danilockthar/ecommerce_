import {gateway as MoltinGateway} from '@moltin/sdk'

const Moltin = MoltinGateway({
    client_id: 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4'
})

export const getProducts = () => Moltin.Products.With('main_image').All();
export const getSingleProduct = id => Moltin.Products.With('main_image').Get(id);
export const AddIn = (productId, quantity) => Moltin.Cart().AddProduct(productId, quantity);
export const GetCartItems = id => Moltin.Cart(id).Items();
export const RemoveFromCart = (itemID, cartID) => Moltin.Cart(cartID).RemoveItem(itemID);