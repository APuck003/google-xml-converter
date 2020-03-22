(function($){
  $.ajax({
    type: "GET",
    url: 'js/newJsonFile.json',
    dataType: "json",
    success: function (data) {
      mapDatafromJson(data)
    }
  })

})(jQuery);

const mapDatafromJson = (jsonFile) => {
  
  const data = jsonFile.map((data) => {
    const codeElement = document.querySelector('.xml')
    
    codeElement.innerText += `
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
    `
  })
}
