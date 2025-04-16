import FundsModal from '@/components/transfer/FundsModal';
import { QuickActionsProps } from '@/types/base';
import { useState } from 'react';

const QuickAction: React.FC<QuickActionsProps> = ({item}) => {
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [whichModal, setWhichModal] = useState('');

  const handleModalToggle = () => {
    if (item.text === 'Fund Wallet') {
      setWhichModal('Fund Wallet');
    }
    if (item.text === 'Transfer') {
      setWhichModal('Transfer');
    }
    setIsWalletModalOpen(prev => !prev);
  }

  return (
    <>
    <button onClick={handleModalToggle} key={item.id} className='flex flex-col items-center gap-1 text-sm text-neutral-800 hover:text-primary group font-semibold'>
      <span className='p-2 bg-blue-200 group-hover:bg-blue-100 rounded-full group-hover:ring-2 ring-primary ring-offset-1 transition-all duration-300 ease-in-out'>
        {<item.icon className='' />}
      </span>
      <span>{item.text}</span>
    </button>
    {isWalletModalOpen && <FundsModal handleModalToggle={handleModalToggle} whichModal={whichModal} />}
    </>
  );
};

export default QuickAction;
