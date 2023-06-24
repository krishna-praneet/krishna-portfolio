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
            I am a Master's student in Computer Science at the University of Massachusetts Amherst. 
            I am currently working on developing software tools for Quantum LDPC Decoders. I have two years of experience 
            in full-stack software development design and technologies - Java (Spring WebMVC), Javascript, 
            React.js, SQL/NoSQL, Python (Django), and AWS. I also have projects in Machine Learning 
            technologies - Python (NumPy, Pandas, SciKitLearn, Tensorflow), Apache Spark, and PyTorch.
          </p>
          <a class="btn btn-success" href={resume} target="_blank">
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
