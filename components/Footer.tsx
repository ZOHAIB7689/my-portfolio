'use client'

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail,
  MapPin,
  
  ArrowUpCircle,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://www.github.com/ZOHAIB7689' },
    { icon: Twitter, href: '#' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zohaib-baloch-78974b2b5/' },
  ];

  return (
    <footer className="bg-gray-50 pt-20 relative">
      {/* Back to Top Button */}
      <motion.button
        whileHover={{ y: -5 }}
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-teal-600 hover:text-teal-700 transition-colors">
          <ArrowUpCircle className="w-6 h-6" />
        </div>
      </motion.button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zohaib</span>
            </div>
            <p className="text-gray-600">
              Crafting digital experiences that make a difference
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -5 }}
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-teal-600 transition-colors shadow-sm"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['About', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <motion.a
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-600 hover:text-teal-600 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-600">
                <MapPin className="w-5 h-5 text-teal-600" />
                <span>Karachi Pakistan</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-teal-600" />
                <span>bzohaib754@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-4">
              Subscribe to receive updates and news about my latest projects.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="border-gray-200 focus:ring-teal-500"
              />
              <Button className="w-full bg-teal-600 hover:bg-teal-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t py-8 text-center">
          <p className="text-gray-600 flex items-center justify-center">
            <span className='text-rose-300 font-semibold mr-1'>Designed</span> and <span className='font-semibold text-fuchsia-500 mr-1 ml-1'>Build</span> with <Heart className="w-4 h-4 mx-2 text-red-500 fill-current" /> by
            <span className="font-semibold ml-1">Zohaib</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;