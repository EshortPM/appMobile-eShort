var user = new Object();
var parser = new UAParser();
var jsscreen = screen.width + 'x' + screen.height; if ( screen.pixelDepth ) jsscreen += " ("+screen.pixelDepth+")";
user.env = {'resolution' : screen.pixelDepth,'userAgent' : navigator.userAgent,'appName': navigator.appName,'browser' : parser.getBrowser(),'os' : parser.getOS(),'screen': jsscreen,'engine': parser.getEngine(),'cpu': parser.getCPU(),'device': parser.getDevice()};
var sOapp = user.env.os.name.substr(0,3);
sOapp = (sOapp.toLowerCase() == 'ios') ? 'ios' : 'android';
user.trace = 'home';
user.typeWeb = 'app';
var deviceOrientation;
var nombreApp = 'eShort';
var txt_btn_aceptar = "Aceptar";
var txt_btn_cancelar = "Cancelar";
var txt_btn_si = "Si";
var txt_btn_no = "No";

//Facebook VARS
var fbApp = new Object();
fbApp.dirRaiz = 'https://e-short.com/apps/';
fbApp.pagePicture = 'https://e-short.com/apps/imgs/shareFB.jpg';
var facebook_post_name = 'AppNative Post Name';
var facebook_post_caption = 'AppNative Post Caption';
var facebook_post_description = 'AppNative Post Description';
var message_notifications = 'AppNative Notification Mesaje';
var title_notifications = 'AppNative Notification Title';