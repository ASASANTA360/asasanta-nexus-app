export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent" />

      <div className="max-w-5xl mx-auto text-center relative z-10">

        <div className="inline-flex items-center gap-2 border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 rounded-full text-cyan-300 mb-8">
          AI-Powered Digital Infrastructure
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Secure Identity.
          <br />
          Intelligent Trust.
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mt-8 max-w-3xl mx-auto leading-relaxed">
          Asasanta Nexus combines AI, automation, and digital verification
          to power secure onboarding, trust scoring, and smart customer support
          across Africa.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-12">

          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300">
            Launch Platform
          </button>

          <button className="border border-white/20 text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300">
            Request Demo
          </button>

        </div>

      </div>
    </section>
  );
}