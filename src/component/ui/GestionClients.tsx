import type { Clients } from "../../types/index";
import { mockClient } from "../../data/mockData";
import { Edit2, Search, Trash2 } from "lucide-react";

interface GestionClientProps{
    onEditClient: (client: Clients)=>void;
}

export const GestionClient=({onEditClient}: GestionClientProps)=>{
    const getstatutBadgeClient=(statut: Clients['statut'] )=>{
        switch (statut){
            case 'Proprietaire':
                return 'bg-ButtonEncours/20 text-Encours rounded-full px-3 py-1 w-25 text-center';
            case 'Chauffeur':
                return 'bg-ButtonLivre/20 text-Livre rounded-full px-3 py-1 text-center';
            case 'Autres':
                return 'bg-ButtonGris/20 text-Gris rounded-full px-3 py-1';
            default:
                return 'bg-gray-100/20 text-gray-600'
        }
    }

   
    return(
       <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/80">
        {/**Barre de recherche */}
         <div className="relative mb-6 max-w-[200px]">
            <Search size={18} className="absolute left-3 top-1/2 text-slate-400 -translate-y-1/2"/>
            <input type="text"
            placeholder="Rechercher un client..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none transition-all focus:bg-white hover:bg-gray-700/10 placeholder-gray-400 focus:ring-2 focus:ring-Encours/20"/>
         </div>
         {/**Tableau */}
         <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6">
           <div className="overflow-y-auto max-h-[500px] overflow-x-auto">
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="border-b border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <th className="pb-4 pl-2">Client</th>
                        <th className="pb-4">Fonction</th>
                        <th className="pb-4">Vehicule</th>
                        <th className="pb-4">Immatriculation</th>
                        <th className="pb-4">Téléphone</th>
                        <th className="pb-4">Inscrit le</th>
                        <th className="pb-4 text-right pr-2">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                    {mockClient.map((index)=>(
                        <tr className="hover:bg-slate-50/80 trasnition-colors">
                            <td className="py-4 pl-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-Encours/70 flex items-center justify-center text-white font-semibold text-xs">{index.clientName.charAt(0)}</div>
                                    <div>
                                        <div className="font-semibold text-slate-900">{index.clientName}</div>
                                        <div className="text-xs text-slate-400">{index.clientEmail}</div>
                                    </div>
                                </div>
                            </td>
                            <td className="py-4">
                                <span className={` text-xs font-meduim ${getstatutBadgeClient(index.statut)}`}>{index.statut}</span>
                            </td>
                            <td className="py-4 text-slate-600">{index.vehicule}</td>
                            <td className="py-4 font-semibold text-slate-800">{index.immatriculation}</td>
                            <td className="py-4 text-slate-600">{index.telephone}</td>
                            <td className="py-4 text-slate-500">{index.InscritLe}</td>
                            {/**Action de modification et de suppression */}
                            <td className="py-4 text-right pr-2">
                                <div className="flex items-center justify-end text-slate-400 gap-3">
                                    <button onClick={()=>onEditClient(index)}>
                                        <Edit2 size={18}
                                        className="hover:text-Encours transition-colors hover:cursor-pointer"/>
                                    </button>
                                    <button>
                                        <Trash2 size={18}
                                        className="hover:text-red-500 hover:cursor-pointer transition-colors"/>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
           </div>
         </div>
       </div>
    );
}