import CategoryList from "../../Components/CategoryList/CategoryList"
import './Home.css';

function Home() {
  return (
    <>
     <div className="dior">
        <div className="container">
          <sec_tit>FASHION AND  ACCESSORIES</sec_tit>
          <sec_txt>Titanium. So strong. So light. So Pro.</sec_txt>
          <div className="Home_buttons flex">
            {/* <Button path="/cart">Learn More</Button>
            <Button>Buy</Button> */}
          </div>
        </div>
      </div>
   <CategoryList />
    </>
  );
}

export default Home;