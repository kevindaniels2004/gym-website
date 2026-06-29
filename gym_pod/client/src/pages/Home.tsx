import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <Header />

        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white">
          {/* Background Glow */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <p className="text-orange-500 uppercase tracking-[5px] text-xs sm:text-sm font-semibold mb-4">
                  Welcome To PowerFit Gym
                </p>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                  Train Hard.
                  <br />
                  <span className="text-orange-500">Stay Strong.</span>
                </h1>

                <p className="mt-6 text-gray-300 text-base sm:text-lg leading-8 max-w-xl mx-auto lg:mx-0">
                  Achieve your dream physique with certified trainers, modern
                  equipment, personalized workout plans, and a motivating
                  fitness environment designed to help you become your strongest
                  self.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link
                    to="/membership"
                    className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300 text-center"
                  >
                    Join Now
                  </Link>

                  <Link
                    to="/programs"
                    className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-lg transition duration-300 text-center"
                  >
                    Explore Programs
                  </Link>
                </div>
              </div>

              {/* Right Image */}
              <div className="flex justify-center">
                <img
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900"
                  alt="Gym Workout"
                  className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[550px] rounded-3xl shadow-2xl object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black text-white py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              Ready To Transform Your Life?
            </h2>

            <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Join hundreds of members who are achieving their fitness goals
              with expert guidance and world-class facilities.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-10 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Contact Us
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Home;