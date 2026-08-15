import { X } from "lucide-react";
import { useState, useEffect } from "react";
import type { Clients } from "../../types/index";

interface ModifierLeClientProps{
    isOpen:boolean;
    onClose:()=>void;
    clientData:Clients | null;
    onSave: (updateClient: Clients)=>void;
}

export default function ModifierClient({
    isOpen,
    onClose,
    clientData,
    onSave,
}: ModifierLeClientProps){
    const [nom, setNom]= useState("");
    const [email, setemail]= useState("");
    const [telephone, setTelephone]= useState("");
    const [immatriculation, setImmatriculation]= useState("");
    const [vehicule, setVehicule]= useState("");
    const [fonction, setFonction]= useState("");
    //Récuperons les informtions du client au moment de son charge
    useEffect(()=>{
        if(clientData){
            setNom(clientData.clientName || "");
            setemail(clientData.clientEmail || "");
            setFonction(clientData.statut || "Proprietaire");
            setVehicule(clientData.vehicule || "");
            setImmatriculation(clientData.immatriculation || "");
            setTelephone(clientData.telephone ? String(clientData.telephone): "");
        }
    }, [clientData, isOpen]);

    if(!isOpen) return null;

    const handleSubmit=(e: React.FormEvent)=>{
        e.preventDefault();
        if(clientData){
            onSave({
                ...clientData,
               clientName: nom,
               clientEmail:email,
               statut: fonction as 'Proprietaire' | 'Chauffeur' | 'Autres',
               vehicule: vehicule,
               immatriculation: immatriculation,
               telephone: Number(telephone),
            });
        }
        onClose();
    };
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 backdrop-blur-md">
            <div className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6 relative animate-zoom-in p-6">
                {/**En tete de ma poppup de modification d'un client */}
                <div className="flex justify-between items-center mb-10">
                    <h2 className="text-xl font-bold text-slate-800">Modifier Client</h2>
                    <button onClick={onClose} type="button" className="text-slate-400 hover:cursor-pointer hover:text-slate-600">
                        <X size={24}/>
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Nom :</label>
                            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"/>
                        </div>
                         <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Email :</label>
                            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"/>
                        </div>
                         <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Date inscription :</label>
                            <input type="text" value={nom} onChange={(e)=>setNom(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"/>
                        </div>
                         <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Téléphone :</label>
                            <input type="text" value={telephone} onChange={(e)=>setTelephone(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"/>
                        </div>
                         <div className="col-span-1">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Immatriculation :</label>
                            <input type="text" value={immatriculation} onChange={(e)=>setImmatriculation(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"/>
                        </div>
                         <div className="col-span-2">
                            <label className="block text-sm font-medium text-slate-700 mb-1">Véhicule :</label>
                            <input type="text" value={vehicule} onChange={(e)=>setVehicule(e.target.value)} className="w-full p-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:outline-none"/>
                        </div>
                    </div>
                    {/**Pour la fonction */}
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-slate-700 mb-2">Fonctions :</label>
                        <div className="gap-2 flex">
                            {["Proprietaire", "Chauffeur", "Autres"].map((f)=>(
                                <button type="button" onClick={()=>setFonction(f)} className={`px-4 py-2 rounded-md border text-sm transition-colors ${fonction === f ? "border-Encours/20 bg-Encours text-white font-medium" : "border-slate-300 text-slate-600 hover:bg-slate-50"}`}>{f}</button>
                            ))}
                        </div>
                    </div>
                    {/**Boutons d'action */}
                     <div className="flex mt-8 gap-3 justify-end">
                    <button className="px-4 py-2 text-slate-600 font-medium hover:bg-Encours/20 rounded-md border border-gray-400 hover:cursor-pointer" onClick={onClose}>Annuler</button>
                    <button className="px-4 py-2 text-white bg-Encours rounded-md font-medium hover:bg-BlueDark hover:cursor-pointer">Enregistrer</button>
                </div>
                </form>
            </div>
        </div>
    )
}