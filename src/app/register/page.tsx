"use client";
import { RippleButton } from "@/components/ui/beam-color";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter()

  return (
    <section className="relative overflow-hidden py-10">
      {/* Decorative circles */}
      <div className="h-[400px] w-[400px] -top-40 -left-32 rounded-full fixed bg-red-500/20 blur-3xl" />
      <div className="h-[400px] w-[400px] -bottom-40 -right-32 rounded-full fixed bg-red-500/20 blur-3xl" />

      <div className="flex items-center justify-center min-h-screen sm:py-10 py-0 relative z-10 px-4">
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 w-full max-w-6xl">
          {/* ===== Left Image Section (hidden on mobile) ===== */}
          <div className="hidden lg:flex flex-1 flex-col justify-between bg-[#111]/70 text-white border border-gray-600 rounded-xl p-10 sm:p-12">
            <div className="flex flex-col items-center lg:items-start">
              <img
                loading="lazy"
                src="https://www.thelightnationchurch.com/_next/image?url=%2Fauth%2Flight-nation.png&w=1920&q=75&dpl=dpl_DfTJ5uZg6eeHhBCBhnYyvEKDRpyE"
                alt="login illustration"
                className="h-[8rem] sm:h-[10rem] object-contain"
              />
              <div className="mt-8 text-center lg:text-left">
                <h3 className="text-[42px] sm:text-[60px] xl:text-[72px] font-semibold leading-[1.1]">
                  Continue <br />
                  <span className="text-[32px] sm:text-[44px] xl:text-[52px] font-light">
                    the Adventure
                  </span>
                </h3>
              </div>
            </div>

            <p className="text-gray-300 text-sm sm:text-base mt-10 hidden lg:block">
              Join the Light Nation platform — grow, connect, and continue your
              spiritual adventure with our global family.
            </p>
          </div>

          {/* ===== Auth Form Section ===== */}
          <div className="flex-1 bg-[#111] text-white rounded-xl sm:p-10 p-6 flex flex-col items-center justify-center">
            {/* Top image for mobile only */}
            <div className="lg:hidden mb-8 flex flex-col items-center">
              <img
                src="https://www.thelightnationchurch.com/_next/image?url=%2Fauth%2Flight-nation.png&w=1920&q=75&dpl=dpl_DfTJ5uZg6eeHhBCBhnYyvEKDRpyE"
                alt="light nation"
                className="h-20 object-contain"
              />
              <h3 className="sm:text-3xl text-xl font-semibold mt-4 text-center leading-snug">
                Continue the <span className="font-light">Adventure</span>
              </h3>
            </div>

            <div className="w-full max-w-md">
              <h2 className="sm:text-3xl text-xl font-semibold mb-6 text-center">
                {isLogin ? "Welcome Back 👋" : "Create an Account ✨"}
              </h2>
              <form className="space-y-5">
                {!isLogin && (
                  <div>
                    <label className="block text-sm mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-[#222] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 auth-input"
                      placeholder="Enter your full name"
                    />
                  </div>
                )}
                <div>
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-[#222] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 auth-input"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2">Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 rounded-lg bg-[#222] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 auth-input"
                    placeholder="Enter your password"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 transition-colors py-3 rounded-lg font-semibold mt-6"
                >
                  {isLogin ? "Login" : "Register"}
                </button>
              </form>

              <div className="mt-6 text-center text-sm text-gray-400">
                {isLogin ? (
                  <>
                    Don’t have an account?{" "}
                    <button
                      className="text-red-500 hover:underline cursor-pointer"
                      onClick={() => setIsLogin(false)}
                    >
                      Register
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{" "}
                    <button
                      className="text-red-500 hover:underline cursor-pointer"
                      onClick={() => setIsLogin(true)}
                    >
                      Login
                    </button>
                  </>
                )}

                <div className="mt-8">
                  <RippleButton onClick={() => router.push('/')} className="bg-red-800 hover:bg-red-700 text-white [&_svg:not([class*='size-'])]:size-5 py-2 px-4 has-[>svg]:mr-2 rounded-lg">
                    <ArrowLeft /> Back to Home
                  </RippleButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Autofill color fix */}
      <style jsx global>{`
        input.auth-input {
          @apply w-full px-4 py-3 rounded-lg bg-[#222] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500;
        }

        /* Chrome autofill fix */
        input.auth-input:-webkit-autofill,
        input.auth-input:-webkit-autofill:hover,
        input.auth-input:-webkit-autofill:focus,
        input.auth-input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0px 1000px #222 inset !important;
          -webkit-text-fill-color: #fff !important;
          transition: background-color 5000s ease-in-out 0s;
          caret-color: #fff !important;
        }
      `}</style>
    </section>
  );
}
