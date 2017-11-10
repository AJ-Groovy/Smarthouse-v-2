const createDevice = require('./Devices/DeviceFactory');
const Storage = require('./Storage');

let DeviceStorage = new Storage();


const myTV = createDevice('TV', {name : "my tv", type : "tv", channels : ['Music', 'News'] });
const myTV2 = createDevice('TV', {name : "my tv 2", type : "tv", channels : ['Music', 'News', 'Documentary'] });

DeviceStorage.set(myTV.id, myTV);
DeviceStorage.set(myTV2.id, myTV2);
let a = DeviceStorage.get(myTV2.id);

console.log(a);