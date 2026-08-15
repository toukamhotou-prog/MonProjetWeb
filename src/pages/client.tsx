
import { useState } from "react";
import { GestionClient } from "../component/ui/GestionClients";
import { mockClient } from "../data/mockData";
import { Plus } from "lucide-react";
import NouveauClient from "../component/ui/NouveauClient";
import type { Clients } from "../types/index";
import ModifierClient from "../component/ui/ModifierClient";

export const Client=()=>{

   const [isModalOpen, setIsModalOpen]=useState(false);
   const[isEditModalOpen, setIsEditModalOpen]=useState(false);
   const [selectedClient, setSelectedClient]=useState<Clients | null>(null);
   
   //Déclench au cllic sur le bouton de odification"
   const handleEditClient=(client: Clients)=>{
      setSelectedClient(client);
      setIsEditModalOpen(true);
   }

   const handleSaveUpdate=(upadateClient: Clients)=>{
      console.log("Client mis à jour :", upadateClient);
   };
   return(
    <main className="p-4 sm:p-8">
     <div className="flex justify-between mb-6">
      <div>
         <h1 className="text-2xl font-bold text-gray-800">Gestion des clients</h1>
         <p className="text-sm text-slate-500">{mockClient.length} clients enregistrés </p>
      </div>
      <button className="flex items-center bg-Encours rounded-xl text-white font-bold text-xs px-3 py-1 hover:cursor-pointer hover:bg-BlueDark transition-color shadow-sm" 
      onClick={()=>setIsModalOpen(true)}
     >
         <Plus size={18}/>
         Nouveau client
      </button>
     </div>
     <GestionClient onEditClient={handleEditClient}/>
     <NouveauClient isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)}/>
      <ModifierClient isOpen={isEditModalOpen} onClose={()=>{setIsEditModalOpen(false); setSelectedClient(null);}} clientData={selectedClient} onSave={handleSaveUpdate}/>
    </main>
   );
};