import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    return (
      <>
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
              About PowerFit Gym
            </p>

            <h1 className="text-5xl md:text-6xl font-bold">
              Your Fitness Journey <span className="text-orange-500">Starts Here</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-3xl mx-auto text-lg leading-8">
              At PowerFit Gym, we believe fitness is more than lifting weights.
              It is about building confidence, improving health, and becoming
              the strongest version of yourself.
            </p>
          </div>
        </section>

        {/* About */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900"
                alt="Gym Interior"
                className="rounded-3xl shadow-2xl w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold mb-6">
                Who We Are
              </h2>

              <p className="text-gray-300 leading-8 mb-6">
                PowerFit Gym is a modern fitness center dedicated to helping
                people of all fitness levels achieve their goals. Whether you
                want to lose weight, build muscle, improve endurance, or simply
                live a healthier lifestyle, our experienced trainers are here to
                support you every step of the way.
              </p>

              <p className="text-gray-300 leading-8">
                We combine advanced equipment, personalized training programs,
                and a motivating atmosphere to create an environment where
                everyone can succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-gray-950 text-white py-20">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Our Mission
            </h2>

            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-8">
              Our mission is to inspire individuals to lead healthier,
              stronger, and more confident lives through expert coaching,
              innovative training methods, and a supportive fitness community.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-black text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="text-4xl font-bold">
                Why Choose PowerFit?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-orange-500 transition duration-300">
                <div className="text-5xl mb-4">🏋️</div>
                <h3 className="text-xl font-bold mb-3">
                  Modern Equipment
                </h3>
                <p className="text-gray-300">
                  Premium fitness machines and free weights for every workout.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-orange-500 transition duration-300">
                <div className="text-5xl mb-4">💪</div>
                <h3 className="text-xl font-bold mb-3">
                  Expert Trainers
                </h3>
                <p className="text-gray-300">
                  Certified professionals dedicated to your success.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-orange-500 transition duration-300">
                <div className="text-5xl mb-4">❤️</div>
                <h3 className="text-xl font-bold mb-3">
                  Healthy Lifestyle
                </h3>
                <p className="text-gray-300">
                  Fitness plans designed to improve your overall well-being.
                </p>
              </div>

              <div className="bg-gray-900 p-8 rounded-2xl text-center hover:bg-orange-500 transition duration-300">
                <div className="text-5xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3">
                  Proven Results
                </h3>
                <p className="text-gray-300">
                  Hundreds of members have achieved their dream transformation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-orange-500 py-20">
          <div className="max-w-5xl mx-auto text-center px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Become Part of the PowerFit Family
            </h2>

            <p className="text-orange-100 mt-6 text-lg">
              Start your transformation today with expert guidance and a
              supportive fitness community.
            </p>

            <Link
              to="/membership"
              className="inline-block mt-8 bg-white text-orange-500 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition"
            >
              Join Now
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default About;