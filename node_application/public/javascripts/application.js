$(function(){
	$("form").validate();
	
	$("a[data-method]").click(function(event){
		event.preventDefault();
		
		var elem = $(this);
		var alertMsg = elem.attr('data-confirm');

		var userSelection = false;
		if (alertMsg != '') {
			userSelection = confirm(alertMsg);
		} else {
			userSelection = true;
		}

		if (userSelection) {
			var form = $('<form action="'+ this.href +'" method="post"></form>'),
			metadata_input = '<input name="_method" value="' + elem.attr('data-method') + '" type="hidden" />';

			form.hide().append(metadata_input).appendTo('body');
      		form.submit();
		}
	});
});