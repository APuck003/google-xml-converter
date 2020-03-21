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
        console.log(JSON.stringify(result, null, 4))
        // console.log(result)
        // console.log(util.inspect(result, false, null))
      })
    })


// Separate method that's more specific without using library - needs cleaning
// const run = () => {
//   let file = fs.readFileSync(__dirname + '/data/Google_Product_Feed_File_Yogi_V7.0.xml').toString()
//   const itemArr = file.split('<item>')
//   let product = []
//   for(i=0; i < itemArr.length; i++){
//     if(itemArr[i]){
//       let itemObj = {}
//       let itemChild = itemArr[i].split(/[<>]+/)
//       for(j=0; j<itemChild.length; j++){
//         if(itemChild[j] === 'g:id'){
//           itemObj.id = itemChild[(j + 1)]
//         }
//         if(itemChild[j] === 'g:title'){
//           itemObj.title = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:description'){
//           let descArr = itemChild[(j + 1)].split([' ']);
//           let descStr = descArr.join(' ');
//           let firstClean = descStr.replace(/(\r\n|\n|\r)/gm, " ");
//           let secondClean = firstClean.split(' ');
//           let cleanArr = [];
//           for(v=0; v<secondClean.length; v++){
//             if(secondClean[v - 1] === '' && secondClean[v] === ''){
//               null;
//             } else {
//               cleanArr.push(secondClean[v]);
//             }
//           }
//           itemObj.description = cleanArr.join(' ');
//         }
//         if(itemChild[j] === 'g:link'){
//           itemObj.link = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:image_link'){
//           itemObj.image_link = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:availability'){
//           itemObj.availability = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:price'){
//           itemObj.price = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === '/g:google_product_category'){
//           itemObj.google_product_category = {};
//         }
//         if(itemChild[j] === 'g:product_type'){
//           //eventually make a method to split str to array
//           itemObj.google_product_category.product_type = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:gtin'){
//           itemObj.gtin = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:item_group_id'){
//           itemObj.item_group_id = itemChild[(j + 1)];
//         }
//         if(itemChild[j] === 'g:shipping_weight'){
//           itemObj.shipping_weight = itemChild[(j + 1)];
//         }
//       }
//       product.push(itemObj);
//     }
//   }
//   return product;
// }

// console.log(run())
