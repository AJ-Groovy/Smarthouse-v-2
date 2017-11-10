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

        return this.type + '_' + Math.random().toString(36).substr(2, 9);
    }

}
