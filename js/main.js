(function() {
    var a = "undefined" !== typeof window && "undefined" !== typeof window.document ? window.document : {},
        d = "undefined" !== typeof module && module.exports,
        b = "undefined" !== typeof Element && "ALLOW_KEYBOARD_INPUT" in Element,
        e = function() {
            for (var f, b = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "),
                    "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")
                ], c = 0, e = b.length, d = {}; c < e; c++)
                if ((f = b[c]) && f[1] in a) {
                    for (c = 0; c < f.length; c++) d[b[0][c]] =
                        f[c];
                    return d
                }
            return !1
        }(),
        k = {
            change: e.fullscreenchange,
            error: e.fullscreenerror
        },
        g = {
            request: function(f) {
                var d = e.requestFullscreen;
                f = f || a.documentElement;
                if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) f[d]();
                else f[d](b && Element.ALLOW_KEYBOARD_INPUT)
            },
            exit: function() {
                a[e.exitFullscreen]()
            },
            toggle: function(a) {
                this.isFullscreen ? this.exit() : this.request(a)
            },
            onchange: function(a) {
                this.on("change", a)
            },
            onerror: function(a) {
                this.on("error", a)
            },
            on: function(d, b) {
                var c = k[d];
                c && a.addEventListener(c, b, !1)
            },
            off: function(d,
                b) {
                var c = k[d];
                c && a.removeEventListener(c, b, !1)
            },
            raw: e
        };
    e ? (Object.defineProperties(g, {
        isFullscreen: {
            get: function() {
                return !!a[e.fullscreenElement]
            }
        },
        element: {
            enumerable: !0,
            get: function() {
                return a[e.fullscreenElement]
            }
        },
        enabled: {
            enumerable: !0,
            get: function() {
                return !!a[e.fullscreenEnabled]
            }
        }
    }), d ? module.exports = g : window.screenfull = g) : d ? module.exports = !1 : window.screenfull = !1
})();
var s_iOffsetX, s_iOffsetY;
(function(a) {
    (jQuery.browser = jQuery.browser || {}).mobile = /android|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(ad|hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|tablet|treo|up\.(browser|link)|vodafone|wap|webos|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a.substr(0,
        4))
})(navigator.userAgent || navigator.vendor || window.opera);
$(window).resize(function() {
    sizeHandler()
});

function trace(a) {
    console.log(a)
}

function isChrome() {
    return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
}

function isIOS() {
    var a = "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";");
    for (-1 !== navigator.userAgent.toLowerCase().indexOf("iphone") && (s_bIsIphone = !0); a.length;)
        if (navigator.platform === a.pop()) return !0;
    return s_bIsIphone = !1
}
window.addEventListener("orientationchange", onOrientationChange);

function onOrientationChange() {
    window.matchMedia("(orientation: portrait)").matches && sizeHandler();
    window.matchMedia("(orientation: landscape)").matches && sizeHandler()
}

function getSize(a) {
    var d = a.toLowerCase(),
        b = window.document,
        e = b.documentElement;
    if (void 0 === window["inner" + a]) a = e["client" + a];
    else if (window["inner" + a] != e["client" + a]) {
        var k = b.createElement("body");
        k.id = "vpw-test-b";
        k.style.cssText = "overflow:scroll";
        var g = b.createElement("div");
        g.id = "vpw-test-d";
        g.style.cssText = "position:absolute;top:-1000px";
        g.innerHTML = "<style>@media(" + d + ":" + e["client" + a] + "px){body#vpw-test-b div#vpw-test-d{" + d + ":7px!important}}</style>";
        k.appendChild(g);
        e.insertBefore(k, b.head);
        a = 7 == g["offset" + a] ? e["client" + a] : window["inner" + a];
        e.removeChild(k)
    } else a = window["inner" + a];
    return a
}

function getIOSWindowHeight() {
    return document.documentElement.clientWidth / window.innerWidth * window.innerHeight
}

function getHeightOfIOSToolbars() {
    var a = (0 === window.orientation ? screen.height : screen.width) - getIOSWindowHeight();
    return 1 < a ? a : 0
}

function sizeHandler() {
    window.scrollTo(0, 1);
    if ($("#canvas")) {
        var a = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? getIOSWindowHeight() : getSize("Height");
        var d = getSize("Width");
        _checkOrientation(d, a);
        var b = Math.min(a / CANVAS_HEIGHT, d / CANVAS_WIDTH),
            e = CANVAS_WIDTH * b;
        b *= CANVAS_HEIGHT;
        if (b < a) {
            var k = a - b;
            b += k;
            e += CANVAS_WIDTH / CANVAS_HEIGHT * k
        } else e < d && (k = d - e, e += k, b += CANVAS_HEIGHT / CANVAS_WIDTH * k);
        k = a / 2 - b / 2;
        var g = d / 2 - e / 2,
            f = CANVAS_WIDTH / e;
        if (g * f < -EDGEBOARD_X || k * f < -EDGEBOARD_Y) b = Math.min(a / (CANVAS_HEIGHT - 2 *
            EDGEBOARD_Y), d / (CANVAS_WIDTH - 2 * EDGEBOARD_X)), e = CANVAS_WIDTH * b, b *= CANVAS_HEIGHT, k = (a - b) / 2, g = (d - e) / 2, f = CANVAS_WIDTH / e;
        s_iOffsetX = -1 * g * f;
        s_iOffsetY = -1 * k * f;
        0 <= k && (s_iOffsetY = 0);
        0 <= g && (s_iOffsetX = 0);
        null !== s_oInterface && s_oInterface.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        null !== s_oMenu && s_oMenu.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        s_bIsIphone ? (canvas = document.getElementById("canvas"), s_oStage.canvas.width = 2 * e, s_oStage.canvas.height = 2 * b, canvas.style.width = e + "px", canvas.style.height = b + "px", s_oStage.scaleX =
            s_oStage.scaleY = 2 * Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT)) : s_bMobile || isChrome() ? ($("#canvas").css("width", e + "px"), $("#canvas").css("height", b + "px")) : (s_oStage.canvas.width = e, s_oStage.canvas.height = b, s_iScaleFactor = Math.min(e / CANVAS_WIDTH, b / CANVAS_HEIGHT), s_oStage.scaleX = s_oStage.scaleY = s_iScaleFactor);
        0 > k ? $("#canvas").css("top", k + "px") : $("#canvas").css("top", "0px");
        $("#canvas").css("left", g + "px");
        fullscreenHandler()
    }
}

function _checkOrientation(a, d) {
    s_bMobile && ENABLE_CHECK_ORIENTATION && (a > d ? "landscape" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"), s_oMain.stopUpdate()) : "portrait" === $(".orientation-msg-container").attr("data-orientation") ? ($(".orientation-msg-container").css("display", "none"), s_oMain.startUpdate()) : ($(".orientation-msg-container").css("display", "block"),
        s_oMain.stopUpdate()))
}

function createBitmap(a, d, b) {
    var e = new createjs.Bitmap(a),
        k = new createjs.Shape;
    d && b ? k.graphics.beginFill("#fff").drawRect(0, 0, d, b) : k.graphics.beginFill("#ff0").drawRect(0, 0, a.width, a.height);
    e.hitArea = k;
    return e
}

function createSprite(a, d, b, e, k, g) {
    a = null !== d ? new createjs.Sprite(a, d) : new createjs.Sprite(a);
    d = new createjs.Shape;
    d.graphics.beginFill("#000000").drawRect(-b, -e, k, g);
    a.hitArea = d;
    return a
}

function randomFloatBetween(a, d, b) {
    "undefined" === typeof b && (b = 2);
    return parseFloat(Math.min(a + Math.random() * (d - a), d).toFixed(b))
}

function shuffle(a) {
    for (var d = a.length, b, e; 0 !== d;) e = Math.floor(Math.random() * d), --d, b = a[d], a[d] = a[e], a[e] = b;
    return a
}

function formatTime(a) {
    a /= 1E3;
    var d = Math.floor(a / 60);
    a = Math.floor(a - 60 * d);
    var b = "";
    b = 10 > d ? b + ("0" + d + ":") : b + (d + ":");
    return 10 > a ? b + ("0" + a) : b + a
}
Array.prototype.sortOn = function() {
    var a = this.slice();
    if (!arguments.length) return a.sort();
    var d = Array.prototype.slice.call(arguments);
    return a.sort(function(a, e) {
        for (var b = d.slice(), g = b.shift(); a[g] == e[g] && b.length;) g = b.shift();
        return a[g] == e[g] ? 0 : a[g] > e[g] ? 1 : -1
    })
};

function roundDecimal(a, d) {
    var b = Math.pow(10, d);
    return Math.round(b * a) / b
}

function tweenVectors(a, d, b, e) {
    e.set(a.getX() + b * (d.getX() - a.getX()), a.getY() + b * (d.getY() - a.getY()));
    return e
}

function NoClickDelay(a) {
    this.element = a;
    window.Touch && this.element.addEventListener("touchstart", this, !1)
}
NoClickDelay.prototype = {
    handleEvent: function(a) {
        switch (a.type) {
            case "touchstart":
                this.onTouchStart(a);
                break;
            case "touchmove":
                this.onTouchMove(a);
                break;
            case "touchend":
                this.onTouchEnd(a)
        }
    },
    onTouchStart: function(a) {
        a.preventDefault();
        this.moved = !1;
        this.element.addEventListener("touchmove", this, !1);
        this.element.addEventListener("touchend", this, !1)
    },
    onTouchMove: function(a) {
        this.moved = !0
    },
    onTouchEnd: function(a) {
        this.element.removeEventListener("touchmove", this, !1);
        this.element.removeEventListener("touchend",
            this, !1);
        if (!this.moved) {
            a = document.elementFromPoint(a.changedTouches[0].clientX, a.changedTouches[0].clientY);
            3 === a.nodeType && (a = a.parentNode);
            var d = document.createEvent("MouseEvents");
            d.initEvent("click", !0, !0);
            a.dispatchEvent(d)
        }
    }
};

