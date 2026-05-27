<nav className="w-full border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/70">

  <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

    <h1 className="text-3xl font-bold tracking-tight">
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

    {/* Mobile */}
    <button className="md:hidden text-3xl">
      ☰
    </button>

  </div>

</nav>