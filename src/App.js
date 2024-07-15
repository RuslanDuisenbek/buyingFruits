import Header from "./components/header";
import Showcase from "./components/showcase";
import Footer from "./components/footer";
function App() {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "50px 1fr 50 px",
        height: " 100vh",
      }}
    >
      <Header />
      <Showcase />
      <Footer />
    </div>
  );
}

export default App;
