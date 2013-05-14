function createKitten(kittenName, lastWords){
    return {
        name: kittenName,
        die: function () {
            console.log(lastWords)
        }
    };
}

var bag = {
    paradise: {},
    put: function(beast){this.paradise.push(beast)},
    getKitten: function (kittenName) {
        var volume = this.paradise.length;
        for(var i = 0; i < volume; i++){
            if(this.paradise[i].name == kittenName){
                return this.paradise[i];
            }
            return null;
        }
    },
    sink: function () {
        var volume = this.paradise.length;
        for(var i = 0; i < volume; i++){this.paradise[i].die()}
    }
}