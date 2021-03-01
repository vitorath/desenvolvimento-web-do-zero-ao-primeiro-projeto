const { app, BrowserWindow, ipcMain, Menu, globalShortcut } = require('electron');
const os = require('os');
const path = require('path');

const isDev = process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development';

const isMac = process.platform === 'darwin';

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 600,
    backgroundColor: '#dedede',
    show: false,
    icon: path.join(__dirname, 'assets', 'icons', 'key.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // win.loadURL('https://youtube.com');
  win.loadFile('./src/index.html');

  if (isDev) {
    win.webContents.openDevTools();
  }

  win.once('ready-to-show', () => {
    win.show();
    setTimeout(() => {
      win.webContents.send('cpu-name', os.cpus()[0].model);
    }, 3000);
  });

   // https://www.electronjs.org/docs/api/menu-item
   const menuTemplate = [
    { role: 'appMenu'},
    { role: 'fileMenu'},
    { 
      label: 'Window',
      submenu: [
        { 
          label: 'New Window', 
          click: () => {
            createWindow();
          }
        }, 
        {
          type: 'separator'
        },
        {
          label: 'Close all Windows',
          accelarator: 'CmdOrCtrl+Q',
          click: () => {
            console.log('Atalho de menu executado');
            BrowserWindow.getAllWindows().forEach((window) => {
              window.close();
            })
          }
        }
      ],
    }
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
  globalShortcut.register('CmdOrCtrl+d', () => {
    console.log('Atalho global');
    BrowserWindow.getAllWindows()[0].setAlwaysOnTop(true);
    BrowserWindow.getAllWindows()[0].setAlwaysOnTop(false);
  });
});

app.on('will-quit', () => {
  globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('open-new-window', (event, value) => {
  console.log(event, value);
  createWindow();
})