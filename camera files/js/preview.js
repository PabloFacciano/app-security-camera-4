var ip=document.location.host;
var httport=window.location.port;
var locate=location.href.replace('preview.html','');
var CID="player1";
var pnum="a";
var pnums="c";

function winload()
{
    if ((navigator.platform != "Mac68K") && (navigator.platform != "MacPPC") && (navigator.platform != "Macintosh") && (navigator.platform != "MacIntel")) {
        if ((navigator.appVersion.indexOf("iPod") != -1) || (navigator.appVersion.indexOf("iPhone") != -1)) {
            document.getElementById("playimg").style.visibility = "hidden";
            document.getElementById("audioimg").style.visibility = "hidden";
            document.getElementById("micimg").style.visibility = "hidden";
            document.getElementById("snapimg").style.visibility = "hidden";
            document.getElementById("recordimg").style.visibility = "hidden";
            document.getElementById("zoomimg").style.visibility = "hidden";
            document.getElementById("winviewimg").style.visibility = "hidden";
        }
        else {
            var ssrcwin = document.getElementById("winviewimg").src.replace(locate, '');
            var imgsrcwin = ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
            if (imgsrcwin == "x1.gif") {
                changwin(1);
				var ssrc11=document.getElementById("str11img").src.replace(locate,'');
				var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
				if (imgsrc11=="1_over.png")
				{ 
					stream11();
				} 
				
				var ssrc12=document.getElementById("str12img").src.replace(locate,'');
				var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
				if (imgsrc12=="2_over.png")
				{
					stream12();
				} 
				
				var ssrc13=document.getElementById("str13img").src.replace(locate,'');
				var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
				if (imgsrc13=="3_over.png")
				{ 
					stream13();
				} 
            }
            else if (imgsrcwin == "x4.gif") {
                changwin(4);
				var ssrc11=document.getElementById("str11img").src.replace(locate,'');
				var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
				if (imgsrc11=="1_over.png")
				{ 
					stream11();
				} 
				
				var ssrc12=document.getElementById("str12img").src.replace(locate,'');
				var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
				if (imgsrc12=="2_over.png")
				{
					stream12();
				} 
				
				var ssrc13=document.getElementById("str13img").src.replace(locate,'');
				var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
				if (imgsrc13=="3_over.png")
				{ 
					stream13();
				} 
            }

            document.getElementById("playimg").style.visibility = "visible";
            document.getElementById("audioimg").style.visibility = "visible";
            document.getElementById("micimg").style.visibility = "visible";
            document.getElementById("snapimg").style.visibility = "visible";
            document.getElementById("recordimg").style.visibility = "visible";
            document.getElementById("zoomimg").style.visibility = "visible";
            document.getElementById("winviewimg").style.visibility = "visible";

            if (document.getElementById('player1').version.replace(/\./g, "") < 10015) {
                alert(nav09);
            }
        }
    }
    else {
        document.getElementById("playimg").style.visibility = "hidden";
        document.getElementById("audioimg").style.visibility = "hidden";
        document.getElementById("micimg").style.visibility = "hidden";
        document.getElementById("snapimg").style.visibility = "hidden";
        document.getElementById("recordimg").style.visibility = "hidden";
        document.getElementById("zoomimg").style.visibility = "hidden";
        document.getElementById("winviewimg").style.visibility = "hidden";
    }

	players();
	
	var array = videomode.split(":");
	
	document.getElementById("playimg").title=btn13+"/"+btn14;
	document.getElementById("audioimg").title=video11;
	document.getElementById("micimg").title=video12;
	document.getElementById("snapimg").title=video13;
	document.getElementById("recordimg").title=video14;
	document.getElementById("ctrlpanelimg").title=video15;
	document.getElementById("str11img").title=array[0];
	document.getElementById("str12img").title=array[1];
	document.getElementById("str13img").title=array[2];
	document.getElementById("up").title=video16;
	document.getElementById("down").title=video17;
	document.getElementById("left").title=video18;
	document.getElementById("right").title=video19;
	document.getElementById("homeimg").title=video20;
	document.getElementById("hscanimg").title=video21;
	document.getElementById("vscanimg").title=video22;
	document.getElementById("hvstopimg").title=btn14;
	document.getElementById("showalarmimg").title=video24;
	document.getElementById("tourimg").title=ptz15;
	document.getElementById("zoomimg").title=btn40;
	document.getElementById("winviewimg").title=sys40;
	document.getElementById("zoominimg").title=btn42;
	document.getElementById("zoomoutimg").title=btn41;
	document.getElementById("focusinimg").title=btn43;
	document.getElementById("focusoutimg").title = btn44;
	//document.getElementById("facealarmimg").title = facealarm;
	
	document.getElementById('player1').ControlID="1";
	document.getElementById('player2').ControlID="2";
	document.getElementById('player3').ControlID="3";
	document.getElementById('player4').ControlID="4";
	
	if(httport=="" || httport=="80")
	{
		httport=80;
	}
	
	document.getElementById('player1').SetDeviceInfo(username,password,document.location.hostname,parseInt(httport));
	document.getElementById('player2').SetDeviceInfo(dev_username0,dev_password0,dev_host0,parseInt(dev_port0));
	document.getElementById('player3').SetDeviceInfo(dev_username1,dev_password1,dev_host1,parseInt(dev_port1));
	document.getElementById('player4').SetDeviceInfo(dev_username2,dev_password2,dev_host2,parseInt(dev_port2));

	if (rolename == "guest") {
	    document.getElementById("micimg").src = "images/distalk.png";
	    document.getElementById("micimg").disabled = true;
	    document.getElementById("snapimg").src = "images/dissnap.png";
	    document.getElementById("snapimg").disabled = true;
	    document.getElementById("recordimg").src = "images/disrecord.png";
	    document.getElementById("recordimg").disabled = true;
	}
}

window.onunload = function() {  
   vstop();
   document.getElementById('player1').style.display="none";
   document.getElementById('player2').style.display="none";
   document.getElementById('player3').style.display="none";
   document.getElementById('player4').style.display="none";
}  

function players()
{
    var ssrc11=document.getElementById("str11img").src.replace(locate,'');
    var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
	if (imgsrc11=="1_over.png")
	{
		document.getElementById("str11img").src="images/1.png";
		stream11();
		document.getElementById("str11img").src="images/1_over.png";
	}
	
	var ssrc12=document.getElementById("str12img").src.replace(locate,'');
    var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
	if (imgsrc12=="2_over.png")
	{ 
		document.getElementById("str12img").src="images/2.png";
		stream12();
		document.getElementById("str12img").src="images/2_over.png";
	}
	
	var ssrc13=document.getElementById("str13img").src.replace(locate,'');
    var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
	if (imgsrc13=="3_over.png")
	{ 
		document.getElementById("str13img").src="images/3.png";
		stream13();
		document.getElementById("str13img").src="images/3_over.png";
	}
}

function ptzcmdSubmit(casename)
{
	if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
	{
		if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
		{
			//通过CGI操作云台
			var form =document.rescgi;
			form.action="/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
			/*if(CID=="player1")
			{
				form.action="/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
			}
			else if(CID=="player2")
			{
				form.action="http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
			}
			else if(CID=="player3")
			{
				form.action="http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
			}
			else if(CID=="player4")
			{
				form.action="http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
			}*/
			form.submit();
		}
		else
		{
			//通过控件操作云台
			var cmd;
			if(casename=="left")
			{
				cmd=1000;
			}
			else if(casename=="right")
			{
				cmd=2000;
			}
			else if(casename=="up")
			{
				cmd=3000;
			}
			else if(casename=="down")
			{
				cmd=4000;
			}
			else if(casename=="home")
			{
				cmd=5000;
			}
			else if(casename=="hscan")
			{
				cmd=6000;
			}
			else if(casename=="vscan")
			{
				cmd=7000;
			}
			else if(casename=="stop")
			{
				cmd=8000;
			}
			
			if(CID=="player1")
			{
				document.getElementById('player1').PtzControl(cmd,-1);
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').PtzControl(cmd,-1);
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').PtzControl(cmd,-1);
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').PtzControl(cmd,-1);
			}
		}
	}
	else
	{
		//通过CGI操作云台
		var form =document.rescgi;
		form.action="/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
		/*if(CID=="player1")
		{
			form.action="/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
		}
		else if(CID=="player2")
		{
			form.action="http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
		}
		else if(CID=="player3")
		{
			form.action="http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
		}
		else if(CID=="player4")
		{
			form.action="http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=ptzctrl&act="+casename;
		}*/
		form.submit();
	}
}

