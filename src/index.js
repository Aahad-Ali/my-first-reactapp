import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";

function Hi() {
  return (
    <div id="hi">
      <img
        id="image"
        align="left"
        src="https://avatars.githubusercontent.com/u/104500845?s=400&u=9119c25220f042fc1000878b9479e871f496d1e0&v=4"
      alt="---" />
      <div id="contant">
        <h1 id="heading">
          Aahad Ali:
          <p>
            <q>
              house: 30# area: Shah faisal colony ,<br></br> abc road malir
              karachi// Phone:03447746207 <br></br>Email: abc@gmail.com:
            </q>
          </p>
        </h1>
        <h2>
          <br></br>
          Objective:
          <p>
            A resume objective is a short introduction of you and your career
            goals. To write a resume objective,<br></br> mention the job title
            you want, add 23 key skills, and explain what you want to achieve
            in this job.<br></br>
            Write 23 sentences. Resume objectives are best for candidates with
            little work experience
          </p>
        </h2>

        <hr></hr>
        <h2>
          Skills:
          <li>Web Developer</li>
          <li>web Designer</li>
          <li>Full Stack Developer</li>
          <li>software Developer</li>
        </h2>
        <hr></hr>
        <h2>
          Experience:
          <li>Web Developer in Software House</li>
          <li>web Designer in Software House</li>
          <li>Full Stack Developer in Software House</li>
          <li>software Developer in Software House</li>
        </h2>
        <hr></hr>
        <h2>
          Language:
          <li>Urdu</li>
          <li>Basic English</li>
        </h2>
        <hr></hr>
        <h2>
          Refrence:
          <li>will be furnished upon request:</li>
        </h2>
      </div>
    </div>
  );
}
ReactDOM.render(<Hi />, document.querySelector("#root"));