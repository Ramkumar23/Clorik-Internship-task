      $(document).ready( function(){
        $.getJSON('item.json', function(data) {        
           $.each(data.items, function(i,f) { 
         $("ul").append("<img src="+ f.url +" id="+"'image'/> <li>Caption:"+f.caption+" </li><br />");
             });
           });

    
      });