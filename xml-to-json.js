const fs = require('fs')

// if NO id DO NOT render item  [done]
// if NO title { take tile from slug  https://www.marxfoods.com/steak and after "/" becomes temp title} title steak
// if NO image_link replace with href"/www.ekrelerjk/${title};
// if NO descrition { take tile from slug  https://www.marxfoods.com/ and after "/" becomes temp title}
// if NO data.id || NO data.title || NO data.descrition {}

// New Requirements:
// fix image_link tag
// abstract if/else into functional paradigm.

const parseXML = () => {
  
  let file = fs.readFileSync(__dirname + '/data/Google_Product_Feed_File_Meat_Yogi_23_march.xml').toString().trim()
  
//   let file = `
// <item>
//     <g:id>25221</g:id>
//     <g:link>https://www.marxfoods.com/Grassfed-Wagyu-Beef-Burgers?custcolmtxinv&#x3D;68</g:link>
//     <g:image_link>https://www.marxfoods.com/images/Grassfed-Wagyu-Beef-Burgers_Grass-fedWagyuBeefBurgers-1.jpg</g:image_link>
//     <g:availability>in stock</g:availability>
//     <g:price>125 USD</g:price>
//     <g:google_product_category>Food, Beverages &amp; Tobacco &amp;gt; Food Items &amp;gt; Meat, Seafood &amp; Eggs &amp;gt; Meat</g:google_product_category>
//     <g:product_type>Food, Beverages &amp; Tobacco &amp;gt; Food Items &amp;gt; Meat, Seafood &amp; Eggs &amp;gt; Meat</g:product_type>
//     <g:identifier_exists>No</g:identifier_exists>
//     <g:item_group_id>25220</g:item_group_id>
//     <g:shipping_weight>1 lb</g:shipping_weight>
// </item>
//
// <item>
//     <g:id>24352</g:id>
//     <g:title>Wagyu Beef Outer Skirt Steaks</g:title>
//     <g:description>Skirt steaks are a long, thin cut from the plate primal. They offer bold, beefy flavor at a more affordable price than highly prized ribeyes, tenderloins, etc. Inner skirt steaks are the quintessential fajita cut, while outer skirt steaks are more highly prized and usually served sliced as a center-of-plate steak rather than as an ingredient.&lt;br /&gt;&lt;br /&gt;Wagyu beef is from a breed of cow specially raised to increase its percentage of fat marbling to consistently high levels. More marbling leads to more flavor, tenderness, and moisture as the fat melts during the cooking process. This wagyu beef is from domestic cattle that are descendants from Japanese herds and raised in the United States. Their intricately marbled beef (commonly known as &quot;Kobe beef&quot;, American Kobe beef or Kobe-style beef) is legendary and the result of careful breeding and a highly regimented diet. That marbling creates beef that is the most tender, juicy, and flavorful available.&lt;br /&gt;&lt;br /&gt;</g:description>
//     <g:link>https://www.marxfoods.com/wagyu-outer-skirt-steaks</g:link>
//     <g:availability>in stock</g:availability>
//     <g:price>362 USD</g:price>
//     <g:google_product_category>Food, Beverages &amp; Tobacco &amp;gt; Food Items &amp;gt; Meat, Seafood &amp; Eggs &amp;gt; Meat</g:google_product_category>
//     <g:product_type>Food, Beverages &amp; Tobacco &amp;gt; Food Items &amp;gt; Meat, Seafood &amp; Eggs &amp;gt; Meat</g:product_type>
//     <g:identifier_exists>No</g:identifier_exists>
//     <g:item_group_id>2397</g:item_group_id>
//     <g:shipping_weight>1 lb</g:shipping_weight>
// </item>
// <item>
//     <g:id>25205</g:id>
//     <g:title>Wagyu Cowboy Steaks</g:title>
//     <g:description>Cowboy steaks are bone-in ribeye chops beloved by steak fans for the big bold beefy flavor. The bone has been cleaned of meat &amp;amp; fat (&quot;frenched&quot;) for a more visually impressive presentation. These wagyu cowboy steaks are slightly larger and have a bit more meat compared to a standard ribeye steak. &lt;br /&gt;&lt;br /&gt;This wagyu beef (aka kobe-style beef) is from a breed of cattle descended from Japanese herds and specially raised in Texas to increase its percentage of fat marbling to consistently high levels. More marbling leads to more flavor, tenderness, and moisture as the fat melts during the cooking process. Thus, wagyu beef cowboy steaks are &lt;br /&gt;&lt;br /&gt;</g:description>
//     <g:link>https://www.marxfoods.com/wagyu-cowboy-steak</g:link>
//     <g:availability>in stock</g:availability>
//     <g:price>434 USD</g:price>
//     <g:google_product_category>Food, Beverages &amp; Tobacco &amp;gt; Food Items &amp;gt; Meat, Seafood &amp; Eggs &amp;gt; Meat</g:google_product_category>
//     <g:product_type>Food, Beverages &amp; Tobacco &amp;gt; Food Items &amp;gt; Meat, Seafood &amp; Eggs &amp;gt; Meat</g:product_type>
//     <g:identifier_exists>No</g:identifier_exists>
//     <g:item_group_id>2397</g:item_group_id>
//     <g:shipping_weight>1 lb</g:shipping_weight>
// </item>`;
  
  let defaultObj = {
    id: 'id',
    title: undefined,
    description: undefined,
    link: 'link',
    image_link: undefined,
    availability: 'availability',
    price: 'price',
    google_product_category: 'google product category',
    product_type: 'product type',
    identifier_exists: 'yes/no',
    item_group_id: 'item group id',
    shipping_weight: 'shipping weight'
  }
  
  
  const itemArr = file.split('<item>')
  let product = []
  // let product = {}
  
  for (let i = 1; i < itemArr.length; i++) {
    // console.log('itemArr['+i+']: ', itemArr[0]);
    if (itemArr[i]) {
      let itemObj = {}
      let itemChild = itemArr[i].split(/[<>]+/)
  
      // console.log('============================== new pass ==========================');
      for (let j = 0; j < itemChild.length; j++) {
        
        if (itemChild[j] === 'g:id') {
          itemObj.id = itemChild[(j + 1)]
          // console.log('id: ', itemObj.id);
          
        }
        
        if (itemChild[j] === 'g:title') {
          // console.log(itemChild[j].value)
          itemObj.title = itemChild[(j + 1)]
          // console.log('title: ', itemObj.title);
        }
        
        if (itemChild[j] === 'g:description') {
          let descArr = itemChild[(j + 1)].split([' '])
          let descStr = descArr.join(' ')
          let cleanGreater = descStr.split("&gt;").join(">")
          let cleanLesser = cleanGreater.split("&lt;").join("<")
          let cleanAnd = cleanLesser.split("&amp;").join("&")
          let cleanBrOpenTag = cleanAnd.split("<br /><br />").join("")
          let firstClean = cleanBrOpenTag.replace(/(\r\n|\n|\r)/gm, " ")
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
          // console.log('description: ', itemObj.description);
        }
        
        if (itemChild[j] === 'g:link') {
          itemObj.link = itemChild[(j + 1)]
          // console.log('link: ', itemObj.link);
        }
        if (itemChild[j] === 'g:image_link') {
          itemObj.image_link = itemChild[(j + 1)]
          // console.log('image_link: ', itemObj.image_link);
        }
        if (itemChild[j] === 'g:availability') {
          itemObj.availability = itemChild[(j + 1)]
          // console.log('availability: ', itemObj.availability);
        }
        if (itemChild[j] === 'g:price') {
          itemObj.price = itemChild[(j + 1)]
          // console.log('price: ', itemObj.price)
        }
        if (itemChild[j] === 'g:google_product_category') {
          itemObj.google_product_category = itemChild[(j + 1)]
          // console.log('google_product_category: ', itemObj.google_product_category);
        }
        if (itemChild[j] === 'g:product_type') {
          itemObj.product_type = itemChild[(j + 1)]
          // console.log('product_type: ', itemObj.product_type);
        }
        if (itemChild[j] === 'g:identifier_exists') {
          itemObj.identifier_exists = itemChild[(j + 1)]
          // console.log('identifier_exists: ', itemObj.identifier_exists);
        }
        if (itemChild[j] === 'g:item_group_id') {
          itemObj.item_group_id = itemChild[(j + 1)]
          // console.log('item_group_id: ', itemObj.item_group_id);
        }
        if (itemChild[j] === 'g:shipping_weight') {
          itemObj.shipping_weight = itemChild[(j + 1)]
          // console.log('shipping_weight: ', itemObj.shipping_weight);
        }
      }
    let mergeObj = {}
  
    let linkEndParse = itemObj.link.indexOf('?')
    let linkSlug = itemObj.link.slice(26, linkEndParse).replace(/-/g, " ")
    let newImage_link = 'https://www.marxfoods.com/SSP%20Applications/NetSuite%20Inc.%20-%20SCA%20Mont%20Blanc/Development/img/no_image_available.png';
    
    for (let attrname in defaultObj) {
        mergeObj[attrname] = defaultObj[attrname];
    }
  
    for (let attrname in itemObj) {
      mergeObj[attrname] = itemObj[attrname];
    }
  
    if (mergeObj.title === undefined || mergeObj.description === undefined) {
      mergeObj['title'] = linkSlug
      mergeObj['description'] = linkSlug
    }

    if (mergeObj.image_link === undefined) {
      mergeObj['image_link'] = newImage_link
    }
    
    product.push(mergeObj)
    
    }
  }
  
  // console.log(product)
  return product

}

// parseXML()


fs.writeFile('newJsonFile.json', JSON.stringify(parseXML(), null, 1), function(err, result) {
  if (err) console.log('error', err)
})
