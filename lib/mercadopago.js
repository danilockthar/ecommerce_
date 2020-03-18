// SDK de Mercado Pago
const mercadopago = require ('mercadopago');

// Agrega credenciales
mercadopago.configure({
  access_token: 'APP_USR-4076639315300282-021715-7a2909a13afd4beafbc969f5f669253c-221061034'
});

// Crea un objeto de preferencia
let preference = {
  items: [
    {
      title: 'Mi producto',
      unit_price: 100,
      quantity: 1,
    }
  ]
};

mercadopago.preferences.create(preference)
.then(function(response){
// Este valor reemplazará el string "$$init_point$$" en tu HTML
  global.init_point = response.body.init_point;
}).catch(function(error){
  console.log(error);
});

module.exports = mercadopago;