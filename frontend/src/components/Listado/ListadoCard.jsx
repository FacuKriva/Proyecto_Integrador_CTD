import styledComponents from "styled-components";
import {AiFillStar, AiOutlineWifi} from "react-icons/ai";
import {BiSwim} from "react-icons/bi";
import {MdLocationPin} from "react-icons/md";


const ListadoCard = ({ img, category, title, location, description }) => {
    return <Parent className="listado-card">
        <img src={img} alt="" />

        <div className="descripcion-listado">
            <div className="d1">
                <div className="d2">
                    <div>
                        <h3>{category.toUpperCase()}
                        </h3> <div>{<><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></>}</div>
                    </div>
                    <h2>{title}</h2>
                </div>
                <div className="d3">
                    <div>8</div>
                    <h5>Muy Bueno</h5>
                </div>
            </div>
            <h4><MdLocationPin/>     En {location}<strong> MOSTRAR EN EL MAPA</strong></h4>
            <div className="icons">
                <AiOutlineWifi/>
                <BiSwim/>
            </div>
            <P>{description}</P>
            <div class="boton-vermas">
                <button><a href="#">Ver más</a></button>
            </div>

        </div>
    </Parent>
}

const P = styledComponents.p`
    height: 50px;
    overflow: hidden;
    text-align: justify;
    background: linear-gradient(black,white);
    -webkit-background-clip: text;
    color: transparent;  `;

const Parent = styledComponents.div`
    display: flex;
    transition: all 0.1s ease-in-out;
    width: calc(50% - 20px);
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 10px;
    @media only screen and (max-width: 768px) {
        width: 90%;
        flex-direction: column;
    }
    img {
        width: 50%;
        border-radius: 8px;
        @media only screen and (max-width: 768px) {
            width: 100%;
        }
    }
    .descripcion-listado {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
    }
    .icons {
        display: flex;
        gap: 10px;
        padding: 0 10px 10px;
    }
    h4 {
        text-align: left;
    }
    div {
        display: flex
    }
    .d1 {
        justify-content: space-between;
        align-items: center;

    }
    .d2, .d3 {
        flex-direction: column;
        width: 100%;
    }
    .d2 {
        align-items: flex-start;
        width: 200%;
        svg {
            color: #1DBEB4;

        }
    }
    .d3 {
        align-items: flex-end;
        div {
            height: 27px;
            width: 34px;
            left: 65px;
            top: 0px;
            border-radius: 10px;
            background: #383B58;
            font-family: Roboto;
            font-size: 20px;
            font-weight: 700;
            line-height: 23px;
            letter-spacing: 0em;
            text-align: center;
            color: #FFFFFF;
            display: flex;
            justify-content: center;


        }
    }
    h2 {
        font-size: 20px;
        font-weight: bold;
        margin: 0;
        text-align: left;
        padding-left: 0px; !important
    }
    h3 {
        font-size: 16px;
        font-weight: bold;
        margin: 0;
        color: var(--contrast--dark);
        margin-right: 10px;
    }

    strong {
        margin-left: 10px;
        font-size: 12px;
        color: var(--contrast--dark);
    }
    button {
        width: 100%;
        height: 40px;
        background-color: var(--color-primary);
        border: none;
        border-radius: 5px;
        
        a {

            color: var(--contrast--light);
            font-size: 16px;
            font-weight: bold;
            text-decoration: none;

        }
        
    }
    &:hover {
        box-shadow: 0px 4px 4px 0px #00000080;
        transform: scale(1.02);
    }
    `;


export default ListadoCard;