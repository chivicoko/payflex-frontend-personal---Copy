"use client";

import useScrollVisibility from '@/hooks/useScrollVisibility';

export default function ScrollToTopButton() {
  const isVisible = useScrollVisibility(100);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 z-50 right-4 bg-secondary hover:bg-secondary_hover rounded-full text-primary text-2xl p-3 hover:cursor-pointer shadow-lg transition-all duration-300 ease-in-out group focus:ring-2 focus:ring-primary focus:ring-offset-2 outline-none"
      >
        <p className='transition-all duration-200 ease-in-out transform group-hover:-translate-y-2'>↑</p>
      </button>
    )
  );
}
