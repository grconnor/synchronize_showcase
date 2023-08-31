import HeroSynchronize from '@components/Pages/Landing/HeroImages/HeroSynchronize';
import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';

import HeroImages from '@components/Pages/Landing/HeroImages';
import SlidingText from '@components/common/SlidingText';

const Home: NextPage = () => {
  return (
    <>
      <section className="landing">
        <section className="hero">
          <Container className="hero-container">
            <div className="hero-image-container">
              <HeroImages />
            </div>
            <div className="hero-content">
              <SlidingText title="Synchronize Your" tag="h1" className="hero-content-heading" />
              <SlidingText
                title="Community Today"
                tag="h1"
                className="hero-content-heading"
                initialDelay={150}
              />
              <p>A community experience that meets your members where they want to engage</p>
            </div>
            <div className="hero-video-container">
              <video preload="auto" playsInline autoPlay loop muted>
                <source
                  src="https://dl.dropboxusercontent.com/scl/fi/47ok95kupsqnekj5ylfb4/Sync.mp4?rlkey=fsk715xax71pstlswx878b6sz&dl=0"
                  type="video/mp4"
                />
              </video>
            </div>
          </Container>
        </section>
      </section>
    </>
  );
};

export default Home;
