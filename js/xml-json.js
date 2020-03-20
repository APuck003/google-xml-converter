const xmlToJson = (xml) => {
  let obj = {};
  
  if (xml.nodeType === 1) {
    // element
    // do attributes
    if (xml.attributes.length > 0) {
      obj["@attributes"] = {};
      for (let j = 0; j < xml.attributes.length; j++) {
        let attribute = xml.attributes.item(j);
        obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
      }
    }
  } else if (xml.nodeType === 3) {
    // obj = xml.nodeValue;
  }
  
  
  return obj;
}


function printOutput(output){
  
  document.getElementById("output").value = JSON.stringify(output, null, 4)
  
}
