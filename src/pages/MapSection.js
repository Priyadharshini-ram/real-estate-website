import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Example properties with lat/lng
const properties = [
  { id: 1, title: "Luxury Villa", price: "$500,000", lat: 40.7128, lng: -74.0060, image: "villa.jpg" },
  { id: 2, title: "Modern Apartment", price: "$300,000", lat: 34.0522, lng: -118.2437, image: "apartment.jpg" },
  { id: 3, title: "Cozy Cottage", price: "$200,000", lat: 29.7604, lng: -95.3698, image: "cottage.jpg" }
];

const MapSection = () => {
  return (
    <div className="max-w-4xl mx-auto mt-6 p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Explore Properties on Map</h2>
      <MapContainer center={[37.7749, -122.4194]} zoom={5} style={{ height: "500px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property) => (
          <Marker key={property.id} position={[property.lat, property.lng]}>
            <Popup>
              <div>
                <img src={property.image} alt={property.title} className="w-32 h-20 object-cover rounded mb-2" />
                <h3 className="text-lg font-semibold">{property.title}</h3>
                <p className="text-blue-600 font-bold">{property.price}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default MapSection;
