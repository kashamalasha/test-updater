const { contextBridge, ipcRenderer } = require(`electron`);

contextBridge.exposeInMainWorld(`electronAPI`, {
  closeWindow: () => ipcRenderer.send(`close-window`),
  onSetVersion: (callback) => ipcRenderer.on('set-version', callback)
})

window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }
})
