
import Homepage from './components/Homepage';
import GlobalContextsProvider from './components/plasmic/video_quality_tools/PlasmicGlobalContextsProvider'

function App() {
  return (<GlobalContextsProvider><Homepage /></GlobalContextsProvider>);
}

export default App;
  