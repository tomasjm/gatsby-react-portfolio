import React from "react"
import styled, { css } from "styled-components"

const Progress = styled.progress`
  height: 15px;
  width: 100%;
`

const cProgress = props => {
  return (
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        height: 30,
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 10,
      }}
    >
      <h3 style={{ paddingRight: 10, width: 150, lineHeight: 1 }}>
        {props.text}:{" "}
      </h3>
      <Progress value={props.value} max="100" />
      <h3 style={{ paddingLeft: 10 }}> {props.value}%</h3>
    </div>
  )
}

export default cProgress
