/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./json/paths.json":
/*!*************************!*\
  !*** ./json/paths.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"id":0,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Qui êtes-vous? $close$span$curieux$close$p-narrator$ Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil. Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé. $close$p-narrator$Ou êtes-vous? $close","paths":[{"content":"p-talk-me$Je m\'appelle Tydyus, et toi jeune homme, quel est ton nom? $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"/"},{"content":"p-talk-me$Tu n\'as pas remarqué que je dormais le mioche ?! $close$span$énervé$close$p-narrator$Si il y a bien quelque chose que vous n\'appreciez pas c\'est que l\'on vous réveille, ce môme à interet à avoir une bonne excuse.. $close","pathID":1,"tag":"/"},{"content":"p-talk-me$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"/"},{"content":"p-talk-me$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close$p-narrator$Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. $close","pathID":1,"tag":"/"}],"tag":"/"},{"id":1,"type":"character","name":"Weird little boy","content":"p-talk-npc$ Vous avez fait vos premiers pas, bravo! $close$span$heureux$close$","paths":[{"content":"p-talk-me$C\'est donc çela, marcher ? $close$p-narrator$ Come back. $close","pathID":0,"tag":"/"}],"tag":"/"}]');

/***/ }),

/***/ "./ts/App/Components/game/Game.ts":
/*!****************************************!*\
  !*** ./ts/App/Components/game/Game.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventGame = exports.Game = void 0;
var profil_1 = __webpack_require__(/*! ./profil/profil */ "./ts/App/Components/game/profil/profil.ts");
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/game/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var Game = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p>\u00EAtes-vous sur de choisir ce chemin?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        " + profil_1.Profil(info) + "\n    </header>\n    <main>\n        " + main_1.Main(info) + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.Game = Game;
var eventGame = function (info) {
    main_1.eventMain(info);
    profil_1.eventProfil();
    footer_1.eventFooter();
};
exports.eventGame = eventGame;


/***/ }),

/***/ "./ts/App/Components/game/main/main.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/game/main/main.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.majMain = exports.eventMain = exports.Main = void 0;
var encoding_1 = __webpack_require__(/*! ../../../tools/encoding */ "./ts/App/tools/encoding.ts");
var node_1 = __webpack_require__(/*! ./node */ "./ts/App/Components/game/main/node.ts");
var paths_1 = __webpack_require__(/*! ./paths */ "./ts/App/Components/game/main/paths.ts");
var Main = function (info) {
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n        " + node_1.NodeElement(data[info.game.node]) + "\n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        " + paths_1.PathsElement(data[info.game.node]["paths"]) + "\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function (info) {
    //other 
    function validPath(id) {
        var paths = document.getElementsByClassName('path');
        for (var i = 0; i < paths.length; i++) {
            if (paths[i].id == id) {
                if (paths[i].classList.contains("onFocus")) {
                    paths[i].classList.remove("onFocus");
                }
                else {
                    paths[i].classList.add("onFocus");
                    document.getElementById("popUpConfirmPath").classList.remove("hidden");
                }
            }
            else {
                paths[i].classList.remove("onFocus");
            }
        }
    }
    function cleanFocusOnPath() {
        var paths = document.getElementsByClassName('path');
        for (var i = 0; i < paths.length; i++) {
            paths[i].classList.remove("onFocus");
        }
    }
    var paths = document.getElementsByClassName("path");
    var _loop_1 = function (index) {
        paths[index].addEventListener("click", function () {
            validPath(paths[index].id);
            var popUpChoiceYes = document.getElementById('popUpChoiceYes');
            popUpChoiceYes.classList.forEach(function (c) { popUpChoiceYes.classList.remove(c); });
            popUpChoiceYes.classList.add(paths[index].classList[1]);
        });
    };
    for (var index = 0; index < paths.length; index++) {
        _loop_1(index);
    }
    //setup validation event
    var popUpClose = document.getElementById('popUpClose');
    var popUpChoiceNo = document.getElementById('popUpChoiceNo');
    var popUpChoiceYes = document.getElementById('popUpChoiceYes');
    //set function in event on click
    popUpClose.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceNo.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceYes.addEventListener("click", function () {
        var nameSave = encoding_1.getNameOfUser();
        if (nameSave != "load") {
            var info_1 = encoding_1.getInfoFromCookie(nameSave);
            info_1.game.node = +popUpChoiceYes.classList[0];
            encoding_1.saveOnCookie(nameSave, info_1);
            document.location.href = "?user=" + nameSave;
        }
        else {
            console.error("nom d'user inconnu");
        }
    });
};
exports.eventMain = eventMain;
var majMain = function (actuelNode) {
    if (actuelNode === void 0) { actuelNode = 0; }
    var data = __webpack_require__(/*! ../../../../../json/paths.json */ "./json/paths.json");
    document.getElementById("node").innerHTML = node_1.NodeElement(data[actuelNode]);
    document.getElementById("paths").innerHTML = paths_1.PathsElement(data[actuelNode]["paths"]);
};
exports.majMain = majMain;


/***/ }),

/***/ "./ts/App/Components/game/main/node.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/game/main/node.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NodeElement = void 0;
var parsingContent_1 = __webpack_require__(/*! ../../../tools/parsingContent */ "./ts/App/tools/parsingContent.ts");
var NodeElement = function (node) {
    return "\n    <div class=\"a deco\" id=\"nodeDeco\"></div>\n    <div class=\"b content\" id=\"nodeContent\">\n        " + parsingContent_1.parsingText(node.content) + "\n    </div>\n    ";
};
exports.NodeElement = NodeElement;
// <p class="talk npc">
//     Qui êtes-vous? 
//     <span class="annotation">curieux</span></p>
// <p class="narrator">
//     Un jeune homme vous regarde de haut tant dis vous sortez de ce qui vous semble être un long sommeil.
//     Vos articulation sont toute endoloris et un mal de crane passé ce ressent au fond de votre esprit embrumé.
// </p><p class="narrator">
//     Ou êtes-vous? 
// </p>


/***/ }),

/***/ "./ts/App/Components/game/main/paths.ts":
/*!**********************************************!*\
  !*** ./ts/App/Components/game/main/paths.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PathsElement = void 0;
var parsingContent_1 = __webpack_require__(/*! ../../../tools/parsingContent */ "./ts/App/tools/parsingContent.ts");
var PathsElement = function (paths) {
    var render = "";
    for (var index = 0; index < paths.length; index++) {
        render += "\n        <div class=\"path " + paths[index].pathID + "\" id=\"path" + index + "\">\n        <div class=\"a content\">\n            " + parsingContent_1.parsingText(paths[index].content) + "\n        </div>\n        <div class=\"mask\"></div>\n        <div class=\"b confirmation\"><div class=\"a\"><i class=\"fas fa-chevron-right\"></i>\n        </div><div class=\"b\"></div></div>\n    </div>\n        ";
    }
    return render;
};
exports.PathsElement = PathsElement;


/***/ }),

