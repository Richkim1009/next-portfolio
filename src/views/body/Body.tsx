import { Stack } from "@mui/material";
import Intro from "./Intro";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Retrospective from "./Retrospective";
import Contact from "./Contact";

export default function Body() {
  return (
    <Stack>
      <Intro />
      <Experience />
      <Projects />
      <Skills />
      <Retrospective />
      <Contact />
    </Stack>
  )
}