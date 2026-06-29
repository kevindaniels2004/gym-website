import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-black text-white py-8 mt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-orange-500">
            PowerFit Gym
          </h2>

          <p className="mt-2">
            Train Hard • Stay Strong • Live Healthy
          </p>

          <p className="mt-4 text-gray-400">
            © 2026 PowerFit Gym. All Rights Reserved.
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;