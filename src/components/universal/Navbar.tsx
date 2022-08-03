import { ReactComponent as NotificationIcon } from "../../assets/images/notification.svg"

type NavProps = {
    title: string
}

export const Navbar = (props:NavProps) => {

    return (
        <header className="flex h-16 items-center gap-x-6 border-b border-gray-200 bg-white px-8">
          
          <p className="my-3 soraFonts text-gray-500">MTCO</p> 
          <p className="my-3  text-xs text-white bg-bluish px-3 py-1 rounded">{props.title}</p> 
       
        

          {/* Separator */}
          <div className="h-full w-px bg-gray-200 ml-auto" />

          <button className="flex items-center justify-center rounded-xl bg-gray-100 p-2">
           <NotificationIcon className="w-6 h-6" />
          </button>
        </header>
    )

}