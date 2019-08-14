import styled from 'styled-components';


const CardImage = styled.div`
    width: 100%;
    min-height: 280px;
    
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => props.backColor}, url(${props => props.backImage});
    background-blend-mode: color;

`

export default CardImage;