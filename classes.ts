import { ICittadino, IIncentivo, IStartup } from './interfaces';

export class Startup implements IStartup {
    nome: string;
    settore: string;
    descrizione: string;
    prodotti_servizi: string[];
    incentivi: IIncentivo[];
    requisiti: string[];

    constructor(nome: string, settore: string, descrizione: string, prodotti_servizi: string[]) {
        this.nome = nome;
        this.settore = settore;
        this.descrizione = descrizione;
        this.prodotti_servizi = prodotti_servizi;
        this.incentivi = [];
        this.requisiti = [];
    }

    riceviIncentivo(incentivo: IIncentivo): void {
        try {
            // Controlla se l'incentivo non è già presente nella lista degli incentivi
            if (!this.incentivi.some(i => i.codiceIdentificativo === incentivo.codiceIdentificativo)) {
                this.incentivi.push(incentivo);
                console.log(`Incentivo ${incentivo.codiceIdentificativo} ricevuto correttamente da startup ${this.nome}`);
            } else {
                console.log(`Incentivo ${incentivo.codiceIdentificativo} già ricevuto da startup ${this.nome}`);
            }
        } catch (error) {
            console.error('Errore durante la ricezione dell\'incentivo:', error);
        }
    }
}

export class Incentivo implements IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    importo: number;
    criteriEleggibilita: string[];

    constructor(codiceIdentificativo: string, descrizione: string, importo: number, criteriEleggibilita: string[]) {
        this.codiceIdentificativo = codiceIdentificativo;
        this.descrizione = descrizione;
        this.importo = importo;
        this.criteriEleggibilita = criteriEleggibilita;
    }

    assegnaAStartup(startup: IStartup): void {
        const su = startup as Startup; // short name and cast for startup
        if (this.checkEleggibilita(su)) {
            console.log(`Assegnazione incentivo ${this.codiceIdentificativo} a startup ${su.nome}`);
            su.riceviIncentivo(this);
        } else {
            console.log(`Startup ${su.nome} non eleggibile per incentivo ${this.codiceIdentificativo}`);
        }
    }
    

    checkEleggibilita(startup: Startup): boolean {
        for (let criterio of this.criteriEleggibilita) {
            if (startup.requisiti.indexOf(criterio) === -1) {
                return false;
            }
        }
        return true;
    }
}

export class Cittadino implements ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    constructor(nome: string, cognome: string, eta: number, interessiSportivi: string[]) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.interessiSportivi = interessiSportivi;
    }

    partecipaAttivita(startup: IStartup): void {
        const su = startup as Startup; // short name and cast for startup
        if (su.incentivi.length > 0) { // poichè trattasi di attività correlate a incentivi
            console.log(`Partecipazione da parte di ${this.nome} ${this.cognome} all'attività di ${su.nome}`);
        } else {
            console.log(`Uso da parte di ${this.nome} ${this.cognome} dei servizi e/o prodotti di ${su.nome}`);
        }
    }
}
