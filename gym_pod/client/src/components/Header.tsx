import React, { Component } from "react";
import { Link } from "react-router-dom";
  

interface HeaderState {
  menuOpen: boolean;
}
class Header extends Component<{}, HeaderState> {
  state = {
    menuOpen: false,
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  closeMenu = () => {
    this.setState({
      menuOpen: false,
    });
  };

  render() {
    const { menuOpen } = this.state;

    return (
      <header className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl md:text-3xl font-bold text-orange-500"
            >
              PowerFit Gym
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 font-medium">
              <Link to="/" className="hover:text-orange-500">
                Home
              </Link>

              <Link to="/about" className="hover:text-orange-500">
                About
              </Link>

              <Link to="/programs" className="hover:text-orange-500">
                Programs
              </Link>

              <Link to="/trainers" className="hover:text-orange-500">
                Trainers
              </Link>

              <Link to="/membership" className="hover:text-orange-500">
                Membership
              </Link>

              <Link to="/contact" className="hover:text-orange-500">
                Contact
              </Link>

              <Link
                to="/admin"
                className="bg-orange-500 px-5 py-2 rounded-lg hover:bg-orange-600"
              >
                Admin
              </Link>
            </nav>

            {/* Mobile Button */}
            <button
              onClick={this.toggleMenu}
              className="md:hidden text-3xl text-orange-500"
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <nav className="md:hidden flex flex-col py-4 space-y-4 border-t border-gray-700">
              <Link onClick={this.closeMenu} to="/">
                Home
              </Link>

              <Link onClick={this.closeMenu} to="/about">
                About
              </Link>

              <Link onClick={this.closeMenu} to="/programs">
                Programs
              </Link>

              <Link onClick={this.closeMenu} to="/trainers">
                Trainers
              </Link>

              <Link onClick={this.closeMenu} to="/membership">
                Membership
              </Link>

              <Link onClick={this.closeMenu} to="/contact">
                Contact
              </Link>

              <Link
                onClick={this.closeMenu}
                to="/admin"
                className="bg-orange-500 text-center py-2 rounded-lg"
              >
                Admin
              </Link>
            </nav>
          )}
        </div>
      </header>
    );
  }
}

export default Header;