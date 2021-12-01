// set time from the first day to now
function timeElapse(date) {
    var current = Date(); //get current time
    var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds = seconds % (3600 * 24);
    var hours = Math.floor(seconds / 3600);
    if (hours < 10) {
        hours = "0" + hours;
    }
    seconds = seconds % 3600;
    var minutes = Math.floor(seconds / 60);
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    seconds = seconds % 60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var showing = "<span class=\"digit\">" + days + "</span> Days <span class=\"digit\">" + hours + "</span> Hours <span class=\"digit\">" + minutes + "</span> Minutes <span class=\"digit\">" + seconds + "</span> Seconds";
    $("#clock").html(showing);
}

//set the beginning time
var begin = new Date();
begin.setFullYear(2015, 3, 24); //real date is 2015-4-24, but there is some bug, so I have to set 2015-3-24
begin.setHours(22);
begin.setMinutes(00);
begin.setSeconds(0);
begin.setMilliseconds(0);

if (!document.createElement('canvas').getContext) {
    var msg = document.createElement("div");
    msg.id = "errorMsg";
    msg.innerHTML = "Sorry,please don't use IE browser or 360Safety browser QAQ<br/>I recommend you to use Chrome/Firefox/Safari";
    document.body.appendChild(msg);
    document.execCommand("stop");
} else {
    timeElapse(begin);
    setInterval(function() {
        timeElapse(begin);
    }, 500);
}// heart animation
var r = 20,
    i, time = 20,
    num = 360;
var radian, radianDecrement, intervalId, gap;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var startRadian = Math.PI;
var leftShift = (document.documentElement.clientWidth - 700) / 2;

function startAnimation() {
    ctx.strokeStyle = "#FFCC99";
    ctx.lineWidth = 6;
    radian = startRadian;
    radianDecrement = Math.PI / num * 2;
    ctx.moveTo(getX(radian), getY(radian));
    i = 0;
    num = 360;
    intervalId = setInterval("paintHeart()", time)
}

function paintHeart() {
    radian += radianDecrement;
    ctx.lineTo(getX(radian), getY(radian));
    i++;
    ctx.stroke();
    if (i >= num) {
        clearInterval(intervalId);
        i = 0;
        intervalId = setInterval("fillHeart()", 50)
        drawText();
    }
}

function fillHeart() {
    ctx.fillStyle = "#FFCC99";
    ctx.fill();
    i++;
    if (i >= 40) {
        clearInterval(intervalId); //
    }
}

function drawText() {
    $("#time").fadeIn(500, function() {
        $("#pika").fadeIn(1000);
    });
}

function isAngle(a) {
    if (Math.abs(a - Math.PI) < gap || Math.abs(a - Math.PI * 2) < gap || Math.abs(a - Math.PI * 3) < gap) {
        return true;
    } else return false;
}

function drawHearts() {
    c = document.getElementById("myFinalCanvas");
    ctx = c.getContext("2d");
    leftShift = (document.documentElement.clientWidth - 700) / 2;
    radian = startRadian;
    num = 360;
    i = 0;
    radianDecrement = Math.PI / num * 2;
    time = 30;
    gap = 19 * radianDecrement;
    intervalId = setInterval("paintHearts()", time)
}

function paintHearts() {
    radian += radianDecrement;
    var X = getX(radian) - 17;
    var Y = getY(radian) - 24;
    $("#myCanvas").css("left", leftShift + X + "px");
    $("#myCanvas").css("top", Y + "px");
    i++;
    var a = 15;
    if (isAngle(radian)) a = 19;
    else a = 5;
    if (i % a == 0) ctx.drawImage(document.getElementById("myCanvas"), X, Y, 35, 35);
    if (i >= num) clearInterval(intervalId);
}

function getX(t) {
    return 350 + r * (16 * Math.pow(Math.sin(t), 3))
}

function getY(t) {
    return 300 - r * (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t))
}(function(a) {
    a.fn.typewriter = function(g) {
        this.each(function() {
            var d = a(this),
                c = d.html(),
                b = 0;
            d.html("");
            var e = setInterval(function() {
                var f = c.substr(b, 1);
                if (f == "<") {
                    b = c.indexOf(">", b) + 1;
                } else b++;
                d.html(c.substring(0, b) + (b & 1 ? "_" : ""));
                if (b >= c.length) {
                    clearInterval(e);
                    $("#myCanvas").fadeTo(3000, 1, drawHearts)
                }
            }, g)
        });
        return this;
    }
})(jQuery);