function startaudio()
{
	if(CID=="player1")
	{
		document.getElementById('player2').MuteFlag = true;
		document.getElementById('player3').MuteFlag = true;
		document.getElementById('player4').MuteFlag = true;
		document.getElementById('player1').MuteFlag = false;
	}
	else if(CID=="player2")
	{
		document.getElementById('player1').MuteFlag = true;
		document.getElementById('player3').MuteFlag = true;
		document.getElementById('player4').MuteFlag = true;
		document.getElementById('player2').MuteFlag = false;
	}
	else if(CID=="player3")
	{
		document.getElementById('player2').MuteFlag = true;
		document.getElementById('player1').MuteFlag = true;
		document.getElementById('player4').MuteFlag = true;
		document.getElementById('player3').MuteFlag = false;
	}
	else if(CID=="player4")
	{
		document.getElementById('player2').MuteFlag = true;
		document.getElementById('player3').MuteFlag = true;
		document.getElementById('player1').MuteFlag = true;
		document.getElementById('player4').MuteFlag = false;
	}
}

function stopaudio()
{
	document.getElementById('player1').MuteFlag = true;
	document.getElementById('player2').MuteFlag = true;
	document.getElementById('player3').MuteFlag = true;
	document.getElementById('player4').MuteFlag = true;
	/*if(CID=="player1")
	{
		document.getElementById('player1').MuteFlag = true;
	}
	else if(CID=="player2")
	{
		document.getElementById('player2').MuteFlag = true;
	}
	else if(CID=="player3")
	{
		document.getElementById('player3').MuteFlag = true;
	}
	else if(CID=="player4")
	{
		document.getElementById('player4').MuteFlag = true;
	}*/
}

function startmic() {
    if (rolename != "guest") {
        if (httport == "" || httport == "80") {
            httport = 80;
        }

        if (CID == "player1") {
            document.getElementById('player2').StopPlayerSpeaker();
            document.getElementById('player3').StopPlayerSpeaker();
            document.getElementById('player4').StopPlayerSpeaker();
            document.getElementById('player1').SetSpeakerParam(5, 8000, 1);
            if (document.getElementById('player1').StartPlayerSpeaker(document.location.hostname, httport) == -19) {
                alert(speakeralert);
                document.getElementById("micimg").src = "images/mic.png";
            }
            else if (document.getElementById('player1').StartPlayerSpeaker(document.location.hostname, httport) == 0) {
                document.getElementById('player1').StartPlayerSpeaker(document.location.hostname, httport);
            }
            else {
                alert(speakerfail);
                document.getElementById("micimg").src = "images/mic.png";
            }
        }
        else if (CID == "player2") {
            document.getElementById('player1').StopPlayerSpeaker();
            document.getElementById('player3').StopPlayerSpeaker();
            document.getElementById('player4').StopPlayerSpeaker();
            document.getElementById('player2').SetSpeakerParam(5, 8000, 1);
            if (document.getElementById('player2').StartPlayerSpeaker(dev_host0, dev_port0) == -19) {
                alert(speakeralert);
                document.getElementById("micimg").src = "images/mic.png";
            }
            else if (document.getElementById('player2').StartPlayerSpeaker(dev_host0, dev_port0) == 0) {
                document.getElementById('player2').StartPlayerSpeaker(dev_host0, dev_port0);
            }
            else {
                alert(speakerfail);
                document.getElementById("micimg").src = "images/mic.png";
            }
        }
        else if (CID == "player3") {
            document.getElementById('player1').StopPlayerSpeaker();
            document.getElementById('player2').StopPlayerSpeaker();
            document.getElementById('player4').StopPlayerSpeaker();
            document.getElementById('player3').SetSpeakerParam(5, 8000, 1);
            if (document.getElementById('player3').StartPlayerSpeaker(dev_host1, dev_port1) == -19) {
                alert(speakeralert);
                document.getElementById("micimg").src = "images/mic.png";
            }
            else if (document.getElementById('player3').StartPlayerSpeaker(dev_host1, dev_port1) == 0) {
                document.getElementById('player3').StartPlayerSpeaker(dev_host1, dev_port1);
            }
            else {
                alert(speakerfail);
                document.getElementById("micimg").src = "images/mic.png";
            }
        }
        else if (CID == "player4") {
            document.getElementById('player1').StopPlayerSpeaker();
            document.getElementById('player2').StopPlayerSpeaker();
            document.getElementById('player3').StopPlayerSpeaker();
            document.getElementById('player4').SetSpeakerParam(5, 8000, 1);
            if (document.getElementById('player4').StartPlayerSpeaker(dev_host2, dev_port2) == -19) {
                alert(speakeralert);
                document.getElementById("micimg").src = "images/mic.png";
            }
            else if (document.getElementById('player4').StartPlayerSpeaker(dev_host2, dev_port2) == 0) {
                document.getElementById('player4').StartPlayerSpeaker(dev_host2, dev_port2);
            }
            else {
                alert(speakerfail);
                document.getElementById("micimg").src = "images/mic.png";
            }
        }
    }
}

function stopmic()
{
	if(CID=="player1")
	{
		document.getElementById('player1').StopPlayerSpeaker();
	}
	else if(CID=="player2")
	{
		document.getElementById('player2').StopPlayerSpeaker();
	}
	else if(CID=="player3")
	{
		document.getElementById('player3').StopPlayerSpeaker();
	}
	else if(CID=="player4")
	{
		document.getElementById('player4').StopPlayerSpeaker();
	}
}

function mic()
{
    var ssrc=document.getElementById("micimg").src.replace(locate,'');
    var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
	if (imgsrc=="mic_over.png")
	{ 
		startmic();
	}
	else
	{
		stopmic();
	}
}

function audio()
{
    var ssrc=document.getElementById("audioimg").src.replace(locate,'');
    var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
	if (imgsrc=="audio_over.png")
	{ 
		startaudio();
	} 
	else
	{ 
		stopaudio();
	} 
}

