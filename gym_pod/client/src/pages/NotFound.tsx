import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class NotFound extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="min-h-screen flex justify-center items-center">

          <div className="text-center">

            <h1 className="text-8xl font-bold text-red-500">
              404
            </h1>

            <p className="text-2xl mt-4">
              Page Not Found
            </p>

          </div>

        </div>

        <Footer />
      </>
    );
  }
}

export default NotFound;