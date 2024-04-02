let formulaireValide = document.getElementById("envoi");/*Variable Input Submit pour validation du formulaire lors de l'envoi*/

let nom = document.getElementById("nom");               /*Variable qui prend la valeur de l'Input Text Nom*/
let nomVerif = /^[a-zA-Z][a-zA-Z' -]{1,50}$/;            /*Vérifie 1 lettre Min ou Maj, puis lettres Min ou Maj ou apostrophe ou trait d'union*/
        
let prenom = document.getElementById("prenom");         /*¨Prend la valeur de Input Text Prenom*/
let prenomVerif = /^[a-zA-Z][a-zA-Z' -]{1,20}$/;         /*Pareil que nomVerif sur 1 à 20 caractères*/

let mail = document.getElementById("mail");             /*Prend la valeur de Input Email*/
let mailVerif = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*let mailVerif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;*/       /*Voir avec le formateur pour Regex d'Email*/

let phone = document.getElementById("phone");             
let phoneVerif = /^[0-9]{10}$/;
                                                                                    
let adresse = document.getElementById("adresse");                 
let adresseVerif =  /^(\d+\s*(?:bis|ter)?\s+[a-zA-Z,\. ]+)\s+(\d{5})\s+([a-zA-Z]+)$/;                            



let requisNom = document.getElementById("requisNom");           /*Variables pour Message d'erreur ou Valide*/
                                                             
let requisPrenom = document.getElementById("requisPrenom");

let requisMail = document.getElementById("requisMail");

let requisPhone = document.getElementById("requisPhone"); 

let requisAdresse = document.getElementById("requisAdresse");



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

                
                                    /*PRENOM (prenom)*/
                

                if (prenom.validity.valueMissing)               /*Fonctionne comme "NOM" mais ne permet que 20 caractères ( let prenomVerif )*/
                {
                    event.preventDefault();
                    requisPrenom.textContent = "\u26a0 Ce champ est obligatoire";      /*Champ vide : Message d'erreur Rouge*/
                    requisPrenom.style.fontSize = "1.2rem";
                    requisPrenom.style.fontWeight = "normal";
                    requisPrenom.style.color = "red";
                    requisPrenom.style.fontFamily = "helvetica";
                    prenom.style.borderColor = "red";
                }

                else if (prenomVerif.test(prenom.value) == false)                       
                {
                    event.preventDefault();
                    requisPrenom.textContent = "\u26a0 Vérifiez l'orthographe du prénom"; /*Format incorrect : Message d'erreur Orange*/
                    requisPrenom.style.fontSize = "1.2rem";
                    requisPrenom.style.fontWeight = "normal";
                    requisPrenom.style.color = "orange";
                    requisPrenom.style.fontFamily = "helvetica";
                    prenom.style.borderColor = "orange";
                    prenom.placeholder= "sans accents";
                }

                else
                {
                    requisPrenom.textContent = "\u2713";                        /*Format Valide : Coche Verte*/
                    requisPrenom.style.fontSize = "1.2rem";
                    requisPrenom.style.color = "green";
                    requisPrenom.style.fontFamily = "helvetica";
                    requisPrenom.style.fontWeight = "normal";
                    prenom.style.borderColor = "#980848";
                }

                
                                    /*EMAIL (mail)*/


                if (mail.validity.valueMissing)                  /*Fonctionne comme "NOM" avec Regex ( let ddnVerif )*/
                {
                    event.preventDefault();
                    requisMail.textContent = "\u26a0 Ce champ est obligatoire";
                    requisMail.style.fontSize = "1.2rem";
                    requisMail.style.fontWeight = "normal";
                    requisMail.style.color = "red";
                    requisMail.style.fontFamily = "helvetica";
                    mail.style.borderColor = "red";
                }

                else if (mailVerif.test(mail.value) == false)                                  
                {
                    event.preventDefault();                                                 
                    requisMail.textContent = "\u26a0 Cette adresse mail n'est pas valide";
                    requisMail.style.fontSize = "1.2rem";
                    requisMail.style.fontWeight = "normal";
                    requisMail.style.color = "orange";
                    requisMail.style.fontFamily = "helvetica";
                    mail.style.borderColor = "orange";
                    mail.placeholder= "ex: dave.loper@afpa.fr";
                }                               

                else
                {
                    requisMail.textContent = "\u2713";
                    requisMail.style.fontSize = "1.2rem";
                    requisMail.style.color = "green";
                    requisMail.style.fontFamily = "helvetica";
                    requisMail.style.fontWeight = "normal";
                    mail.style.borderColor = "#980848";
                }

                
                                    /*TELEPHONE (phone)*/


                if (phone.validity.valueMissing)                   /*Fonctionne comme "NOM" avec Regex ( let cpVerif )*/
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

                
                                    /*ADRESSE (adresse)*/


                if (adresse.validity.valueMissing)                 /*Fonctionne comme "NOM" avec Regex ( let mailVerif )*/
                {
                    event.preventDefault();
                    requisAdresse.textContent = "\u26a0 Ce champ est obligatoire";
                    requisAdresse.style.fontSize = "1.2rem";
                    requisAdresse.style.color = "red";
                    requisAdresse.style.fontWeight = "normal";
                    requisAdresse.style.fontFamily = "helvetica";
                    adresse.style.borderColor = "red";
                }

                else if (adresseVerif.test(adresse.value) == false)                                  
                {
                    event.preventDefault();
                    requisAdresse.textContent = "\u26a0 Cette adresse n'est pas correcte";
                    requisAdresse.style.fontSize = "1.2rem";
                    requisAdresse.style.color = "orange";
                    requisAdresse.style.fontWeight = "normal";
                    requisAdresse.style.fontFamily = "helvetica";
                    adresse.style.borderColor = "orange";
                    adresse.placeholder= "ex : 1 rue du boulevard 75000 Paris";
                }

                else
                {
                    requisAdresse.textContent = "\u2713";
                    requisAdresse.style.fontSize = "1.2rem";
                    requisAdresse.style.color = "green";
                    requisAdresse.style.fontFamily = "helvetica";
                    requisAdresse.style.fontWeight = "normal";
                    adresse.style.borderColor = "#980848";
                }

}                                                               
    
                                                                /*FIN*/

                                                                