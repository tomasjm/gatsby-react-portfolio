// const ColoredLine = ({ color }) => (
//     <hr
//       style={{
//         color: color,
//         backgroundColor: color,
//         height: 1,
//         borderRadius: 5,
//         width: "100%",
//         marginTop: 25,
//         marginBottom: 25,
//       }}
//     />
//   )

import React from "react"
import styled, { css } from "styled-components"

const Separator = styled.hr`
  background: #b2bec3;
  border-radius: 5px;
  height: 1px;
  width: 100%;
  border: transparent;
  margin: 12.5px 0 12.5px 0;
`

const cSeparator = props => <Separator />

export default cSeparator
