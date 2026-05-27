export default function KYCPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-14">

          <div className="inline-flex items-center px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-gray-300 mb-8">
            AI Verification Infrastructure
          </div>

          <h1 className="text-6xl md:text-7xl font-black">
            KYC Verification
          </h1>

          <p className="text-gray-400 text-xl mt-6 max-w-3xl">
            Secure digital identity verification powered by AI,
            blockchain infrastructure, and intelligent fraud detection.
          </p>

        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Upload */}
          <div className="md:col-span-2 border border-white/10 rounded-[35px] bg-[#050816] p-10">

            <h2 className="text-4xl font-black mb-10">
              Upload Verification Documents
            </h2>

            <div className="space-y-8">

              {/* NIN */}
              <div>

                <label className="block text-gray-400 mb-3">
                  National Identification Number
                </label>

                <input
                  type="text"
                  placeholder="Enter NIN"
                  className="w-full h-14 rounded-2xl bg-black border border-white/10 px-5 outline-none focus:border-cyan-400/40"
                />

              </div>

              {/* Upload */}
              <div>

                <label className="block text-gray-400 mb-3">
                  Upload ID Document
                </label>

                <div className="border border-dashed border-white/20 rounded-[30px] h-52 flex items-center justify-center text-gray-500 bg-black">

                  Drag & Drop Files Here

                </div>

              </div>

              {/* Face Verification */}
              <div>

                <label className="block text-gray-400 mb-3">
                  Face Verification
                </label>

                <div className="border border-white/10 rounded-[30px] h-52 bg-black flex items-center justify-center text-gray-500">

                  AI Face Scan Ready

                </div>

              </div>

              <button className="w-full h-16 rounded-2xl bg-cyan-400 text-black font-black text-xl hover:scale-[1.01] transition-all duration-300 shadow-[0_0_40px_rgba(34,211,238,0.3)]">

                Start AI Verification

              </button>

            </div>

          </div>

          {/* Status */}
          <div className="space-y-8">

            {/* Trust Score */}
            <div className="border border-white/10 rounded-[35px] bg-[#050816] p-8">

              <p className="text-gray-400 text-xl">
                Trust Score
              </p>

              <h2 className="text-[100px] font-black text-green-400 leading-none mt-6">
                98%
              </h2>

            </div>

            {/* Verification Status */}
            <div className="border border-white/10 rounded-[35px] bg-[#050816] p-8">

              <h2 className="text-3xl font-black mb-8">
                Verification Status
              </h2>

              <div className="space-y-5">

                {[
                  "NIN Validation",
                  "Face Match",
                  "Document Scan",
                  "Fraud Detection",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border border-white/10 rounded-2xl p-4 bg-black"
                  >

                    <span>{item}</span>

                    <span className="text-green-400 font-bold">
                      Ready
                    </span>

                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </main>
  );
}