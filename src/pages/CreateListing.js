import React, { useState } from "react";
import axios from "axios";
import "./CreateListing.css";
import Header from "../components/TopHeader/Header";

const CreateListing = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    city: "",
    rooms: "",
    baths: "",
    type: "",
    description: "",
    amenities: [],
    image: null,
  });

  const [amenity, setAmenity] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle amenities addition
  const addAmenity = () => {
    if (amenity) {
      setFormData({ ...formData, amenities: [...formData.amenities, amenity] });
      setAmenity("");
    }
  };

  // Handle image selection
  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!formData.image) {
      alert("Please upload an image.");
      return;
    }
  
    const formDataObj = new FormData();
  
    for (const key in formData) {
      if (key === "image") {
        formDataObj.append("image", formData.image);
      } else if (key === "amenities") {
        // Send amenities as an array (no need to split it)
        formData.amenities.forEach((amenity) => formDataObj.append("amenities", amenity));
      } else {
        formDataObj.append(key, formData[key]);
      }
    }
  
    console.log("📤 Submitting Data:", Object.fromEntries(formDataObj));
  
    try {
      const response = await axios.post("http://localhost:5000/api/accommodations", formDataObj, {
        headers: { "Content-Type": "multipart/form-data" },
      });
  
      console.log("✅ Response from server:", response.data);
      
      alert("Listing created successfully!");
      window.location.href = "/listings";
    } catch (error) {
      console.error("❌ Error creating listing:", error.response ? error.response.data : error.message);
      alert("Failed to create listing. Check the console for details.");
    }
  };
  
  
  

  // Handle form clearing
  const handleClear = () => {
    setFormData({
      name: "",
      location: "",
      city: "",
      rooms: "",
      baths: "",
      type: "",
      description: "",
      amenities: [],
      image: null,
    });
  };

  return (
    <div>
      <Header />
      <div className="create-listing-container">
      <h2>Create a New Listing</h2>
      <form onSubmit={handleSubmit} className="listing-form">
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Listing Name" required />
        <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Location" required />
        <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="City" required />
        <input type="number" name="rooms" value={formData.rooms} onChange={handleChange} placeholder="Number of Rooms" required />
        <input type="number" name="baths" value={formData.baths} onChange={handleChange} placeholder="Number of Baths" required />
        <input type="text" name="type" value={formData.type} onChange={handleChange} placeholder="Type (e.g., Apartment, House)" required />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" required></textarea>
        
        <div className="amenities-container">
          <input type="text" value={amenity} onChange={(e) => setAmenity(e.target.value)} placeholder="Add Amenity" />
          <button type="button" onClick={addAmenity}>Add</button>
        </div>
        <ul>
          {formData.amenities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <div className="image-upload">
          <label htmlFor="image">Upload Image:</label>
          <input type="file" id="image" accept="image/*" onChange={handleImageChange} />
        </div>

        <div className="form-buttons">
          <button type="submit" className="create-btn">Create</button>
          <button type="button" className="clear-btn" onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
    </div>
    
  );
};

export default CreateListing;