/***/ "./ts/App/Components/game/profil/profil.ts":
/*!*************************************************!*\
  !*** ./ts/App/Components/game/profil/profil.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventProfil = exports.Profil = void 0;
var Profil = function (info) {
    return "\n    <div class=\"a\" id=\"profilPicture\">\n        <img src=\"./img/tof.png\" alt=\"\">\n    </div>\n    <div class=\"b\" id=\"profilInfo\">\n        <div>\n            <p>" + info.game.user.name + "</p>\n        </div>\n        <div class=\"profilNav\">\n            <div class=\"a\" >\n                <input type=\"checkbox\" name=\"checkboxViewBadgeProfil\" id=\"checkboxViewBadgeProfil\">\n                <div class=\"checkboxDeco\"></div>\n            </div>\n            <div class=\"b\" ></div>\n        </div>\n    </div>\n    <div class=\"c\"></div>\n    <div class=\"d\"></div>\n    ";
};
exports.Profil = Profil;
var eventProfil = function () {
};
exports.eventProfil = eventProfil;


/***/ }),

/***/ "./ts/App/Components/home/Home.ts":
/*!****************************************!*\
  !*** ./ts/App/Components/home/Home.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventHome = exports.Home = void 0;
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/home/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var Home = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p id=\"textPopUp\">Charger la partie?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        \n    </header>\n    <main>\n        " + main_1.Main() + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.Home = Home;
var eventHome = function (info) {
    main_1.eventMain();
    footer_1.eventFooter();
};
exports.eventHome = eventHome;


/***/ }),

/***/ "./ts/App/Components/home/main/main.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/home/main/main.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventMain = exports.Main = void 0;
var Main = function () {
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n        home\n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        \n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function () {
};
exports.eventMain = eventMain;


/***/ }),

/***/ "./ts/App/Components/loadGame/loadGame.ts":
/*!************************************************!*\
  !*** ./ts/App/Components/loadGame/loadGame.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventLoadGame = exports.loadGame = void 0;
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/loadGame/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var loadGame = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p id=\"textPopUp\">Charger la partie?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        \n    </header>\n    <main>\n        " + main_1.Main() + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.loadGame = loadGame;
var eventLoadGame = function (info) {
    main_1.eventMain();
    footer_1.eventFooter();
};
exports.eventLoadGame = eventLoadGame;


/***/ }),

/***/ "./ts/App/Components/loadGame/main/main.ts":
/*!*************************************************!*\
  !*** ./ts/App/Components/loadGame/main/main.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.majMain = exports.eventMain = exports.Main = void 0;
var save_1 = __webpack_require__(/*! ./save */ "./ts/App/Components/loadGame/main/save.ts");
var Main = function () {
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"node\">\n    \n    </div>\n    <div class=\"c paths\" id=\"paths\">\n        " + save_1.Save() + "\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function () {
    //other 
    function validPath(id) {
        var paths = document.getElementsByClassName('loadSave');
        for (var i = 0; i < paths.length; i++) {
            if (paths[i].id == id) {
                if (paths[i].classList.contains("onFocus")) {
                    paths[i].classList.remove("onFocus");
                }
                else {
                    paths[i].classList.add("onFocus");
                    document.getElementById("popUpConfirmPath").classList.remove("hidden");
                }
            }
            else {
                paths[i].classList.remove("onFocus");
            }
        }
    }
    function cleanFocusOnPath() {
        var loadSaves = document.getElementsByClassName('loadSave');
        for (var i = 0; i < loadSaves.length; i++) {
            loadSaves[i].classList.remove("onFocus");
        }
    }
    var loadSaves = document.getElementsByClassName("loadSave");
    var _loop_1 = function (index) {
        loadSaves[index].addEventListener("click", function () {
            validPath(loadSaves[index].id);
            var popUpChoiceYes = document.getElementById('popUpChoiceYes');
            popUpChoiceYes.classList.forEach(function (c) { popUpChoiceYes.classList.remove(c); });
            popUpChoiceYes.classList.add(loadSaves[index].classList[2]);
            var text = document.getElementById("textPopUp");
            if (loadSaves[index].classList[2] == "newGame")
                text.innerHTML = "Commencer une nouvelle partie?";
            else
                text.innerHTML = "Charger la partie \"" + loadSaves[index].classList[2] + "\" ?";
        });
    };
    for (var index = 0; index < loadSaves.length; index++) {
        _loop_1(index);
    }
    //setup validation event
    var popUpClose = document.getElementById('popUpClose');
    var popUpChoiceNo = document.getElementById('popUpChoiceNo');
    var popUpChoiceYes = document.getElementById('popUpChoiceYes');
    //set function in event on click
    popUpClose.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceNo.addEventListener("click", function () {
        document.getElementById('popUpConfirmPath').classList.add("hidden");
        cleanFocusOnPath();
    });
    popUpChoiceYes.addEventListener("click", function () {
        document.location.href = "?user=" + popUpChoiceYes.classList[0];
    });
};
exports.eventMain = eventMain;
var majMain = function (actuelNode) {
    if (actuelNode === void 0) { actuelNode = 0; }
};
exports.majMain = majMain;


/***/ }),

/***/ "./ts/App/Components/loadGame/main/save.ts":
/*!*************************************************!*\
  !*** ./ts/App/Components/loadGame/main/save.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Save = void 0;
var Save = function () {
    var render = "";
    var saveBrut;
    if (document.cookie.indexOf(";") !== -1) {
        saveBrut = document.cookie.split(";");
    }
    else {
        saveBrut = [document.cookie];
    }
    var save = [];
    for (var i = 0; i < saveBrut.length; i++) {
        save.push({ name: saveBrut[i].split("=")[0], data: saveBrut[i].split("=")[1] });
        if (save[i].name != "load") {
            render += "\n        <div class=\"path loadSave " + save[i].name + "\" id=\"path" + i + "\">\n            <div class=\"a content\">\n                " + save[i].name + "\n            </div>\n            <div class=\"mask\"></div>\n            <div class=\"b confirmation\"><div class=\"a\"><i class=\"fas fa-chevron-right\"></i>\n            </div><div class=\"b\"></div></div>\n        </div>\n        ";
        }
    }
    render +=
        "\n        <div class=\"path loadSave newGame\" id=\"newpath\">\n            <div class=\"a content\">\n                NOUVELLE PARTIE\n            </div>\n            <div class=\"mask\"></div>\n            <div class=\"b confirmation\"><div class=\"a\"><i class=\"fas fa-chevron-right\"></i>\n            </div><div class=\"b\"></div></div>\n        </div>\n        ";
    return render;
};
exports.Save = Save;


/***/ }),

/***/ "./ts/App/Components/newGame/main/main.ts":
/*!************************************************!*\
  !*** ./ts/App/Components/newGame/main/main.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.newGame = exports.eventMain = exports.Main = void 0;
var encoding_1 = __webpack_require__(/*! ../../../tools/encoding */ "./ts/App/tools/encoding.ts");
var Main = function () {
    return "\n    <div class=\"a\"></div>\n    <div class=\"b node\" id=\"newGameBgStory\">\n        <p class=\"talk npc\">Bienvenue</p>\n        <p class=\"narrator\">contexte de l'histoire</p>\n    </div>\n    <div class=\"c paths\" id=\"formNewGame\">\n        <div>\n            <p>Nouvelle partie</p>\n            <input type=\"text\" id=\"FNGname\" placeholder=\"nom du personnage\">\n            <span id=\"FNGerror\"></span>\n            <button id=\"FNGsubmit\">Commencer l'aventure</button>\n        </div>\n    </div>\n    ";
};
exports.Main = Main;
var eventMain = function () {
    document.getElementById("FNGsubmit")
        .addEventListener("click", function () { return exports.newGame(); });
};
exports.eventMain = eventMain;
var newGame = function () {
    var error = "";
    var name = document.getElementById("FNGname");
    if (!/^[a-zA-Z]/.test(name.value) || name.value.length < 2) {
        error = "nom invalide";
    }
    if (error == "") {
        var data = "page=game!gameUserName=" + name.value + "!gameUserBadges=joueur_0!node=0";
        encoding_1.saveOnCookie(name.value, encoding_1.parseData(data));
        document.location.href = "?user=" + name.value;
    }
    else {
        document.getElementById("FNGerror").innerHTML = "<p style=\"color:red\">" + error + "</p>";
    }
};
exports.newGame = newGame;