function stream11() {
    if ((navigator.platform != "Mac68K") && (navigator.platform != "MacPPC") && (navigator.platform != "Macintosh") && (navigator.platform != "MacIntel")) {
        if ((navigator.appVersion.indexOf("iPod") != -1) || (navigator.appVersion.indexOf("iPhone") != -1)) {
            var re = /[^\u4e00-\u9fa5\da-zA-Z\-\_]+/;
            if (re.test(username) || re.test(password)) {
                alert(wifikeyerr);
                return false;
            }
            var rtsp = "http://" + ip + "/mac/live/ch0?" + username + ":" + password;

            data = '<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime"';
            data = data + ' pluginspage="http://www.apple.com/quicktime/download/index.html"> </embed>';
            document.getElementById('video').innerHTML = data;
        }
        else {
            vstop();

            //以下是多画面单图标设置
            var ssrcwin = document.getElementById("winviewimg").src.replace(locate, '');
            var imgsrcwin = ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
            if (imgsrcwin == "x1.gif") {
                document.getElementById('x1').style.width = "100%";
                document.getElementById('x1').style.height = "100%";
                document.getElementById('player1').style.marginTop = "0px";
                if (httport == "" || httport == "80") {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch0";
                }
                else {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + "/live/ch0";
                }

                document.getElementById("player1").Play(rtsp);
                document.getElementById('player1').ZoomRate = 1;
                var ssrc = document.getElementById("recordimg").src.replace(locate, '');
                var imgsrc = ssrc.substr(ssrc.lastIndexOf('\/') + 1);
                if (imgsrc == "record.png") {
                    document.getElementById("recordimg").src = "images/record.png";
                    recordstop();
                }
                else {
                    document.getElementById("recordimg").src = "images/record_over.png";
                    vrecord();
                }
            }
            else if (imgsrcwin == "x4.gif") {
                if (httport == "" || httport == "80") {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch0";
                }
                else {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + "/live/ch0";
                }
                document.getElementById("player1").Play(rtsp);

                var rtsp2 = "rtsp://" + encodeURIComponent(dev_username0) + ":" + encodeURIComponent(dev_password0) + "@" + dev_host0 + ":" + dev_port0 + "/live/ch0";
                if (dev_host0 != "") {
                    document.getElementById("player2").Play(rtsp2);
                }

                var rtsp3 = "rtsp://" + encodeURIComponent(dev_username1) + ":" + encodeURIComponent(dev_password1) + "@" + dev_host1 + ":" + dev_port1 + "/live/ch0";
                if (dev_host1 != "") {
                    document.getElementById("player3").Play(rtsp3);
                }

                var rtsp4 = "rtsp://" + encodeURIComponent(dev_username2) + ":" + encodeURIComponent(dev_password2) + "@" + dev_host2 + ":" + dev_port2 + "/live/ch0";
                if (dev_host2 != "") {
                    document.getElementById("player4").Play(rtsp4);
                }

                document.getElementById('player1').ZoomRate = 1;
                document.getElementById('player2').ZoomRate = 1;
                document.getElementById('player3').ZoomRate = 1;
                document.getElementById('player4').ZoomRate = 1;
                var ssrc = document.getElementById("recordimg").src.replace(locate, '');
                var imgsrc = ssrc.substr(ssrc.lastIndexOf('\/') + 1);
                if (imgsrc == "record.png") {
                    document.getElementById("recordimg").src = "images/record.png";
                    recordstop();
                }
                else {
                    document.getElementById("recordimg").src = "images/record_over.png";
                    vrecord();
                }
            }

            //以下是多画面多图标设置
            /*var ssrcwin1=document.getElementById("win1img").src.replace(locate,'');
			var imgsrcwin1=ssrcwin1.substr(ssrcwin1.lastIndexOf('\/') + 1);
			if (imgsrcwin1=="x1_over.gif")
			{
				document.getElementById('x1').style.width="100%";
				document.getElementById('x1').style.height="100%";
				document.getElementById('player1').style.marginTop="0px";
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch0";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch0";
				}
				
				document.getElementById("player1").Play(rtsp);
				document.getElementById('player1').ZoomRate = 1;
				var ssrc=document.getElementById("recordimg").src.replace(locate,'');
				var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
				if (imgsrc=="record.png")
				{
					document.getElementById("recordimg").src="images/record.png";
					recordstop();
				} 
				else
				{ 
					document.getElementById("recordimg").src="images/record_over.png";
					vrecord();
				}
			}
			
			
			var ssrcwin4=document.getElementById("win4img").src.replace(locate,'');
			var imgsrcwin4=ssrcwin4.substr(ssrcwin4.lastIndexOf('\/') + 1);
			if (imgsrcwin4=="x4_over.gif")
			{
				//changwin(4);
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch0";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch0";
				}
				document.getElementById("player1").Play(rtsp);
				
				var rtsp2="rtsp://"+encodeURIComponent(dev_username0)+":"+encodeURIComponent(dev_password0)+"@"+dev_host0+":"+dev_port0+"/live/ch0";
				document.getElementById("player2").Play(rtsp2);
				var rtsp3="rtsp://"+encodeURIComponent(dev_username1)+":"+encodeURIComponent(dev_password1)+"@"+dev_host1+":"+dev_port1+"/live/ch0";
				document.getElementById("player3").Play(rtsp3);
				var rtsp4="rtsp://"+encodeURIComponent(dev_username2)+":"+encodeURIComponent(dev_password2)+"@"+dev_host2+":"+dev_port2+"/live/ch0";
				document.getElementById("player4").Play(rtsp4);
				document.getElementById('player1').ZoomRate = 1;
				document.getElementById('player2').ZoomRate = 1;
				document.getElementById('player3').ZoomRate = 1;
				document.getElementById('player4').ZoomRate = 1;
				var ssrc=document.getElementById("recordimg").src.replace(locate,'');
				var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
				if (imgsrc=="record.png")
				{ 
					document.getElementById("recordimg").src="images/record.png";
					recordstop();
				} 
				else
				{ 
					document.getElementById("recordimg").src="images/record_over.png";
					vrecord();
				}
			}*/

            mic();
            audio();
        }
        if (rolename == "guest") {
            document.getElementById("micimg").src = "images/distalk.png";
            document.getElementById("micimg").disabled = true;
            document.getElementById("snapimg").src = "images/dissnap.png";
            document.getElementById("snapimg").disabled = true;
            document.getElementById("recordimg").src = "images/disrecord.png";
            document.getElementById("recordimg").disabled = true;
        }
    }
    else {
        var re = /[^\u4e00-\u9fa5\da-zA-Z\-\_]+/;
        if (re.test(username) || re.test(password)) {
            alert(wifikeyerr);
            return false;
        }
        var rtsp = "http://" + ip + "/mac/live/ch0?" + username + ":" + password;

        data = '<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime"';
        data = data + ' pluginspage="http://www.apple.com/quicktime/download/index.html"> </embed>';
        document.getElementById('video').innerHTML = data;
    }
}

function stream12() {
    if ((navigator.platform != "Mac68K") && (navigator.platform != "MacPPC") && (navigator.platform != "Macintosh") && (navigator.platform != "MacIntel")) {
        if ((navigator.appVersion.indexOf("iPod") != -1) || (navigator.appVersion.indexOf("iPhone") != -1)) {
            var re = /[^\u4e00-\u9fa5\da-zA-Z\-\_]+/;
            if (re.test(username) || re.test(password)) {
                alert(wifikeyerr);
                return false;
            }
            var rtsp = "http://" + ip + "/mac/live/ch0?" + username + ":" + password;

            data = '<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime"';
            data = data + ' pluginspage="http://www.apple.com/quicktime/download/index.html"> </embed>';
            document.getElementById('video').innerHTML = data;
        }
        else {
            vstop();

            //以下是多画面单图标设置
            var ssrcwin = document.getElementById("winviewimg").src.replace(locate, '');
            var imgsrcwin = ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
            if (imgsrcwin == "x1.gif") {
                document.getElementById('x1').style.width = "640px";
                document.getElementById('x1').style.height = "360px";
                document.getElementById('player1').style.marginTop = "75px";
                if (httport == "" || httport == "80") {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch1";
                }
                else {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + "/live/ch1";
                }
                document.getElementById("player1").Play(rtsp);
                document.getElementById('player1').ZoomRate = 1;
                var ssrc = document.getElementById("recordimg").src.replace(locate, '');
                var imgsrc = ssrc.substr(ssrc.lastIndexOf('\/') + 1);
                if (imgsrc == "record.png") {
                    document.getElementById("recordimg").src = "images/record.png";
                    recordstop();
                }
                else {
                    document.getElementById("recordimg").src = "images/record_over.png";
                    vrecord();
                }
            }
            else if (imgsrcwin == "x4.gif") {
                if (httport == "" || httport == "80") {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch1";
                }
                else {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + "/live/ch1";
                }
                document.getElementById("player1").Play(rtsp);

                document.getElementById('player1').ZoomRate = 1;
                document.getElementById('player2').ZoomRate = 1;
                document.getElementById('player3').ZoomRate = 1;
                document.getElementById('player4').ZoomRate = 1;
                var rtsp2 = "rtsp://" + encodeURIComponent(dev_username0) + ":" + encodeURIComponent(dev_password0) + "@" + dev_host0 + ":" + dev_port0 + "/live/ch1";
                if (dev_host0 != "") {
                    document.getElementById("player2").Play(rtsp2);
                }

                var rtsp3 = "rtsp://" + encodeURIComponent(dev_username1) + ":" + encodeURIComponent(dev_password1) + "@" + dev_host1 + ":" + dev_port1 + "/live/ch1";
                if (dev_host1 != "") {
                    document.getElementById("player3").Play(rtsp3);
                }

                var rtsp4 = "rtsp://" + encodeURIComponent(dev_username2) + ":" + encodeURIComponent(dev_password2) + "@" + dev_host2 + ":" + dev_port2 + "/live/ch1";
                if (dev_host2 != "") {
                    document.getElementById("player4").Play(rtsp4);
                }

                var ssrc = document.getElementById("recordimg").src.replace(locate, '');
                var imgsrc = ssrc.substr(ssrc.lastIndexOf('\/') + 1);
                if (imgsrc == "record.png") {
                    document.getElementById("recordimg").src = "images/record.png";
                    recordstop();
                }
                else {
                    document.getElementById("recordimg").src = "images/record_over.png";
                    vrecord();
                }
            }

            //以下是多画面多图标
            /*var ssrcwin1=document.getElementById("win1img").src.replace(locate,'');
			var imgsrcwin1=ssrcwin1.substr(ssrcwin1.lastIndexOf('\/') + 1);
			if (imgsrcwin1=="x1_over.gif")
			{
				document.getElementById('x1').style.width="640px";
				document.getElementById('x1').style.height="360px";
				document.getElementById('player1').style.marginTop="75px";
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch1";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch1";
				}
				document.getElementById("player1").Play(rtsp);
				document.getElementById('player1').ZoomRate = 1;
				var ssrc=document.getElementById("recordimg").src.replace(locate,'');
				var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
				if (imgsrc=="record.png")
				{ 
					document.getElementById("recordimg").src="images/record.png";
					recordstop();
				} 
				else
				{ 
					document.getElementById("recordimg").src="images/record_over.png";
					vrecord();
				}
			}
			
			var ssrcwin4=document.getElementById("win4img").src.replace(locate,'');
			var imgsrcwin4=ssrcwin4.substr(ssrcwin4.lastIndexOf('\/') + 1);
			if (imgsrcwin4=="x4_over.gif")
			{
				//changwin(4);
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch1";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch1";
				}
				document.getElementById("player1").Play(rtsp);
				document.getElementById('player1').ZoomRate = 1;
				document.getElementById('player2').ZoomRate = 1;
				document.getElementById('player3').ZoomRate = 1;
				document.getElementById('player4').ZoomRate = 1;
				var rtsp2="rtsp://"+encodeURIComponent(dev_username0)+":"+encodeURIComponent(dev_password0)+"@"+dev_host0+":"+dev_port0+"/live/ch1";
				document.getElementById("player2").Play(rtsp2);
				var rtsp3="rtsp://"+encodeURIComponent(dev_username1)+":"+encodeURIComponent(dev_password1)+"@"+dev_host1+":"+dev_port1+"/live/ch1";
				document.getElementById("player3").Play(rtsp3);
				var rtsp4="rtsp://"+encodeURIComponent(dev_username2)+":"+encodeURIComponent(dev_password2)+"@"+dev_host2+":"+dev_port2+"/live/ch1";
				document.getElementById("player4").Play(rtsp4);
				
				var ssrc=document.getElementById("recordimg").src.replace(locate,'');
				var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
				if (imgsrc=="record.png")
				{ 
					document.getElementById("recordimg").src="images/record.png";
					recordstop();
				} 
				else
				{ 
					document.getElementById("recordimg").src="images/record_over.png";
					vrecord();
				}
			}*/

            mic();
            audio();
        }
        if (rolename == "guest") {
            document.getElementById("micimg").src = "images/distalk.png";
            document.getElementById("micimg").disabled = true;
            document.getElementById("snapimg").src = "images/dissnap.png";
            document.getElementById("snapimg").disabled = true;
            document.getElementById("recordimg").src = "images/disrecord.png";
            document.getElementById("recordimg").disabled = true;
        }
    }
    else {
        var re = /[^\u4e00-\u9fa5\da-zA-Z\-\_]+/;
        if (re.test(username) || re.test(password)) {
            alert(wifikeyerr);
            return false;
        }
        var rtsp = "http://" + ip + "/mac/live/ch1?" + username + ":" + password;

        data = '<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime"';
        data = data + ' pluginspage="http://www.apple.com/quicktime/download/index.html"> </embed>';
        document.getElementById('video').innerHTML = data;
    }
}

