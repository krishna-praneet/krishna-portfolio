import "./content.css";
import kpg from "../assets/kpg.png";
import resume from "../assets/Resume.pdf";

function Content() {
  return (
    <div class="container-fluid bg-shade-green border border-top-0 border-dark">
      <div class="row padding-content">
        <div class="col-xl-5 col-lg-6 align-self-center">
          <h1 class="dm-serif-font">Hi, I'm Krishna Praneet</h1>
          <p class="txt-1 mb-20 mt-16 inter-font-thin text-justify">
            I'm a first year Master's student in the department of Computer
            Science at University of Massachusetts Amherst. Prior to this, I was
            working full-time as a Software Development Engineer at Deskera. I
            received my Bachelor's degree from the Indian Institute of
            Technology Madras (IITM). I have 2+ years experience in developing
            microservice applications using Java Springboot and ReactJs.
          </p>
          <a class="btn btn-success" href={resume}>
            Resume
          </a>
        </div>
        <div class="col-xl-7 col-lg-6 align-self-center d-flex justify-content-center text-center">
          <div class="max-width: 650px;">
            <img
              src={kpg}
              width="70%"
              alt="Krishna Praneet"
              class="border border-3 border-dark rounded-5 img-shadow"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
