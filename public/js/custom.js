$(document).ready(function () {

	// Initialize all modals.
	$('.modal').modal();

	let scrapeButton = $("nav a.btn.btn-floating");
	let scrapeIcon = scrapeButton.find("i");

	scrapeButton.hover(function () {
		// Add pulse effect to scrape button
		$(this).addClass("pulse appclr_neon_green");
	}, function () {
		// Remove pulse effect to scrape button
		$(this).removeClass("pulse appclr_neon_green");
	});

	scrapeButton.on("click", function name(event) {
		Materialize.toast('Fetching new stories!', 3000) ;
		$.get('/scrape', function name(results) {
			console.log(results);
		})
	});

});