　　*有时候，盼你早点到来，我好和你分享我的乐趣；有时候，感觉顺其自然就好，这样相对于上一秒就是一个更加完美的自己-遇见你*。－－－－－－【小小默】

### 博客地址

欢迎交流和学习： [http://blog.xiaoxiaomo.com/](http://blog.xiaoxiaomo.com/ "小小默的博客")

### Installation 安装主题

```
git clone https://github.com/xiangming/landscape-plus.git themes/landscape-plus
```

Change theme field in Hexo root's _config.yml file. 修改 Hexo 根目录对应配置文件。

```
theme: landscape-plus
```


### git备份
- 对于博客备份，主要是针对于主题和source目录下的源码
备份主题主要是自己对主题进行了一些修改，当然如果没有修改就不许要备份了，直接去github源码中拉取就是了

#### 备份博客主题
1. 切换到themes目录，添加到git并提交代码
```
cd $hexo_dir/themes
git init
git add -A
git commit -m "first submit add themes"
```

2. 提交到远程分支
```
git remote add origin git@git.coding.net:xiaoxiaomo/blog-themes.git
git push origin master
```

3. 重远程分支上拉取主题
```
git clone git@git.coding.net:xiaoxiaomo/blog-themes.git
git pull origin master
```


#### 备份博客资源文件
1. 切换到source目录，添加到git并提交代码
```
cd $hexo_dir/source
git init
git add -A
git commit -m "first submit add themes"
```

2. 提交到远程分支
```
git remote add origin git@git.coding.net:xiaoxiaomo/blog-source.git
git push origin master
```

3. 重远程分支上拉取主题
```
git clone git@git.coding.net:xiaoxiaomo/blog-source.git
git pull origin master
```



----------

### 关于博客

> 1. 本博客主要以Hadoop生态相关技术为主
> 2. 当然无聊的时候也会写写随笔(●'◡'●)
> 3. 博客会持续更新,理念：“`尽量精简，尽量易懂`”


### 关于我

> 1. 一个向往自由的程序员
> 2. 追求相对完美
> 3. 开源爱好者，乐于分享
> 4. 相信存在即合理
> 5. 坚信态度是做好一件事情的基础
> 6. 学习是一件很重要的事情
> 7. 热爱生活，喜欢旅游
> 8. 一生追逐，爱与自由

### 联系我
> 1. 不断成长和迭代的途中，希望能得到大家宝贵的建议
> 2. 邮箱：jason.tangxd@gmail.com

添加`微信`可扫下方二维码

　　![](https://img.xiaoxiaomo.com/blog%2Fimg%2F20160406211054.png)