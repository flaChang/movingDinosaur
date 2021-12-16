import string from './css.js' //模块化

const player = {
    id: undefined,
    time: 100,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    events: {
        '#btnStop': 'stop',             //清掉
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnMid': 'normal',
        '#btnFast': 'fast',
    },
    n: 1,
    init: () => {                                              //初始化
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)   //同时以文本的形式和html的形式展示标签
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            const value = player.events[key]
            document.querySelector(key).onclick = player[value]  //用字符串取方法
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id)//取消先前设定的setInterval任务
            return
        }
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight               //自动滚动。到代码的高度
    },
    stop: () => {
        window.clearInterval(player.id)
    },
    play: () => {
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)              //每次调用play的时候都会把它赋值给id
        //考虑将它内置
    },
    slow: () => {
        player.stop()                //把闹钟砸了，再重新定闹钟
        player.time = 200
        player.play()
    },
    normal: () => {
        player.stop()
        player.time = 100
        player.play()
    },
    fast: () => {
        player.stop()
        player.time = 0
        player.play()
    },
}

player.init()


//太丑了，如何解决重复的问题
//x=()=>{run()}  x和run是等价的
//window.clearInterval(id) 以及 id = setInterval(run, time) 重复
//使用面向对象的思维再次进行优化
//每次调用play的时候都会把它赋值给id  考虑将它内置
//不能在声明一个对象的''