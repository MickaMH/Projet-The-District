let formulaireValide = document.getElementById("envoi");/*Variable Input Submit pour validation du formulaire lors de l'envoi*/

let nom = document.getElementById("nom");               /*Variable qui prend la valeur de l'Input Text Nom*/
let nomVerif = /^[a-zA-Z][a-zA-Z' -]{1,50}$/;            /*Vérifie 1 lettre Min ou Maj, puis lettres Min ou Maj ou apostrophe ou trait d'union*/
        
let prenom = document.getElementById("prenom");         /*¨Prend la valeur de Input Text Prenom*/
let prenomVerif = /^[a-zA-Z][a-zA-Z' -]{1,20}$/;         /*Pareil que nomVerif sur 1 à 20 caractères*/

let mail = document.getElementById("mail");             /*Prend la valeur de Input Email*/
let mailVerif = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*let mailVerif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;*/       /*Voir avec le formateur pour Regex d'Email*/

let phone = document.getElementById("phone");             
let phoneVerif = /^(?:(?:\\+|00)33|0)\\s*1-9{4}$/;
                                                                                    
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
                    requisNom.textContent = "\u26a0 Champ obligatoire";     /*Affiche message d'erreur*/
                    requisNom.style.fontSize = "1.3rem";                      /*Taille de police du message d'erreur*/
                    requisNom.style.fontWeight = "bold";
                    requisNom.style.color = "red";                              /*Couleur de police du message d'erreur*/            
                }

                else if (nomVerif.test(nom.value) == false)                 /*Sinon si "valeur" du champ "nom" différent du Format prévu (nomVerif)*/
                {                
                    event.preventDefault();                                 /*Bloque l'envoi du Formulaire*/
                    requisNom.textContent = "\u26a0 Vérifiez l'orthographe";/*Affiche message d'erreur*/
                    requisNom.style.fontSize = "1.3rem";                      /*Taille de police du message d'erreur*/
                    requisNom.style.fontWeight = "bold";
                    requisNom.style.color = "orange";                           /*Couleur de police du message d'erreur*/           
                    nom.placeholder= "sans accents";
                }

                else                                                        /*Sinon "NOM" valide*/
                {
                    requisNom.textContent = "\u2713";                       /*Affiche une Coche*/ 
                    requisNom.style.fontSize = "1.3rem";                      /*Taille de police de la Coche*/
                    requisNom.style.color = "green";                        /*Couleur de la Coche*/
                }

                
                                    /*PRENOM (prenom)*/
                

                if (prenom.validity.valueMissing)               /*Fonctionne comme "NOM" mais ne permet que 20 caractères ( let prenomVerif )*/
                {
                    event.preventDefault();
                    requisPrenom.textContent = "\u26a0 Champ obligatoire";      /*Champ vide : Message d'erreur Rouge*/
                    requisPrenom.style.fontSize = "1.3rem";
                    requisPrenom.style.fontWeight = "bold";
                    requisPrenom.style.color = "red";
                }

                else if (prenomVerif.test(prenom.value) == false)                       
                {
                    event.preventDefault();
                    requisPrenom.textContent = "\u26a0 Vérifiez l'orthographe"; /*Format incorrect : Message d'erreur Orange*/
                    requisPrenom.style.fontSize = "1.3rem";
                    requisPrenom.style.fontWeight = "bold";
                    requisPrenom.style.color = "orange";
                    prenom.placeholder= "sans accents";
                }

                else
                {
                    requisPrenom.textContent = "\u2713";                        /*Format Valide : Coche Verte*/
                    requisPrenom.style.fontSize = "1.3rem";
                    requisPrenom.style.color = "green";
                }

                
                                    /*EMAIL (mail)*/


                if (mail.validity.valueMissing)                  /*Fonctionne comme "NOM" avec Regex ( let ddnVerif )*/
                {
                    event.preventDefault();
                    requisMail.textContent = "\u26a0 Champ obligatoire";
                    requisMail.style.fontSize = "1.3rem";
                    requisMail.style.fontWeight = "bold";
                    requisMail.style.color = "red";
                }

                else if (mailVerif.test(mail.value) == false)                                  
                {
                    event.preventDefault();                                                 
                    requisMail.textContent = "\u26a0 Format incorrect";
                    requisMail.style.fontSize = "1.3rem";
                    requisMail.style.fontWeight = "bold";
                    requisMail.style.color = "orange";
                    mail.placeholder= "ex: dave.loper@afpa.fr";
                }                               

                else
                {
                    requisMail.textContent = "\u2713";
                    requisMail.style.fontSize = "1.3rem";
                    requisMail.style.color = "green";
                }

                
                                    /*TELEPHONE (phone)*/


                if (phone.validity.valueMissing)                   /*Fonctionne comme "NOM" avec Regex ( let cpVerif )*/
                {
                    event.preventDefault();
                    requisPhone.textContent = "\u26a0 Champ obligatoire";
                    requisPhone.style.fontSize = "1.3rem";
                    requisPhone.style.fontWeight = "bold";
                    requisPhone.style.color = "red";
                }

                else if (phoneVerif.test(phone.value) == false)                                      
                {
                    event.preventDefault();
                    requisPhone.textContent = "\u26a0 Format incorrect";
                    requisPhone.style.fontSize = "1.3rem";
                    requisPhone.style.color = "orange";
                    requisPhone.style.fontWeight = "bold";
                    phone.placeholder= "ex: 0123456789";
                }

                else
                {
                    requisPhone.textContent = "\u2713";
                    requisPhone.style.fontSize = "1.3rem";
                    requisPhone.style.color = "green";
                }

                
                                    /*ADRESSE (adresse)*/


                if (adresse.validity.valueMissing)                 /*Fonctionne comme "NOM" avec Regex ( let mailVerif )*/
                {
                    event.preventDefault();
                    requisAdresse.textContent = "\u26a0 Champ obligatoire";
                    requisAdresse.style.fontSize = "1.3rem";
                    requisAdresse.style.color = "red";
                    requisAdresse.style.fontWeight = "bold";
                }

                else if (adresseVerif.test(adresse.value) == false)                                  
                {
                    event.preventDefault();
                    requisAdresse.textContent = "\u26a0 Format incorrect";
                    requisAdresse.style.fontSize = "1.3rem";
                    requisAdresse.style.color = "orange";
                    requisAdresse.style.fontWeight = "bold";
                    adresse.placeholder= "ex : 1 rue du boulevard 75000 Paris";
                }

                else
                {
                    requisAdresse.textContent = "\u2713";
                    requisAdresse.style.fontSize = "1.3rem";
                    requisAdresse.style.color = "green";
                }

}                                                               
    
                                                                /*FIN*/