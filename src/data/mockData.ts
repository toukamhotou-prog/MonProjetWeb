import type { Intervention, TechnicienLoad } from "../types/index";
import type { Clients } from "../types/index";


export const mockIntervention: Intervention[]=[
    {id: '1', clientName: 'Angelo LD', vehicule:'Citroen 2.0', type:'Revision', statuts:'Terminé', amount:'250.000.000 FCFA'},
    {id: '2', clientName: 'Wilfried', vehicule:'Toyota 2.0', type:' Revision complète', statuts:'en cours', amount:'250.000.000 FCFA'},
    {id: '3', clientName: 'Andy Stanley', vehicule:'Corolla 3.0', type:'Revision complète', statuts:'En attente', amount:'250.000.000 FCFA'},
    {id: '4', clientName: 'Merton Veron', vehicule:'Jetour', type:'Refaire la peinture', statuts:'Annulé', amount:'250.000.000 FCFA'},
    {id: '5', clientName: 'Angelo LD', vehicule:'Jetour', type:'Refaire la peinture', statuts:'Livré', amount:'250.000.000 FCFA'},
    {id: '6', clientName: 'Youzeu Simo', vehicule:'Yaris', type:'Revision complète sur le véhicule', statuts:'Terminé', amount:'250.000.000 FCFA'},
];

export const mockTechnicians: TechnicienLoad[]=[
   {id:'1', TechnicienName:'Toukam Ange', interventions:23, interventionsMax:100},
   {id:'2', TechnicienName:'Simo Ange', interventions:45, interventionsMax:100},
    {id:'2', TechnicienName:'Simo Ange', interventions:15, interventionsMax:100},
];

export const mockClient: Clients[]=[
    {id:'1', clientName:'Angelo LD', clientEmail: 'Toukamhotou@gmail.com', statut:'Proprietaire', vehicule:'Peugot 308', immatriculation:'LTU-209', telephone:658193044,InscritLe:'14/08/2026'},
    {id:'2', clientName:'Wilfried Akira', clientEmail: 'WilfriedAkira@gmail.com', statut:'Chauffeur', vehicule:'Toyota Yaris', immatriculation:'Ouest-209', telephone:679680548,InscritLe:'10/04/2026'},
     {id:'3', clientName:'Nathan George', clientEmail: 'NathanGeorge@gmail.com', statut:'Autres', vehicule:'Renault26', immatriculation:'ABC-CDE-209', telephone:699456549,InscritLe:'14/02/2006'},
    {id:'4', clientName:'Andy Stanley', clientEmail: 'AndyStanley@gmail.com', statut:'Proprietaire', vehicule:'Toyota Yaris', immatriculation:'1236-209', telephone:679680548,InscritLe:'09/08/1999'},
     {id:'5', clientName:'Merton Veron', clientEmail: 'MertonVeron@gmail.com', statut:'Chauffeur', vehicule:'4x4', immatriculation:'LTU-209', telephone:658193044,InscritLe:'14/08/2026'},
    {id:'6', clientName:'Wilfried Akira', clientEmail: 'WilfriedAkira@gmail.com', statut:'Autres', vehicule:'Toyota Yaris', immatriculation:'Ouest-209', telephone:679680548,InscritLe:'10/04/2026'},
      {id:'1', clientName:'Angelo LD', clientEmail: 'Toukamhotou@gmail.com', statut:'Proprietaire', vehicule:'Peugot 308', immatriculation:'LTU-209', telephone:658193044,InscritLe:'14/08/2026'},
    {id:'2', clientName:'Wilfried Akira', clientEmail: 'WilfriedAkira@gmail.com', statut:'Chauffeur', vehicule:'Toyota Yaris', immatriculation:'Ouest-209', telephone:679680548,InscritLe:'10/04/2026'},
     {id:'3', clientName:'Nathan George', clientEmail: 'NathanGeorge@gmail.com', statut:'Autres', vehicule:'Renault26', immatriculation:'ABC-CDE-209', telephone:699456549,InscritLe:'14/02/2006'},
    {id:'4', clientName:'Andy Stanley', clientEmail: 'AndyStanley@gmail.com', statut:'Proprietaire', vehicule:'Toyota Yaris', immatriculation:'1236-209', telephone:679680548,InscritLe:'09/08/1999'},
     {id:'5', clientName:'Merton Veron', clientEmail: 'MertonVeron@gmail.com', statut:'Chauffeur', vehicule:'4x4', immatriculation:'LTU-209', telephone:658193044,InscritLe:'14/08/2026'},
    {id:'6', clientName:'Wilfried Akira', clientEmail: 'WilfriedAkira@gmail.com', statut:'Autres', vehicule:'Toyota Yaris', immatriculation:'Ouest-209', telephone:679680548,InscritLe:'10/04/2026'},
    
    
];