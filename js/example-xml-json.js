const convert = require('xml-js');
const xml = require('fs').readFileSync('Google_Product_Feed_File_V3.1xml', 'utf8');
const options = {ignoreComment: true, alwaysChildren: true};
const result = convert.xml2js(xml, options); // or convert.xml2json(xml, options)

// Step 1
const xmlData = recquire('/Google_Product_Feed_File_V3.1xml');
// const parsedXml = xml.parseXML( xml )np
// Step 2
// Store data in a variable that consumes XML
const jsonData = { id, title, description, link, image_link, availability, google_product_category, product_type, identifier_exists, shipping_weight };
// Parse variable into JSON
// Step 3
// Build and render necessry object
function mapDataFromJson(jsonData) {
  const json = jsonData.map(function(json){
    console.log(json);
    return
    `<g: ${json.id}>  ${json.id.object.values(id)} </g${json.id}`
  });
  // return item object with these properties...
  // title: "${json.title}",
  // description: "${json.description}",
  // link: "${json.link}" ,
  // image_link: "${json.image_link}" ,
  // availability: "${json.availability}" ,
  // google_product_category: "${json.google_product_category}" ,
  // product_type: "${json.product_type}" ,
  // identifier_exists: "${json.identifier_exists}" ,
  // shipping_weight: "${json.shipping_weight}"
  return
  json
      `
    item = {
        id: "${json.id} " ,
    }
    `
  // mutateData(item);
};
// Create helper utility functions
// 4 prefix all keys with `<g: ${item.id}>  ${item.id.object.values(id)} </g${item.id}`
// function mutateData() {
// };
function start() {
  mapDataFromJson();
};
$(start());
