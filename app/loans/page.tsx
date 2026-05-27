export default function LoansPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">

          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-gray-300 mb-8">
            Smart Lending Infrastructure
          </div>

          <h1 className="text-6xl md:text-7xl font-black">
            AI Loan System
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl">
            AI-powered decentralized lending infrastructure with
            intelligent borrower analysis and real-time risk detection.
          </p>

        </div>

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-6">

          {[
            {
              value: "₦2.4B",
              label: "Loans Processed",
            },
            {
              value: "1.2K",
              label: "Active Borrowers",
            },
            {
              value: "98%",
              label: "Approval Accuracy",
            },
            {
              value: "15%",
              label: "Risk Exposure",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-[30px] bg-[#050816] p-8 hover:-translate-y-2 transition-all duration-300 shadow-[0_0_50px_rgba(34,211,238,0.05)]"
            >

              <p className="text-gray-400 text-lg">
                {item.label}
              </p>

              <h2 className="text-5xl font-black mt-5">
                {item.value}
              </h2>

            </div>
          ))}

        </div>

        {/* Main Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-10">

          {/* Loan Requests */}
          <div className="md:col-span-2 border border-white/10 rounded-[35px] bg-[#050816] p-8">

            <div className="flex items-center justify-between mb-10">

              <div>

                <h2 className="text-4xl font-black">
                  Recent Loan Requests
                </h2>

                <p className="text-gray-400 mt-2">
                  AI-generated borrower analysis and verification.
                </p>

              </div>

              <button className="px-6 py-3 rounded-2xl bg-cyan-400 text-black font-bold hover:scale-105 transition-all duration-300">
                New Request
              </button>

            </div>

            <div className="space-y-6">

              {[
                {
                  name: "Salisu Ibrahim",
                  amount: "₦500,000",
                  status: "Approved",
                },
                {
                  name: "Amina Yusuf",
                  amount: "₦1,200,000",
                  status: "Pending",
                },
                {
                  name: "John Emmanuel",
                  amount: "₦850,000",
                  status: "Approved",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-white/10 rounded-[25px] bg-black p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-cyan-400/20 transition-all duration-300"
                >

                  <div>

                    <h3 className="text-2xl font-bold">
                      {item.name}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      Requested Loan: {item.amount}
                    </p>

                  </div>

                  <div className="flex items-center gap-4">

                    <span className={`px-5 py-2 rounded-full text-sm font-bold ${
                      item.status === "Approved"
                        ? "bg-green-400/20 text-green-400"
                        : "bg-yellow-400/20 text-yellow-400"
                    }`}>
                      {item.status}
                    </span>

                    <button className="px-5 py-3 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
                      Review
                    </button>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* Risk Engine */}
          <div className="border border-white/10 rounded-[35px] bg-[#050816] p-8">

            <h2 className="text-4xl font-black mb-10">
              AI Risk Engine
            </h2>

            <div className="space-y-10">

              {/* Stability */}
              <div>

                <div className="flex items-center justify-between mb-3">

                  <p className="text-gray-400">
                    Credit Stability
                  </p>

                  <p className="text-cyan-400 font-bold">
                    92%
                  </p>

                </div>

                <div className="w-full h-4 rounded-full bg-black overflow-hidden">

                  <div className="w-[92%] h-full bg-cyan-400 rounded-full" />

                </div>

              </div>

              {/* Fraud */}
              <div>

                <div className="flex items-center justify-between mb-3">

                  <p className="text-gray-400">
                    Fraud Probability
                  </p>

                  <p className="text-red-400 font-bold">
                    15%
                  </p>

                </div>

                <div className="w-full h-4 rounded-full bg-black overflow-hidden">

                  <div className="w-[15%] h-full bg-red-500 rounded-full" />

                </div>

              </div>

              {/* AI Accuracy */}
              <div>

                <div className="flex items-center justify-between mb-3">

                  <p className="text-gray-400">
                    AI Decision Accuracy
                  </p>

                  <p className="text-green-400 font-bold">
                    98%
                  </p>

                </div>

                <div className="w-full h-4 rounded-full bg-black overflow-hidden">

                  <div className="w-[98%] h-full bg-green-400 rounded-full" />

                </div>

              </div>

            </div>

            {/* Core */}
            <div className="mt-14 border border-white/10 rounded-[30px] bg-black p-8">

              <p className="text-gray-400 text-lg">
                Lending Core
              </p>

              <h3 className="text-6xl font-black text-green-400 mt-5">
                ACTIVE
              </h3>

              <p className="text-gray-500 mt-4">
                Smart lending infrastructure operational.
              </p>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}