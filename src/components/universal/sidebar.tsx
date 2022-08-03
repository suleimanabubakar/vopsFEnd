
import { Link } from 'react-router-dom'
import {ReactComponent as HomeIcon} from '../../assets/images/home-s.svg'
import {ReactComponent as ReportIcon} from '../../assets/images/reports.svg'
import {ReactComponent as LogoutIcon} from '../../assets/images/logout.svg'
import {ReactComponent as VesselIcon} from '../../assets/images/vessel.svg'
import {ReactComponent as ContainerIcon} from '../../assets/images/container-s.svg'
import {ReactComponent as SettingIcon} from '../../assets/images/settings.svg'




import  {ToolTip}  from "./ToolTip"


export const Sidebar = () => {
    return (
        <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white hidden lg:flex">



        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
        
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10 text-xs">
        

          <Link to="/" className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:border">


          <HomeIcon className='stroke-current w-6 h-6'/>


            <ToolTip>
              Dashboard
            </ToolTip>
          </Link>

          <Link to="/" className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:border">


<ContainerIcon className='w-6 h-6' />


  <ToolTip>
    Containers
  </ToolTip>
</Link>

<Link to="/" className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:border">
<VesselIcon className="h-6 w-6" />
  <ToolTip>
    Vessels
  </ToolTip>
</Link>

<Link to="/" className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:border">
<ReportIcon className="h-6 w-6" />

  <ToolTip>
    Reports 
  </ToolTip>
</Link>


          </nav>

          <div className="flex flex-col items-center gap-y-4 py-10 text-xs p-2">

          <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:border hover:border">
<SettingIcon className="h-6 w-6 stroke-gray-100 hover:stroke-bluish" />
            
            <ToolTip>
              Settings
            </ToolTip>
          </button>

        <Link to="/signin">  
        <button className="group relative rounded-xl p-2 text-gray-400 hover:bg-gray-100 hover:border">
            <LogoutIcon/>
            <ToolTip>
              Log Out
            </ToolTip>
          </button>
        </Link> 
          <button className="mt-2 rounded-full bg-bluish text-white w-10 h-10 flex justify-center items-center font-bold text-medium">
              <p>S A</p>
          </button>
        </div>
   
      
      </aside>
    )
}