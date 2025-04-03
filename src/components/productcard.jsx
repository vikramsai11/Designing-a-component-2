// write product card here

import ViewProductButton from "../components/button";

const Productcard = () => {
  const productImage = "https://images.hindustantimes.com/auto/auto-images/bmw/7series/exterior_bmw-7-series_front-left-side_600x400.jpg";
  const productName = "Super Bike";
  const productPrice = "$10000";

  return (
    <div className="border rounded-lg shadow-lg p-4 max-w-sm text-center">
      <img src={productImage} alt={productName} className="w-full h-40 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{productName}</h2>
      <p className="text-gray-700">{productPrice}</p>
      <div className="mt-4">
        <ViewProductButton />
      </div>
    </div>
  );
};

export default Productcard;
