'use client';

import UserSection from './UserSection';
import CurrencyConverter from './CurrencyConverter';
import UserBudgets from './UserBudgets';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const SidebarRight: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    
    return (
        <nav className={`${show === 'block' ? 'fixed md:hidden' : 'hidden'} md:block top-0 left-0 lg:z-auto w-4/6 sm:w-3/6 md:w-[33.5%] lg:w-[23%] h-full min-h-fit bg-white md:bg-transparent`}>
            <div className="divide-y divide-customGray">
                <UserSection />

                <div className="divide-y divide-customGray space-y-4">
                    <CurrencyConverter />
                    <UserBudgets />
                    
                    <button className='self-end mr-3 md:mr-8 mt-2 text-3xl md:hidden' onClick={closeSidebar}>&times;</button>
                </div>
            </div>
        </nav>
    );
};

export default SidebarRight;
