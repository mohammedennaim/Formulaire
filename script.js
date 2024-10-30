const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const age = document.getElementById('age');
const tel = document.getElementById('telephone');
const email = document.getElementById('email');
const nextForm1 = document.getElementById('next-form-1');
const nextForm2 = document.getElementById('next-form-2');
const returnForm2 = document.getElementById('retour-form-2');
const returnForm3 = document.getElementById('retour-form-3');

message = 'champ is obligatoire'
let groups;

nextForm1.addEventListener("click", (e)=>{  
const nomValue = nom.value.trim();
const prenomValue = prenom.value.trim();
const ageValue = age.value.trim();

    e.preventDefault();
    if (nomValue == '') {
        groups = nom.parentElement
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
    }else{
        groups = nom.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    if (prenomValue == '') {
        groups = prenom.parentElement;
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
    }else{
        groups = prenom.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    if (ageValue < 18) {
        groups = age.parentElement;
        groups.querySelector(".erreur").innerText = 'saisir age plus 18'
        groups.querySelector(".erreur").style.color ="red"
    }else{
        groups = age.parentElement;
        groups.querySelector(".erreur").innerText = ''
    }
    
    if(form1.style.display!="none" && nomValue != '' && prenomValue != '' && ageValue != ''){
        form1.style.display = 'none'
        form2.style.display = 'flex'
    }
})

nextForm2.addEventListener("click", (e)=>{
const telValue = tel.value.trim();
const emailValue = email.value.trim();
    e.preventDefault();
    if (telValue == '') {
        groups = tel.parentElement
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
    }else{
        groups = tel.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    if (emailValue == '') {
        groups = email.parentElement;
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
    }else{
        groups = prenom.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    
    if(form2.style.display!="none" && telValue !='' && emailValue !=''){
        form2.style.display = 'none'
        form3.style.display = 'flex'
    }
})

returnForm2.addEventListener("click", (e)=>{
    e.preventDefault();
    if(form2.style.display!="none"){
        form2.style.display = 'none'
        form1.style.display = 'flex'
    }
})

returnForm3.addEventListener("click", (e)=>{
    e.preventDefault();
    if(form3.style.display!="none"){
        form3.style.display = 'none'
        form2.style.display = 'flex'
    }
})
