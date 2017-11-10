const Device = require('./DeviceAbstract');

module.exports = class TV extends Device {

    constructor(settings = {}) {

        super({ type: 'TV'});
        this.channels = settings.channels || [];
        this.currentChannel = this.channels[0];
    }

    nextChannel() {

        let channelIndex = this.channels.indexOf(this.currentChannel);

        if (channelIndex < channels.length - 1) {

            this.channelIndex++;

        } else {

            this.channelIndex = 0;

        }

        this.currentChannel = this.channels[channelIndex]

    }

    previousChannel() {

        let channelIndex = this.channels.indexOf(this.currentChannel);

        if (channelIndex > 0) {

            this.channelIndex--;

        } else {

            this.channelIndex = channels.length - 1;

        }

        this.currentChannel = this.channels[channelIndex]

    }

    setChannel(channel) {


    }


}
