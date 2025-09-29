import React from "react";
import ProfileCard from "../ProfileCard";

export default function Contact() {
  return (
    <div className=" flex justify-center items-center h-dvh">
      <ProfileCard
        name="Sujal Tyagi"
        title="Software Engineer"
        handle="javicodes"
        status="Online"
        contactText="Contact Me"
        // avatarUrl="/path/to/avatar.jpg"
        showUserInfo={false}
        enableTilt={false}
        enableMobileTilt={false}
        onContactClick={() => console.log("Contact clicked")}
      />
    </div>
  );
}
