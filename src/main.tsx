import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// Fonts
import './assets/fonts/AlegreyaSans-Medium.ttf';
import './assets/fonts/ExocetBlizzardOT-Medium.ttf';
import './assets/fonts/OldFenris-Regular.otf';

// Global
import './assets/global.css';

createRoot(document.getElementById('root')!).render(<App />)
