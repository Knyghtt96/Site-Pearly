body = document.querySelector("body");

//On Crée tous les boutons + on leur met une ID pour modifier le CSS
let validationPlus = document.createElement("button");
validationPlus.id = "ValidationPlus";
validationPlus.textContent = "Validation +";

let validationMoins = document.createElement("button");
validationMoins.id = "ValidationMoins";
validationMoins.textContent = "Validation -";

let tTPlus = document.createElement("button");
tTPlus.id = "TTPlus";
tTPlus.textContent = "TT+";

let tTMoins = document.createElement("button");
tTMoins.id = "TTMoins";
tTMoins.textContent = "TT-";

let rectifPlus = document.createElement("button");
rectifPlus.id = "RectifPlus";
rectifPlus.textContent = "Rectif+";

let rectifMoins = document.createElement("button");
rectifMoins.id = "RectifMoins";
rectifMoins.textContent = "Rectif-";

let reset = document.createElement("button");
reset.id = "reset";
reset.textContent = "Reset";

let separation = document.createElement("br");
let separation1 = document.createElement("br");
let separation2 = document.createElement("br");

let newdiv = document.createElement("div");
newdiv.id = "newdiv";
let newdiv1 = document.createElement("div");
newdiv1.id = "newdiv1";
let newdiv2 = document.createElement("div");
newdiv2.id = "newdiv2";

//On crée les espaces qui s'incrémentent.
let validation = document.createElement("input");
validation.id = "validation";
validation.value = 0;

let tT = document.createElement("input");
tT.id = "TT";
tT.value = 0;

let rectif = document.createElement("input");
rectif.id = "rectif";
rectif.value = 0;

let total = document.createElement("input");
total.id = "total";
total.value = 0;





function Incrementevalidation() {
  validation.value = parseInt(validation.value) + 1;
  validation.style.color = "green";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "green";
}

function Decrementevalidation() {
  validation.value = parseInt(validation.value) - 1;
  validation.style.color = "red";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "red";
}

function IncrementeTT() {
  tT.value = parseInt(tT.value) + 1;
  tT.style.color = "green";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "green";
}

function DecrementeTT() {
  tT.value = parseInt(tT.value) - 1;
  tT.style.color = "red";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "red";
}

function IncrementeRectif() {
  rectif.value = parseInt(rectif.value) + 1;
  rectif.style.color = "green";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "green";
}

function DecrementeRectif() {
  rectif.value = parseInt(rectif.value) - 1;
  rectif.style.color = "red";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "red";
}

function RemiseAZero() {
  validation.value = 0;
  validation.style.color = "black";
  tT.value = 0;
  tT.style.color = "black";
  rectif.value = 0;
  rectif.style.color = "black";
  total.value =
    (parseInt(validation.value) || 0) +
    (parseInt(tT.value) || 0) +
    (parseInt(rectif.value) || 0);
  total.style.color = "black";
}

const texte1= document.createElement("p")
texte1.innerText="Validations : "
const texte2= document.createElement("p")
texte2.innerText="Tt : "
const texte3= document.createElement("p")
texte3.innerText="Rectifications : "
const texte4= document.createElement("p")
texte4.innerText="Total : "

newdiv.appendChild(texte1)
newdiv.appendChild(validation);

newdiv.appendChild(separation);
newdiv.appendChild(texte2)
newdiv.appendChild(tT);
newdiv.appendChild(separation1);
newdiv.appendChild(texte3)
newdiv.appendChild(rectif);
newdiv.appendChild(separation2);
newdiv.appendChild(texte4)
newdiv.appendChild(total);
body.appendChild(newdiv);

newdiv1.appendChild(validationMoins);
newdiv1.appendChild(validationPlus);
body.appendChild(newdiv1);

newdiv2.appendChild(tTPlus);
newdiv2.appendChild(tTMoins);

newdiv2.appendChild(rectifPlus);
newdiv2.appendChild(rectifMoins);

newdiv2.appendChild(reset);
body.appendChild(newdiv2);



validationPlus.addEventListener("click", Incrementevalidation);
validationMoins.addEventListener("click", Decrementevalidation);
tTPlus.addEventListener("click", IncrementeTT);
tTMoins.addEventListener("click", DecrementeTT);
rectifPlus.addEventListener("click", IncrementeRectif);
rectifMoins.addEventListener("click", DecrementeRectif);
reset.addEventListener("click", RemiseAZero);


