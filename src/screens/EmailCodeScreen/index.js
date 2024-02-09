import React, { useState } from 'react';
import { Container } from '../../components/Container/style';
import Logo from '../../components/Logo';
import { Title } from '../../components/Title/style';
import { CommandText, CommandTextHighlight } from '../../components/CommandText/style';
import { UnsignedButtonsWrapper } from '../../components/UnsignedButton/style';
import UnsignedButton from '../../components/UnsignedButton';
import UnsignedLink from '../../components/UnsignedLink';
import CodeInput from '../../components/CodeInput';

export default function EmailCodeScreen() {
    const [code, setCode] = useState('');

    return (
        <Container>
            <Logo />
            <Title>
                Verifique seu e-mail
            </Title>
            <CommandText>
                Digite o código de 4 dígitos enviado para
                <CommandTextHighlight> username@email.com</CommandTextHighlight>
            </CommandText>
            <CodeInput 
                code={code}
                setCode={setCode}
            />
            <UnsignedButtonsWrapper>
                <UnsignedButton 
                    buttonText='Entrar'
                />
            </UnsignedButtonsWrapper>
            <UnsignedLink 
                linkText='Reenviar Código'
            />
        </Container>
    )
}