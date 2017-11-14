module.exports = class Storage {
    constructor(){
        this.items = {};
    }

    set(id, data){
        this.items[id] = data;
    }

    get(id){
        return this.items[id];
    }

    getAll(){
        return this.items;
    }

    remove(id){

        this.items = this.items.filter((device) => {

            return device.id !== id;
        });
    }

    clear(){
        this.items = {};
    }
};