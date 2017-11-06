module.exports = class Device {

    constructor(settings = {}) {

        this.name = settings.name || 'Name is not set';
        this.isEnabled = false;
        this.id = this._generateUniqueID();
    };

    // TODO: Create logic for id
    _generateUniqueID() {

        return '123';
    }

    turnOn() {

        this.isEnabled = true;
    }

    turnOff() {

        this.isEnabled = false;

    }

}
