// export default function Results() {
//     // This page should be? 
//     // route to the food

// }


// ai generated code 
import { GoogleMap, LoadScript, Autocomplete, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

export default function Results() {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const [directions, setDirections] = useState(null);
  const [foodType, setFoodType] = useState('');
  const [destination, setDestination] = useState(null);

  const mapContainerStyle = {
    width: '100%',
    height: '400px'
  };

  const center = {
    lat: 0,
    lng: 0
  };

  const onLoad = (mapInstance) => {
    setMap(mapInstance);
  };

  const onAutocompleteLoad = (autocompleteInstance) => {
    setAutocomplete(autocompleteInstance);
  };

  const onPlaceChanged = () => {
    if (autocomplete !== null) {
      const place = autocomplete.getPlace();
      setDestination(place.geometry.location);
    }
  };

  const searchNearbyRestaurants = () => {
    if (map && foodType) {
      const service = new window.google.maps.places.PlacesService(map);
      const request = {
        location: map.getCenter(),
        radius: '5000',
        type: ['restaurant'],
        keyword: foodType
      };

      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results.length > 0) {
          setDestination(results[0].geometry.location);
        }
      });
    }
  };

  useEffect(() => {
    if (map && destination) {
      const directionsService = new window.google.maps.DirectionsService();

      navigator.geolocation.getCurrentPosition((position) => {
        const origin = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        directionsService.route(
          {
            origin: origin,
            destination: destination,
            travelMode: window.google.maps.TravelMode.DRIVING
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              setDirections(result);
            }
          }
        );
      });
    }
  }, [map, destination]);

  return (
    <LoadScript
      googleMapsApiKey=""   // TODO: enter API KEy here
      libraries={['places']}
    >
      <div>
        <input
          type="text"
          placeholder="Enter food type"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
        />
        <button onClick={searchNearbyRestaurants}>Search</button>
      </div>
      <Autocomplete
        onLoad={onAutocompleteLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <input type="text" placeholder="Enter a location" />
      </Autocomplete>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
      >
        {directions && <DirectionsRenderer directions={directions} />}
      </GoogleMap>
    </LoadScript>
  );
};