function playSound(a, d, b) {
    return !1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile ? (s_aSounds[a].play(), s_aSounds[a].volume(d), s_aSounds[a].loop(b), s_aSounds[a]) : null
}

function stopSound(a) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].stop()
}

function setVolume(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].volume(d)
}

function setMute(a, d) {
    !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || s_aSounds[a].mute(d)
}

function ctlArcadeResume() {
    null !== s_oMain && s_oMain.startUpdate()
}

function ctlArcadePause() {
    null !== s_oMain && s_oMain.stopUpdate()
}

function getParamValue(a) {
    for (var d = window.location.search.substring(1).split("&"), b = 0; b < d.length; b++) {
        var e = d[b].split("=");
        if (e[0] == a) return e[1]
    }
}

function fullscreenHandler() {
    ENABLE_FULLSCREEN && !1 !== screenfull.enabled && (s_bFullscreen = screen.height < window.innerHeight + 3 && screen.height > window.innerHeight - 3 ? !0 : !1, null !== s_oInterface && s_oInterface.resetFullscreenBut(), null !== s_oMenu && s_oMenu.resetFullscreenBut())
}
if (screenfull.enabled) screenfull.on("change", function() {
    s_bFullscreen = screenfull.isFullscreen;
    null !== s_oInterface && s_oInterface.resetFullscreenBut();
    null !== s_oMenu && s_oMenu.resetFullscreenBut()
});
window.GD_OPTIONS = {
    gameId: "09d7fcd594154dd9a97b3dbcb6a33999",
    onEvent: function(a) {
        switch (a.name) {
            case "SDK_GAME_START":
                s_oMain.startUpdate();
                break;
            case "SDK_GAME_PAUSE":
                s_oMain.stopUpdate()
        }
    }
};
(function(a, d, b) {
    var e = a.getElementsByTagName(d)[0];
    a.getElementById(b) || (a = a.createElement(d), a.id = b, a.src = "https://html5.api.gamedistribution.com/main.min.js", e.parentNode.insertBefore(a, e))
})(document, "script", "gamedistribution-jssdk");

function CSpriteLibrary() {
    var a, d, b, e, k, g;
    this.init = function(f, l, c) {
        b = d = 0;
        e = f;
        k = l;
        g = c;
        a = {}
    };
    this.addSprite = function(b, e) {
        a.hasOwnProperty(b) || (a[b] = {
            szPath: e,
            oSprite: new Image
        }, d++)
    };
    this.getSprite = function(b) {
        return a.hasOwnProperty(b) ? a[b].oSprite : null
    };
    this._onSpritesLoaded = function() {
        k.call(g)
    };
    this._onSpriteLoaded = function() {
        e.call(g);
        ++b === d && this._onSpritesLoaded()
    };
    this.loadSprites = function() {
        for (var b in a) a[b].oSprite.oSpriteLibrary = this, a[b].oSprite.onload = function() {
                this.oSpriteLibrary._onSpriteLoaded()
            },
            a[b].oSprite.src = a[b].szPath
    };
    this.getNumSprites = function() {
        return d
    }
}
var CANVAS_WIDTH = 1024,
    CANVAS_HEIGHT = 768,
    DISABLE_SOUND_MOBILE = !1,
    EDGEBOARD_X = 0,
    EDGEBOARD_Y = 84,
    FONT_GAME = "impactregular",
    FONT_GAME2 = "Digital-7",
    STATE_LOADING = 0,
    STATE_MENU = 1,
    STATE_HELP = 1,
    STATE_GAME = 3,
    ON_MOUSE_DOWN = 0,
    ON_MOUSE_UP = 1,
    ON_MOUSE_OVER = 2,
    ON_MOUSE_OUT = 3,
    ON_DRAG_START = 4,
    ON_DRAG_END = 5,
    TOTAL_SCENES = 5,
    BALL_SIZE = 73,
    BALL_ROTATION_SPEED = 3,
    CAM_DISTANCE = 1,
    PLAYER_HEIGHT = 768,
    PLAYER_WIDTH = 408,
    CART_HEIGHT = 329,
    CART_WIDTH = 356,
    SHOTGUI_SIZE = 229,
    SHOTBALL_SIZE = 48,
    CART_DEPTH_INDEX, ERROR_MULT, TIME_AVAILABLE, NUM_SHOT_PER_SCENE =
    5,
    SELECTOR_SPEED, POINT_FOR_BALL, POINT_FOR_SPECIAL_BALL, ENABLE_FULLSCREEN, ENABLE_CHECK_ORIENTATION;
TEXT_PLAY = "PLAY";
TEXT_PLAYAGAIN = "PLAY AGAIN";
TEXT_POINT = "POINT";
TEXT_POINTS = "POINTS";
TEXT_TIME_LEFT = "TIME";
TEXT_SCORE = "POINTS";
TEXT_SHOTS = "SHOTS";
TEXT_HELP = "CLICK THE SCREEN OR PRESS SPACEBAR TO STOP THE BALL INDICATORS AND SHOT THE BALL";
TEXT_HELP_MOBILE = "CLICK THE SCREEN TO STOP THE BALL INDICATORS AND SHOT THE BALL";
TEXT_FINALSCORE = "FINAL SCORE";
TEXT_FINALSHOTS = "SHOTS MADE";
TEXT_FINALTIME = "TIME LEFT";
TEXT_FINALSUCCESSPERC = "SUCCESS RATE";
TEXT_CREDITS_DEVELOPED = "DEVELOPED BY";
TEXT_SHARE_IMAGE = "200x200.jpg";
TEXT_SHARE_TITLE = "Congratulations!";
TEXT_SHARE_MSG1 = "You collected <strong>";
TEXT_SHARE_MSG2 = " points</strong>!<br><br>Share your score with your friends!";
TEXT_SHARE_SHARE1 = "My score is ";
TEXT_SHARE_SHARE2 = " points! Can you do better?";

function CPreloader() {
    var a, d, b, e, k, g;
    this._init = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("bg_preloader", "./sprites/bg_preloader.jpg");
        s_oSpriteLibrary.addSprite("progress_bar", "./sprites/progress_bar.png");
        s_oSpriteLibrary.addSprite("preloader_anim", "./sprites/preloader_anim.png");
        s_oSpriteLibrary.loadSprites();
        g = new createjs.Container;
        s_oStage.addChild(g)
    };
    this.unload = function() {
        g.removeAllChildren()
    };
    this._onImagesLoaded = function() {};
    this._onAllImagesLoaded = function() {
        this.attachSprites();
        s_oMain.preloaderReady()
    };
    this.attachSprites = function() {
        var f = createBitmap(s_oSpriteLibrary.getSprite("bg_preloader"));
        g.addChild(f);
        b = createBitmap(s_oSpriteLibrary.getSprite("progress_bar"));
        b.x = 501;
        b.y = CANVAS_HEIGHT - 130;
        g.addChild(b);
        a = 706;
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(501, CANVAS_HEIGHT - 130, 1, 30);
        g.addChild(k);
        b.mask = k;
        d = new createjs.Text("0%", "30px " + FONT_GAME, "#fff");
        d.x = 560;
        d.y = CANVAS_HEIGHT - 135;
        d.textAlign = "center";
        d.textBaseline = "middle";
        g.addChild(d);
        f = {
            images: [s_oSpriteLibrary.getSprite("preloader_anim")],
            frames: {
                width: 100,
                height: 100
            },
            animations: {
                anim: [0, 21]
            }
        };
        f = new createjs.SpriteSheet(f);
        e = createSprite(f, "anim", 0, 0, 100, 100);
        e.x = 440;
        e.y = CANVAS_HEIGHT - 190;
        g.addChild(e)
    };
    this.refreshLoader = function(b) {
        d.text = b + "%";
        b = Math.floor(b * a / 100);
        k.graphics.clear();
        k.graphics.beginFill("rgba(255,0,0,0.01)").drawRect(501, CANVAS_HEIGHT - 130, b, 30)
    };
    this._init()
}

