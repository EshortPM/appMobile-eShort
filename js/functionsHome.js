document.addEventListener("orientationchange",orientationChange,false);
document.addEventListener("deviceready", onDeviceReady, false);

function orientationChange(){
	deviceOrientation = (inArray(window.orientation, [0,180])) ? 'portrait' : 'landscape';
}




/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ DEVICE READY */
function onDeviceReady() {
	orientationChange();
	
	FB.init({
		appId: '1438325273053701',
		nativeInterface: CDV.FB,
		status : true,
		//cookie : true,
		//xfbml : true,
		//frictionlessRequests : true,
		useCachedDialogs: false
	});
	
	FB.Event.subscribe('auth.statusChange', handleStatusChange);
	FB.getLoginStatus(handleStatusChange);
	
	
	
	$(".btnLoginFB").swipe({
		tap:function(event, target) {
			showAlert('INTENTAMOS EL LOGIN FB');
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