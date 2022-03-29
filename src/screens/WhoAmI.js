import { useState } from 'react';
import Rhino from '../assets/images/rhinoceros-transparent-background.png';

export default function WhoAmI() {
  const [rhinoOffsets, setRhinoOffsets] = useState(null);

  //   Forêt
  // animal
  // tourisme
  // loisirs créatifs
  // bricolage
  // const getOffsets = (e) => {
  //   const offsets = e.target.getBoundingClientRect();
  //   setRhinoOffsets(offsets);
  // };
  // useEffect(() => {
  //   const rhino = document.getElementById('rhino');
  //   setRhinoOffsets({ width: rhino.width, height: rhino.height });
  //   console.log('offsets', { width: rhino.width, height: rhino.height });
  // }, []);

  return (
    <div id="who">
      <div
        id="frame"
        style={{
          height: `${rhinoOffsets?.height + 16}px`,
          width: `${rhinoOffsets?.width * 0.8}px`,
        }}
      >
        <img
          id="rhino"
          src={Rhino}
          alt="White rhino"
          onLoad={(e) => setRhinoOffsets(e.target.getBoundingClientRect())}
        />
      </div>
      Forêt animal tourisme loisirs créatifs bricolage
    </div>
  );
}
