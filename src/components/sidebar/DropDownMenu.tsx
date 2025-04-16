'use client';

import ButtonNeutral from '../button/ButtonNeutral';

interface DropDownMenuProps {
    activeSubtab: string,
    menu: {
        id: number,
        title: string,
        url: string
    }[],
    handleTabNavigation: (url: string) => void;
}

const DropDownMenu = ({activeSubtab, menu, handleTabNavigation}: DropDownMenuProps) => {
  return (
    <ul className={`top-11 w-full border absolute left-0 py-1 z-20 bg-white shadow-md rounded-radius-4`}>
        {menu.map(menuItem => 
            <li key={menuItem.id} className='group w-full whitespace-nowrap p-1'>
                <ButtonNeutral
                    onClick={() => handleTabNavigation(menuItem.url)}
                    btnText1={menuItem.title}
                    classes={`${activeSubtab === menuItem.url ? "text-white bg-blue-600" : "text-textGray bg-transparent"} border-0 focus:ring-transparent flex-1 flex items-center gap-3 w-full group-hover:text-white group-hover:bg-blue-600 py-1 px-3 rounded-radius-4 text-sm transition-all duration-300 ease-in-out`}
                />
            </li>
        )}
    </ul>
  )
}

export default DropDownMenu;