window["addEventListener"]("keyup",function(_0x9f32x0){scheduleUpdate(1);simulationArea["shiftDown"]= _0x9f32x0["shiftKey"];simulationArea["controlDown"]= _0x9f32x0["controlKey"];if(_0x9f32x0["keyCode"]== 16){simulationArea["shiftDown"]= false};if(_0x9f32x0["key"]== "Meta"|| _0x9f32x0["key"]== "Control"){simulationArea["controlDown"]= false}});document["getElementById"]("simulationArea")["addEventListener"]("mousedown",function(_0x9f32x0){errorDetected= false;updateSimulation= true;updatePosition= true;updateCanvas= true;simulationArea["lastSelected"]= undefined;simulationArea["selected"]= false;simulationArea["hover"]= undefined;var _0x9f32x1=simulationArea["canvas"]["getBoundingClientRect"]();simulationArea["mouseDownRawX"]= (_0x9f32x0["clientX"]- _0x9f32x1["left"])* DPR;simulationArea["mouseDownRawY"]= (_0x9f32x0["clientY"]- _0x9f32x1["top"])* DPR;simulationArea["mouseDownX"]= Math["round"](((simulationArea["mouseDownRawX"]- globalScope["ox"])/ globalScope["scale"])/ unit)* unit;simulationArea["mouseDownY"]= Math["round"](((simulationArea["mouseDownRawY"]- globalScope["oy"])/ globalScope["scale"])/ unit)* unit;simulationArea["mouseDown"]= true;simulationArea["oldx"]= globalScope["ox"];simulationArea["oldy"]= globalScope["oy"];_0x9f32x0["preventDefault"]();scheduleBackup();scheduleUpdate(1);$(".dropdown.open")["removeClass"]("open")});document["getElementById"]("simulationArea")["addEventListener"]("mouseup",function(_0x9f32x0){if(simulationArea["lastSelected"]){simulationArea["lastSelected"]["newElement"]= false}});window["addEventListener"]("mousemove",function(_0x9f32x0){var _0x9f32x1=simulationArea["canvas"]["getBoundingClientRect"]();simulationArea["mouseRawX"]= (_0x9f32x0["clientX"]- _0x9f32x1["left"])* DPR;simulationArea["mouseRawY"]= (_0x9f32x0["clientY"]- _0x9f32x1["top"])* DPR;simulationArea["mouseX"]= Math["round"](((simulationArea["mouseRawX"]- globalScope["ox"])/ globalScope["scale"])/ unit)* unit;simulationArea["mouseY"]= Math["round"](((simulationArea["mouseRawY"]- globalScope["oy"])/ globalScope["scale"])/ unit)* unit;updateCanvas= true;if(simulationArea["lastSelected"]&& (simulationArea["mouseDown"]|| simulationArea["lastSelected"]["newElement"])){updateCanvas= true;var _0x9f32x2;if(simulationArea["lastSelected"]== globalScope["root"]){_0x9f32x2= function(){updateSelectionsAndPane()}}else {_0x9f32x2= function(){simulationArea["lastSelected"]["update"]()}};scheduleUpdate(0,20,_0x9f32x2)}else {scheduleUpdate(0,200)}});window["addEventListener"]("keydown",function(_0x9f32x0){errorDetected= false;updateSimulation= true;updatePosition= true;simulationArea["shiftDown"]= _0x9f32x0["shiftKey"];if(_0x9f32x0["key"]== "Meta"|| _0x9f32x0["key"]== "Control"){simulationArea["controlDown"]= true};if(simulationArea["controlDown"]&& _0x9f32x0["keyCode"]== 187){_0x9f32x0["preventDefault"]();if(globalScope["scale"]< 4* DPR){changeScale(0.1* DPR)}};if(simulationArea["controlDown"]&& _0x9f32x0["keyCode"]== 189){_0x9f32x0["preventDefault"]();if(globalScope["scale"]> 0.5* DPR){changeScale(-0.1* DPR)}};if(simulationArea["mouseRawX"]< 0|| simulationArea["mouseRawY"]< 0|| simulationArea["mouseRawX"]> width|| simulationArea["mouseRawY"]> height){return};scheduleUpdate(1);updateCanvas= true;wireToBeChecked= 1;console["log"]("KEY:"+ _0x9f32x0["key"]);if(simulationArea["controlDown"]&& (_0x9f32x0["key"]== "C"|| _0x9f32x0["key"]== "c")){};if(simulationArea["controlDown"]&& (_0x9f32x0["key"]== "V"|| _0x9f32x0["key"]== "v")){};if(simulationArea["lastSelected"]&& simulationArea["lastSelected"]["keyDown"]){if(_0x9f32x0["key"].toString()["length"]== 1|| _0x9f32x0["key"].toString()== "Backspace"){simulationArea["lastSelected"]["keyDown"](_0x9f32x0["key"].toString());return}};if(_0x9f32x0["keyCode"]== 16){simulationArea["shiftDown"]= true;if(simulationArea["lastSelected"]&&  !simulationArea["lastSelected"]["keyDown"]&& simulationArea["lastSelected"]["objectType"]!= "Wire"&& simulationArea["lastSelected"]["objectType"]!= "CircuitElement"&&  !simulationArea["multipleObjectSelections"]["contains"](simulationArea["lastSelected"])){simulationArea["multipleObjectSelections"]["push"](simulationArea["lastSelected"])}};if(_0x9f32x0["keyCode"]== 8|| _0x9f32x0["key"]== "Delete"){if(simulationArea["lastSelected"]){simulationArea["lastSelected"]["delete"]()};for(var _0x9f32x3=0;_0x9f32x3< simulationArea["multipleObjectSelections"]["length"];_0x9f32x3++){simulationArea["multipleObjectSelections"][_0x9f32x3]["cleanDelete"]()}};if(simulationArea["controlDown"]&& _0x9f32x0["key"]["charCodeAt"](0)== 122){undo()};if(_0x9f32x0["keyCode"]== 37&& simulationArea["lastSelected"]!= undefined){simulationArea["lastSelected"]["newDirection"]("LEFT")};if(_0x9f32x0["keyCode"]== 38&& simulationArea["lastSelected"]!= undefined){simulationArea["lastSelected"]["newDirection"]("UP")};if(_0x9f32x0["keyCode"]== 39&& simulationArea["lastSelected"]!= undefined){simulationArea["lastSelected"]["newDirection"]("RIGHT")};if(_0x9f32x0["keyCode"]== 40&& simulationArea["lastSelected"]!= undefined){simulationArea["lastSelected"]["newDirection"]("DOWN")};if((_0x9f32x0["keyCode"]== 113|| _0x9f32x0["keyCode"]== 81)&& simulationArea["lastSelected"]!= undefined){if(simulationArea["lastSelected"]["bitWidth"]!== undefined){simulationArea["lastSelected"]["newBitWidth"](parseInt(prompt("Enter new bitWidth"),10))}};if(simulationArea["controlDown"]&& (_0x9f32x0["key"]== "T"|| _0x9f32x0["key"]== "t")){simulationArea["changeClockTime"](prompt("Enter Time:"))};if((_0x9f32x0["keyCode"]== 108|| _0x9f32x0["keyCode"]== 76)&& simulationArea["lastSelected"]!= undefined){if(simulationArea["lastSelected"]["setLabel"]!== undefined){simulationArea["lastSelected"]["setLabel"]()}};if(_0x9f32x0["key"]== "0"){miniMapArea["setup"]()}});document["getElementById"]("simulationArea")["addEventListener"]("dblclick",function(_0x9f32x0){scheduleUpdate(2);if(simulationArea["lastSelected"]&& simulationArea["lastSelected"]["dblclick"]!== undefined){simulationArea["lastSelected"]["dblclick"]()};if(!simulationArea["shiftDown"]){simulationArea["multipleObjectSelections"]= []}});function removeMiniMap(){if(simulationArea["lastSelected"]== globalScope["root"]&& simulationArea["mouseDown"]){return};if(lastMiniMapShown+ 2000>=  new Date()["getTime"]()){setTimeout(removeMiniMap,lastMiniMapShown+ 2000-  new Date()["getTime"]());return};$("#miniMap")["fadeOut"]("fast")}window["addEventListener"]("mouseup",function(_0x9f32x0){lastMiniMapShown=  new Date()["getTime"]();setTimeout(removeMiniMap,2000);simulationArea["mouseDown"]= false;for(var _0x9f32x3=0;_0x9f32x3< 4;_0x9f32x3++){updatePosition= true;wireToBeChecked= true;update()};errorDetected= false;updateSimulation= true;updatePosition= true;updateCanvas= true;gridUpdate= true;wireToBeChecked= true;scheduleUpdate(1);var _0x9f32x1=simulationArea["canvas"]["getBoundingClientRect"]();if(!(simulationArea["mouseRawX"]< 0|| simulationArea["mouseRawY"]< 0|| simulationArea["mouseRawX"]> width|| simulationArea["mouseRawY"]> height)){smartDropXX= simulationArea["mouseX"]+ 100;smartDropYY= simulationArea["mouseY"]- 50}});var isIe=(navigator["userAgent"]["toLowerCase"]()["indexOf"]("msie")!=  -1|| navigator["userAgent"]["toLowerCase"]()["indexOf"]("trident")!=  -1);document["addEventListener"]("cut",function(_0x9f32x0){simulationArea["copyList"]= simulationArea["multipleObjectSelections"]["slice"]();if(simulationArea["lastSelected"]&& simulationArea["lastSelected"]!== simulationArea["root"]&&  !simulationArea["copyList"]["contains"](simulationArea["lastSelected"])){simulationArea["copyList"]["push"](simulationArea["lastSelected"])};var _0x9f32x6=copy(simulationArea["copyList"],true);if(isIe){window["clipboardData"]["setData"]("Text",_0x9f32x6)}else {_0x9f32x0["clipboardData"]["setData"]("text/plain",_0x9f32x6)};_0x9f32x0["preventDefault"]()});document["addEventListener"]("copy",function(_0x9f32x0){simulationArea["copyList"]= simulationArea["multipleObjectSelections"]["slice"]();if(simulationArea["lastSelected"]&& simulationArea["lastSelected"]!== simulationArea["root"]&&  !simulationArea["copyList"]["contains"](simulationArea["lastSelected"])){simulationArea["copyList"]["push"](simulationArea["lastSelected"])};var _0x9f32x6=copy(simulationArea["copyList"]);if(isIe){window["clipboardData"]["setData"]("Text",_0x9f32x6)}else {_0x9f32x0["clipboardData"]["setData"]("text/plain",_0x9f32x6)};_0x9f32x0["preventDefault"]()});document["addEventListener"]("paste",function(_0x9f32x0){var _0x9f32x7;if(isIe){_0x9f32x7= window["clipboardData"]["getData"]("Text")}else {_0x9f32x7= _0x9f32x0["clipboardData"]["getData"]("text/plain")};paste(_0x9f32x7);_0x9f32x0["preventDefault"]()})
