import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import WhoAmI from './screens/WhoAmI';
import Contact from './screens/Contact';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/who" element={<WhoAmI />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
