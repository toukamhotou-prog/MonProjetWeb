import { PieChart, Pie,Cell, ResponsiveContainer } from "recharts";

const Data=[
{name: "En cours", value:38, color:'#0339F8'},
{name: "Livré", value:15, color:'#800080'},
{name: "Terminé", value:20, color:'#5AE85A'},
{name: "En attente", value:27, color:'#FF8D28'},

];

export const CercleChromatique=()=>{
    return(
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between items-center">
            <div className="relative w-full h-56 flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                        data={Data}
                        innerRadius={65}
                        outerRadius={90}
                        paddingAngle={2}
                        dataKey="value"
                        >
                            {Data.map((entry)=>(
                                <Cell fill={entry.color}/>
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
                <div className="absolute text-center">
                    <span className="font-extrabold text-gray-800 text-2xl">100%</span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y3 w-full mt-4 text-xs font-medium text-gray-600">
                {Data.map((ange)=>(
                    <div className="flex items-center gap-2  text-center">
                        <span className="w-3 h-3 rounded-full shrink-0" style={{backgroundColor:ange.color}}/>
                        <span>{ange.name} <strong>{ange.value}%</strong></span>
                    </div>
                ))}
            </div>
        </div>
    );
};