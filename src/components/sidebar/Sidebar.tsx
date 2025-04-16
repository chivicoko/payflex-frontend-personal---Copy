'use client';

import { menuItems } from '../../data/base';
import Image from 'next/image';
import Link from 'next/link';
import ButtonNeutral from '../button/ButtonNeutral';
import { useRouter } from 'next/navigation';
import Tabs from './Tabs';
import { Logout } from '@mui/icons-material';
import LoadingSpinner from '../LoadingSpinner';
import { useUserData } from '@/hooks/useUserData';
import { useGeneralData } from '@/stores/useGeneralData';

interface SidebarProps {
    show?: string;
    closeSidebar?: () => void;
}
  
const Sidebar: React.FC<SidebarProps> = ({ show = 'hidden', closeSidebar = () => {} }) => {
    const dropLoggedInUserInfo = useGeneralData((state) => state.dropLoggedInUserInfo);

    const {
    userDashboardData,
    isPending,
    hasError,
    } = useUserData();

    const { user } = userDashboardData || {};
    
    const router = useRouter();

    const logout = () => {
        router.push('/');
        dropLoggedInUserInfo();
        sessionStorage.removeItem('accessToken');
    }

    return (
        <nav className={`${show === 'block' ? 'fixed lg:hidden' : 'hidden'} px-2 lg:block top-0 left-0 z-50 lg:z-auto w-4/6 sm:w-3/6 lg:w-[21%] xl:w-1/6 h-full min-h-full bg-white lg:bg-transparent`}>
            <div className={`relative overflow-y-scroll custom-scrollbar2 w-full h-screen min-h-screen flex flex-col justify-between items-start px-1 pt-10 md:pt-0`}>
                <button className='absolute top-2 right-2 text-3xl lg:hidden hover:text-red-500' onClick={closeSidebar}>&times;</button>
                <div className="h-full min-h-full flex flex-col justify-start items-start gap-4 pb-5 md:py-6">
                    <Link href="/" className="flex items-center gap-1" onClick={closeSidebar}>
                        <div className="relative size-14 px-3 rounded-full">
                            <Image
                                src="/images/PayFlex-Logo.jpg"
                                alt="PayFlex's Logo"
                                fill
                                priority
                                className="object-contai rounded-full"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <p className="font-semibold text-3xl lg:text-4xl">PayFlex</p>
                    </Link>
                    
                    <div className="flex-1 flex flex-col items-start justify-between gap-5">
                        <ul className="flex flex-col items-start justify-start gap-3 w-full">
                            <Tabs start={0} stop={10} onItemClick={closeSidebar} />
                        </ul>

                        <div className="border-t">
                            <ul className="flex flex-col items-start justify-start gap-3 w-full py-2">
                                <Tabs start={10} stop={11} onItemClick={closeSidebar} />
                                <Tabs start={11} stop={menuItems.length} onItemClick={closeSidebar} />
                            </ul>

                            <div className="w-full pl-2 pt-2 pb-5 flex items-center justify-between gap-3 border-t">
                                <div className="relative size-9 rounded-full">
                                    <Image
                                        src="/images/default_avatar.png"
                                        alt="User's profile image"
                                        fill
                                        className="object-contain rounded-full"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                </div>
                                {isPending ? <LoadingSpinner /> : 
                                hasError ? <em className='text-sm'>Error loading user data</em> : 
                                <div className='flex flex-col'>
                                    <p className='capitalize text-[12px] text-textGray font-semibold'>{user.name}</p>
                                    <p className='text-[10px] text-textGray'>{user.email}</p>
                                </div>}
                                <ButtonNeutral
                                    onClick={logout}
                                    classes={`focus:ring-transparent bg-transparent border-transparent hover:bg-[#F6F6F6] border hover:border-customGray p-1 rounded-radius-4 transition-all duration-300 ease-in-out`}
                                    icon1={<Logout style={{fontSize: '20px'}} />}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Sidebar;
