// Charger les données des véhicules
async function chargerVehicules() {
    try {
        console.log('Tentative de chargement des données des véhicules...');
        const response = await fetch('../data/vehicules.json');
        if (!response.ok) {
            throw new Error(`Erreur HTTP : ${response.status}`);
        }
        const data = await response.json();
        console.log('Données des véhicules chargées avec succès :', data);
        return data;
    } catch (error) {
        console.error('Erreur lors du chargement des véhicules :', error);
        return [];
    }
}

// Fonction pour filtrer les véhicules
function filtrerVehicules(vehicules, reponses) {
    console.log('Filtrage des véhicules avec les réponses utilisateur :', reponses);
    let resultats = vehicules.filter(vehicule => {
        return (
            (reponses.energie === "Hybride" ? vehicule.hybride === "Hybride" : vehicule.carburant === reponses.energie) &&
            vehicule.puissance_maximale >= reponses.puissance &&
            vehicule.carrosserie === reponses.gabarit &&
            vehicule.gamme === reponses.gamme
        );
    });

    // Trier les résultats par consommation de CO2 (du plus petit au plus grand)
    resultats.sort((a, b) => Number(a.co2_g_km) - Number(b.co2_g_km));

    console.log('Véhicules correspondant aux critères (triés par CO2) :', resultats);
    return resultats;
}

// Gérer la soumission du formulaire
document.getElementById('questionnaireForm').addEventListener('submit', async function (event) {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log('Formulaire soumis.');

    // Récupérer les réponses utilisateur
    const reponses = {
        energie: document.getElementById('energie').value,
        puissance: parseInt(document.getElementById('puissance').value, 10),
        gabarit: document.getElementById('gabarit').value,
        gamme: document.getElementById('gamme').value
    };
    console.log('Réponses utilisateur récupérées :', reponses);

    // Charger les véhicules et effectuer la recommandation
    const vehicules = await chargerVehicules();
    console.log('Véhicules chargés :', vehicules);
    if (vehicules.length === 0) {
        console.error('Aucun véhicule disponible pour la recommandation.');
        return;
    }
    const resultats = filtrerVehicules(vehicules, reponses);

    // Afficher les résultats
    afficherResultats(resultats);
});

// Fonction pour afficher les résultats
function afficherResultats(resultats) {
    console.log('Affichage des résultats...');
    const resultatsContainer = document.createElement('div');
    resultatsContainer.id = 'resultats';

    if (resultats.length === 0) {
        console.log('Aucun véhicule ne correspond aux critères.');
        resultatsContainer.innerHTML = '<p>Aucun véhicule ne correspond à vos critères.</p>';
    } else {
        console.log('Résultats trouvés :', resultats);
        const liste = document.createElement('ul');
        resultats.forEach(vehicule => {
            const item = document.createElement('li');
            item.textContent = `${vehicule.marque + " " + vehicule.modele_dossier} - ${vehicule.carburant}, ${vehicule.puissance_maximale} chevaux, ${vehicule.carrosserie}, ${vehicule.gamme}, ${vehicule.co2_g_km} g de CO2`;
            liste.appendChild(item);
        });
        resultatsContainer.appendChild(liste);
    }

    // Ajouter les résultats au DOM
    document.body.appendChild(resultatsContainer);

    // Stocker les résultats dans le localStorage
    console.log('Stockage des résultats dans le localStorage...');
    localStorage.setItem('resultats', JSON.stringify(resultats));

    // Rediriger vers la page des résultats
    console.log('Redirection vers la page des résultats...');
    window.location.href = '../components/results.html';
}