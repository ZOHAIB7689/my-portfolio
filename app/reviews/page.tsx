"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from 'next/image';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { useTheme } from 'next-themes';

interface Review {
  name: string;
  content: string;
  rating: number;
  avatar: string;
  position: string;
}

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState<Review>({
    name: '',
    content: '',
    rating: 5,
    avatar: '/avatars/default.jpg',
    position: '',
  });
  const { theme } = useTheme();

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    } else {
      const initialReviews = [
        {
          name: "Dr. Sarah Johnson",
          content: "Zohaib is one of the most innovative students I've had the pleasure of teaching. His understanding of web development and AI is exceptional.",
          rating: 5,
          avatar: "/avatars/sarah.jpg",
          position: "Professor of Computer Science",
        },
        {
          name: "Alex Chen",
          content: "Zohaib's expertise in UI/UX and AI integration was crucial in winning our hackathon. His collaborative spirit made the entire process enjoyable.",
          rating: 5,
          avatar: "/avatars/alex.jpg",
          position: "Software Engineer",
        },
        {
          name: "Emily Roberts",
          content: "Our new website exceeded expectations thanks to Zohaib. His attention to detail and understanding of our needs were impressive.",
          rating: 5,
          avatar: "/avatars/emily.jpg",
          position: "Marketing Director",
        },
      ];
      setReviews(initialReviews);
      localStorage.setItem('reviews', JSON.stringify(initialReviews));
    }
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setNewReview(prev => ({ ...prev, rating }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
    setNewReview({
      name: '',
      content: '',
      rating: 5,
      avatar: '/avatars/default.jpg',
      position: '',
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl font-bold text-center relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Voices of Appreciation
          <span className="block mx-auto mt-2 w-32 h-1 bg-blue-500 rounded-full" />
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-2xl shadow-lg transition-shadow duration-300 flex flex-col justify-between ${
                theme === "dark"
                  ? "bg-gradient-to-t from-gray-950 to-red-950 border-t-red-700 border-b-gray-700"
                  : "bg-gradient-to-t from-white to-gray-100 border-t-gray-300 border-b-gray-400"
              } hover:shadow-lime-400/10`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div>
                <Quote className="w-12 h-12 text-blue-500 mb-6" />
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">{review.content}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-lg">{review.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{review.position}</div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 p-8 rounded-2xl shadow-lg transition-shadow duration-300"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: theme === "dark"
              ? "linear-gradient(to top, #0f0f0f, #4a4a4a)"
              : "linear-gradient(to top, #ffffff, #f0f0f0)",
            borderColor: theme === "dark" ? "#ff6666" : "#cccccc",
          }}
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Share Your Experience</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newReview.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium mb-1">
                Your Position
              </label>
              <input
                type="text"
                id="position"
                name="position"
                value={newReview.position}
                onChange={handleInputChange}
                className="w-full px-4 py-2 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium mb-1">
                Your Review
              </label>
              <textarea
                id="content"
                name="content"
                value={newReview.content}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-2 rounded-md border focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-8 h-8 cursor-pointer ${
                    star <= newReview.rating ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  onClick={() => handleRatingChange(star)}
                />
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
            >
              Submit Your Review
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
