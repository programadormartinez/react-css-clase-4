import "./App.css";
import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="container-cards">
        <Card
          name={"CocaCola"}
          logo={"cocacola_logo.png"}
          img={"cocacola.png"}
          clase={"red"}
          text={'Coca-Cola es una bebida azucarada gaseosa vendida a nivel mundial en tiendas, restaurantes y máquinas expendedoras en más de doscientos países o territorios.'}
        />
        <Card
          name={"Sprite"}
          logo={"sprite_logo.png"}
          img={"sprite.png"}
          clase={"green"}
          text={'Sprite es una refresco hecho a base de agua carbonatada con sabor a Lima o limón, incolora y sin cafeína,'}
        />  
      </div>

      <Footer />
    </div>
  );
}

export default App;
