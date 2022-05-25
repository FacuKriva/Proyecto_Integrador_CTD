import Header from "./Header";
import Footer from "./Footer";
import CategoryCard from "./CategoryCard";

const TemplateResponsive = () => { 
    return <div>
        <Header />
        <div className="container">
            <CategoryCard image={"https://picsum.photos/400/200"} title={"Hoteles"} quantity={118615}/>
        </div>
        <Footer />
    </div>
}



export default TemplateResponsive;