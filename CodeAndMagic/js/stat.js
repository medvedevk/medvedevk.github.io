'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var ClOUD_X = 130;
var CLOUD_Y = 250;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 20;
var barHeight = CLOUD_HEIGHT - GAP - TEXT_HEIGHT;



var renderCloud = function (ctx, x, y, color) {
   ctx.fillStyle = color;
   ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT)
};

var getMaxTimes = function(arr) {
    var max = arr[0];
    for (var i=0; arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

};



window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, 110, 20, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, 100, 10, '#fff' );

        ctx.fillStyle = '#000';

         for(var i = 0; i < players.length; i++) {
        ctx.fillText(players[i], ClOUD_X + 100 * i, CLOUD_Y + GAP);
    }
    ctx.fillRect(150, 60, 20, 150);
         ctx.fillRect(230, 60, 20, 150);


         //    x, y, width, height

};