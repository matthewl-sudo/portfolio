import React,{useState} from 'react'

export default function Dropdown({allCategories, fetchByCategory}){
    const [showMenu, setShowMenu] = useState(true)
    const displayDropdown = () => {
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
    const handleClick =(id) => {
        setShowMenu(!showMenu)
        fetchByCategory(id)
    }
    return (
    <div className="relative ml-auto w-48 inline-block text-right">
        <div className="">
            <button type="button" 
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-100 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white dark:bg-black px-3 py-2 text-sm font-semibold dark:text-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" 
            id="menu-button" aria-expanded="true" aria-haspopup="true"
            onClick={()=>displayDropdown()}>
            Categories
            <svg className={`-mr-1 h-5 w-5 text-gray-400 origin-center ${showMenu ? "rotate-180" : "rotate-0" }`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
            </svg>
            </button>
        </div>
    {/* Dropdown menu, showMenu/hide based on menu state.

        Entering: "transition ease-out duration-100"
        From: "transform opacity-0 scale-95"
        To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
        From: "transform opacity-100 scale-100"
        To: "transform opacity-0 scale-95" */}
    {!showMenu && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
        <div className="" role="none">
            {allCategories.map((category,key)=>{
                return  (<button
                    onClick={()=>handleClick(category._id)}
                    className="hover:bg-gray-200 text-gray-700 block px-4 py-2 text-sm" 
                    role="menuitem" tabIndex="-1" id={category.title} 
                    key={key}>
                            {category.title}
                        </button>
                    )}
                )
            }
        <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Account settings</a>
        </div>
    </div>}
</div>
  )
}

