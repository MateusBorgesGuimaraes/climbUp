import React from "react";
import Title from "../Components/Title";
import Details from "../Components/Details";

const Tips = () => {
  const tipsData = [
    {
      number: 1,
      title: "Start with a Warm-Up",
      text: "Before hitting the climbing wall, spend a few minutes warming up your muscles with light stretching and simple exercises. This helps prevent injuries and prepares your body for the physical demands of climbing.",
    },
    {
      number: 2,
      title: "Learn Basic Techniques",
      text: "Familiarize yourself with essential climbing techniques such as proper foot placement, balance, and handholds. Our expert instructors are available to guide you through the basics and ensure you start with a solid foundation.",
    },
    {
      number: 3,
      title: "Use Proper Gear",
      text: "Ensure you have the right climbing gear, including climbing shoes, a harness, and chalk. Our facility provides high-quality rental equipment if you don't have your own.",
    },
    {
      number: 4,
      title: "Focus on Your Feet",
      text: "Climbing is not just about upper body strength; your legs play a crucial role. Pay attention to your footwork, and try to place your feet accurately on holds to maintain balance and conserve energy.",
    },
    {
      number: 5,
      title: "Take Your Time",
      text: "Don't rush your climb. Take the time to plan your route, and rest when needed. Climbing is as much a mental challenge as it is physical, so staying calm and focused is key.",
    },
    {
      number: 6,
      title: "Stay Hydrated",
      text: "Keep yourself hydrated throughout your climbing session. Climbing can be physically demanding, and staying hydrated helps maintain your energy levels and performance.",
    },
    {
      number: 7,
      title: "Ask for Help",
      text: "Don't hesitate to ask for advice or assistance from our friendly staff or fellow climbers. Climbing is a community, and everyone is here to support each other.",
    },
    {
      number: 8,
      title: "Practice Regularly",
      text: "Like any sport, climbing improves with practice. Visit Climb Up regularly to build your skills, increase your strength, and gain confidence on the wall.",
    },
    {
      number: 9,
      title: "Have Fun",
      text: "Most importantly, enjoy the experience! Climbing is a rewarding and fun activity, and every climb is an opportunity to challenge yourself and grow.",
    },
  ];

  return (
    <section className="max-container py-8 max-xl:px-3 flex flex-col gap-8">
      <Title text="Tips for Beginners" colorDesc="after:bg-sky-800" />

      <div className="w-[980px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-[400px] max-[400px]:w-[280px] self-center">
        {tipsData.map((tip, index) => (
          <Details
            key={index}
            number={tip.number}
            title={tip.title}
            name="tips"
            text={tip.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Tips;
