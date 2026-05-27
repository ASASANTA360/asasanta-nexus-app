const features = [
  "AI Verification",
  "Trust Scoring",
  "KYC Infrastructure",
  "Smart Automation",
  "Blockchain Security",
  "AI Customer Support",
];

export default function Features() {
  return (
    <section className="py-28 px-6">

      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-white">
            Powerful Digital Infrastructure
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Built for secure onboarding, intelligent automation,
            and scalable digital trust systems.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 mb-6" />

              <h3 className="text-2xl font-semibold text-white">
                {feature}
              </h3>

              <p className="text-gray-400 mt-4">
                Secure and scalable infrastructure powered
                by modern AI systems.
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}