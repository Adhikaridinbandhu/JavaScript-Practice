const axios = require("axios");
const HttpError = require("../models/http-error");

const API_KEY = "";

async function getCoordsForAddress(address) {
  return {
    lat: 40.7484474,
    lng: -73.9871516,
  };

  const response = await axios.get(
    "https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=YOUR_API_KEY"
  );

  const data = response.data;

  if (!data || data.status === "ZERO_RESULTS") {
    const error = new HttpError(
      "Could not find location for the specified address!",
      422
    );
  }
}
