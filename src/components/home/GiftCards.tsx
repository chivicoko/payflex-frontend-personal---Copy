
const GiftCards = () => {
  return (
    <div id="giftcards" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-fintech/10 rounded-full blur-3xl"></div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {['Amazon', 'iTunes', 'Google Play', 'Steam'].map((card, i) => (
                    <div key={i} className={`bg-gradient-to-br ${i % 2 ? 'from-fintech/80 to-primary/80' : 'from-primary/80 to-fintech/70'} rounded-xl p-6 text-white ${i % 3 === 0 ? 'col-span-2' : ''}`}>
                      <div className="h-8 w-16 bg-white/20 rounded mb-2"></div>
                      <div className="h-4 w-24 bg-white/10 rounded"></div>
                      <div className="mt-4 text-lg font-semibold">{card}</div>
                      <div className="text-sm opacity-80">Gift Card</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 mb-4">
                <div className="h-2 w-2 rounded-full bg-primary"></div>
                <span className="ml-2 text-sm font-medium text-primary">Gift Cards</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Convert Gift Cards to Cash</h2>
              <p className="text-gray-600 text-lg mb-8">
                Redeem your gift cards for instant cash at competitive rates. We support all major gift card brands with fast processing times.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                    <span className="font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Select Card Type</h3>
                    <p className="text-gray-600">Choose from our wide range of supported gift cards.</p>
                  </div>
                </div>
                
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                    <span className="font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Upload Card Details</h3>
                    <p className="text-gray-600">Submit the required information securely.</p>
                  </div>
                </div>
                
                <div className="flex items-center border-b border-gray-200 pb-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                    <span className="font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Get Instant Payment</h3>
                    <p className="text-gray-600">Receive cash directly into your PulsePay wallet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default GiftCards