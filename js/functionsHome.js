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
	
	//FB.Event.subscribe('auth.statusChange', function(response){showAlert('FB.Event.subscribe -> auth.statusChange\n\n'+JSON.stringify(response));});
	//FB.Event.subscribe('auth.login', function(response){showAlert('FB.Event.subscribe -> auth.login\n\n'+JSON.stringify(response));});
	//FB.Event.subscribe('auth.logout', function(response){showAlert('FB.Event.subscribe -> auth.logout\n\n'+JSON.stringify(response));});
	//FB.Event.subscribe('auth.sessionChange', function(response){showAlert('FB.Event.subscribe -> auth.sessionChange\n\n'+JSON.stringify(response));});
	
	FB.getLoginStatus(function(response){		
		//showAlert('FB.getLoginStatus\n\n'+JSON.stringify(response));
		if (response.status == 'connected'){
			//showAlert('CONECTADO EN LA APP DE FACEBOOK\n\n'+response.authResponse.userId+'\n\n'+response.authResponse.userID);
			getUserFacebook(function(data){
				if (!data.error){
					user.fbdata = data;
					//showAlert('USER\n\n'+JSON.stringify(user.fbdata));
					getFriendsFacebook(function(){
						
						
						$(".btnLoginFB").hide();
						composePage();
					});
				}
			});
		}else{
			showAlert('NO ESTA CONECTADO CON LA APP DE FACEBOOK');
		}
	});
	
	
	
	$(".btnLoginFB").swipe({
		tap:function(event, target) {
			FB.login(function(response){
				//showAlert('FB.login\n\n'+JSON.stringify(response));
				getUserFacebook(function(data){
					if (!data.error){
						user.fbdata = data;
						//showAlert('USER\n\n'+JSON.stringify(user.fbdata));
						getFriendsFacebook(function(){
							
							
							$(".btnLoginFB").hide();
							composePage();
						});
					}
				});
			},{scope: 'email'});
		},
		excludedElements:"button, input, select, textarea, .noSwipe"
	});
	
	
	
	
}
/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ DEVICE READY */
function showAlert(text){navigator.notification.alert(text,null,nombreApp,txt_btn_aceptar);}
function getUserFacebook(funcionretorno){FB.api('/me', function(me) {funcionretorno(me);});}

function getFriendsFacebook(funcionretorno){
	//FB.api('/me/friends?fields=id,name,gender,locale', function(friends) {
	FB.api('/me/friends', { fields: 'id, name, gender, locale' },  function(friends) {
		var friendCount = friends.data.length;
		user.fbdata.friends = friends;
		user.fbdata.total_friends = friendCount;
		funcionretorno();
	});
}

function composePage(){
	$("#facebookUser-pic").css({
		'background-image':'url(https://graph.facebook.com/'+user.fbdata.id+'/picture)',
		'background-size':'100% 100%'
	});
	$("#facebookUser-name").html(user.fbdata.name);
	var htmlUser = '';
	htmlUser += 'ID: '+user.fbdata.id+'<br/>';
	htmlUser += 'First Name: '+user.fbdata.first_name+'<br/>';
	htmlUser += 'Last Name: '+user.fbdata.last_name+'<br/>';
	htmlUser += 'Email: '+user.fbdata.email+'<br/>';
	htmlUser += 'Gender: '+user.fbdata.gender+'<br/>';
	htmlUser += 'Locale: '+user.fbdata.locale;
	$("#facebookUser-data").html(htmlUser);
	
	//amigos
	for(var i=0; i<user.fbdata.total_friends; i++) {
		var friendId = user.fbdata.friends.data[i].id;
		var friendNombre = user.fbdata.friends.data[i].name;
		var friendGender = user.fbdata.friends.data[i].gender;
		var html_amigo = '';
		html_amigo += '<div class="friend-line">';
			html_amigo += '<div class="friend-pic" style="background-image:url(https://graph.facebook.com/'+friendId+'/picture); background-size:100% 100%;"></div>';
			html_amigo += '<div class="friend-name">'+friendNombre+'</div>';
		html_amigo += '</div>';
		$("#friendsContent").append(html_amigo);
	}
}


function sendInvitations(ids, cantidad){
	FB.ui({method: 'apprequests',
    	message: message_notifications,
    	title: title_notifications,
    	to: ids
  	}, function(data){
  		/*
		if (data && data.to) {
			
			var contador_envios_not = 0;
			var array_envios_ids = [];
			$.each(data.to, function(cont, value){
			
			});
			
		}else{			
			
			
			
		}
		*/
	});
}
