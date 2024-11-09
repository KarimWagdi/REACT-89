import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcepts/CoreConceps";
import TabBtn from "./components/TabBtn/TabBtn";
import { useState } from "react";
import { EXAMPLES } from "./data";

function App() {
  const [tabValue , setTabValue]= useState("please select a button")
  function handelClick (data){
    setTabValue(data)
  }
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabBtn 
              onClick={()=> handelClick("components")}
            >Components</TabBtn>
            <TabBtn 
              onClick={()=> handelClick("jsx")}
            >Jsx</TabBtn>
            <TabBtn 
              onClick={()=> handelClick("state")}
            >State</TabBtn>
            <TabBtn 
              onClick={()=> handelClick('props')}
            >Props</TabBtn>
          </menu>
          {tabValue}
          <div id="tab-content">
            <h3>{EXAMPLES[tabValue]?.title}</h3>
            <p>{EXAMPLES[tabValue]?.description}</p>
            <pre>
              <code>
              {EXAMPLES[tabValue]?.code}
              </code>
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
