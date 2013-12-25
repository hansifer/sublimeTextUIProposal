! function() {
	var menuShown = false;
	var filepathShown = false;

	function hideMenu(e) {
		if (menuShown) {
			if (!filepathShown) {
				$('#menubar').addClass('barHidden');
				$('#code').css('top', '0px');
				$('#code').css('height', '726px');
				$('#minimap').css('top', '9px');
				$('#minimap').css('height', '716px');
				$('#scrollThumb').css('top', '39px');
			}
			menuShown = !menuShown;

			$('#btnMenubar').removeClass('active');
			e && e.stopPropagation();
		}
	}

	function showMenu(e) { 
		if (!menuShown) {
			$('#menubar').removeClass('barHidden');
			$('#code').css('top', '19px');
			$('#code').css('height', '708px');
			$('#minimap').css('top', '35px');
			$('#minimap').css('height', '691px');
			$('#scrollThumb').css('top', '67px');
			$('#menubarText').css('background-image', 'url("img/menubarText.png")')
			menuShown = !menuShown;

			$('#btnMenubar').addClass('active');
			e && e.stopPropagation();
			hideFilepath(e);
		}
	}

	function hideFilepath(e) {
		if (filepathShown) {
			if (!menuShown) {
				$('#menubar').addClass('barHidden');
				$('#code').css('top', '0px');
				$('#code').css('height', '726px');
				$('#minimap').css('height', '716px');
				$('#minimap').css('top', '9px');
				$('#scrollThumb').css('top', '39px');
			}
			filepathShown = !filepathShown;

			$('#btnFilepath').removeClass('active');
			e && e.stopPropagation();
		}
	}

	function showFilepath(e) {
		if (!filepathShown) {
			$('#menubar').removeClass('barHidden');
			$('#code').css('top', '19px');
			$('#code').css('height', '708px');
			$('#minimap').css('height', '691px');
			$('#minimap').css('top', '35px');
			$('#scrollThumb').css('top', '67px');
			$('#menubarText').css('background-image', 'url("img/filepathText.png")')
			filepathShown = !filepathShown;

			$('#btnFilepath').addClass('active');
			e && e.stopPropagation();
			hideMenu(e);
		}
	}

	$('#btnSidebar').on('click', function() {
		if ($('#code').hasClass('code_sidebar')) {
			$('#code').removeClass('code_sidebar');
		} else {
			$('#code').addClass('code_sidebar');
		}
	});

	$('#btnStatusbar').on('click', function() {
		if ($('#statusbar').hasClass('barHidden')) {
			$('#statusbar').removeClass('barHidden');
		} else {
			$('#statusbar').addClass('barHidden');
		}
	});

	$('#btnMenubar').on('click', function(e) {
		if (menuShown) {
			hideMenu(e);
		} else {
			showMenu(e);
		}
	});

	$('#btnFilepath').on('click', function(e) {
		if (filepathShown) {
			hideFilepath(e);
		} else {
			showFilepath(e);
		}
	});

	$('#btnMinimap').on('click', function() {
		if ($('#minimap').hasClass('minimap')) {
			$('#minimap').removeClass('minimap');
		} else {
			$('#minimap').addClass('minimap');
		}
	});

	var themeColorPerm = 4;
	var themeColors = [
		['#423030', 'rgb(63, 0, 0)'],
		['#454530', 'rgb(73, 70, 0)'],
		['#304634', 'rgb(0, 75, 15)'],
		['#303e56', 'hsl(219,94%, 26%)'],
		['#393939', 'hsl(0, 0%, 13%)'],
		/*['#483842', 'hsl(322,48%,22%)'],*/
	];

	$('#swatch1').on('click mouseover mouseout', function(e) {
		if (e.type == 'mouseout') {
			$('.sublimeWindowOverlay').css('background-color', themeColors[themeColorPerm][1]);
			$('.contentArea').css('background-color', themeColors[themeColorPerm][0]);
		} else {
			$('.sublimeWindowOverlay').css('background-color', themeColors[0][1]);
			$('.contentArea').css('background-color', themeColors[0][0]);

			if (e.type == 'click') {
				themeColorPerm = 0;
			}
		}
	});

	$('#swatch2').on('click mouseover mouseout', function(e) {
		if (e.type == 'mouseout') {
			$('.sublimeWindowOverlay').css('background-color', themeColors[themeColorPerm][1]);
			$('.contentArea').css('background-color', themeColors[themeColorPerm][0]);
		} else {
			$('.sublimeWindowOverlay').css('background-color', themeColors[1][1]);
			$('.contentArea').css('background-color', themeColors[1][0]);

			if (e.type == 'click') {
				themeColorPerm = 1;
			}
		}
	});

	$('#swatch3').on('click mouseover mouseout', function(e) {
		if (e.type == 'mouseout') {
			$('.sublimeWindowOverlay').css('background-color', themeColors[themeColorPerm][1]);
			$('.contentArea').css('background-color', themeColors[themeColorPerm][0]);
		} else {
			$('.sublimeWindowOverlay').css('background-color', themeColors[2][1]);
			$('.contentArea').css('background-color', themeColors[2][0]);

			if (e.type == 'click') {
				themeColorPerm = 2;
			}
		}
	});

	$('#swatch4').on('click mouseover mouseout', function(e) {
		if (e.type == 'mouseout') {
			$('.sublimeWindowOverlay').css('background-color', themeColors[themeColorPerm][1]);
			$('.contentArea').css('background-color', themeColors[themeColorPerm][0]);
		} else {
			$('.sublimeWindowOverlay').css('background-color', themeColors[3][1]);
			$('.contentArea').css('background-color', themeColors[3][0]);

			if (e.type == 'click') {
				themeColorPerm = 3;
			}
		}
	});

	$('#swatch5').on('click mouseover mouseout', function(e) {
		if (e.type == 'mouseout') {
			$('.sublimeWindowOverlay').css('background-color', themeColors[themeColorPerm][1]);
			$('.contentArea').css('background-color', themeColors[themeColorPerm][0]);
		} else {
			$('.sublimeWindowOverlay').css('background-color', themeColors[4][1]);
			$('.contentArea').css('background-color', themeColors[4][0]);

			if (e.type == 'click') {
				themeColorPerm = 4;
			}
		}
	});

	$().ready(function() {
		$('#swatch1').css('background-color', themeColors[0][0]);
		$('#swatch2').css('background-color', themeColors[1][0]);
		$('#swatch3').css('background-color', themeColors[2][0]);
		$('#swatch4').css('background-color', themeColors[3][0]);
		$('#swatch5').css('background-color', themeColors[4][0]);
		$('#contentArea').addClass('contentArea');
	});

}();
