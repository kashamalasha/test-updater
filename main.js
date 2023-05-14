const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

require('update-electron-app')()

function createWindow () {
  const mainWindow = new BrowserWindow({
    width: 400,
    height: 400,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    frame: false,
  })


  mainWindow.loadFile('index.html')
  mainWindow.webContents.send('set-version', app.getVersion())
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })

  ipcMain.on(`close-window`, () => {
    app.exit();
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
