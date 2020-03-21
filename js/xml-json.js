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


const convert = require('xml-js')
const xml = require('fs').readFileSync('Google_Product_Feed_File_V3.1xml', 'utf8');
const options = {ignoreComment: true, alwaysChildren: true};
const xmlData = require('../data/Google_Product_Feed_File_Yogi_V7.0.xml');
