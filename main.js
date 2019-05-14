const mysqldb = require('mysql');
const { ipcMain, app, BrowserWindow } = require('electron');
const database = require('./database');
const path = require('path');
const url = require('url');


/*=============================================
=            ini Electron APP                 =
=============================================*/

function createWindow() {

  let win = new BrowserWindow({ width: 800, height: 600 })

  // load the dist folder from Angular
  win.loadURL('http://localhost:4200');
  /* win.loadURL(url.format({
    pathname: path.join(__dirname, '/dist/ElectAvo/index.html'),
    protocol: 'file:',
    slashes: true
  })); */

  // Open the DevTools optionally:
  win.webContents.openDevTools();

  win.on('closed', () => {
    database.connection.destroy();
    win = null;
  });
}

app.on('ready', createWindow)

app.on('activate', () => {
  database.connect();
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

/*=============================================
=            IPC Comunication Interface       =
=============================================*/


/*----------  affair connection iPC  ----------*/



ipcMain.on('request', (e, params) => {

  //params[0] => type of request
  let type = params[0];
  //params[1] => args of request
  let arg = params[1];

  switch (type) {

    // affair requests
    case 'get/affair/all':
      database.getAffairs(arg.offset, arg.limit).then(value => e.sender.send('reply', ['get/affair/all', value])).catch(errorHandler(e));
      break;
    case 'get/affair':
      database.getAffair(arg).then(value => e.sender.send('reply', ['get/affair', value])).catch(errorHandler(e));
      break;
    case 'get/affair/rows/count':

      database.getAffairRowsCount().then(value => {
        
        e.sender.send('reply', ['get/affair/rows/count', value[0].count]);
      }).catch(errorHandler(e));
      break;
    case 'post/affair':
      database.insertAffair(arg).then(object => e.sender.send('reply', ['post/affair', object.insertId])).catch(errorHandler(e));
      break;
    case 'update/affair':
      database.updateAffair(arg).then(_ => e.sender.send('reply', ['update/affair', true])).catch(errorHandler(e));
      break;
    case 'delete/affair':
      database.deleteAffair(arg).then(_ => e.sender.send('reply', ['delete/affair', true])).catch(errorHandler(e));
      break;

    // user requests
    case 'get/user/all':
      database.getUsers().then(value => e.sender.send('reply', ['get/user/all', value])).catch(errorHandler(e));
      break;
    case 'get/user':
      database.getUser(arg).then(value => e.sender.send('reply', ['get/user', value[0]])).catch(errorHandler(e));
      break;
    case 'post/user':
      database.insertUser(arg).then(value => e.sender.send('reply', ['post/user', value])).catch(errorHandler(e));
      break;
    case 'update/user':
      database.updateUser(arg).then(value => e.sender.send('reply', ['update/user', value])).catch(errorHandler(e));
      break;
    case 'delete/user':
      database.deleteUser(arg).then(value => e.sender.send('reply', ['delete/user', value])).catch(errorHandler(e));
      break;

    default:
      console.error('instruction not matching any request header');
      break;
  }

});

/*=====  End of IPC Comunication Interface===*/


/*----------  helpers  ----------*/

function errorHandler(e) {
  return (err) => {
    e.sender.send('errorHandler', err.Message);
    console.log('**' + err.Message);
    console.log('++' + err);
  };
}
