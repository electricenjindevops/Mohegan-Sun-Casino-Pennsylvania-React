import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import Navigation from '../components/navigation'
import GalleryCard1 from '../components/gallery-card1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <main className="home-container">
      <Helmet>
        <title>Mohegan Sun Casino Pennsylvania | Online Casino App</title>
        <meta
          name="description"
          content="Play the Mohegan Sun Casino from anywhere in Pennsylvania available on desktop, iOS, and Android. Slots, table games, and live dealer experiences. Download now."
        />
        <meta
          property="og:title"
          content="Mohegan Sun Casino Pennsylvania | Online Casino App"
        />
        <meta
          property="og:description"
          content="Play the Mohegan Sun Casino from anywhere in Pennsylvania available on desktop, iOS, and Android. Slots, table games, and live dealer experiences. Download now."
        />
      </Helmet>
      <div className="paIndex">
        <Navigation></Navigation>
        <section id="hero" className="home-primary-hero primaryHero">
          <img
            id="desktopBg"
            alt="Guy on couch playing Mohegan Sun Casino App"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/external/couchguy-desktop-1500w.webp"
            srcSet="external//couchguy-desktop-1500w.webp 1200w, external/couchguy-desktop-tablet.webp 800w, external/couchguy-desktop-mobile.webp 480w"
            className="home-desktop-bg hiddenStart"
          />
          <img
            id="mobileBg"
            alt="image"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/external/couchguy-mobile-1500w.webp"
            srcSet="external//couchguy-mobile-1500w.webp 1200w, external/couchguy-mobile-tablet.webp 800w, external/couchguy-mobile-mobile.webp 480w"
            className="home-mobile-bg"
          />
          <img
            alt="Rectangle324229"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/external/rectangle324229-1wr-1200w.webp"
            srcSet="external//rectangle324229-1wr-1200w.webp 1200w, external/rectangle324229-1wr-tablet.webp 800w, external/rectangle324229-1wr-mobile.webp 480w"
            className="home-rectangle32"
          />
          <div className="home-bg-gradient"></div>
          <img
            alt="Polygon14229"
            src="/external/polygon14229-09dk.svg"
            className="home-polygon1"
          />
          <img
            alt="Polygon34229"
            src="/external/polygon34229-7otf.svg"
            className="home-polygon3"
          />
          <img
            alt="Vector4229"
            src="/external/vector4229-wrk.svg"
            className="home-vector"
          />
          <div className="home-container1">
            <div className="home-frame13">
              <h1 id="heroHeadline" className="hiddenStart heroHeadline">
                Download the Mohegan PA Casino App and play anytime, anywhere in
                Pennsylvania
              </h1>
              <a
                href="https://moheganpacasino.com"
                id="heroButton"
                name="PlayNow"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link hiddenStart primaryButton primaryButtonText button"
              >
                PLAY NOW
              </a>
            </div>
          </div>
        </section>
        <section id="lightbar1" className="lightStrip"></section>
        <section id="aside" className="home-app-callout-full-width">
          <div className="home-image-left">
            <img
              id="asideImage"
              alt="Mobile phone showcasing the Mohgan Sun Casino Online App"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/mohegan-pa-iphone-1500w.webp"
              srcSet="external//mohegan-pa-iphone-1500w.webp 1200w, external/mohegan-pa-iphone-tablet.webp 800w, external/mohegan-pa-iphone-mobile.webp 480w"
              className="home-image243556080336278528268495163804109759997644n1"
            />
            <span id="igt" className="home-text01">
              <span>© 2024 IGT.</span>
            </span>
          </div>
          <div className="home-container2">
            <div className="home-right">
              <h2 id="asideHeadline" className="home-text03">
                <span>Play Now</span>
                <br></br>
                <span>Play Anywhere</span>
              </h2>
              <span id="asideCopy" className="home-text07">
                <span>
                  When you download our real money MoheganPACasino.com app and
                  fully register your account you&apos;ll have a chance to win
                  amazing prizes!
                </span>
              </span>
              <div id="downloadButtons" className="home-container3">
                <a
                  href="https://apps.apple.com/us/app/mohegan-sun-pocono/id604257886"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link1"
                >
                  <img
                    id="iosButton"
                    alt="Download on the app store"
                    src="/external/download-on-the-app-store.svg"
                    className="downloadButton"
                  />
                </a>
                <img
                  id="googleButton"
                  alt="Get it on Google Play"
                  src="/external/getitongoogleplay4229-otu.svg"
                  className="home-google-play downloadButton"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="gallery" className="home-gallery">
          <img
            id="galleryImage"
            alt="Background image with blurry lights"
            sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
            src="/external/disco-lighting-1500w.webp"
            srcSet="external//disco-lighting-1500w.webp 1200w, external/disco-lighting-tablet.webp 800w, external/disco-lighting-mobile.webp 480w"
            className="home-image"
          />
          <div className="home-gallery1">
            <GalleryCard1
              title="Play our new real money casino app"
              imageAlt="Android mobile device showing a selection of games to play"
              imageSrc="/external/mohegan-pa-app-13-1500w.webp"
              subtitle="Play our new real money casino app"
              rootClassName="rootClassName"
            ></GalleryCard1>
            <GalleryCard1
              title="Slot games you love!"
              imageAlt="Android mobile device showing Cleopatra Gold"
              imageSrc="/external/mohegan-pa-app-2-1500w.webp"
              subtitle="Slot games you love!"
              rootClassName="rootClassName1"
            ></GalleryCard1>
            <GalleryCard1
              title="And live dealer games!"
              imageAlt="Android mobile device showing live dealer games"
              imageSrc="/external/mohegan-pa-app-33-1500w.webp"
              subtitle="And live dealer games!"
              rootClassName="rootClassName2"
            ></GalleryCard1>
            <GalleryCard1
              title="Download &amp; Play now!"
              imageAlt="Android mobile device showing roulette "
              imageSrc="/external/mohegan-pa-app-4-1500w.webp"
              subtitle="Download &amp; Play now!"
              rootClassName="rootClassName3"
            ></GalleryCard1>
          </div>
          <div className="home-button-row">
            <a
              href="https://moheganpacasino.com"
              id="galleryButton"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link2 primaryButton primaryButtonText button"
            >
              PLAY NOW
            </a>
          </div>
        </section>
        <section id="col" className="howToPlay home-about-mohegan">
          <div className="home-bgexport">
            <img
              id="colImage"
              alt="iStock49718464914229"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/aboutmohegan-1500w.webp"
              srcSet="external//aboutmohegan-1500w.webp 1200w, external/aboutmohegan-tablet.webp 800w, external/aboutmohegan-mobile.webp 480w"
              className="home-i-stock4971846491"
            />
            <img
              alt="image"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/lights-bg-mobile-1500w.webp"
              srcSet="external//lights-bg-mobile-1500w.webp 1200w, external/lights-bg-mobile-tablet.webp 800w, external/lights-bg-mobile-mobile.webp 480w"
              className="home-image1"
            />
          </div>
          <div className="home-container4">
            <div id="col1" className="col howToPlayColumn">
              <div className="howToPlayTitleContainer">
                <div className="home-frame411">
                  <img
                    alt="Ellipse74229"
                    src="/external/ellipse74229-vnln-200h.webp"
                    className="home-ellipse7"
                  />
                  <span className="home-text09">1</span>
                </div>
                <h3 className="howToPlayTitle">
                  <span>Sign Up</span>
                </h3>
              </div>
              <span className="howToPlayParagraph">
                <span>
                  Create your account. It only takes a few minutes to get
                  started.
                </span>
              </span>
            </div>
            <div id="col2" className="col howToPlayColumn">
              <div className="howToPlayTitleContainer">
                <div className="home-frame413">
                  <img
                    alt="Ellipse74229"
                    src="/external/ellipse74229-hsv-200h.webp"
                    className="home-ellipse71"
                  />
                  <span className="home-text14">2</span>
                </div>
                <h3 className="howToPlayTitle">
                  <span>Verify Your Identity</span>
                </h3>
              </div>
              <span className="howToPlayParagraph">
                <span>
                  You need to be 21+ and located in Pennsylvania to play online
                  for real money.
                </span>
              </span>
            </div>
            <div id="col3" className="col howToPlayColumnNoBorder">
              <div className="howToPlayTitleContainer">
                <div className="home-frame415">
                  <img
                    alt="Ellipse74229"
                    src="/external/ellipse74229-pba-200h.webp"
                    className="home-ellipse72"
                  />
                  <span className="home-text19">3</span>
                </div>
                <h3 className="howToPlayTitle">
                  <span>Have Fun</span>
                </h3>
              </div>
              <span className="howToPlayParagraph">
                <span>
                  Enjoy our big collection of slots and table games on your
                  favorite device, anywhere in Pennsylvania
                </span>
              </span>
            </div>
          </div>
          <div className="home-button-row1">
            <a
              href="https://moheganpacasino.com"
              id="colButton"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3 primaryButton primaryButtonText button"
            >
              GET STARTED
            </a>
          </div>
        </section>
        <section id="safe" className="playSafe home-play-safe">
          <div className="home-column3">
            <div id="hr" className="home-container5"></div>
            <div className="home-frame416">
              <h2 id="safeHeadline" className="home-text24">
                Play Safe
              </h2>
            </div>
            <span id="safeText" className="home-text25">
              <a
                href="https://mohegansun.com/playing/responsible-gaming.html"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                Click here
              </a>
              <span>
                 for more information on our Responsible Gaming Plan. 
              </span>
              <span>
                Mohegan Sun Casino is committed to facilitating responsible
                gaming.
              </span>
              <br></br>
            </span>
          </div>
        </section>
        <section id="app" className="home-app-callout appAsidePromotion">
          <div className="home-app-callout-full-width1 appCalloutAside">
            <div className="home-frame18">
              <div className="home-moheganpalockup1">
                <a
                  href="https://moheganpa.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    id="paLogo"
                    alt="Mohegan Pennsylvania logo"
                    src="/external/mohegan-pa-lockup%201.svg"
                    className="home-image2"
                  />
                </a>
              </div>
              <h3 id="appHeadline" className="home-text29">
                Download today and play Mohegan anywhere in Pennsylvania
              </h3>
              <div id="appBar" className="home-container6">
                <a
                  href="https://apps.apple.com/us/app/mohegan-sun-pocono/id604257886"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link6"
                >
                  <img
                    alt="Download on the App Store"
                    src="/external/download-on-the-app-store.svg"
                    className="home-ios-app-store1 downloadButton"
                  />
                </a>
                <img
                  alt="Get it on Google Play"
                  src="/external/getitongoogleplay4229-otu.svg"
                  className="home-google-play1 downloadButton"
                />
              </div>
            </div>
          </div>
          <div className="home-group21">
            <img
              id="appImage"
              alt="iPad with the Mohegan Sun Casino App for Pennsylvania"
              sizes="(min-width: 992px) 1200px, (min-width: 768px) 800px, 480px"
              src="/external/mohegan-pa-ipad-1500w.webp"
              srcSet="external//mohegan-pa-ipad-1500w.webp 1200w, external/mohegan-pa-ipad-tablet.webp 800w, external/mohegan-pa-ipad-mobile.webp 480w"
              className="home-ipadscreenneonwelcomelogo1"
            />
            <span id="appIgt" className="home-text30">
              <span>© 2024 IGT.</span>
            </span>
          </div>
        </section>
        <Footer></Footer>
        <div>
          <div className="home-container8">
            <React.Fragment>
              <Script type="module">{`

     
  import { gsap } from "https://cdn.skypack.dev/gsap";
  import ScrollTrigger from "https://cdn.skypack.dev/gsap/ScrollTrigger";
  import ScrollSmoother from "/js/scrollsmoother.js";
  import EasePack from "https://cdn.skypack.dev/gsap/EasePack";

   gsap.registerPlugin(ScrollTrigger);
    if (window.innerWidth > 767) {


       gsap.fromTo('#desktopBg', 1, {opacity:0},{opacity:1, ease:"Quad.easeOut"});
   gsap.fromTo('#heroHeadline', 1, {y:50, opacity:0},{y:0, opacity:1, ease:"Quad.easeOut", delay:0.25});
    gsap.fromTo('#heroButton', 1, {y:50, opacity:0},{y:0, opacity:1, delay:0.5, ease:"Quad.easeOut"});

   var scene1 = gsap.timeline({scrollTrigger:{trigger:'#aside', start:"-85%", end:"-20%", scrub:1}});
   scene1.fromTo('#lightbar1', 0.75, {width:0, filter:"blur(20px)", transformOrigin:"50% 50%"},{width:'100%', filter:"blur(0px)", ease:"Quad.easeInOut"})
      scene1.fromTo('#asideImage', 1, {x:"-100%", opacity:0},{opacity:1, x:0, ease:"Expo.easeOut"},0)
            scene1.fromTo('#igt', 1, {x:-100, opacity:0},{opacity:1, x:0, ease:"Quad.easeInOut"},0)

      scene1.fromTo('#asideHeadline', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},0.25);
      scene1.fromTo('#asideCopy', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},0.35)
      scene1.fromTo('#downloadButtons', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},0.45)

var scene2 = gsap.timeline({scrollTrigger:{trigger:'#col', start:"-60%", end:"-20%", scrub:1}});
scene2.fromTo('#colImage', 1, { opacity:0},{opacity:1, y:0, ease:"Quad.easeOut"},0);
scene2.fromTo('.col', 1, { y:100, opacity:0},{stagger:0.2,opacity:1, y:0, ease:"Quad.easeOut"},0);
scene2.fromTo('#colButton', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},0.55);


var scene3 = gsap.timeline({scrollTrigger:{trigger:'#safe', start:"-60%", end:"-20%", scrub:1}});
   scene3.fromTo('#hr', 1, {width:0, transformOrigin:"50% 50%"},{width:'100%', ease:"Quad.easeInOut"})
scene3.fromTo('#safeHeadline', 1, {y:100, opacity:0},{opacity:1, y:0, ease:"Quad.easeOut"},0.35);
scene3.fromTo('#safeText', 1, {y:100, opacity:0},{opacity:1, y:0, ease:"Quad.easeOut"},0.45);

var scene4 = gsap.timeline({scrollTrigger:{trigger:'#gallery', start:"-60%", end:"-20%", scrub:1}});
scene4.fromTo('#galleryImage', 2, {scale:0.8, opacity:0, transformOrigin:"50% 50%"}, { opacity:.7, scale:1, ease:"Quad.easeInOut"},0);
scene4.fromTo('.galleryCard', 1, { y:200, opacity:0},{stagger:0.3,opacity:1, y:0, ease:"Quad.easeOut"},0.25);
scene4.fromTo('#galleryButton', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},1);


var scene5 = gsap.timeline({scrollTrigger:{trigger:'#app', start:"-110%", end:"-20%", scrub:1}});
scene5.fromTo('.appCalloutAside', 0.5, {transformOrigin:'bottom center', scaleY:0},{scaleY:1, ease:"Quad.easeOut"},0);
      scene5.fromTo('#appImage', 1, {y:"-100%", opacity:0},{opacity:1, y:0, ease:"Quad.easeOut"},0)
            scene5.fromTo('#appIgt', 1, {x:100, opacity:0},{opacity:1, x:0, ease:"Quad.easeInOut"},0)

      scene5.fromTo('#appHeadline', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},0.35)
      scene5.fromTo('#appBar', 1, {y:50, opacity:0},{opacity:1, y:0, ease:"Quad.easeInOut"},0.45)
      scene5.fromTo('#lightbar2', 1, {width:0, filter:"blur(20px)", transformOrigin:"50% 50%"},{width:'100%', filter:"blur(0px)", ease:"Quad.easeInOut"},0)
}




`}</Script>
            </React.Fragment>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
