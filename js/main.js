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
			$('#code').css('height', '707px');
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
			$('#code').css('height', '707px');
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
		['hsl(29, 46%, 25%)', 'hsl(29, 46%, 25%)'],
		['hsl(60, 49%, 18%)', 'hsl(60, 49%, 18%)'],
		['hsl(84, 33%, 26%)', 'hsl(84, 33%, 26%)'],
		['hsl(213, 46%, 42%)', 'hsl(213, 46%, 42%)'],
		['hsl(0, 0%, 36%)', 'hsl(0, 0%, 36%)'],
		/*['#483842', 'hsl(322,48%,22%)'],*/
	];

	$('.tabselected').on('mouseover',function() {
		$(this).append('<img id="x" src="img/x.PNG" style="position:absolute;top:16px;left:124px;">');
	});

	$('.tabselected').on('mouseout',function() {
		$('#x').remove();
	});

	$('#tab1, #tab2, #tab3').on('mouseover',function() {
		$(this).css('background-color','hsla(0,0%,0%,.16)');
		$(this).css('background-image','url(img/x.PNG)');
		$(this).css('background-repeat','no-repeat');
		$(this).css('background-position','124px 16px');
	});

	$('#tab1, #tab2, #tab3').on('mouseout',function() {
		$(this).css('background-color','');
		$(this).css('background-image','');
		$(this).css('background-repeat','');
		$(this).css('background-position','');
	});

	$('#swatch1, #swatch2, #swatch3, #swatch4, #swatch5').on('click mouseover mouseout', function(e) {
		var colorPerm;

		switch (this.id) {
			case 'swatch1':
				colorPerm = 0;
				break;
			case 'swatch2':
				colorPerm = 1;
				break;
			case 'swatch3':
				colorPerm = 2;
				break;
			case 'swatch4':
				colorPerm = 3;
				break;
			case 'swatch5':
				colorPerm = 4;
				break;
		}

		if (e.type == 'mouseout') {
			$('.tabstrip').css('background-color', themeColors[themeColorPerm][0]);
			$('.contentArea, .sublimeWindow').css('background-color', themeColors[themeColorPerm][0]);
		} else {
			$('.tabstrip').css('background-color', themeColors[colorPerm][0]);
			$('.contentArea, .sublimeWindow').css('background-color', themeColors[colorPerm][0]);

			if (e.type == 'click') {
				themeColorPerm = colorPerm;
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
