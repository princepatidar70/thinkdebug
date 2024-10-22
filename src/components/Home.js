import React, { useEffect, useState } from "react";
import image from "../assets/hero.png";

const Home = () => {
  const [detail, setDetail] = useState([]);
  const [selectedPackage, setSelectedPackage] = useState(null);

  const fetchData = async () => {
    const fetchingData = await fetch(
      "https://cimauae.avmdevs.com/wp-json/dokan/v1/stores/2/products"
    );
    const response = await fetchingData.json();
    setDetail(response);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSelectPackage = (data) => {
    setSelectedPackage(data);
  };

  return (
    <>
      <div className="home">
        <div
          className="home-chart"
          style={{ backgroundImage: `url(${image})`, borderRadius: "15px" }}
        >
          <button
            style={{
              position: "absolute",
              top: "240px",
              marginLeft: "50px",
              borderRadius: "20px",
              padding: "13px",
              alignItems: "center",
              backgroundColor: "gray",
              height: "40px",
              border: "none",
            }}
          >
            {" "}
            <span>AED {selectedPackage && selectedPackage.price}</span>{" "}
            {selectedPackage && selectedPackage.regular_price && (
              <s>AED {selectedPackage && selectedPackage.regular_price}</s>
            )}
          </button>
          <h1
            style={{
              color: "white",
              position: "absolute",
              top: "260px",
              marginLeft: "50px",
            }}
          >
            {selectedPackage && selectedPackage.name}
          </h1>
        </div>
      </div>

        <h2 style={{ marginLeft: "230px" }}>Please select your package</h2>
      <div className="container">
        <div className="packages">
          {detail &&
            detail.map((data) => (
              <div
                key={data.id}
                className={`package-card ${
                  selectedPackage && selectedPackage.id === data.id
                    ? "selected"
                    : ""
                }`}
                onClick={() => handleSelectPackage(data)}
              >
                <h3>{data.name}</h3>
                <p className="price">
                  <span>AED {data.price}</span>{" "}
                  {data.regular_price && <s>AED {data.regular_price}</s>}
                </p>
                <p dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
            ))}
        </div>

        {selectedPackage && (
          <div className="summary">
            <p style={{ display: "flex", justifyContent: "center" }}>
              Total: <span>AED {selectedPackage.price}</span>{" "}
              {selectedPackage.regular_price && (
                <s>AED {selectedPackage.regular_price}</s>
              )}
            </p>
            <div className="offer-claimed">
              <p>OFFER CLAIMED</p>
              {selectedPackage.regular_price && (
                <p>
                  You save AED{" "}
                  {selectedPackage.regular_price - selectedPackage.price}
                </p>
              )}
            </div>
            <div className="order-summary">
              <p>Product: {selectedPackage.name}</p>
              {selectedPackage.regular_price && (
                <>
                  <p>Subtotal: AED {selectedPackage.regular_price}</p>
                  <p>
                    Discount: AED{" "}
                    {selectedPackage.regular_price - selectedPackage.price}
                  </p>
                </>
              )}
              <p>Amount to pay: AED {selectedPackage.price}</p>
            </div>
            <button className="pay-btn">Pay AED {selectedPackage.price}</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
