const Pricing = () => {
  return (
    <section id="pricing-section" className="common-w mx-auto">
      <div className="container mx-auto px-2 my-50">
        <header className="text-center space-y-3 mb-10">
          <h1 className="text-5xl font-extrabold">
            Simple, Transparent Pricing
          </h1>
          <p className="font-semibold text-[#627382]">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="card card-body rounded-3xl border border-gray-300 shadow-2xl bg-[#F2F2F2] flex flex-col h-full">
            <div className="flex-1 pt-8">
              <h1 className="text-3xl font-bold">Starter</h1>
              <p className="mt-1 text-[#627382]">Perfect for getting started</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold">$2</span>
                <span className="text-xl text-[#627382]">/Month</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Access to 10 free tools
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Basic templates
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Community support
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>1 project per month
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-8 pb-2">
              <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-6 cursor-pointer">
                Get Started
              </button>
            </div>
          </div>

          <div className="card card-body rounded-3xl shadow-2xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex flex-col h-full relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2  bg-[#FEF3C6] text-[#BB4D00]  text-sm font-bold px-6 py-1.5 rounded-full shadow-md z-20">
              Most Popular
            </div>

            <div className="flex-1 pt-8">
              <h1 className="text-3xl font-bold">Pro</h1>
              <p className="mt-1">Best for professionals</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold">$29</span>
                <span className="text-xl">/Month</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Access to all premium tools
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Unlimited templates
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Priority support
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Unlimited projects
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Cloud sync
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-white">✓</span>
                  Advanced analytics
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-8 pb-2">
              <div className="btn py-6 rounded-full w-full bg-white cursor-pointer hover:shadow-lg transition-shadow">
                <button className="bg-transparent bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-semibold w-full cursor-pointer">
                  Start Pro Trial
                </button>
              </div>
            </div>
          </div>

          <div className="card card-body rounded-3xl  border border-gray-300 shadow-2xl bg-[#F2F2F2] flex flex-col h-full">
            <div className="flex-1 pt-8">
              <h1 className="text-3xl font-bold">Enterprise</h1>
              <p className="mt-1 text-[#627382]">For teams and businesses</p>

              <div className="mt-8 mb-10">
                <span className="text-5xl font-bold">$99</span>
                <span className="text-xl text-[#627382]">/Month</span>
              </div>

              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Everything in Pro
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Team collaboration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  Custom integrations
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Dedicated support
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  SLA guarantee
                </li>
                <li className="flex items-center gap-2 text-[#627382]">
                  <span className="text-green-500">✓</span>
                  Custom branding
                </li>
              </ul>
            </div>

            <div className="mt-auto pt-8 pb-2">
              <button className="btn w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold py-6 cursor-pointer">
                Get Started Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;