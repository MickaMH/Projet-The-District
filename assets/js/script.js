document.addEventListener('DOMContentLoaded', function() {
    var sendMailButton = document.getElementById('sendMailButton');
    sendMailButton.addEventListener('click', function() {
        sendEmail();
    });
});

function sendEmail() {
    // Fais une requête AJAX vers le script PHP
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'assets/php/envoyer_email.php', true);

    xhr.onload = function() {
        if (this.status === 200) {
            alert('E-mail envoyé avec succès !');
        } else {
            alert('Erreur lors de l\'envoi de l\'e-mail.');
        }
    };

    xhr.send();
}
