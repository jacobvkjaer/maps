export interface Coordinates {
  lat: number;
  lng: number;
}

export async function getCoordinates(
  address: string
): Promise<Coordinates | null> {
  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
        address
      )}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch coordinates");
    }

    const data = await response.json();

    if (data.results && data.results.length > 0) {
      const location = data.results[0].geometry.location;
      return { lat: location.lat, lng: location.lng };
    } else {
      alert("Address not found.");
      return null;
    }
  } catch (error) {
    alert("Failed to fetch coordinates. Please try again.");
    return null;
  }
}
