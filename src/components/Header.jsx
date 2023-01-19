import React from "react";

import {Wrapper, Container, Row, BuscarInputContainer} from "./styles"

import logo from "../assets/logo-dio.png"

const Header = ({autenticado}) => {
    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />    
                    <BuscarInputContainer/>
                </Row>
            </Container>
        </Wrapper>
    )
}

export {Header}
