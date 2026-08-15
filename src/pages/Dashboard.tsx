import { Header } from "../component/layout/Header";
import { CreditCard, Users, Settings, Calendar } from "lucide-react";
import { StatsCard } from "../component/ui/StatsCard";
import { RevenuCart } from "../component/charts/RevenueCart";
import { CercleChromatique } from "../component/charts/CercleChromatique";
import { InterventionRecentes } from "../component/ui/InterventionRecentes";
import { ChargeTechnicien } from "../component/ui/ChargeTechnicien";
import { mockClient } from "../data/mockData";

export const Dashboard=()=>{
    return(
        <div className="flex-1 flex flex-col bg-sidebar-bg">
            <Header userName="Toukam" workspaceName="Espace de travail"/>
            <main className="p-4 sm:p-8 flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Tableau de bord</h2>
                {/**Grille pour l'indication */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {/**la première carte d'indication */}
                    <StatsCard
                    title="Total Balance"
                    value="0 FCFA"
                    icon={<CreditCard size={20} className="text-green-500"/>}
                    badgeText="+0%"
                    badgeColor="bg-green-100/60"
                    badgeTextColor="text-green-600"
                    subText="nouveau ce mois"/>
                    {/**La deuxième carte d'indication */}
                    <StatsCard 
                    title="Clients Actifs"
                    icon={<Users size={20} className="text-orange-500"/>}
                    value={mockClient.length}
                    badgeText="+0"
                    badgeColor="bg-orange-100/60"
                    badgeTextColor="text-orange-600"
                    subText="ce nouveau mois"/>
                    <StatsCard
                    title="En cours"
                    icon={<Settings size={20} className="text-pink-500"/>}
                    value={0}
                    badgeColor="bg-pink-100/50"
                    badgeTextColor="text-pink-600"
                    subText="intervention en cours"/>
                    <StatsCard
                    title="Reservations"
                    icon={<Calendar size={20} className="text-red-500"/>}
                    badgeText="+0"
                    value={0}
                    badgeTextColor="text-red-600"
                    badgeColor="bg-red-100/50"
                    subText="Vs mois dernier"/>
                </div>
                {/**Graphique chart */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="lg:col-span-2">
                        <RevenuCart/>
                    </div>
                    <div className="lg:col-span-1">
                        <CercleChromatique/>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <InterventionRecentes/>
                    </div>
                     <div className="lg:col-span-1">
                        <ChargeTechnicien/>
                    </div>
                </div>
            </main>
         </div>
    );
};