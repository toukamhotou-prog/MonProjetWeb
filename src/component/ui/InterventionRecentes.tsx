import {mockIntervention, } from "../../data/mockData"
import type { Intervention } from "../../types";


export const InterventionRecentes=()=>{
    const getStatutBadge=(statuts: Intervention['statuts'])=>{
        switch(statuts){
            case 'Terminé':
                 return 'bg-ButtonTermine/20 text-Termine w-25 text-center';
            case 'en cours':
                return 'bg-ButtonEncours/20 text-Encours w-25 px-3 py-1 text-center';
            case 'En attente':
                return 'bg-ButtonEnattente/20 text-Enattente w-25 text-center';
            case 'Annulé':
                return 'bg-ButtonAnnule/20 text-Annule w-25 text-center';
            case 'Livré':
                return 'bg-ButtonLivre/20 text-Livre w-25 text-center';
            default :
                 return 'bg-gray-100 text-gray-600';
        }
    };

    return(
        <div className="bg-white p-6 rounded-2xl">
            <h2 className="text-xl font-bold">Interventions récentes</h2>
            <div className="divide-y divide-gray-100">
                {mockIntervention.map((item)=>(
                    <div className="py-4 flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3 min-w-0 justify-center">
                            <div className="w-8 h-8 bg-ButtonEncours/17 rounded-full text-Encours font-bold items-center justify-center flex">{item.clientName.charAt(0)}</div>
                            <div className="truncate">
                                <p className="font-semibold text-gray-800 text-sm tracking-wider">{item.clientName}</p>
                                <p className="text-gray-400 text-xs tracking-wider">{item.vehicule}-{item.type}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6 flex-shrink-0 justify-center">
                            <span className={`rounded-full px-3 py-1 ${getStatutBadge(item.statuts)}`}>{item.statuts}</span>
                            <span className="font-bold text-gray-700 min-w-[120px] text-right">{item.amount}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};