import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import wooConfig from './wooConfig';

const api = new WooCommerceRestApi({
  url: wooConfig.siteUrl,
  consumerKey: wooConfig.consumerKey,
  consumerSecret: wooConfig.consumerSecret,
  version: "wc/v3"
});

module.exports = api;

