 export function FoodCard({ name, price }) {
 if (price < 20000){ return (
    <div>
      <h1>{name}</h1>
      <p>{price} ₮</p>
      <p>Cheap</p>
    </div>
 )}
  else {
    return (
    <div>
      <h1>{name}</h1>
      <p>{price} ₮</p>
      <p>Expensive</p>
    </div>
  )}
}
