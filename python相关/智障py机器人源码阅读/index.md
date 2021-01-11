# 智障`python`机器人源码阅读
## 程序的入口文件
> 阅读源码总得找到入口文件,才好发现问题
+ 软件的目录结构
    ```
        /ArmPi
            > ActionGroups
            > ArmlK
            > CameraCalibration
            > Functions
            > HiwonderSDK
            ArmPi.py
            Camera.py
            joystick.py
            LABConfig.py
            MjpgServer.py
            RPCServer.py
    ```
+ 目录文件阅读理解
  + `ArmPi.py`
    > 主要的入口文件
    + 内部关键注释