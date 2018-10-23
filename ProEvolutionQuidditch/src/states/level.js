ProEvolutionQuidditch.levelState = function(game) {

}

var harry;
var snitch;
var gameOver;

ProEvolutionQuidditch.levelState.prototype = {

    preload: function() {
        
    },

    create: function() {
        gameOver=false;

        var stadium = this.add.image(0, 0, 'stadium1');
        var griffindor = this.add.image(10, 10, 'griffindor');
        griffindor.scale.setTo(0.5, 0.5);
        snitch = this.add.image(500, 500, 'snitch');
        snitch.scale.setTo(0.6, 0.6);
        harry = this.add.image(10, 500, 'harry');
        harry.scale.setTo(0.6, 0.6);
    
    },

    update: function() {
        if (gameOver){
            game.state.start('endingState');
        }
    }
}