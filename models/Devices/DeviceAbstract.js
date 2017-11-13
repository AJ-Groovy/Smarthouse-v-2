let counter = 0;

module.exports = class Device {

    constructor(settings = {}) {

        this.type = settings.type || 'Unknown device';
        this.id = this.__generateUniqueId();
        this.isEnabled = false;
    };

    turnOn() {

        this.isEnabled = true;
    }

    turnOff() {

        this.isEnabled = false;

    }

    __generateUniqueId(){
        // const date = new Date();
        // return this.type + '_' + date.getTime();
        return counter++;
    }

}
