import React from "react";

export default function UnAuthorized() {
  return (
    <div className="scene">
      <div className="overlay"></div>
      <div className="overlay"></div>
      <div className="overlay"></div>
      <div className="overlay"></div>
      <span className="text-6xl bg-403 text-transparent select-none">403</span>
      <div className="text text-white">
        <span className="hero-text"></span>
        <span className="msg">
          cant let <span>you</span> in.
        </span>
        <span className="support">
          <span className="block">unexpected?</span>
          <a href="#" className="block text-yellow-500 hover:text-yellow-300">
            contact support
          </a>
        </span>
      </div>
      <div className="lock"></div>
    </div>
  );
}
