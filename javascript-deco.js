// boutique deco ------------------------------------
// id = "deco-cart-total" total cart deco
var PrixTotaldeco = "0 000";
document.getElementById("deco-cart-total").innerHTML= PrixTotaldeco;


// bouton coeur deco
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
//fin coeur boutique deco

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
            x= 100
        }
        else if (PcolorNoir[i].checked){
            x= 0
        }
        if (Ep15[i].checked){
            y = 0
        }
        else if (Ep30[i].checked){
            y = 100
        }
        if (Pepoxy[i].checked){
            z = 0
        }
        else if (Pnormale[i].checked){
            z = 50
        }

        PAUTTC[i].innerHTML = xi + x + y + z
    }
}
// fin calcul prix unitaire produit 1

// valeur total dans la page
var totP = document.getElementById("deco-cart-total")
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
        valtotP += (q * Number(PAUTTC[i].innerHTML))
        document.getElementById("deco-cart-total").innerHTML = valtotP
        document.getElementById("total-modal").innerHTML = valtotP

        var table = document.getElementById("Cart-Deco-Table");
        var row = table.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        cell1.innerHTML = Article[i].innerHTML;
        cell2.innerHTML = qte1[i].innerHTML;
        cell3.innerHTML = PAUTTC[i].innerHTML;
        cell4.innerHTML = Number(PAUTTC[i].innerHTML)*Number(qte1[i].innerHTML);
        cell5.innerHTML = ('<input type="button" value="Delete" onclick="deleteRow(this)" height="30px">');
        q = 0
        qte1[i].innerHTML = 0
        }
        else {return}
    }
    function deleteRow(r) {
        var itemp = r.parentNode.parentNode.rowIndex
        var subval = Number(document.getElementById("Cart-Deco-Table").rows[itemp].cells[3].innerHTML)
        valtotP -= subval
        document.getElementById("deco-cart-total").innerHTML = valtotP
        document.getElementById("total-modal").innerHTML = valtotP
        document.getElementById("Cart-Deco-Table").deleteRow(itemp)
    }
}


