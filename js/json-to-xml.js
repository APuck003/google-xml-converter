const jsonFile = require('../newJsonFile')
// const fs = require('fs')

// let values = Object.values(jsonFile)
// console.log(values)

const mapDatafromJson = (jsonFile) => {
  const data = jsonFile.map((data) => {
    // console.log(data)
    console.log(`
      <g:id>  ${data.id} </g:id>
      <g:title>  ${data.title} </g:title>
      <g:description>  ${data.description} </g:description>
      <g:link >${data.link}</g:link>
      <g:image_link >${data.image_link}</g:image_link>
      <g:availability >${data.availability}</g:availability>
      <g:google_product_category >${JSON.stringify(data.google_product_category)}</g:google_product_category>
      <g:item_group_id >${data.item_group_id}</g:item_group_id>
      <g:shipping_weight >${data.shipping_weight}</g:shipping_weight>
    `)
  })
}

mapDatafromJson(jsonFile)
