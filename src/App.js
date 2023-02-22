import './App.css';
import Header from './component/Header';
import Contents from './component/Contnets';
import Slide from './component/Slide';
import Product from './component/Product';
import Accessory from './component/Accessory';
import Help from './component/Help';
import Footer from './component/Footer';
import Board from '../src/board/Board';



function App() {
  return (
    <div className="App">
        <Header/>
        <Slide />
        <Contents/>
        <Product/>
        <Accessory/>
        <Help/>
        <Footer/>
    </div>


  );
}

export default App;
