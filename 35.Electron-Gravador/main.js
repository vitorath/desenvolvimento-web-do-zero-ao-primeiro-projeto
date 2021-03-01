const { 
    app, 
    BrowserWindow, 
    ipcMain, 
    Menu, 
    shell,
    dialog
} = require('electron');
const os = require('os');
const path = require('path');
const fs = require('fs');

const Store = require('./Store');

const preferences = new Store({
  configName: 'user-preferences',
  defaults: {
    destination: path.join(os.homedir(), 'audios')
  }
})

let destination = preferences.get('destination');

const isDev = process.env.NODE_ENV !== undefined && process.env.NODE_ENV === 'development';

const isMac = process.platform === 'darwin';

function createPreferencesWindow() {
  const preferenceWindow = new BrowserWindow({
    width: isDev ? 950 : 500,
    resizable: isDev,
    height: 150,
    backgroundColor: '#234',
    show: false,
    icon: path.join(__dirname, 'assets', 'icons', 'icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  preferenceWindow.loadFile('./src/window/preferences/index.html');

  preferenceWindow.once('ready-to-show', () => {
    preferenceWindow.show(); 

    preferenceWindow.webContents.send('destination-path-update', destination);
  });

  if (isDev) {
    preferenceWindow.openDevTools();
  }

}

function createWindow() {
  const win = new BrowserWindow({
    width: isDev ? 950 : 500,
    resizable: isDev,
    height: 300,
    backgroundColor: '#234',
    show: false,
    icon: path.join(__dirname, 'assets', 'icons', 'icon.png'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // win.loadURL('https://youtube.com');
  win.loadFile('./src/window/main/index.html');

  if (isDev) {
    win.webContents.openDevTools();
  }

  win.once('ready-to-show', () => {
    win.show();
  });

   const menuTemplate = [
    { 
      label: app.name,
      submenu: [
        {
          label: 'Preferences',
          click: () => createPreferencesWindow()
        },
        {
          label: 'Open destination',
          click: () => shell.openPath(destination) 
        }
      ]
    },
    { 
      label: 'File',
      submenu: [
        isMac ? { role: 'close' } : { role: 'quit' }
      ]
    }
  ];
  const menu = Menu.buildFromTemplate(menuTemplate);

  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  createWindow();
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
  createWindow();
});

ipcMain.on("save-buffer", (event, buffer) => {
  const filePath = path.join(destination, `${Date.now()}`);
  fs.writeFileSync(`${filePath}.webm`, buffer);
});

ipcMain.handle('show-dialog', async (event) => {
  const result = await dialog.showOpenDialog({
    properties: ['openDirectory']
  });

  const dirPath = result.filePaths[0];

  preferences.set('destination', dirPath);
  destination = preferences.get('destination');

  return destination;
});