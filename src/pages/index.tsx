import type { NextPage } from 'next';
import { Container } from 'react-bootstrap';

const Home: NextPage = () => {
  return (
    <>
      <section className="landing">
        <Container>
          <div>
            <h1 className="text-black">Hello there h1 :)</h1>
            <h2 className="text-black">Hello there h2 :)</h2>
            <h3 className="text-black">Hello there h3 :)</h3>
            <h4 className="text-black">Hello there h4 :)</h4>
            <h5 className="text-black">Hello there h5 :)</h5>
            <h6 className="text-black">Hello there h6 :)</h6>
            <p className="text-black">Hello there p :)</p>
            <a className="text-black">Hello there a :)</a>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
