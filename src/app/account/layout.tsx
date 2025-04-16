
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/sidebar/Sidebar';
import SidebarRight from '@/components/sidebar-right/SidebarRight';
import { ReactNode } from 'react';

export const metadata = {
  title: "Payflex | Payflex Banking App",
  description: "Payflex is a modern Banking platform for everyone.",
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='bg-[#f8fbff] h-full min-h-screen flex'>
      <Sidebar />
      <div className="px-2 md:px-5 w-full md:w-4/6 h-full min-h-fit col-span-2 border-x border-customGray ">
        <Navbar />
        <div className='w-full h-full min-h-screen pt-3 md:pt-5 pb-4 space-y-5'>
          {children}
        </div>
      </div>
      <SidebarRight />
    </div>
  );
}
