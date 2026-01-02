import React from "react";
import AchievementsImg from "../../public/Achievements.png";

const Achievements = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 flex justify-center">
        <img
          src={AchievementsImg}
          alt="Achievements"
          className="w-full max-w-24xl object-contain"
        />
      </div>
    </section>
  );
};

export default Achievements;
