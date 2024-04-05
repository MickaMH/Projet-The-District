let formulaireValide = document.getElementById("envoi_contact");/*Variable Input Submit pour validation du formulaire lors de l'envoi*/


let nom = document.getElementById("nom");               /*Variable qui prend la valeur de l'Input Text Nom*/
let nomVerif = /^[a-zA-Z][a-zA-Z' -]{1,50}$/;            /*Vérifie 1 lettre Min ou Maj, puis lettres Min ou Maj ou apostrophe ou trait d'union*/

let phone = document.getElementById("phone");             
let phoneVerif = /^[0-9]{10}$/;
                                                                                    
let demande = document.getElementById("demande");                 
let demandeVerif =  /^[a-zA-Z0-9,'-?!: .]{1,300}$/;                             


let requisNom = document.getElementById("requisNom");           /*Variables pour Message d'erreur ou Valide*/

let requisPhone = document.getElementById("requisPhone"); 

let requisDemande = document.getElementById("requisDemande");


        formulaireValide.addEventListener("click", validation);     /*Evènement pour la "validation" du Formulaire lors du "click"*/
            
            function validation(event)                              /*Fonction qui gère la "validation" de l'évènement (event)*/
           
                
                                 /*NOM (nom)*/   

{
                if (nom.validity.valueMissing)                              /*Si "valeur" du champ "nom" est vide*/
                {
                    event.preventDefault();                                 /*Bloque l'envoi du Formulaire*/
                    requisNom.textContent = "\u26a0 Ce champ est obligatoire";     /*Affiche message d'erreur*/
                    requisNom.style.fontSize = "1.2rem";                      /*Taille de police du message d'erreur*/
                    requisNom.style.fontWeight = "normal";
                    requisNom.style.color = "red";                              /*Couleur de police du message d'erreur*/ 
                    requisNom.style.fontFamily = "helvetica";  
                    nom.style.borderColor = "red";         
                }

                else if (nomVerif.test(nom.value) == false)                 /*Sinon si "valeur" du champ "nom" différent du Format prévu (nomVerif)*/
                {                
                    event.preventDefault();                                                 /*Bloque l'envoi du Formulaire*/
                    requisNom.textContent = "\u26a0 Vérifiez l'orthographe du nom";   /*Affiche message d'erreur*/
                    requisNom.style.fontSize = "1.2rem";                                    /*Taille de police du message d'erreur*/
                    requisNom.style.fontWeight = "normal";
                    requisNom.style.color = "orange";                                       /*Couleur de police du message d'erreur*/           
                    requisNom.style.fontFamily = "helvetica";
                    nom.style.borderColor = "orange";
                    nom.placeholder= "sans accents";
                }

                else                                                        /*Sinon "NOM" valide*/
                {
                    requisNom.textContent = "\u2713";                       /*Affiche une Coche*/ 
                    requisNom.style.fontSize = "1.2rem";                      /*Taille de police de la Coche*/
                    requisNom.style.color = "green";                        /*Couleur de la Coche*/
                    requisNom.style.fontFamily = "helvetica";
                    requisNom.style.fontWeight = "normal";
                    nom.style.borderColor = "#980848";
                }

                              
                                /*TELEPHONE (phone)*/


                if (phone.validity.valueMissing)                 
                {
                    event.preventDefault();
                    requisPhone.textContent = "\u26a0 Ce champ est obligatoire";
                    requisPhone.style.fontSize = "1.2rem";
                    requisPhone.style.fontWeight = "normal";
                    requisPhone.style.color = "red";
                    requisPhone.style.fontFamily = "helvetica";
                    phone.style.borderColor = "red";
                }

                else if (phoneVerif.test(phone.value) == false)                                      
                {
                    event.preventDefault();
                    requisPhone.textContent = "\u26a0 Ce numéro n'est pas correct";
                    requisPhone.style.fontSize = "1.2rem";
                    requisPhone.style.color = "orange";
                    requisPhone.style.fontWeight = "normal";
                    requisPhone.style.fontFamily = "helvetica";
                    phone.style.borderColor = "orange";
                    phone.placeholder= "ex: 0123456789";
                }

                else
                {
                    requisPhone.textContent = "\u2713";
                    requisPhone.style.fontSize = "1.2rem";
                    requisPhone.style.color = "green";
                    requisPhone.style.fontFamily = "helvetica";
                    requisPhone.style.fontWeight = "normal";
                    phone.style.borderColor = "#980848";
                }

                
                                /*DEMANDE (demande)*/


                if (demande.validity.valueMissing)                 
                {
                    event.preventDefault();
                    requisDemande.textContent = "\u26a0 Ce champ est obligatoire";
                    requisDemande.style.fontSize = "1.2rem";
                    requisDemande.style.color = "red";
                    requisDemande.style.fontWeight = "normal";
                    requisDemande.style.fontFamily = "helvetica";
                    demande.style.borderColor = "red";
                }

                else if (demandeVerif.test(demande.value) == false)                                  
                {
                    event.preventDefault();
                    requisDemande.textContent = "\u26a0 Vérifiez l'orthographe";
                    requisDemande.style.fontSize = "1.2rem";
                    requisDemande.style.color = "orange";
                    requisDemande.style.fontWeight = "normal";
                    requisDemande.style.fontFamily = "helvetica";
                    demande.style.borderColor = "orange";
                    demande.placeholder= "Caractères autorisés: (a-A , 0-9 ,': ,.?!)";
                }

                else
                {
                    requisDemande.textContent = "\u2713";
                    requisDemande.style.fontSize = "1.2rem";
                    requisDemande.style.color = "green";
                    requisDemande.style.fontFamily = "helvetica";
                    requisDemande.style.fontWeight = "normal";
                    demande.style.borderColor = "#980848";
                }

}                                                               
    
                                                                /*FIN*/

                                                                