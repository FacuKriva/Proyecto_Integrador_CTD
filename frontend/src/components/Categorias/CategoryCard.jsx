import styledComponents from "styled-components";

const CategoryCard = ({img, title, quantity}) => { 
    return <Parent>
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{quantity} hoteles</p>
    </Parent>
 }

const Parent = styledComponents.div`
    background: #fff;
    border-radius: 10px;
    width: 24%; height: 246px;
    border: 1px solid #F3F1ED;
    box-shadow: 0px 4px 4px 0px #00000040;
    overflow: hidden;
    position: relative;
    transition: all .3s ease-in-out;

    img {
        object-fit: cover;
        top: 0; left: 0;
        width: 110%;
        height: 70%;
    }
    h2 {
        padding: 10px 10px 0;
        margin-bottom: 0;
        font-size: 20px;
        font-weight: 700;
        line-height: 23px;
        color: #383B58;
        text-align: left;
        margin-left:0px;


    }
    p {
        padding-left: 10px;
        color: #383B58;
        text-align: left;
    }

    &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px 0px #00000080;
    }

    @media (max-width: 768px) {
        width: 49%;
    }
    @media (max-width: 600px) {
        width: 100%;
    }

}`



export default CategoryCard;