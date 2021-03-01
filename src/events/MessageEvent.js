const BaseEvent = require('../utils/structures/BaseEvent');
const gis = require('g-i-s')
module.exports = class MessageEvent extends BaseEvent {
    constructor() {
        super('message');
    }

    async run(client, message) {
        if (message.content.toLowerCase().includes('obama')) {
            gis('barrack obama', function (err, res) {
                let x = Math.floor((Math.random() * res.length) + 1);
                message.channel.send(res[x].url);
            });
        }
    }
}