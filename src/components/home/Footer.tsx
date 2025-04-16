
import { ChevronRight, Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import ButtonOne from '../button/ButtonOne';
import InputFieldFloatingLabel from '../inputs/InputFieldFloatingLabel';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Company": ["About Us", "Careers", "Blog", "Press"],
    "Services": ["Virtual Top-Up", "Bill Payments", "Virtual Cards", "Gift Cards"],
    "Support": ["Contact Us", "Help Center", "FAQ", "Security"],
    "Legal": ["Terms of Service", "Privacy Policy", "Compliance", "Cookies"]
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 xl:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-fintech bg-clip-text text-transparent">
              PayFlex
            </div>
            <p className="text-gray-600 max-w-md">
              Transforming the way people manage their finances with innovative digital solutions for everyday financial needs.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, LinkedIn].map((Icon, i) => (
                <Link 
                  key={i} 
                  href="#" 
                  className="h-10 w-10 rounded-full bg-gray-100 hover:bg-primary/10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
                >
                  <Icon style={{fontSize: '18px'}} />
                </Link>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href="#" 
                      className="text-gray-600 hover:text-primary transition-colors flex items-center"
                    >
                      <ChevronRight style={{fontSize: '14px'}} className="mr-1 text-primary/70" />
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-8">
          <div className="mb-8 rounded-xl bg-gradient-to-r from-primary/80 to-fintech p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2">
                <h4 className="text-white text-xl font-semibold mb-2">Stay updated with our newsletter</h4>
                <p className="text-white">Get the latest news, updates, and special offers delivered directly to your inbox.</p>
              </div>
              <div className="flex space-x-2">
                <InputFieldFloatingLabel
                  type='email'
                  floatingLabel='Enter you email'
                />
                <ButtonOne btnText1='Subscribe' classes='py-2 px-5' />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} PayFlex. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-600 hover:text-primary text-sm">Privacy Policy</Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-sm">Terms of Service</Link>
              <Link href="#" className="text-gray-600 hover:text-primary text-sm">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
