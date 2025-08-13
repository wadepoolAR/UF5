        // Données des villes et lieux de sélection
        const citiesData = {
            "Paris": {
                coords: [48.8566, 2.3522],
                venues: [
                    {
                        name: "Stade Charléty",
                        address: "17 Avenue Pierre de Coubertin, 75013 Paris",
                        coords: [48.8186, 2.3450]
                    },
                    {
                        name: "Centre Sportif Suzanne Lenglen",
                        address: "2 Rue Louis Armand, 75015 Paris",
                        coords: [48.8289, 2.2731]
                    },
                    {
                        name: "Stade Jean Bouin",
                        address: "26 Avenue du Général Sarrail, 75016 Paris",
                        coords: [48.8416, 2.2531]
                    }
                ]
            },
            "Lyon": {
                coords: [45.7640, 4.8357],
                venues: [
                    {
                        name: "Parc OL",
                        address: "10 Avenue Simone Veil, 69150 Décines-Charpieu",
                        coords: [45.7653, 5.0719]
                    },
                    {
                        name: "Stade de Gerland",
                        address: "353 Avenue Jean Jaurès, 69007 Lyon",
                        coords: [45.7269, 4.8317]
                    },
                    {
                        name: "Centre Sportif du Rhône",
                        address: "12 Rue de la République, 69002 Lyon",
                        coords: [45.7578, 4.8320]
                    }
                ]
            },
            "Marseille": {
                coords: [43.2965, 5.3698],
                venues: [
                    {
                        name: "Stade Vélodrome",
                        address: "3 Boulevard Michelet, 13008 Marseille",
                        coords: [43.2699, 5.3958]
                    },
                    {
                        name: "Complexe Sportif de la Capelette",
                        address: "Avenue de la Capelette, 13010 Marseille",
                        coords: [43.2847, 5.4058]
                    },
                    {
                        name: "Stade de l'Huveaune",
                        address: "Traverse de la Martine, 13011 Marseille",
                        coords: [43.2889, 5.4789]
                    }
                ]
            },
            "Toulouse": {
                coords: [43.6047, 1.4442],
                venues: [
                    {
                        name: "Stadium de Toulouse",
                        address: "1 Allée Gabriel Biénès, 31400 Toulouse",
                        coords: [43.5833, 1.4342]
                    },
                    {
                        name: "Complexe Sportif de Rangueil",
                        address: "118 Route de Narbonne, 31062 Toulouse",
                        coords: [43.5647, 1.4642]
                    }
                ]
            },
            "Nice": {
                coords: [43.7102, 7.2620],
                venues: [
                    {
                        name: "Allianz Riviera",
                        address: "Boulevard des Jardiniers, 06200 Nice",
                        coords: [43.7053, 7.1925]
                    },
                    {
                        name: "Stade du Ray",
                        address: "155 Route de Grenoble, 06200 Nice",
                        coords: [43.7253, 7.2425]
                    }
                ]
            },
            "Nantes": {
                coords: [47.2184, -1.5536],
                venues: [
                    {
                        name: "Stade de la Beaujoire",
                        address: "5 Boulevard de la Beaujoire, 44300 Nantes",
                        coords: [47.2561, -1.5247]
                    },
                    {
                        name: "Complexe Sportif du Petit Port",
                        address: "Rue du Petit Port, 44000 Nantes",
                        coords: [47.2284, -1.5436]
                    }
                ]
            },
            "Strasbourg": {
                coords: [48.5734, 7.7521],
                venues: [
                    {
                        name: "Stade de la Meinau",
                        address: "12 Rue de l'Extenwoerth, 67100 Strasbourg",
                        coords: [48.5600, 7.7550]
                    },
                    {
                        name: "Centre Sportif de la Robertsau",
                        address: "161 Rue Mélanie, 67000 Strasbourg",
                        coords: [48.5934, 7.7721]
                    }
                ]
            },
            "Montpellier": {
                coords: [43.6110, 3.8767],
                venues: [
                    {
                        name: "Stade de la Mosson",
                        address: "Avenue de Heidelberg, 34080 Montpellier",
                        coords: [43.6222, 3.8119]
                    },
                    {
                        name: "Complexe Sportif Grammont",
                        address: "50 Place Eugène Bataillon, 34095 Montpellier",
                        coords: [43.6310, 3.8567]
                    }
                ]
            },
            "Bordeaux": {
                coords: [44.8378, -0.5792],
                venues: [
                    {
                        name: "Nouveau Stade de Bordeaux",
                        address: "Cours Jules Ladoumègue, 33300 Bordeaux",
                        coords: [44.8978, -0.5611]
                    },
                    {
                        name: "Stade Chaban-Delmas",
                        address: "Place Johnston, 33000 Bordeaux",
                        coords: [44.8278, -0.5892]
                    }
                ]
            },
            "Lille": {
                coords: [50.6292, 3.0573],
                venues: [
                    {
                        name: "Stade Pierre-Mauroy",
                        address: "261 Boulevard de Tournai, 59650 Villeneuve-d'Ascq",
                        coords: [50.6119, 3.1306]
                    },
                    {
                        name: "Complexe Sportif de Fives",
                        address: "Rue de Lannoy, 59000 Lille",
                        coords: [50.6392, 3.0773]
                    }
                ]
            }
        };

        let map;
        let selectedCity = null;
        let selectedVenue = null;

        // Initialisation de la carte
        function initMap() {
            map = L.map('map').setView([46.603354, 1.888334], 6);
            
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            // Ajouter les marqueurs pour chaque ville
            Object.keys(citiesData).forEach(cityName => {
                const city = citiesData[cityName];
                const marker = L.marker(city.coords).addTo(map);
                
                const popupContent = `
                    <div class="city-popup">
                        <h6>${cityName}</h6>
                        <p>${city.venues.length} lieu(x) de sélection disponible(s)</p>
                        <button class="btn" onclick="selectCity('${cityName}')">
                            Sélectionner cette ville
                        </button>
                    </div>
                `;
                
                marker.bindPopup(popupContent);
            });
        }

        // Sélection d'une ville
        function selectCity(cityName) {
            selectedCity = cityName;
            selectedVenue = null;
            
            const city = citiesData[cityName];
            
            // Mettre à jour les champs du formulaire
            document.getElementById('villeInput').value = cityName;
            document.getElementById('lieuInput').value = '';
            
            // Afficher les informations sélectionnées
            document.getElementById('selectedCity').innerHTML = `<strong>Ville :</strong> ${cityName}`;
            document.getElementById('selectedVenue').innerHTML = '';
            document.getElementById('selectedInfo').style.display = 'block';
            
            // Afficher la liste des lieux
            displayVenues(city.venues);
            
            // Centrer la carte sur la ville
            map.setView(city.coords, 12);
            
            // Fermer tous les popups
            map.closePopup();
        }

        // Afficher les lieux disponibles
        function displayVenues(venues) {
            const container = document.getElementById('venuesContainer');
            container.innerHTML = '';
            
            venues.forEach((venue, index) => {
                const venueDiv = document.createElement('div');
                venueDiv.className = 'venue-option';
                venueDiv.onclick = () => selectVenue(venue, venueDiv);
                
                venueDiv.innerHTML = `
                    <div class="venue-name">${venue.name}</div>
                    <div class="venue-address">${venue.address}</div>
                `;
                
                container.appendChild(venueDiv);
            });
            
            document.getElementById('venuesList').style.display = 'block';
        }

        // Sélection d'un lieu
        function selectVenue(venue, element) {
            selectedVenue = venue;
            
            // Retirer la sélection précédente
            document.querySelectorAll('.venue-option').forEach(el => {
                el.classList.remove('selected');
            });
            
            // Ajouter la sélection actuelle
            element.classList.add('selected');
            
            // Mettre à jour les champs du formulaire
            document.getElementById('lieuInput').value = venue.name;
            
            // Mettre à jour les informations affichées
            document.getElementById('selectedVenue').innerHTML = `<strong>Lieu :</strong> ${venue.name}<br><small>${venue.address}</small>`;
        }

        // Soumission du formulaire
        document.getElementById('inscriptionForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (!selectedCity || !selectedVenue) {
                alert('Veuillez sélectionner une ville et un lieu de sélection sur la carte.');
                return;
            }
            
            // Récupérer les données du formulaire
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Ajouter les informations de sélection
            data.ville_coords = citiesData[selectedCity].coords;
            data.lieu_coords = selectedVenue.coords;
            data.lieu_adresse = selectedVenue.address;
            
            console.log('Données d\'inscription:', data);
            
            // Simulation d'envoi
            alert('Inscription envoyée avec succès ! Vous recevrez un email de confirmation.');
            
            // Réinitialiser le formulaire
            this.reset();
            selectedCity = null;
            selectedVenue = null;
            document.getElementById('selectedInfo').style.display = 'none';
            document.getElementById('venuesList').style.display = 'none';
        });

        // Initialiser la carte au chargement de la page
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(initMap, 100);
        });
