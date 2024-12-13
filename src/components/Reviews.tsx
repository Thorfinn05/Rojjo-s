import React from 'react';
import { Star } from 'lucide-react';
import { COLORS } from '../utils/constants';

const REVIEWS = [
  {
    name: "Amrita Sen",
    rating: 5,
    comment: "The most authentic Bengali cuisine I've had outside Kolkata. The Kosha Mangsho was perfect!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
  },
  {
    name: "Rajdeep Chatterjee",
    rating: 5,
    comment: "Incredible ambiance and the Ilish preparation took me back to my grandmother's kitchen.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
  },
  {
    name: "Mitali Das",
    rating: 5,
    comment: "Their Mishti Doi and Nolen Gurer desserts are heavenly. A must-visit for Bengali food lovers!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-[${COLORS.primary}] font-serif text-xl mb-4">Guest Reviews</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <div className="flex text-[${COLORS.accent}]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{review.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}