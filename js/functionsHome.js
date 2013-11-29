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
	
	/*FB.Event.subscribe('auth.statusChange', handleStatusChange);*/
	FB.getLoginStatus(function(response){
		
		showAlert(JSON.stringify(response));
		/*
		
		if (response.authResponse) {
			showAlert('ESTA LOGUEADO EN FACEBOOK');
			if (response1.status === 'connected') {
				showAlert('ESTA REGISTRADO EN LA APP');
				$(".btnLoginFB").hide();	
			} else if (response1.status === 'not_authorized') {
				showAlert('NO HA DADO LOS PERMISOS');
				$(".btnLoginFB").show();
			} else {				
				showAlert('NO ESTA LOGUEADO EN FACEBOOK');
				$(".btnLoginFB").show();		
			}
		} else {
			showAlert('NO ESTA LOGUEADO EN FACEBOOK');
			$(".btnLoginFB").show();
		}
		*/
	});
	
	
	/*
	$(".btnLoginFB").swipe({
		tap:function(event, target) {
			FB.login(function(response){
				FB.getLoginStatus(function(response1) {
					if (response1.status === 'connected') {
						showAlert('ESTA REGISTRADO EN LA APP');
						$(".btnLoginFB").hide();			
					} else if (response1.status === 'not_authorized') {
						showAlert('NO HA DADO LOS PERMISOS');
						$(".btnLoginFB").show();
					} else {				
						showAlert('NO ESTA LOGUEADO EN FACEBOOK');
						$(".btnLoginFB").show();			
					}
				}, true);		
			},{scope: 'email'});
		},
		excludedElements:"button, input, select, textarea, .noSwipe"
	});
	*/
	
	
	
}
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ DEVICE READY */
function showAlert(text){navigator.notification.alert(text,null,nombreApp,txt_btn_aceptar);}