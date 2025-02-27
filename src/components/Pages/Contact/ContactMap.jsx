import React from "react";
import { useGetSettingDataQuery } from "../../../Redux/Slices/GeneralSettingsApi";

export default function ContactMap() {
  const { data } = useGetSettingDataQuery()
  console.log("getSettingData", data);  
  return (
    <div className="bg-light p-30 mb-30">
      <iframe
        style={{ width: "100%", height: "250px", border: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
    </div>
  );
}
