import styled from 'styled-components';


const CardImage = styled.div`
    width: 100%;
    height: 23rem;
    background-blend-mode: color;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => props.backColor}, url(${props => props.backImage});
`

export default CardImage;