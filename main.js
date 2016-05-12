var menubar = require('menubar')
require('electron-reload')(__dirname);
var mb = menubar()
mb.setOption('always-on-top', true)
mb.on('ready', function ready () {
  console.log('app is ready')
})
