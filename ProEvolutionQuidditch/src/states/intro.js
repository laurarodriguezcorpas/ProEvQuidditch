ProEvolutionQuidditch.introState = function(game) {

}

var tecla_space;

ProEvolutionQuidditch.introState.prototype = {

    preload: function() {
        
    },

    create: function() {
        var background2 = this.add.image(0, 0, 'background2');
        var referee = this.add.image(260, 10, 'referee');
        var cleangame = this.add.image(30, 400, 'cleangame');
        cleangame.scale.setTo(0.5, 0.5);

        this.tecla_space = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    },

    update: function() {
        if (this.tecla_space.isDown){
            game.state.start('levelState');
        }
    }
}