import React from "react";
import { camera, camera2, gallery, video } from "../assets/index";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { AnimatedCard } from "./ui/AnimatedCard";

const Services = () => {
  const ServicesData = [
    { id: "01", title: "E-Commerce!", image: camera2 },
    { id: "02", title: "Booking Website", image: gallery },
    { id: "03", title: "Grow Business Idea", image: camera },
    { id: "04", title: "Hospital Management", image: video },
    { id: "04", title: "Hotel Management!", image: video },
  ];
  return (
    <section
      id="services"
      className="min-h-screen bg-darkBg py-24 text-whiteText/90 relative"
    >
      <Container className="flex flex-col gap-7 justify-center">
        <SectionTitle no="01" title="Services" />

        <div className="flex flex-col gap-5 md:flex-row md:items-center justify-between">
          <h2 className="flex flex-col gap-1 text-5xl font-semibold">
            My Developer{" "}
            <span className="font-semibold text-white/80 italic font-titleFont">
              Services
            </span>
          </h2>
          <p className="max-w-xl text-white/80 tracking-wide text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            suscipit tenetur eum corrupti illo nostrum, minus distinctio ad odit
            corporis, quidem reiciendis possimus. Quisquam optio earum
            voluptatem corrupti eaque expedita?.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 z-20">
          {ServicesData?.map((item) => (
            <AnimatedCard item={item} key={item?.id} />
          ))}
        </div>
      </Container>
      <div className="hidden md:block z-10 bg-darkBg bg-cover bg-center bg-no-repeat w-full h-52 absolute bottom-10 left-0">
        <div className="w-full h-60 bg-line-image bg-cover bg-center bg-no-repeat" />
        <div className="absolute top-0 left-0 bg-darkBg/80 w-full h-60" />
      </div>
    </section>
  );
};

export default Services;
