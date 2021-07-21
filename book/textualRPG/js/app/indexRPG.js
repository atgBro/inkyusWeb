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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9nYW1lL0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL25vZGUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvZ2FtZS9tYWluL3BhdGhzLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2dhbWUvcHJvZmlsL3Byb2ZpbC50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9ob21lL0hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvaG9tZS9tYWluL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbG9hZEdhbWUvbG9hZEdhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvbG9hZEdhbWUvbWFpbi9tYWluLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC9Db21wb25lbnRzL2xvYWRHYW1lL21haW4vc2F2ZS50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9uZXdHYW1lL21haW4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi90cy9BcHAvQ29tcG9uZW50cy9uZXdHYW1lL25ld0dhbWUudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL0NvbXBvbmVudHMvc2VjdGlvbi9mb290ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL3Rvb2xzL2VuY29kaW5nLnRzIiwid2VicGFjazovLy8uL3RzL0FwcC90b29scy9wYXJzaW5nQ29udGVudC50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vdHMvQXBwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsdUdB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Q1osMEJBQTBCO1FBQzFCLEdBQUcsQ0FBQyxtQkFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDcEIsd0JBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixNQUFNO0lBQ1YsS0FBSSxDQUFDLFNBQVMsQ0FBQztRQUNYLHlCQUF5QjtRQUN6QixHQUFHLENBQUMsaUJBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25CLHNCQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkIsTUFBTTtJQUNWLEtBQUksQ0FBQyxNQUFNLENBQUM7UUFDUixzQkFBc0I7UUFDdEIsR0FBRyxDQUFDLFdBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLGdCQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsTUFBTTtJQUVWLE9BQU8sQ0FBQyxPQUFNO0NBQ2pCIiwiZmlsZSI6ImluZGV4UlBHLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtQcm9maWwsIGV2ZW50UHJvZmlsfSBmcm9tIFwiLi9wcm9maWwvcHJvZmlsXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIjtcclxuaW1wb3J0IHtGb290ZXIsIGV2ZW50Rm9vdGVyfSBmcm9tIFwiLi4vc2VjdGlvbi9mb290ZXJcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDwhLS0gcG9wLXVwIC0tPlxyXG4gICAgPGRpdiBpZD1cInBvcFVwQ29uZmlybVBhdGhcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+PGRpdiBpZD1cInBvcFVwQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+w6p0ZXMtdm91cyBzdXIgZGUgY2hvaXNpciBjZSBjaGVtaW4/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgICR7UHJvZmlsKGluZm8pfVxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oaW5mbyl9XHJcbiAgICA8L21haW4+XHJcbiAgICA8Zm9vdGVyPlxyXG4gICAgICAgICR7Rm9vdGVyKCl9XHJcbiAgICA8L2Zvb3Rlcj5cclxuICAgIGApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBldmVudE1haW4oaW5mbyk7XHJcbiAgICBldmVudFByb2ZpbCgpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIHNhdmVPbkNvb2tpZSwgZ2V0TmFtZU9mVXNlciwgZW5jb2RpbmcsIHN0cmluZ2lmeURhdGF9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5pbXBvcnQge05vZGVFbGVtZW50fSBmcm9tIFwiLi9ub2RlXCI7XHJcbmltcG9ydCB7UGF0aHNFbGVtZW50fSBmcm9tIFwiLi9wYXRoc1wiO1xyXG5pbXBvcnQge05vZGV9IGZyb20gXCIuLi8uLi8uLi9UeXBlcy9ub2RlVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibm9kZVwiPlxyXG4gICAgICAgICR7Tm9kZUVsZW1lbnQoZGF0YVtpbmZvLmdhbWUubm9kZV0pfVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwicGF0aHNcIj5cclxuICAgICAgICAke1BhdGhzRWxlbWVudChkYXRhW2luZm8uZ2FtZS5ub2RlXVtcInBhdGhzXCJdKX1cclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgLy9vdGhlciBcclxuXHJcbiAgICBmdW5jdGlvbiB2YWxpZFBhdGgoaWQ6c3RyaW5nKXtcclxuICAgICAgICB2YXIgcGF0aHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwYXRoJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGF0aHNbaV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9uRm9jdXNcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QuYWRkKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcENvbmZpcm1QYXRoXCIpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7cGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhbkZvY3VzT25QYXRoKCl7XHJcbiAgICAgICAgdmFyIHBhdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncGF0aCcpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBhdGhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInBhdGhcIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGF0aHMubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgcGF0aHNbaW5kZXhdLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YWxpZFBhdGgocGF0aHNbaW5kZXhdLmlkKTsgIFxyXG4gICAgICAgICAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuZm9yRWFjaChjID0+IHtwb3BVcENob2ljZVllcy5jbGFzc0xpc3QucmVtb3ZlKGMpfSApO1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuYWRkKHBhdGhzW2luZGV4XS5jbGFzc0xpc3RbMV0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vc2V0dXAgdmFsaWRhdGlvbiBldmVudFxyXG4gICAgY29uc3QgcG9wVXBDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENsb3NlJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZU5vID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlTm8nKSBhcyBIVE1MRWxlbWVudDtcclxuICAgIGNvbnN0IHBvcFVwQ2hvaWNlWWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ2hvaWNlWWVzJykgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgLy9zZXQgZnVuY3Rpb24gaW4gZXZlbnQgb24gY2xpY2tcclxuICAgIHBvcFVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDb25maXJtUGF0aCcpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjbGVhbkZvY3VzT25QYXRoKClcclxuICAgICAgICB9KTtcclxuICAgIHBvcFVwQ2hvaWNlTm8uYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICAgICBcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDb25maXJtUGF0aCcpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICBjbGVhbkZvY3VzT25QYXRoKClcclxuICAgICAgICB9KTtcclxuICAgIHBvcFVwQ2hvaWNlWWVzLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuYW1lU2F2ZSA9IGdldE5hbWVPZlVzZXIoKTtcclxuICAgICAgICAgICAgaWYgKG5hbWVTYXZlIT0gXCJsb2FkXCIpe1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShuYW1lU2F2ZSk7XHJcbiAgICAgICAgICAgICAgICBpbmZvLmdhbWUubm9kZSA9ICtwb3BVcENob2ljZVllcy5jbGFzc0xpc3RbMF07XHJcbiAgICAgICAgICAgICAgICBzYXZlT25Db29raWUobmFtZVNhdmUsaW5mbyk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWA/dXNlcj0ke25hbWVTYXZlfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7Y29uc29sZS5lcnJvcihcIm5vbSBkJ3VzZXIgaW5jb25udVwiKTt9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICApO1xyXG4gICAgXHJcblxyXG59XHJcbmV4cG9ydCBjb25zdCBtYWpNYWluID0gKGFjdHVlbE5vZGUgPSAwKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL2pzb24vcGF0aHMuanNvblwiKSBhcyBBcnJheTxOb2RlPjtcclxuICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vZGVcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IE5vZGVFbGVtZW50KGRhdGFbYWN0dWVsTm9kZV0pO1xyXG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGF0aHNcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IFBhdGhzRWxlbWVudChkYXRhW2FjdHVlbE5vZGVdW1wicGF0aHNcIl0pO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtOb2RlfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtwYXJzaW5nVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3BhcnNpbmdDb250ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgTm9kZUVsZW1lbnQgPSAobm9kZTpOb2RlKSA9PiB7XHJcbiAgICByZXR1cm5gXHJcbiAgICA8ZGl2IGNsYXNzPVwiYSBkZWNvXCIgaWQ9XCJub2RlRGVjb1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgY29udGVudFwiIGlkPVwibm9kZUNvbnRlbnRcIj5cclxuICAgICAgICAke3BhcnNpbmdUZXh0KG5vZGUuY29udGVudCl9XHJcbiAgICA8L2Rpdj5cclxuICAgIGBcclxufVxyXG5cclxuLy8gPHAgY2xhc3M9XCJ0YWxrIG5wY1wiPlxyXG4vLyAgICAgUXVpIMOqdGVzLXZvdXM/IFxyXG4vLyAgICAgPHNwYW4gY2xhc3M9XCJhbm5vdGF0aW9uXCI+Y3VyaWV1eDwvc3Bhbj48L3A+XHJcbi8vIDxwIGNsYXNzPVwibmFycmF0b3JcIj5cclxuLy8gICAgIFVuIGpldW5lIGhvbW1lIHZvdXMgcmVnYXJkZSBkZSBoYXV0IHRhbnQgZGlzIHZvdXMgc29ydGV6IGRlIGNlIHF1aSB2b3VzIHNlbWJsZSDDqnRyZSB1biBsb25nIHNvbW1laWwuXHJcbi8vICAgICBWb3MgYXJ0aWN1bGF0aW9uIHNvbnQgdG91dGUgZW5kb2xvcmlzIGV0IHVuIG1hbCBkZSBjcmFuZSBwYXNzw6kgY2UgcmVzc2VudCBhdSBmb25kIGRlIHZvdHJlIGVzcHJpdCBlbWJydW3DqS5cclxuLy8gPC9wPjxwIGNsYXNzPVwibmFycmF0b3JcIj5cclxuLy8gICAgIE91IMOqdGVzLXZvdXM/IFxyXG4vLyA8L3A+IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtQYXRofSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvbm9kZVR5cGVcIjtcclxuaW1wb3J0IHtwYXJzaW5nVGV4dH0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL3BhcnNpbmdDb250ZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgUGF0aHNFbGVtZW50ID0gKHBhdGhzOkFycmF5PFBhdGg+KSA9PiB7XHJcbiAgICBsZXQgcmVuZGVyID0gXCJcIjtcclxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXRocy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICByZW5kZXIgKz0gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYXRoICR7cGF0aHNbaW5kZXhdLnBhdGhJRH1cIiBpZD1cInBhdGgke2luZGV4fVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhIGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgJHtwYXJzaW5nVGV4dChwYXRoc1tpbmRleF0uY29udGVudCl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYiBjb25maXJtYXRpb25cIj48ZGl2IGNsYXNzPVwiYVwiPjxpIGNsYXNzPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImJcIj48L2Rpdj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgICAgIGAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcbiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZmlsID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCIgaWQ9XCJwcm9maWxQaWN0dXJlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuL2ltZy90b2YucG5nXCIgYWx0PVwiXCI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiXCIgaWQ9XCJwcm9maWxJbmZvXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+JHtpbmZvLmdhbWUudXNlci5uYW1lfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvZmlsTmF2XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhXCIgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja2JveFZpZXdCYWRnZVByb2ZpbFwiIGlkPVwiY2hlY2tib3hWaWV3QmFkZ2VQcm9maWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjaGVja2JveERlY29cIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiXCIgPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY1wiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImRcIj48L2Rpdj5cclxuICAgIGB9XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRQcm9maWwgPSAoKSA9PiB7XHJcblxyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiXHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBIb21lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwidGV4dFBvcFVwXCI+Q2hhcmdlciBsYSBwYXJ0aWU/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50SG9tZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbigpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIHBhcnNlRGF0YSwgZGVjb2Rpbmd9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBNYWluID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxkaXYgY2xhc3M9XCJhXCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYiBub2RlXCIgaWQ9XCJub2RlXCI+XHJcbiAgICAgICAgaG9tZVxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYyBwYXRoc1wiIGlkPVwicGF0aHNcIj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgYFxyXG59IFxyXG5leHBvcnQgY29uc3QgZXZlbnRNYWluID0gKCkgPT4ge1xyXG5cclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7TWFpbiwgZXZlbnRNYWlufSBmcm9tIFwiLi9tYWluL21haW5cIlxyXG5pbXBvcnQge0Zvb3RlciwgZXZlbnRGb290ZXJ9IGZyb20gXCIuLi9zZWN0aW9uL2Zvb3RlclwiXHJcblxyXG5leHBvcnQgY29uc3QgbG9hZEdhbWUgPSAoaW5mbzpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5ib2R5LmlubmVySFRNTCArPSBcclxuICAgIGBcclxuICAgIDwhLS0gcG9wLXVwIC0tPlxyXG4gICAgPGRpdiBpZD1cInBvcFVwQ29uZmlybVBhdGhcIiBjbGFzcz1cImhpZGRlblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkXCI+PGRpdiBpZD1cInBvcFVwQ2xvc2VcIiBjbGFzcz1cImNsb3NlXCI+PC9kaXY+IDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgPHAgaWQ9XCJ0ZXh0UG9wVXBcIj5DaGFyZ2VyIGxhIHBhcnRpZT88L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hvaWNlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VZZXNcIj5PdWk8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwb3BVcENob2ljZU5vXCI+Tm9uPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSAtLS0tLS0gLS0+XHJcbiAgICBgXHJcbiAgICByZXR1cm4gKGBcclxuICAgIDxoZWFkZXI+XHJcbiAgICAgICAgXHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxtYWluPlxyXG4gICAgICAgICR7TWFpbigpfVxyXG4gICAgPC9tYWluPlxyXG4gICAgPGZvb3Rlcj5cclxuICAgICAgICAke0Zvb3RlcigpfVxyXG4gICAgPC9mb290ZXI+XHJcbiAgICBgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZXZlbnRMb2FkR2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbigpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4uLy4uLy4uL1R5cGVzL2luZm9UeXBlXCI7XHJcbmltcG9ydCB7Z2V0SW5mb0Zyb21Db29raWUsIHBhcnNlRGF0YSwgZGVjb2Rpbmd9IGZyb20gXCIuLi8uLi8uLi90b29scy9lbmNvZGluZ1wiO1xyXG5pbXBvcnQge1NhdmV9IGZyb20gXCIuL3NhdmVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBgXHJcbiAgICA8ZGl2IGNsYXNzPVwiYVwiPjwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImIgbm9kZVwiIGlkPVwibm9kZVwiPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjIHBhdGhzXCIgaWQ9XCJwYXRoc1wiPlxyXG4gICAgICAgICR7U2F2ZSgpfVxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoKSA9PiB7XHJcbiAgICAvL290aGVyIFxyXG5cclxuICAgIGZ1bmN0aW9uIHZhbGlkUGF0aChpZDpzdHJpbmcpe1xyXG4gICAgICAgIHZhciBwYXRocyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRTYXZlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAocGF0aHNbaV0uaWQgPT0gaWQpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhdGhzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcIm9uRm9jdXNcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoc1tpXS5jbGFzc0xpc3QuYWRkKFwib25Gb2N1c1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwb3BVcENvbmZpcm1QYXRoXCIpIGFzIEhUTUxFbGVtZW50KS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7cGF0aHNbaV0uY2xhc3NMaXN0LnJlbW92ZShcIm9uRm9jdXNcIik7fVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGVhbkZvY3VzT25QYXRoKCl7XHJcbiAgICAgICAgdmFyIGxvYWRTYXZlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvYWRTYXZlJyk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2FkU2F2ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbG9hZFNhdmVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJvbkZvY3VzXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsb2FkU2F2ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibG9hZFNhdmVcIik7XHJcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbG9hZFNhdmVzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGxvYWRTYXZlc1tpbmRleF0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhbGlkUGF0aChsb2FkU2F2ZXNbaW5kZXhdLmlkKTsgIFxyXG4gICAgICAgICAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuZm9yRWFjaChjID0+IHtwb3BVcENob2ljZVllcy5jbGFzc0xpc3QucmVtb3ZlKGMpfSApO1xyXG4gICAgICAgICAgICBwb3BVcENob2ljZVllcy5jbGFzc0xpc3QuYWRkKGxvYWRTYXZlc1tpbmRleF0uY2xhc3NMaXN0WzJdKTtcclxuICAgICAgICAgICAgbGV0IHRleHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRleHRQb3BVcFwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGxvYWRTYXZlc1tpbmRleF0uY2xhc3NMaXN0WzJdID09IFwibmV3R2FtZVwiKVxyXG4gICAgICAgICAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBcIkNvbW1lbmNlciB1bmUgbm91dmVsbGUgcGFydGllP1wiO1xyXG4gICAgICAgICAgICBlbHNlIHRleHQuaW5uZXJIVE1MID0gYENoYXJnZXIgbGEgcGFydGllIFwiJHtsb2FkU2F2ZXNbaW5kZXhdLmNsYXNzTGlzdFsyXX1cIiA/YDtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3NldHVwIHZhbGlkYXRpb24gZXZlbnRcclxuICAgIGNvbnN0IHBvcFVwQ2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9wVXBDbG9zZScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgcG9wVXBDaG9pY2VObyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZU5vJykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICBjb25zdCBwb3BVcENob2ljZVllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb3BVcENob2ljZVllcycpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgIC8vc2V0IGZ1bmN0aW9uIGluIGV2ZW50IG9uIGNsaWNrXHJcbiAgICBwb3BVcENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZU5vLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvcFVwQ29uZmlybVBhdGgnKSBhcyBIVE1MRWxlbWVudCkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgICAgICAgICAgY2xlYW5Gb2N1c09uUGF0aCgpXHJcbiAgICAgICAgfSk7XHJcbiAgICBwb3BVcENob2ljZVllcy5hZGRFdmVudExpc3RlbmVyKFxyXG4gICAgICAgIFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmPWA/dXNlcj0ke3BvcFVwQ2hvaWNlWWVzLmNsYXNzTGlzdFswXX1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgKTtcclxuICAgIFxyXG5cclxufVxyXG5leHBvcnQgY29uc3QgbWFqTWFpbiA9IChhY3R1ZWxOb2RlID0gMCkgPT4ge1xyXG4gICAgXHJcbn0iLCJleHBvcnQgY29uc3QgU2F2ZSA9ICgpID0+IHtcclxuICAgIGxldCByZW5kZXIgPSBcIlwiO1xyXG4gICAgbGV0IHNhdmVCcnV0OiBBcnJheTxzdHJpbmc+O1xyXG4gICAgaWYgKGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKFwiO1wiKSAhPT0gLTEpXHJcbiAgICAgICAge3NhdmVCcnV0ID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiO1wiKTt9XHJcbiAgICBlbHNlIHtzYXZlQnJ1dCA9IFtkb2N1bWVudC5jb29raWVdO31cclxuICAgIGxldCBzYXZlOiBBcnJheTx7bmFtZTpzdHJpbmcsZGF0YTpzdHJpbmd9PiA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzYXZlQnJ1dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNhdmUucHVzaCh7IG5hbWU6c2F2ZUJydXRbaV0uc3BsaXQoXCI9XCIpWzBdICwgZGF0YTpzYXZlQnJ1dFtpXS5zcGxpdChcIj1cIilbMV0gfSk7XHJcbiAgICAgICAgaWYgKHNhdmVbaV0ubmFtZSAhPSBcImxvYWRcIil7XHJcbiAgICAgICAgcmVuZGVyICs9IGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGF0aCBsb2FkU2F2ZSAke3NhdmVbaV0ubmFtZX1cIiBpZD1cInBhdGgke2l9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhIGNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICR7c2F2ZVtpXS5uYW1lfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hc2tcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImIgY29uZmlybWF0aW9uXCI+PGRpdiBjbGFzcz1cImFcIj48aSBjbGFzcz1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPlxyXG4gICAgICAgICAgICA8L2Rpdj48ZGl2IGNsYXNzPVwiYlwiPjwvZGl2PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGB9XHJcbiAgICB9XHJcbiAgICByZW5kZXIgKz0gXHJcbiAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhdGggbG9hZFNhdmUgbmV3R2FtZVwiIGlkPVwibmV3cGF0aFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYSBjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBOT1VWRUxMRSBQQVJUSUVcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXNrXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiIGNvbmZpcm1hdGlvblwiPjxkaXYgY2xhc3M9XCJhXCI+PGkgY2xhc3M9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT5cclxuICAgICAgICAgICAgPC9kaXY+PGRpdiBjbGFzcz1cImJcIj48L2Rpdj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBgXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtzYXZlT25Db29raWUsIHBhcnNlRGF0YSwgZ2V0TmFtZU9mVXNlcn0gZnJvbSBcIi4uLy4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW4gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgPGRpdiBjbGFzcz1cImFcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiIG5vZGVcIiBpZD1cIm5ld0dhbWVCZ1N0b3J5XCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0YWxrIG5wY1wiPkJpZW52ZW51ZTwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cIm5hcnJhdG9yXCI+Y29udGV4dGUgZGUgbCdoaXN0b2lyZTwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImMgcGF0aHNcIiBpZD1cImZvcm1OZXdHYW1lXCI+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+Tm91dmVsbGUgcGFydGllPC9wPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIkZOR25hbWVcIiBwbGFjZWhvbGRlcj1cIm5vbSBkdSBwZXJzb25uYWdlXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGlkPVwiRk5HZXJyb3JcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJGTkdzdWJtaXRcIj5Db21tZW5jZXIgbCdhdmVudHVyZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgXHJcbn0gXHJcbmV4cG9ydCBjb25zdCBldmVudE1haW4gPSAoKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGTkdzdWJtaXRcIikgYXMgSFRNTEVsZW1lbnQpXHJcbiAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBuZXdHYW1lKCkpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbmV3R2FtZSA9ICgpID0+IHtcclxuICAgIGxldCBlcnJvciA9IFwiXCI7XHJcbiAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJGTkduYW1lXCIpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgICBpZighL15bYS16QS1aXS8udGVzdChuYW1lLnZhbHVlKSB8fCBuYW1lLnZhbHVlLmxlbmd0aCA8IDIpICB7ZXJyb3IgPSBcIm5vbSBpbnZhbGlkZVwiO31cclxuICAgIGlmIChlcnJvciA9PSBcIlwiKSBcclxuICAgIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYHBhZ2U9Z2FtZSFnYW1lVXNlck5hbWU9JHtuYW1lLnZhbHVlfSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBgO1xyXG4gICAgICAgIHNhdmVPbkNvb2tpZShuYW1lLnZhbHVlLCBwYXJzZURhdGEoZGF0YSkpO1xyXG4gICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLmhyZWY9YD91c2VyPSR7bmFtZS52YWx1ZX1gO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiRk5HZXJyb3JcIikgYXMgSFRNTEVsZW1lbnQpLmlubmVySFRNTCA9IGA8cCBzdHlsZT1cImNvbG9yOnJlZFwiPiR7ZXJyb3J9PC9wPmA7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtJbmZvfSBmcm9tIFwiLi4vLi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtNYWluLCBldmVudE1haW59IGZyb20gXCIuL21haW4vbWFpblwiXHJcbmltcG9ydCB7Rm9vdGVyLCBldmVudEZvb3Rlcn0gZnJvbSBcIi4uL3NlY3Rpb24vZm9vdGVyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdHYW1lID0gKGluZm86SW5mbykgPT4ge1xyXG4gICAgZG9jdW1lbnQuYm9keS5pbm5lckhUTUwgKz0gXHJcbiAgICBgXHJcbiAgICA8IS0tIHBvcC11cCAtLT5cclxuICAgIDxkaXYgaWQ9XCJwb3BVcENvbmZpcm1QYXRoXCIgY2xhc3M9XCJoaWRkZW5cIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZFwiPjxkaXYgaWQ9XCJwb3BVcENsb3NlXCIgY2xhc3M9XCJjbG9zZVwiPjwvZGl2PiA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHRcIj5cclxuICAgICAgICAgICAgICAgIDxwIGlkPVwidGV4dFBvcFVwXCI+Q2hhcmdlciBsYSBwYXJ0aWU/PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNob2ljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInBvcFVwQ2hvaWNlWWVzXCI+T3VpPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicG9wVXBDaG9pY2VOb1wiPk5vbjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgIDwhLS0gLS0tLS0tIC0tPlxyXG4gICAgYFxyXG4gICAgcmV0dXJuIChgXHJcbiAgICA8aGVhZGVyPlxyXG4gICAgICAgIFxyXG4gICAgPC9oZWFkZXI+XHJcbiAgICA8bWFpbj5cclxuICAgICAgICAke01haW4oKX1cclxuICAgIDwvbWFpbj5cclxuICAgIDxmb290ZXI+XHJcbiAgICAgICAgJHtGb290ZXIoKX1cclxuICAgIDwvZm9vdGVyPlxyXG4gICAgYClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50TmV3R2FtZSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGV2ZW50TWFpbigpO1xyXG4gICAgZXZlbnRGb290ZXIoKTtcclxufSIsImltcG9ydCB7Z2V0TmFtZU9mVXNlcn0gZnJvbSBcIi4uLy4uL3Rvb2xzL2VuY29kaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyID0gKCkgPT4ge1xyXG4gICAgbGV0IHJlbmRlciA9IFwiXCI7XHJcblxyXG4gICAgbGV0IHVzZXIgPSBnZXROYW1lT2ZVc2VyKCk7XHJcblxyXG4gICAgcmVuZGVyICs9IFxyXG4gICAgYDxkaXYgY2xhc3M9XCJhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFcIiBpZD1cImhvbWVPbkZvb3RlclwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiP1wiPjxpIGNsYXNzPVwiZmFzIGZhLWhvbWVcIj48L2k+PC9hPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJiXCIgaWQ9XCJsb2FkT25Gb290ZXJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIj91c2VyPWxvYWRcIj48aSBjbGFzcz1cImZhcyBmYS1zYXZlXCI+PC9pPjwvYT48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImJcIj48L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjXCI+PC9kaXY+YDtcclxuICAgIHJldHVybiByZW5kZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBldmVudEZvb3RlciA9ICgpID0+IHtcclxuICAgIC8vZXZlbnRcclxufSIsImltcG9ydCB7SW5mbywgQmFkZ2V9IGZyb20gXCIuLi9UeXBlcy9pbmZvVHlwZVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0ICBlbmNvZGluZyA9IChhc2NpaVN0cmluZzpzdHJpbmcpID0+IHtcclxuICAgIGxldCBoZXggPSAnJztcclxuICAgIGxldCB0ZW1wQVNDSUksIHRlbXBIZXg7XHJcbiAgICBjb25zdCBhc2NpaUFycmF5ID0gYXNjaWlTdHJpbmcuc3BsaXQoJycpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhc2NpaUFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGVtcEFTQ0lJID0gYXNjaWlBcnJheVtpXS5jaGFyQ29kZUF0KDApXHJcbiAgICAgICAgdGVtcEhleCA9IHRlbXBBU0NJSS50b1N0cmluZygxNik7XHJcbiAgICAgICAgaGV4ID0gaGV4ICsgdGVtcEhleDtcclxuICAgIH1cclxuICAgIGhleCA9IGhleC50cmltKCk7XHJcbiAgICByZXR1cm4gaGV4O1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGRlY29kaW5nID0gKGhleFN0cmluZzpzdHJpbmcpID0+IHtcclxuICAgIGxldCBzdHJpbmdPdXQgPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaGV4U3RyaW5nLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBoZXhTdHJpbmdbaV0gKyBoZXhTdHJpbmdbaSsxXTtcclxuICAgICAgICBsZXQgdGVtcEFzY2lpQ29kZSA9IHBhcnNlSW50KGRhdGEsIDE2KTtcclxuICAgICAgICBzdHJpbmdPdXQgPSBzdHJpbmdPdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKHRlbXBBc2NpaUNvZGUpO1xyXG4gICAgICAgIGkrKztcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmdPdXQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwYXJzZURhdGEgPSAoZGF0YTpzdHJpbmcpID0+IHtcclxuICAgIGxldCByZW5kZXI6SW5mbyA9IFxyXG4gICAge3BhZ2U6IFwiZ2FtZVwiLFxyXG4gICAgZ2FtZToge1xyXG4gICAgICAgIHVzZXI6e1xyXG4gICAgICAgICAgICBuYW1lOlwiXCIsXHJcbiAgICAgICAgICAgIGJhZGdlczpbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm9kZTowXHJcbiAgICB9fVxyXG4gICAgZGF0YS5zcGxpdChcIiFcIikubWFwKGkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG5hbWU9IGkuc3BsaXQoXCI9XCIpWzBdO1xyXG4gICAgICAgIGNvbnN0IGRlZiA9IGkuc3BsaXQoXCI9XCIpWzFdO1xyXG4gICAgICAgIHN3aXRjaChuYW1lKXtcclxuICAgICAgICAgICAgY2FzZShcInBhZ2VcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJwYWdlXCJdID0gZGVmO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnYW1lVXNlck5hbWVcIik6XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJnYW1lXCJdW1widXNlclwiXVtcIm5hbWVcIl0gPSBkZWY7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZShcImdhbWVVc2VyQmFkZ2VzXCIpOlxyXG4gICAgICAgICAgICAgICAgbGV0IHRhYmxlOkFycmF5PEJhZGdlPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZGVmLnNwbGl0KFwiLFwiKS5tYXAoaSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlpID0gaS5zcGxpdChcIl9cIilcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZS5wdXNoKHtuYW1lOiBpaVswXSwgbmJyOiAraWlbMV19KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJbXCJnYW1lXCJdW1widXNlclwiXVtcImJhZGdlc1wiXSA9IHRhYmxlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJnYW1lTm9kZVwiKTpcclxuICAgICAgICAgICAgICAgIHJlbmRlcltcImdhbWVcIl1bXCJub2RlXCJdID0gK2RlZjtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OmJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc3RyaW5naWZ5RGF0YSA9IChpbmZvOkluZm8pID0+IHtcclxuICAgIGxldCBiYWRnZT1cIlwiO1xyXG4gICAgXHJcbiAgICBpbmZvW1wiZ2FtZVwiXVtcInVzZXJcIl1bXCJiYWRnZXNcIl0ubWFwKG0gPT4ge1xyXG4gICAgICAgIGJhZGdlICs9IGAke20ubmFtZX1fJHttLm5icn0sYDtcclxuICAgICAgICBiYWRnZSA9IGJhZGdlLnN1YnN0cmluZygwLGJhZGdlLmxlbmd0aC0xKVxyXG4gICAgICAgIH0pXHJcbiAgICBsZXQgcmVuZGVyID0gXHJcbiAgICBgcGFnZT0ke2luZm9bXCJwYWdlXCJdfSFgK1xyXG4gICAgYGdhbWVVc2VyTmFtZT0ke2luZm9bXCJnYW1lXCJdW1widXNlclwiXVtcIm5hbWVcIl19IWArXHJcbiAgICBgZ2FtZVVzZXJCYWRnZXM9JHtiYWRnZX0hYCtcclxuICAgIGBnYW1lTm9kZT0ke2luZm9bXCJnYW1lXCJdW1wibm9kZVwiXX0hYFxyXG4gICAgO1xyXG4gICAgcmV0dXJuIHJlbmRlcjtcclxufVxyXG5cclxuY29uc3QgY2hlbWluTG9hZCA9IFwicGFnZT1sb2FkR2FtZSFnYW1lVXNlck5hbWU9Tm9ib2R5IWdhbWVVc2VyQmFkZ2VzPWpvdWV1cl8wIW5vZGU9MFwiO1xyXG5jb25zdCBjaGVtaW5OZXdHYW1lID0gXCJwYWdlPW5ld0dhbWUhZ2FtZVVzZXJOYW1lPU5vYm9keSFnYW1lVXNlckJhZGdlcz1qb3VldXJfMCFub2RlPTBcIjtcclxuY29uc3QgY2hlbWluSG9tZSA9IFwicGFnZT1ob21lIWdhbWVVc2VyTmFtZT1Ob2JvZHkhZ2FtZVVzZXJCYWRnZXM9am91ZXVyXzAhbm9kZT0wXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0SW5mb0Zyb21VcmwgPSAoKSA9PiB7XHJcbiAgICBsZXQgaW5mbzpJbmZvO1xyXG4gICAgd2luZG93LmxvY2F0aW9uLnNlYXJjaCAhPSBcIlwiP1xyXG4gICAgaW5mbyA9IHBhcnNlRGF0YShkZWNvZGluZyh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNwbGl0KFwiPVwiKVsxXSkpXHJcbjpcclxuICAgIGluZm8gPSBwYXJzZURhdGEoY2hlbWluTG9hZCk7XHJcbiAgICByZXR1cm4gaW5mbztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEluZm9Gcm9tQ29va2llID0gKG5hbWVTYXZlOnN0cmluZykgPT4ge1xyXG4gICAgc3dpdGNoIChuYW1lU2F2ZSl7XHJcbiAgICAgICAgY2FzZShcImxvYWRcIik6ICAgcmV0dXJuIHBhcnNlRGF0YShjaGVtaW5Mb2FkKTtcclxuICAgICAgICBjYXNlKFwibmV3R2FtZVwiKTpyZXR1cm4gcGFyc2VEYXRhKGNoZW1pbk5ld0dhbWUpO1xyXG4gICAgICAgIGNhc2UoXCJob21lXCIpOiAgIHJldHVybiBwYXJzZURhdGEoY2hlbWluSG9tZSk7XHJcbiAgICAgICAgZGVmYXVsdDogICAgICAgIHJldHVybiBwYXJzZURhdGEoZGVjb2RpbmcoYCR7ZG9jdW1lbnQuY29va2llfWAuc3BsaXQoYCR7bmFtZVNhdmV9PWApWzFdLnNwbGl0KFwiO1wiKVswXSkpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2F2ZU9uQ29va2llID0gKG5hbWVTYXZlOnN0cmluZywgc2F2ZTpJbmZvKSA9PiB7XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSBgJHtuYW1lU2F2ZX09JHsoZW5jb2Rpbmcoc3RyaW5naWZ5RGF0YShzYXZlKSkpfTsgU2FtZVNpdGU9TGF4YDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUNvb2tpZSA9IChuYW1lU2F2ZTpzdHJpbmcpID0+IHtcclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IGAke25hbWVTYXZlfT0keyhlbmNvZGluZyhzdHJpbmdpZnlEYXRhKGdldEluZm9Gcm9tQ29va2llKG5hbWVTYXZlKSkpKX07IFNhbWVTaXRlPUxheDsgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIFVUQydgO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0TmFtZU9mVXNlciA9ICgpID0+IHtcclxuICAgIGxldCBkYXRhID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zcGxpdChcIj9cIilcclxuICAgIGZvciAobGV0IGQgb2YgZGF0YSl7XHJcbiAgICAgICAgaWYoZC5zcGxpdChcIj1cIilbMF0gPT0gXCJ1c2VyXCIpIHJldHVybiBkLnNwbGl0KFwiPVwiKVsxXTtcclxuICAgIH1cclxuICAgIHJldHVybiBcImhvbWVcIjtcclxufSIsImV4cG9ydCBjb25zdCBwYXJzaW5nVGV4dCA9ICh0ZXh0RlVsbDpzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHBhcnNlVGV4dCA9IHRleHRGVWxsLnNwbGl0KFwiJFwiKTtcclxuICAgIGxldCByZW5kZXIgPSBcIlwiXHJcbiAgICBmb3IgKGxldCB0ZXh0IG9mIHBhcnNlVGV4dCl7XHJcbiAgICAgICAgbGV0IG1vZHVsZSA9IFwiXCI7XHJcbiAgICAgICAgc3dpdGNoKHRleHQuc3BsaXQoXCItXCIpWzBdKXtcclxuICAgICAgICAgICAgY2FzZShcInBcIik6XHJcbiAgICAgICAgICAgICAgICBsZXQgY2xhc3NOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgb2YgdGV4dC5zcGxpdChcIi1cIikpe2NsYXNzTmFtZSs9IGMgKyBcIiBcIn1cclxuICAgICAgICAgICAgICAgIHJlbmRlciArPSBgPHAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgICR7Y2xhc3NOYW1lfVxyXG4gICAgICAgICAgICAgICAgXCI+YDtcclxuICAgICAgICAgICAgICAgIG1vZHVsZSA9IFwicFwiO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJzcGFuXCIpOlxyXG4gICAgICAgICAgICByZW5kZXIrPSBgPHNwYW4gY2xhc3M9XCJhbm5vdGF0aW9uXCI+YFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UoXCJjbG9zZVwiKTpcclxuICAgICAgICAgICAgICAgIHJlbmRlciArPSBgPC8ke21vZHVsZX0+YDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgcmVuZGVyICs9IHRleHQ7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVuZGVyO1xyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7SW5mb30gZnJvbSBcIi4vVHlwZXMvaW5mb1R5cGVcIjtcclxuaW1wb3J0IHtnZXRJbmZvRnJvbUNvb2tpZSwgZ2V0TmFtZU9mVXNlciwgZGVsZXRlQ29va2llLCBzYXZlT25Db29raWUsIHBhcnNlRGF0YX0gZnJvbSBcIi4vdG9vbHMvZW5jb2RpbmdcIlxyXG5pbXBvcnQge0dhbWUsIGV2ZW50R2FtZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9nYW1lL0dhbWVcIjtcclxuaW1wb3J0IHtsb2FkR2FtZSwgZXZlbnRMb2FkR2FtZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9sb2FkR2FtZS9sb2FkR2FtZVwiO1xyXG5pbXBvcnQge25ld0dhbWUsIGV2ZW50TmV3R2FtZX0gZnJvbSBcIi4vQ29tcG9uZW50cy9uZXdHYW1lL25ld0dhbWVcIjtcclxuaW1wb3J0IHtIb21lLCBldmVudEhvbWV9IGZyb20gXCIuL0NvbXBvbmVudHMvaG9tZS9Ib21lXCI7XHJcblxyXG4vL2dldCBpbmZvXHJcbmxldCBpbmZvOkluZm87XHJcbnN3aXRjaChnZXROYW1lT2ZVc2VyKCkpe1xyXG4gICAgY2FzZShcImxvYWRcIik6aW5mbyA9IGdldEluZm9Gcm9tQ29va2llKFwibG9hZFwiKTticmVhaztcclxuICAgIGNhc2UoXCJuZXdHYW1lXCIpOmluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShcIm5ld0dhbWVcIik7YnJlYWs7XHJcbiAgICBkZWZhdWx0OmluZm8gPSBnZXRJbmZvRnJvbUNvb2tpZShnZXROYW1lT2ZVc2VyKCkpO2JyZWFrO1xyXG59XHJcblxyXG5cclxuLy8gaW5pdCBmdW5jdGlvbiByb290IGNvbnN0dWN0b3JcclxuY29uc3QgQXBwID0gKHBhZ2U6c3RyaW5nKSA9PiB7XHJcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyb290XCIpIGFzIEhUTUxFbGVtZW50KS5pbm5lckhUTUwgPSBcclxuICAgIGBcclxuICAgICAgICAke3BhZ2V9XHJcbiAgICBgXHJcbn1cclxuXHJcbi8vd3JpdGUgcGFnZVxyXG5zd2l0Y2goaW5mby5wYWdlKXtcclxuXHJcbiAgICBjYXNlKFwiZ2FtZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwiZ2FtZVwiKTtcclxuICAgICAgICBBcHAoR2FtZShpbmZvKSk7XHJcbiAgICAgICAgZXZlbnRHYW1lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZShcImxvYWRHYW1lXCIpOlxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJsb2FkR2FtZVwiKTtcclxuICAgICAgICBBcHAobG9hZEdhbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50TG9hZEdhbWUoaW5mbyk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICBjYXNlKFwibmV3R2FtZVwiKTpcclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibmV3R2FtZVwiKTtcclxuICAgICAgICBBcHAobmV3R2FtZShpbmZvKSk7XHJcbiAgICAgICAgZXZlbnROZXdHYW1lKGluZm8pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgY2FzZShcImhvbWVcIik6XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImhvbWVcIik7XHJcbiAgICAgICAgQXBwKEhvbWUoaW5mbykpO1xyXG4gICAgICAgIGV2ZW50SG9tZShpbmZvKTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICBkZWZhdWx0OmJyZWFrO1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9