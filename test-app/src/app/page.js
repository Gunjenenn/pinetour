import Image from "next/image";
import { FoodCard } from "./_components/compound";

export default function Home() {
  const foods = [
    { name: "Бууз", price: 1200 },
    { name: "Хуушуур", price: 1500 },
    { name: "Цуйван", price: 8000 },
    { name: "Боодог", price: 25000 },
  ];

  return (
    <div>
      <div>gunjid bol bot</div>
      <div>
        {foods.map((food, index) => {
          return <FoodCard key={index} name={food.name} price={food.price} />;
        })}
      </div>
    </div>
  );
}
