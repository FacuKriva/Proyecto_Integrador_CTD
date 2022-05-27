import Buscador from "../../Buscador/Buscador";
import ListadoCard from "../../Listado/ListadoCard";
import CategoryCard from "../../Categorias/CategoryCard";
import Lista from "../../Listado/listas.json"
import CategoriasJson from "../../Listado/categorias.json"
import styledComponents from "styled-components";

const Body = ({}) => { 
    return <Parent>
        <Buscador />
        <h2>Busca por tipo de alojamiento</h2>
        <Categorias>
            {
                CategoriasJson.map((categoria, index) => {
                    return <CategoryCard key={index} {...categoria}/>
                })
            }
        </Categorias>
        <h2>Recomendaciones</h2>
        <Listas>
            {
                Lista.map((lista) => {
                    return <ListadoCard key={lista.id} img={lista.img} category={lista.category} title={lista.title} location={lista.location} description={lista.description} />
                })
            }
        </Listas>
    </Parent>
 }

const Parent = styledComponents.div`
    > h2 {
        text-align: left;
        font-family: Roboto;
        font-size: 24px;
        font-weight: 700;
        line-height: 28px;
        letter-spacing: 0em;
        text-align: left;
        padding-left: 40px;
        padding-top:13px;
        padding-bottom: 10px;
        color: #383B58;
    }

    `

const Categorias = styledComponents.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 20px;
    flex-wrap: wrap;
    padding: 0 43px 60px;
    gap: 10px;

    `

const Listas = styledComponents.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 0 auto;
    padding: 0 43px 60px;
    gap: 20px;
    @media only screen and (max-width: 768px) {
        gap: 14px;
        padding: 0 14px 60px;
    }
`;


export default Body;