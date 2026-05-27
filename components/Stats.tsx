const stats = [
  {
    number: "10K+",
    label: "Identity Verifications",
  },
  {
    number: "99.9%",
    label: "Security Accuracy",
  },
  {
    number: "24/7",
    label: "AI Monitoring",
  },
  {
    number: "50+",
    label: "Digital Integrations",
  },
];

export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="border border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-xl text-center hover:scale-105 transition-all duration-300"
          >
            <h2 className="text-4xl font-bold text-white">
              {item.number}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}