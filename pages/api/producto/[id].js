const woolib = require('../../../lib/woolib.js')

export default async (req, res) => {
    var finaldata = {};
    var str = req.url;
    var n = str.lastIndexOf('/');
    var productID = str.substring(n + 1);
    await woolib.get(`products/${parseInt(productID)}`)
      .then((response) => {
        finaldata = response.data;
      })
    
    return res.json(finaldata);
  }

/*export default async (req, res) => {
    var str = req.url;
    var n = str.lastIndexOf('/');
    var result = str.substring(n + 1);
    console.log(result);
    
    
 }*/