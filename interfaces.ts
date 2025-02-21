export interface IStartup {
    nome: string;
    settore: string; //e.g. wearable, fitness-app, machines, ecc.
    descrizione: string;
    prodotti_servizi: string[];

    riceviIncentivo(incentivo: IIncentivo): void;
}

export interface IIncentivo {
    codiceIdentificativo: string;
    descrizione: string;
    importo: number; //valore dell'incentivo
    criteriEleggibilita: string[];

    assegnaAStartup(startup: IStartup): void;
}

export interface ICittadino {
    nome: string;
    cognome: string;
    eta: number;
    interessiSportivi: string[];

    partecipaAttivita(startup: IStartup): void;
}