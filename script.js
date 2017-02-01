/**
 * Created by Ramkumar on 30-01-2017.
 */

      $(document).ready( function(){
		// variable to identify the index of the image:
														var $ii=1; 									
		// getting "images.JSON" to fetch image infos:
														$.getJSON('images.json', function(data) {        
		// reading datas using for each loop         
														$.each(data.images, function(i,f) { 
		// selecting class images using selector to insert images
														$("#images").append("<li><img src='"+f.url+"' style='width:120px; height:120px;' class='img-responsive img-rounded' alt='"+f.caption+"'/> <span><strong>"+ $ii++ +"</strong></span></li>");
		 });

             });
		 
      });
	
		$(function() {
	//Reorder elements in a list using the mouse.
		$('#images').sortable({
			
			start: function(event, ui) {
				ui.item.addClass('active');
			},
			stop: function(event, ui) {
				ui.item.removeClass('active').effect(
					'highlight', 
					{ color : '#000' }, 1000, function() {
					$.each($('#images li'), function(index, event) {
						$(this).children('span').html(parseInt(index, 10)+1);
					});
				});
			}
			
		});
	$('#images').disableSelection();
	

});
		
    
