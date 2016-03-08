var data = [
	{
		question:'Who painted this?',
		answer1:'van Gogh',//correct
		answer2:'Picasso',
		answer3:'Michael Stearne',
		answer4:'Sylvester Stallone',
		answer5:'George Washington', 
		image:'assets/images/painting1.jpg',
		correct: '1'
	},

	{
		question:'Who painted this?',
		answer1:'Michaelangelo',
		answer2:'Pavan Katepalli',
		answer3:'Botticelli',//correct
		answer4:'Barrack Obama',
		answer5:'Abraham Lincon',  
		image:'assets/images/painting2.jpg',
		correct:'3'
	},
	
	{
		question:'Who painted this?',
		answer1:'Raphael',
		answer2:'Bill Clinton',
		answer3:'Kim Kardashian',
		answer4:'Vermeer',//correct
		answer5:'Rubina Pradhan', 
		image:'assets/images/painting3.jpg',
		correct: '4'
	},
	
	{
		question:'Who painted this?',
		answer1:'Donald Judd',
		answer2:'Owens?',
		answer3:'Brad Pitt',
		answer4:'Michael Bloomburg',
		answer5:'Grant Wood',  //correct
		image:'assets/images/painting4.jpg',
		correct:'5'
	},

	{
		question:'Who painted this?',
		answer1:'George W. Bush',
		answer2:'The first one',
		answer3:'It really is',
		answer4:'He really painted it',
		answer5:'He\'s not very good',  
		image:'assets/images/painting5.jpg',
		correct:'1'
	}
];

$( document ).ready(function() { 
	// debugger;

	$('#question').hide();	

	var correct = 0
	var count = 1
	var countdown = 10
	var stop = function () {  //stop function
		countdown = countdown;
	}
	var final = function () {
	// debugger;
	$('#start').show();
	$('#question').hide();
	$('#start h1').text('All Done!')
	$('#start p').text('Here\'s how you did:')
	$('#button').off('click')
	$('#button').animate({
		width:'300px',
		height:'100px'
	})
	$('#button').text('correct: '+correct)
	}

	var questionBlock = function () { //this is the whole game
		// debugger;
		// clearInterval(setIntervalID)
		countdown = 10 
		$('#secs').text(countdown) //displays how many secs are left
		
		var setIntervalID = setInterval(function counter(){ //counts down from 10

			if (countdown == 10 && count > data.length) {
				clearInterval(setIntervalID)
				stop();
				$('#questions').hide();
				final();
			} else if (countdown == 0) {
				clearInterval(setIntervalID)
				stop();
				count++
				questionBlock();

			} else if (count <= data.length){
				countdown = countdown - 1;
			} 
			$('#sec').text(countdown + " secs");

		}, 1000);
		
		$('#start').hide();  //hide the landing page
		$('.number').text(count);  //uses count to display what question you're on
		// $('#correct').text(correct); //display correct

		for (i=1;i<6;i++){  // 
			if (count <= data.length) { //if you're count is less than 
				// debugger;
			$('#a'+i).text(data[count-1]["answer"+i]) ///uses var count as index to load questions
		
			} else if (count > data.length) {
				$('#start').show();
				$('#question').hide();
			
			};

		};
		
		$('img').attr('src', 'assets/images/painting'+count+'.jpg'); 
		$('#question').show();
		
		$('input').on('click', function (){
			if (count <= data.length) {
				var chosen = $("input:checked").val();
				console.log(data[count-1]['answer' + chosen])

				if (chosen != data[count-1].correct && chosen != null) {
					debugger;
					clearInterval(setIntervalID);
					stop();
					$(this).prop('checked', false)
					chosen = null
					$('input').off('click');
				};

				if (chosen == data[count-1].correct) {
					debugger;
					// alert('correct')
					correct++
					// $('#correct').text(correct);
					clearInterval(setIntervalID);
					stop();
					$(this).prop('checked', false)
					chosen = null
					$('input').off('click')
				}; 
				count++
			};
			
			if (count > data.length && !($('input').is(':checked'))) {
				final()
			};
			if (count > data.length) {
				final();
			};

			if (count <= data.length) {
				questionBlock();
			};
		});

	};

	$('#button').on('click', function () {
		// debugger;
		questionBlock();
		// debugger;

	});

}); // *********************jQuery closing tag do not delete (again)









