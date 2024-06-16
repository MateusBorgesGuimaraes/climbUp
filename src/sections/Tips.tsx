import React from "react";
import Title from "../Components/Title";
import Details from "../Components/Details";

const Tips = () => {
  return (
    <section className="max-container py-8 max-xl:px-3 flex flex-col gap-8">
      <Title text="Tips for Begginers" colorDesc="after:bg-sky-800" />

      <div className="w-[980px] max-lg:w-[700px] max-md:w-[500px] max-sm:w-[400px] max-[400px]:w-[280px] self-center">
        <Details
          number={1}
          open
          title="Start with a Warm-Up"
          name="tips"
          text="Before hitting the climbing wall, spend a few minutes warming up
            your muscles with light stretching and simple exercises. This helps
            prevent injuries and prepares your body for the physical demands of
            climbing."
        />

        <Details
          number={2}
          title="Learn Basic Techniques"
          name="tips"
          text="Familiarize yourself with essential climbing techniques such as proper foot placement, balance, and handholds. Our expert instructors are available to guide you through the basics and ensure you start with a solid foundation."
        />

        <Details
          number={3}
          title="Use Proper Gear"
          name="tips"
          text="Ensure you have the right climbing gear, including climbing shoes, a harness, and chalk. Our facility provides high-quality rental equipment if you dont have your own."
        />

        <Details
          number={4}
          title="Focus on Your Feet"
          name="tips"
          text="Climbing is not just about upper body strength; your legs play a crucial role. Pay attention to your footwork, and try to place your feet accurately on holds to maintain balance and conserve energy."
        />

        <Details
          number={5}
          title="Take Your Time"
          name="tips"
          text=" Dont rush your climb. Take the time to plan your route, and rest when needed. Climbing is as much a mental challenge as it is physical, so staying calm and focused is key."
        />

        <Details
          number={6}
          title="Stay Hydrated"
          name="tips"
          text="Keep yourself hydrated throughout your climbing session. Climbing can be physically demanding, and staying hydrated helps maintain your energy levels and performance."
        />

        <Details
          number={7}
          title="Ask for Help"
          name="tips"
          text="Dont hesitate to ask for advice or assistance from our friendly staff or fellow climbers. Climbing is a community, and everyone is here to support each other."
        />

        <Details
          number={8}
          title="Practice Regularly"
          name="tips"
          text="Like any sport, climbing improves with practice. Visit Climb Up regularly to build your skills, increase your strength, and gain confidence on the wall."
        />

        <Details
          number={9}
          title="Have Fun"
          name="tips"
          text="Most importantly, enjoy the experience! Climbing is a rewarding and fun activity, and every climb is an opportunity to challenge yourself and grow."
        />
      </div>
    </section>
  );
};

export default Tips;
