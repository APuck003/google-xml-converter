// const jsonData = {
//   "item": {
//     "id": null,
//     "title": null,
//     "description": null,
//     "link": null,
//     "image_link": null,
//     "availability": null,
//     "price": null,
//     "google_product_category": null,
//     "product_type": null,
//     "identifier_exists": null,
//     "shipping_weight": null,
//   }
// }


const fs = require('fs'), xml2js = require('xml2js')
const parser = new xml2js.Parser()

fs.readFile(`${__dirname}/../data/Google_Product_Feed_File_Yogi_V7.0.xml`.toString(),
    function(err, data) {
      parser.parseString(data, function(err, result) {
        console.log(JSON.stringify())
        // console.log(result)
        // console.log(util.inspect(result, false, null))
      })
    })

