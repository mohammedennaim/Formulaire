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
nextForm1.addEventListener('click', (e)=>{  
const nomValue = nom.value.trim();
const prenomValue = prenom.value.trim();
const ageValue = age.value.trim();

    e.preventDefault();
    if (nomValue == '') {
        nom.parentElement.querySelector(".erreur").innerText = message;
        nom.parentElement.querySelector(".erreur").style.color = "red";
        nom.parentElement.querySelector(".erreur").style.display = "block";
    }else{
        nom.parentElement.querySelector(".erreur").style.display = "none";
    }
    if (prenomValue == '') {
        prenom.parentElement.querySelector(".erreur").innerText = message;
        prenom.parentElement.querySelector(".erreur").style.color = "red";
        prenom.parentElement.querySelector(".erreur").style.display = "block";
    }else{
        prenom.parentElement.querySelector(".erreur").style.display = "none";
    }
    if (ageValue < 18) {
        age.parentElement.querySelector(".erreur").innerText = 'saisir age plus 18'
        age.parentElement.querySelector(".erreur").style.color ="red"
        age.parentElement.querySelector(".erreur").style.display = "block";
    }else{
        age.parentElement.querySelector(".erreur").style.display = "none";
    }
    
    if(nomValue != '' && prenomValue != '' && ageValue > 17){
        form1.style.display = 'none';
        form2.style.display = 'flex';
    }
})


nextForm2.addEventListener('click', (e)=>{
const telValue = tel.value.trim();
const emailValue = email.value.trim();
const regexEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/;
const regexTel = /(\+212|0)([0-9]+){9}/;
    e.preventDefault();
    
    if (telValue != '' || !regexTel.test(telValue)) {
        tel.parentElement.querySelector(".erreur").innerText = message + ' saisir +212xxxx | 0xxxx';
        tel.parentElement.querySelector(".erreur").style.color = "red";
        tel.parentElement.querySelector(".erreur").style.display = "block";
    }else{
        tel.parentElement.querySelector(".erreur").style.display = "none";
    }

    if (emailValue == '' || !regexEmail.test(emailValue)) {
        email.parentElement.querySelector(".erreur").innerText = message + ' email pas correct';
        email.parentElement.querySelector(".erreur").style.color = "red";
        email.parentElement.querySelector(".erreur").style.display = "block";
    }else{
        email.parentElement.querySelector(".erreur").style.display = "none";
    }
    
    if(telValue !='' && regexEmail.test(emailValue) && regexTel.test(telValue) && emailValue != ''){
        form2.style.display = 'none'
        form3.style.display = 'flex'
    }
})

returnForm2.addEventListener("click", (e)=>{
    e.preventDefault();
    form2.style.display = 'none';
    form1.style.display = 'flex';
})

returnForm3.addEventListener("click", (e)=>{
    e.preventDefault();
    form3.style.display = 'none';
    form2.style.display = 'flex';
})

// save.addEventListener('click', (e) =>{
    
//     const fbValue = feedback.value.trim();
//     e.preventDefault();
//     if(fbValue == ''){
//         feedback.parentElement.querySelector('.erreur').innerText = message;
//         feedback.parentElement.querySelector('.erreur').style.color ="red";
//     }else{
//         feedback.parentElement.querySelector('.erreur').style.display = "none";
//         localStorage.setItem('nom', nom.value);
//         localStorage.setItem('prenom', prenom.value);
//         localStorage.setItem('age', age.value);
//         localStorage.setItem('telephone', tel.value);
//         localStorage.setItem('email', email.value);
//         localStorage.setItem('feedback', feedback.value);
        
//     }
// } )

// afficher.addEventListener('click', (e) => {
//     e.preventDefault();
//     affichage.style.display = 'flex'
//     form3.style.display = 'none'
//     affichage.innerHTML = `
//         <p>Nom : ${localStorage.getItem('nom')}</p>
//         <p>Prenom : ${localStorage.getItem('prenom')}</p>
//         <p>Age : ${localStorage.getItem('age')}</p>
//         <p>Telephone : ${localStorage.getItem('telephone')}</p>
//         <p>Fmail : ${localStorage.getItem('email')}</p>
//         <p>Feedback : ${localStorage.getItem('feedback')}</p>
//     `
    
// })

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
        feedback.parentElement.querySelector('.erreur').innerText = message;
        feedback.parentElement.querySelector('.erreur').style.color ="red";
    }else{
        feedback.parentElement.querySelector('.erreur').style.display = "none";
        localStorage.setItem('formulaire', JSON.stringify(formulaire));
        
    }
    
} )

afficher.addEventListener('click', (e) => {
    e.preventDefault();
    affichage.style.display = 'flex';
    form3.style.display = 'none';
    let obj = JSON.parse(localStorage.getItem('formulaire'));

    affichage.innerHTML = `
        <p>Nom : ${obj.nom}</p>
        <p>Prenom : ${obj.prenom}</p>
        <p>Age : ${obj.age}</p>
        <p>Telephone : ${obj.telephone}</p>
        <p>Email : ${obj.Email}</p>
        <p>Feedback : ${obj.feedback}</p>
    `  
})