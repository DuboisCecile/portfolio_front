import { useState } from 'react';
// import Rhino from '../assets/images/rhinoceros-transparent-background.png';
import Cherry from '../assets/images/cerisier.jpg';
// import loop from '../utils/showOnScroll';

export default function WhoAmI() {
  // const [rhinoOffsets, setRhinoOffsets] = useState(null);
  const [cherryOffsets, setCherryOffsets] = useState(null);
  const scroll = window.requestAnimationFrame;
  const elementsToShow = document.querySelectorAll('.show-on-scroll');

  console.log(elementsToShow);
  // Helper function from: http://stackoverflow.com/a/7557433/274826
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0 && rect.bottom >= 0) ||
      (rect.bottom >=
        (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)) ||
      (rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight))
    );
  }

  const loop = () => {
    elementsToShow.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add('is-visible');
      } else {
        element.classList.remove('is-visible');
      }
    });

    scroll(loop);
  };
  loop();
  // const getOffsets = (e) => {
  //   const offsets = e.target.getBoundingClientRect();
  //   setRhinoOffsets(offsets);
  // };
  // useEffect(() => {
  //   const rhino = document.getElementById('rhino');
  //   setRhinoOffsets({ width: rhino.width, height: rhino.height });
  //   console.log('offsets', { width: rhino.width, height: rhino.height });
  // }, []);
  console.log(cherryOffsets);
  return (
    <div id="who">
      <div
        style={{ position: 'relative', height: `${cherryOffsets?.height}px` }}
        className="inline-photo show-on-scroll"
      >
        <img
          className="img-100"
          style={{ position: 'absolute' }}
          id="cerisier"
          src={Cherry}
          alt="Fleurs de cerisier"
          onLoad={(e) => setCherryOffsets(e.target.getBoundingClientRect())}
        />
        <div
          style={{
            position: 'absolute',
            top: `${cherryOffsets?.height * 0.2}px`,
            left: `${cherryOffsets?.width * 0.26}px`,
            width: `${cherryOffsets?.width * 0.5}px`,
          }}
        >
          A l'heure où j'écris ces lignes, je suis en Ardèche, entourée de
          cerisiers qui commencent à fleurir.
        </div>
      </div>
      <div className="text-block">
        {`J'ai toujours vécu à la campagne, je m'y sens très bien, au calme, entourée par la nature.

        J'ai d'ailleurs travaillé pendant plus de 20 ans dans un parc zoologique, au contact d'animaux fascinants.
        Ethologue de formation, encadrant l'équipe zoologique, le bien-être des animaux ainsi que celui des visiteurs étaient mes priorités.
        Extrêmement polyvalente, je pouvais passer d'un soin à un animal à l'accueil de groupes de visiteurs, à une réparation de clôture, puis à un dépannage de matériel de sonorisation, avant d'aller remplir les plannings de mon équipe ou les registres des animaux.
        
        Ma sensibilité et ma curiosité naturelles me poussent aussi à pratiquer de nombreux loisirs créatifs, à bricoler, ou encore à jardiner.

        Mon désir de reconversion a coïncidé avec le début de la pandémie, ce qui ne m'a pas réellement perturbée. Je suis très adaptable et résiliente, et lorsque le plan A ne fonctionne pas... je passe rapidement au plan B !

        Toujours à l'écoute des personnes qui m'entourent, que ce soit mes collègues, mes clients ou toute autre personne participant à un projet, j'ai à coeur de fournir un travail de grande qualité, en adéquation avec les besoins, même si ceux-ci doivent évoluer au fil du temps.

        Désormais développeuse web, je mets mes compétences à votre disposition pour tout projet de site internet ou d'application. 

        N'hésitez pas à me contacter !


        Forêt animal tourisme loisirs créatifs bricolage
        `}
      </div>

      <div>
        Blabla
        <br />
        blabla
      </div>
      {/* <div
        id="rhino-frame"
        style={{
          height: `${rhinoOffsets?.height + 16}px`,
          width: `${rhinoOffsets?.width * 0.8}px`,
        }}
      >
        <img
          id="rhino"
          src={Rhino}
          alt="Rhinocéros blanc"
          onLoad={(e) => setRhinoOffsets(e.target.getBoundingClientRect())}
        />
      </div> */}
    </div>
  );
}
