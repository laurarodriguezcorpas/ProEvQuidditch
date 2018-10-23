ProEvolutionQuidditch.menuState = function(game) {

}
var tecla_s;
var tecla_P;

ProEvolutionQuidditch.menuState.prototype = {

    preload: function() {

    },

    create: function() {
        var background = this.add.image(0, 0, 'background');
        var harry = this.add.image(760, 150, 'harry');
        harry.scale.setTo(-1,1);
        var draco = this.add.image(50, 150, 'draco');
        var snitch = this.add.image(340, 180, 'snitch');

        var title = this.add.image(30, 20, 'title');
        title.scale.setTo(0.5, 0.5);
        var start = this.add.image(150, 480, 'start');
        var press2 =  this.add.image(30, 350, 'press2');
        var player1 =  this.add.image(300, 400, 'player1');

        this.tecla_s = game.input.keyboard.addKey(Phaser.KeyCode.S);
        this.tecla_P = game.input.keyboard.addKey(Phaser.KeyCode.TWO);
        
    },

    update: function() {
        if (this.tecla_s.isDown){
            game.state.start('introState');
        }

        if (this.tecla_s.isDown){
            //Cambiar los assets
        }
    }
}