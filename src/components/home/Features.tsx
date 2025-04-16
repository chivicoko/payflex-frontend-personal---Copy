
import ServiceCard from './ServiceCard';
import { CardGiftcard, CloudDownload, CreditCard, Lightbulb, Receipt, Smartphone, Tv } from '@mui/icons-material';
import ButtonLinkNeutral from '../button/ButtonLinkNeutral';

const Features = () => {
  const services = [
    {
      title: "Airtime & Data",
      description: "Purchase airtime and data bundles for all networks instantly with the best rates.",
      icon: Smartphone,
      color: "primary",
    },
    {
      title: "Virtual Cards",
      description: "Create virtual naira and dollar cards for your local and international transactions.",
      icon: CreditCard,
      color: "fintech",
    },
    {
      title: "Bills Payment",
      description: "Pay your electricity, water, and other utility bills conveniently from one place.",
      icon: Receipt,
      color: "primary",
    },
    {
      title: "Cable Subscription",
      description: "Renew your DSTV, GOTV, and Startimes subscriptions in seconds.",
      icon: Tv,
      color: "fintech",
    },
    {
      title: "Value Added Services",
      description: "Access additional financial services designed to maximize your banking experience.",
      icon: Lightbulb,
      color: "primary",
    },
    {
      title: "Gift Card Redemption",
      description: "Convert your gift cards to cash at competitive rates with fast processing.",
      icon: CardGiftcard,
      color: "fintech",
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 xl:px-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 mb-4">
            <div className="h-2 w-2 rounded-full bg-primary"></div>
            <span className="ml-2 text-sm font-medium text-primary">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">All Your Financial Needs In One Place</h2>
          <p className="text-gray-600 text-lg">
            Access a comprehensive range of digital financial services designed to make your life easier and finances smarter.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`transform transition-all duration-500 hover:shadow-xl rounded-2xl ${index % 2 === 0 ? "hover:-translate-y-2" : "hover:-translate-y-2 hover:translate-x-1"}`}
            >
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-primary to-fintech rounded-2xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-10 lg:p-16 text-white">
              <h3 className="text-3xl font-bold mb-4">Download Our Mobile App</h3>
              <p className="mb-8 text-white/90">
                Get the full experience with our mobile app. Available for iOS and Android devices.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonLinkNeutral
                  btnText1='App Store'
                  icon1={<CloudDownload className="mr-2" />}
                  classes="rounded-radius-12 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-6 py-3 flex items-center"
                />
                <ButtonLinkNeutral
                  btnText1='Google Play'
                  icon1={<CloudDownload className="mr-2" />}
                  classes="rounded-radius-12 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-6 py-3 flex items-center"
                />
              </div>
            </div>
            <div className="relative h-64 lg:h-auto">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-40 h-80 bg-white/10 backdrop-blur-sm rounded-3xl transform rotate-12 border border-white/20"></div>
                <div className="w-40 h-80 bg-white/30 backdrop-blur-sm rounded-3xl absolute transform -rotate-6 border border-white/20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
