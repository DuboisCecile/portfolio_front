import React, { useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

import '../assets/styles/skills.css';
import WomanComputer from '../assets/images/femme-ordinateur.jpg';
import Ideas from '../assets/images/brainstorming-ampoule.png';
import Responsive from '../assets/images/responsive-items.png';
import Seo from '../assets/images/seo.jpg';
import Creeks from '../assets/images/calanques.jpg';

export default function Skills() {
  const animRef = useRef();
  const [skillsElementsInViewport, setSkillsElementsInViewport] =
    useState(null);

  const skillsInViewport = (entries) => {
    entries.forEach((entry) => {
      if (entry.target.id === 'creeks')
        animRef.current?.classList.toggle('animated', entry.isIntersecting);
    });
  };

  const obsSkills = new IntersectionObserver(skillsInViewport);
  const obsOptions = {
    // threshold: 1,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setSkillsElementsInViewport(document.querySelectorAll('#creeks'));
    return () => {
      setSkillsElementsInViewport(null);
      obsSkills.disconnect();
    };
  }, []);

  useEffect(() => {
    if (skillsElementsInViewport)
      skillsElementsInViewport.forEach((element) => {
        obsSkills.observe(element, obsOptions);
      });
  }, [skillsElementsInViewport]);

  return (
    <div className="page-container">
      <div className="page-content">
        {isMobile && (
          <div className="text-block page-title">Mes compétences</div>
        )}
        <div className="text-block section-title">Raconte-moi une histoire</div>
        <img
          className="img-resp"
          src={WomanComputer}
          alt="Femme surfant sur un ordinateur"
        />
        <div className="text-block">
          Un site doit "parler" aux personnes qui le consultent. L'utilisateur
          doit s'y retrouver, y naviguer facilement et ne pas perdre de temps à
          chercher une information. Il doit aimer ce qu'il a vu sur ce site...
          sinon il n'y reviendra jamais&nbsp;!
          <br />
          Ce travail de maquettage est la première étape que je réalise lorsque
          je commence la conception d'un nouveau site web.
        </div>
        <div className="text-block section-title">A l'écoute du client</div>
        <img className="img-resp" src={Ideas} alt="Partage d'idées" />
        <div className="text-block">
          Un développeur ne doit pas concevoir un site selon ses propres goûts.
          Le design et le contenu doivent bien évidemment être en lien avec ce
          qu'ils doivent montrer (identité de marque, thème visuel en adéquation
          avec l'environnement du produit, etc.).
          <br />
          Il faut aussi définir en amont le but de ce site : s'agit-il de vendre
          un produit&nbsp;? De se faire connaître&nbsp;? De pouvoir communiquer
          des informations&nbsp;?
          <br />
          J'échange donc très régulièrement avec le client pour qui je développe
          le site ou l'application. Ses avis sont très précieux&nbsp;!
        </div>
        <div className="text-block section-title">Responsive design</div>
        <img
          className="img-resp"
          src={Responsive}
          alt="Maquette de site internet présentées sur des appareils de tailles différentes"
        />
        <div className="text-block">
          A l'heure actuelle, les sites et applications sont majoritairement
          consultés depuis un appareil mobile.
          <br />
          Comme je l'ai fait pour ce site, j'adapte le design de façon à ce
          qu'il soit bien affiché, utilisable et beau, quelle que soit la taille
          de l'appareil qui l'affiche.
        </div>

        <div className="text-block section-title">Du mouvement&nbsp;!</div>
        <img
          id="creeks"
          ref={animRef}
          className="img-resp"
          src={Creeks}
          alt="Calanques"
        />
        <div className="text-block">
          Même dans un site dit "statique" (c'est à dire dont le contenu ne
          change pas), il est possible d'insuffler de la vie en ajoutant des
          effets visuels, des animations, etc.
          <br />
          Les animations permettent de mettre en évidence les points les plus
          importants, d'attirer le regard de l'utilisateur vers un élément
          spécifique, pour le guider. C'est pourquoi je n'hésite pas à les
          utiliser... mais sans en abuser !
        </div>
        <div className="text-block section-title">Référencement naturel</div>
        <img
          id="SEO"
          className="img-resp"
          src={Seo}
          alt="Référencement naturel, SEO"
        />
        <div className="text-block">
          Il y a désormais énormément de sites internet disponibles. Un nouveau
          site se trouve noyé dans la masse ! Il est donc nécessaire d'augmenter
          sa visibilité.
          <br />
          Car un site, même très bien fait, ne sera pas d'une grande utilité si
          personne ne le consulte&nbsp;! <br />
          Après étude des besoins, et au fil du développement, des éléments
          permettant d'améliorer le référencement naturel du site par les
          moteurs de recherche (SEO) sont intégrés.
        </div>
      </div>
    </div>
  );
}
