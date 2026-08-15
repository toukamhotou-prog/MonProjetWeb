import { NavLink } from 'react-router-dom';
import {LayoutDashboard, Users, Wrench, UserCheck, History, Calendar, FileText, MessageSquare, Bookmark, Settings, LogOut } from 'lucide-react';

export const Sidebar = () => {
  return (
    <aside className="w-63 bg-white border-r border-gray-200 h-screen flex flex-col justify-between p-5 select-none sticky top-0">
      <div>
        {/* Logo AutoPro */}
        <div className="flex items-center gap-2 mb-8 px-5">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            {/**C'est ici que je dois mettre le logo de mon application */}
          </div>
          <span className="font-bold text-xl text-blue-900">AutoPro</span>
        </div>

        {/* Section Administration */}
        <div className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">
          Administration
        </div>
        <nav className="space-y-1 mb-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white ' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <LayoutDashboard size={18} /> Tableau de bord
          </NavLink>

          <NavLink 
            to="/client" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Users size={18} /> Clients
          </NavLink>

          <NavLink 
            to="/intervention" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Wrench size={18} /> Interventions
          </NavLink>

          <NavLink 
            to="/employe" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <UserCheck size={18} /> Employés
          </NavLink>

          <NavLink 
            to="/historique" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <History size={18} /> Historiques
          </NavLink>
        </nav>

        {/* Section Atelier de travail */}
        <div className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">
          Atelier de travail
        </div>
        <nav className="space-y-1 mb-6">
          <NavLink 
            to="/planning" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Calendar size={18} /> Planning
          </NavLink>

          <NavLink 
            to="/facturation" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <FileText size={18} /> Facturation
          </NavLink>

          <NavLink 
            to="/messages" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <MessageSquare size={18} /> Messages
          </NavLink>

          <NavLink 
            to="/reservations" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Bookmark size={18} /> Réservations
          </NavLink>
        </nav>
      </div>

      {/* Section Généraux & Carte Utilisateur */}
      <div>
        <div className="text-xs font-semibold text-gray-400 mb-2 px-2 uppercase tracking-wider">
          Généraux
        </div>
        <div className="space-y-1 border-b border-gray-100 pb-4">
          <NavLink 
            to="/parametres" 
            className={({ isActive }) => 
              `flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                isActive ? 'bg-button-color text-white' : 'text-gray-600 hover:bg-gray-100'
              }`
            }
          >
            <Settings size={18} /> Paramètres
          </NavLink>

          <button className="flex items-center gap-3 px-3 w-full rounded-xl font-medium text-sm text-red-500 hover:bg-red-50 transition-colors">
            <LogOut size={18} /> Déconnexion
          </button>
        </div>

        {/* Profil connecté (Affiche Toukam Ange) */}
        <div className="flex items-center gap-3 p-2 bg-gray-50 border border-gray-200 rounded-xl">
          <div className="w-9 h-9 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold text-sm">
            TA
          </div>
          <div className="text-xs overflow-hidden">
            <p className="font-bold text-gray-800 truncate">TOUKAM ANGE</p>
            <p className="text-gray-500 truncate">Administrateur </p>
          </div>
        </div>
      </div>
    </aside>
  );
};

