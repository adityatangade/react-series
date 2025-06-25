const InfoSection = () => {
    return (
      <section className="text-center py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold mb-4">Why Choose RoomFinder?</h2>
        <p className="text-gray-600 mb-12">We make finding and renting rooms simple, safe, and hassle-free</p>
        <div className="flex flex-wrap justify-center gap-12">
          <div>
            <div className="text-4xl mb-2">🛡️</div>
            <h3 className="font-semibold">Verified Properties</h3>
            <p className="text-sm text-gray-500">All properties are verified and authenticated for your safety</p>
          </div>
          <div>
            <div className="text-4xl mb-2">⏱️</div>
            <h3 className="font-semibold">Quick Booking</h3>
            <p className="text-sm text-gray-500">Book your room instantly with our streamlined process</p>
          </div>
          <div>
            <div className="text-4xl mb-2">💖</div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-500">Round-the-clock customer support for all your needs</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default InfoSection;
  