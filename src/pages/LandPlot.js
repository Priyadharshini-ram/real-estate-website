import React, { useState, useEffect } from "react";

const LandPlot = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [landPlots, setLandPlots] = useState([
    { id: 1, title: "Spacious Farm Land", price: "$50,000", location: "Texas", size: "5 acres", image: "farm_land.jpg" },
    { id: 2, title: "Commercial Plot", price: "$120,000", location: "New York", size: "2 acres", image: "commercial_plot.jpg" },
    { id: 3, title: "Residential Plot", price: "$80,000", location: "California", size: "3 acres", image: "residential_plot.jpg" }
  ]);

  useEffect(() => {
    // Fetch land/plot listings from an API or database
    // Example: fetch('/api/lands').then(res => res.json()).then(data => setLandPlots(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredLandPlots = landPlots.filter((plot) =>
    plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Find Land & Plots for Sale</h2>
      <input
        type="text"
        placeholder="Search by title or location..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredLandPlots.length > 0 ? (
          filteredLandPlots.map((plot) => (
            <div key={plot.id} className="border p-4 rounded shadow-sm">
              <img src={plot.image} alt={plot.title} className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-lg font-semibold">{plot.title}</h3>
              <p className="text-gray-600">{plot.location}</p>
              <p className="text-gray-500">Size: {plot.size}</p>
              <p className="text-blue-600 font-bold">{plot.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No land/plots found.</p>
        )}
      </div>
    </div>
  );
};

export default LandPlot;