function CMain(a) {
    ERROR_MULT = a.errorMultiplier;
    TIME_AVAILABLE = a.timeAvailable;
    SELECTOR_SPEED = a.selectorSpeed;
    POINT_FOR_BALL = a.point_per_ball;
    POINT_FOR_SPECIAL_BALL = a.point_per_special_ball;
    var d = !1,
        b = 0,
        e = 0,
        k = STATE_LOADING,
        g, f;
    this.initContainer = function() {
        s_oStage = new createjs.Stage("canvas");
        s_oStage.preventSelection = !1;
        createjs.Touch.enable(s_oStage);
        s_bMobile = jQuery.browser.mobile;
        !1 === s_bMobile && s_oStage.enableMouseOver(20);
        s_iPrevTime = (new Date).getTime();
        createjs.Ticker.setFPS(30);
        createjs.Ticker.addEventListener("tick",
            this._update);
        navigator.userAgent.match(/Windows Phone/i) && (DISABLE_SOUND_MOBILE = !0);
        s_oSpriteLibrary = new CSpriteLibrary;
        g = new CPreloader;
        d = !0
    };
    this.soundLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / e * 100));
        b === e && s_oMain.removePreloader()
    };
    this._initSounds = function() {
        var a = [];
        a.push({
            path: "./sounds/",
            filename: "us_bounce",
            loop: !1,
            volume: 1,
            ingamename: "us_bounce"
        });
        a.push({
            path: "./sounds/",
            filename: "click",
            loop: !1,
            volume: 1,
            ingamename: "click"
        });
        a.push({
            path: "./sounds/",
            filename: "us_buzzer",
            loop: !1,
            volume: 1,
            ingamename: "us_buzzer"
        });
        a.push({
            path: "./sounds/",
            filename: "us_cheer",
            loop: !1,
            volume: 1,
            ingamename: "us_cheer"
        });
        a.push({
            path: "./sounds/",
            filename: "us_crowd",
            loop: !0,
            volume: 1,
            ingamename: "us_crowd"
        });
        a.push({
            path: "./sounds/",
            filename: "soundtrack",
            loop: !0,
            volume: 1,
            ingamename: "soundtrack"
        });
        e += a.length;
        s_aSounds = [];
        for (var c = 0; c < a.length; c++) s_aSounds[a[c].ingamename] = new Howl({
            src: [a[c].path + a[c].filename + ".mp3", a[c].path + a[c].filename + ".ogg"],
            autoplay: !1,
            preload: !0,
            loop: a[c].loop,
            volume: a[c].volume,
            onload: s_oMain.soundLoaded
        })
    };
    this._loadImages = function() {
        s_oSpriteLibrary.init(this._onImagesLoaded, this._onAllImagesLoaded, this);
        s_oSpriteLibrary.addSprite("audio_icon", "./sprites/audio_icon.png");
        s_oSpriteLibrary.addSprite("ball_1", "./sprites/ball_1.png");
        s_oSpriteLibrary.addSprite("ball_2", "./sprites/ball_2.png");
        s_oSpriteLibrary.addSprite("bg_help", "./sprites/bg_help.png");
        s_oSpriteLibrary.addSprite("bg_menu", "./sprites/bg_menu.jpg");
        s_oSpriteLibrary.addSprite("but_exit", "./sprites/but_exit.png");
        s_oSpriteLibrary.addSprite("but_play", "./sprites/but_play.png");
        s_oSpriteLibrary.addSprite("cart_back", "./sprites/cart_back.png");
        s_oSpriteLibrary.addSprite("cart_front", "./sprites/cart_front.png");
        s_oSpriteLibrary.addSprite("field_camera_1", "./sprites/field_camera_1.jpg");
        s_oSpriteLibrary.addSprite("field_camera_2", "./sprites/field_camera_2.jpg");
        s_oSpriteLibrary.addSprite("field_camera_3", "./sprites/field_camera_3.jpg");
        s_oSpriteLibrary.addSprite("msg_box", "./sprites/msg_box.png");
        s_oSpriteLibrary.addSprite("shot_ball",
            "./sprites/shot_ball.png");
        s_oSpriteLibrary.addSprite("shot_gui", "./sprites/shot_gui.png");
        s_oSpriteLibrary.addSprite("time_panel", "./sprites/time_panel.png");
        s_oSpriteLibrary.addSprite("shadow", "./sprites/shadow.png");
        s_oSpriteLibrary.addSprite("logo_credits", "./sprites/logo_credits.png");
        s_oSpriteLibrary.addSprite("but_credits", "./sprites/but_credits.png");
        s_oSpriteLibrary.addSprite("but_fullscreen", "./sprites/but_fullscreen.png");
        for (var a = 0; 131 >= a; a++) {
            var c = 9 >= a ? "00" + a : 99 >= a ? "0" + a : a;
            var b = "pl" +
                a;
            c = "./sprites/player_frames/new_player_0000" + c + ".png";
            s_oSpriteLibrary.addSprite(b, c)
        }
        for (a = 1; 36 >= a; a++) c = 9 >= a ? "00" + a : 99 >= a ? "0" + a : a, b = "bsk" + a, c = "./sprites/basket/basket_0" + c + ".png", s_oSpriteLibrary.addSprite(b, c);
        e += s_oSpriteLibrary.getNumSprites();
        s_oSpriteLibrary.loadSprites()
    };
    this._onImagesLoaded = function() {
        b++;
        g.refreshLoader(Math.floor(b / e * 100));
        b === e && this.removePreloader()
    };
    this._onAllImagesLoaded = function() {};
    this.preloaderReady = function() {
        this._loadImages();
        !1 !== DISABLE_SOUND_MOBILE && !1 !==
            s_bMobile || this._initSounds()
    };
    this.removePreloader = function() {
        g.unload();
        isIOS() || (s_oSoundTrack = playSound("soundtrack", 1, !0));
        this.gotoMenu()
    };
    this.gotoMenu = function() {
        new CMenu;
        k = STATE_MENU
    };
    this.gotoGame = function() {
        f = new CGame;
        k = STATE_GAME
    };
    this.gotoHelp = function() {
        _oHelp = new CHelp;
        k = STATE_HELP
    };
    this.stopUpdate = function() {
        d = !1;
        createjs.Ticker.paused = !0;
        $("#block_game").css("display", "block");
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || Howler.mute(!0)
    };
    this.startUpdate = function() {
        s_iPrevTime = (new Date).getTime();
        d = !0;
        createjs.Ticker.paused = !1;
        $("#block_game").css("display", "none");
        (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) && s_bAudioActive && Howler.mute(!1)
    };
    this._update = function(a) {
        if (d) {
            var b = (new Date).getTime();
            s_iTimeElaps = b - s_iPrevTime;
            s_iCntTime += s_iTimeElaps;
            s_iCntFps++;
            s_iPrevTime = b;
            1E3 <= s_iCntTime && (s_iCurFps = s_iCntFps, s_iCntTime -= 1E3, s_iCntFps = 0);
            k === STATE_GAME && f.update(b);
            s_oStage.update(a)
        }
    };
    s_oMain = this;
    ENABLE_FULLSCREEN = a.fullscreen;
    ENABLE_CHECK_ORIENTATION = a.check_orientation;
    this.initContainer()
}
var s_bMobile, s_bAudioActive = !0,
    s_iCntTime = 0,
    s_iTimeElaps = 0,
    s_iPrevTime = 0,
    s_iCntFps = 0,
    s_iCurFps = 0,
    s_oDrawLayer, s_oStage, s_oMain, s_oSpriteLibrary, s_oGameSettings, s_oSoundTrack = null,
    s_bFullscreen = !1,
    s_aSounds;

function CTextButton(a, d, b, e, k, g, f, l) {
    var c, h, q, r, u, m, n, p, t, y;
    this._init = function(a, b, d, e, f, g, k, l) {
        c = !1;
        r = [];
        u = [];
        y = l;
        n = createBitmap(d);
        h = d.width;
        q = d.height;
        l = Math.ceil(k / 20);
        p = new createjs.Text(e, k + "px " + f, "#000000");
        var z = p.getBounds();
        p.textAlign = "center";
        p.textBaseline = "alphabetic";
        p.x = d.width / 2 + l;
        p.y = Math.floor(d.height / 2) + z.height / 2 - 5 + l;
        t = new createjs.Text(e, k + "px " + f, g);
        t.textAlign = "center";
        t.textBaseline = "alphabetic";
        t.x = d.width / 2;
        t.y = Math.floor(d.height / 2) + z.height / 2 - 5;
        m = new createjs.Container;
        m.x = a;
        m.y = b;
        m.regX = d.width / 2;
        m.regY = d.height / 2;
        s_bMobile || (m.cursor = "pointer");
        m.addChild(n, p, t);
        y.addChild(m);
        this._initListener()
    };
    this.unload = function() {
        m.off("mousedown");
        m.off("pressup");
        y.removeChild(m)
    };
    this.setVisible = function(a) {
        m.visible = a
    };
    this.enable = function() {
        c = !1;
        n.filters = [];
        n.cache(0, 0, h, q)
    };
    this.disable = function() {
        c = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100);
        n.filters = [new createjs.ColorMatrixFilter(a)];
        n.cache(0, 0, h, q)
    };
    this._initListener = function() {
        oParent = this;
        m.on("mousedown", this.buttonDown);
        m.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        r[a] = b;
        u[a] = c
    };
    this.buttonRelease = function() {
        c || (playSound("click", 1, !1), m.scaleX = 1, m.scaleY = 1, r[ON_MOUSE_UP] && r[ON_MOUSE_UP].call(u[ON_MOUSE_UP]))
    };
    this.buttonDown = function() {
        c || (m.scaleX = .9, m.scaleY = .9, r[ON_MOUSE_DOWN] && r[ON_MOUSE_DOWN].call(u[ON_MOUSE_DOWN]))
    };
    this.setPosition = function(a, b) {
        m.x = a;
        m.y = b
    };
    this.changeText = function(a) {
        t.text = a;
        p.text = a
    };
    this.setX = function(a) {
        m.x = a
    };
    this.setY =
        function(a) {
            m.y = a
        };
    this.getButtonImage = function() {
        return m
    };
    this.getX = function() {
        return m.x
    };
    this.getY = function() {
        return m.y
    };
    this._init(a, d, b, e, k, g, f, l);
    return this
}

