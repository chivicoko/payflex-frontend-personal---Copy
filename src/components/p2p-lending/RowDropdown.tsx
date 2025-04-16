'use client';

import { rowDropdownMenu } from '../../data/base';
import ButtonNeutral from '../button/ButtonNeutral';
// import { useRouter } from 'next/navigation';


interface RowDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  handleDropDownTabClick: (tab: string) => void;
  // item: User;
}

const RowDropdown: React.FC<RowDropdownProps> = ({ isOpen, handleDropDownTabClick }) => {
  // const router = useRouter();

  if (!isOpen) return null;

  const handleMenuItemClick = (tab: string) => {
    // if (tab === 'Accept') {
    //   alert('This user has been activated!');
    // } else if (tab === 'View User') {
    //   router.push('');
    // } else if (tab === 'Report User') {
    //   alert('This user has been reported!');
    // } else if (tab === 'Block User') {
    //   alert('This user has been blocked!');
    // }
    handleDropDownTabClick(tab);
  };

  return (
    <ul id='rowDropDownMenu' className={`absolute left-0 top-11 w-fit border py-1 z-[999999] bg-white shadow-md rounded-radius-4`}>
        {rowDropdownMenu.map(menuItem => 
            <li key={menuItem.id} className='group w-full whitespace-nowrap p-1'>
                <ButtonNeutral
                  onClick={() => handleMenuItemClick(menuItem.title)}
                  btnText1={menuItem.title}
                  classes={`border-0 focus:ring-transparent flex-1 flex items-center gap-3 w-full group-hover:text-white group-hover:bg-primary py-1 px-3 rounded-radius-4 text-sm transition-all duration-300 ease-in-out`}
                />
            </li>
        )}
    </ul>
  );
};

export default RowDropdown;
