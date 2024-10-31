const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const age = document.getElementById('age');
const tel = document.getElementById('telephone');
const email = document.getElementById('email');
const feedback = document.getElementById('feedback');
const save = document.getElementById('save');
const nextForm1 = document.getElementById('next-form-1');
const nextForm2 = document.getElementById('next-form-2');
const returnForm2 = document.getElementById('retour-form-2');
const returnForm3 = document.getElementById('retour-form-3');
const afficher = document.getElementById('afficher');
const affichage = document.getElementById('affichage');

message = 'champ is obligatoire';
let groups;

nextForm1.addEventListener('click', (e)=>{  
const nomValue = nom.value.trim();
const prenomValue = prenom.value.trim();
const ageValue = age.value.trim();

    e.preventDefault();
    if (nomValue == '') {
        groups = nom.parentElement;
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
        groups.querySelector(".erreur").style.display = "block";
    }else{
        groups = nom.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    if (prenomValue == '') {
        groups = prenom.parentElement;
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
        groups.querySelector(".erreur").style.display = "block";
    }else{
        groups = prenom.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    if (ageValue < 18) {
        groups = age.parentElement;
        groups.querySelector(".erreur").innerText = 'saisir age plus 18'
        groups.querySelector(".erreur").style.color ="red"
        groups.querySelector(".erreur").style.display = "block";
    }else{
        groups = age.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }
    
    if(form1.style.display!="none" && nomValue != '' && prenomValue != '' && ageValue > 17){
        form1.style.display = 'none';
        form2.style.display = 'flex';
    }
})


// const regexTel = /^[0-9]-{10,}$/;

nextForm2.addEventListener('click', (e)=>{
const telValue = tel.value.trim();
const emailValue = email.value.trim();
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
    e.preventDefault();
    if (telValue == '') {
        groups = tel.parentElement
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
        groups.querySelector(".erreur").style.display = "block";
    }else{
        groups = tel.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }

    if (emailValue == '') {
        groups = email.parentElement;
        groups.querySelector(".erreur").innerText = message;
        groups.querySelector(".erreur").style.color = "red";
        groups.querySelector(".erreur").style.display = "block";
    }else{
        groups = email.parentElement;
        groups.querySelector(".erreur").style.display = "none";
    }

    if (regexEmail.test(emailValue) == false) {
        groups = email.parentElement;
        groups.querySelector(".regx").innerText = 'email pas correct';
        groups.querySelector(".regx").style.color = "red";
        groups.querySelector(".regx").style.display = "block"
    }else{
        groups = email.parentElement;
        groups.querySelector(".regx").style.display = "none";
    }
    
    if(form2.style.display!="none" && telValue !='' && regexEmail.test(emailValue) && emailValue != ''){
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

save.addEventListener('click', (e) =>{
    let formulaire = {
        nom : nom.value,
        prenom : prenom.value,
        age : age.value,
        telephone : tel.value,
        email : email.value,
        feedback : feedback.value
    }
    const fbValue = feedback.value.trim();
    e.preventDefault();
    if(fbValue == ''){
        groups = feedback.parentElement;
        groups.querySelector('.erreur').innerText = message;
        groups.querySelector('.erreur').style.color ="red";
    }else{
        groups.querySelector('.erreur').style.display = "none";
        localStorage.setItem('formulaire', JSON.stringify(formulaire));
        
    }
} )
