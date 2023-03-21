# try chatgpt API in one minute⚡


## 这个项目用来做什么😊

由于一些特殊的网络原因，在试用 chatgpt 的 API 的时候总是遇到奇奇怪怪的问题😫，有时候都不知道是网络问题，还是环境没有配好，还是 API 参数写错了。这个项目就是用 GitHub 里 codeplace 预先配置好的各种环境，还有在虚拟机上的网络环境，快速试一试 chatgpt 的 API 怎么用。

我也是在自己电脑上试了很久，最后还是在 codeplace 里发现自己那边确实是有个接口忘记配置了。

![0 B6T{6%H0G6RKNM5XT$YTP](https://user-images.githubusercontent.com/39830125/226603913-1590205f-f28b-44f8-9a7e-a347dc100734.png)

好了，就让我们开始吧，不管是奇奇怪怪的 nodeJS 配置还是网络环境要求，这个项目里都不用担心。codeplace 一个月有免费的120小时时常，对于我们想要满足一下好奇心来说，完全足够了！！

## 我们需要准备什么

1. 一个可用 chatgpt 的 API key，只要你有 openai 的账号就可以在 [这里](https://platform.openai.com/account/api-keys) 申请一个，会有18美金的免费额度，没有信用卡也没关系

2. 可以上 GitHub 的网络环境(废话，不然怎么看到的这个项目)。为了保证 codeplace 的稳定访问

## 启动 codeplace

其实这个功能已经上线很久了，不过发现并用起来的人还不多。在这个项目里面点击那个加号就可以创建一个 codeplace 虚拟机。非常的方便。
![image](https://user-images.githubusercontent.com/39830125/226607134-a4be1c18-9fa6-4e4d-b86d-79b7f5506b1a.png)

创建后项目，就会出现这样的一个页面



左边的文件名对应着不同的语言环境，我们想使用那种语言就可以进入那个文件去就好啦。

## API 调用

这部分是关于不同的语言的不同运行方式。openAI 目前只支持了python 和 node.js，其它语言会从社区维护的库放在最前面。

### python

参考：[官方文档](https://platform.openai.com/docs/api-reference/introduction)

进入 python 目录下的 chatgpt_API.py 文件，如图所示：
![QLJE6X4NQE8JE)7W @}P3%I](https://user-images.githubusercontent.com/39830125/226631399-20362c12-b174-44be-ae0f-bfd57ffec789.png)



安装一下相关的 openai 库(在这里可不用配置 pip 镜像，是不是非常方便？😉)

```

cd python

pip install -r requirements.txt

```

然后修改 "OPENAI_API_KEY" 成你自己的 API key，然后点击“运行”小按钮
![image](https://user-images.githubusercontent.com/39830125/226631594-85320797-6d17-4ecd-b89b-6cd8a2d1cc59.png)



或者在终端输入

```

python chatgpt_API.py

```

运行结果是这样的：
![GC_HZ}PZSK(QE@DTH$M~9F6](https://user-images.githubusercontent.com/39830125/226631679-24615422-35d9-4c56-98db-cdeafede224e.png)



### NodeJS

参考 ：[官方文档](https://platform.openai.com/docs/api-reference/introduction)

进入 nodeJS 目录下的 chatgpt_API.js 文件，如图所示：

![FX4P9 2U)Y87EZARFRICRBN](https://user-images.githubusercontent.com/39830125/226631839-b901deee-c354-42a6-a87f-fc436e3411be.png)


由于 nodeJS 的库函数已经在 `node_modules` 里面放好了，所以不用配置环境了（以防万一说一下安装 openai 的命令是 `npm install openai`）(在这里可不用配置 npm 镜像，是不是非常方便？😉)

修改 "OPENAI_API_KEY" 成你自己的 API key



在终端输入

```

cd nodeJS

node chatgpt_API

```

运行结果是这样的：
![J%FRU4(TBBS7IQJ%W(W4653](https://user-images.githubusercontent.com/39830125/226632006-2d7d1444-ce7d-4f59-85c9-558c656371ba.png)





## 彩蛋环节

- 这个项目全程都是在 chrome 里写完的，我的电脑里也没有这个项目，看看我多么滴云原生（不是）
- 发这条推特被某个知名推主回复，推特粉丝直接翻倍 QAQ
- 本来想用英文写 README 的，后来一想好像没必要哦🤣
- js API测试语言是写一个 python hello world，python 的 测试语言是写一个 js 的 hello world（后面更新其它语言就是自己的hello world了）
