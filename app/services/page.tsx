
export default function Services() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-20 px-4">
      <h1 className="text-4xl font-bold">Services</h1>

      <p className="mt-4 text-lg max-w-2xl text-center">
        I offer a range of services designed to support individuals and businesses.
        Whether you need reliable IT support, custom web development, or professional
        consulting, I provide practical, tailored solutions to meet your needs.
      </p>

      <section className="mt-10 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-3">IT Services</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Troubleshooting network, device, and software issues</li>
          <li>PC, laptop, and mobile device setup</li>
          <li>Operating system installs and upgrades</li>
          <li>Peripheral installation (printers, scanners, routers)</li>
          <li>Basic cybersecurity and system maintenance</li>
          <li>Simple Device Repairs</li>
          <li>Remote support and on-site visits available</li>
        </ul>
      </section>

   
      <section className="mt-10 max-w-2xl w-full">
        <h2 className="text-2xl font-semibold mb-3">Development</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Personal websites and portfolios</li>
          <li>Retail and e-commerce websites</li>
          <li>Company and small business websites</li>
          <li>Custom web applications</li>
          <li>Data analysis and visualization solutions</li>
        </ul>
      </section>

    
      <section className="mt-10 max-w-2xl w-full mb-20">
        <h2 className="text-2xl font-semibold mb-3">Consulting</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>Project management and technical consulting</li>
          <li>Technology planning and system recommendations</li>
          <li>Process improvement and workflow optimization</li>
          <li>Technical writing and documentation</li>
          <li>One-on-one guidance and training</li>
        </ul>
      </section>


  <h1 className="text-4xl font-bold mt-10">Rates</h1>

<p className="mt-4 text-lg max-w-2xl text-center">
  My rates are competitive and reflect the quality and value of the services I provide.
</p>

<p className="mt-4 text-lg max-w-2xl text-center font-semibold text-green-600">
  ✅ Special Offer: Your first problem fix or initial project consultation is completely free.
</p>

<p className="mt-4 text-lg max-w-2xl text-center">
  For IT support, I charge <strong>$50 per hour</strong> for remote assistance and
  <strong> $75 per hour</strong> for on-site visits.  
  Web development projects are priced based on scope and complexity, with typical
  rates ranging from <strong>$500 to $5,000</strong>.  
  Consulting services are billed at <strong>$100 per hour</strong>, with discounts
  available for long-term engagements.
</p>

<p className="mt-4 text-lg max-w-2xl text-center mb-20">
  I am committed to delivering exceptional service and am happy to discuss custom pricing
  for larger projects or ongoing support.
</p>

<p>Contact me <a href="/contact" className="text-blue-500 hover:underline">here</a></p>




    </main>
  );
}
