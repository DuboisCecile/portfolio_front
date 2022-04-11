import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../assets/styles/whoAmI.css';
import { isMobile } from 'react-device-detect';

import Cherry from '../assets/images/cerisier-abeille.jpg';
import Landscape from '../assets/images/campagne.jpg';
import Family from '../assets/images/famille.jpg';
import PlanB from '../assets/images/plan-B.jpg';
import Brainstorming from '../assets/images/brainstorming.jpg';
import Yoga from '../assets/images/yoga-01.jpg';
import YogaSkeleton from '../assets/images/yoga_skeleton.png';
import ZooMap from '../assets/images/zoo-map.jpg';
import Computer from '../assets/images/ordinateur.png';

const letterAnim = (
  <div id="letter-container">
    <div id="animated-mail">
      <div id="back-fold" />
      <div id="letter">
        <div id="letter-title">
          Bonjour,
          <br />
          <br />
          Je me permets de vous contacter car j'ai un projet de site web pour
          mon entreprise de construction de
        </div>
      </div>
      <div id="top-fold" />
      <div id="enveloppe-body" />
      <div id="left-fold" />
    </div>
    <div id="shadow" />
  </div>
);

const animalsImagesList = [
  { id: 0, src: 'rhino.jpg', alt: 'Rhinocéros blanc' },
  { id: 1, src: 'makis.jpg', alt: 'Makis cattas' },
  { id: 2, src: 'panthere.jpg', alt: 'Panthère des neiges' },
];

const hobbiesImagesList = [
  { id: 0, src: 'jardinage.jpg', alt: 'Jardinage' },
  { id: 1, src: 'travail-papier.jpg', alt: 'Travail du papier' },
  { id: 2, src: 'foret.jpg', alt: 'Promenades dans la nature' },
  { id: 3, src: 'broderie.jpg', alt: 'Broderie à la machine' },
  { id: 4, src: 'travail-cuir.jpg', alt: 'Travail du cuir' },
  { id: 5, src: 'trousse-outils.jpg', alt: 'Bricolage' },
];

