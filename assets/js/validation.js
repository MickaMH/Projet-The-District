let formulaire_valide = document.getElementsById("bouton_envoyer");/*Variable Input Submit pour validation du formulaire lors de l'envoi*/

let nom = document.getElementsById("nom");               /*Variable qui prend la valeur de l'Input Text Nom*/
let nom_verif = /^[a-zA-Z][a-zA-Z' -]{1,50}$/;            /*Vérifie 1 lettre Min ou Maj, puis lettres Min ou Maj ou apostrophe ou trait d'union*/

let prenom = document.getElementsById("prenom");         /*¨Prend la valeur de Input Text Prenom*/
let prenom_verif = /^[a-zA-Z][a-zA-Z' -]{1,20}$/;         /*Pareil que nomVerif sur 1 à 20 caractères*/

let mail = document.getElementsById("mail");             /*Prend la valeur de Input Email*/
let mail_verif = /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*let mailVerif = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;*/       /*Voir avec le formateur pour Regex d'Email*/

let phone = document.getElementsById("phone");               /*Prend la valeur de Input Text Date de naissance (ddn), (en Text pour Vérif)*/
let phone_verif = /^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19\d\d|20[012]\d|2030)$/;/*Vérifie 1 chiffre entre 1 et 31 pouvant commencer par un 0*/ 
                                                                                        /*Puis 1 chiffre entre 1 et 12, puis 1 ciffre entre 1900 et 2030*/
let adresse = document.getElementById("adresse");                 /*Prend la valeur de Input Text Code Postal (cp)*/
let adresse_verif = /^[0-9]{5}$/;                             /*Vérifie 5 chiffres de 0 à 9*/



let requis_nom = document.getElementById("requis_nom");           /*Variables pour Message d'erreur ou Valide*/
                                                             
let requis_prenom = document.getElementById("requis_prenom");

let requis_mail = document.getElementById("requis_mail");

let requis_phone = document.getElementById("requis_phone"); 

let requis_adresse = document.getElementById("requis_adresse");



/*---------------------------------------------------------------------------------------------------------------------------------------------*/

        formulaire_valide.addEventListener("click", validation);     /*Evènement pour la "validation" du Formulaire lors du "click"*/
            
            function validation(event)                              /*Fonction qui gère la "validation" de l'évènement (event)*/
  
/*---------------------------------------------------------------------------------------------------------------------------------------------*/            
                
                /*NOM (nom)*/   

{
                if (nom.validity.valueMissing)                              /*Si "valeur" du champ "nom" est vide*/
                {
                    event.preventDefault();                                 /*Bloque l'envoi du Formulaire*/
                    requis_nom.textContent = "\u26a0 Champ obligatoire";     /*Affiche message d'erreur*/
                    requis_nom.style.fontSize = "1.1rem";                      /*Taille de police du message d'erreur*/
                    requis_nom.style.color = "red";                              /*Couleur de police du message d'erreur*/
                    requis_nom.style.fontFamily = "sans-serif";              
                }

                else if (nom_verif.test(nom.value) == false)                 /*Sinon si "valeur" du champ "nom" différent du Format prévu (nomVerif)*/
                {                
                    event.preventDefault();                                 /*Bloque l'envoi du Formulaire*/
                    requis_nom.textContent = "\u26a0 Vérifiez l'orthographe";/*Affiche message d'erreur*/
                    requis_nom.style.fontSize = "1.1rem";                      /*Taille de police du message d'erreur*/
                    requis_nom.style.color = "orange";                           /*Couleur de police du message d'erreur*/
                    requis_nom.style.fontFamily = "sans-serif";              
                    nom.placeholder= "sans accents";
                }

                else                                                        /*Sinon "NOM" valide*/
                {
                    requis_nom.textContent = "\u2713";                       /*Affiche une Coche*/ 
                    requis_nom.style.fontSize = "1.1rem";                      /*Taille de police de la Coche*/
                    requis_nom.style.color = "green";                        /*Couleur de la Coche*/
                }


/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                
                /*PRENOM (prenom)*/
                

                if (prenom.validity.valueMissing)               /*Fonctionne comme "NOM" mais ne permet que 20 caractères ( let prenomVerif )*/
                {
                    event.preventDefault();
                    requis_prenom.textContent = "\u26a0 Champ obligatoire";      /*Champ vide : Message d'erreur Rouge*/
                    requis_prenom.style.fontSize = "1.1rem";
                    requis_prenom.style.color = "red";
                    requis_prenom.style.fontFamily = "sans-serif"; 
                }

                else if (prenom_verif.test(prenom.value) == false)                       
                {
                    event.preventDefault();
                    requis_prenom.textContent = "\u26a0 Vérifiez l'orthographe"; /*Format incorrect : Message d'erreur Orange*/
                    requis_prenom.style.fontSize = "1.1rem";
                    requis_prenom.style.color = "orange";
                    requis_prenom.style.fontFamily = "sans-serif"; 
                    prenom.placeholder= "sans accents";
                }

                else
                {
                    requis_prenom.textContent = "\u2713";                        /*Format Valide : Coche Verte*/
                    requis_prenom.style.fontSize = "1.1rem";
                    requis_prenom.style.color = "green";
                }


/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                
                /*EMAIL (mail)*/


                if (mail.validity.valueMissing)                  /*Fonctionne comme "NOM" avec Regex ( let ddnVerif )*/
                {
                    event.preventDefault();
                    requis_mail.textContent = "\u26a0 Champ obligatoire";
                    requis_mail.style.fontSize = "1.1rem";
                    requis_mail.style.color = "red";
                    requis_mail.style.fontFamily = "sans-serif"; 
                }

                else if (mail_verif.test(ddn.value) == false)                                  
                {
                    event.preventDefault();                                                 
                    requis_mail.textContent = "\u26a0 Date ou format incorrect";
                    requis_mail.style.fontSize = "1.1rem";
                    requis_mail.style.color = "orange";
                    requis_mail.style.fontFamily = "sans-serif"; 
                    mail.placeholder= "ex: jj/mm/aaaa";
                }                               

                else
                {
                    requis_mail.textContent = "\u2713";
                    requis_mail.style.fontSize = "1.1rem";
                    requis_mail.style.color = "green";
                }


/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                
                /*TELEPHONE (phone)*/

                if (phone.validity.valueMissing)                   /*Fonctionne comme "NOM" avec Regex ( let cpVerif )*/
                {
                    event.preventDefault();
                    requis_phone.textContent = "\u26a0 Champ obligatoire";
                    requis_phone.style.fontSize = "1.1rem";
                    requis_phone.style.color = "red";
                    requis_phone.style.fontFamily = "sans-serif"; 
                }

                else if (phone_verif.test(cp.value) == false)                                      
                {
                    event.preventDefault();
                    requis_phone.textContent = "\u26a0 Format incorrect";
                    requis_phone.style.fontSize = "1.1rem";
                    requis_phone.style.color = "orange";
                    requis_phone.style.fontFamily = "sans-serif"; 
                    phone.placeholder= "ex: 75000";
                }

                else
                {
                    requis_phone.textContent = "\u2713";
                    requis_phone.style.fontSize = "1.1rem";
                    requis_phone.style.color = "green";
                }

/*----------------------------------------------------------------------------------------------------------------------------------------------*/
                
                /*EMAIL (mail)*/

                if (mail.validity.valueMissing)                 /*Fonctionne comme "NOM" avec Regex ( let mailVerif )*/
                {
                    event.preventDefault();
                    requis_mail.textContent = "\u26a0 Champ obligatoire";
                    requis_mail.style.fontSize = "1.1rem";
                    requis_mail.style.color = "red";
                    requis_mail.style.fontFamily = "sans-serif"; 
                }

                else if (mail_verif.test(mail.value) == false)                                  
                {
                    event.preventDefault();
                    requis_mail.textContent = "\u26a0 Format incorrect";
                    requis_mail.style.fontSize = "1.1rem";
                    requis_mail.style.color = "orange";
                    requis_mail.style.fontFamily = "sans-serif"; 
                    mail.placeholder= "ex: dave.loper@afpa.fr";
                }

                else
                {
                    requis_mail.textContent = "\u2713";
                    requis_mail.style.fontSize = "1.1rem";
                    requis_mail.style.color = "green";
                }


/*----------------------------------------------------------------------------------------------------------------------------------------------*/

}                                                               /*FIN*/
