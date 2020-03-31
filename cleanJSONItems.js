let jsonObject = require('./jsonFromXMLObject.json')
jsonObject = [jsonObject]

const getMethods = (obj) => {
  let props = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => props.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...props.keys()].filter(item => typeof obj[item] === 'function')
}


// console.log(getMethods(jsonObject))
// console.log(typeof jsonObject)
// console.log(jsonObject)


const getJSONItems = (jsonObj) => {
  return jsonObj.map((items) => {
    console.log(getMethods(items))
  })
}

console.log(getJSONItems(jsonObject))

const getItemChildTags = (items) => {
  return items.map((childTag) => {
    console.log(childTag)
  })
}


const getDataFromJSON = (jsonObj) => {
  
  // console.log(getMethods(jsonObj))
  // console.log(getJSONItems(jsonObj))
  
  const itemTags = getJSONItems(jsonObj)
  
  // console.log(getItemChildTags(itemTags))
  // console.log(getMethods(itemTags))
  
  getItemChildTags(itemTags)
}

// console.log(getDataFromJSON(jsonObject))
