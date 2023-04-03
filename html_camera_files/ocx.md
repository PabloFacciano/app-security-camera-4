# OCX Docs

## Params
ip  192.168.0.48
passPort  0
WndBGColor -1
BorderBGColor -1
BordColor -1
Language Spanish/English/test
hostport=34567

## AxWEBLib.AxWeb

ocx references found in main.html:

- Buttons
  - RebootServer()
  - EditDVRColor(-1)

- Sondeos
value: 1 to 255

  - Empezar
  PTZCtrlTour(-1,value,true)

  - Parar
  PTZCtrlTour(-1,value,false)

  - Edit
  PTZEditTure(value)

- Gestión de puntos prefijados
value

  - Go Preset
  PTZCtrlGotoPreset(-1,value)

  - Add Preset
  PTZCtrlSetPreset(-1,value,true)

  - Delete Preset
  PTZCtrlSetPreset(-1,value,false)

- Zoom

  - Minus start
  PTZCtrlStart(-1,9,value))
  - Minus stop
  PTZCtrlStop(-1,9,value))

  - Plus start
  PTZCtrlStart(-1,8,value))
  - Plus stop
  ocx.PTZCtrlStop(-1,8,value))

- Focus
  
  - Minus start
  PTZCtrlStart(-1,11,value))
  - Minus stop
  PTZCtrlStop(-1,11,value))

  - Plus start
  PTZCtrlStart(-1,10,value))
  - Plus stop
  PTZCtrlStop(-1,10,value))

- Iris

  - Minus start
  PTZCtrlStart(-1,12,value))
  - Minus stop
  PTZCtrlStop(-1,12,value))

  - Plus start
  PTZCtrlStart(-1,13,value))
  - Plus stop
  PTZCtrlStop(-1,13,value))

- Movement
  ocx.PTZCtrlStop(-1,4,value))
  
  ocx.PTZCtrlStart(-1,4,value))
  ocx.PTZCtrlStop(-1,4,value))
  ocx.PTZCtrlStop(-1,0,value))
  ocx.PTZCtrlStart(-1,0,value))
  ocx.PTZCtrlStop(-1,0,value))
  ocx.PTZCtrlStop(-1,6,value))
  ocx.PTZCtrlStart(-1,6,value))
  ocx.PTZCtrlStop(-1,6,value))
  ocx.PTZCtrlStop(-1,2,value))
  ocx.PTZCtrlStart(-1,2,value))
  ocx.PTZCtrlStop(-1,2,value))
  ocx.OnBntEntermenu();
  ocx.OnBntStart3DPos();
  ocx.PTZCtrlStop(-1,3,value))
  ocx.PTZCtrlStart(-1,3,value))
  ocx.PTZCtrlStop(-1,3,value))
  ocx.PTZCtrlStop(-1,5,value))
  ocx.PTZCtrlStart(-1,5,value))
  ocx.PTZCtrlStop(-1,5,value))
  ocx.PTZCtrlStop(-1,1,value))
  ocx.PTZCtrlStart(-1,1,value))
  ocx.PTZCtrlStop(-1,1,value))
  ocx.PTZCtrlStop(-1,7,value))
  ocx.PTZCtrlStart(-1,7,value))
  ocx.PTZCtrlStop(-1,7,value))
  
ocx.BMPCapturePicture("C:\\BMP")

- Windows

ocx.ChangeShowWndNum(64,true,0,0)
ocx.ChangeShowWndNum(36,true,0,0)
ocx.ChangeShowWndNum(25,true,0,0)
ocx.ChangeShowWndNum(16,true,0,0)
ocx.ChangeShowWndNum(9,true,0,0)
ocx.ChangeShowWndNum(4,true,0,0)
ocx.ChangeShowWndNum(1,true,0,0)


ocx.Fullscreen(true)

ocx.ShowClientConfig()
ocx.ShowDeviceConfig()
ocx.ShowLog()
ocx.ShowPlayBack()

// Language
ocx.SetSpecialParamEx2(2,cLanguage,0,0)
ocx.SetSpecialParamEx(0,0,0,888);	
ocx.SetSpecialParamEx2(2,cLanguage,0,0);

ocx.StopRealPlay()
ocx.StopRecord()
ocx.StartRecord('C:\\record')
ocx.startRecordAll("C:\\record")
ocx.stopRecordAll()
ocx.SetColor(0,gca,gcb,gcc,gcd);

ocx.PlayAll()
ocx.StartRealPlay(channel,0,1)
ocx.StopPlayReal(channel)
ocx.StopRealPlayAll();

ocx.ChangeShowWndNum()
ocx.RetrievePassWord(ipaddress, hostport)
ocx.Login(ipaddress,hostport,username,password)
ocx.SetPsw();
ocx.Logout()

ocx.StopRecordBychannel(channel)
ocx.StartRecordByChannel(channel)

// bEnableTalkIpc
ocx.SetSpecialParamEx2(5002, 0, i, 0)
ocx.SetSpecialParamEx2(5001, 0, channel, 0)
ocx.SetSpecialParamEx2(5001, 0, channel, 0);
ocx.SetSpecialParamEx2(5004, 0, 0, 0)
ocx.StartTalkIpc(lnum)
ocx.StopTalkIpc(-1) // channel

ocx.GetTalkFuncIpc(i)
ocx.GetTalkFuncIpcAll()
ocx.IsEnableTalkIpc()
ocx.GetVMInfo(5003)

ocx.StartTalk()
ocx.StopTalk()

ocx.GetColor()
ocx.OpenSound(-1)
ocx.CloseSound(1)

ocx.GetChannelName()
ocx.GetDeviceState(1,0)


## OCX Events

// ?
CommonState(nType, nChannel, nStatus)

// Resize?
SpecialEvent(nType,nNumber,nCheck) 





