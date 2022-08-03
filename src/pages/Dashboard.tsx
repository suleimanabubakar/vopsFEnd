import { DashboardSkeleton } from "../components/dashboard/chart-loader"
import { Navbar } from "../components/universal/Navbar"
import { Sidebar } from "../components/universal/sidebar"
import { useEffect, useState } from "react"
import { VesselChart } from "../components/dashboard/charts/vessel"

export function Dashboard () {

    const [loading,setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
                setLoading(false)
        }, 3000);
    }, [])
    

    return (
        <div className="flex  text-gray-900">
        <Sidebar />

       <div className="flex h-screen flex-1 flex-col overflow-y-scroll">

            <Navbar title='Dashboard' />

        {loading ?

<DashboardSkeleton />
:

<>

<div className="w-full">


{/* chart area */}
    <div className="w-full flex flex-wrap  p-2">
       <VesselChart />
           
    </div>

</div>

</>
        
    }

    
    


       </div>

            </div>
    )
}