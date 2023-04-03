
# OCX Docs

## HTML

Option 1:
```
<object id="player1" type="application/x-hyplayer" width="100%" height="100%" align="center" valign="middle" border="0">
<p>Download and install OCX control <a href="download/HYPlayer.exe">here</a></p>
</object>
```

Option 2:
```
<embed src=' + rtsp + ' width="100%" height="508" autoplay="true" controller="true" scale="tofit" ShowStatusBar="false" type="video/quicktime" pluginspage="http://www.apple.com/quicktime/download/index.html"></embed>
```

## Methods

### Play
SetDeviceInfo(username,password,ip,port)

Play(rstp) 

/*
var rtsp = "rtsp://" + encodeURIComponent(username) + ":" + encodeURIComponent(password) + "@" + ip + ":80/live/ch0"; 
ch0 / ch1
*/

Stop

### Speaker
SetSpeakerParam(5, 8000, 1)

StartPlayerSpeaker(ip, port)

StopPlayerSpeaker()

### Recording / Photo
BeginRecord(2000000000)

EndRecord()

Snapshot()

### Movement
PtzControl(NUMBER,-1)

/*
1000 = left
2000 = right
3000 = up
4000 = down
5000 = home
6000 = hscan
7000 = vscan
8000 = stop
*/

PTZPreset(3,parseInt(1)) // tour

PresetQuery()

### Zoom
TZoomFocus(0) // 1, 2, 3, 4

### Alarm
SetAlarmMBDisplay(1) // 0, 1

## Properties
ControlID // 0

MuteFlag // True/False

ZoomRate = 1 // 1, 2, 3, 4

bgColor // #c6c5c5