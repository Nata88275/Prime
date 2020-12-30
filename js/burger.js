

//---добавление клаcсов бургеру и меню

$(document).ready(function () {
	$('#burger').click(function () {
		$(".header-menu__icon, #menu").toggleClass('active');
	});
});