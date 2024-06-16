import React from "react";
import Title from "../Components/Title";
import { assets } from "../assets/assets";
import Card from "../Components/Card";

const Recommendations = () => {
  return (
    <section className="max-xl:px-3">
      <Title text="Recommendations" />
      <div className="mt-8 flex gap-5 flex-wrap max-lg:justify-center">
        <Card
          name="LONG MOUNTAIN"
          difficulty={3}
          location="China, Xangai"
          img={assets.card1}
        />

        <Card
          name="CARRASCKTY"
          difficulty={5}
          location="RUSSIA, YEKOVSITKY"
          img={assets.card2}
        />

        <Card
          name="ESTOCON DEU"
          difficulty={4}
          location="CHILE, SANTA ELENA"
          img={assets.card3}
        />

        <Card
          name="HOUSTON HILL"
          difficulty={2}
          location="CANADA, ARLOIW"
          img={assets.card4}
        />
      </div>
    </section>
  );
};

export default Recommendations;
