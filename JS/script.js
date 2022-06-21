/*ANIMAÇÕES TAGS <a> E BOTÕES*/ 
function mouseEnterMouse1(){
    document.getElementById("portfolio").style = "color: black;";
    document.querySelector("button").style = "background-color: #0c76ec;width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}
function mouseLeaveMouse1(){
    document.getElementById("portfolio").style = "color: white;";
    document.querySelector("button").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}

function mouseEnterMouse2(){
    document.getElementById("github").style = "color: black;";
    document.getElementById("button2").style = "background-color: #0c76ec;width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}
function mouseLeaveMouse2(){
    document.getElementById("github").style = "color: white;";
    document.getElementById("button2").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}

function mouseEnterMouse3(){
    document.getElementById("linkedin").style = "color: black;";
    document.getElementById("button3").style = "background-color: #0c76ec;width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}
function mouseLeaveMouse3(){
    document.getElementById("linkedin").style = "color: white;";
    document.getElementById("button3").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}

function mouseEnterMouse4(){
    document.getElementById("discord").style = "color: black;";
    document.getElementById("button4").style = "background-color: #0c76ec;width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}
function mouseLeaveMouse4(){
    document.getElementById("discord").style = "color: white;";
    document.getElementById("button4").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}

/*COR PADRÃO DOS BOTÕES*/
document.querySelector("button").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
document.getElementById("button2").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
document.getElementById("button3").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
document.getElementById("button4").style = "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";

/*ANIMAÇÕES BOTÃO*/

function clickButton(){
    document.querySelector("button").style = "background-color: #1d1fbf;width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}
function unClickButton(){
    document.querySelector("button").style =  "background-image: linear-gradient(to left, #1d1fbf, #1950de, #0c76ec);width: 80%;padding: 15px 32px;color: white;font-weight: bold;border: none;display: inline-block;font-size: 16px;border-radius: 10px;cursor: pointer;margin: 2%;";
}
