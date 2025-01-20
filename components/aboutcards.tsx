import { FocusCards } from "@/components/ui/focus-cards";
import { description } from "./piecharts/piechart";

export function AboutUsCards() {
  const cards = [
    {
      title: "Helen Thomas",
      src: "/images/HelenThomas.png",
      description: "CEO",
    },
    {
      title: "Richard Brownlees",
      src: "/images/richardbrownlees.jpeg",
      description: "COO",
    },

    {
      title: "Nicola Horlick",
      src: "/images/user.jpg",
    },
    {
      title: "Camping is for pros",
      src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The road not taken",
      src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "The First Rule",
      src: "https://assets.aceternity.com/the-first-rule.png",
    },
  ];

  return <FocusCards cards={cards} />;
}
