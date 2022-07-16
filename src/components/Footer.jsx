import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  return (
    <div className="rounded-div mt-8 pt-8 text-primary">
      <div className="grid md:grid-cols-2">
        <div className="flex justify-evenly w-full md:max-w-[300px] uppercase">
          <div>
            <h2 className="font-extrabold">Support</h2>
            <ul>
              <li className="text-sm py-2">Help Center</li>
              <li className="text-sm py-2">Contact Us</li>
              <li className="text-sm py-2">API Status</li>
              <li className="text-sm py-2">Documentation</li>
            </ul>
          </div>
          <div>
            <h2 className="font-extrabold">Info</h2>
            <ul>
              <li className="text-sm py-2">About Us</li>
              <li className="text-sm py-2">Join Us</li>
              <li className="text-sm py-2">Invest</li>
              <li className="text-sm py-2">Legal</li>
            </ul>
          </div>
        </div>
        <div className="text-right">
          <div className="w-full flex justify-end">
            <div className="w-full md:w-[300px] py-4 relative">
              <div className="flex justify-center md:justify-end py-4 md:py-0 md:pb-4 mt-[-1rem]">
              <ThemeToggle/>
              </div>
            <p className="text-center md:text-right">Sign up for crypto news</p>
            <div className="py-4">
              <form>
                <input className="bg-primary border border-input p-2 mr-2 w-full shadow-xl rounded-2xl md:w-auto" type="email" placeholder="Type ur email here" />
                <button className="bg-button text-btnText px-4 p-2 w-full rounded-2xl shadow-xl hover:shadow-2xl md:w-auto my-2">Sign up</button>
              </form>
            </div>
            <div className="flex py-4 justify-evenly text-accent">
              <FaGithub onClick={() => window.open("https://github.com/gscorrea10", "_blank")} className="cursor-pointer text-2xl"/>  
              <FaLinkedin onClick={() => window.open("https://www.linkedin.com/in/gscorrea", "_blank")} className="cursor-pointer text-2xl"/>
            </div>
            </div>
          </div>
        </div>
      </div>
      <p onClick={() => window.open("https://www.coingecko.com/", "_blank")} className="text-center text-accent py-4 cursor-pointer">Powered by CoinGecko.com</p>
    </div>
  );
}

export default Footer;