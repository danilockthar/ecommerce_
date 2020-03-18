
export default async (req, res) => {

    const mercadopago = require('mercadopago')
    mercadopago.configure({
        access_token: 'TEST-4076639315300282-031422-432954d7ce2eec18b39b619f01c82249-221061034'
    });
    let preference = {
        payer: req.body.payer,
        items: req.body.items.map(item => {
            return{
                id: item.id,
                picture_url: item.picture_url,
                title: item.title,
                unit_price : item.unit_price,
                quantity: item.quantity
            };
        })
    }
    try{
        const myPref = await mercadopago.preferences.create(preference);
        const initPoint = await myPref.body.init_point;
        res
            .status(201)
            .json({initPoint})
    }catch(error){
        console.log(error);
        res
            .status(500)
            .json({error : error})
    }
 }
