const fs = require('fs')

const parseXML = () => {
  let file = fs.readFileSync(__dirname + '/data/Google_Product_Feed_File_Yogi_V7.0.xml').toString()
  const itemArr = file.split('<item>')
  let product = []
  
  for (let i = 0; i < itemArr.length; i++) {
    if (itemArr[i]) {
      let itemObj = {}
      let itemChild = itemArr[i].split(/[<>]+/)
      
      for (let j = 0; j < itemChild.length; j++) {
        if (itemChild[j] === 'g:id') {
          itemObj.id = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:title') {
          itemObj.title = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:description') {
          let descArr = itemChild[(j + 1)].split([' '])
          let descStr = descArr.join(' ')
          let cleanGreater = descStr.split("&gt;").join(">")
          let cleanLesser = cleanGreater.split("&lt;").join("<")
          let firstClean = cleanLesser.replace(/(\r\n|\n|\r)/gm, " ")
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
        }
        if (itemChild[j] === 'g:link') {
          itemObj.link = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:image_link') {
          itemObj.image_link = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:availability') {
          itemObj.availability = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:google_product_category') {
          itemObj.google_product_category = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:product_type') {
          itemObj.product_type = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:item_group_id') {
          itemObj.item_group_id = itemChild[(j + 1)]
        }
        if (itemChild[j] === 'g:shipping_weight') {
          itemObj.shipping_weight = itemChild[(j + 1)]
        }
      }
      product.push(itemObj)
    }
  }
  return product
}

fs.writeFile('newJsonFile.json', JSON.stringify(parseXML(), null, 2), function(err, result) {
  // console.log('I was hit')
  if (err) console.log('error', err)
})
