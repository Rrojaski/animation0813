import styled from "styled-components";

const CardHeading = styled.div`
  position: absolute;
  font-size: 2rem;
  font-weight: 300;
  text-transform: uppercase;
  top: 12rem;
  right: 1rem;
  text-align: right;
  width: 75%;

  span {
    -webkit-box-decoration-break: clone;
    padding: .5rem 1.5rem;
    background-image: ${props => props.backColor};
  }
`;

export default CardHeading;
