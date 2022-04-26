import {AiOutlineHome,AiOutlineMenu} from 'react-icons/ai'
import {MdOutlineOndemandVideo} from 'react-icons/md'
import {BsShop} from 'react-icons/bs'
import {RiGroup2Line} from 'react-icons/ri'
import HeaderSearchNavItem from './HeaderSearchNavItem'
import {SiFacebookgaming} from 'react-icons/si'




const HeaderNav = () => {
  return (
    <div className="flex gap-2">
      <HeaderSearchNavItem Icon={AiOutlineHome} title='Home' activeClass={'flex border-b-2 border-b-[#1b74e4] text-[#1b74e4] group'}/>
      <HeaderSearchNavItem Icon={MdOutlineOndemandVideo} title='Watch' activeClass={'flex'}/>
      <HeaderSearchNavItem Icon={BsShop} title='Marketplace' activeClass={'flex'}/>
      <HeaderSearchNavItem Icon={RiGroup2Line} title='Groups' activeClass={'flex'}/>
      <HeaderSearchNavItem Icon={AiOutlineMenu} title='More' activeClass={'flex lg:hidden'}/>
      <HeaderSearchNavItem Icon={SiFacebookgaming} title='Game' activeClass={'hidden lg:flex'}/>
    </div>
  )
}

export default HeaderNav