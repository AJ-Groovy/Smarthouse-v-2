const Device = require('./DeviceAbstract');

module.exports = class TV extends Device {

    constructor(settings = {}) {

        super({ type: 'TV' });
        this.channels = settings.channels || [];
        this.currentChannel = this.channels[0];
    }

    nextChannel() {

        if (!this.isEnabled) {
            throw new Error('Turn on device first');
        }

        let channelIndex = this.channels.indexOf(this.currentChannel);

        if (channelIndex < this.channels.length - 1) {

            channelIndex++;

        } else {

            channelIndex = 0;

        }

        this.currentChannel = this.channels[channelIndex]

    }

    previousChannel() {

        if (!this.isEnabled) {
            throw new Error('Turn on device first');
        }
        
        let channelIndex = this.channels.indexOf(this.currentChannel);

        if (channelIndex > 0) {

            channelIndex--;

        } else {

            channelIndex = this.channels.length - 1;

        }

        this.currentChannel = this.channels[channelIndex]

    }

    setChannel(channel) {


    }


}
