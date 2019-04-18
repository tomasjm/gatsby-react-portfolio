import React from "react"
import styled, { css } from "styled-components"

const Button = styled.a`
  background: #00b894;
  font-size: 1.025em;
  font-weight: bold;
  border-radius: 5px;
  color: white;
  margin: 0 0.5em;
  padding: 0.25em 0.25em;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  width: 300px;
  align-self: center;
  transition: 0.5s;
  margin-bottom: 25px;
  text-decoration: none;
  &:hover {
    transition: 0.5s;
    background: #55efc4;
  }
`

const cButton = props => (
  <Button href={props.reff} target="_blank">
    <span style={{ textAlign: "center" }}>{props.children}</span>
  </Button>
)

export default cButton
