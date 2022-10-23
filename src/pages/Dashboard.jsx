import React from "react";
import Cards from "../components/Cards";
const Dashboard = ({
  products,
  handleIncrement,
  handleDecrement,
  handleReset,
}) => {
  return (
    <div className="bg-gray-100 h-full w-full font-[Droid Sans] ">
      <section className="p-10 md:p-20">
        <div className="mx-auto w-full grid place-items-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map((product) => (
              <Cards
                key={product.id}
                product={product}
                handleReset={handleReset}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
