import { SidebarLogo } from "./components/SidebarLogo"
import { SidebarRoutes } from "./components/SidebarRoutes"

export const Sidebar = () => {

  return (
    <div className="p-2">
      <div className="mb-10 pt-3 w-full mx-auto">
        <SidebarLogo/>
      </div>
      <div className="flex flex-col w-full">
      <SidebarRoutes/>
      </div>
    </div>
  )
}
