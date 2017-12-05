const electron = require('electron')
// 控制应用程序寿命的模块。
const app = electron.app
// 模块创建原生浏览器窗口。
const BrowserWindow = electron.BrowserWindow // 创建原生浏览器窗口的模块

const path = require('path')
const url = require('url')

// 保留一个窗口对象的全局引用，如果你不这样做的话，窗口就会出现
// 当JavaScript对象被垃圾收集时自动关闭。
let mainWindow

function createWindow () {
  // 创建浏览器窗口。
  mainWindow = new BrowserWindow({width: 1024, height:768})

  // 并加载应用程序的index.html。
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // 打开DevTools。
  // mainWindow.webContents.openDevTools()

  // 窗户关闭时发射。
  mainWindow.on('closed', function () {
    // 解引用窗口对象，通常你会存储窗口
    // 在一个数组中，如果你的应用程序支持多窗口，现在是时候了
    // 当你应该删除相应的元素。
    mainWindow = null
  })
}

// Electron完成后将调用此方法
// 初始化并准备创建浏览器窗口.
// 一些API只能在发生此事件后才能使用。
app.on('ready', createWindow)

// 所有窗户关闭时退出。
app.on('window-all-closed', function () {
  // 在OS X上，应用程序及其菜单栏很常见
  // 保持活动状态，直到用户明确退出Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // 在OS X上，通常在应用程序中重新创建一个窗口
  // 停靠点图标被点击，没有其他窗口打开。
  if (mainWindow === null) {
    createWindow()
  }
})

// 在这个文件中，您可以包含应用程序的其他特定主流程
// code。 你也可以把它们放在单独的文件中并在这里需要它们。
