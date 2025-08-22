import { Star } from "lucide-react";
import React from "react";

const Rating = ({ rating, maxStars = 5, size = "w-5 h5" }) => {
  // Validasi input
  const validRating = Math.max(0, Math.min(maxStars, parseFloat(rating) || 0));

  return (
    <div className="flex items-center gap-1">
      {/* render bintang */}
      <div className="flex">
        {Array.from({ length: maxStars }, (_, index) => {
          const starPosition = index + 1;

          // Full  star >= posisi bintang
          if (validRating >= starPosition) {
            return (
              <Star
                key={index}
                className={`${size} fill-yellow-400 text-yellow-400`}
              />
            );
          }
          //   Half star - rating berada di antara posisi - 1 dan posisi
          else if (validRating >= starPosition - 0.5) {
            return (
              <div key={index} className="relative">
                {/* Background empty star */}
                <Star className={`${size} text-gray-300`} />
                {/* Half-filled overlay */}
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: "50%" }}
                >
                  <Star className={`${size} fill-yellow-400 text-yellow-400`} />
                </div>
              </div>
            );
          } //Empty Star
          else {
            return (
                <Star key={index} className={`${size} text-gray-300`}/>
            )
          }
        })}
      </div>
      {/* Angka Rating */}
      <span className="text-sm text-gray-500 ml-2">
        {validRating.toFixed(1)} ({maxStars})
      </span>
    </div>
  );
};

export default Rating;
