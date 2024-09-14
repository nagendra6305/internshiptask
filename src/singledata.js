import React from 'react'

function Singledata({data}) {
  return (
    <>
   <div className='container' style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "45%" }}>
  {data.map((item, index) => {
    return (
      <div className="col" key={index}>
        <div className="card h-100" style={{ 
          backgroundColor: "rgba(255, 255, 255, 0.8)",  // Slight transparency for blending with background
          borderRadius: "10px",  // Rounded corners
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",  // Soft shadow for elevation effect
          backdropFilter: "blur(5px)",  // Slight blur for the background
          border: "1px solid rgba(255, 255, 255, 0.2)"  // Light border to define the edges
        }}>
          <div className="card-body">
            <h5 className="card-title"><b>Country Name:</b> {item.country}</h5>
            <p className="card-text"><b>Country Capital:</b> {item.capital}</p>
            <p className="card-text"><b>Population:</b> {item.population}</p>
            <p className="card-text"><b>Currency:</b> {item.currency}</p>
            <p className="card-text"><b>Official Language:</b> {item.official_language}</p>
          </div>
        </div>
      </div>
    );
  })}
</div>

    </>
  )
}

export default Singledata