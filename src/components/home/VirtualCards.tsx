
const VirtualCards = () => {
  return (
    <div id="virtualCards" className="py-24 bg-white">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 mb-4">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <span className="ml-2 text-sm font-medium text-primary">Virtual Cards</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop Globally with Virtual Cards</h2>
            <p className="text-gray-600 text-lg">
              Create virtual naira and dollar cards for seamless online shopping, subscriptions, and international payments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-primary">01</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Multiple Currencies</h3>
                    <p className="text-gray-600">Create both Naira and Dollar virtual cards to suit your needs.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-primary">02</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Instant Creation</h3>
                    <p className="text-gray-600">Get your virtual card in seconds and start using it immediately.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-primary">03</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Secure Transactions</h3>
                    <p className="text-gray-600">Advanced security features to keep your funds and data safe.</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-xl mr-4">
                    <div className="h-6 w-6 text-primary">04</div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Global Acceptance</h3>
                    <p className="text-gray-600">Use your virtual card on any platform that accepts Visa or Mastercard.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-fintech/30 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>

              <div className="relative animate-float">
                {/* Main Card */}
                <div className="bg-gradient-to-r from-primary to-fintech-deep-purple rounded-2xl aspect-[16/9] w-full max-w-md mx-auto shadow-xl p-6 text-white">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="h-6 w-10 bg-white/20 rounded"></div>
                      <div className="h-4 w-32 bg-white/10 rounded"></div>
                    </div>
                    <div className="text-xs">VIRTUAL</div>
                  </div>
                  
                  <div className="mt-8">
                    <div className="flex space-x-4">
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                      <div className="h-4 w-8 bg-white/20 rounded"></div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex justify-between items-end">
                    <div>
                      <div className="text-xs opacity-70">CARD HOLDER</div>
                      <div className="text-sm font-medium mt-1">JOHN DOE</div>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-yellow-400/80 flex items-center justify-center">
                      <div className="h-6 w-6 rounded-full bg-yellow-500/80"></div>
                    </div>
                  </div>
                </div>
                
                {/* Secondary Card */}
                <div className="absolute top-10 -right-10 bg-gradient-to-r from-fintech to-fintech/60 rounded-2xl aspect-[16/9] w-64 shadow-lg opacity-70 transform rotate-12 p-4 text-white">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="h-4 w-8 bg-white/30 rounded"></div>
                    </div>
                    <div className="text-xs">DOLLAR</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default VirtualCards