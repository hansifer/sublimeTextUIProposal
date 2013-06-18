!function() {
	var menuShown = false;
	var filepathShown = false;

	function hideMenu(e) {
		if (menuShown) {
			if (!filepathShown) {
				$('#menubar').addClass('barHidden');
				$('#code').css('top', '7px');
				$('#code').css('height', '719px');
				$('#minimap').css('height', '719px');
				$('#minimap').css('top', '7px');
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
			$('#code').css('top', '28px');
			$('#minimap').css('top', '35px');
			$('#minimap').css('height', '698px');
			$('#code').css('height', '698px');
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
				$('#code').css('top', '7px');
				$('#code').css('height', '719px');
				$('#minimap').css('height', '719px');
				$('#minimap').css('top', '7px');
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
			$('#code').css('top', '28px');
			$('#code').css('height', '698px');
			$('#minimap').css('height', '698px');
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

}();
