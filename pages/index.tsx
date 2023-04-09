import Card from "@/component/Card";
import { Luxury, Sedans, Suvs } from "@/component/Icon";

const items = [
  {
    name: "Sedans",
    bgColor: "red",
    icon: <Sedans />,
    description:
      "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
  },
  {
    name: "Suvs",
    bgColor: "green",
    icon: <Suvs />,

    description:
      "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    name: "Luxury",
    bgColor: "blue",
    icon: <Luxury />,
    description:
      "Cruise in the best car brands without the bloated prices. Enjoy the enhanced confort of a luxury rental and arrive in style.",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex rounded-md overflow-hidden">
        {items.map((item) => (
          <Card
            bgColor={item.bgColor}
            description={item.description}
            icon={item.icon}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
}
