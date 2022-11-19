import About from "../about/About";
import Blog from "../blog/Blog";
import Contact from "../contact/Contact";
import Counter from "../counter/Counter";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Hero from "../hero/Hero";
import Services from "../services/Services";
import Skills from "../skills/Skills";
import Work from "../work/Work";

function Main() {
  return (
    <div id="colorlib-main">
      <Hero></Hero>

      <About></About>

      <Services></Services>

      <Counter></Counter>

      <Skills></Skills>

      <Education></Education>

      <Experience></Experience>

      <Work></Work>

      <Blog></Blog>

      <Contact></Contact>
    </div>
  );
}

export default Main;
