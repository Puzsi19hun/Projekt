
function e(){
    document.getElementById("ide").innerHTML =  '<img  src="kep1.jpg" class="kep" alt="food">' 


}function e2(){
    document.getElementById("ide").innerHTML =  '<img  src="kep2.jpg" class="kep" alt="food">' 


}function e3(){
    document.getElementById("ide").innerHTML =  '<img  src="kep3.jpg" class="kep" alt="food">' 


}

function ember()
 {
   
    document.getElementById("idekk").innerHTML =  '<div id="idek" class="card elem" style="height: 45px; " " "><div onclick="emberr()"><img class="x"  src="list.png" alt="x"></div></div>'
 }
 function emberr()
 {
   
    document.getElementById("idekk").innerHTML =  '<div id="idekk"><div  class="card elemm"><div onclick="ember()"><img class="x"  src="cancel.png" alt="x"></div><input onchange="bmii()" placeholder="Testsúly..." id="info11" style="margin-top: 15%;" type="number"><input onchange="bmii()" placeholder="magasság..." id="info22" style="margin-top: 1%;" type="number"><h1  id="bmi">Érték</h1>'
}
function bmii()
{
    var joe = "Állapot" 
    var suj = document.getElementById("info11").value
    var mag = document.getElementById("info22").value
    var bmi = suj/(mag/10)
    if(bmi<18)
    {
        joe=" Skinny bitch"
    }

    else if(bmi> 25)
    {
        joe=" Fat"
        
    }
else//(18 és 25 között)
{
    joe=" Ok"
}
if(bmi>25){
    
    document.getElementById("nemkaja").innerHTML = '</div><div onclick="salata()" class="card2 col-md-3"><h1>Saláták</h1><img src="salata.png" alt="asd" class="cardimg"></div>'
}


document.getElementById("bmi").innerHTML = 'Érték:'+bmi.toFixed(2)+joe
}

function föetelek()
{
    document.getElementById("idekaja").innerHTML =		'<div class="card2 col-md-2"><h1>Tonyás</h1><img src="tojas.png" alt="asd" class="cardimg"><h2>10000ft</h2></div><div class="card2 col-md-2"><h1>Tonyás</h1><img src="tojas.png" alt="asd" class="cardimg"> <h2>10000ft</h2></div><div class="card2 col-md-2"><h1>Tonyás</h1><img src="tojas.png" alt="asd" class="cardimg"> <h2>10000ft</h2></div><div class="card2 col-md-2"><h1>Tonyás</h1><img src="tojas.png" alt="asd" class="cardimg"><h2>10000ft</h2></div><div class="card2 col-md-2"><h1>Tonyás</h1><img src="tojas.png" alt="asd" class="cardimg"><h2>10000ft</h2></div><div class="card2 col-md-2"><h1>Tonyás</h1><img src="tojas.png" alt="asd" class="cardimg"><h2>10000ft</h2></div>'
}
function leves()
{
    document.getElementById("idekaja").innerHTML =		'<div class="card2 col-md-2"><h1>Leves</h1><img src="leves.jpg" alt="asd" class="cardimg"><h2>20000ft</h2></div><div class="card2 col-md-2"><h1>Leves</h1><img src="leves.jpg" alt="asd" class="cardimg"><h2>20000ft</h2></div><div class="card2 col-md-2"><h1>Leves</h1><img src="leves.jpg" alt="asd" class="cardimg"><h2>20000ft</h2></div><div class="card2 col-md-2"><h1>Leves</h1><img src="leves.jpg" alt="asd" class="cardimg"><h2>20000ft</h2></div><div class="card2 col-md-2"><h1>Leves</h1><img src="leves.jpg" alt="asd" class="cardimg"><h2>20000ft</h2></div><div class="card2 col-md-2"><h1>Leves</h1><img src="leves.jpg" alt="asd" class="cardimg"><h2>20000ft</h2></div>'
}
function salata()
{
    document.getElementById("idekaja").innerHTML =		'<div class="card2 col-md-2"><h1>Saláta</h1><img src="salata.png" alt="asd" class="cardimg"><h2>19999ft</h2></div><div class="card2 col-md-2"><h1>Saláta</h1><img src="salata.png" alt="asd" class="cardimg"><h2>19999ft</h2></div><div class="card2 col-md-2"><h1>Saláta</h1><img src="salata.png" alt="asd" class="cardimg"><h2>19999ft</h2></div><div class="card2 col-md-2"><h1>Saláta</h1><img src="salata.png" alt="asd" class="cardimg"><h2>19999ft</h2></div><div class="card2 col-md-2"><h1>Saláta</h1><img src="salata.png" alt="asd" class="cardimg"><h2>19999ft</h2></div><div class="card2 col-md-2"><h1>Saláta</h1><img src="salata.png" alt="asd" class="cardimg"><h2>19999ft</h2></div>'
}
function ital()
{
    document.getElementById("idekaja").innerHTML =		'<div class="card2 col-md-2"><h1>Megesik hogy a csiga is elesik</h1><img src="borsodi.png" alt="asd" class="cardimg"><h2>999999ft</h2></div><div class="card2 col-md-2"><h1>Borsodi</h1><img src="borsodi.png" alt="asd" class="cardimg"><h2>999999ft</h2></div><div class="card2 col-md-2"><h1>Borsodi</h1><img src="borsodi.png" alt="asd" class="cardimg"><h2>999999ft</h2></div><div class="card2 col-md-2"><h1>Borsodi</h1><img src="borsodi.png" alt="asd" class="cardimg"><h2>999999ft</h2></div><div class="card2 col-md-2"><h1>Borsodi</h1><img src="borsodi.png" alt="asd" class="cardimg"><h2>999999ft</h2></div><div class="card2 col-md-2"><h1>Borsodi</h1><img src="borsodi.png" alt="asd" class="cardimg"><h2>999999ft</h2></div>'
}