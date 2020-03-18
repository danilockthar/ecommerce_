
const woolib = require('../../lib/woolib.js')

  export default async (req, res) => {
    var finaldata = {};
    await woolib.get("products", {
      per_page: 20, // 20 products per page
    })
      .then((response) => {
        finaldata = response.data;
      })
    
    return res.json(finaldata);
 }