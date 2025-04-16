import Image from 'next/image';
import ButtonNeutral from '../button/ButtonNeutral';
import { Edit } from '@mui/icons-material';

const AccountHeader = () => {
  return (
    <div className="self-start flex items-center gap-10 pb-8">
        <span className="relative size-24 px-3 rounded-full ring-4 ring-primary">
            <Image
                src="/images/default_avatar.png"
                alt="User profile image"
                fill
                priority
                className="object-contain rounded-full"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            <ButtonNeutral icon1={<Edit style={{fontSize: '19px'}} />} classes='absolute bottom-0 -right-4 bg-primary hover:bg-primary_hover text-white size-10 rounded-full flex items-center justify-center' />
        </span>

        <div>
            <h1 className='font-semibold text-3xl lg:text-4xl'>Your Profile</h1>
            <p className='text-base'>Update your personal information and address</p>
        </div>
    </div>
  )
}

export default AccountHeader;