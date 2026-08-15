

import { mockTechnicians } from "../../data/mockData";

export const ChargeTechnicien=()=>{

  
    return(
        <div className="bg-white p-6 rounded-xl">
            <h3 className="font-bold text-xl">Charge par Technicien</h3>
            <div className="space-y-6 py-4">
           {mockTechnicians.map((index)=>{
            const pourcentage= Math.min((index.interventions/index.interventionsMax)*100,100);
            return(
                <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="rounded-full  bg-Encours/80 w-8 h-8 flex items-center justify-center">
                               <span className="font-bold text-white">{index.TechnicienName.charAt(0)}</span>
                            </div>
                            <div>
                            <span className="text-xs font-bold whitespace-nowrap">{index.TechnicienName}</span>
                            </div>
                        </div>

                       <span className="text-gray-700">{String(index.interventions).padStart(2,'0')}</span>
                </div>
                <div className="rounded-full w-full h-2 overflow-hidden bg-gray-300">
                        <div style={{width: `${pourcentage}%`}} className="bg-blue-600 h-full rounded-full"/>
                      </div>
                </div>
            );
           })}
            </div>
        </div>
    );
};