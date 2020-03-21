// const myJson = {
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
//     "gtin": null,
//     "item_group_id": null,
//     "shipping_weight": null,
//   }
// }

const fs = require('fs'), xml2js = require('xml2js')
const parser = new xml2js.Parser()

fs.readFile(__dirname + '../data/Google_Product_Feed_File_Yogi_V7.0.xml',
    function(err, data) {
      parser.parseString(data, function(err, result) {
        console.log(JSON.stringify(result))
        // result ? console.log(true, result) : console.log(false)
        // console.log(err)
        console.log('DONE')
      })
    }
  )
