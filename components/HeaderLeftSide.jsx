import {BsFacebook,BsSearch} from 'react-icons/bs'
import {IoIosArrowRoundBack} from 'react-icons/io'
import { useRef } from 'react'


const HeaderLeftSide = () => {
    const searchRef=useRef()
    const backRef=useRef()
    const searchIconRef=useRef()

    const handleSearch =()=>{
        searchIconRef.current.classList.remove('flex')
        searchIconRef.current.classList.add('hidden')
        searchRef.current.classList.remove('hidden')
        searchRef.current.classList.add('flex')
        backRef.current.classList.remove('hidden')
        backRef.current.classList.add('flex')
    }
    const handleBack =()=>{
        searchIconRef.current.classList.remove('hidden')
        searchIconRef.current.classList.add('flex')
        searchRef.current.classList.remove('flex')
        searchRef.current.classList.add('hidden')
        backRef.current.classList.remove('flex')
        backRef.current.classList.add('hidden')
    }

  return (
    <div className='flex items-center gap-2'>
        <div>
            <BsFacebook className='text-[#1b74e4] text-4xl cursor-pointer'/>
        </div>
        <div className='flex gap-2 relative'>
            <span 
                className='
                    w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center
                '
                ref={searchIconRef}
                onClick={handleSearch}
            ><BsSearch/></span>
            <span 
                className='
                w-9 h-9 cursor-pointer rounded-full items-center justify-center
                hidden hover:bg-gray-200
                '
                ref={backRef}
                onClick={handleBack}
            ><IoIosArrowRoundBack className='text-2xl'/></span>
            <div className='flex items-center relative'>
                <input ref={searchRef} type="text" placeholder='Search Facebook'
                    className='hidden pl-5 rounded-3xl outline-none absolute p-2 top-0 border-[1px] border-gray-200'
                />
            </div>
        </div>
    </div>
  )
}

export default HeaderLeftSide