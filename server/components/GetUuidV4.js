// import { v4 as uuidV4 } from 'uuid';
const uuid = require('uuid')

function GetUuidV4 () {
    return console.log('test uuidV4:',uuid.v4());
}

module.exports = GetUuidV4


