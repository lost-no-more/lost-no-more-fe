type LatLng = {
  latitude: number;
  longitude: number;
};
export const LOSTITEMS_LOCATION: LatLng[] = Array.from({ length: 10000 }, () => {
  const latitude = 33 + Math.random() * (38 - 33);
  const longitude = 125 + Math.random() * (130 - 125);
  return {
    latitude,
    longitude,
  };
});
