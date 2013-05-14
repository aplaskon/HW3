function createKitten(kittenName, lastWords){
    return {
        name: kittenName,
        die: function () {
            console.log(lastWords)
        }
    };
}

var bag = {
    kittens: {},
    put: function(beast){
        this.kittens[beast.name] = beast
    },
    getKitten: function (name){
       return this.kittens[name];
    },
    sink: function (){
        for (var item in this.kittens){
            this.kittens[item].die()
        }
    }
};