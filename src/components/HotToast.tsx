import { toast, ToastOptions, ToastType } from 'react-hot-toast';

export const showToast = (
  message: string,
  type: ToastType = 'success',
  icon = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'loading' ? '🔃' : '😊', 
  duration = 3000
) => {

  const options: ToastOptions = {
    className: `${type === 'success' ? 'custom-toast-success' : 'custom-toast-error'} w-fit`,
    duration,
    icon,
  };

  switch (type) {
    case 'success':
      toast.success(message, options);
      break;
    case 'error':
      toast.error(message, options);
      break;
    case 'loading':
      toast.loading(message, options);
      break;
    case 'blank':
      toast(message, options);
      break;
    default:
      toast(message, options);
  }
};
