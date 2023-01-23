import React from "react";

import {Wrapper, Container, Row, BuscarInputContainer, Input, Menu} from "./styles"

import logo from "../assets/logo-dio.png"

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />    
                    <BuscarInputContainer>
                        <Input placeholder="Buscar..."/>
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}