export default function WhoAmI() {
  const [elementsToShow, setElementsToShow] = useState();
  const [svgElement, setSvgElement] = useState();
  const [animalsSliderIndex, setAnimalsSliderIndex] = useState(0);
  const [hobbiesSliderIndex, setHobbiesSliderIndex] = useState(0);

  const maskedElement = document.querySelector('#mask-circle');
  const circleFeedback = document.querySelector('#circle-shadow');
  const svgPoint = new DOMPoint();

  const cursorPoint = (e, svg) => {
    svgPoint.x = e.clientX;
    svgPoint.y = e.clientY;
    return svgPoint.matrixTransform(svg.getScreenCTM().inverse());
  };

  const update = (svgCoords) => {
    maskedElement.setAttribute('cx', svgCoords.x);
    maskedElement.setAttribute('cy', svgCoords.y);
    circleFeedback.setAttribute('cx', svgCoords.x);
    circleFeedback.setAttribute('cy', svgCoords.y);
  };

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
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
  };

  const loop = () => {
    elementsToShow?.forEach((element) => {
      if (
        isElementInViewport(element) &&
        !element.classList.contains('is-visible')
      ) {
        element.classList.add('is-visible');
      } else if (
        !isElementInViewport(element) &&
        element.classList.contains('is-visible')
      ) {
        element.classList.remove('is-visible');
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setElementsToShow(document.querySelectorAll('.show-on-scroll'));
    setSvgElement(document.querySelector('svg'));

    const animalsTimer = window.setInterval(() => {
      setAnimalsSliderIndex((index) => (index + 1) % animalsImagesList.length);
    }, 2000);
    const hobbiesTimer = window.setInterval(() => {
      setHobbiesSliderIndex((index) => (index + 1) % hobbiesImagesList.length);
    }, 2000);

    return () => {
      window.clearInterval(animalsTimer);
      window.clearInterval(hobbiesTimer);
    };
  }, []);

  useEffect(() => {
    if (elementsToShow) window.addEventListener('scroll', loop);
    return () => window.removeEventListener('scroll', loop);
  }, [elementsToShow]);

  useEffect(() => {
    if (svgElement) {
      window.addEventListener(
        'mousemove',
        (e) => {
          update(cursorPoint(e, svgElement));
        },
        false
      );

      document.addEventListener(
        'touchmove',
        (e) => {
          const touch = e.targetTouches[0];
          if (touch) {
            update(cursorPoint(touch, svgElement));
          }
        },
        false
      );
    }
  }, [svgElement]);

  const requestImageFile = require.context('../assets/images', true);
  return (
    <div className="page-container">
      <div className="page-content">
        {isMobile && <div className="text-block page-title">Qui suis-je ?</div>}

        {/* Skeleton animation */}
        <div id="who-am-i-container" role="presentation">
          <svg className="who-am-i-svg" xmlns="http://www.w3.org/2000/svg">
            <image
              id="yoga"
              className="skeleton-image"
              href={Yoga}
              alt="Squelette"
            />
          </svg>
          <svg className="who-am-i-svg" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="mask">
                <circle
                  id="mask-circle"
                  cx="18%"
                  cy="18%"
                  r="10%"
                  style={{ fill: '#ffffff' }}
                />
              </clipPath>
            </defs>
            <g clipPath="url(#mask)">
              <rect width="100%" height="100%" fill="#272730" />
              <image className="skeleton-image" href={YogaSkeleton} />
            </g>
            <circle
              id="circle-shadow"
              cx="18%"
              cy="18%"
              r="10%"
              style={{ stroke: '#fff', fill: 'transparent', strokeWidth: 5 }}
            />
          </svg>
        </div>

        <div className="text-block">
          Si, professionnellement, je suis désormais développeuse web et
          conceptrice d'applications, je ne l'ai pas toujours été,... et je ne
          suis pas que cela !
          <br />
          <br />A l'heure où j'écris ces lignes, je suis en Ardèche, entourée de
          cerisiers qui commencent à fleurir.
        </div>
        <img
          id="cherry"
          className="inline-photo show-on-scroll"
          src={Cherry}
          alt="Fleurs de cerisier"
        />
        <div className="text-block">
          J'ai toujours vécu à la campagne, je m'y sens très bien, au calme,
          entourée par la nature.
        </div>
        <img
          className="inline-photo show-on-scroll"
          id="countryLandscape"
          src={Landscape}
          alt="Paysage de campagne"
        />
        <div className="text-block">
          J'ai d'ailleurs travaillé pendant plus de 20 ans dans un parc
          zoologique, au contact d'animaux fascinants.
        </div>
        <img
          className="inline-photo show-on-scroll"
          src={requestImageFile(
            `./${animalsImagesList[animalsSliderIndex].src}`
          )}
          alt={animalsImagesList[animalsSliderIndex].alt}
        />
        <div className="text-block">
          Éthologue de formation, encadrant l'équipe zoologique, le bien-être
          des animaux ainsi que celui des visiteurs étaient mes priorités.
        </div>
        <img
          className="inline-photo show-on-scroll"
          id="family"
          src={Family}
          alt="Famille"
        />
        <div className="text-block">
          Extrêmement polyvalente, je pouvais passer d'un soin à un animal à
          l'accueil de groupes de visiteurs, à une réparation de clôture, puis à
          un dépannage de matériel de sonorisation, avant d'aller remplir les
          plannings de mon équipe ou les registres des animaux, ou encore
          accueillir un journaliste.
        </div>
        <img
          className="inline-photo show-on-scroll"
          id="zoo"
          src={ZooMap}
          alt="Plan de zoo"
        />
        <div className="text-block">
          Ma sensibilité et ma curiosité naturelles me poussent aussi à
          pratiquer de nombreux loisirs créatifs, à bricoler, me promener dans
          la nature, ou encore à jardiner.
        </div>
        <img
          className="inline-photo show-on-scroll"
          src={requestImageFile(
            `./${hobbiesImagesList[hobbiesSliderIndex].src}`
          )}
          alt={hobbiesImagesList[hobbiesSliderIndex].alt}
        />
        <div className="text-block">
          Mon désir de reconversion a coïncidé avec le début de la pandémie, ce
          qui ne m'a pas réellement perturbée. Je suis très adaptable et
          résiliente, et lorsque le plan A ne fonctionne pas... je passe
          rapidement au plan B !
        </div>
        <img
          className="inline-photo show-on-scroll"
          id="planB"
          src={PlanB}
          alt="Plan B"
        />
        <div className="text-block">
          Toujours à l'écoute des personnes qui m'entourent, que ce soit mes
          collègues, mes clients ou toute autre personne participant à un
          projet, j'ai à coeur de fournir un travail de grande qualité, en
          adéquation avec les besoins, même si ceux-ci doivent évoluer au fil du
          temps.
        </div>
        <img
          className="inline-photo show-on-scroll"
          id="brainstorming"
          src={Brainstorming}
          alt="Brainstorming"
        />
        <div className="text-block">
          Désormais développeuse web, je mets mes compétences à votre
          disposition pour tout projet de site internet ou d'application.
        </div>
        <img
          className="inline-photo show-on-scroll"
          id="website"
          src={Computer}
          alt="Site web"
        />
        <div className="self-center">
          <div className="text-block">
            N'hésitez pas à me
            <NavLink id="contact-link" path="/contact" to="/contact">
              contacter !
            </NavLink>
          </div>
          {isMobile ? (
            letterAnim
          ) : (
            <NavLink path="/contact" to="/contact">
              {letterAnim}
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
