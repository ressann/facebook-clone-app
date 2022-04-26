import {signOut} from 'next-auth/react'

const HeaderSearchNavItem = ({Icon,title,link,activeClass}) => {
  const handleSignout =()=>{
    signOut()
  }
  return (
    <div title={title}
        className={`nav-icon ${activeClass}`}
    >
        <Icon className='text-2xl text-gray-500 group-hover:text-[#1b74e4]'/>
        <button onClick={handleSignout} className="absolute bottom-[-33px] p-1 text-white rounded-md bg-blue-500 hidden group-hover:block">Sign out</button>
    </div>
  )
}

export default HeaderSearchNavItem