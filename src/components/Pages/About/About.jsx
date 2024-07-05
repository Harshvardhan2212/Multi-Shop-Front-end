import React from "react";
import Breadcrumbs from "../../../Routes/Breadcrumbs";
import { useGetAboutUsDataQuery } from "../../../Redux/api";
export default function About() {
  const { data: aboutData } = useGetAboutUsDataQuery();
  console.log(aboutData, "aboutData");

  return (
    <>
      <Breadcrumbs />
      <div className="container-fluid">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
          <span className="bg-secondary pr-3">About US</span>
        </h2>
        <div
          className="container mt-5"
          dangerouslySetInnerHTML={{
            __html: aboutData?.description?.description,
          }}
        ></div>
      </div>
    </>
  );
}
