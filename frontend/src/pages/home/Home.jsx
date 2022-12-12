import Header from '../../components/header/Header'
import City from '../../components/city/City'
import PropertyType from '../../components/propertyType/PropertyType'
import Tops from '../../components/tops/Tops'
import GridImage from '../../components/gridImage/GridImage'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import './home.css'
const Home = () => {
  return (
    <div>
        <Header />
        <div className="home__container">
            <City />
            <PropertyType/>
            <Tops />
            <GridImage/>
            <Subscribe/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home