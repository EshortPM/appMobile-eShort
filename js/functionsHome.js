document.addEventListener("orientationchange",orientationChange,false);
document.addEventListener("deviceready", onDeviceReady, false);

function orientationChange(){
	deviceOrientation = (inArray(window.orientation, [0,180])) ? 'portrait' : 'landscape';
}




/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ DEVICE READY */
function onDeviceReady() {
	orientationChange();
	
	$(".btnLoginFB").swipe({
		tap:function(event, target) {
			FB.login(function(response){
				fbcon = response;
				FB.getLoginStatus(function(response1) {
					if (response1.status === 'connected') {
						showAlert('ESTA LOGUEADO EN FACEBOOK');			
					} else if (response1.status === 'not_authorized') {
						showAlert('ESTA LOGUEADO EN FACEBOOK SIN PERMISOS');
					} else {				
						showAlert('NO ESTA LOGUEADO EN FACEBOOK');			
					}
				}, true);			
			},{scope: 'email'});
		},
		excludedElements:"button, input, select, textarea, .noSwipe"
	});
	
	
	
}
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ DEVICE READY */
function showAlert(text){navigator.notification.alert(text,null,nombreApp,txt_btn_aceptar);}

function handleStatusChange(response) {
	if (response.authResponse) {
		showAlert('ESTA LOGUEADO EN FACEBOOK');
	} else {
		showAlert('NO ESTA LOGUEADO EN FACEBOOK');
	}
}