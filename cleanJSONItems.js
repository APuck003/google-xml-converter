const getMethods = (obj) => {
    let props = new Set()
    let currentObj = obj
    do {
        Object.getOwnPropertyNames(currentObj).map(item => props.add(item))
    } while ((currentObj = Object.getPrototypeOf(currentObj)))
    return [...props.keys()].filter(item => typeof obj[item] === 'function')
}

let jsonObject = require('./jsonFromXMLObject.json')
let itemsArray = jsonObject.rss.channel.item

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

const populateUndefinedTags = (item) => {
    let replacementImageLink = 'https://www.marxfoods.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Mont%20Blanc/Development/img/no_image_available.png';
    
    let link = item.link.split('.com/').pop().split('?')[0].split('-').join(' ')
    
    if (!item.title) {
        item.title = link
    }
    
    if (!item.description) {
        item.description = link
    }
    
    if (!item.image_link) {
        item.image_link = replacementImageLink
    }
    
    return item
}


const sterilizeData = (data) => {
    let newDataArray = []
    let currentItem = {}
    
    // Loop through items
    Object.values(data).map((item) => {
        currentItem = {}
        
        // Loop through key: value pair in item
        Object.keys(item).map((value) => {
            currentItem[value.slice(2)] = item[value]._text
        })
        currentItem = {...dataState, ...currentItem}
        currentItem = populateUndefinedTags(currentItem)
      newDataArray.push(currentItem)
    })
    return newDataArray
}

itemsArray = sterilizeData(itemsArray)

const getIdByTag = (items) => {
    let ids = []
    items.map((item) => {
        ids.push(item.id)
    })
    return ids
}


// returns all titles in array
const getTitleByTag = (items) => {
    let titles = []
    items.map((item) => {
        titles.push(item.title)
    })
    return titles
}


// TODO: Add logic to check each tag function
// TODO: Make sure only HTML in description is cleaned
// TODO: Build function to handle parent-child item_group_id relationship

const getDescriptionByTag = (items) => {
    let descriptions = []
    items.map((item) => {
        // console.log([item])
        console.log(item.description.replace(/(<([^>]+)>)/ig, '')).replace(/(&.+;)/ig)
        // descriptions.push(item.description.replace(/(<([^>]+)>)/ig, ''))
    })
    // return descriptions
    // console.log(descriptions)
}


// const getGoogleProductCategoryByTag = (items) => {
//     let googleProducts = []
//
//     items.map((item) => {
//         // let mapArray = item.split(" ").map(a) => {
//         //     a.replace('&','&amp:');
//         // };
//         // console.log(mapArray)
//         // console.log(item.google_product_category)
//         // console.log(item.google_product_category.replace(/(&.+;)/g, ''))
//         // console.log(item.google_product_category.split(' ').toString().replace('&', '&amp;').join(' '))
//         // googleProducts.push(item.google_product_category)
//     })
//     // return titles
// }
//
// getGoogleProductCategoryByTag(itemsArray)

// getDescriptionByTag(itemsArray)

//
// const getLinkByTag = (tag) => {
//
// }
//
// const getImageLinkByTag = (tag) => {
//
// }
//
// const getAvailabilityByTag = (tag) => {
//
// }
//
// const getPriceByTag = (tag) => {
//
// }
//
// const getGoogleProductCategoryByTag = (tag) => {
//
// }
//
// const getProductTypeByTag = (tag) => {
//
// }
//
// const getIdentifierExistsByTag = (tag) => {
//
// }
//
// const getItemGroupIdByTag = (tag) => {
//
// }
//
// const getShippingWeightByTag = (tag) => {
//
// }



// itemsArray = sterilizeData(itemsArray)

// console.log(itemsArray)
// console.log(getTitleByTag(itemsArray))
// console.log(getIdByTag(itemsArray))
// console.log(sterilizeData(itemsArray).length)
