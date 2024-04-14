import ClassesSection from "./containers/ClassesSection";
import ComponentsLayout from "./containers/ComponentsLayout";
import HomePreview from "./containers/HomePreview";
import PlaygroundPreview from "./containers/Playground";

function App() {
  return (
    <>
      <HomePreview/>
      <ClassesSection/>
      <ComponentsLayout/>
      <PlaygroundPreview/>
    </>
  );
}

export default App;
