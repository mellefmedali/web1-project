// boutique sport ------------------------------------
// id = "sport-cart-total" total cart sport
var PrixTotalSport = "0 000";
document.getElementById("sport-cart-total").innerHTML= PrixTotalSport;


// bouton coeur sport
var heartL = document.getElementsByClassName("ico")
for (let i = 0; i < heartL.length; i++) {
    heartL[i].onclick = function () { myFunction() };
    function myFunction() {
        source = heartL[i].getAttribute("src");
        if (source == "./data/logo/empty-heart-ico.png") {
            heartL[i].setAttribute("src", "./data/logo/red-heart-ico.png")
        } else if (source == "./data/logo/red-heart-ico.png") {
            heartL[i].setAttribute("src", "./data/logo/empty-heart-ico.png")
        }
    }
}
//fin coeur boutique sport

// calcul du prix unitaire du produit
var ValiderArticle
ValiderArticle = document.getElementsByClassName("valider-article")
var PAUTTC
PAUTTC = document.getElementsByClassName("PUTTC")
var PcolorRouge = document.getElementsByClassName("rouge")
var PcolorNoir = document.getElementsByClassName("noir")
var Ep15 = document.getElementsByClassName("ep15")
var Ep30 = document.getElementsByClassName("ep30")
var Pepoxy = document.getElementsByClassName("pepoxy")
var Pnormale = document.getElementsByClassName("pnormal")

for (let i=0; i< ValiderArticle.length; i++){
    let xi = Number(PAUTTC[i].innerHTML)
    ValiderArticle[i].onclick = function () { calculPUTTC() }
    function calculPUTTC() {
        let x=0,y=0,z=0
        if (PcolorRouge[i].checked){
            x= 5
        }
        else if (PcolorNoir[i].checked){
            x= 0
        }
        if (Ep15[i].checked){
            y = 0
        }
        else if (Ep30[i].checked){
            y = 20
        }
        if (Pepoxy[i].checked){
            z = 0
        }
        else if (Pnormale[i].checked){
            z = 20
        }

        PAUTTC[i].innerHTML = xi + x + y + z
    }
}
// fin calcul prix unitaire produit 1

// valeur total dans la page
var totP = document.getElementById("sport-cart-total")
var valtotP = parseInt(totP.innerHTML)
valtotP = 0
// FIN valeur total dans la page

// bouton +/-
var plus1 = document.getElementsByClassName("add")
var moins1 = document.getElementsByClassName("rem")
var qte1 = document.getElementsByClassName("qte")
var ToCart = document.getElementsByClassName("ajouter")
var Article = document.getElementsByClassName("nom-produit")

for (let i=0; i<plus1.length;i++){
    let q = 0
    plus1[i].onclick = function() {adding1()}
    function adding1(){
        q = Number(qte1[i].innerHTML)
        q+=1
        qte1[i].innerHTML= q
    }
    moins1[i].onclick = function() {minus1()}
    function minus1(){
        q = Number(qte1[i].innerHTML)
        if (q >= 1){
            q-=1
            qte1[i].innerHTML= q
        }
            else { return}
    }
    ToCart[i].onclick = function() {TotalCart()}
    function TotalCart(){
        if (q>0){
        console.log("valtotP", valtotP)
        console.log("PAUTTC", PAUTTC[i].innerHTML)
        valtotP += (q * Number(PAUTTC[i].innerHTML))
        console.log("valtotP", valtotP)
        document.getElementById("sport-cart-total").innerHTML = valtotP
        console.log("produit: ", Article[i].innerHTML)

        var table = document.getElementById("Cart-Sport-Table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = Article[i].innerHTML;
        cell2.innerHTML = qte1[i].innerHTML;
        cell3.innerHTML = PAUTTC[i].innerHTML;
        cell4.innerHTML = "Del";
        q = 0
        qte1[i].innerHTML = 0
        }
        else {return}
    }
}
