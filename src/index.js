'use strict'
// emit new file on drag into window
// TODO send these paths to main process
let pathStream = require('./src/dragdrop')()
//HACK pathStream.log('NEW PATH')
let keys = require('./test/keys.json')
let tunes = require('ipfstunes-core')(keys, '/tmp/ipfstunes')
console.log('tunes', tunes)

pathStream.flatMap(tunes.add)

tunes.on('new-view', console.log)
// TODO setup ipfstunes-core
// TODO render view events with yo-yo
