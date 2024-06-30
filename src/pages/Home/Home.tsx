import { Container} from 'react-bootstrap';
import './styles.css';
import HomeBanner from '../../components/Home/HomeBanner';
import Promotions from '../../components/Promotions/Promotions';


const Home = () => {
    return (
        <>
        <HomeBanner />
        <Container className='mt-3 home'>
          <h1>Productos Destacados</h1>
          <Promotions />
        </Container>
      </>
    )
}

export default Home;
