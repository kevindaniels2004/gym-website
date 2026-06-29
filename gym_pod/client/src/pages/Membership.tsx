import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Membership extends Component {
  render() {
    const plans = [
      {
        name: "Basic",
        price: "₹999",
        duration: "/month",
        features: [
          "Gym Access",
          "Locker Facility",
          "Basic Equipment",
          "Free Fitness Assessment",
        ],
      },
      {
        name: "Premium",
        price: "₹1999",
        duration: "/month",
        features: [
          "Everything in Basic",
          "Personal Trainer",
          "Group Classes",
          "Diet Consultation",
        ],
        popular: true,
      },
      {
        name: "Elite",
        price: "₹2999",
        duration: "/month",
        features: [
          "Everything in Premium",
          "Unlimited Classes",
          "Nutrition Plan",
          "24/7 Gym Access",
        ],
      },
    ];

    return (
      <>
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold text-sm">
              Membership Plans
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Choose Your
              <span className="text-orange-500"> Membership</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
              Flexible membership plans designed to help you achieve your
              fitness goals. Choose the plan that fits your lifestyle.
            </p>
          </div>
        </section>

        {/* Plans */}
        <section className="bg-black py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative rounded-2xl p-8 transition duration-300 hover:-translate-y-2 ${
                    plan.popular
                      ? "bg-orange-500 text-white shadow-2xl scale-105"
                      : "bg-gray-900 text-white"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute top-4 right-4 bg-white text-orange-500 text-xs font-bold px-3 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}

                  <h2 className="text-3xl font-bold">{plan.name}</h2>

                  <div className="mt-6">
                    <span className="text-5xl font-bold">{plan.price}</span>
                    <span className="text-lg">{plan.duration}</span>
                  </div>

                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span>✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`block text-center mt-10 py-3 rounded-lg font-semibold transition ${
                      plan.popular
                        ? "bg-white text-orange-500 hover:bg-gray-100"
                        : "bg-orange-500 hover:bg-orange-600 text-white"
                    }`}
                  >
                    Choose Plan
                  </Link>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-950 py-16 text-white">
          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold">
                Membership Benefits
              </h2>

              <p className="mt-4 text-gray-400">
                Enjoy premium facilities and expert guidance with every plan.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

              <div className="bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-5xl">🏋️</div>
                <h3 className="mt-4 text-xl font-bold">Modern Equipment</h3>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-5xl">👨‍🏫</div>
                <h3 className="mt-4 text-xl font-bold">Certified Trainers</h3>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-5xl">🥗</div>
                <h3 className="mt-4 text-xl font-bold">Nutrition Support</h3>
              </div>

              <div className="bg-gray-900 p-6 rounded-xl text-center">
                <div className="text-5xl">🏆</div>
                <h3 className="mt-4 text-xl font-bold">Fitness Community</h3>
              </div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-black py-16 md:py-20 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold">
              Start Your Fitness Journey Today
            </h2>

            <p className="mt-6 text-lg text-gray-400">
              Join PowerFit Gym and take the first step toward a healthier,
              stronger, and more confident you.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
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

export default Membership;