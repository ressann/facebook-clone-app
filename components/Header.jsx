import HeaderLeftSide from "./HeaderLeftSide"
import HeaderNav from "./HeaderNav"
import HeaderRightSide from "./HeaderRightSide"


const Header = (props) => {
  return (
    <div className="">
        <div className="flex z-50 sticky bg-white top-0 justify-between p-1 pl-5 pr-5 items-center shadow-sm">
            {/* left side header */}
            <HeaderLeftSide/>

            {/* nav header */}
            <HeaderNav/>

            {/* right side header */}
            <HeaderRightSide/>
        </div>
        <main>{props.children}</main>
    </div>
  )
}

export default Header