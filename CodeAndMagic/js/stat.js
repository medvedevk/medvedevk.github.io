'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var ClOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 40;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - (FONT_GAP * 3);




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

var getMaxElement = function (arr) {
    var max = arr[0];
    for (var i = 1; i<arr.length; i++) {
        if(arr[i] > max ) {
            max = arr[i];
        }
    }
    return max;
};

window.renderStatistics = function(ctx, players, times) {
    renderCloud(ctx, ClOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, ClOUD_X, CLOUD_Y, '#fff' );

        ctx.fillStyle = '#000';

        var maxTimes = getMaxElement(times);
         for(var i = 0; i < players.length; i++) {
         ctx.fillText(players[i], ClOUD_X + (CLOUD_WIDTH / players.length) * i + FONT_GAP, CLOUD_HEIGHT  - GAP);
         ctx.fillText( Math.round( times[i] ), ClOUD_X + (CLOUD_WIDTH / players.length) * i + FONT_GAP, (CLOUD_HEIGHT  - FONT_GAP - GAP - ((barHeight * times[i]) / maxTimes)));

    }
    for (var i = 0; i < players.length; i++ ) {
             if(players[i] == 'Вы') {
                 ctx.fillStyle = 'rgba(255, 0, 0, 1)';
             } else {
                 var rnd = 'rgba(0, 125, 234,' + (Math.random() * (1 - 0.1) + 0.1) + ')' ;
                 ctx.fillStyle = rnd;
             }
        ctx.fillRect(ClOUD_X + (CLOUD_WIDTH / players.length) * i + FONT_GAP, CLOUD_HEIGHT  - FONT_GAP, BAR_WIDTH, -((barHeight * times[i]) / maxTimes));


    }



         //    x, y, width, height

};