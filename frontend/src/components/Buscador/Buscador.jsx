import styled from "styled-components";
import { DateRangePickerComponent } from "@syncfusion/ej2-react-calendars";
import Ciudades from "./provincias.json"
const Serchbar = () => {

  return (
    <Container>
      <Title>Busca Casas, Hoteles y mucho más en la ciudad de tus sueños</Title>
      <Form>
        <select name="ciudades" id="select">
          <option key={"citys"}>Ciudades</option>
          {Ciudades.map((city) => {
            return (
              <option value={city.id} key={city.id + "i"}>
                {city.ciudad}
              </option>
            );
          })}
        </select>
        <div>
          <DateRangePickerComponent  />
        </div>
        <Button>Buscar</Button>
      </Form>
    </Container>
  );
};
const Container = styled.div`
    
  display: flex;
  flex-direction: column;
  height: 270px;
  align-items: center;
  justify-content: space-around;
  background-color: var(--contrast--dark);
  @media only screen and (min-width: 768px) {
    height: 140px;
    display: Flex;
    flex-direction: column;
    justify-content: center;
  }
  @media only screen and (min-width: 1366px) {
    height: 150px;
  }
`;
const Title = styled.h1`
  height: 40px;
  font-size: 25px;
  text-align: center;
  color: var(--contrast--light);
`;
const Form = styled.form`
    width: 85vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
    margin: 10px 0;
    height: 39px;
    width: 100%;
    .e-input-group {
        background-color: var(--contrast--light);
        width: 100%;
        height: 100%;
        border-radius: 5px;
        font-size: 16px;
        padding-left: 10px;
    }
    .e-range-icon::before {
        background: var(--contrast--light);
        color: var(--contrast--color);
    }
    }
    select {
    width: 100%;
    border-radius: 5px;
    height: 40px;
    background-color: var(--contrast--light);
    option {
        color: var(--contrast--black);
    }
    }
    @media only screen and (min-width: 768px) {
      flex-direction: row;
      justify-content: space-evenly;
      align-items: center;
      div {
        width: 35%;
      }
      select {
        width: 35%;
      }
    }
`;

const Button = styled.button`
Height:40px;
width:164px;
margin-right:10px;
background-color:var(--color-primary);
border:none;
color:var(--contrast--light);
border-radius:5px;
font-size:16px;
font-weight:bold;
curson:pointer;`
;
export default Serchbar;