function CGfxButton(a, d, b) {
    var e, k, g, f, l, c = [],
        h;
    this._init = function(a, b, c) {
        e = !1;
        f = [];
        l = [];
        k = c.width;
        g = c.height;
        h = createBitmap(c);
        h.x = a;
        h.y = b;
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        s_bMobile || (h.cursor = "pointer");
        s_oStage.addChild(h);
        this._initListener()
    };
    this.unload = function() {
        h.off("mousedown", this.buttonDown);
        h.off("pressup", this.buttonRelease);
        s_oStage.removeChild(h)
    };
    this.setVisible = function(a) {
        h.visible = a
    };
    this._initListener = function() {
        h.on("mousedown", this.buttonDown);
        h.on("pressup", this.buttonRelease)
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        l[a] = c
    };
    this.addEventListenerWithParams = function(a, b, d, e) {
        f[a] = b;
        l[a] = d;
        c = e
    };
    this.buttonRelease = function() {
        e || (playSound("click", 1, !1), h.scaleX = 1, h.scaleY = 1, f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(l[ON_MOUSE_UP], c))
    };
    this.buttonDown = function() {
        e || (h.scaleX = .9, h.scaleY = .9, f[ON_MOUSE_DOWN] && f[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN], c))
    };
    this.setPosition = function(a, b) {
        h.x = a;
        h.y = b
    };
    this.setX = function(a) {
        h.x = a
    };
    this.setY = function(a) {
        h.y = a
    };
    this.enable = function() {
        e = !1;
        h.filters = [];
        h.cache(0, 0, k, g)
    };
    this.disable = function() {
        e = !0;
        var a = (new createjs.ColorMatrix).adjustSaturation(-100).adjustBrightness(40);
        h.filters = [new createjs.ColorMatrixFilter(a)];
        h.cache(0, 0, k, g)
    };
    this.getButtonImage = function() {
        return h
    };
    this.getX = function() {
        return h.x
    };
    this.getY = function() {
        return h.y
    };
    this._init(a, d, b);
    return this
}

function CToggle(a, d, b, e, k) {
    var g, f, l, c;
    this._init = function(a, b, d, e) {
        f = [];
        l = [];
        var k = new createjs.SpriteSheet({
            images: [d],
            frames: {
                width: d.width / 2,
                height: d.height,
                regX: d.width / 2 / 2,
                regY: d.height / 2
            },
            animations: {
                state_true: [0],
                state_false: [1]
            }
        });
        g = e;
        c = createSprite(k, "state_" + g, d.width / 2 / 2, d.height / 2, d.width / 2, d.height);
        c.x = a;
        c.y = b;
        c.stop();
        h.addChild(c);
        this._initListener()
    };
    this.unload = function() {
        c.off("mousedown", this.buttonDown);
        c.off("pressup", this.buttonRelease);
        s_bMobile || c.off("mouseover", this.buttonOver);
        h.removeChild(c)
    };
    this._initListener = function() {
        c.on("mousedown", this.buttonDown);
        c.on("pressup", this.buttonRelease);
        if (!s_bMobile) c.on("mouseover", this.buttonOver)
    };
    this.addEventListener = function(a, b, c) {
        f[a] = b;
        l[a] = c
    };
    this.setActive = function(a) {
        g = a;
        c.gotoAndStop("state_" + g)
    };
    this.buttonRelease = function() {
        c.scaleX = 1;
        c.scaleY = 1;
        playSound("click", 1, !1);
        g = !g;
        c.gotoAndStop("state_" + g);
        f[ON_MOUSE_UP] && f[ON_MOUSE_UP].call(l[ON_MOUSE_UP], g)
    };
    this.buttonDown = function() {
        c.scaleX = .9;
        c.scaleY = .9;
        f[ON_MOUSE_DOWN] &&
            f[ON_MOUSE_DOWN].call(l[ON_MOUSE_DOWN])
    };
    this.buttonOver = function(a) {
        s_bMobile || (a.target.cursor = "pointer")
    };
    this.setPosition = function(a, b) {
        c.x = a;
        c.y = b
    };
    var h = k;
    this._init(a, d, b, e)
}

function CMenu() {
    var a, d, b, e, k, g, f, l, c, h, q, r = null,
        u = null,
        m;
    this._init = function() {
        f = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        s_oStage.addChild(f);
        var n = s_oSpriteLibrary.getSprite("but_play");
        l = new CTextButton(CANVAS_WIDTH - 300, CANVAS_HEIGHT / 2 + 50, n, TEXT_PLAY, FONT_GAME, "#ffffff", 60, s_oStage);
        l.addEventListener(ON_MOUSE_UP, this._onButPlay, this, !1);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) n = s_oSpriteLibrary.getSprite("audio_icon"), k = CANVAS_WIDTH - n.width / 4 - 10, g = n.height / 2 + 10, c = new CToggle(k,
            g, n, s_bAudioActive, s_oStage), c.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        n = s_oSpriteLibrary.getSprite("but_credits");
        b = n.height / 2 + 10;
        e = n.height / 2 + 10;
        h = new CGfxButton(b, e, n, s_oStage);
        h.addEventListener(ON_MOUSE_UP, this._onCredits, this);
        n = window.document;
        var p = n.documentElement;
        r = p.requestFullscreen || p.mozRequestFullScreen || p.webkitRequestFullScreen || p.msRequestFullscreen;
        u = n.exitFullscreen || n.mozCancelFullScreen || n.webkitExitFullscreen || n.msExitFullscreen;
        !1 === ENABLE_FULLSCREEN && (r = !1);
        r && screenfull.enabled && (n = s_oSpriteLibrary.getSprite("but_fullscreen"), a = b + n.width / 2 + 10, d = e, q = new CToggle(a, d, n, s_bFullscreen, s_oStage), q.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        m = new createjs.Shape;
        m.graphics.beginFill("black").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        s_oStage.addChild(m);
        createjs.Tween.get(m).to({
            alpha: 0
        }, 1E3).call(function() {
            m.visible = !1
        });
        this.refreshButtonPos(s_iOffsetX, s_iOffsetY);
        setVolume("soundtrack", 1)
    };
    this.refreshButtonPos = function(f, l) {
        !1 !== DISABLE_SOUND_MOBILE &&
            !1 !== s_bMobile || c.setPosition(k - f, l + g);
        r && screenfull.enabled && q.setPosition(a + s_iOffsetX, d + s_iOffsetY);
        h.setPosition(b + f, l + e)
    };
    this.unload = function() {
        l.unload();
        l = null;
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) c.unload(), c = null;
        r && screenfull.enabled && q.unload();
        s_oStage.removeAllChildren();
        s_oMenu = null
    };
    this.resetFullscreenBut = function() {
        q.setActive(s_bFullscreen)
    };
    this._onCredits = function() {
        new CCreditsPanel
    };
    this._onButPlay = function() {
        gdsdk.showBanner();
        this.unload();
        isIOS() && null === s_oSoundTrack &&
            (s_oSoundTrack = playSound("soundtrack", 1, !0));
        $(s_oMain).trigger("start_session");
        s_oMain.gotoGame()
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? u.call(window.document) : r.call(window.document.documentElement);
        sizeHandler()
    };
    s_oMenu = this;
    this._init()
}
var s_oMenu = null;

function CHelpPanel() {
    var a, d, b, e;
    this._init = function() {
        d = new createBitmap(s_oSpriteLibrary.getSprite("bg_help"));
        a = new createjs.Text(s_bMobile ? TEXT_HELP_MOBILE : TEXT_HELP, "48px " + FONT_GAME, "#FFCC00");
        a.x = CANVAS_WIDTH / 2;
        a.y = 260;
        a.textAlign = "center";
        a.textBaseline = "alphabetic";
        a.lineWidth = 550;
        a.shadow = new createjs.Shadow("#000", 2, 2, 2);
        var k = new createjs.Text("1 " + TEXT_POINT, "28px " + FONT_GAME, "#FFCC00");
        k.x = 325;
        k.y = 520;
        k.textAlign = "center";
        k.textBaseline = "alphabetic";
        k.shadow = new createjs.Shadow("#000",
            2, 2, 2);
        var g = new createjs.Text("2 " + TEXT_POINTS, "28px " + FONT_GAME, "#FFCC00");
        g.x = 475;
        g.y = 520;
        g.textAlign = "center";
        g.textBaseline = "alphabetic";
        g.shadow = new createjs.Shadow("#000", 2, 2, 2);
        var f = s_oSpriteLibrary.getSprite("but_play");
        b = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT - 140, f, TEXT_PLAY, FONT_GAME, "#fff", 60, s_oStage);
        b.addEventListener(ON_MOUSE_UP, this._onExit, this);
        e = new createjs.Container;
        e.addChild(d, a, b.getButtonImage(), k, g);
        s_oStage.addChild(e)
    };
    this.unload = function() {
        b.unload();
        e.removeAllChildren()
    };
    this._onExit = function() {
        this.unload();
        s_oGame.exitFromHelp()
    };
    this._init()
}

