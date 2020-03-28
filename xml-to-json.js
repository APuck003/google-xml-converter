const fs = require('fs')

// if NO id DO NOT render item  [done]
// if NO title { take tile from slug  https://www.marxfoods.com/steak and after "/" becomes temp title} title steak
// if NO image_link replace with href"/www.ekrelerjk/${title};
// if NO descrition { take tile from slug  https://www.marxfoods.com/ and after "/" becomes temp title}
// if NO data.id || NO data.title || NO data.descrition {}

const parseXML = () => {
  
  let file = fs.readFileSync(__dirname + '/data/Google_Product_Feed_File_Meat_Yogi_23_march.xml').toString().trim()
  
  
  let defaultObj = {
    id: 'id',
    title: `https://www.marxfoods.com/${'REPLACE ME'}`,
    description: `https://www.marxfoods.com/${'temp title'}`,
    link: 'link',
    image_link: `href"/www.ekrelerjk/${'TITLE'}`,
    availability: 'availability',
    google_product_category: 'google product category',
    product_type: 'product type',
    item_group_id: 'item group id',
    shipping_weight: 'shipping weight'
  }
  
  
  const itemArr = file.split('<item>')
  let product = []
  
  for (let i = 1; i < itemArr.length; i++) {
    // console.log('itemArr['+i+']: ', itemArr[0]);
    if (itemArr[i]) {
      let itemObj = {}
      let itemChild = itemArr[i].split(/[<>]+/)
  
      // console.log('============================== new pass ==========================');
      for (let j = 0; j < itemChild.length; j++) {
        
        if (itemChild[j] === 'g:id') {
          itemObj.id = itemChild[(j + 1)]
          // console.log('id: ', itemObj.id);
          
        }
        
        if (itemChild[j] === 'g:title') {
          // console.log(itemChild[j].value)
          itemObj.title = itemChild[(j + 1)]
          // console.log('title: ', itemObj.title);
        }
        
        if (itemChild[j] === 'g:description') {
          let descArr = itemChild[(j + 1)].split([' '])
          let descStr = descArr.join(' ')
          let cleanGreater = descStr.split("&gt;").join(">")
          let cleanLesser = cleanGreater.split("&lt;").join("<")
          let cleanAnd = cleanLesser.split("&amp;").join("&")
          let cleanBrOpenTag = cleanAnd.split("<br /><br />").join("")
          let firstClean = cleanBrOpenTag.replace(/(\r\n|\n|\r)/gm, " ")
          let secondClean = firstClean.split(' ')
          let cleanArr = []
          for (let v = 0; v < secondClean.length; v++) {
            if (secondClean[v - 1] === '' && secondClean[v] === '') {
              null
            }
            else {
              cleanArr.push(secondClean[v])
            }
          }
          itemObj.description = cleanArr.join(' ')
          // console.log('description: ', itemObj.description);
        }
        if (itemChild[j] === 'g:link') {
          itemObj.link = itemChild[(j + 1)]
          // console.log('link: ', itemObj.link);
        }
        if (itemChild[j] === 'g:image_link') {
          itemObj.image_link = itemChild[(j + 1)]
          // console.log('image_link: ', itemObj.image_link);
        }
        if (itemChild[j] === 'g:availability') {
          itemObj.availability = itemChild[(j + 1)]
          // console.log('availability: ', itemObj.availability);
        }
        if (itemChild[j] === 'g:google_product_category') {
          itemObj.google_product_category = itemChild[(j + 1)]
          // console.log('google_product_category: ', itemObj.google_product_category);
        }
        if (itemChild[j] === 'g:product_type') {
          itemObj.product_type = itemChild[(j + 1)]
          // console.log('product_type: ', itemObj.product_type);
        }
        if (itemChild[j] === 'g:identifier_exists') {
          itemObj.identifier_exists = itemChild[(j + 1)]
          // console.log('identifier_exists: ', itemObj.identifier_exists);
        }
        if (itemChild[j] === 'g:item_group_id') {
          itemObj.item_group_id = itemChild[(j + 1)]
          // console.log('item_group_id: ', itemObj.item_group_id);
        }
        if (itemChild[j] === 'g:shipping_weight') {
          itemObj.shipping_weight = itemChild[(j + 1)]
          // console.log('shipping_weight: ', itemObj.shipping_weight);
        }
      }
      
      let mergeObj = {}
      
      for (let attrname in defaultObj) { mergeObj[attrname] = defaultObj[attrname]; }
      for (let attrname in itemObj) { mergeObj[attrname] = itemObj[attrname]; }
      
      product.push(mergeObj)
      
    }
  }

// console.log(product);
  return product

}


fs.writeFile('newJsonFile.json', JSON.stringify(parseXML(), null, 1), function(err, result) {
  if (err) console.log('error', err)
})
