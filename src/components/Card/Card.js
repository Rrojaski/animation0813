import styled from "styled-components";

const Card = styled.div`
  perspective: 150rem;
  -moz-prespective: 150rem;
  position: relative;  

  &:hover {
    > .side-front {
      transform: rotateY(-180deg);
    }
    > .side-back {
      transform: rotateY(0);
    }
  }

  > .side-back {
    transform: rotateY(180deg);
    span {
      position: absolute;
      text-align: left;
      top: 0;
      left: 0;
      box-sizing: border-box;
      padding: 10px;
    }
  }

  //mobile view modifier for second and third card vvv

  @media only screen and (max-width: 767px) {
    > .card-2 {
      top: 435px;
    }
    > .card-3 {
      top: 870px;
    }
  }
`;

export default Card;