function stream13() {
    if ((navigator.platform != "Mac68K") && (navigator.platform != "MacPPC") && (navigator.platform != "Macintosh") && (navigator.platform != "MacIntel")) {
        if ((navigator.appVersion.indexOf("iPod") != -1) || (navigator.appVersion.indexOf("iPhone") != -1)) {
            var re = /[^\u4e00-\u9fa5\da-zA-Z\-\_]+/;
            if (re.test(username) || re.test(password)) {
                alert(wifikeyerr);
                return false;
            }
            var rtsp = "http://" + ip + "/mac/live/ch0?" + username + ":" + password;

            data = '<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime"';
            data = data + ' pluginspage="http://www.apple.com/quicktime/download/index.html"> </embed>';
            document.getElementById('video').innerHTML = data;
        }
        else {
            vstop();

            //以下是多画面单图标设置
            var ssrcwin = document.getElementById("winviewimg").src.replace(locate, '');
            var imgsrcwin = ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
            if (imgsrcwin == "x1.gif") {
                document.getElementById('x1').style.width = "320px";
                document.getElementById('x1').style.height = "180px";
                document.getElementById('player1').style.marginTop = "160px";
                if (httport == "" || httport == "80") {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch2";
                }
                else {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + "/live/ch2";
                }
                document.getElementById("player1").Play(rtsp);
                document.getElementById('player1').ZoomRate = 1;
                var ssrc = document.getElementById("recordimg").src.replace(locate, '');
                var imgsrc = ssrc.substr(ssrc.lastIndexOf('\/') + 1);
                if (imgsrc == "record.png") {
                    document.getElementById("recordimg").src = "images/record.png";
                    recordstop();
                }
                else {
                    document.getElementById("recordimg").src = "images/record_over.png";
                    vrecord();
                }
            }
            else if (imgsrcwin == "x4.gif") {
                if (httport == "" || httport == "80") {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch2";
                }
                else {
                    var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + "/live/ch2";
                }
                document.getElementById("player1").Play(rtsp);

                var rtsp2 = "rtsp://" + encodeURIComponent(dev_username0) + ":" + encodeURIComponent(dev_password0) + "@" + dev_host0 + ":" + dev_port0 + "/live/ch2";
                if (dev_host0 != "") {
                    document.getElementById("player2").Play(rtsp2);
                }

                var rtsp3 = "rtsp://" + encodeURIComponent(dev_username1) + ":" + encodeURIComponent(dev_password1) + "@" + dev_host1 + ":" + dev_port1 + "/live/ch2";
                if (dev_host1 != "") {
                    document.getElementById("player3").Play(rtsp3);
                }

                var rtsp4 = "rtsp://" + encodeURIComponent(dev_username2) + ":" + encodeURIComponent(dev_password2) + "@" + dev_host2 + ":" + dev_port2 + "/live/ch2";
                if (dev_host2 != "") {
                    document.getElementById("player4").Play(rtsp4);
                }

                document.getElementById('player1').ZoomRate = 1;
                document.getElementById('player2').ZoomRate = 1;
                document.getElementById('player3').ZoomRate = 1;
                document.getElementById('player4').ZoomRate = 1;
                var ssrc = document.getElementById("recordimg").src.replace(locate, '');
                var imgsrc = ssrc.substr(ssrc.lastIndexOf('\/') + 1);
                if (imgsrc == "record.png") {
                    document.getElementById("recordimg").src = "images/record.png";
                    recordstop();
                }
                else {
                    document.getElementById("recordimg").src = "images/record_over.png";
                    vrecord();
                }
            }

            //以下是多画面多图标
            /*var ssrcwin1=document.getElementById("win1img").src.replace(locate,'');
			var imgsrcwin1=ssrcwin1.substr(ssrcwin1.lastIndexOf('\/') + 1);
			if (imgsrcwin1=="x1_over.gif")
			{
				document.getElementById('x1').style.width="320px";
				document.getElementById('x1').style.height="180px";
				document.getElementById('player1').style.marginTop="160px";
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch2";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch2";
				}
				document.getElementById("player1").Play(rtsp);
				document.getElementById('player1').ZoomRate = 1;
				var ssrc=document.getElementById("recordimg").src.replace(locate,'');
				var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
				if (imgsrc=="record.png")
				{ 
					document.getElementById("recordimg").src="images/record.png";
					recordstop();
				} 
				else
				{ 
					document.getElementById("recordimg").src="images/record_over.png";
					vrecord();
				}
			}
			
			var ssrcwin4=document.getElementById("win4img").src.replace(locate,'');
			var imgsrcwin4=ssrcwin4.substr(ssrcwin4.lastIndexOf('\/') + 1);
			if (imgsrcwin4=="x4_over.gif")
			{
				//changwin(4);
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch2";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch2";
				}
				document.getElementById("player1").Play(rtsp);
				
				var rtsp2="rtsp://"+encodeURIComponent(dev_username0)+":"+encodeURIComponent(dev_password0)+"@"+dev_host0+":"+dev_port0+"/live/ch2";
				document.getElementById("player2").Play(rtsp2);
				var rtsp3="rtsp://"+encodeURIComponent(dev_username1)+":"+encodeURIComponent(dev_password1)+"@"+dev_host1+":"+dev_port1+"/live/ch2";
				document.getElementById("player3").Play(rtsp3);
				var rtsp4="rtsp://"+encodeURIComponent(dev_username2)+":"+encodeURIComponent(dev_password2)+"@"+dev_host2+":"+dev_port2+"/live/ch2";
				document.getElementById("player4").Play(rtsp4);
				document.getElementById('player1').ZoomRate = 1;
				document.getElementById('player2').ZoomRate = 1;
				document.getElementById('player3').ZoomRate = 1;
				document.getElementById('player4').ZoomRate = 1;
				var ssrc=document.getElementById("recordimg").src.replace(locate,'');
				var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
				if (imgsrc=="record.png")
				{ 
					document.getElementById("recordimg").src="images/record.png";
					recordstop();
				} 
				else
				{ 
					document.getElementById("recordimg").src="images/record_over.png";
					vrecord();
				}
			}*/

            mic();
            audio();
        }
        if (rolename == "guest") {
            document.getElementById("micimg").src = "images/distalk.png";
            document.getElementById("micimg").disabled = true;
            document.getElementById("snapimg").src = "images/dissnap.png";
            document.getElementById("snapimg").disabled = true;
            document.getElementById("recordimg").src = "images/disrecord.png";
            document.getElementById("recordimg").disabled = true;
        }
    }
    else {
        var re = /[^\u4e00-\u9fa5\da-zA-Z\-\_]+/;
        if (re.test(username) || re.test(password)) {
            alert(wifikeyerr);
            return false;
        }
        var rtsp = "http://" + ip + "/mac/live/ch2?" + username + ":" + password;

        data = '<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime"';
        data = data + ' pluginspage="http://www.apple.com/quicktime/download/index.html"> </embed>';
        document.getElementById('video').innerHTML = data;
    }
}

