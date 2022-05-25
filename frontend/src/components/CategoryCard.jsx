import styledComponents from "styled-components";

const CategoryCard = ({image, title, quantity}) => { 
    return <Parent>
        <img src={image} alt="" />
        <h2>{title}</h2>
        <p>{quantity} hoteles</p>
    </Parent>
 }

const Parent = styledComponents.div`
    background: #fff;
    border-radius: 10px;
    width: 310px; height: 246px;
    border: 1px solid #F3F1ED;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 11px;
    overflow: hidden;
    position: relative;
    transition: all .3s ease-in-out;
    img {
        position: absolute;
        top: 0; left: 0;
        width: 110%;
        height: 70%;
    }
    h2 {
        margin-top: 58%;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        color: #383B58;

    }
    p {
        color: #383B58;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px 0px #00000080;
    }


    @media (max-width: 768px) {
        width: 347px;
        height: 246px;
    }
}`



export default CategoryCard;