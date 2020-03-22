// const fs = require('fs')
let jsonFile = require('../newJsonFile')
// console.log(jsonFile[1])
// const objectArray = Object.values(jsonFile)[1]
// const keyValArrays = Object.entries(objectArray)


// const itemsAsXMLTags = keyValArrays.map((k) => {
//   // const arr = []
//   // if (k[0] !== 'google_product_category') {
//   //   arr.push(`<g:${k[0]}>${k[1]}</g:${k[0]}>`)
//   // } else {
//   //   arr.push(JSON.stringify(`<g:${k[0]}>${k[1]}</g:${k[0]}>`))
//   // }
//   return `<g:${k[0]}>${k[1]}</g:${k[0]}>`
// })
//
// console.log(itemsAsXMLTags)

const mapDatafromJson = (jsonFile) => {
// const mapDatafromJson = (objectArray) => {
  
  const data = jsonFile.map((data) => {
  // const data = objectArray.map((data) => {
    // const div = document.createElement('div')
    
    console.log(`
      <item>
      <g:id>  ${data.id} </g:id>
      <g:title>  ${data.title} </g:title>
      <g:description>  ${data.description} </g:description>
      <g:link >${data.link}</g:link>
      <g:image_link >${data.image_link}</g:image_link>
      <g:availability >${data.availability}</g:availability>
      <g:google_product_category >${data.google_product_category}</g:google_product_category>
      <g:product_type>${data.product_type}</g:product_type>
      <g:item_group_id >${data.item_group_id}</g:item_group_id>
      <g:shipping_weight >${data.shipping_weight}</g:shipping_weight>
      </item>
    `)
  })
}

mapDatafromJson(jsonFile)
// mapDatafromJson(objectArray)
