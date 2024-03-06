import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const fullWidth = Dimensions.get('screen').width;
const fullHeight = Dimensions.get('screen').height;

export const BlackBox = styled.View`
    display: ${props => props.active ? 'flex' : 'none'};
    width: ${fullWidth}px;
    height: ${fullHeight}px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    z-index: 1;
    justify-content: center;
    align-items: center;
`;

export const ModalContainer = styled.View`
    display: ${props => props.active ? 'flex' : 'none'};
    background-color: #fff;
    width: 90%;
    height: ${props => props.heightPercentage}%;
    z-index: 10;
    border-radius: 15px;
    padding: 40px 30px;
    justify-content: space-between;
    align-items: center;
`;

export const ModalImage = styled.Image`
    width: 100%;
    height: ${props => props.heightPercentage ? props.heightPercentage : '0'}%;
    border-radius: 10px;
`;