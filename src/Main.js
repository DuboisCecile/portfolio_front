import { Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import WhoAmI from './screens/WhoAmI';

export default function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/who" element={<WhoAmI />} />
    </Routes>
  );
}