function CGame() {
    var a = !1,
        d = !1,
        b = !1,
        e = !0,
        k = !1,
        g = !1,
        f, l, c, h = 0,
        q = 0,
        r = 0,
        u, m, n = [],
        p, t, y, B = null,
        z, A, v, x, C;
    this._init = function() {
        f = 0;
        l = 1;
        c = NUM_SHOT_PER_SCENE;
        m = TIME_AVAILABLE;
        p = new CANNON.World;
        p.gravity.set(0, 0, -400);
        p.broadphase = new CANNON.NaiveBroadphase;
        p.solver.iterations = 5;
        v = new CANNON.Material;
        x = new CANNON.Material;
        C = new CANNON.Material;
        var a = new CANNON.ContactMaterial(v, v, {
                friction: .2,
                restitution: .55
            }),
            b = new CANNON.ContactMaterial(x, v, {
                friction: .05,
                restitution: .35
            }),
            d = new CANNON.ContactMaterial(x,
                C, {
                    friction: .25,
                    restitution: .5
                });
        p.addContactMaterial(a);
        p.addContactMaterial(b);
        p.addContactMaterial(d);
        a = new CANNON.Plane;
        b = new CANNON.Body({
            mass: 0,
            material: v
        });
        b.addShape(a);
        p.add(b);
        A = new CSceneStatic(p, l, v, C);
        a = A.getCartCoords();
        z = new CPlayer(this, a);
        for (b = 0; b < c; b++) n.push(new CBall(p, v, v, l, b, a));
        t = new CInterface(this);
        y = new CHelpPanel;
        setVolume("soundtrack", 0);
        playSound("us_crowd", 1, !0);
        $(s_oMain).trigger("start_level", 1)
    };
    this.unload = function() {
        $(s_oMain).trigger("end_session");
        0 < h && $(s_oMain).trigger("share_event",
            h);
        stopSound("us_crowd");
        for (var a = p.bodies.length, b = 0; b < a; b++) p.remove(p.bodies[0]);
        p = null;
        createjs.Tween.removeAllTweens();
        s_oStage.removeAllEventListeners();
        s_oStage.removeAllChildren();
        t.unload();
        null !== B && B.unload();
        s_oMain.gotoMenu()
    };
    this.exitFromHelp = function() {
        y.unload();
        f = 1
    };
    this.getState = function() {
        return _oGameStates[void 0]
    };
    this.ballWaitToThrow = function() {
        0 < c && n[c - 1].waitToThrow()
    };
    this.update = function(w) {
        1 < f && (void 0 === u ? u = w : (m = Math.floor(TIME_AVAILABLE - (w - u)), 0 <= m ? (t.updateTime(m),
            A.updateTime(m)) : (playSound("us_buzzer", 1, !1), B = new CEndPanel(m, h, q, this), f = -1)));
        1 === f && (r++, z.idle1(), 30 < r && (f = 2));
        if (2 === f) {
            t.listenForClick();
            z.grab1();
            if (z.isBallGrabbed() && !b)
                for (b = !0, n[c - 1].grab(z.getPlCoords()), w = 0; w < c - 1; w++) n[w].slide();
            t.isVectorAquired().state && (f = 3)
        }
        3 === f && (a || (a = !0, n[c - 1].throwingBall(z.getPlCoords(), t.isVectorAquired().vector, n[c - 1]), n[c - 1].update()), z.throwing(l) && (f = 4, e = !0, g = k = a = !1));
        if (4 === f) {
            e && (b = e = !1, z.newBall(), A.newBall(), c--, q++, t.updateShots(q));
            n[c].update();
            w = A.updateBasket(n[c].getPosition());
            !0 === w ? (k = !0, h = 0 === n[c].getCartPosition() ? h + POINT_FOR_SPECIAL_BALL : h + POINT_FOR_BALL, t.updateScore(h), playSound("us_cheer", 1, !1)) : !1 === w && !1 === k && (g = !0);
            !0 === k ? (k = A.scored(), g = !1) : g && (g = A.rimCollision());
            n[c].touchGround();
            if (0 < c) {
                if (z.grab2(), z.isBallGrabbed() && !b)
                    for (b = !0, n[c - 1].grab(z.getPlCoords()), w = 0; w < c - 1; w++) n[w].slide()
            } else z.endTurn();
            n[c].touchedGround() && (d || (t.newBall(), d = !0), 0 < c ? (t.listenForClick(), t.isVectorAquired().state && (f = 3, d = !1)) : 0 === c && (d = !1, f = 5))
        }
        if (5 === f)
            if (l++, 5 >= l) {
                c = NUM_SHOT_PER_SCENE;
                z.endTurn();
                A.nextScene();
                z.nextScene(A.getCartCoords());
                for (w = 0; w < c; w++) n[w].unload(), n[w] = new CBall(p, v, v, l, w, A.getCartCoords());
                f = 1
            } else B = new CEndPanel(m, h, q, this), f = -1
    };
    s_oGame = this;
    this._init()
}
var s_oGame;

function CBall(a, d, b, e, k, g) {
    var f = [
            [-1.324419465111331, .07007920010441403, .1938814229049522, .1928501356834461, -.2649754991389736, -.29199768911624474, -.9738954395935614, -.9687151293457442, .00813866187260608, 1.8973661726282403, -.15703993365948804, -.1562046123872247, 172.14460555118495, -57.92280926049329, 268.64013255353115, 275.1899143092173],
            [-1.0311847252524577, -.17599844916970192, -.6427545415461143, -.6393356242752912, .8719967238119737, -.26330126009450605, -.7552979557156582, -.7512804014885001, .025392432048756682,
                1.8946950915444967, -.16466751447142178, -.16379162084052554, 74.75179565415395, -37.2124724898568, 323.023333753347, 329.2838423047125
            ],
            [-.04192064711782405, -.28804391554765474, -.9934914290013894, -.9882068844583713, 1.3500256223076117, -.017671886269370676, -.030155903522676906, -.02999549930503738, .006203995474932445, 1.8991816460801592, -.15096085318711913, -.15015786754513807, 6.84660099873786, -40.15800737796026, 335.8181997013088, 342.0106502533296],
            [1.0287322954933102, -.20296283656350578, -.6427545605150148, -.6393356431432929, .8752566449130996, .2404296293623392, .7552979421456383, .7512803879906613, -8.671184282911734E-4, 1.895038730402846, -.1646675026722602, -.16379160910412566, -75.22073485514608, -35.249324074836075, 323.0233348288672, 329.2838433745118],
            [1.3232711036898168, -.00901517234163781, .201487851298251, .20041610423131065, -.2666922478682122, .28881907281462693, .9738954354986644, .9687151252726287, .04684016896142928, 1.8991247445227672, -.14715365255419113, -.14637091803943836, -176.51195787275645, -53.18780012690175,
                267.37304986600344, 273.9295714431983
            ]
        ],
        l = !1,
        c = !1,
        h = !1,
        q = !1,
        r = 0,
        u = [0, new CANNON.Vec3(97, 150, 86), new CANNON.Vec3(178, 80, 86), new CANNON.Vec3(195, -26, 86), new CANNON.Vec3(130, -110, 86), new CANNON.Vec3(112, -150, 87)],
        m = [0, new CANNON.Vec3(97, 150, 78.5), new CANNON.Vec3(178, 80, 78.5), new CANNON.Vec3(195, -26, 78.5), new CANNON.Vec3(130, -110, 78.5), new CANNON.Vec3(112, -150, 79.5)],
        n = [0, new CANNON.Vec3(-1292.5, -5287.5, 6697.5), new CANNON.Vec3(-3995, -2702.5, 6697.5), new CANNON.Vec3(-4935, 940, 6580), new CANNON.Vec3(-2398.5,
            4036.5, 6552), new CANNON.Vec3(-1755, 5206.5, 6669)],
        p = g.x - BALL_SIZE;
    g = g.y - .4 * CANVAS_HEIGHT;
    var t = {
            x: 0,
            y: 0
        },
        y = 0;
    this._oSphereBody;
    this._oStandBody;
    this._oSprite;
    this._oSpriteShadow;
    this._oContainer = void 0;
    this._v2SlideDestination = {
        x: 0,
        y: 0
    };
    var B = new CANNON.Sphere(7);
    this._oSphereBody = new CANNON.Body({
        mass: 1,
        material: d
    });
    this._oSphereBody.position.copy(u[e]);
    this._oSphereBody.addShape(B);
    d = new CANNON.Box(new CANNON.Vec3(2.5, 2.5, .5));
    this._oStandBody = new CANNON.Body({
        mass: 0,
        material: b
    });
    this._oStandBody.position.copy(m[e]);
    this._oStandBody.addShape(d);
    this._oSpriteShadow = createBitmap(s_oSpriteLibrary.getSprite("shadow"));
    this._oSpriteShadow.regX = 52;
    this._oSpriteShadow.regY = 22;
    this._oSpriteShadow.visible = !1;
    this._oSprite = createBitmap(s_oSpriteLibrary.getSprite(0 === k ? "ball_2" : "ball_1"));
    this._oSprite.regX = BALL_SIZE / 2;
    this._oSprite.regY = BALL_SIZE / 2;
    this._oSprite.x = 5 > e ? p - k * BALL_SIZE * .75 : p + (k - (NUM_SHOT_PER_SCENE - 1)) * BALL_SIZE * .75;
    this._oSprite.y = g;
    this._oContainer = new createjs.Container;
    this._oContainer.addChild(this._oSprite,
        this._oSpriteShadow);
    s_oStage.addChildAt(this._oContainer, CART_DEPTH_INDEX + 1);
    this.unload = function() {
        a.remove(this._oSphereBody);
        a.remove(this._oStandBody);
        s_oStage.removeChild(this._oContainer)
    };
    this.update = function() {
        if (!h) {
            a.step(1 / 30);
            y = t.x;
            t = this._projCoordScaling(this._oSphereBody.position);
            var b = t.x - y,
                c = t.diam / BALL_SIZE;
            1 < c && (c = 1);
            this._oSprite.x = t.x;
            this._oSprite.y = t.y;
            this._oSprite.scaleY = this._oSprite.scaleX = c;
            r += b * BALL_ROTATION_SPEED;
            this._oSprite.rotation = r;
            this._oSpriteShadow.visible = !0;
            this._oSpriteShadow.x = t.shadowX;
            this._oSpriteShadow.y = t.shadowY;
            this._oSpriteShadow.scaleX = this._oSpriteShadow.x.scaleY = .75 * c;
            this._oSpriteShadow.alpha = this._oSprite.y / CANVAS_HEIGHT * .66 + .33
        }
    };
    this.grab = function(a) {
        l || (l = !0, createjs.Tween.removeTweens(this._oSprite), 5 > e ? createjs.Tween.get(this._oSprite).to({
            x: a.x,
            y: a.y
        }, 80, createjs.Ease.cubicIn) : createjs.Tween.get(this._oSprite).to({
            x: a.x + 100,
            y: a.y
        }, 80, createjs.Ease.cubicIn))
    };
    this.slide = function() {
        r -= 75;
        5 > e ? createjs.Tween.get(this._oSprite).to({
            x: this._oSprite.x -
                .8 * BALL_SIZE,
            rotation: r
        }, 500, createjs.Ease.linear) : createjs.Tween.get(this._oSprite).to({
            x: this._oSprite.x + .8 * BALL_SIZE,
            rotation: r
        }, 500, createjs.Ease.linear)
    };
    this.waitToThrow = function() {
        if (!c && !h) {
            c = !0;
            var a = this;
            createjs.Tween.get(this._oSprite).to({
                y: this._oSprite.y + 7
            }, 450, createjs.Ease.linear).call(function() {
                createjs.Tween.get(a._oSprite).to({
                    y: a._oSprite.y - 7
                }, 450, createjs.Ease.linear).call(function() {
                    c = !1
                })
            }, a)
        }
    };
    this._projCoord = function(a) {
        var b = a.x,
            c = a.y,
            d = b;
        a = a.z;
        var h = f[e - 1],
            g = 1 / (h[3] * d +
                h[7] * c + h[11] * a + h[15]);
        b = (h[0] * d + h[4] * c + h[8] * a + h[12]) * g;
        c = (h[1] * d + h[5] * c + h[9] * a + h[13]) * g;
        b = (b + 1) * CANVAS_WIDTH / 2;
        c = (-c + 1) * CANVAS_HEIGHT / 2;
        return {
            x: b,
            y: c
        }
    };
    this._projCoordScaling = function(a) {
        var b = this._projCoord(new CANNON.Vec3(a.x, a.y, a.z + 7)),
            c = this._projCoord(new CANNON.Vec3(a.x, a.y, a.z - 7));
        a = this._projCoord(new CANNON.Vec3(a.x, a.y, 0));
        return {
            x: (b.x + c.x) / 2,
            y: (b.y + c.y) / 2,
            diam: Math.abs(b.y - c.y),
            shadowX: a.x,
            shadowY: a.y
        }
    };
    this.throwingBall = function(b, c, d) {
        var f, g, k = this;
        5 > e ? (f = b.x - 40, g = b.y - 172) : (f = b.x +
            145, g = b.y - 172);
        h || (h = !0, createjs.Tween.removeTweens(this._oSprite), createjs.Tween.get(this._oSprite).to({
            x: f,
            y: g
        }, 100, createjs.Ease.linear).call(function() {
            var b;
            1 === e ? b = new CANNON.Vec3(n[1].x - c.x * ERROR_MULT, n[1].y + c.y * ERROR_MULT, n[1].z) : 2 === e ? b = new CANNON.Vec3(n[2].x - c.x * ERROR_MULT, n[2].y + c.y * ERROR_MULT, n[2].z) : 3 === e ? b = new CANNON.Vec3(n[3].x + c.y * ERROR_MULT, n[3].y + c.x * ERROR_MULT, n[3].z) : 4 === e ? b = new CANNON.Vec3(n[4].x + c.x * ERROR_MULT, n[4].y - c.y * ERROR_MULT, n[4].z) : 5 === e && (b = new CANNON.Vec3(n[5].x + c.x *
                ERROR_MULT, n[5].y - c.y * ERROR_MULT, n[5].z));
            a.add(d._oSphereBody);
            a.add(d._oStandBody);
            k._oSphereBody.applyForce(b, k._oSphereBody.position)
        }, k), k.update(), h = !1)
    };
    this.touchGround = function() {
        var a = this;
        7.01 >= this._oSphereBody.position.z && !1 === q && (playSound("us_bounce", 1, !1), q = !0, createjs.Tween.get(a._oContainer).to({
            alpha: 0
        }, 1E3, createjs.Ease.circIn).call(function() {
            a.unload()
        }, a))
    };
    this.touchedGround = function() {
        return q
    };
    this.getPosition = function() {
        return this._oSphereBody.position
    };
    this.getCartPosition =
        function() {
            return k
        }
}

