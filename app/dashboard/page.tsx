import AIAssistant from "@/components/AIAssistant";

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Header */}
      <section className="border-b border-white/10 bg-black/60 backdrop-blur-xl sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">

          <div>

            <h1 className="text-5xl md:text-6xl font-black">
              AI Dashboard
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Monitor digital identity systems, AI analytics,
              trust infrastructure, and blockchain verification.
            </p>

          </div>

          <button className="px-8 py-4 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
            Generate Report
          </button>

        </div>

      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Stats */}
        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              value: "98%",
              label: "AI Trust Score",
            },
            {
              value: "8.4K",
              label: "Verified Users",
            },
            {
              value: "1.2K",
              label: "Active Loans",
            },
            {
              value: "99.9%",
              label: "System Health",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-[30px] bg-[#050816] p-8 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_50px_rgba(34,211,238,0.05)]"
            >

              <p className="text-gray-400 text-lg">
                {item.label}
              </p>

              <h2 className="text-5xl md:text-6xl font-black mt-5">
                {item.value}
              </h2>

            </div>
          ))}

        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* AI Activity */}
          <div className="md:col-span-2 border border-white/10 rounded-[35px] bg-[#050816] p-8 shadow-[0_0_50px_rgba(34,211,238,0.04)]">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-4xl font-black">
                  Live AI Activity
                </h2>

                <p className="text-gray-400 mt-2">
                  Real-time intelligent infrastructure monitoring.
                </p>

              </div>

              <div className="w-4 h-4 rounded-full bg-green-400 animate-pulse" />

            </div>

            <div className="space-y-6">

              {[
                {
                  title: "Identity Verification Completed",
                  desc: "AI verification system approved new onboarding request.",
                },
                {
                  title: "Fraud Detection Scan",
                  desc: "1,204 financial transactions analyzed successfully.",
                },
                {
                  title: "Blockchain Synchronization",
                  desc: "Trust infrastructure synced across distributed nodes.",
                },
                {
                  title: "Smart Lending Update",
                  desc: "AI credit scoring updated borrower risk profiles.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-6 bg-black hover:border-cyan-400/20 transition-all duration-300"
                >

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 mt-3 leading-relaxed">
                    {item.desc}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* Risk Panel */}
          <div className="border border-white/10 rounded-[35px] bg-[#050816] p-8 shadow-[0_0_50px_rgba(34,211,238,0.04)]">

            <h2 className="text-4xl font-black mb-10">
              Risk Analysis
            </h2>

            <div className="space-y-10">

              <div>

                <div className="flex items-center justify-between mb-3">

                  <p className="text-gray-400">
                    Fraud Risk
                  </p>

                  <p className="font-bold text-red-400">
                    15%
                  </p>

                </div>

                <div className="w-full h-4 rounded-full bg-black overflow-hidden">

                  <div className="w-[15%] h-full bg-red-500 rounded-full" />

                </div>

              </div>

              <div>

                <div className="flex items-center justify-between mb-3">

                  <p className="text-gray-400">
                    Trust Stability
                  </p>

                  <p className="font-bold text-cyan-400">
                    92%
                  </p>

                </div>

                <div className="w-full h-4 rounded-full bg-black overflow-hidden">

                  <div className="w-[92%] h-full bg-cyan-400 rounded-full" />

                </div>

              </div>

              <div>

                <div className="flex items-center justify-between mb-3">

                  <p className="text-gray-400">
                    AI Accuracy
                  </p>

                  <p className="font-bold text-green-400">
                    98%
                  </p>

                </div>

                <div className="w-full h-4 rounded-full bg-black overflow-hidden">

                  <div className="w-[98%] h-full bg-green-400 rounded-full" />

                </div>

              </div>

            </div>

            <div className="mt-14 border border-white/10 rounded-[30px] p-8 bg-black">

              <p className="text-gray-400 text-lg">
                AI Core Status
              </p>

              <h3 className="text-6xl font-black text-green-400 mt-4">
                ACTIVE
              </h3>

              <p className="text-gray-500 mt-4">
                All infrastructure systems operational.
              </p>

            </div>

          </div>

        </div>

        {/* Bottom Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-10">

          {/* Analytics */}
          <div className="border border-white/10 rounded-[35px] bg-[#050816] p-8">

            <h2 className="text-3xl font-black mb-8">
              Verification Analytics
            </h2>

            <div className="space-y-5">

              {[
                "NIN Verification",
                "Face Match",
                "Document Validation",
                "Fraud Detection",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border border-white/10 rounded-2xl p-4 bg-black"
                >

                  <span>{item}</span>

                  <span className="text-green-400 font-bold">
                    Success
                  </span>

                </div>
              ))}

            </div>

          </div>

          {/* AI Recommendations */}
          <div className="md:col-span-2 border border-white/10 rounded-[35px] bg-[#050816] p-8">

            <h2 className="text-3xl font-black mb-8">
              AI Recommendations
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              {[
                "Increase lending trust threshold for high-risk borrowers.",
                "Enable additional biometric verification layers.",
                "Optimize blockchain synchronization frequency.",
                "Improve onboarding speed using AI automation.",
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-2xl p-6 bg-black hover:border-cyan-400/20 transition-all duration-300"
                >

                  <p className="text-gray-300 leading-relaxed">
                    {item}
                  </p>

                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* AI Assistant */}
      <AIAssistant />

    </main>
  );
}