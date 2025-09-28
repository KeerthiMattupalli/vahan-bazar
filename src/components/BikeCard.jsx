// src/components/BikeCard.jsx
import "./BikeCard.css";

function BikeCard({ bike }) {
  return (
    <div className="border rounded-lg shadow-md p-4 text-center">
      <img
        src={bike.image}
        alt={bike.name}
        className="w-full h-40 object-cover rounded-md mb-2"
      />
      <h3 className="text-lg font-semibold">{bike.name}</h3>
      <p className="text-gray-600">{bike.brand}</p>
      <p className="text-gray-600">{bike.location}</p>
      <p className="font-bold">Price: ₹{bike.price}</p>
      <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded">
        Buy Now
      </button>
    </div>
  );
}

export default BikeCard;
