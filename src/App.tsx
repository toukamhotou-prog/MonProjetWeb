import { Routes, Route } from "react-router-dom";
import { Sidebar } from "./component/layout/Sidebar";
import { Dashboard } from "./pages/Dashboard";
import { Client } from "./pages/client";

function App(){
    return(
        <div className="flex min-h-screen bg-gray-50">
            <Sidebar/>
           <div className="flex-1">
            <Routes>
                <Route path="/" element={<Dashboard/>}/>
                <Route path="/client" element={<Client/>}/>
            </Routes>
           </div>
        </div>
    )
}

export default App;