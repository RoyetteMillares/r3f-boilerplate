import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Experience from "./components/Experience";
function App() {
  return (
    <>
      <main>
        <Header />
        <div className="h-[100vh] w-full">
          <Experience />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
