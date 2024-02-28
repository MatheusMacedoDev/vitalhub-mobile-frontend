import styled from 'styled-components/native';

export default styled.Text`
    font-size: ${props => props.fontSize ? props.fontSize : '14'}px;
    font-family: 'Quicksand_600SemiBold';
    margin-bottom: 3%;
`;