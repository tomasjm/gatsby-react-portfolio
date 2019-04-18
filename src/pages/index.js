import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Badge from "../components/badge"
import Separator from "../components/separator"
import Progress from "../components/progress"
import Project from "../components/project"

import "@fortawesome/fontawesome-free/css/all.css"
const Index = () => (
  <Layout>
    <SEO title="Tomás Jiménez" />
    <h1 style={{ textAlign: "center" }}>Hey! I'm Tomás Jiménez</h1>
    <div style={{ display: "flex", flexFlow: "row", justifyContent: "center" }}>
      <Badge>Developer</Badge>
      <Badge>Electronic Engineer</Badge>
      <Badge>Open Source</Badge>
    </div>
    <div
      style={{
        display: "flex",
        flexFlow: "row",
        justifyContent: "center",
        marginTop: 25,
      }}
    >
      <a href="https://github.com/tomasjm" target="_blank">
        <i className="fab fa-github-square" />
      </a>
      <a href="https://twitter.com/TomJimenez05" target="_blank">
        <i className="fab fa-twitter-square" />
      </a>
      <a href="https://www.facebook.com/TomJimenez05" target="_blank">
        <i className="fab fa-facebook-square" />
      </a>
      <a href="https://instagram.com/tom_jimenez.cl" target="_blank">
        <i className="fab fa-instagram" />
      </a>
      <a
        href="https://www.youtube.com/channel/UCLxcXE72K8cxriHCj4_LRrg/featured?view_as=subscriber"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
    </div>
    <Separator />
    <p className="description">
      I'am a Chilean fullstack developer, working as freelancer and contributing
      to the open source paradigm.
      <br />
      <br />
      Actually I'm studying Electronic Engineering at Universidad de la
      Frontera, Temuco, Chile.
      <br />
      <br />
      This portfolio was coded with Gatsby React ;)
    </p>
    {/* <p className="description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere eaque id
      voluptas voluptates perspiciatis aliquam natus modi distinctio accusantium
      ipsam pariatur labore aliquid, quis alias enim quos, praesentium corporis
      commodi laudantium tempora. Blanditiis nobis amet quis magnam fugiat
      laudantium sequi.
    </p> */}
    <Separator />
    <h2>Okay, let me show my power</h2>
    <Progress text="html/css" value="70" />
    <Progress text="javascript" value="85" />
    <Progress text="C/C++" value="95" />
    <Progress text="Python" value="50" />
    <h2>With some libraries/frameworks</h2>
    <Progress text="vuejs" value="75" />
    <Progress text="reactjs" value="55" />
    <Progress text="react-native" value="40" />
    <Progress text="angular" value="35" />
    <h2>On backend territory</h2>
    <Progress text="nodejs" value="85" />
    <Progress text="expressjs" value="80" />
    <Progress text="mongo tools" value="50" />
    <Progress text="sql tools" value="70" />
    <Separator />
    <h2>Some simple/hobby projects</h2>
    <div
      style={{
        display: "flex",
        flexFlow: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Project reff="https://notas.tomjimenez.me">notas.tomjimenez.me</Project>
      <Project reff="https://eternium.cc">eternium.cc</Project>
      <Project reff="https://github.com/tomasjm">Github</Project>
    </div>
    <Separator />
    <h4 style={{ textAlign: "center" }}>
      &copy; tomjimenez.me | Tomás Jiménez | 2019
    </h4>
  </Layout>
)

export default Index