function vstop()
{
	//以下是多画面单图标设置
	var ssrcwin=document.getElementById("winviewimg").src.replace(locate,'');
	var imgsrcwin=ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
	if(imgsrcwin=="x1.gif")
	{
		document.getElementById('player1').Stop();
	}
	else if(imgsrcwin=="x4.gif")
	{
		if(CID=="player1")
		{
			document.getElementById('player1').Stop();
		}
		else if(CID=="player2")
		{
			document.getElementById('player2').Stop();
		}
		else if(CID=="player3")
		{
			document.getElementById('player3').Stop();
		}
		else if(CID=="player4")
		{
			document.getElementById('player4').Stop();
		}
	}
	
	//以下是多画面多图标设置
	/*var ssrcwin1=document.getElementById("win1img").src.replace(locate,'');
	var imgsrcwin1=ssrcwin1.substr(ssrcwin1.lastIndexOf('\/') + 1);
	if (imgsrcwin1=="x1_over.gif")
	{
		document.getElementById('player1').Stop();
	}
	
	var ssrcwin4=document.getElementById("win4img").src.replace(locate,'');
	var imgsrcwin4=ssrcwin4.substr(ssrcwin4.lastIndexOf('\/') + 1);
	if (imgsrcwin4=="x4_over.gif")
	{
		if(CID=="player1")
		{
			document.getElementById('player1').Stop();
		}
		else if(CID=="player2")
		{
			document.getElementById('player2').Stop();
		}
		else if(CID=="player3")
		{
			document.getElementById('player3').Stop();
		}
		else if(CID=="player4")
		{
			document.getElementById('player4').Stop();
		}
	}*/
	
	stopmic();
	stopaudio();

	if (rolename == "guest") {
	    document.getElementById("micimg").src = "images/distalk.png";
	    document.getElementById("micimg").disabled = true;
	    document.getElementById("snapimg").src = "images/dissnap.png";
	    document.getElementById("snapimg").disabled = true;
	    document.getElementById("recordimg").src = "images/disrecord.png";
	    document.getElementById("recordimg").disabled = true;
	}
}

function vrecord()
{
	if(rolename!="guest")
	{
		if(CID=="player1")
		{
			player1.BeginRecord(2000000000);
		}
		else if(CID=="player2")
		{
			player2.BeginRecord(2000000000);
		}
		else if(CID=="player3")
		{
			player3.BeginRecord(2000000000);
		}
		else if(CID=="player4")
		{
			player4.BeginRecord(2000000000);
		}
	}
}

function recordstop()
{
	if(CID=="player1")
	{
		player1.EndRecord();
	}
	else if(CID=="player2")
	{
		player2.EndRecord();
	}
	else if(CID=="player3")
	{
		player3.EndRecord();
	}
	else if(CID=="player4")
	{
		player4.EndRecord();
	}
}

function ptz_onmouseup(i)
{
	if(i == 1 )
	{
		document.getElementById("left").src="images/left.png";
		ptzcmdSubmit('stop');
	}
	
	if(i == 2 )
	{
		document.getElementById("right").src="images/right.png";
		ptzcmdSubmit('stop');
	}
	
	if(i == 3 )
	{
		document.getElementById("up").src="images/up.png";
		ptzcmdSubmit('stop');
	}
	
	if(i == 4 )
	{
		document.getElementById("down").src="images/down.png";
		ptzcmdSubmit('stop');
	}
	
	if(i == 5 )
	{
		document.getElementById("home").src="images/home.png";
		ptzcmdSubmit('stop');
	}
	
	if(i == 6 )
	{
		document.getElementById("snapimg").src="images/snap.png";
	}
}

function ptz_onmousedown(i)
{
	if(i == 1 )
	{
		document.getElementById("left").src="images/left_over.png";
		ptzcmdSubmit('left');
	}
	
	if(i == 2 )
	{
		document.getElementById("right").src="images/right_over.png";
		ptzcmdSubmit('right');
	}
	
	if(i == 3 )
	{
		document.getElementById("up").src="images/up_over.png";
		ptzcmdSubmit('up');
	}
	
	if(i == 4 )
	{
		document.getElementById("down").src="images/down_over.png";
		ptzcmdSubmit('down');
	}
	
	if(i == 5 )
	{
		document.getElementById("home").src="images/home_over.png";
		ptzcmdSubmit('home');
	}
	
	if(i == 6 )
	{
		if(rolename!="guest")
		{
			document.getElementById("snapimg").src="images/snap_over.png";
			if(CID=="player1")
			{
				player1.Snapshot();
			}
			else if(CID=="player2")
			{
				player2.Snapshot();
			}
			else if(CID=="player3")
			{
				player3.Snapshot();
			}
			else if(CID=="player4")
			{
				player4.Snapshot();
			}
		}
	}
}

