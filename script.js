const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
const form3 = document.getElementById('form3');
const nom = document.getElementById('nom');
const prenom = document.getElementById('prenom');
const age = document.getElementById('age');
const nextForm1 = document.getElementById('next-form-1');
const nextForm2 = document.getElementById('next-form-2');
const returnForm2 = document.getElementById('retour-form-2');
const returnForm3 = document.getElementById('retour-form-3');


// const retour = document.getElementById('retour');
// const save = document.getElementById('save');

// form.addEventListener('click' , e=>{
//     e.preventDefault();
//     validationForm();
// })

const setErreur = (element,message) => {

}
const validationForm = () => {
    const nomValue = nom.value.trim();
    const prenomValue = prenom.value.trim();
    const ageValue = age.value.trim();

    if (nomValue === '') {
        setErreur()
    }
    if (prenomValue === '') {
        setErreur()
    }
    if (ageValue === '') {
        setErreur()
    }
}

nextForm1.addEventListener("click", (e)=>{
    e.preventDefault();
    if(form1.style.display!="none"){
        form1.style.display = 'none'
        form2.style.display = 'flex'
    }
})

nextForm2.addEventListener("click", (e)=>{
    e.preventDefault();
    if(form2.style.display!="none"){
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
