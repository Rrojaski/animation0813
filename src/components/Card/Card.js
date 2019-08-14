import styled from "styled-components";

const Card = styled.div`
  perspective: 150rem;
  -moz-prespective: 150rem;
  position: relative;

  > .side-back {
    transform: rotateY(180deg);
    span {
        box-sizing: border-box;
        padding: 2rem;
    }
  }

  &:hover {
    > .side-front {
      transform: rotateY(-180deg);
    }
    > .side-back {
      transform: rotateY(0);
    }
  }
`;

export default Card;
