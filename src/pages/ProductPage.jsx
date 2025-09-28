import { useParams } from "react-router-dom";
import bikes from "../data/bikes";

function ProductPage() {
  const { id } = useParams();
  const bike = bikes.find((b) => b.id === parseInt(id));

  if (!bike) return <p>Bike not found!</p>;

  return (
    <div>
      <img src={bike.image} alt={bike.name} className="w-80 h-60 object-cover rounded" />
      <h2 className="text-3xl font-bold">{bike.name}</h2>
      <p className="text-xl">Price: ₹ {bike.price} Lakh</p>
      <p>Brand: {bike.brand}</p>
    </div>
  );
}

export default ProductPage;
