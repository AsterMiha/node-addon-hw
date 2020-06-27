var addon = require('bindings')('addon.node')

console.log('This should be 5:', addon.sqrt(25))