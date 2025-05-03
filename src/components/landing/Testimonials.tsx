const Testimonials = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="mb-16">
        <p className="text-blue-800 font-semibold uppercase mb-2">TESTIMONIAL</p>
        <h2 className="text-4xl font-bold text-blue-800 mb-6">Our happy<br />customers say</h2>
        <div className="md:w-1/2 md:ml-auto">
          <p className="text-gray-600 text-lg">
            Every one of us loves something different. So explore the world 
            through the lens of our visual capabilities, and find what you love
          </p>
        </div>
      </div>

      {/* Testimonial Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              This app has completely transformed how I manage my 
              projects and deadlines.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium">Morgan Lee</h4>
                <p className="text-sm text-gray-600">@morganleewhiz</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              As a seasoned designer always on the lookout for innovative tools, 
              Framer.com instantly grabbed my attention.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium">Alex Rivera</h4>
                <p className="text-sm text-gray-600">@jamietechguru00</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Our team's productivity has skyrocketed since we started using
            </p>
          </div>
        </div>

        {/* Middle Column */}
        <div className="space-y-8 md:mt-16">
          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <h4 className="font-medium">Riley Smith</h4>
              <p className="text-sm text-gray-600">@rileysmith1</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              I was amazed at how quickly we were able to integrate this app into 
              our workflow.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium">Casey Jordan</h4>
                <p className="text-sm text-gray-600">@caseyj</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Planning and executing events has never been easier. This app helps 
              me keep track of all the moving parts, ensuring nothing slips 
              through the cracks.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium">Taylor Kim</h4>
                <p className="text-sm text-gray-600">@taylorkimm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-8 md:mt-32">
          <div className="bg-white p-6 rounded-lg shadow-sm mb-4">
            <p className="text-gray-700 mb-4">needs.</p>
          </div>

          <div className="flex items-center mb-2">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <h4 className="font-medium">Casey Harper</h4>
              <p className="text-sm text-gray-600">@casey09</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              Adopting this app for our team has streamlined our project 
              management and improved communication across the board.
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
              <div>
                <h4 className="font-medium">Jordan Patels</h4>
                <p className="text-sm text-gray-600">@jpatelsdesign</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700 mb-4">
              With this app, we can easily assign tasks, track progress, and manage 
              documents all in one place.
            </p>
          </div>

          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <h4 className="font-medium">Sam Dawson</h4>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Get exclusive content</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to Beyond the Canvas and get the latest design news, articles, resources 
          and inspiration.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:flex-grow">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-4 py-3 border rounded-lg"
            />
          </div>
          <button className="bg-blue-800 text-white px-8 py-3 rounded-lg font-medium">
            Sign up
          </button>
        </div>
        <div className="mt-4 flex items-center">
          <input type="checkbox" id="marketing" className="mr-2" />
          <label htmlFor="marketing" className="text-sm text-gray-600">
            I agree to receive marketing emails from Algécom.
          </label>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;