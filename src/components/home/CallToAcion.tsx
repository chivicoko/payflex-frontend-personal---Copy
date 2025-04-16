
import { ArrowRightAlt, PhoneIphoneOutlined, ScheduleOutlined, ShieldOutlined } from '@mui/icons-material';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';
import Image from 'next/image';

const CallToAction = () => {
  const features = [
    {
      icon: ShieldOutlined,
      title: "Secure Transactions",
      description: "Bank-grade security protocols to ensure your data and money are always protected."
    },
    {
      icon: ScheduleOutlined,
      title: "24/7 Support",
      description: "Our customer support team is available round the clock to assist you."
    },
    {
      icon: PhoneIphoneOutlined,
      title: "Mobile First",
      description: "Designed for the modern user, our platform works seamlessly on all devices."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-fintech/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 xl:px-24 relative z-10">
        <div className="bg-gradient-to-r from-primary to-fintech rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-10 lg:p-16 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Financial Experience?</h2>
              <p className="text-white/90 text-lg mb-8">
                Join thousands of users who have simplified their financial life with our comprehensive platform.
              </p>
              
              <ButtonLinkNeutral
                href='/register'
                btnText1='Get Started Now'
                icon2={<ArrowRightAlt className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />}
                classes="py-2 px-5 rounded-radius-12 border border-primary text-primary bg-white hover:bg-white/90 font-bold group"
              />
            </div>
            <div className="relative h-full min-h-[300px] lg:min-h-0 bg-gradient-to-br from-black/20 to-transparent">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-[100%] h-[100%] px-3 rounded-full">
                  <Image
                    src="/images/baking_card.avif" 
                    alt="Mobile Banking"
                    fill
                    priority
                    className="object-cover w-full h-full opacity-40"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-card p-8 card-hover hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out">
                <div className="inline-flex items-center justify-center p-3 rounded-xl mb-4 bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
