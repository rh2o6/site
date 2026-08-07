
export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20 px-4">
      <div className="max-w-6xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4">Services</h1>

        <p className="mt-4 text-lg max-w-2xl text-center mx-auto">
          I offer a range of services designed to support individuals and businesses.
          Whether you need reliable IT support, custom web development, or professional
          consulting, I provide practical, tailored solutions to meet your needs.
        </p>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-16">
         
          <div className="bg-white rounded-lg border border-[#0DADF2] shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">IT Services</h2>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Troubleshooting network, device, and software issues</li>
              <li>PC, laptop, and mobile device setup</li>
              <li>Operating system installs and upgrades</li>
              <li>Peripheral installation (printers, scanners, routers)</li>
              <li>Basic cybersecurity and system maintenance</li>
              <li>Simple Device Repairs</li>
              <li>Remote support and on-site visits available</li>
            </ul>
          </div>

          
          
          <div className="bg-white rounded-lg border border-[#0DADF2] shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Development</h2>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Personal websites and portfolios</li>
              <li>Retail and e-commerce websites</li>
              <li>Company and small business websites</li>
              <li>Custom web applications</li>
              <li>Data analysis and visualization solutions</li>
            </ul>
          </div>

       
          <div className="bg-white rounded-lg border border-[#0DADF2] shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4 text-center">Consulting</h2>
            <ul className="list-disc list-inside text-base space-y-2">
              <li>Project management and technical consulting</li>
              <li>Technology planning and system recommendations</li>
              <li>Process improvement and workflow optimization</li>
              <li>Technical writing and documentation</li>
              <li>One-on-one guidance and training</li>
            </ul>
          </div>
        </div>

        {/* Rates Section */}
        <div className="mt-16 mb-16">
          <h1 className="text-4xl font-bold text-center mb-6">Rates</h1>

          <p className="mt-4 text-lg max-w-2xl text-center mx-auto">
            My rates are competitive and reflect the quality and value of the services I provide.
          </p>

          <div className="bg-green-50 rounded p-4 max-w-2xl mx-auto mt-6">
            <p className="text-lg font-semibold text-green-700 text-center">
              Special Offer: Your first problem fix or initial project consultation is completely FREE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white rounded-lg border border-[#0DADF2] shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">IT Support</h3>
              <p className="text-base mb-2">Remote: <strong>$30/hr</strong></p>
              <p className="text-base">On-site: <strong>$50/hr</strong></p>
            </div>
            <div className="bg-white rounded-lg border border-[#0DADF2] shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-base">Typical range:</p>
              <p className="text-base"><strong>$500 - $5,000</strong></p>
            </div>
            <div className="bg-white rounded-lg border border-[#0DADF2]  shadow-md p-6 text-center">
              <h3 className="text-xl font-semibold mb-3">Consulting</h3>
              <p className="text-base mb-2"><strong>$50-70/hr</strong></p>
              <p className="text-sm text-gray-600">Discounts for long-term engagements</p>
            </div>
          </div>

          <p className="mt-8 text-lg max-w-2xl text-center mx-auto">
            I am committed to delivering exceptional service and am happy to discuss custom pricing
            for larger projects or ongoing support.
          </p>
        </div>

        <div className="text-center mb-20">
          <p className="text-lg">Contact me <a href="/contact" className="text-blue-500 hover:underline font-semibold">here</a></p>
        </div>
      </div>
    </main>
  );
}
