
import type {ReactNode} from "react"

interface StatsCardProps{
    title:string;
    icon:ReactNode;
    value:string | number;
    badgeText?:string;
    badgeColor?:string;
    badgeTextColor?:string;
    subText?:string;
}

export const StatsCard=({
    title,
    icon,
    value,
    badgeText,
    badgeColor="bg-emerald-50",
    badgeTextColor="text-emelrad-600",
    subText,
}: StatsCardProps)=>{
    return(
        <div className="bg-white backdrop-blur-sm p-5 rounded-2xl border border-gray-100 flex flex-col justify-between hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between text-gray-500 mb-3">
                <span className="text-sm font-medium text-gray-600">{title}</span>
                <div className="p-1.5 rounded-lg bg-gray-50">
                    {icon}
                </div>
            </div>
            {/**Valeur qui est au milieu */}
            <div className="my-2 text-center">
                <span className="text-2xl font-extrabold text-gray-800 tracking-tight">
                    {value}
                </span>
            </div>
            {/**Indicateur ou encore variation de la total balance */}
            {(badgeText || subText) && (
                <div className="flex items-center gap-2 mt-2 text-xs justify-center">
                    {badgeText && (
                        <span className={`px-2 py-0.5 font-bold rounded-full ${badgeColor} ${badgeTextColor}`}>
                            {badgeText}
                        </span>
                    )}
                    {subText &&(
                        <span className="text-gray-400 font-medium">{subText}</span>
                    )}
                </div>
            )}
        </div>
    );
};