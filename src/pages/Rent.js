import React, { useState, useEffect } from "react";

const Rent = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [properties, setProperties] = useState([
    { id: 1, title: "Luxury Villa", rent: "$2,500/month", location: "New York", image: "villa.jpg" },
    { id: 2, title: "Modern Apartment", rent: "$1,800/month", location: "Los Angeles", image: "apartment.jpg" },
    { id: 3, title: "Cozy Cottage", rent: "$1,200/month", location: "Texas", image: "cottage.jpg" }
  ]);

  useEffect(() => {
    // Fetch rental property listings from an API or database
    // Example: fetch('/api/rentals').then(res => res.json()).then(data => setProperties(data));
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProperties = properties.filter((property) =>
    property.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Find Rental Properties</h2>
      <input
        type="text"
        placeholder="Search by title or location..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full p-2 border rounded mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <div key={property.id} className="border p-4 rounded shadow-sm">
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded mb-2" />
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <p className="text-blue-600 font-bold">{property.rent}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No rental properties found.</p>
        )}
      </div>
    </div>
  );
};

export default Rent;
