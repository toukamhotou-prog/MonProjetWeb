import { Bell, Search, Filter } from 'lucide-react';

interface HeaderProps {
  userName?: string;
  workspaceName?: string;
}

export const Header = ({ 
  userName = "Toukam", 
  workspaceName = "Espace de travail" 
}: HeaderProps) => {
  return (
    <header className="flex items-center justify-between px-5 py-4 bg-white backdrop-blur-sm border-b border-gray-100 w-full sticky top-0 z-10">
      {/* Partie gauche  Message de bienvenue **/}
      <div>
        <h1 className="text-xl font-bold text-gray-800">
          <span className="text-blue-600 uppercase">BIENVENUE</span>, {userName}
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          {workspaceName}
        </p>
      </div>

      {/* Partie droite  Actions, Recherche & Filtre **/}
      <div className="flex items-center gap-3">
        {/* Bouton de Notification avec Badge **/}
        <button className="relative p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
          <Bell size={20} />
          {/* Point rouge indicatif */}
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Barre de Recherche */}
        <div className="relative flex items-center">
          <Search size={18} className="absolute left-3.5 text-gray-400" />
          <input
            type="text"
            placeholder="Recherche...."
            className="pl-10 pr-4 py-2 bg-gray-100 hover:bg-gray-200/70 focus:bg-white focus:ring-2 focus:ring-blue-500/20 rounded-xl text-sm text-gray-700 placeholder-gray-400 outline-none w-64 transition-all"
          />
        </div>

        {/* Bouton Filtre */}
        <button className="p-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-600 transition-colors">
          <Filter size={20} />
        </button>
      </div>
    </header>
  );
};

