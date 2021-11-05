const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "making beats",
				weight: 9
			}, {
				text: "cricket",
				weight: 8
			}, {
				text: "cricket",
				weight: 10
			}, {
				text: "flstudio",
				weight: 6
			}, {
				text: "programming",
				weight: 11
			}, {
				text: "video editing",
				weight: 12
			}, {
				text: "graphic design",
				weight: 10
			},
			 {
				text: "mobile photography",
				weight: 9
			}, {
				text: "Nitin",
				weight: 15
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am an ECE Undergrad.","am a Full-Stack Web Developer.", "make beats when free.", "solve problems."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#F5F5F5", "background-color": "#228896"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
