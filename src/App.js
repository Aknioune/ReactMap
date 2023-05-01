
import "./App.css";
import Map from "react-map-gl";
import maplibregl from "maplibre-gl";
import ReactMapGL from 'react-map-gl';


function App() {
  return (
    <div className="flex flex-col gap-6" style={{ height: "100%" }}>
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Map
          mapLib={maplibregl}
          initialViewState={{
            longitude: -6.836825,
            latitude: 33.971588,
            zoom: 12,
          }}
          renderChildren={false}
          style={{ width: "70%", height: "30rem" }}
          mapStyle={`https://api.maptiler.com/maps/streets/style.json?key=${process.env.REACT_APP_API_KEY}`}
        />
      </section>


    </div>
  );
}

export default App;
