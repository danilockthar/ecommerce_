

const woolib = require('./woolib.js')



export const addItem = (productId, quantity) => {
    let products = [];
    let newItem = true;
    if(localStorage.getItem('woocart')){
        products = JSON.parse(localStorage.getItem('woocart'));
        products.map(itemID => {
            if(itemID.productId == productId){
                const prevQuantity = parseInt(itemID.quantity);
                itemID.quantity = (parseInt(quantity) + parseInt(prevQuantity))
                newItem = false;
            }
        })
    }
    if(newItem){
        products.push({'productId' : productId , quantity : quantity});
    }
    localStorage.setItem('woocart', JSON.stringify(products));

    return products;

}

// -- Extraigo del local storage los id de los productos y busco en la woocommerce api rest la info de cada item //
export const getItems = async() => {
    let data = {};
    let wooItems = {};
    let itemsID = [];
    if(localStorage.getItem('woocart') === null){
        localStorage.setItem('woocart', JSON.stringify([]));
    }
    data.items = await JSON.parse(localStorage.getItem('woocart')); // tomamos de local storage el carrito
    data.items.map(singleItem => { 
        itemsID.push(singleItem.productId);  // tomamos los id de los productos
    })
    var commaItems = itemsID.join(","); // hacemos un array con los id separados por coma
    data.commaItems = commaItems.toString();
    await woolib.get(`products/?include=${data.commaItems}`) // ingresamos la lista de id al api rest de woocommerce
    .then((response) => {
      wooItems = response.data;
    })
    data.items_cart = [] // ingresamos todos los datos necesarios a un objeto
    wooItems.map(singleItem => {
        data.items.map( othersingle =>{
            if(singleItem.id == othersingle.productId){
                data.items_cart.push({
                    id: singleItem.id,
                    name: singleItem.name,
                    price: singleItem.price,
                    image: singleItem.images[0].src,
                    quantity: othersingle.quantity,
                    subtotal: (parseInt(singleItem.price) * parseInt(othersingle.quantity))
                })
            }
        })
    })
    data.total = 0;
    data.items_cart.map(singleItem => { // calculamos el total 
        data.total += singleItem.subtotal;
    })
    return data;
}

export const RemoveFromCart = async(productId) => {
    var products = [];
    let data = {};
    let wooItems = {};
    let itemsID = [];
    var arreglo = [40, 39, 32, 37]
    products = await JSON.parse(localStorage.getItem('woocart'));
    products.splice(products.findIndex(e => e.productId === productId),1);
    localStorage.removeItem('woocart');
    localStorage.setItem('woocart', JSON.stringify(products));
    data.items = await JSON.parse(localStorage.getItem('woocart')); // tomamos de local storage el carrito
    data.items.map(singleItem => { 
        itemsID.push(singleItem.productId);  // tomamos los id de los productos
    })
    var commaItems = itemsID.join(","); // hacemos un array con los id separados por coma
    data.commaItems = commaItems.toString();
    await woolib.get(`products/?include=${data.commaItems}`) // ingresamos la lista de id al api rest de woocommerce
    .then((response) => {
      wooItems = response.data;
    })
    data.items_cart = [] // ingresamos todos los datos necesarios a un objeto
    wooItems.map(singleItem => {
        data.items.map( othersingle =>{
            if(singleItem.id == othersingle.productId){
                data.items_cart.push({
                    id: singleItem.id,
                    name: singleItem.name,
                    price: singleItem.price,
                    image: singleItem.images[0].src,
                    quantity: othersingle.quantity,
                    subtotal: (parseInt(singleItem.price) * parseInt(othersingle.quantity))
                })
            }
        })
    })
    data.total = 0;
    data.items_cart.map(singleItem => { // calculamos el total 
        data.total += singleItem.subtotal;
    })
    return data;
}