/***/ }),

/***/ "./ts/App/Components/newGame/newGame.ts":
/*!**********************************************!*\
  !*** ./ts/App/Components/newGame/newGame.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventNewGame = exports.newGame = void 0;
var main_1 = __webpack_require__(/*! ./main/main */ "./ts/App/Components/newGame/main/main.ts");
var footer_1 = __webpack_require__(/*! ../section/footer */ "./ts/App/Components/section/footer.ts");
var newGame = function (info) {
    document.body.innerHTML +=
        "\n    <!-- pop-up -->\n    <div id=\"popUpConfirmPath\" class=\"hidden\">\n        <div>\n            <div class=\"head\"><div id=\"popUpClose\" class=\"close\"></div> </div>\n            <div class=\"text\">\n                <p id=\"textPopUp\">Charger la partie?</p>\n            </div>\n            <div class=\"choice\">\n                <div id=\"popUpChoiceYes\">Oui</div>\n                <div id=\"popUpChoiceNo\">Non</div>\n            </div>\n            \n        </div>\n        \n    </div>\n    <!-- ------ -->\n    ";
    return ("\n    <header>\n        \n    </header>\n    <main>\n        " + main_1.Main() + "\n    </main>\n    <footer>\n        " + footer_1.Footer() + "\n    </footer>\n    ");
};
exports.newGame = newGame;
var eventNewGame = function (info) {
    main_1.eventMain();
    footer_1.eventFooter();
};
exports.eventNewGame = eventNewGame;


/***/ }),

/***/ "./ts/App/Components/section/footer.ts":
/*!*********************************************!*\
  !*** ./ts/App/Components/section/footer.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.eventFooter = exports.Footer = void 0;
var encoding_1 = __webpack_require__(/*! ../../tools/encoding */ "./ts/App/tools/encoding.ts");
var Footer = function () {
    var render = "";
    var user = encoding_1.getNameOfUser();
    render +=
        "<div class=\"a\">\n        <div class=\"a\" id=\"homeOnFooter\">\n            <a href=\"?\"><i class=\"fas fa-home\"></i></a></div>\n        <div class=\"b\" id=\"loadOnFooter\">\n            <a href=\"?user=load\"><i class=\"fas fa-save\"></i></a></div>\n    </div>\n    <div class=\"b\"></div>\n    <div class=\"c\"></div>";
    return render;
};
exports.Footer = Footer;
var eventFooter = function () {
    //event
};
exports.eventFooter = eventFooter;


/***/ }),

/***/ "./ts/App/tools/encoding.ts":
/*!**********************************!*\
  !*** ./ts/App/tools/encoding.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getNameOfUser = exports.deleteCookie = exports.saveOnCookie = exports.getInfoFromCookie = exports.getInfoFromUrl = exports.stringifyData = exports.parseData = exports.decoding = exports.encoding = void 0;
var encoding = function (asciiString) {
    var hex = '';
    var tempASCII, tempHex;
    var asciiArray = asciiString.split('');
    for (var i = 0; i < asciiArray.length; i++) {
        tempASCII = asciiArray[i].charCodeAt(0);
        tempHex = tempASCII.toString(16);
        hex = hex + tempHex;
    }
    hex = hex.trim();
    return hex;
};
exports.encoding = encoding;
var decoding = function (hexString) {
    var stringOut = '';
    for (var i = 0; i < hexString.length; i++) {
        var data = hexString[i] + hexString[i + 1];
        var tempAsciiCode = parseInt(data, 16);
        stringOut = stringOut + String.fromCharCode(tempAsciiCode);
        i++;
    }
    return stringOut;
};
exports.decoding = decoding;
var parseData = function (data) {
    var render = { page: "game",
        game: {
            user: {
                name: "",
                badges: []
            },
            node: 0
        } };
    data.split("!").map(function (i) {
        var name = i.split("=")[0];
        var def = i.split("=")[1];
        switch (name) {
            case ("page"):
                render["page"] = def;
                break;
            case ("gameUserName"):
                render["game"]["user"]["name"] = def;
                break;
            case ("gameUserBadges"):
                var table_1 = [];
                def.split(",").map(function (i) {
                    var ii = i.split("_");
                    table_1.push({ name: ii[0], nbr: +ii[1] });
                });
                render["game"]["user"]["badges"] = table_1;
                break;
            case ("gameNode"):
                render["game"]["node"] = +def;
                break;
            default: break;
        }
    });
    return render;
};
exports.parseData = parseData;
var stringifyData = function (info) {
    var badge = "";
    info["game"]["user"]["badges"].map(function (m) {
        badge += m.name + "_" + m.nbr + ",";
        badge = badge.substring(0, badge.length - 1);
    });
    var render = "page=" + info["page"] + "!" +
        ("gameUserName=" + info["game"]["user"]["name"] + "!") +
        ("gameUserBadges=" + badge + "!") +
        ("gameNode=" + info["game"]["node"] + "!");
    return render;
};
exports.stringifyData = stringifyData;
var cheminLoad = "page=loadGame!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
var cheminNewGame = "page=newGame!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
var cheminHome = "page=home!gameUserName=Nobody!gameUserBadges=joueur_0!node=0";
var getInfoFromUrl = function () {
    var info;
    window.location.search != "" ?
        info = exports.parseData(exports.decoding(window.location.search.split("=")[1]))
        :
            info = exports.parseData(cheminLoad);
    return info;
};
exports.getInfoFromUrl = getInfoFromUrl;
var getInfoFromCookie = function (nameSave) {
    switch (nameSave) {
        case ("load"): return exports.parseData(cheminLoad);
        case ("newGame"): return exports.parseData(cheminNewGame);
        case ("home"): return exports.parseData(cheminHome);
        default: return exports.parseData(exports.decoding(("" + document.cookie).split(nameSave + "=")[1].split(";")[0]));
    }
};
exports.getInfoFromCookie = getInfoFromCookie;
var saveOnCookie = function (nameSave, save) {
    document.cookie = nameSave + "=" + (exports.encoding(exports.stringifyData(save))) + "; SameSite=Lax";
};
exports.saveOnCookie = saveOnCookie;
var deleteCookie = function (nameSave) {
    document.cookie = nameSave + "=" + (exports.encoding(exports.stringifyData(exports.getInfoFromCookie(nameSave)))) + "; SameSite=Lax; expires=Thu, 01 Jan 1970 00:00:00 UTC'";
};
exports.deleteCookie = deleteCookie;
var getNameOfUser = function () {
    var data = window.location.search.split("?");
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var d = data_1[_i];
        if (d.split("=")[0] == "user")
            return d.split("=")[1];
    }
    return "home";
};
exports.getNameOfUser = getNameOfUser;


/***/ }),

