import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const Data=[
    {day: 1, amount: 0},
    {day: '5', amount: 20},
    {day: '10', amount: 21},
    {day: '15', amount: 30},
    {day: '20', amount: 36},
    {day: '25', amount: 43},
    {day: '30', amount: 50},

];

export const RevenuCart=()=>{
    return(
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between">
            <h3 className="text-lg font-bold tetxt-gray-800 mb-6">Chiffres d'affaires</h3>
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={Data} margin={{top:20, right:10, left:-20}}>
                    <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0339F8" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0339F8" stopOpacity={0.05}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill:'#9ca3af', fontSize:12}}/>
                     <YAxis dataKey="amount" axisLine={false} tickLine={false} tick={{fill:'#9ca3af', fontSize:12}}/>
                     <Tooltip/>
                     <Area
                     type="monotone"
                     dataKey="amount"
                     stroke="#0339F8"
                     strokeWidth={3}
                     fill="url(#colorRevenue)"
                     dot={{r:4, fill:'#2563eb', strokeWidth:2, stroke:"#ffffff"}}
                     />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};