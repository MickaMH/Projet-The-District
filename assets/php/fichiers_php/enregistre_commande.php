<?php

    require('assets/php/fichiers_php/PDO.php');

?>

<?php

    if (isset($_POST['commander'])) {

        $libelle = $_POST['libelle'];
        $prix = $_POST['prix'];
        $quantite = $_POST['quantite'];
        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $mail = $_POST['mail'];
        $phone = $_POST['phone'];
        $adresse = $_POST['adresse'];

        // $id_plat = ;
        $total = $prix * $quantite ;
        // $date_commande =  ;
        // $etat = ;
        $nom_client = $prenom . ' ' . $nom ;

        $insere_commande = " INSERT INTO commande(id_plat,quantite,total,etat,nom_client,mail,phone,adresse) VALUES 
        ('$id_plat','$quantite','$total','$etat','$nom_client','$mail','$phone','$adresse')";
        
    }

?>
<!-- --------------------------------------------------------------------------------------------------------------- -->

<?php

    require('assets/php/fichiers_php/PDO.php');

?>

<?php

if (isset($_POST['commander'])) {
    // Validez les entrées utilisateur (omis ici pour la simplicité)
    
    // Calcul du total
    $total = $prix * $quantite;
    
    // // Créez une connexion à la base de données (utilisez PDO ou MySQLi)
    // $conn = new PDO("mysql:host=localhost;dbname=the_district_base", "root", "");
    
    // Préparez la requête d'insertion
    $stmt = $pdo->prepare("INSERT INTO commande (id_plat, quantite, total, etat, nom_client, mail, phone, adresse) 
                            VALUES (:id_plat, :quantite, :total, :etat, :nom_client, :mail, :phone, :adresse)");
    
    // Liez les paramètres
    $stmt->bindParam(':id_plat', $id_plat);
    $stmt->bindParam(':quantite', $quantite);
    $stmt->bindParam(':total', $total);
    $stmt->bindParam(':etat', $etat);
    $stmt->bindParam(':nom_client', $nom_client);
    $stmt->bindParam(':mail', $mail);
    $stmt->bindParam(':phone', $phone);
    $stmt->bindParam(':adresse', $adresse);
    
    // Exécutez la requête
    if ($stmt->execute()) {
        echo "Commande enregistrée avec succès !";
    } else {
        echo "Erreur lors de l'enregistrement de la commande.";
    }
}

?>

<!-- --------------------------------------------------------------------------------------------------------------- -->

enreg_1.php
<?php

    if (isset($_POST['commander'])) {

        $libelle = $_POST['libelle'];
        $prix = $_POST['prix'];

        $quantite = $_POST['quantite'];

        $nom = $_POST['nom'];
        $prenom = $_POST['prenom'];
        $mail = $_POST['mail'];
        $phone = $_POST['phone'];
        $adresse = $_POST['adresse'];

        // $date_commande =  ;

        $nom_client = $prenom . ' ' . $nom ;

        $insere_commande = " INSERT INTO commande_test(libelle,prix,quantite,nom_client,mail,phone,adresse) VALUES 
        ('$libelle','$prix','$quantite','$nom_client','$mail','$phone','$adresse')";
        
    }

?>

---------------------------------------------------------------------------------------------------------------------------

<?php

    if (isset($_POST['commander'])) {

        $nom = $_POST['nomCommande'];
        $prenom = $_POST['prenomCommande'];
        $mail = $_POST['mailCommande'];
        $phone = $_POST['phoneCommande'];
        $adresse = $_POST['adresseCommande'];

        $insere_commande = " INSERT INTO commande_test(nom_client,prenom_client,mail_client,phone_client,adresse_client) VALUES 
        ('$nom','$prenom','$mail','$phone','$adresse')";
        
    }

?>