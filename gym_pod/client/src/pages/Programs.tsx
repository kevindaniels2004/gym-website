import { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

class Programs extends Component {
  render() {
    const programs = [
      {
        title: "Strength Training",
        image:
          "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=900",
        description:
          "Build muscle, increase strength, and improve overall performance with expert guidance.",
      },
      {
        title: "Cardio Fitness",
        image:
          "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=900",
        description:
          "Boost endurance, burn calories, and improve heart health with our cardio sessions.",
      },
      {
        title: "Yoga Classes",
        image:
          "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=900",
        description:
          "Improve flexibility, posture, balance, and mental wellness through guided yoga classes.",
      },
      {
        title: "HIIT Training",
        image:
          "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=900",
        description:
          "High-intensity workouts designed to maximize fat loss and increase fitness levels.",
      },
      {
        title: "Personal Training",
        image:
          "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=900",
        description:
          "One-on-one coaching with certified trainers to help you reach your fitness goals faster.",
      },
      {
        title: "CrossFit",
        image:
          "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900",
        description:
          "Functional workouts combining strength, endurance, and conditioning for total fitness.",
      },
    ];

    return (
      <>
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="uppercase tracking-[5px] text-orange-500 font-semibold text-sm">
              Our Programs
            </p>

            <h1 className="text-4xl md:text-6xl font-bold mt-4">
              Train Smarter.
              <span className="text-orange-500"> Get Stronger.</span>
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-gray-300 text-lg">
              Discover a variety of fitness programs designed for beginners,
              athletes, and everyone in between.
            </p>
          </div>
        </section>

        {/* Programs Section */}
        <section className="bg-black py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-orange-500/30 transition-all duration-300"
                >
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-60 object-cover"
                  />

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">
                      {program.title}
                    </h3>

                    <p className="text-gray-400 mt-4 leading-7">
                      {program.description}
                    </p>

                    <Link
                      to="/contact"
                      className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 text-white text-center px-6 py-3 rounded-lg font-semibold transition duration-300"
                    >
                      Join Program
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-950 text-white py-16 md:py-20">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl md:text-5xl font-bold">
              Ready to Begin Your Fitness Journey?
            </h2>

            <p className="mt-6 text-gray-400 text-lg">
              Choose the perfect program and start transforming your body
              today.
            </p>

            <Link
              to="/contact"
              className="inline-block mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold transition duration-300"
            >
              Join Today
            </Link>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}

export default Programs;