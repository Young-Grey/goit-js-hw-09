import * as basicLightbox from 'basiclightbox';
import "basiclightbox/dist/basicLightbox.min.css"

const formData = { email: "", message: "" };
const elemForm = document.querySelector('.feedback-form');
const elemInput = document.querySelector('.feedback-form input');
const elemTextarea = document.querySelector('.feedback-form textarea');

initForm();

elemForm.addEventListener("input", e => {
    e.preventDefault();
     if (e.target.nodeName == "INPUT" || e.target.nodeName == "TEXTAREA"){
        
        if (e.target.name == 'email'){
            formData.email = e.target.value.trim();
        }
        if (e.target.name == 'message'){
            formData.message = e.target.value.trim();
        }
        localStorage.setItem("feedback-form-state", JSON.stringify(formData));
        }
    });

elemForm.addEventListener("submit", e => {
    e.preventDefault();
    if (formData.email === "" || formData.message === ""){
        console.log("Fill please all fields");
        const instance = basicLightbox.create(`<h1 style="color: #fff">Fill please all fields</h1>`);
        instance.show();
    }else{   
    
        localStorage.removeItem("feedback-form-state");
        elemInput.value = "";
        elemTextarea.value = "";
        formData.email = "";
        formData.message = "";
    }
});

function initForm(){

    try {
        if (localStorage.getItem("feedback-form-state") !== null){
            formData.email = JSON.parse(localStorage.getItem("feedback-form-state")).email;
            elemInput.value = formData.email;
            formData.message = JSON.parse(localStorage.getItem("feedback-form-state")).message;
            elemTextarea.value = formData.message;
        }
} catch (error) {
        console.log(error);
}
}