function switchimg(index)
{
    var ssrc=document.getElementById(index+"img").src.replace(locate,'');
    var imgsrc=ssrc.substr(ssrc.lastIndexOf('\/') + 1);
    if(index=='play')
	{
		if (imgsrc=="play.png")
		{ 
			document.getElementById("playimg").src="images/stop.png";
			document.getElementById("audioimg").src="images/audio.png";
			
			if(CID=="player1")
			{
				if(httport=="" || httport=="80")
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+":80/live/ch1";
				}
				else
				{
					var rtsp="rtsp://"+encodeURIComponent(username)+":"+encodeURIComponent(password)+"@"+ip+"/live/ch1";
				}
				document.getElementById("player1").Play(rtsp);
			}
			else if(CID=="player2")
			{
				var rtsp2="rtsp://"+encodeURIComponent(dev_username0)+":"+encodeURIComponent(dev_password0)+"@"+dev_host0+":"+dev_port0+"/live/ch1";
				document.getElementById("player2").Play(rtsp2);
			}
			else if(CID=="player3")
			{
				var rtsp3="rtsp://"+encodeURIComponent(dev_username1)+":"+encodeURIComponent(dev_password1)+"@"+dev_host1+":"+dev_port1+"/live/ch1";
				document.getElementById("player3").Play(rtsp3);
			}
			else if(CID=="player4")
			{
				var rtsp4="rtsp://"+encodeURIComponent(dev_username2)+":"+encodeURIComponent(dev_password2)+"@"+dev_host2+":"+dev_port2+"/live/ch1";
				document.getElementById("player4").Play(rtsp4);
			}
			
			players();
		} 
		else
		{ 
			document.getElementById("playimg").src="images/play.png";
			vstop();
			
			document.getElementById("audioimg").src="images/audio.png";
			stopaudio();
			
			document.getElementById("micimg").src="images/mic.png";
			player1.StopPlayerSpeaker();
			
			/*document.getElementById("str11img").src="images/1.png";
			document.getElementById("str12img").src="images/2.png";
			document.getElementById("str13img").src="images/3.png";*/
			document.getElementById("hscanimg").src="images/hscan.png";
			document.getElementById("vscanimg").src="images/vscan.png";
			document.getElementById("tourimg").src="images/tour.png";
			document.getElementById("recordimg").src="images/record.png";
			document.getElementById("showalarmimg").src="images/alarmstatus.png";

		} 
	}
	else if(index=='audio')
	{
		if (imgsrc=="audio.png")
		{ 
			document.getElementById("audioimg").src="images/audio_over.png";
			startaudio();
		} 
		else
		{ 
			document.getElementById("audioimg").src="images/audio.png";
			stopaudio();
		} 
	}
	else if(index=='mic')
	{
		if (imgsrc=="mic.png")
		{ 
			document.getElementById("micimg").src="images/mic_over.png";
			startmic();
		} 
		else
		{ 
			document.getElementById("micimg").src="images/mic.png";
			stopmic();
		} 
	}
	else if(index=='record')
	{
		if (imgsrc=="record.png")
		{ 
			document.getElementById("recordimg").src="images/record_over.png";
			vrecord();
		} 
		else
		{ 
			document.getElementById("recordimg").src="images/record.png";
			recordstop();
		} 
	}
	else if(index=='ctrlpanel')
	{
		if (imgsrc=="ctrlpanel.png")
		{ 
			document.getElementById("ctrlpanelimg").src="images/ctrlpanel_over.png";
			document.getElementById("ctrl").style.display="none";
			document.getElementById("playpage").style.width="100%";
			
			var ssrc11=document.getElementById("str11img").src.replace(locate,'');
    		var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
			if (imgsrc11=="1_over.png")
			{ 
				document.getElementById("x1").style.width="100%";
				document.getElementById('x1').style.height="100%";
			} 
			
			var ssrc12=document.getElementById("str12img").src.replace(locate,'');
    		var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
			if (imgsrc12=="2_over.png")
			{
				document.getElementById("x1").style.width="640px";
				document.getElementById('x1').style.height="360px";
			} 
			
			var ssrc13=document.getElementById("str13img").src.replace(locate,'');
    		var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
			if (imgsrc13=="3_over.png")
			{ 
				document.getElementById("x1").style.width="320px";
				document.getElementById('x1').style.height="180px";
			} 
			
			var ssrcwin=document.getElementById("winviewimg").src.replace(locate,'');
			var imgsrcwin=ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
			if(imgsrcwin=="x1.gif")
			{
				changwin(1);
			}
			else if(imgsrcwin=="x4.gif")
			{
				changwin(4);
			}
			//以下是多画面多图标设置
			/*var ssrcwin1=document.getElementById("win1img").src.replace(locate,'');
			var imgsrcwin1=ssrcwin1.substr(ssrcwin1.lastIndexOf('\/') + 1);
			if (imgsrcwin1=="x1_over.gif")
			{
				changwin(1);
			}
			
			var ssrcwin4=document.getElementById("win4img").src.replace(locate,'');
			var imgsrcwin4=ssrcwin4.substr(ssrcwin4.lastIndexOf('\/') + 1);
			if (imgsrcwin4=="x4_over.gif")
			{
				changwin(4);
			}*/
		} 
		else
		{ 
			document.getElementById("ctrlpanelimg").src="images/ctrlpanel.png";
			document.getElementById("ctrl").style.display="";
			document.getElementById('playpage').style.width="739px";
			
			var ssrc11=document.getElementById("str11img").src.replace(locate,'');
    		var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
			if (imgsrc11=="1_over.png")
			{ 
				document.getElementById("x1").style.width="100%";
				document.getElementById('x1').style.height="100%";
			} 
			
			var ssrc12=document.getElementById("str12img").src.replace(locate,'');
    		var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
			if (imgsrc12=="2_over.png")
			{
				document.getElementById("x1").style.width="640px";
				document.getElementById('x1').style.height="360px";
			} 
			
			var ssrc13=document.getElementById("str13img").src.replace(locate,'');
    		var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
			if (imgsrc13=="3_over.png")
			{ 
				document.getElementById("x1").style.width="320px";
				document.getElementById('x1').style.height="180px";
			} 
			
			var ssrcwin=document.getElementById("winviewimg").src.replace(locate,'');
			var imgsrcwin=ssrcwin.substr(ssrcwin.lastIndexOf('\/') + 1);
			if(imgsrcwin=="x1.gif")
			{
				changwin(1);
			}
			else if(imgsrcwin=="x4.gif")
			{
				changwin(4);
			}
			
			//以下是多画面多图标设置
			/*var ssrcwin1=document.getElementById("win1img").src.replace(locate,'');
			var imgsrcwin1=ssrcwin1.substr(ssrcwin1.lastIndexOf('\/') + 1);
			if (imgsrcwin1=="x1_over.gif")
			{
				changwin(1);
			}
			
			var ssrcwin4=document.getElementById("win4img").src.replace(locate,'');
			var imgsrcwin4=ssrcwin4.substr(ssrcwin4.lastIndexOf('\/') + 1);
			if (imgsrcwin4=="x4_over.gif")
			{
				changwin(4);
			}*/
		} 
	}
	else if(index=='str11')
	{
		if (imgsrc=="1.png")
		{ 
			document.getElementById("str11img").src="images/1_over.png";
			document.getElementById("str12img").src="images/2.png";
			document.getElementById("str13img").src="images/3.png";
			document.getElementById("playimg").src="images/stop.png";
			document.getElementById("zoomimg").src="images/x1.png";
			stream11();
		} 
	}
	else if(index=='str12')
	{
		if (imgsrc=="2.png")
		{ 
			document.getElementById("str12img").src="images/2_over.png";
			document.getElementById("str11img").src="images/1.png";
			document.getElementById("str13img").src="images/3.png";
			document.getElementById("playimg").src="images/stop.png";
			document.getElementById("zoomimg").src="images/x1.png";
			stream12();
		} 
	}
	else if(index=='str13')
	{
		if (imgsrc=="3.png")
		{ 
			document.getElementById("str13img").src="images/3_over.png";
			document.getElementById("str11img").src="images/1.png";
			document.getElementById("str12img").src="images/2.png";
			document.getElementById("playimg").src="images/stop.png";
			document.getElementById("zoomimg").src="images/x1.png";
			stream13();
		} 
	}
	else if(index=='home')
	{
		if (imgsrc=="center.png")
		{
			ptzcmdSubmit("home");
		} 
	}
	else if(index=='hvstop')
	{
		if (imgsrc=="hvstop.png")
		{
			ptzcmdSubmit("stop");
			
			document.getElementById("hscanimg").src="images/hscan.png";
			document.getElementById("vscanimg").src="images/vscan.png";
			document.getElementById("tourimg").src="images/tour.png";
		}
	}
	else if(index=='hscan')
	{
		document.getElementById("hscanimg").src="images/hscan_over.png";
		ptzcmdSubmit("hscan");
	}
	else if(index=='vscan')
	{
		document.getElementById("vscanimg").src="images/vscan_over.png";
		ptzcmdSubmit("vscan");
	}
	else if(index=='tour')
	{
		document.getElementById("tourimg").src="images/tour_over.png";
		
		if(CID == "player1")
		{
			document.getElementById('player1').PTZPreset(3,parseInt(1));
		}
		else if(CID=="player2")
		{
			document.getElementById('player2').PTZPreset(3,parseInt(1));
		}
		else if(CID=="player3")
		{
			document.getElementById('player3').PTZPreset(3,parseInt(1));
		}
		else if(CID=="player4")
		{
			document.getElementById('player4').PTZPreset(3,parseInt(1));
		}
		
		/*var form =document.rescgi;
		
		if(CID=="player1")
		{
			form.action="/hy-cgi/ptz.cgi?cmd=preset&act=tour";
		}
		else if(CID=="player2")
		{
			form.action="http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=preset&act=tour";
		}
		else if(CID=="player3")
		{
			form.action="http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=preset&act=tour";
		}
		else if(CID=="player4")
		{
			form.action="http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=preset&act=tour";
		}
		
		form.submit();*/
	}
	else if(index=='zoom')
	{
		if(imgsrc == "x1.png")
		{
			if(CID=="player1")
			{
				document.getElementById('player1').ZoomRate = 2;
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').ZoomRate = 2;
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').ZoomRate = 2;
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').ZoomRate = 2;
			}
			
			document.getElementById("zoomimg").src="images/x2.png";
		}
		else if(imgsrc == "x2.png")
		{
			if(CID=="player1")
			{
				document.getElementById('player1').ZoomRate = 3;
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').ZoomRate = 3;
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').ZoomRate = 3;
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').ZoomRate = 3;
			}
			document.getElementById("zoomimg").src="images/x3.png";	
		}
		else if(imgsrc == "x3.png")
		{
			if(CID=="player1")
			{
				document.getElementById('player1').ZoomRate = 4;
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').ZoomRate = 4;
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').ZoomRate = 4;
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').ZoomRate = 4;
			}
			document.getElementById("zoomimg").src="images/x4.png";	
		}
		else if(imgsrc == "x4.png")
		{
			if(CID=="player1")
			{
				document.getElementById('player1').ZoomRate = 1;
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').ZoomRate = 1;
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').ZoomRate = 1;
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').ZoomRate = 1;
			}
			document.getElementById("zoomimg").src="images/x1.png";	
		}
	}
	else if(index=='zoomin')
	{
		if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
		{
			if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
			{
				//通过CGI操作云台
				var form =document.rescgi;
				form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=zoomin";
				form.submit();
			}
			else
			{
				if(CID=="player1")
				{
					document.getElementById('player1').TZoomFocus(0);
				}
				else if(CID=="player2")
				{
					document.getElementById('player2').TZoomFocus(0);
				}
				else if(CID=="player3")
				{
					document.getElementById('player3').TZoomFocus(0);
				}
				else if(CID=="player4")
				{
					document.getElementById('player4').TZoomFocus(0);
				}
			}
		}
		else
		{
			//通过CGI操作云台
			var form =document.rescgi;
			form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=zoomin";
			form.submit();
		}
	}
	else if(index=='zoomout')
	{
		if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
		{
			if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
			{
				//通过CGI操作云台
				var form =document.rescgi;
				form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=zoomout";
				form.submit();
			}
			else
			{
				if(CID=="player1")
				{
					document.getElementById('player1').TZoomFocus(1);
				}
				else if(CID=="player2")
				{
					document.getElementById('player2').TZoomFocus(1);
				}
				else if(CID=="player3")
				{
					document.getElementById('player3').TZoomFocus(1);
				}
				else if(CID=="player4")
				{
					document.getElementById('player4').TZoomFocus(1);
				}
			}
		}
		else
		{
			//通过CGI操作云台
			var form =document.rescgi;
			form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=zoomout";
			form.submit();
		}
	}
	else if (index == 'focusin')
	{
		if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
		{
			if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
			{
				//通过CGI操作云台
				var form =document.rescgi;
				form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=focusin";
				form.submit();
			}
			else
			{
				if(CID=="player1")
				{
					document.getElementById('player1').TZoomFocus(2);
				}
				else if(CID=="player2")
				{
					document.getElementById('player2').TZoomFocus(2);
				}
				else if(CID=="player3")
				{
					document.getElementById('player3').TZoomFocus(2);
				}
				else if(CID=="player4")
				{
					document.getElementById('player4').TZoomFocus(2);
				}
			}
		}
		else
		{
			//通过CGI操作云台
			var form =document.rescgi;
			form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=focusin";
			form.submit();
		}
	}
	else if (index == 'focusout')
	{
	    if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
		{
			if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
			{
				//通过CGI操作云台
				var form =document.rescgi;
				form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=focusout";
				form.submit();
			}
			else
			{
				if(CID=="player1")
				{
					document.getElementById('player1').TZoomFocus(3);
				}
				else if(CID=="player2")
				{
					document.getElementById('player2').TZoomFocus(3);
				}
				else if(CID=="player3")
				{
					document.getElementById('player3').TZoomFocus(3);
				}
				else if(CID=="player4")
				{
					document.getElementById('player4').TZoomFocus(3);
				}
			}
		}
		else
		{
			//通过CGI操作云台
			var form =document.rescgi;
			form.action="/hy-cgi/ptz.cgi?cmd=zoomctrl&act=focusout";
			form.submit();
		}
	}
	else if(index=='showalarm')
	{
		if (imgsrc=="alarmstatus.png")
		{ 
			document.getElementById("showalarmimg").src="images/alarmstatus_over.png";
			if(CID=="player1")
			{
				player1.SetAlarmMBDisplay(1);
			}
			else if(CID=="player2")
			{
				player2.SetAlarmMBDisplay(1);
			}
			else if(CID=="player3")
			{
				player3.SetAlarmMBDisplay(1);
			}
			else if(CID=="player4")
			{
				player4.SetAlarmMBDisplay(1);
			}
		} 
		else
		{ 
			document.getElementById("showalarmimg").src="images/alarmstatus.png";
			if(CID=="player1")
			{
				player1.SetAlarmMBDisplay(0);
			}
			else if(CID=="player2")
			{
				player2.SetAlarmMBDisplay(0);
			}
			else if(CID=="player3")
			{
				player3.SetAlarmMBDisplay(0);
			}
			else if(CID=="player4")
			{
				player4.SetAlarmMBDisplay(0);
			}
		} 
	}
	else if(index=='winview')
	{
		if(imgsrc == "x1.gif")
		{
			document.getElementById("winviewimg").src="images/x4.gif";
			changwin(4);
			players();
		}
		else if(imgsrc == "x4.gif")
		{
			document.getElementById("winviewimg").src="images/x1.gif";
			changwin(1);
		}
	}
	/*else if(index=='win1')
	{
		document.getElementById("win1img").src="images/x1_over.gif";
		document.getElementById("win4img").src="images/x4.gif";
		changwin(1);
	}
	else if(index=='win4')
	{
		document.getElementById("win4img").src="images/x4_over.gif";
		document.getElementById("win1img").src="images/x1.gif";
		changwin(4);
	}*/
}

