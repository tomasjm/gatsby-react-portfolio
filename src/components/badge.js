import React from "react"
import styled, { css } from "styled-components"

const Badge = styled.div`
  background: #00b894;
  font-size: 1.025em;
  font-weight: bold;
  border-radius: 1.5px;
  color: white;
  margin: 0 0.5em;
  padding: 0.25em 0.25em;
  text-align: center;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`

const cBadge = props => <Badge>{props.children}</Badge>

export default cBadge
