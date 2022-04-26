

const HeaderSearchNavItem = ({Icon,title,link,activeClass}) => {
  return (
    <div title={title}
        className={`nav-icon ${activeClass}`}
    >
        <Icon className='text-2xl text-gray-500 group-hover:text-[#1b74e4]'/>
    </div>
  )
}

export default HeaderSearchNavItem