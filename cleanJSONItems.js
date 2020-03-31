const getMethods = (obj) => {
  let props = new Set()
  let currentObj = obj
  do {
    Object.getOwnPropertyNames(currentObj).map(item => props.add(item))
  } while ((currentObj = Object.getPrototypeOf(currentObj)))
  return [...props.keys()].filter(item => typeof obj[item] === 'function')
}

let jsonObject = require('./jsonFromXMLObject.json')

// const itemsArray = jsonObject.rss.channel

// console.log(getMethods(itemsArray))  // Object methods
// console.log(getMethods(itemTags))  // Array methods

const dataState = {
  id: undefined,
  title: undefined,
  description: undefined,
  link: undefined,
  image_link: undefined,
  availability: undefined,
  price: undefined,
  google_product_category: undefined,
  product_type: undefined,
  identifier_exists: undefined,
  item_group_id: undefined,
  shipping_weight: undefined
}

// const {availability, description, google_product_category, id, identifier_exists, image_link, item_group_id, link, price, product_type, shipping_weight, title} = dataState


const getJSONItems = () => {
  return jsonObject.rss.channel.item
  
}

const getItemChildTags = () => {
  
  return jsonObject.rss.channel.item.map((child) => {
    return child
  })
  
  // return getJSONItems.map((tags) => {
  //   return tags
  //   // console.log(tags)
  // })
}

// console.log(getItemChildTags())


const getIdByTag = () => {
  let tagValue = ''
  
  let idTag = jsonObject.rss.channel.item[0]
  let idKeys = Object.keys(idTag)
  let idValue = Object.values(idTag)[0]._text
  
  idKeys.map((tag) => {
    if (tag === 'g:id') {
      tagValue = idValue
    }
  })
  return tagValue
}


// console.log(getIdByTag())

const getTitleByTag = () => {
  let tagValue = ''
  
  let titleTag = jsonObject.rss.channel.item[1]
  let titleKeys = Object.keys(titleTag)
  let titleValue = Object.values(titleTag)[1]._text
  
  titleKeys.map((tag) => {
    if (tag === 'g:title') {
      tagValue = titleValue
    }
  })
  return tagValue
}

const getDescriptionByTag = (tag) => {
  if (tag === 'g:description') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getLinkByTag = (tag) => {
  if (tag === 'g:link') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getImageLinkByTag = (tag) => {
  if (tag === 'g:image_link') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getAvailabilityByTag = (tag) => {
  if (tag === 'g:availability') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getPriceByTag = (tag) => {
  if (tag === 'g:price') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getGoogleProductCategoryByTag = (tag) => {
  if (tag === 'g:google_product_category') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getProductTypeByTag = (tag) => {
  if (tag === 'g:product_type') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getIdentifierExistsByTag = (tag) => {
  if (tag === 'g:identifier_exists') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getItemGroupIdByTag = (tag) => {
  if (tag === 'g:item_group_id') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}

const getShippingWeightByTag = (tag) => {
  if (tag === 'g:shipping_weight') {
    itemObj.id = itemChild[(j + 1)]
  }
  
}


const getDataFromJSON = () => {
  let stateCopy = {...dataState}
  const {availability, description, google_product_category, id, identifier_exists, image_link, item_group_id, link, price, product_type, shipping_weight, title} = stateCopy
  
  stateCopy.id = getIdByTag()
  stateCopy.title = getTitleByTag()
  
  // if (stateCopy.id === undefined) {
  //   stateCopy.id = getIdByTag()
  // }
  
  // stateCopy.id = getIdByTag()
  console.log(stateCopy)
}

console.log(getDataFromJSON())
// getDataFromJSON()
