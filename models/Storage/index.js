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

    clear(){
        this.items = {};
    }
};