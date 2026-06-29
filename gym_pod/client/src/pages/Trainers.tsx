import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Trainers extends Component {
  render() {
    const trainers = [
      {
        name: "Rahul Sharma",
        role: "Strength Coach",
        image:
          "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=900",
        description:
          "Specialist in strength training, muscle building, and powerlifting with 8+ years of experience.",
      },
      {
        name: "Priya Patel",
        role: "Yoga Instructor",
        image:
          "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=900",
        description:
          "Certified yoga instructor helping members improve flexibility, posture, and mindfulness.",
      },
      {
        name: "Aman Verma",
        role: "Personal Trainer",
        image:
          "https://images.unsplash.com/photo-1566753323558-f4e0952af115?w=900",
        description:
          "Expert in weight loss, body transformation, and customized workout programs.",
      },
      {
        name: "Sneha Kapoor",
        role: "Cardio Coach",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900",
        description:
          "Helps members improve endurance and cardiovascular fitness through effective training.",
      },
      {
        name: "Vikram Singh",
        role: "CrossFit Coach",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900",
        description:
          "Professional CrossFit trainer focused on functional strength and athletic performance.",
      },
      {
        name: "Neha Joshi",
        role: "Nutrition Expert",
        image:
          "https://images.unsplash.com/photo-1544717305-2782549b5136?w=900",
        description:
          "Provides personalized diet plans and nutrition guidance for healthy living.",
      },
    ];

    return (
      <>
        <Header />

        {/* Hero */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold text-sm">
              Meet Our Team
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Expert
              <span className="text-orange-500"> Trainers</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
              Our certified trainers are committed to helping you achieve your
              fitness goals with personalized guidance and motivation.
            </p>
          </div>
        </section>

        {/* Trainers */}
        <section className="bg-black py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {trainers.map((trainer, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-orange-500/30 transition-all duration-300"
                >
                  <img
                    src={trainer.image}
                    alt={trainer.name}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {trainer.name}
                    </h3>

                    <p className="text-orange-500 font-semibold mt-2">
                      {trainer.role}
                    </p>

                    <p className="text-gray-400 mt-4 leading-7">
                      {trainer.description}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      Book Session
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-950 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Train with the Best
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Get expert guidance from certified trainers and achieve your
              fitness goals faster.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Book a Trainer
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Trainers;