function CInterface(a) {
    var d, b, e, k, g, f, l, c = !0,
        h = !1,
        q = !1,
        r = !1,
        u = !1,
        m = !1,
        n = void 0,
        p = void 0,
        t = SHOTGUI_SIZE / 3,
        y = .85 * CANVAS_WIDTH,
        B = .45 * CANVAS_HEIGHT,
        z, A, v, x, C, w, J, K, D, E, F, G, I, H = null,
        L = null;
    this.init = function(a) {
        z = a;
        a = s_oSpriteLibrary.getSprite("shot_gui");
        C = createBitmap(a);
        C.regX = SHOTGUI_SIZE / 2;
        C.regY = SHOTGUI_SIZE / 2;
        C.x = y;
        C.y = B;
        s_oStage.addChild(C);
        G = new createjs.Container;
        G.x = 80;
        s_oStage.addChild(G);
        a = s_oSpriteLibrary.getSprite("time_panel");
        w = createBitmap(a);
        G.addChild(w);
        D = new createjs.Text(TEXT_TIME_LEFT + " " +
            formatTime(TIME_AVAILABLE), "24px " + FONT_GAME2, "#ffde00");
        D.x = w.x + a.width / 2;
        D.y = 60;
        D.textBaseline = "alphabetic";
        D.textAlign = "center";
        D.shadow = new createjs.Shadow("#000000", 3, 3, 4);
        G.addChild(D);
        E = new createjs.Text(TEXT_SCORE + " 0", "30px " + FONT_GAME2, "#ffde00");
        E.x = w.x + a.width / 2;
        E.y = 90;
        E.textBaseline = "alphabetic";
        E.textAlign = "center";
        E.shadow = new createjs.Shadow("#000000", 3, 3, 4);
        G.addChild(E);
        F = new createjs.Text(TEXT_SHOTS + " 0", "30px " + FONT_GAME2, "#ffde00");
        F.x = w.x + a.width / 2;
        F.y = 120;
        F.textBaseline = "alphabetic";
        F.textAlign = "center";
        F.shadow = new createjs.Shadow("#000000", 3, 3, 4);
        G.addChild(F);
        v = createBitmap(s_oSpriteLibrary.getSprite("shot_ball"));
        v.regX = SHOTBALL_SIZE / 2;
        v.regY = SHOTBALL_SIZE / 2;
        v.x = y - 100;
        v.y = B;
        s_oStage.addChild(v);
        x = createBitmap(s_oSpriteLibrary.getSprite("shot_ball"));
        x.regX = SHOTBALL_SIZE / 2;
        x.regY = SHOTBALL_SIZE / 2;
        x.x = y;
        x.y = B - 100;
        x.visible = !1;
        s_oStage.addChild(x);
        A = new createjs.Shape;
        A.graphics.beginFill("Black").drawRect(0, 75, CANVAS_WIDTH, CANVAS_HEIGHT - 75);
        A.alpha = .01;
        s_oStage.addChild(A);
        A.on("mousedown", this._handleClick, this);
        if (!1 === DISABLE_SOUND_MOBILE || !1 === s_bMobile) a = s_oSpriteLibrary.getSprite("audio_icon"), e = CANVAS_WIDTH - a.width / 4 - 5, k = a.height / 2 + 5, J = new CToggle(e, k, a, s_bAudioActive, s_oStage), J.addEventListener(ON_MOUSE_UP, this._onAudioToggle, this);
        a = window.document;
        var c = a.documentElement;
        H = c.requestFullscreen || c.mozRequestFullScreen || c.webkitRequestFullScreen || c.msRequestFullscreen;
        L = a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen;
        !1 ===
            ENABLE_FULLSCREEN && (H = !1);
        H && screenfull.enabled && (a = s_oSpriteLibrary.getSprite("but_fullscreen"), d = a.width / 4 + 10, b = a.height / 2 + 5, I = new CToggle(d, b, a, s_bFullscreen, s_oStage), I.addEventListener(ON_MOUSE_UP, this._onFullscreenRelease, this));
        a = s_oSpriteLibrary.getSprite("but_exit");
        g = CANVAS_WIDTH - a.width / 2 - 62;
        f = a.height / 2 + 5;
        K = new CGfxButton(g, f, a);
        K.addEventListener(ON_MOUSE_UP, this._onExit, this);
        l = !1;
        !1 === s_bMobile && (document.onkeydown = this.onKeyDown, document.onkeyup = this.onKeyUp);
        this.refreshButtonPos(s_iOffsetX,
            s_iOffsetY)
    };
    this.refreshButtonPos = function(a, c) {
        K.setPosition(g - a, c + f);
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || J.setPosition(e - a, c + k);
        H && screenfull.enabled && I.setPosition(d + s_iOffsetX, b + s_iOffsetY);
        G.y = c
    };
    this.unload = function() {
        !1 !== DISABLE_SOUND_MOBILE && !1 !== s_bMobile || J.unload();
        H && screenfull.enabled && I.unload();
        K.unload();
        document.onkeydown = null;
        s_oInterface = document.onkeyup = null
    };
    this.resetFullscreenBut = function() {
        I.setActive(s_bFullscreen)
    };
    this.updateTime = function(a) {
        a = TEXT_TIME_LEFT + " " +
            formatTime(a);
        D.text = a
    };
    this.updateScore = function(a) {
        E.text = TEXT_SCORE + " " + a
    };
    this.updateShots = function(a) {
        F.text = TEXT_SHOTS + " " + a
    };
    this._handleClick = function(a) {
        if (!c) {
            c = !1;
            if (!0 === q) return q = !1, r = !0, n = Math.floor((v.x - y) / t * 100) / 100, x.visible = !0;
            !0 === r && (r = !1, p = Math.floor((x.y - B) / t * 100) / 100, h = !0)
        }
    };
    this.onKeyUp = function(a) {
        l = !1
    };
    this.onKeyDown = function(a) {
        if (!l) {
            l = !0;
            a || (a = window.event);
            switch (a.keyCode) {
                case 32:
                    s_oInterface._handleClick()
            }
            a.preventDefault();
            return !1
        }
    };
    this.listenForClick = function() {
        c = !1;
        h || (!1 === q && !1 === r && (q = !0), this._animateShotBall());
        return !0
    };
    this._animateShotBall = function() {
        q ? u ? (v.x -= SELECTOR_SPEED, v.x < .85 * CANVAS_WIDTH - t && (u = !1)) : (v.x += SELECTOR_SPEED, v.x > .85 * CANVAS_WIDTH + t && (u = !0)) : r && (m ? (x.y -= SELECTOR_SPEED, x.y < .45 * CANVAS_HEIGHT - t && (m = !1)) : (x.y += SELECTOR_SPEED, x.y > .45 * CANVAS_HEIGHT + t && (m = !0)))
    };
    this.isVectorAquired = function() {
        return {
            state: h,
            vector: {
                x: n,
                y: p
            }
        }
    };
    this.newBall = function() {
        c = !0;
        m = u = r = q = h = !1;
        v.x = y - 100;
        v.y = B;
        x.x = y;
        x.y = B - 100;
        x.visible = !1
    };
    this._onAudioToggle = function() {
        Howler.mute(s_bAudioActive);
        s_bAudioActive = !s_bAudioActive
    };
    this._onExit = function() {
        z.unload()
    };
    this._onFullscreenRelease = function() {
        s_bFullscreen ? L.call(window.document) : H.call(window.document.documentElement);
        sizeHandler()
    };
    s_oInterface = this;
    this.init(a)
}
var s_oInterface = null;

