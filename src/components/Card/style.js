import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

export const CardsList = styled.FlatList`
    margin: 20px 0;
    width: 100%;
`;

export const CardContainer = styled.View`
    flex-direction: row;
    width: ${Dimensions.get('window').width * 0.9}px;
    height: 84px;
    box-shadow: 5px 5px rgba(0, 0, 0, 0.25);
    elevation: 20;
    background-color: white;
    border-radius: 10px;
    padding: 18px 18px 10px 18px;
    justify-content: space-between;
    border: ${props => props.isSelected ? '2px solid #496BBA' : 'none'};
`;

export const TouchableCard = styled.TouchableOpacity`
    width: 100%;
`;