import type { ReactNode } from "react";

export interface Intervention{
    id:string;
    clientName:string;
    vehicule:string;
    type:string;
    statuts:'Terminé' | 'en cours' |'En attente' |'Annulé' | 'Livré';
    amount: string;
}

export interface TechnicienLoad{
    id:string,
    TechnicienName:string,
    interventions:number,
    interventionsMax:number;
}

export interface Clients{
    id:string | number;
    clientName:string;
    clientEmail:string;
    statut:'Proprietaire' | 'Chauffeur' | 'Autres';
    vehicule: string;
    immatriculation: string;
    telephone: number;
    InscritLe: string;
}