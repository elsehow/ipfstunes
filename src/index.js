'use strict'
// emit new file on drag into window
// TODO send these paths to main process
let pathStream = require('./src/dragdrop')()
//HACK pathStream.log('NEW PATH')
let keys = require('./test/keys.json')
let tunes = require('./lib/ipfstunes-core')(keys, '/tmp/ipfstunes')
console.log('tunes', tunes.kefir)
pathStream.flatMap(tunes.add).log('added tune')
//tunes.on('new-view', v => {
//  console.log(v)
//})
// TODO setup ipfstunes-core
// TODO render view events with yo-yo
