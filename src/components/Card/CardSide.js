import styled from "styled-components";

const CardSide = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 400px;

  background-image: ${props => props.backImage};
  color: #fff;
  font-size: 1.5rem;
  
  backface-visibility: hidden;
  transition: all 0.8s ease;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
`;

export default CardSide;
