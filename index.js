//   ----------dependencies-----------   //
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs')
const jsonFile = require('./newJsonFile.json')

//   ----------node init-----------   //
const app = express().use(cors());
const PORT = 4000;

//   ----------VIEW INIT-----------   //
app.set('view engine', 'ejs');

//   ----------init app w/ body parser-----------   //
app
  .use(bodyParser.urlencoded({extended: true})) //might not even need body-parser!
  .use(bodyParser.json());

//   ----------create json object-----------   //

const mapDatafromJson = (jsonFile) => {
  
  let xml = ''
  
  const data = jsonFile.map((data) => {
    
    if (data.id) {
      xml += `
        &lt;item&gt;
        &lt;g:id&gt;${data.id}&lt;/g:id&gt;
        &lt;g:title&gt;${data.title}&lt;/g:title&gt;
        &lt;g:description&gt;${data.description}&lt;/g:description&gt;
        &lt;g:link&gt;${data.link}&lt;/g:link&gt;
        &lt;g:image_link&gt;${data.image_link}&lt;/g:image_link&gt;
        &lt;g:availability&gt;${data.availability}&lt;/g:availability&gt;
        &lt;g:google_product_category&gt;${data.google_product_category}&lt;/g:google_product_category&gt;
        &lt;g:product_type&gt;${data.product_type}&lt;/g:product_type&gt;
        &lt;g:identifier_exists&gt;${data.identifier_exists}&lt;/g:identifier_exists&gt;
        &lt;g:item_group_id&gt;${data.item_group_id}&lt;/g:item_group_id&gt;
        &lt;g:shipping_weight&gt;${data.shipping_weight}&lt;/g:shipping_weight&gt;
        &lt;/item&gt;
      `
    }
  })
  return xml
}

let xmlOutput = mapDatafromJson(jsonFile);

//   ----------turn json object (derived from xml) into xml-----------   //

// const xmlOutput = 'Hello World'
// console.log(xmlOutput) // string

//   ----------SERVE VIEW TO MAIQUE -----------   //
app.get('/', (req, res) => {
  res.render('html', {xmlOutput})
});

//listen @ PORT
app.listen (PORT, () => {
  console.log(`Your server is running at port: ${PORT}`);
});
