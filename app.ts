import { Cittadino, Incentivo, Startup } from "./classes";

// Istanzia oggetti Startup
let business1 = new Startup('Azienda1', 'Fitness-app', 'Descrizione startup 1', ['Prodotto 1', 'Prodotto 2']);
let business2 = new Startup('Azienda2', 'Wearable Technology', 'Descrizione startup 2', ['Prodotto 3', 'Prodotto 4']);

// Istanzia oggetti Incentivo
let bonus1 = new Incentivo('123', 'Descrizione incentivo 1', 1000, ['Requisito 1', 'Requisito 2']);
let bonus2 = new Incentivo('456', 'Descrizione incentivo 2', 2000, ['Requisito 1', 'Requisito 3']);

// Crea istanze della classe Cittadino
let citizen1 = new Cittadino('Mario', 'Rossi', 30, ['Corsa', 'Nuoto']);
let citizen2 = new Cittadino('Giulia', 'Verdi', 25, ['Yoga', 'Pallavolo']);

// Aggiungi requisiti alle startup
business1.requisiti.push('Requisito 1');
business1.requisiti.push('Requisito 2');
business2.requisiti.push('Requisito 3');

// Testa la logica di assegnazione degli incentivi alle startup
bonus1.assegnaAStartup(business1);
bonus2.assegnaAStartup(business2);

// Verifica se le startup hanno ricevuto gli incentivi
console.log(business1.incentivi);
console.log(business2.incentivi);

// Testa la partecipazione dei cittadini alle attività promosse
citizen1.partecipaAttivita(business1);
citizen2.partecipaAttivita(business2);

// Output dei requisiti delle startup
console.log("elenco requisiti dell'azienda1:")
console.log(business1.requisiti);
console.log("elenco requisiti dell'azienda2:")
console.log(business2.requisiti);
