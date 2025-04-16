'use client';

import { ArrowRightAlt, DownloadForOffline, TaskAlt } from '@mui/icons-material';
import ButtonNeutral from '../button/ButtonNeutral';
import ButtonLinkOne from '../button/ButtonLinkOne';
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto px-4 xl:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="ml-2 text-sm font-medium text-primary">Financial revolution awaits you</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary to-fintech bg-clip-text text-transparent">Financial Freedom</span> in Your Hands
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-xl">
              Experience seamless digital transactions, instant airtime & data top-ups, bill payments, virtual cards, and gift card redemptions—all in one powerful platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <ButtonLinkOne
                href='/register'
                btnText1='Get Started'
                icon2={<ArrowRightAlt className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />}
                classes="font-bold group py-2 px-5 transition-all duration-300 ease-in-out"
              />

              <ButtonNeutral
                btnText1='Download App'
                icon1={<DownloadForOffline className="mr-2 h-4 w-4" />}
                classes="py-2 px-5 rounded-radius-12 border border-primary text-primary hover:bg-primary/10 font-bold group"
              />
            </div>

            <div className="flex flex-wrap gap-6 mt-8">
              {['Instant Access', 'No Hidden Fees', 'Secure Transactions'].map((item, i) => (
                <div key={i} className="flex items-center">
                  <TaskAlt className="h-5 w-5 text-primary mr-2" />
                  <span className="text-sm font-medium text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-fintech/10 rounded-full blur-3xl"></div>
            
            <div className="relative animate-float p-4">
              <div className="relative z-10 bg-white shadow-lg rounded-3xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-primary to-fintech h-16 flex items-center px-6">
                  <div className="w-full">
                    <div className="h-2 w-16 bg-white/50 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-500">Balance</p>
                        <p className="text-2xl font-bold">
                          ₦<CountUp start={0} end={120500.00} decimals={2} duration={2} delay={0} />
                        </p>
                      </div>
                      <div className="bg-gradient-to-r from-primary to-fintech p-3 rounded-full text-white">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 9L13.9558 13.5662C13.5299 14.1524 12.7272 14.2564 12.1636 13.7929L11.8364 13.5315C11.2728 13.0679 10.4701 13.1719 10.0442 13.7581L7 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                        </svg>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-xl space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Quick Actions</span>
                      </div>
                      <div className="grid grid-cols-4 gap-2">
                        {['Send', 'Pay Bills', 'Airtime', 'Cards'].map((action, i) => (
                          <div key={i} className="flex flex-col items-center justify-center">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary/20 to-fintech/20 flex items-center justify-center mb-1">
                              <div className="h-5 w-5 rounded-full bg-primary/30"></div>
                            </div>
                            <span className="text-xs">{action}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <p className="text-sm font-medium">Recent Transactions</p>
                      {[
                        { name: 'Netflix Subscription', amount: '₦4,500', type: 'debit' },
                        { name: 'Airtime Purchase', amount: '₦2,000', type: 'debit' },
                      ].map((tx, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100">
                          <div className="flex items-center">
                            <div className="h-8 w-8 rounded-full bg-gray-100 mr-3"></div>
                            <div>
                              <p className="text-sm font-medium">{tx.name}</p>
                              <p className="text-xs text-gray-500">Today</p>
                            </div>
                          </div>
                          <p className={`font-medium ${tx.type === 'debit' ? 'text-red-500' : 'text-green-500'}`}>
                            {tx.type === 'debit' ? '-' : '+'}{tx.amount}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Card floating in background */}
              <div className="absolute top-32 -right-16 w-64 h-40 bg-gradient-to-r from-primary/90 to-primary rounded-xl shadow-xl transform rotate-12 opacity-60">
                <div className="p-4 text-white">
                  <div className="flex justify-between">
                    <div className="space-y-6">
                      <div className="h-6 w-10 bg-white/30 rounded"></div>
                      <div className="h-4 w-32 bg-white/20 rounded"></div>
                    </div>
                    <div className="text-xs">VIRTUAL</div>
                  </div>
                  <div className="mt-4 flex justify-between items-end">
                    <div className="h-4 w-24 bg-white/20 rounded"></div>
                    <div className="h-6 w-8 rounded-full bg-yellow-300/90"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
