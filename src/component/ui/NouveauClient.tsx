import { X } from "lucide-react";
import { useState } from "react";

interface NouveauClientProps{
    isOpen:boolean;
    onClose:()=>void;
}

export default function NouveauClient({isOpen, onClose}: NouveauClientProps){
    const [fonction, setFonction]=useState('Proprietaire');

    if(!isOpen) return null;

    return(
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-zoom-in">
                {/**En tete de ma poppup */}
                <div className="flex justify-between items-center mb-2">
                    <h2 className="text-xl font-bold text-slate-800">Nouveau Client</h2>
                    <button onClick={onClose} className="text-slate-400 hover:text-slate-600">
                        <X size={24}/>
                    </button>
                </div>
                <div className="border border-gray-400 mb-10"></div>
                {/**Formulaire à remplir pour ajouter un nouveau client dans le module */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                        <label className=" text-sm font-medium text-slate-700 mb-1">Nom :</label>
                        <input type="text" className="block w-full border border-slate-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-text-gray-600 placeholder-text-xs" placeholder="Entrez le nom du client" />
                    </div>
                    <div>
                         <label className=" block text-sm font-medium text-slate-700 mb-1">Email :</label>
                        <input type="email" className="block w-full border border-slate-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-text-gray-600 placeholder-text-xs"/>
                    </div>
                     <div>
                         <label className=" block text-sm font-medium text-slate-700 mb-1">Date Inscription :</label>
                        <input type="date" className="block w-full border border-slate-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-text-gray-600 placeholder-text-xs" placeholder="Entrez l'Email du client"/>
                    </div>
                     <div>
                        <label className=" text-sm font-medium text-slate-700 mb-1">Téléphone :</label>
                        <input type="number" className="block w-full border border-slate-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-text-gray-600 placeholder-text-xs" placeholder="Entrez le numéro de téléphone du client" />
                    </div>
                    <div>
                        <label className=" text-sm font-medium text-slate-700 mb-1">Immatriculation :</label>
                        <input type="text" className="block w-full border border-slate-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-text-gray-600 placeholder-text-xs" placeholder="Entrez son numéro d'immatriculation"/>
                    </div>
                    <div className="col-span-2">
                          <label className=" block text-sm font-medium text-slate-700 mb-1">Véhicule :</label>
                        <input type="text" className="block w-full border border-slate-300 rounded-md p-2 outline-none focus:ring-2 focus:ring-blue-500/20 placeholder-text-gray-600 placeholder-text-xs" placeholder="Entrez son modèle de véhicule"/>
                    </div>
                </div>
                <div className="mt-4">
                    <label className="text-sm font-medium text-slate-700 mb-2">Fonction :</label>
                    <div className="flex gap-2">
                        {['Proprietaire', 'Chauffeur', 'Autres'].map((f)=>(
                            <button
                            key={f}
                            onClick={()=>setFonction(f)}
                            className={`px-4 py-2 rounded-md border text-sm transition-all ${fonction === f ? 'border-Encours/20 bg-ButtonEncours text-white font-bold' : 'border-slate-300 text-slate-600 hover:bg-slate-50'}`}>{f}</button>
                        ))}
                    </div>
                </div>
                {/**Les deux boutons d'actions qui sont en dessous de la page de nouveau client */}
                <div className="flex mt-8 gap-3 justify-end">
                    <button className="px-4 py-2 text-slate-600 font-medium hover:bg-Encours/20 rounded-md border border-gray-400 hover:cursor-pointer" onClick={onClose}>Annuler</button>
                    <button className="px-4 py-2 text-white bg-Encours rounded-md font-medium hover:bg-BlueDark hover:cursor-pointer">Créer le Client</button>
                </div>
            </div>
        </div>
    )
}