$(document).ready(function(){
	
	$('button').on('click', function() {
		var wrestler = $(this).data('name')
		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=dc6zaTOxFJmzC&limit=3";
		$.ajax({
			url: queryURL,
			method: 'GET'

		})
			.done(function(response) {

				console.log(response)

				var results = response.data;

				for (var i = 0; i < results.length; i++){

					var wrestlerDiv = $('<div>');

					var p =$('<p/>');

					p.text(results[i].rating);

					var wrestlerImage = $('<img/>');

					wrestlerImage.addClass('wrestImg')

					wrestlerImage.attr('src', results[i].images.fixed_height.url);

					wrestlerImage.attr('data-still', results[i].images.fixed_height_url)

					wrestlerImage.attr('data-animate', results[i].images.fixed_height_url)

					.attr('data-state', 'still');

					wrestlerDiv.append(p);

					wrestlerDiv.append(wrestlerImage);

					wrestlerDiv.prependTo($('#gifs'));


				}

				$('.wrestImg').on('click', function() {

					var state = $(this).attr('data-state');
					console.log(this);

					if (state == 'still') {

					$(this).attr('src', $(this).data('animate'));

					$(this).attr('data-state', 'animate');

					} else {

					$(this).attr('src', $(this).data('still'));

					$(this).attr('data-state', 'still');
					}
				});
			});
	});

	var wrestlers = [''];

		//This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
                // prevent default action on element with id of mySubmitButton
                // for submit buttons, this prevents POST action / page reload
                 event.preventDefault();
        	var wrestlerButton = $("#gif-input").val();
        	//adds the new wrestler

        	var newButton = $("<button/>").addClass( "btn btn-info wrestler").attr('data-name', wrestlerButton).html(
        		wrestlerButton).css({'margin': '5px'});

        	$("#wrestlerbuttons").append(newButton);
        		console.log("Work");

        	queryURL = "https://api.giphy.com/v1/gifs/search?q=" + wrestlerButton + "&api_key=dc6zaTOxFJmzC&limit=3";
        		console.log(wrestlerButton);

        	$.ajax({
        		url: queryURL,
        		method: 'GET'
        	})

        	.done(function(response) {

        	var results = response.data;

        		for (var i=0; i < results.length; i++) {

        			var wrestlerDiv = $('<div/>');

        			var p =$('<p/>');

        			p.text(results[i].rating);

        			var wrestlerImage = $('<img/>');

        			wrestlerImage.addClass('wrestImg');

        			wrestlerImage.attr('src', results[i].images.fixed_height_still.url);

        			wrestlerImage.attr('data-still', results[i].images.fixed_height_still.url)

        			wrestlerImage.attr('data-animate', results[i].images.fixed_height.url)

        			.attr('data-state', 'still');

        			wrestlerDiv.append(p);

        			wrestlerDiv.append(wrestlerImage);

        			wrestlerDiv.prependTo($('gifs'));

        		}

        		$('.wrestImg').on('click', function() {

        			var state = $(this).attr('data-state');
        			console.log(this);

        			if (state == 'still') {

        				$(this).attr('src', $(this).data('animate'));

        				$(this).attr('data-state', 'animate');

        			} else {

        				$(this).attr('src', $(this).data('still'));

        				$(this).attr('data-state', 'still');

        			}
        		});
        	});

        	$("gif-input").val("");
        	return false;
        })
});