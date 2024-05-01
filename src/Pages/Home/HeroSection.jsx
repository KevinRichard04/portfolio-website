import { Link } from "react-scroll";
export default function HeroSection(){
  return(
    <section id="herosection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Kevin Richard</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color"> Front-End</span>{" "}
            <br />
            Devoloper
          </h1>
          <p className="hero--section--description">
              My portfolio showcases a diverse range of projects, each showcasing a unique blend of functionality and aesthetics.
            <br />In addition to my technical skills, I possess excellent communication and collaboration abilities, making me a valuable asset in any development team.
          </p>
        </div>
        <Link
          activeClass="navbar--active-content"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          to="Contact"
        >
          <button className="btn btn-primary">
            Get In Touch
          </button>
        </Link>
      </div>
      
    </section>
  );
}