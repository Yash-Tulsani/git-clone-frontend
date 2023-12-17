import React from 'react';
import { Card, CardContent, Container, Grid, Typography, Button, ThemeProvider } from '@mui/material';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import theme from '../../theme'; 
import L from 'leaflet';


const services = [
  { name: 'Service 1', category: 'Category A', location: [51.505, -0.09], image: "https://htmlcolorcodes.com/assets/images/colors/bright-orange-color-solid-background-1920x1080.png" },
  { name: 'Service 2', category: 'Category B', location: [51.515, -0.1], image: "https://htmlcolorcodes.com/assets/images/colors/bright-orange-color-solid-background-1920x1080.png" },
  { name: 'Service 3', category: 'Category A', location: [51.535, -0.1], image: "https://htmlcolorcodes.com/assets/images/colors/bright-orange-color-solid-background-1920x1080.png" },
  { name: 'Service 4', category: 'Category B', location: [51.555, -0.1], image: "https://htmlcolorcodes.com/assets/images/colors/bright-orange-color-solid-background-1920x1080.png" },
  { name: 'Service 5', category: 'Category A', location: [51.575, -0.1], image: "https://htmlcolorcodes.com/assets/images/colors/bright-orange-color-solid-background-1920x1080.png" },
  // Add more services as needed
];

const Services = () => {
  const [selectedService, setSelectedService] = React.useState(null);
  const [selectedCategory, setSelectedCategory] = React.useState('All'); // Initial state for the category filter
  const mapRef = React.useRef(null);

  const handleLocateClick = (service) => {
    setSelectedService(service);
    mapRef.current && mapRef.current.setView(service.location, 13, { animate: true });
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredServices = selectedCategory === 'All'
    ? services
    : services.filter(service => service.category === selectedCategory);


  const selectedMarkerIcon = new L.Icon({
    iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });
  
  // Default marker icon
  const defaultMarkerIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Container style={{ flex: 4, marginLeft: '40px', marginRight: '0px', padding: '20px' }}>
        <Grid container spacing={2} style={{ marginBottom: '20px' }}>
            <Grid item xs={6}>
              <select value={selectedCategory} onChange={handleCategoryChange}  style={{
                  width: '100%',
                  padding: '8px',
                  borderRadius: '4px',
                  border: '1px solid #ccc',
                  boxSizing: 'border-box',
                  marginLeft: '0px',
                  fontSize: '16px',
                }}
                placeHolder="Filter by Category">
                <option value="All">Filter by Category</option>
                {/* Add more options for each unique category */}
                {Array.from(new Set(services.map(service => service.category))).map((category, index) => (
                  <option key={index} value={category}>{category}</option>
                ))}
              </select>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            {/* First column with cards */}
            <Grid item xs={6} style={{ height: 'calc(100vh - 40px)', overflowY: 'auto' }}>
              {filteredServices.map((service, index) => (
                <Card key={index} variant="outlined" style={{ marginBottom: '20px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                  {/* Card image */}
                  <img src={service.image} alt={service.name} style={{ width: '100%', height: '60px', borderTopLeftRadius: '4px', borderTopRightRadius: '4px' }} />

                  <CardContent>
                    {/* Card content */}
                    <Typography variant="h6">{service.name}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{service.category}</Typography>
                    <Typography variant="body2" color="textSecondary" style={{ marginTop: '10px' }}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>

                    {/* Buttons */}
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: '10px', marginRight: '10px' }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      style={{ marginTop: '10px' }}
                      onClick={() => handleLocateClick(service)}
                    >
                      Locate
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </Grid>

            {/* Second column with Leaflet map */}
            <Grid item xs={6}>
              <MapContainer
                ref={mapRef}
                center={selectedService ? selectedService.location : [51.505, -0.09]} // Center of the map
                zoom={13} // Initial zoom level
                style={{ height: '100%', width: '140%' }}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {services.map((service, index) => (
                  <Marker key={index} position={service.location} icon={selectedService === service ? selectedMarkerIcon : defaultMarkerIcon} >
                    {selectedService === service && (
                      <Popup onClose={() => setSelectedService(null)}>
                        <Typography variant="h6">{service.name}</Typography>
                        <Typography variant="subtitle1">{service.category}</Typography>
                        {/* You can add more information here */}
                      </Popup>
                    )}
                  </Marker>
                ))}
              </MapContainer>
            </Grid>
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Services;