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
		status     : true, // check login status
		//cookie     : true, // enable cookies to allow the server to access the session
		// xfbml: true,
		useCachedDialogs: false
	});
	FB.Event.subscribe('auth.statusChange', handleStatusChange);
	FB.getLoginStatus(handleStatusChange);
	
	
	
	
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