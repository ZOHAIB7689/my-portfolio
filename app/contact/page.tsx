"use client";

import { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mt-12 mx-auto px-4 py-8"
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-teal-700">Get in Touch</h1>
      <p className="mb-8 text-center text-lg">I&apos;d love to hear from you! Feel free to reach out through the form below or connect via social media.</p>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <div className="dark:bg-red-200/25 bg-red-400/10 p-3 rounded-md border border-red-700">
            <p className="text-sm dark:text-green-400 text-green-700">
              Currently, we are not receiving messages submitted through this form. This service will be available soon. You can contact directly via social media.
            </p>
          </div>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none dark:bg-black focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none dark:bg-black focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 dark:bg-black rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              required
            ></textarea>
          </div>
          <Button type="submit" className="w-full py-2 px-4 rounded-md transition-colors duration-300">Send Message</Button>
        </motion.form>

        <motion.div 
          className="flex flex-col items-center justify-center space-y-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <p className="text-xl font-semibold">Connect with me:</p>
          <div className="flex space-x-8">
            <a href="https://github.com/ZOHAIB7689" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-4xl hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="mailto:bzohaib754@gmail.com" className="text-4xl hover:text-primary transition-all duration-300 ease-in-out transform hover:scale-110">
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
