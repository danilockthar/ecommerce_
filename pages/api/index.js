import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
 
const api = new WooCommerceRestApi({
  url: "http://broeders.com.ar/contacto",
  consumerKey: "ck_aff7869aee34c8b8611d511130dde7cda7975af3",
  consumerSecret: "cs_4e6e1d82dd800ed75919b160246032ec08921108",
  version: "wc/v3"
});

module.exports = api;