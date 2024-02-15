import React from 'react';

import { UserInfoContainer, UserNameTitle, InfoTextContainer, SubtitleInfoText } from './style';

export default function UserMainInfo({ username, infoArr = [] }) {
    return (
        <UserInfoContainer>
            <UserNameTitle>{ username }</UserNameTitle>
            <InfoTextContainer>
                { infoArr.map((text, index) => (
                    <SubtitleInfoText key={index}>{ text }</SubtitleInfoText>
                ))}
            </InfoTextContainer>
        </UserInfoContainer>
    )
}