function changwin(x)
{
	document.getElementById("zoomimg").src = "images/x1.png";
	CID = "player1";
    var ssrcx=document.getElementById("ctrlpanelimg").src.replace(locate,'');
    var imgsrcx = ssrcx.substr(ssrcx.lastIndexOf('\/') + 1);

	if(x==1)
	{
		document.getElementById('video').style.textAlign = "";
		document.getElementById("x1").style.borderColor="";
		document.getElementById("x1").style.border = "";

		document.getElementById("x2").style.width = "0px";
		document.getElementById('x2').style.height = "0px";
		document.getElementById("x3").style.width = "0px";
		document.getElementById('x3').style.height = "0px";
		document.getElementById("x4").style.width = "0px";
		document.getElementById('x4').style.height = "0px";

		if (imgsrcx=="ctrlpanel.png")
		{
			document.getElementById('x1').style.marginLeft="0px";
			var ssrc11=document.getElementById("str11img").src.replace(locate,'');
    		var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
			if (imgsrc11=="1_over.png")
			{ 
				document.getElementById("x1").style.width="100%";
				document.getElementById('x1').style.height="100%";
				document.getElementById('player1').style.marginTop="0px";
			} 
			
			var ssrc12=document.getElementById("str12img").src.replace(locate,'');
    		var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
			if (imgsrc12=="2_over.png")
			{
				document.getElementById("x1").style.width="640px";
				document.getElementById('x1').style.height="360px";
				document.getElementById('player1').style.marginTop="75px";
			} 
			
			var ssrc13=document.getElementById("str13img").src.replace(locate,'');
    		var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
			if (imgsrc13=="3_over.png")
			{ 
				document.getElementById("x1").style.width="320px";
				document.getElementById('x1').style.height="180px";
				document.getElementById('player1').style.marginTop="160px";
			} 
		}
		else
		{
			document.getElementById('x1').style.marginLeft="0px";
			document.getElementById('x1').style.width="100%";
			document.getElementById('x1').style.height="100%";
			var ssrc11=document.getElementById("str11img").src.replace(locate,'');
    		var imgsrc11=ssrc11.substr(ssrc11.lastIndexOf('\/') + 1);
			if (imgsrc11=="1_over.png")
			{ 
				document.getElementById("x1").style.width="100%";
				document.getElementById('x1').style.height="100%";
				document.getElementById('player1').style.marginTop="0px";
			} 
			
			var ssrc12=document.getElementById("str12img").src.replace(locate,'');
    		var imgsrc12=ssrc12.substr(ssrc12.lastIndexOf('\/') + 1);
			if (imgsrc12=="2_over.png")
			{
				document.getElementById("x1").style.width="640px";
				document.getElementById('x1').style.height="360px";
				document.getElementById('player1').style.marginTop="75px";
			} 
			
			var ssrc13=document.getElementById("str13img").src.replace(locate,'');
    		var imgsrc13=ssrc13.substr(ssrc13.lastIndexOf('\/') + 1);
			if (imgsrc13=="3_over.png")
			{ 
				document.getElementById("x1").style.width="320px";
				document.getElementById('x1').style.height="180px";
				document.getElementById('player1').style.marginTop="160px";
			} 
		}

		document.getElementById('player2').Stop();
		document.getElementById('player3').Stop();
		document.getElementById('player4').Stop();
	}
	else if(x==4)
	{		
		document.getElementById("x1").style.border="2px solid yellow";
		document.getElementById("x2").style.borderColor="";
		document.getElementById("x3").style.borderColor="";
		document.getElementById("x4").style.borderColor="";
		
		if (imgsrcx=="ctrlpanel.png")
		{
		    document.getElementById('player1').style.marginTop = "0px";
		    document.getElementById("playpage").style.width = "739px";

		    if (navigator.userAgent.indexOf("Safari") > 0)
		    {
		        document.getElementById("ctrl").style.width = "180px";
		        document.getElementById('ctrl').style.height = "510px";
		        document.getElementById('video').style.textAlign = "left";
		        document.getElementById('x1').style.marginLeft = "0px";
		        document.getElementById('x1').style.marginTop = "0px";
		        document.getElementById('x3').style.marginLeft = "0px";
		        document.getElementById('x3').style.marginTop = "0px";
		    }
		    else
		    {
                document.getElementById('x1').style.marginLeft = "-370px";
                document.getElementById('x1').style.marginTop = "0px";
                document.getElementById('x3').style.marginLeft = "-370px";
                document.getElementById('x3').style.marginTop = "0px";
		    }
						
		    document.getElementById('x1').style.width = "366px";
		    document.getElementById('x1').style.height = "251px";
		    
		    document.getElementById('x2').style.width = "366px";
		    document.getElementById('x2').style.height = "251px";
		    document.getElementById('x2').style.marginLeft = "370px";
		    document.getElementById('x2').style.marginTop = "-255px";

		    document.getElementById('x3').style.width = "366px";
		    document.getElementById('x3').style.height = "251px";
		    
		    document.getElementById('x4').style.width = "366px";
		    document.getElementById('x4').style.height = "251px";
		    document.getElementById('x4').style.marginLeft = "370px";
		    document.getElementById('x4').style.marginTop = "-255px";
		}
		else
		{
		    document.getElementById('player1').style.marginTop = "0px";
		    document.getElementById("playpage").style.width = "935px";

		    if (navigator.userAgent.indexOf("Safari") > 0)
		    {
		        document.getElementById("ctrl").style.width = "0px";
		        document.getElementById('ctrl').style.height = "0px";
		        document.getElementById('video').style.textAlign = "left";
		        document.getElementById('x1').style.marginLeft = "0px";
		        document.getElementById('x1').style.marginTop = "0px";
		        document.getElementById('x3').style.marginLeft = "0px";
		        document.getElementById('x3').style.marginTop = "0px";
		    }
		    else
		    {
		        document.getElementById("ctrl").style.width = "180px";
		        document.getElementById('ctrl').style.height = "510px";
		        document.getElementById('x1').style.marginLeft = "-468px";
		        document.getElementById('x1').style.marginTop = "0px";
		        document.getElementById('x3').style.marginLeft = "-468px";
		        document.getElementById('x3').style.marginTop = "0px";
		    }
			
			document.getElementById('x1').style.width = "464px";
			document.getElementById('x1').style.height = "251px";
			
			document.getElementById('x2').style.width = "464px";
			document.getElementById('x2').style.height = "251px";
			document.getElementById('x2').style.marginTop="-255px";
			document.getElementById('x2').style.marginLeft="467px";
			
			document.getElementById('x3').style.width = "464px";
			document.getElementById('x3').style.height = "251px";
			
			document.getElementById('x4').style.width = "464px";
			document.getElementById('x4').style.height = "251px";
			document.getElementById('x4').style.marginTop="-255px";
			document.getElementById('x4').style.marginLeft="467px";
		}
	}
}

