import React from "react";
import cx from "classname";
import Image from "next/image";

const Teams = [
  {
    name: "KuXin",
    icon: "/images/member-1.webp",
    bio: "Nerd Developer",
  },
  {
    name: "KuTret",
    icon: "/images/member-2.webp",
    bio: "Talented Artist",
  },
];

const TeamSection = () => {
  return (
    <section
      className={cx(
        "w-full min-h-screen bg-center bg-cover bg-no-repeat bg-gray-700"
      )}
      id="team"
    >
      <div className="flex flex-col w-full items-center text-white max-w-screen-lg xl:max-w-screen-xl px-4 mx-auto pt-32 pb-20">
        <h3 className="text-3xl md:text-6xl font-bold text-center mb-10">
          Our Team
        </h3>
        <div className="flex flex-col items-center md:flex-row md:justify-center space-y-6 md:space-y-0 md:space-x-20">
          {Teams.map((member, index) => (
            <div
              key={member.name}
              className="max-w-sm bg-black rounded-xl px-8 py-10 text-center"
              style={{ minWidth: "20rem" }}
            >
              <div className="w-full flex flex-col items-center mb-6">
                <div className="w-32 h-48 md:w-52 md:h-72 relative">
                  <Image src={member.icon} layout="fill" priority />
                </div>
              </div>
              <p className="text-2xl md:text-3xl mb-6">{member.name}</p>
              <p className="text-base md:text-xl">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