function CSceneStatic(a, d, b, e) {
    var k = !0,
        g = !0,
        f = !1,
        l = 0,
        c = d,
        h = [],
        q = [{}, {
            x: .648 * CANVAS_WIDTH,
            y: .88 * CANVAS_HEIGHT / 5
        }, {
            x: .504 * CANVAS_WIDTH,
            y: .79 * CANVAS_HEIGHT / 5
        }, {
            x: 2.39 / 5 * CANVAS_WIDTH,
            y: .81 * CANVAS_HEIGHT / 5
        }, {
            x: .442 * CANVAS_WIDTH,
            y: .79 * CANVAS_HEIGHT / 5
        }, {
            x: .292 * CANVAS_WIDTH,
            y: .88 * CANVAS_HEIGHT / 5
        }],
        r = [{}, {
            x: 850,
            y: 720
        }, {
            x: 700,
            y: 720
        }, {
            x: 700,
            y: 720
        }, {
            x: 700,
            y: 720
        }, {
            x: 280,
            y: 720
        }];
    var u = createBitmap(s_oSpriteLibrary.getSprite("field_camera_1"));
    u.scaleX = -1;
    u.x = CANVAS_WIDTH;
    s_oStage.addChild(u);
    var m = new createjs.Text("",
        "27px " + FONT_GAME2, "Red");
    m.visible = !1;
    m.x = 541;
    m.y = 22;
    m.textBaseline = "alphabetic";
    m.textAlign = "center";
    s_oStage.addChild(m);
    var n = createBitmap(s_oSpriteLibrary.getSprite("cart_back"));
    s_oStage.addChild(n);
    var p = createBitmap(s_oSpriteLibrary.getSprite("cart_front"));
    s_oStage.addChild(p);
    CART_DEPTH_INDEX = s_oStage.getChildIndex(n);
    n.regX = p.regX = CART_WIDTH / 2;
    n.regY = p.regY = CART_HEIGHT / 2;
    n.x = p.x = r[1].x;
    n.y = p.y = r[1].y;
    d = new CANNON.Box(new CANNON.Vec3(.5, 36, 21));
    b = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(48,
            0, 120),
        material: b
    });
    b.addShape(d);
    a.add(b);
    d = new CANNON.Box(new CANNON.Vec3(11, .5, .5));
    b = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(59, 11, 120),
        material: e
    });
    b.addShape(d);
    a.add(b);
    var t = new CANNON.Box(new CANNON.Vec3(11, .5, .5));
    d = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(59, -11, 120),
        material: e
    });
    d.addShape(t);
    a.add(d);
    t = new CANNON.Box(new CANNON.Vec3(.5, 11, .5));
    var y = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(70, 0, 120),
        material: e
    });
    y.addShape(t);
    a.add(y);
    b.addEventListener("collide",
        function(a) {
            f = !0
        });
    d.addEventListener("collide", function(a) {
        f = !0
    });
    y.addEventListener("collide", function(a) {
        f = !0
    });
    b = new CANNON.Box(new CANNON.Vec3(8, .5, .5));
    d = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(59, 8, 113),
        material: e
    });
    d.addShape(b);
    a.add(d);
    b = new CANNON.Box(new CANNON.Vec3(8, .5, .5));
    d = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(59, -8, 113),
        material: e
    });
    d.addShape(b);
    a.add(d);
    b = new CANNON.Box(new CANNON.Vec3(.5, 8, .5));
    e = new CANNON.Body({
        mass: 0,
        position: new CANNON.Vec3(67, 0, 113),
        material: e
    });
    e.addShape(b);
    a.add(e);
    for (a = 0; 36 > a; a++) h.push(createBitmap(s_oSpriteLibrary.getSprite("bsk" + (a + 1)))), h[a].visible = !1, h[a].x = q[1].x, h[a].y = q[1].y, h[a].scaleX = 1.2, h[a].scaleY = 1.2, s_oStage.addChild(h[a]);
    h[0].visible = !0;
    this.nextScene = function() {
        c++;
        this.loadBg(c);
        for (var a = 0; 36 > a; a++) h[a].x = q[c].x, h[a].y = q[c].y;
        n.x = p.x = r[c].x;
        n.y = p.y = r[c].y;
        5 === c && (n.scaleX = p.scaleX = -1);
        switch (c) {
            case 2:
                m.visible = !0;
                m.x = 590;
                m.y = 46;
                m.setTransform(m.x, m.y, 1, 1, 0, 0, -15);
                break;
            case 3:
                m.visible = !0;
                m.x = 525;
                m.y = 50;
                m.setTransform(m.x,
                    m.y, 1.2, 1.2, 0, 0, 0);
                break;
            case 4:
                m.visible = !0;
                m.x = 437;
                m.y = 46;
                m.setTransform(m.x, m.y, 1, 1, 0, 0, 15);
                break;
            case 5:
                m.visible = !1
        }
    };
    this.updateTime = function(a) {
        m.text = formatTime(a)
    };
    this.updateBasket = function(a) {
        if (k) {
            if (113 < a.z && 120 > a.z && 48 < a.x && 67 > a.x && -8 < a.y && 8 > a.y) return k = !1, !0;
            if (!0 === f && !0 === k) return f = !1
        }
    };
    this.scored = function() {
        if (14 > l || 28 <= l && 35 >= l) return this.playFrames(0, 14, !1), !0;
        h[l].visible = !1;
        h[0].visible = !0;
        l = 0;
        return !1
    };
    this.rimCollision = function() {
        if (35 > l) return this.playFrames(28, 35, !1), !0;
        h[l].visible = !1;
        h[0].visible = !0;
        l = 0;
        return !1
    };
    this.newBall = function() {
        f = !1;
        k = !0;
        l = 0
    };
    this.getCartCoords = function() {
        return {
            x: p.x + CART_WIDTH / 2,
            y: p.y + CART_HEIGHT / 2
        }
    };
    this.loadBg = function(a) {
        var b = 3 >= a ? "field_camera_" + a : 4 === a ? "field_camera_2" : "field_camera_1";
        var c = s_oStage.getChildIndex(u);
        u = createBitmap(s_oSpriteLibrary.getSprite(b));
        3 > a && (u.scaleX = -1, u.x = CANVAS_WIDTH);
        s_oStage.removeChildAt(c);
        s_oStage.addChildAt(u, c)
    };
    this.playFrames = function(a, b, c) {
        l < a || l > b || void 0 === l ? (h[l] && (h[l].visible = !1),
            l = a, g = h[l].visible = !0) : (h[l].visible = !1, l === a && !1 === g ? (g = !0, l += 1) : l === b ? !0 === c ? l = a : (g = !1, l--) : g ? l++ : l--, h[l].visible = !0)
    }
}

