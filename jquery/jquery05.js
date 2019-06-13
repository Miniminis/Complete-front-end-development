/*xml 서버로부터 */

var xmlstr ='';

xmlstr += '<Fruits>';
xmlstr += ' <fruit>';
xmlstr += '     <name>apple</name>';
xmlstr += '     <sweet>5</sweet>';
xmlstr += '     <price>300won</price>';
xmlstr += ' </fruit>';
xmlstr += ' <fruit>';
xmlstr += '     <name>banana</name>';
xmlstr += '     <sweet>8</sweet>';
xmlstr += '     <price>500won</price>';
xmlstr += ' </fruit>';
xmlstr += ' <fruit>';
xmlstr += '     <name>mango</name>';
xmlstr += '     <sweet>10</sweet>';
xmlstr += '     <price>50won</price>';
xmlstr += ' </fruit>';
xmlstr += '</Fruits>';

var xmldoc = $.parseXML(xmlstr);

$(xmldoc).find('fruit').each(function(index){
    
    var name = $(this).find('name').text();
    var sweet = $(this).find('sweet').text();
    var price = $(this).find('price').text();
    
    var fruitShop =''; 
    
    fruitShop += '<div>';
    fruitShop += '  <h2>'+name+'['+ index+']'+'</h2>';
    fruitShop += '  <p>'+sweet+'</p>';
    fruitShop += '  <p>'+price+'</p>';
    fruitShop += '</div>';
    
    document.body.innerHTML += fruitShop;
    
    
});