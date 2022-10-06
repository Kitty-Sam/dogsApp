import Geocoder from 'react-native-geocoding';

export const getCoordinates = async (address: string) => {
  try {
    const jsonResult = await Geocoder.from(address);
    const location = await jsonResult.results[0].geometry.location;
    return location;
  } catch (e) {
    console.log(e);
  }
};
