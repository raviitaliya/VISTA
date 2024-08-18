import React, { useState, useEffect, FormEvent, ChangeEvent, KeyboardEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [otp, setOTP] = useState<string[]>(["", "", "", "", "", ""]);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [verificationToken, setVerificationToken] = useState<string>("");
  const [timer, setTimer] = useState<number>(60);
  const [canResend, setCanResend] = useState<boolean>(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (showOTP && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      setCanResend(true);
    }
    return () => clearInterval(interval);
  }, [showOTP, timer]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleCreateAccount = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/api/signup", formData);
      setVerificationToken(response.data.verificationToken);
      setShowOTP(true);
      setTimer(60);
      setCanResend(false);
      toast.success(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred while creating the account.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleOTPChange = (index: number, value: string) => {
    if (/^[0-9]*$/.test(value)) {
      const newOTP = [...otp];
      newOTP[index] = value;
      setOTP(newOTP);

      if (value !== "" && index < 5) {
        const nextInput = document.getElementById(`otp-${index + 1}`) as HTMLInputElement;
        if (nextInput) nextInput.focus();
      } else if (value === "" && index > 0) {
        const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
        if (prevInput) prevInput.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && index > 0 && otp[index] === "") {
      const prevInput = document.getElementById(`otp-${index - 1}`) as HTMLInputElement;
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerifyOTP = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpValue = otp.join("");
    if (otpValue.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    try {
      const response = await axios.post("http://localhost:4000/api/verify-otp", {
        verificationToken,
        otp: otpValue,
      });
      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred while verifying OTP.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  const handleResendOTP = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/resend-otp", {
        email: formData.email,
      });
      setVerificationToken(response.data.verificationToken);
      setTimer(60);
      setCanResend(false);
      setOTP(["", "", "", "", "", ""]);  // Reset OTP input
      toast.success(response.data.message);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data?.message || "An error occurred while resending OTP.");
      } else {
        toast.error("An unexpected error occurred.");
      }
    }
  };

  return (
    <div className="w-full h-screen flex gap-32">
      <div className="w-[400px] h-full bg-black relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
        >
          <source src="/signup.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute top-6 left-6 font-['Bodoni_Moda_SC',_serif] font-medium text-white">
          <h1 className="text-4xl">VISTA</h1>
      <ToastContainer />

        </div>
      </div>
      <div className="flex-1 flex items-center">
        <div className="w-[420px] h-[600px] relative">
          <AnimatePresence mode="wait">
            {!showOTP ? (
              <motion.div
                key="signup"
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
              >
                <h1 className="text-3xl font-semibold mb-8">Sign up to vista</h1>
                <div className="w-full border-t-[1px] pt-8">
                  <form className="flex flex-col gap-4" onSubmit={handleCreateAccount}>
                    <div className="flex gap-4">
                      <div>
                        <label htmlFor="name" className="block mb-2 font-semibold">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="username" className="block mb-2 font-semibold">
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          value={formData.username}
                          onChange={handleInputChange}
                          className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-semibold">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1"
                        required
                      />
                    </div>
                    <div className="mt-2">
                      <label htmlFor="password" className="block mb-2 font-semibold">
                        Password
                      </label>
                      <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="w-full rounded-xl py-4 px-4 border outline-none focus:ring-1"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-[rgba(0,0,0,1)] mt-4 text-white py-4 px-4 rounded-2xl hover:bg-[rgba(0,0,0,0.8)] transition duration-300"
                    >
                      Create Account
                    </button>
                    <p className="text-center mt-4">
                      {`Already have an account? `}
                      <Link to="/login" className="underline ml-1">
                        Login
                      </Link>
                    </p>
                  </form>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="verification"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center"
              >
                <h2 className="text-2xl font-semibold mb-8">Enter Verification Code</h2>
                <form onSubmit={handleVerifyOTP} className="flex flex-col gap-4">
                  <div className="flex gap-2 mb-4">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        id={`otp-${index}`}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => handleOTPChange(index, e.target.value)}
                        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                        className="w-12 h-12 text-center border rounded-lg"
                        required
                      />
                    ))}
                  </div>
                  <button
                    type="submit"
                    className="bg-[rgba(0,0,0,1)] mt-4 text-white py-4 px-4 rounded-2xl hover:bg-[rgba(0,0,0,0.8)] transition duration-300"
                  >
                    Verify OTP
                  </button>
                  <div className="mt-2 text-center">
                    {timer > 0 ? (
                      <p>Resend OTP in {timer} seconds</p>
                    ) : (
                      <button
                        type="button"
                        onClick={handleResendOTP}
                        className="text-blue-600 hover:underline"
                        disabled={!canResend}
                      >
                        Resend OTP
                      </button>
                    )}
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Login;