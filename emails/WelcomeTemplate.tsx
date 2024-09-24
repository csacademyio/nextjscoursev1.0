import React, { CSSProperties } from 'react'
import {Html, Body, Container, Tailwind, Text, Link, Preview } from "@react-email/components"

const WelcomeTemplate = ({name}: {name: string}) => {
  //re_NfVfTcuL_43pyCRB4aCCNKCxEe494dmL5
  return (
    <Html>
      <Preview>Welcome Aboard</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text className="font-bold" style={heading}>
              Hello {name}
            </Text>
            <Link href="https://www.codeswitchacademy.io">
              www.codeswitchacademy.io
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

const body: CSSProperties = {
    background: "#fff"
}

const heading: CSSProperties = {
    fontSize: "32px"
}

export default WelcomeTemplate