/*function set_preset()
{
	var setpre = document.getElementById('pres').value;
	var cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+setpre+"'");
	SendCGICMD(cgistr);
	location.reload();
}*/

function set_preset(num)
{
	if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
	{
		if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
		{
			//通过CGI操作预置位
			var cgistr;
			cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
			/*if(CID=="player1")
			{
				cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
			}
			else if(CID=="player2")
			{
				cgistr=eval("'http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
			}
			else if(CID=="player3")
			{
				cgistr=eval("'http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
			}
			else if(CID=="player4")
			{
				cgistr=eval("'http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
			}
			*/
			SendCGICMD(cgistr);
		}
		else
		{
			//通过控件操作预置位
			if(CID == "player1")
			{
				document.getElementById('player1').PTZPreset(1,parseInt(num));
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').PTZPreset(1,parseInt(num));
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').PTZPreset(1,parseInt(num));
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').PTZPreset(1,parseInt(num));
			}
		}
	}
	else
	{
		//通过CGI操作预置位
		var cgistr;
		cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
		/*if(CID=="player1")
		{
			cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
		}
		else if(CID=="player2")
		{
			cgistr=eval("'http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
		}
		else if(CID=="player3")
		{
			cgistr=eval("'http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
		}
		else if(CID=="player4")
		{
			cgistr=eval("'http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=preset&act=set&status=1&number="+num+"'");
		}
		*/
		SendCGICMD(cgistr);
	}
	
	hideppos("cp");
}

/*function go_preset()
{
	var callpre = document.getElementById('prelist').value;
	var cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+callpre+"'");
	SendCGICMD(cgistr);
}*/

function go_preset(num)
{
	if((navigator.platform != "Mac68K")&&(navigator.platform != "MacPPC")&&(navigator.platform != "Macintosh")&&(navigator.platform!="MacIntel"))
	{
		if ((navigator.appVersion.indexOf("iPod")!=-1) || (navigator.appVersion.indexOf("iPhone")!=-1))
		{
			//通过CGI操作预置位
			var cgistr;
			cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
			/*if(CID=="player1")
			{
				cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
			}
			else if(CID=="player2")
			{
				cgistr=eval("'http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
			}
			else if(CID=="player3")
			{
				cgistr=eval("'http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
			}
			else if(CID=="player4")
			{
				cgistr=eval("'http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
			}*/
			SendCGICMD(cgistr);
		}
		else
		{
			//通过控件操作预置位
			if(CID=="player1")
			{
				document.getElementById('player1').PTZPreset(2,parseInt(num));
			}
			else if(CID=="player2")
			{
				document.getElementById('player2').PTZPreset(2,parseInt(num));
			}
			else if(CID=="player3")
			{
				document.getElementById('player3').PTZPreset(2,parseInt(num));
			}
			else if(CID=="player4")
			{
				document.getElementById('player4').PTZPreset(2,parseInt(num));
			}
		}
	}
	else
	{
		//通过CGI操作预置位
		var cgistr;
		cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
		/*if(CID=="player1")
		{
			cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
		}
		else if(CID=="player2")
		{
			cgistr=eval("'http://"+dev_host0+":"+dev_port0+"/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
		}
		else if(CID=="player3")
		{
			cgistr=eval("'http://"+dev_host1+":"+dev_port1+"/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
		}
		else if(CID=="player4")
		{
			cgistr=eval("'http://"+dev_host2+":"+dev_port2+"/hy-cgi/ptz.cgi?cmd=preset&act=goto&number="+num+"'");
		}*/
		SendCGICMD(cgistr);
	}
	
	hideppos("sp");
}

function tour()
{
	var form =document.rescgi;
	form.action="/hy-cgi/ptz.cgi?cmd=preset&act=tour";
	form.submit();
}

function del_preset()
{
	/*var callpre = document.getElementById('prelist').value;
	var cgistr=eval("'/hy-cgi/ptz.cgi?cmd=preset&act=set&status=0&number="+callpre+"'");
	SendCGICMD(cgistr);
	location.reload();*/
}

function PreQuery()
{
	/*eval(document.getElementById('player1').PresetQuery());
	alert(presetno1);*/
}

function showppos(panel,btn)
{
	if(panel=="cp" && pnum=="a")
	{
		document.getElementById("sp").style.display="none";
		document.getElementById(panel).style.display="";
		pnum="b";
	}
	else if(panel=="cp" && pnum=="b")
	{
		document.getElementById("sp").style.display="none";
		document.getElementById(panel).style.display="none";
		pnum="a";
	}
	else if(panel=="sp" && pnums=="c")
	{
		document.getElementById("cp").style.display="none";
		document.getElementById(panel).style.display="";
		pnums="d";
	}
	else if(panel=="sp" && pnums=="d")
	{
		document.getElementById("cp").style.display="none";
		document.getElementById(panel).style.display="none";
		pnums="c";
	}
}
function hideppos(panel)
{
	document.getElementById(panel).style.display="none";
	pnum="a";
	pnums="c";
}

function SetCpBackColor(obj, n)
{
	if(n == 0){
		obj.bgColor = '#c6c5c5';
	}else{
		obj.bgColor = '#848282';
	}
}