/***/ "./ts/App/tools/parsingContent.ts":
/*!****************************************!*\
  !*** ./ts/App/tools/parsingContent.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.parsingText = void 0;
var parsingText = function (textFUll) {
    var parseText = textFUll.split("$");
    var render = "";
    for (var _i = 0, parseText_1 = parseText; _i < parseText_1.length; _i++) {
        var text = parseText_1[_i];
        var module_1 = "";
        switch (text.split("-")[0]) {
            case ("p"):
                var className = "";
                for (var _a = 0, _b = text.split("-"); _a < _b.length; _a++) {
                    var c = _b[_a];
                    className += c + " ";
                }
                render += "<p class=\"\n                " + className + "\n                \">";
                module_1 = "p";
                break;
            case ("span"):
                render += "<span class=\"annotation\">";
                break;
            case ("close"):
                render += "</" + module_1 + ">";
                break;
            default:
                render += text;
                break;
        }
    }
    return render;
};
exports.parsingText = parsingText;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*************************!*\
  !*** ./ts/App/index.ts ***!
  \*************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var encoding_1 = __webpack_require__(/*! ./tools/encoding */ "./ts/App/tools/encoding.ts");
var Game_1 = __webpack_require__(/*! ./Components/game/Game */ "./ts/App/Components/game/Game.ts");
var loadGame_1 = __webpack_require__(/*! ./Components/loadGame/loadGame */ "./ts/App/Components/loadGame/loadGame.ts");
var newGame_1 = __webpack_require__(/*! ./Components/newGame/newGame */ "./ts/App/Components/newGame/newGame.ts");
var Home_1 = __webpack_require__(/*! ./Components/home/Home */ "./ts/App/Components/home/Home.ts");
//get info
var info;
switch (encoding_1.getNameOfUser()) {
    case ("load"):
        info = encoding_1.getInfoFromCookie("load");
        break;
    case ("newGame"):
        info = encoding_1.getInfoFromCookie("newGame");
        break;
    default:
        info = encoding_1.getInfoFromCookie(encoding_1.getNameOfUser());
        break;
}
// init function root constuctor
var App = function (page) {
    document.getElementById("root").innerHTML =
        "\n        " + page + "\n    ";
};
//write page
switch (info.page) {
    case ("game"):
        //console.log("game");
        App(Game_1.Game(info));
        Game_1.eventGame(info);
        break;
    case ("loadGame"):
        //console.log("loadGame");
        App(loadGame_1.loadGame(info));
        loadGame_1.eventLoadGame(info);
        break;
    case ("newGame"):
        //console.log("newGame");
        App(newGame_1.newGame(info));
        newGame_1.eventNewGame(info);
        break;
    case ("home"):
        //console.log("home");
        App(Home_1.Home(info));
        Home_1.eventHome(info);
        break;
    default: break;
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvcHJvZmlsL3Byb2ZpbC50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9ob21lL0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvaG9tZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbG9hZEdhbWUvbG9hZEdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbG9hZEdhbWUvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2xvYWRHYW1lL21haW4vc2F2ZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9uZXdHYW1lL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9uZXdHYW1lL25ld0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvc2VjdGlvbi9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL3Rvb2xzL2VuY29kaW5nLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC90b29scy9wYXJzaW5nQ29udGVudC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUdB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Q1osMEJBQTBCO1FBQzFCLEdBQUcsQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsd0JBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNO0lBQ1YsS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUNYLHlCQUF5QjtRQUN6QixHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLHNCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsTUFBTTtJQUNWLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDUixzQkFBc0I7UUFDdEIsR0FBRyxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsTUFBTTtJQUVWLE9BQU8sQ0FBQyxPQUFNO0NBQ2pCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7UHJvZmlsLCBldmVudFByb2ZpbH0gZnJvbSBcIi4vcHJvZmlsL3Byb2ZpbFwiO1xyXG5pbXBvcnQge01haW4sIGV2ZW50TWFpbn0gZnJvbSBcIi4vbWFpbi9tYWluXCI7XHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwPsOqdGVzLXZvdXMgc3VyIGRlIGNob2lzaXIgY2UgY2hlbWluPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZVllc1wiPk91aTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlTm9cIj5Ob248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tLS0tLSAtLT5cclxuICAgIGBcclxuICAgIHJldHVybiAoYFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICAke1Byb2ZpbChpbmZvKX1cclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgJHtNYWluKGluZm8pfVxyXG4gICAgPC9tYWluPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICAke0Zvb3RlcigpfVxyXG4gICAgPC9mb290ZXI+XHJcbiAgICBgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZXZlbnRNYWluKGluZm8pO1xyXG4gICAgZXZlbnRQcm9maWwoKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge2dldEluZm9Gcm9tQ29va2llLCBzYXZlT25Db29raWUsIGdldE5hbWVPZlVzZXIsIGVuY29kaW5nLCBzdHJpbmdpZnlEYXRhfSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuaW1wb3J0IHtOb2RlRWxlbWVudH0gZnJvbSBcIi4vbm9kZVwiO1xyXG5pbXBvcnQge1BhdGhzRWxlbWVudH0gZnJvbSBcIi4vcGF0aHNcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9qc29uL3BhdGhzLmpzb25cIikgYXMgQXJyYXk8Tm9kZT47XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIG5vZGVcIiBpZD1cIm5vZGVcIj5cclxuICAgICAgICAke05vZGVFbGVtZW50KGRhdGFbaW5mby5nYW1lLm5vZGVdKX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMgcGF0aHNcIiBpZD1cInBhdGhzXCI+XHJcbiAgICAgICAgJHtQYXRoc0VsZW1lbnQoZGF0YVtpbmZvLmdhbWUubm9kZV1bXCJwYXRoc1wiXSl9XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSBcclxuZXhwb3J0IGNvbnN0IGV2ZW50TWFpbiA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIC8vb3RoZXIgXHJcblxyXG4gICAgZnVuY3Rpb24gdmFsaWRQYXRoKGlkOnN0cmluZyl7XHJcbiAgICAgICAgdmFyIHBhdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF0aCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmlkID09IGlkKXtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbkZvY3VzXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LmFkZChcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBDb25maXJtUGF0aFwiKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle3BhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO31cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5Gb2N1c09uUGF0aCgpe1xyXG4gICAgICAgIHZhciBwYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3BhdGgnKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYXRoXCIpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhdGhzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIHBhdGhzW2luZGV4XS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFsaWRQYXRoKHBhdGhzW2luZGV4XS5pZCk7ICBcclxuICAgICAgICAgICAgY29uc3QgcG9wVXBDaG9pY2VZZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VZZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LmZvckVhY2goYyA9PiB7cG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LnJlbW92ZShjKX0gKTtcclxuICAgICAgICAgICAgcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LmFkZChwYXRoc1tpbmRleF0uY2xhc3NMaXN0WzFdKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb24gZXZlbnRcclxuICAgIGNvbnN0IHBvcFVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDbG9zZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VObyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZU5vJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vc2V0IGZ1bmN0aW9uIGluIGV2ZW50IG9uIGNsaWNrXHJcbiAgICBwb3BVcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZU5vLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZVllcy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmFtZVNhdmUgPSBnZXROYW1lT2ZVc2VyKCk7XHJcbiAgICAgICAgICAgIGlmIChuYW1lU2F2ZSE9IFwibG9hZFwiKXtcclxuICAgICAgICAgICAgICAgIGxldCBpbmZvID0gZ2V0SW5mb0Zyb21Db29raWUobmFtZVNhdmUpO1xyXG4gICAgICAgICAgICAgICAgaW5mby5nYW1lLm5vZGUgPSArcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0WzBdO1xyXG4gICAgICAgICAgICAgICAgc2F2ZU9uQ29va2llKG5hbWVTYXZlLGluZm8pO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gP3VzZXI9JHtuYW1lU2F2ZX1gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge2NvbnNvbGUuZXJyb3IoXCJub20gZCd1c2VyIGluY29ubnVcIik7fVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbWFqTWFpbiA9IChhY3R1ZWxOb2RlID0gMCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YSA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9qc29uL3BhdGhzLmpzb25cIikgYXMgQXJyYXk8Tm9kZT47XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub2RlXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBOb2RlRWxlbWVudChkYXRhW2FjdHVlbE5vZGVdKTtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhdGhzXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBQYXRoc0VsZW1lbnQoZGF0YVthY3R1ZWxOb2RlXVtcInBhdGhzXCJdKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Tm9kZX0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7cGFyc2luZ1RleHR9IGZyb20gXCIuLi8uLi8uLi90b29scy9wYXJzaW5nQ29udGVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5vZGVFbGVtZW50ID0gKG5vZGU6Tm9kZSkgPT4ge1xyXG4gICAgcmV0dXJuYFxyXG4gICAgPGRpdiBjbGFzcz1cImEgZGVjb1wiIGlkPVwibm9kZURlY29cIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIGNvbnRlbnRcIiBpZD1cIm5vZGVDb250ZW50XCI+XHJcbiAgICAgICAgJHtwYXJzaW5nVGV4dChub2RlLmNvbnRlbnQpfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn1cclxuXHJcbi8vIDxwIGNsYXNzPVwidGFsayBucGNcIj5cclxuLy8gICAgIFF1aSDDqnRlcy12b3VzPyBcclxuLy8gICAgIDxzcGFuIGNsYXNzPVwiYW5ub3RhdGlvblwiPmN1cmlldXg8L3NwYW4+PC9wPlxyXG4vLyA8cCBjbGFzcz1cIm5hcnJhdG9yXCI+XHJcbi8vICAgICBVbiBqZXVuZSBob21tZSB2b3VzIHJlZ2FyZGUgZGUgaGF1dCB0YW50IGRpcyB2b3VzIHNvcnRleiBkZSBjZSBxdWkgdm91cyBzZW1ibGUgw6p0cmUgdW4gbG9uZyBzb21tZWlsLlxyXG4vLyAgICAgVm9zIGFydGljdWxhdGlvbiBzb250IHRvdXRlIGVuZG9sb3JpcyBldCB1biBtYWwgZGUgY3JhbmUgcGFzc8OpIGNlIHJlc3NlbnQgYXUgZm9uZCBkZSB2b3RyZSBlc3ByaXQgZW1icnVtw6kuXHJcbi8vIDwvcD48cCBjbGFzcz1cIm5hcnJhdG9yXCI+XHJcbi8vICAgICBPdSDDqnRlcy12b3VzPyBcclxuLy8gPC9wPiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7UGF0aH0gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL25vZGVUeXBlXCI7XHJcbmltcG9ydCB7cGFyc2luZ1RleHR9IGZyb20gXCIuLi8uLi8uLi90b29scy9wYXJzaW5nQ29udGVudFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFBhdGhzRWxlbWVudCA9IChwYXRoczpBcnJheTxQYXRoPikgPT4ge1xyXG4gICAgbGV0IHJlbmRlciA9IFwiXCI7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcmVuZGVyICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF0aCAke3BhdGhzW2luZGV4XS5wYXRoSUR9XCIgaWQ9XCJwYXRoJHtpbmRleH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYSBjb250ZW50XCI+XHJcbiAgICAgICAgICAgICR7cGFyc2luZ1RleHQocGF0aHNbaW5kZXhdLmNvbnRlbnQpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImIgY29uZmlybWF0aW9uXCI+PGRpdiBjbGFzcz1cImFcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9XCJiXCI+PC9kaXY+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgICAgICBgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG4iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2ZpbCA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiIGlkPVwicHJvZmlsUGljdHVyZVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi9pbWcvdG9mLnBuZ1wiIGFsdD1cIlwiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYlwiIGlkPVwicHJvZmlsSW5mb1wiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPiR7aW5mby5nYW1lLnVzZXIubmFtZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2ZpbE5hdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYVwiID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBuYW1lPVwiY2hlY2tib3hWaWV3QmFkZ2VQcm9maWxcIiBpZD1cImNoZWNrYm94Vmlld0JhZGdlUHJvZmlsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hlY2tib3hEZWNvXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYlwiID48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJkXCI+PC9kaXY+XHJcbiAgICBgfVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50UHJvZmlsID0gKCkgPT4ge1xyXG5cclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIlxyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgSG9tZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInRleHRQb3BVcFwiPkNoYXJnZXIgbGEgcGFydGllPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZVllc1wiPk91aTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlTm9cIj5Ob248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tLS0tLSAtLT5cclxuICAgIGBcclxuICAgIHJldHVybiAoYFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICBcclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgJHtNYWluKCl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudEhvbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge2dldEluZm9Gcm9tQ29va2llLCBwYXJzZURhdGEsIGRlY29kaW5nfSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibm9kZVwiPlxyXG4gICAgICAgIGhvbWVcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMgcGF0aHNcIiBpZD1cInBhdGhzXCI+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufSBcclxuZXhwb3J0IGNvbnN0IGV2ZW50TWFpbiA9ICgpID0+IHtcclxuXHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge01haW4sIGV2ZW50TWFpbn0gZnJvbSBcIi4vbWFpbi9tYWluXCJcclxuaW1wb3J0IHtGb290ZXIsIGV2ZW50Rm9vdGVyfSBmcm9tIFwiLi4vc2VjdGlvbi9mb290ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGxvYWRHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwidGV4dFBvcFVwXCI+Q2hhcmdlciBsYSBwYXJ0aWU/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50TG9hZEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge0luZm99IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5pbXBvcnQge2dldEluZm9Gcm9tQ29va2llLCBwYXJzZURhdGEsIGRlY29kaW5nfSBmcm9tIFwiLi4vLi4vLi4vdG9vbHMvZW5jb2RpbmdcIjtcclxuaW1wb3J0IHtTYXZlfSBmcm9tIFwiLi9zYXZlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIG5vZGVcIiBpZD1cIm5vZGVcIj5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwicGF0aHNcIj5cclxuICAgICAgICAke1NhdmUoKX1cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKCkgPT4ge1xyXG4gICAgLy9vdGhlciBcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZFBhdGgoaWQ6c3RyaW5nKXtcclxuICAgICAgICB2YXIgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkU2F2ZScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmlkID09IGlkKXtcclxuICAgICAgICAgICAgICAgIGlmIChwYXRoc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJvbkZvY3VzXCIpKXtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LmFkZChcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicG9wVXBDb25maXJtUGF0aFwiKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle3BhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO31cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYW5Gb2N1c09uUGF0aCgpe1xyXG4gICAgICAgIHZhciBsb2FkU2F2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdsb2FkU2F2ZScpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9hZFNhdmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxvYWRTYXZlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwib25Gb2N1c1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbG9hZFNhdmVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImxvYWRTYXZlXCIpO1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxvYWRTYXZlcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICBsb2FkU2F2ZXNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWxpZFBhdGgobG9hZFNhdmVzW2luZGV4XS5pZCk7ICBcclxuICAgICAgICAgICAgY29uc3QgcG9wVXBDaG9pY2VZZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VZZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LmZvckVhY2goYyA9PiB7cG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LnJlbW92ZShjKX0gKTtcclxuICAgICAgICAgICAgcG9wVXBDaG9pY2VZZXMuY2xhc3NMaXN0LmFkZChsb2FkU2F2ZXNbaW5kZXhdLmNsYXNzTGlzdFsyXSk7XHJcbiAgICAgICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXh0UG9wVXBcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChsb2FkU2F2ZXNbaW5kZXhdLmNsYXNzTGlzdFsyXSA9PSBcIm5ld0dhbWVcIilcclxuICAgICAgICAgICAgICAgIHRleHQuaW5uZXJIVE1MID0gXCJDb21tZW5jZXIgdW5lIG5vdXZlbGxlIHBhcnRpZT9cIjtcclxuICAgICAgICAgICAgZWxzZSB0ZXh0LmlubmVySFRNTCA9IGBDaGFyZ2VyIGxhIHBhcnRpZSBcIiR7bG9hZFNhdmVzW2luZGV4XS5jbGFzc0xpc3RbMl19XCIgP2A7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9zZXR1cCB2YWxpZGF0aW9uIGV2ZW50XHJcbiAgICBjb25zdCBwb3BVcENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2xvc2UnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHBvcFVwQ2hvaWNlTm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VObycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VZZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDaG9pY2VZZXMnKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAvL3NldCBmdW5jdGlvbiBpbiBldmVudCBvbiBjbGlja1xyXG4gICAgcG9wVXBDbG9zZS5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENvbmZpcm1QYXRoJykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNsZWFuRm9jdXNPblBhdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcG9wVXBDaG9pY2VOby5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENvbmZpcm1QYXRoJykgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgICAgIGNsZWFuRm9jdXNPblBhdGgoKVxyXG4gICAgICAgIH0pO1xyXG4gICAgcG9wVXBDaG9pY2VZZXMuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQubG9jYXRpb24uaHJlZj1gP3VzZXI9JHtwb3BVcENob2ljZVllcy5jbGFzc0xpc3RbMF19YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICk7XHJcbiAgICBcclxuXHJcbn1cclxuZXhwb3J0IGNvbnN0IG1hak1haW4gPSAoYWN0dWVsTm9kZSA9IDApID0+IHtcclxuICAgIFxyXG59IiwiZXhwb3J0IGNvbnN0IFNhdmUgPSAoKSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIjtcclxuICAgIGxldCBzYXZlQnJ1dDogQXJyYXk8c3RyaW5nPjtcclxuICAgIGlmIChkb2N1bWVudC5jb29raWUuaW5kZXhPZihcIjtcIikgIT09IC0xKVxyXG4gICAgICAgIHtzYXZlQnJ1dCA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdChcIjtcIik7fVxyXG4gICAgZWxzZSB7c2F2ZUJydXQgPSBbZG9jdW1lbnQuY29va2llXTt9XHJcbiAgICBsZXQgc2F2ZTogQXJyYXk8e25hbWU6c3RyaW5nLGRhdGE6c3RyaW5nfT4gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2F2ZUJydXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBcclxuICAgICAgICBzYXZlLnB1c2goeyBuYW1lOnNhdmVCcnV0W2ldLnNwbGl0KFwiPVwiKVswXSAsIGRhdGE6c2F2ZUJydXRbaV0uc3BsaXQoXCI9XCIpWzFdIH0pO1xyXG4gICAgICAgIGlmIChzYXZlW2ldLm5hbWUgIT0gXCJsb2FkXCIpe1xyXG4gICAgICAgIHJlbmRlciArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdGggbG9hZFNhdmUgJHtzYXZlW2ldLm5hbWV9XCIgaWQ9XCJwYXRoJHtpfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYSBjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAke3NhdmVbaV0ubmFtZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiIGNvbmZpcm1hdGlvblwiPjxkaXYgY2xhc3M9XCJhXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgfVxyXG4gICAgfVxyXG4gICAgcmVuZGVyICs9IFxyXG4gICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXRoIGxvYWRTYXZlIG5ld0dhbWVcIiBpZD1cIm5ld3BhdGhcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImEgY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgTk9VVkVMTEUgUEFSVElFXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFza1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYiBjb25maXJtYXRpb25cIj48ZGl2IGNsYXNzPVwiYVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgICAgIDwvZGl2PjxkaXYgY2xhc3M9XCJiXCI+PC9kaXY+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7c2F2ZU9uQ29va2llLCBwYXJzZURhdGEsIGdldE5hbWVPZlVzZXJ9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJuZXdHYW1lQmdTdG9yeVwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGFsayBucGNcIj5CaWVudmVudWU8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJuYXJyYXRvclwiPmNvbnRleHRlIGRlIGwnaGlzdG9pcmU8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJmb3JtTmV3R2FtZVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPk5vdXZlbGxlIHBhcnRpZTwvcD5cclxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJGTkduYW1lXCIgcGxhY2Vob2xkZXI9XCJub20gZHUgcGVyc29ubmFnZVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBpZD1cIkZOR2Vycm9yXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwiRk5Hc3VibWl0XCI+Q29tbWVuY2VyIGwnYXZlbnR1cmU8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKCkgPT4ge1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRk5Hc3VibWl0XCIpIGFzIEhUTUxFbGVtZW50KVxyXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbmV3R2FtZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XHJcbiAgICBsZXQgZXJyb3IgPSBcIlwiO1xyXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRk5HbmFtZVwiKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgaWYoIS9eW2EtekEtWl0vLnRlc3QobmFtZS52YWx1ZSkgfHwgbmFtZS52YWx1ZS5sZW5ndGggPCAyKSAge2Vycm9yID0gXCJub20gaW52YWxpZGVcIjt9XHJcbiAgICBpZiAoZXJyb3IgPT0gXCJcIikgXHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGBwYWdlPWdhbWUhZ2FtZVVzZXJOYW1lPSR7bmFtZS52YWx1ZX0hZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wYDtcclxuICAgICAgICBzYXZlT25Db29raWUobmFtZS52YWx1ZSwgcGFyc2VEYXRhKGRhdGEpKTtcclxuICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWA/dXNlcj0ke25hbWUudmFsdWV9YDtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkZOR2Vycm9yXCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBgPHAgc3R5bGU9XCJjb2xvcjpyZWRcIj4ke2Vycm9yfTwvcD5gO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIlxyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MICs9IFxyXG4gICAgYFxyXG4gICAgPCEtLSBwb3AtdXAgLS0+XHJcbiAgICA8ZGl2IGlkPVwicG9wVXBDb25maXJtUGF0aFwiIGNsYXNzPVwiaGlkZGVuXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRcIj48ZGl2IGlkPVwicG9wVXBDbG9zZVwiIGNsYXNzPVwiY2xvc2VcIj48L2Rpdj4gPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBpZD1cInRleHRQb3BVcFwiPkNoYXJnZXIgbGEgcGFydGllPzwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaG9pY2VcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZVllc1wiPk91aTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlTm9cIj5Ob248L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tIC0tLS0tLSAtLT5cclxuICAgIGBcclxuICAgIHJldHVybiAoYFxyXG4gICAgPGhlYWRlcj5cclxuICAgICAgICBcclxuICAgIDwvaGVhZGVyPlxyXG4gICAgPG1haW4+XHJcbiAgICAgICAgJHtNYWluKCl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudE5ld0dhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oKTtcclxuICAgIGV2ZW50Rm9vdGVyKCk7XHJcbn0iLCJpbXBvcnQge2dldE5hbWVPZlVzZXJ9IGZyb20gXCIuLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICAgIGxldCByZW5kZXIgPSBcIlwiO1xyXG5cclxuICAgIGxldCB1c2VyID0gZ2V0TmFtZU9mVXNlcigpO1xyXG5cclxuICAgIHJlbmRlciArPSBcclxuICAgIGA8ZGl2IGNsYXNzPVwiYVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhXCIgaWQ9XCJob21lT25Gb290ZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIj9cIj48aSBjbGFzcz1cImZhcyBmYS1ob21lXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYlwiIGlkPVwibG9hZE9uRm9vdGVyXCI+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCI/dXNlcj1sb2FkXCI+PGkgY2xhc3M9XCJmYXMgZmEtc2F2ZVwiPjwvaT48L2E+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY1wiPjwvZGl2PmA7XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRGb290ZXIgPSAoKSA9PiB7XHJcbiAgICAvL2V2ZW50XHJcbn0iLCJpbXBvcnQge0luZm8sIEJhZGdlfSBmcm9tIFwiLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCAgZW5jb2RpbmcgPSAoYXNjaWlTdHJpbmc6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgaGV4ID0gJyc7XHJcbiAgICBsZXQgdGVtcEFTQ0lJLCB0ZW1wSGV4O1xyXG4gICAgY29uc3QgYXNjaWlBcnJheSA9IGFzY2lpU3RyaW5nLnNwbGl0KCcnKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXNjaWlBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRlbXBBU0NJSSA9IGFzY2lpQXJyYXlbaV0uY2hhckNvZGVBdCgwKVxyXG4gICAgICAgIHRlbXBIZXggPSB0ZW1wQVNDSUkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGhleCA9IGhleCArIHRlbXBIZXg7XHJcbiAgICB9XHJcbiAgICBoZXggPSBoZXgudHJpbSgpO1xyXG4gICAgcmV0dXJuIGhleDtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBkZWNvZGluZyA9IChoZXhTdHJpbmc6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgc3RyaW5nT3V0ID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhleFN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBkYXRhID0gaGV4U3RyaW5nW2ldICsgaGV4U3RyaW5nW2krMV07XHJcbiAgICAgICAgbGV0IHRlbXBBc2NpaUNvZGUgPSBwYXJzZUludChkYXRhLCAxNik7XHJcbiAgICAgICAgc3RyaW5nT3V0ID0gc3RyaW5nT3V0ICsgU3RyaW5nLmZyb21DaGFyQ29kZSh0ZW1wQXNjaWlDb2RlKTtcclxuICAgICAgICBpKys7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nT3V0O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcGFyc2VEYXRhID0gKGRhdGE6c3RyaW5nKSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyOkluZm8gPSBcclxuICAgIHtwYWdlOiBcImdhbWVcIixcclxuICAgIGdhbWU6IHtcclxuICAgICAgICB1c2VyOntcclxuICAgICAgICAgICAgbmFtZTpcIlwiLFxyXG4gICAgICAgICAgICBiYWRnZXM6W11cclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vZGU6MFxyXG4gICAgfX1cclxuICAgIGRhdGEuc3BsaXQoXCIhXCIpLm1hcChpID0+IHtcclxuICAgICAgICBjb25zdCBuYW1lPSBpLnNwbGl0KFwiPVwiKVswXTtcclxuICAgICAgICBjb25zdCBkZWYgPSBpLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgICAgICBzd2l0Y2gobmFtZSl7XHJcbiAgICAgICAgICAgIGNhc2UoXCJwYWdlXCIpOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wicGFnZVwiXSA9IGRlZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiZ2FtZVVzZXJOYW1lXCIpOlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJuYW1lXCJdID0gZGVmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnYW1lVXNlckJhZGdlc1wiKTpcclxuICAgICAgICAgICAgICAgIGxldCB0YWJsZTpBcnJheTxCYWRnZT4gPSBbXTtcclxuICAgICAgICAgICAgICAgIGRlZi5zcGxpdChcIixcIikubWFwKGkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpaSA9IGkuc3BsaXQoXCJfXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGUucHVzaCh7bmFtZTogaWlbMF0sIG5icjogK2lpWzFdfSlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJiYWRnZXNcIl0gPSB0YWJsZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiZ2FtZU5vZGVcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJnYW1lXCJdW1wibm9kZVwiXSA9ICtkZWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHN0cmluZ2lmeURhdGEgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBsZXQgYmFkZ2U9XCJcIjtcclxuICAgIFxyXG4gICAgaW5mb1tcImdhbWVcIl1bXCJ1c2VyXCJdW1wiYmFkZ2VzXCJdLm1hcChtID0+IHtcclxuICAgICAgICBiYWRnZSArPSBgJHttLm5hbWV9XyR7bS5uYnJ9LGA7XHJcbiAgICAgICAgYmFkZ2UgPSBiYWRnZS5zdWJzdHJpbmcoMCxiYWRnZS5sZW5ndGgtMSlcclxuICAgICAgICB9KVxyXG4gICAgbGV0IHJlbmRlciA9IFxyXG4gICAgYHBhZ2U9JHtpbmZvW1wicGFnZVwiXX0hYCtcclxuICAgIGBnYW1lVXNlck5hbWU9JHtpbmZvW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJuYW1lXCJdfSFgK1xyXG4gICAgYGdhbWVVc2VyQmFkZ2VzPSR7YmFkZ2V9IWArXHJcbiAgICBgZ2FtZU5vZGU9JHtpbmZvW1wiZ2FtZVwiXVtcIm5vZGVcIl19IWBcclxuICAgIDtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbn1cclxuXHJcbmNvbnN0IGNoZW1pbkxvYWQgPSBcInBhZ2U9bG9hZEdhbWUhZ2FtZVVzZXJOYW1lPU5vYm9keSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBcIjtcclxuY29uc3QgY2hlbWluTmV3R2FtZSA9IFwicGFnZT1uZXdHYW1lIWdhbWVVc2VyTmFtZT1Ob2JvZHkhZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wXCI7XHJcbmNvbnN0IGNoZW1pbkhvbWUgPSBcInBhZ2U9aG9tZSFnYW1lVXNlck5hbWU9Tm9ib2R5IWdhbWVVc2VyQmFkZ2VzPWpvdWV1cl8wIW5vZGU9MFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldEluZm9Gcm9tVXJsID0gKCkgPT4ge1xyXG4gICAgbGV0IGluZm86SW5mbztcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggIT0gXCJcIj9cclxuICAgIGluZm8gPSBwYXJzZURhdGEoZGVjb2Rpbmcod2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj1cIilbMV0pKVxyXG46XHJcbiAgICBpbmZvID0gcGFyc2VEYXRhKGNoZW1pbkxvYWQpO1xyXG4gICAgcmV0dXJuIGluZm87XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJbmZvRnJvbUNvb2tpZSA9IChuYW1lU2F2ZTpzdHJpbmcpID0+IHtcclxuICAgIHN3aXRjaCAobmFtZVNhdmUpe1xyXG4gICAgICAgIGNhc2UoXCJsb2FkXCIpOiAgIHJldHVybiBwYXJzZURhdGEoY2hlbWluTG9hZCk7XHJcbiAgICAgICAgY2FzZShcIm5ld0dhbWVcIik6cmV0dXJuIHBhcnNlRGF0YShjaGVtaW5OZXdHYW1lKTtcclxuICAgICAgICBjYXNlKFwiaG9tZVwiKTogICByZXR1cm4gcGFyc2VEYXRhKGNoZW1pbkhvbWUpO1xyXG4gICAgICAgIGRlZmF1bHQ6ICAgICAgICByZXR1cm4gcGFyc2VEYXRhKGRlY29kaW5nKGAke2RvY3VtZW50LmNvb2tpZX1gLnNwbGl0KGAke25hbWVTYXZlfT1gKVsxXS5zcGxpdChcIjtcIilbMF0pKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmVPbkNvb2tpZSA9IChuYW1lU2F2ZTpzdHJpbmcsIHNhdmU6SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gYCR7bmFtZVNhdmV9PSR7KGVuY29kaW5nKHN0cmluZ2lmeURhdGEoc2F2ZSkpKX07IFNhbWVTaXRlPUxheGA7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVDb29raWUgPSAobmFtZVNhdmU6c3RyaW5nKSA9PiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lU2F2ZX09JHsoZW5jb2Rpbmcoc3RyaW5naWZ5RGF0YShnZXRJbmZvRnJvbUNvb2tpZShuYW1lU2F2ZSkpKSl9OyBTYW1lU2l0ZT1MYXg7IGV4cGlyZXM9VGh1LCAwMSBKYW4gMTk3MCAwMDowMDowMCBVVEMnYDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldE5hbWVPZlVzZXIgPSAoKSA9PiB7XHJcbiAgICBsZXQgZGF0YSA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc3BsaXQoXCI/XCIpXHJcbiAgICBmb3IgKGxldCBkIG9mIGRhdGEpe1xyXG4gICAgICAgIGlmKGQuc3BsaXQoXCI9XCIpWzBdID09IFwidXNlclwiKSByZXR1cm4gZC5zcGxpdChcIj1cIilbMV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJob21lXCI7XHJcbn0iLCJleHBvcnQgY29uc3QgcGFyc2luZ1RleHQgPSAodGV4dEZVbGw6c3RyaW5nKSA9PiB7XHJcbiAgICBjb25zdCBwYXJzZVRleHQgPSB0ZXh0RlVsbC5zcGxpdChcIiRcIik7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIlxyXG4gICAgZm9yIChsZXQgdGV4dCBvZiBwYXJzZVRleHQpe1xyXG4gICAgICAgIGxldCBtb2R1bGUgPSBcIlwiO1xyXG4gICAgICAgIHN3aXRjaCh0ZXh0LnNwbGl0KFwiLVwiKVswXSl7XHJcbiAgICAgICAgICAgIGNhc2UoXCJwXCIpOlxyXG4gICAgICAgICAgICAgICAgbGV0IGNsYXNzTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjIG9mIHRleHQuc3BsaXQoXCItXCIpKXtjbGFzc05hbWUrPSBjICsgXCIgXCJ9XHJcbiAgICAgICAgICAgICAgICByZW5kZXIgKz0gYDxwIGNsYXNzPVwiXHJcbiAgICAgICAgICAgICAgICAke2NsYXNzTmFtZX1cclxuICAgICAgICAgICAgICAgIFwiPmA7XHJcbiAgICAgICAgICAgICAgICBtb2R1bGUgPSBcInBcIjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwic3BhblwiKTpcclxuICAgICAgICAgICAgcmVuZGVyKz0gYDxzcGFuIGNsYXNzPVwiYW5ub3RhdGlvblwiPmBcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlKFwiY2xvc2VcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXIgKz0gYDwvJHttb2R1bGV9PmA7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJlbmRlciArPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQge0luZm99IGZyb20gXCIuL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIGdldE5hbWVPZlVzZXIsIGRlbGV0ZUNvb2tpZSwgc2F2ZU9uQ29va2llLCBwYXJzZURhdGF9IGZyb20gXCIuL3Rvb2xzL2VuY29kaW5nXCJcclxuaW1wb3J0IHtHYW1lLCBldmVudEdhbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvZ2FtZS9HYW1lXCI7XHJcbmltcG9ydCB7bG9hZEdhbWUsIGV2ZW50TG9hZEdhbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvbG9hZEdhbWUvbG9hZEdhbWVcIjtcclxuaW1wb3J0IHtuZXdHYW1lLCBldmVudE5ld0dhbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvbmV3R2FtZS9uZXdHYW1lXCI7XHJcbmltcG9ydCB7SG9tZSwgZXZlbnRIb21lfSBmcm9tIFwiLi9Db21wb25lbnRzL2hvbWUvSG9tZVwiO1xyXG5cclxuLy9nZXQgaW5mb1xyXG5sZXQgaW5mbzpJbmZvO1xyXG5zd2l0Y2goZ2V0TmFtZU9mVXNlcigpKXtcclxuICAgIGNhc2UoXCJsb2FkXCIpOmluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShcImxvYWRcIik7YnJlYWs7XHJcbiAgICBjYXNlKFwibmV3R2FtZVwiKTppbmZvID0gZ2V0SW5mb0Zyb21Db29raWUoXCJuZXdHYW1lXCIpO2JyZWFrO1xyXG4gICAgZGVmYXVsdDppbmZvID0gZ2V0SW5mb0Zyb21Db29raWUoZ2V0TmFtZU9mVXNlcigpKTticmVhaztcclxufVxyXG5cclxuXHJcbi8vIGluaXQgZnVuY3Rpb24gcm9vdCBjb25zdHVjdG9yXHJcbmNvbnN0IEFwcCA9IChwYWdlOnN0cmluZykgPT4ge1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSBhcyBIVE1MRWxlbWVudCkuaW5uZXJIVE1MID0gXHJcbiAgICBgXHJcbiAgICAgICAgJHtwYWdlfVxyXG4gICAgYFxyXG59XHJcblxyXG4vL3dyaXRlIHBhZ2Vcclxuc3dpdGNoKGluZm8ucGFnZSl7XHJcblxyXG4gICAgY2FzZShcImdhbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImdhbWVcIik7XHJcbiAgICAgICAgQXBwKEdhbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50R2FtZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UoXCJsb2FkR2FtZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibG9hZEdhbWVcIik7XHJcbiAgICAgICAgQXBwKGxvYWRHYW1lKGluZm8pKTtcclxuICAgICAgICBldmVudExvYWRHYW1lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZShcIm5ld0dhbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5ld0dhbWVcIik7XHJcbiAgICAgICAgQXBwKG5ld0dhbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50TmV3R2FtZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuICAgIGNhc2UoXCJob21lXCIpOlxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJob21lXCIpO1xyXG4gICAgICAgIEFwcChIb21lKGluZm8pKTtcclxuICAgICAgICBldmVudEhvbWUoaW5mbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgZGVmYXVsdDpicmVhaztcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==