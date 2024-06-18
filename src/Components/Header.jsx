import { ShoppingBag } from "lucide-react"
import { Link } from "react-router-dom"

const Header = () => {
  return (
   <>
   <header className="z-20">
    <div>
      <div className="flex justify-around border-b-2 border-grayishBlue items-center h-[80px] max-w-screen-xl">
        <div>
          <h2 className="text-4xl">
            <img className="w-32" src="/public/images/logo11.png" alt="" />
          </h2>
        </div>
        <div className="header-col2">
          <ul className="flex gap-5">
            <li><Link to="/store" className="nav-link text-darkGrayishBlue pb-[1.5rem]"> Store</Link></li>
            <li><Link className="nav-link text-darkGrayishBlue pb-[1.5rem]"> Man</Link></li>
            <li><Link className="nav-link text-darkGrayishBlue pb-[1.5rem]"> Women</Link></li>
            <li><Link className="nav-link text-darkGrayishBlue pb-[1.5rem]"> About</Link></li>
            <li><Link className="nav-link text-darkGrayishBlue pb-[1.5rem]"> Contact</Link></li>
          </ul>
        </div>
        <div className="flex justify-between items-center gap-4">
          <ShoppingBag className=" text-veryDarkBlue"/>
          <div>
            <img className="profile" src="/public/images/profile.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
   </header>
   </>
  )
}

export default Header