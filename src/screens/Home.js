// import { useEffect } from 'react';

import WallPoster from '../assets/images/mur_affiche.jpg';

export default function Home() {
  // const [homeImage, setHomeImage] = useState(null);
  // setHomeImage(document.querySelector('#home-image'));

  // $(window).scroll(function(e) {
  //   frames = 17;
  //   step = ($("body").height() - $(window).height()) / frames;
  //   frameStep = parseInt($(window).scrollTop() / step);
  //   maskPosition = 100 / frames * frameStep;
  //   $("#cover").css({
  //     "mask-position": maskPosition + "% 50%",
  //     "-webkit-mask-position": maskPosition + "% 50%"
  //   });
  // });

  //   var ignoreClickOnMeElement = document.getElementById('someElementID');

  // document.addEventListener('click', function(event) {
  //     var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);
  //     if (!isClickInsideElement) {
  //         //Do something click is outside specified element
  //     }
  // });

  // const onTouchStart = (e) => {
  //   const offsets = e.target.getBoundingClientRect();
  //   const { top, bottom, height } = offsets;
  //   console.log({ top, bottom, height });
  //   let y;
  //   const touchArray = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
  //   const clickAndMouseArray = [
  //     'click',
  //     'mousedown',
  //     'mouseup',
  //     'mousemove',
  //     'mouseover',
  //     'mouseout',
  //     'mouseenter',
  //     'mouseleave',
  //   ];
  //   if (touchArray.includes(e.type)) {
  //     const touch = e.touches[0] || e.changedTouches[0];
  //     y = touch.pageY;
  //   } else if (clickAndMouseArray.includes(e.type)) {
  //     y = e.clientY;
  //   }

  //   if (y >= top && y <= bottom) {
  //     const yPercentInImage = ((y - top) / height) * 100;
  //     console.log('yPercentInImage', yPercentInImage);
  //     const frames = 17;
  //     const stepHeight = height / frames;
  //     console.log('stepHeight', stepHeight);
  //     const frameStep = parseInt((y - top) / stepHeight, 10);
  //     console.log('(y - top)', y - top);
  //     console.log('frameStep', frameStep);
  //     const maskPosition = (100 / frames) * frameStep;
  //     // const prevImage = document.querySelector('#home-image');
  //     console.log('prev', e.target.style.maskPosition);
  //     // prevImage.style.maskPosition = `${maskPosition}% center`;
  //     e.target.style.maskPosition = `${maskPosition}% 50%`;
  //     console.log('after', e.target.style.maskPosition);
  //     // eslint-disable-next-line no-void
  //     // void e.target.offsetWidth;
  //   }
  // };

  // const onScroll = () => {
  //   const frames = 17;
  //   const height =
  //     document.documentElement.scrollHeight -
  //     document.documentElement.clientHeight;
  //   const step = height / frames;
  //   const topScrollingPosition = document.documentElement.scrollTop;
  //   const frameStep = parseInt(topScrollingPosition / step, 10);
  //   const maskPosition = (100 / frames) * frameStep;
  //   const prevImage = document.querySelector('#home-image');
  //   console.log('prev', prevImage.style);
  //   prevImage.style.maskPosition = `${maskPosition}% 50%`;
  //   console.log('after', prevImage.style);
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', onScroll);
  //   const homeImage = document.getElementById('home-image');
  //   homeImage.addEventListener('touchstart', onTouchStart);
  //   homeImage.addEventListener('click', onTouchStart);
  //   return () => window.removeEventListener('scroll', onScroll);
  // }, []);

  return (
    <div id="home">
      {/*  */}
      <div id="home-image">
        <img id="home-image" src={WallPoster} alt="Wall with posters" />
      </div>
    </div>
  );
}
