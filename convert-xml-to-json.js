const fs = require('fs')
const convert = require('xml-js')

const xmlFile = 'data/Google_Product_Feed_File_final_30_march_2020_yogi.xml'

let xml = fs.readFileSync(xmlFile, 'utf8')

let result = convert.xml2json(xml, {compact: true, spaces: 4})

fs.writeFile('jsonFromXMLObject.json', result, function(err, result) {
    if (err) console.log('error', err)
})
