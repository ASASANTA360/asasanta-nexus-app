export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Navbar */}
      <nav className="w-full border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/70">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Asasanta Nexus
          </h1>

          <div className="hidden md:flex items-center gap-10 text-gray-300">

            <a href="/" className="hover:text-white transition">
              Home
            </a>

            <a href="/dashboard" className="hover:text-white transition">
              Dashboard
            </a>

            <a href="/kyc" className="hover:text-white transition">
              KYC
            </a>

            <a href="/loans" className="hover:text-white transition">
              Loans
            </a>

            <button className="px-6 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition-all duration-300">
              Login
            </button>

          </div>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center px-6 md:px-12 py-24 relative z-10">

          {/* Left */}
          <div>

            <div className="inline-flex items-center px-6 py-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-gray-300 mb-10 shadow-[0_0_60px_rgba(34,211,238,0.1)]">
              AI • Blockchain • Financial Infrastructure
            </div>

            <h1 className="text-6xl md:text-8xl font-black leading-[0.95] tracking-tight">

              <span className="text-white">
                Asasanta
              </span>

              <br />

              <span className="text-gray-400">
                Nexus
              </span>

            </h1>

            <p className="mt-10 text-gray-400 text-xl leading-relaxed max-w-2xl">
              Enterprise-grade AI-powered identity verification,
              decentralized finance infrastructure, smart lending,
              and blockchain-powered trust systems.
            </p>

            {/* CTA */}
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5 mt-12">

              <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                Launch Platform
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 hover:bg-white/10 transition-all duration-300">
                Request Demo
              </button>

            </div>

          </div>

          {/* Right Dashboard */}
          <div className="relative">

            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl rounded-full" />

            <div className="relative border border-white/10 rounded-[40px] bg-[#050816] p-10 shadow-[0_0_80px_rgba(34,211,238,0.08)]">

              <div className="border border-white/10 rounded-[30px] p-10 bg-black">

                <p className="text-gray-400 text-3xl">
                  AI Trust Score
                </p>

                <h2 className="text-[120px] font-black text-green-400 leading-none mt-6">
                  98%
                </h2>

              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">

                <div className="border border-white/10 rounded-[30px] p-8 bg-black hover:-translate-y-2 transition-all duration-300">

                  <p className="text-gray-400 text-2xl">
                    Verified Users
                  </p>

                  <h3 className="text-6xl font-bold mt-6">
                    8.4K
                  </h3>

                </div>

                <div className="border border-white/10 rounded-[30px] p-8 bg-black hover:-translate-y-2 transition-all duration-300">

                  <p className="text-gray-400 text-2xl">
                    Active Loans
                  </p>

                  <h3 className="text-6xl font-bold mt-6">
                    1.2K
                  </h3>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Enterprise Section */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-6xl font-black">
              Enterprise Infrastructure
            </h2>

            <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
              Built for scalable digital identity, secure financial systems,
              and AI-powered trust architecture.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "AI Verification",
                desc: "Intelligent fraud detection, automated KYC verification, and AI-driven identity security systems.",
              },
              {
                title: "Smart Lending",
                desc: "Blockchain-powered lending infrastructure and decentralized financial trust systems.",
              },
              {
                title: "Secure Infrastructure",
                desc: "Enterprise-grade cybersecurity and decentralized identity architecture for Africa.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-[30px] p-10 bg-[#050816] hover:-translate-y-2 hover:border-cyan-400/30 transition-all duration-300 shadow-[0_0_50px_rgba(34,211,238,0.05)]"
              >

                <h3 className="text-3xl font-bold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-6 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Trusted By */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <h2 className="text-6xl font-black">
              Trusted By Innovators
            </h2>

            <p className="text-gray-400 text-xl mt-6">
              Businesses and organizations trust Asasanta Nexus.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                quote: "Asasanta Nexus transformed our digital verification process with AI automation and blockchain security.",
                company: "Nexus Agro Ventures",
                type: "Agricultural Finance",
              },
              {
                quote: "The lending infrastructure and trust scoring system improved our customer onboarding significantly.",
                company: "FuturePay Africa",
                type: "Fintech Solutions",
              },
              {
                quote: "One of the most futuristic AI-powered infrastructure platforms we have worked with.",
                company: "Digital Trust Network",
                type: "Identity Infrastructure",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-[30px] p-10 bg-[#050816] hover:-translate-y-2 transition-all duration-300"
              >

                <p className="text-gray-300 leading-relaxed">
                  "{item.quote}"
                </p>

                <div className="mt-10">
                  <h3 className="text-2xl font-bold">
                    {item.company}
                  </h3>

                  <p className="text-gray-500 mt-2">
                    {item.type}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* Stats */}
      <section className="px-6">

        <div className="max-w-7xl mx-auto border border-white/10 rounded-[40px] bg-[#050816] p-14 grid grid-cols-2 md:grid-cols-4 gap-10 shadow-[0_0_50px_rgba(34,211,238,0.05)]">

          {[
            ["12K+", "Platform Users"],
            ["8.4K", "Verified Identities"],
            ["₦2.4B", "Processed Loans"],
            ["99.9%", "System Reliability"],
          ].map((item, index) => (
            <div
              key={index}
              className="text-center"
            >

              <h2 className="text-5xl md:text-6xl font-black">
                {item[0]}
              </h2>

              <p className="text-gray-500 mt-3">
                {item[1]}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="py-28 px-6">

        <div className="max-w-6xl mx-auto border border-white/10 rounded-[40px] bg-[#050816] p-20 text-center shadow-[0_0_60px_rgba(34,211,238,0.06)]">

          <h2 className="text-6xl font-black">
            Ready To Scale With AI?
          </h2>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl mx-auto">
            Join the next generation of decentralized financial infrastructure
            and AI-powered identity systems.
          </p>

          <button className="mt-12 px-10 py-5 rounded-2xl bg-white text-black font-bold hover:scale-105 transition-all duration-300">
            Get Started
          </button>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12">

        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

          <div>

            <h2 className="text-3xl font-bold">
              Asasanta Nexus
            </h2>

            <p className="text-gray-500 mt-3">
              AI-powered digital infrastructure for Africa.
            </p>

          </div>

          <div className="flex items-center gap-8 text-gray-400">
            <a href="#">GitHub</a>
            <a href="#">Docs</a>
            <a href="#">Contact</a>
          </div>

        </div>

      </footer>

    </main>
  );
}