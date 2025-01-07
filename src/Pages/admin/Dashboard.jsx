
import { Sidebar } from './sidebar/page'
import { Outlet } from 'react-router-dom'
// import { Navbar } from './navbar/page'

export const Dashboard = () => {
  return (
    <div className="h-full">
    <div className='hidden md:flex flex-col w-48 fixed  h-full border-r z-50 bg-white'>
      <Sidebar/>
    </div>
    {/* <div className='md:pl-48 h-[60px] w-full fixed z-40 bg-white border-b'>
      <Navbar/>
    </div> */}
    <main className='md:pl-52 pt-20'>
      <Outlet/>
    </main>
    </div>
  )
}
