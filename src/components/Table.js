import React, { useEffect, useState } from "react";

const Table = () => {
  const [detail, setDetail] = useState([]);

  const fetchData = async () => {
    const fetchingData = await fetch(
      "https://cimauae.avmdevs.com/wp-json/custom-product/v1/slot-data/product/106"
    );
    const response = await fetchingData.json();
    setDetail(response.availableSlots);
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(detail);

  return (
    <>
      <div className="slots-container">
        <h2 style={{ marginLeft: "90px" }}>When would you like to join?</h2>
        {detail && detail.length > 0 ? (
          detail.map((data, index) => (
            <div key={index} className="slot-item">
              <div className="slot-time">
                <h3>{data.time}</h3>
                <p style={{ fontSize: "smaller", color: "gray" }}>
                  {data.duration}
                </p>
              </div>
              <div className="slot-details">
                <img
                  src={data.image}
                  alt="Instructor"
                  className="instructor-img"
                  style={{ marginRight: "20px" }}
                />
                <div className="details-text">
                  <h4>{data.title}</h4>
                  <p style={{}}>{data.instructor}</p>
                  <p>{data.studio}</p>
                </div>
                <p style={{ marginLeft: "10px" }}>{data.location}</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading slots...</p>
        )}
      </div>
    </>
  );
};

export default Table;