function CPlayer(a, d) {
    var b = !1,
        e = !1,
        k = !1,
        g = !0,
        f = void 0,
        l = 1,
        c = [];
    this.init = function(a) {
        for (var b = 0; 131 >= b; b++) c.push(createBitmap(s_oSpriteLibrary.getSprite("pl" + b))), c[b].visible = !1, c[b].regX = PLAYER_WIDTH / 2, c[b].regY = PLAYER_HEIGHT / 2, c[b].x = a.x - PLAYER_WIDTH, c[b].y = a.y - .55 * PLAYER_HEIGHT, s_oStage.addChild(c[b])
    };
    this.nextScene = function(a) {
        l++;
        this.newBall();
        if (5 > l)
            for (var b = 0; 131 >= b; b++) c[b].x = a.x - PLAYER_WIDTH, c[b].y = a.y - .55 * PLAYER_HEIGHT;
        else
            for (b = 0; 131 >= b; b++) c[b].x = a.x + .05 * PLAYER_WIDTH, c[b].y = a.y -
                .55 * PLAYER_HEIGHT, c[b].scaleX = -1
    };
    this.idle1 = function() {
        this.playFrames(0, 15, !1)
    };
    this.grab1 = function() {
        15 > f ? this.playFrames(0, 15, !0) : 38 >= f ? (35 === f && (b = !0), this.playFrames(16, 39, !0)) : 39 === f && !1 === e && (e = !0, a.ballWaitToThrow(), createjs.Tween.get(c[f]).to({
            scaleY: .98,
            y: d.y - .55 * PLAYER_HEIGHT + 5
        }, 450, createjs.Ease.linear).call(function() {
            createjs.Tween.get(c[f]).to({
                scaleY: 1,
                y: d.y - .55 * PLAYER_HEIGHT
            }, 450, createjs.Ease.linear).call(function() {
                e = !1
            })
        }))
    };
    this.grab2 = function() {
        !b || !0 === b && 61 > f ? (this.playFrames(44,
            61, !0), 57 === f && (b = !0)) : !0 === b && 61 <= f && !1 === e && (e = !0, a.ballWaitToThrow(), createjs.Tween.removeTweens(c[f]), createjs.Tween.get(c[f]).to({
            scaleY: .98,
            y: d.y - .55 * PLAYER_HEIGHT + 5
        }, 450, createjs.Ease.linear).call(function() {
            createjs.Tween.get(c[f]).to({
                scaleY: 1,
                y: d.y - .55 * PLAYER_HEIGHT
            }, 450, createjs.Ease.linear).call(function() {
                e = !1
            })
        }))
    };
    this.throwing = function() {
        if (43 > f) this.playFrames(40, 43, !0);
        else return !0
    };
    this.endTurn = function() {
        k ? this.idle1() : (this.playFrames(86, 131, !0), 131 === f && (k = !0))
    };
    this.playFrames =
        function(a, b, d) {
            f < a || f > b || void 0 === f ? (c[f] && (c[f].visible = !1), f = a, g = c[f].visible = !0) : (c[f].visible = !1, f === a && !1 === g ? (g = !0, f += 1) : f === b ? !0 === d ? f = a : (g = !1, f--) : g ? f++ : f--, c[f].visible = !0)
        };
    this.getPlCoords = function() {
        return {
            x: c[39].x - PLAYER_WIDTH / 8,
            y: c[39].y - PLAYER_HEIGHT / 10 - BALL_SIZE / 2
        }
    };
    this.isBallGrabbed = function() {
        return b
    };
    this.newBall = function() {
        k = e = b = !1
    };
    this.init(d)
}

function CEndPanel(a, d, b, e) {
    var k, g, f, l, c, h, q, r;
    this._init = function(a, b, d, e) {
        k = e;
        f = createBitmap(s_oSpriteLibrary.getSprite("msg_box"));
        g = f.on("click", function() {});
        s_oStage.addChild(f);
        l = new createjs.Text(TEXT_FINALSCORE + " " + b, "52px " + FONT_GAME, "#FFCC00");
        l.x = CANVAS_WIDTH / 2;
        l.y = 225;
        l.alpha = 0;
        l.textBaseline = "alphabetic";
        l.textAlign = "center";
        l.shadow = new createjs.Shadow("#000000", 4, 4, 3);
        createjs.Tween.get(l).to({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 - 110,
            alpha: 1
        }, 1600, createjs.Ease.quadOut);
        c = new createjs.Text(TEXT_FINALSHOTS +
            " " + d, "36px " + FONT_GAME, "#FFCC00");
        c.x = CANVAS_WIDTH / 2 - 150;
        c.y = CANVAS_HEIGHT / 2 - 49;
        c.alpha = 0;
        c.textBaseline = "alphabetic";
        c.textAlign = "center";
        c.shadow = new createjs.Shadow("#000000", 3, 3, 3);
        createjs.Tween.get(c).wait(500).to({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 - 49,
            alpha: 1
        }, 500, createjs.Ease.quadOut);
        a = 0 >= a ? 0 : formatTime(a);
        h = new createjs.Text(TEXT_FINALTIME + " " + a, "36px " + FONT_GAME, "#FFCC00");
        h.x = CANVAS_WIDTH / 2 + 150;
        h.y = CANVAS_HEIGHT / 2 - 7;
        h.alpha = 0;
        h.textBaseline = "alphabetic";
        h.textAlign = "center";
        h.shadow =
            new createjs.Shadow("#000000", 3, 3, 3);
        createjs.Tween.get(h).wait(750).to({
            x: CANVAS_WIDTH / 2,
            y: CANVAS_HEIGHT / 2 - 7,
            alpha: 1
        }, 500, createjs.Ease.quadOut);
        a = 0 === d ? 0 : (b / d * 100).toFixed(1);
        q = new createjs.Text(TEXT_FINALSUCCESSPERC + " " + a + "%", "36px " + FONT_GAME, "#FFCC00");
        q.x = CANVAS_WIDTH / 2 - 150;
        q.y = CANVAS_HEIGHT / 2 + 32;
        q.alpha = 0;
        q.textBaseline = "alphabetic";
        q.textAlign = "center";
        q.shadow = new createjs.Shadow("#000000", 3, 3, 3);
        var m = this;
        createjs.Tween.get(q).wait(1E3).to({
                x: CANVAS_WIDTH / 2,
                y: CANVAS_HEIGHT / 2 + 32,
                alpha: 1
            },
            500, createjs.Ease.quadOut).call(function() {
            var a = s_oSpriteLibrary.getSprite("but_play");
            r = new CTextButton(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 105, a, TEXT_PLAYAGAIN, FONT_GAME, "#ffffff", 30, s_oStage);
            r.addEventListener(ON_MOUSE_UP, m._onButPlayAgain, m);
            $(s_oMain).trigger("show_interlevel_ad")
        }, m);
        s_oStage.addChild(l, c, h, q);
        $(s_oMain).trigger("save_score", b);
        $(s_oMain).trigger("end_level")
    };
    this.unload = function() {
        f.off("click", g);
        r.unload();
        r = null
    };
    this._onButPlayAgain = function() {
        k.unload()
    };
    this._init(a, d,
        b, e)
}

function CCreditsPanel() {
    var a, d, b, e, k, g, f, l;
    this._init = function() {
        l = new createjs.Container;
        s_oStage.addChild(l);
        var c = createBitmap(s_oSpriteLibrary.getSprite("bg_menu"));
        l.addChild(c);
        k = new createjs.Shape;
        k.graphics.beginFill("rgba(0,0,0,0.7)").drawRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        l.addChild(k);
        c = s_oSpriteLibrary.getSprite("msg_box");
        d = createBitmap(c);
        d.x = CANVAS_WIDTH / 2;
        d.y = CANVAS_HEIGHT / 2;
        d.regX = c.width / 2;
        d.regY = c.height / 2;
        l.addChild(d);
        g = new createjs.Shape;
        g.graphics.beginFill("#0f0f0f").drawRect(0, 0,
            CANVAS_WIDTH, CANVAS_HEIGHT);
        g.alpha = .01;
        g.on("click", this._onLogoButRelease);
        l.addChild(g);
        c = s_oSpriteLibrary.getSprite("but_exit");
        a = CANVAS_WIDTH / 2 + 244;
        b = new CGfxButton(a, 254, c, l);
        b.addEventListener(ON_MOUSE_UP, this.unload, this);
        e = new createjs.Text(TEXT_CREDITS_DEVELOPED, "36px " + FONT_GAME, "#ffffff");
        e.x = CANVAS_WIDTH / 2;
        e.y = 290;
        e.textAlign = "center";
        l.addChild(e);
        c = s_oSpriteLibrary.getSprite("logo_credits");
        var h = createBitmap(c);
        h.regX = c.width / 2;
        h.regY = c.height / 2;
        h.x = CANVAS_WIDTH / 2;
        h.y = 390;
        l.addChild(h);
        f = new createjs.Text("www.codethislab.com", "36px " + FONT_GAME, "#ffffff");
        f.x = CANVAS_WIDTH / 2;
        f.y = 440;
        f.textAlign = "center";
        l.addChild(f)
    };
    this.unload = function() {
        g.off("click", this._onLogoButRelease);
        b.unload();
        b = null;
        s_oStage.removeChild(l)
    };
    this._onLogoButRelease = function() {
        window.open("http://www.codethislab.com/index.php?&l=en")
    };
    this._init()
};