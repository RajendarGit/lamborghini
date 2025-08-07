"use client";
import Container from "./container";
import { Button, ChevronDownIcon } from "@radix-ui/themes";
import { useState } from "react";

const NewTo = () => {
  const [activeTab, setActiveTab] = useState("Putra");
  return (
    <div className="bg-gray-900">
      <Container className="py-20">
        <h2 className="text-5xl lg:text-6xl text-gray-500 mb-4 text-center">
          New to <span className="text-gray-50">Lamborghini?</span> <br />
          <span className="text-gray-50">We&apos;ve got you.</span>
        </h2>
        <p className="mb-8 text-gray-400 text-center">
          Lorem ipsum dolor sit, amet consectetur.
        </p>

        <div className="mt-20">
          <div className="md:w-[90%] max-w-6xl md:flex rounded-3xl overflow-hidden shadow-xl mx-auto">
            {/* Left Side - Image */}
            <div
              className="w-1/2 bg-cover bg-center hidden md:block"
              style={{ backgroundImage: "url('/assets/images/banner3.jpg')" }}
            >
              {/* Optionally blur bottom */}
              <div className="h-full w-full bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            {/* Right Side - Form */}
            <div className="md:w-1/2 bg-gradient-to-r from-white/10 to-yellow-800/50 backdrop-blur-sm text-white p-10 flex flex-col justify-center rounded-r-3xl">
              <p className="text-sm text-white/70 mb-4">
                All fields are required.
              </p>

              {/* Toggle Tabs */}
              <div className="flex mb-6 border-b border-white/20">
                {["Bara", "Putra"].map((label) => (
                  <button
                    key={label}
                    onClick={() => setActiveTab(label)}
                    className={`px-4 pb-2 transition-all ${
                      activeTab === label
                        ? "border-b-4 border-theme text-white"
                        : "text-white/50"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Form */}
              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-white/20 placeholder-white/60 text-white focus:outline-none focus:border-orange-400 py-2"
                />
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b border-white/20 text-white appearance-none pr-8 focus:outline-none focus:border-orange-400 py-2"
                    defaultValue=""
                  >
                    <option value="" disabled hidden>
                      Intended use
                    </option>
                    <option value="camping" className="text-black">
                      Camping
                    </option>
                    <option value="backup" className="text-black">
                      Backup
                    </option>
                  </select>
                  <ChevronDownIcon className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white" />
                </div>
                <Button type="button" size="4">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NewTo;
