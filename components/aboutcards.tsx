import { FocusCards } from "@/components/ui/focus-cards";
import { Linkedin, Twitter, Link, Youtube } from "lucide-react";

import React from "react";

export function AboutUsCards() {
  const teamCards = [
    {
      title: "Helen Thomas",
      src: "/images/HelenThomas.png",
      description: "CEO",
      icon: [
        {
          icon: "Linkedin",
          iconColor: "#0077B5",
          url: "https://www.linkedin.com/in/h-thomas/",
        },
        {
          icon: "Twitter",
          iconColor: "#1DA1F2",
          url: "https://www.twitter.com/blonde-money/",
        },
      ],
    },
    {
      title: "Richard Brownlees",
      src: "/images/richardbrownlees.jpeg",
      description: "COO",
      icon: [
        {
          icon: "Linkedin",
          iconColor: "#0077B5",
          url: "https://www.linkedin.com/in/richard-brownlees-38479926/",
        },
        {
          icon: "Twitter",
          iconColor: "#1DA1F2",
          url: "https://x.com/hrhhs",
        },
      ],
    },
  ];

  const boardCards = [
    {
      title: "Nicola Horlick",
      src: "/images/nicolahorlick.png",
      description: "Board Member",
      icon: [
        {
          icon: "Linkedin",
          iconColor: "#0077B5",
          url: "https://www.linkedin.com/in/nicola-horlick-98772311/",
        },
        {
          icon: "Twitter",
          iconColor: "#1DA1F2",
          url: "https://x.com/NicolaHorlick",
        },
      ],
    },
    {
      title: "Lord Wood",
      src: "/images/LordWood.jpg",
      description: "Board Member",
      icon: [
        {
          icon: "Youtube",
          iconColor: "#FF0000",
          url: "https://www.youtube.com/channel/UCfjAetXwtWDun9I9cTltm0A",
        },
        {
          icon: "Twitter",
          iconColor: "#1DA1F2",
          url: "https://x.com/stewartwood?lang=en",
        },
      ],
    },
    {
      title: "Sir Paul Tucker",
      src: "/images/SirPaulTucker.jpg",
      description: "Board Member",
      icon: [
        {
          icon: "Link",
          iconColor: "#0077B5",
          url: "http://paultucker.me",
        },
      ],
    },

    {
      title: "Paresh Patel",
      src: "/images/pareshpatel.jpg",
      description: "Board Member",
      icon: [
        {
          icon: "Linkedin",
          iconColor: "#0077B5",
          url: "https://www.linkedin.com/in/pareshpatel-msoadvisors/",
        },
      ],
    },
    {
      title: "Quentin Smith",
      src: "/images/quentinsmith.jpeg",
      description: "Board Member",
      icon: [
        {
          icon: "Linkedin",
          iconColor: "#0077B5",
          url: "https://www.linkedin.com/in/quentin-smith-3608851aa/",
        },
      ],
    },
    {
      title: "George Robinson",
      src: "/images/user.jpg",
      description: "Board Member",
      icon: [],
    },

    {
      title: "Campbell Clarke",
      src: "/images/user.jpg",
      description: "Board Member",
      icon: [],
    },
  ];

  return (
    <>
      <h2 className="text-3xl sm:text-4xl font-bold text-white m-10">
        Our Team
      </h2>

      <FocusCards cards={teamCards} />
      <h2 className="text-3xl sm:text-4xl font-bold text-white m-10">
        Board Members
      </h2>
      <FocusCards cards={boardCards} />
    </>
  );
}
