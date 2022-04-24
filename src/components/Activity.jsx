import React from "react";

const Activity = () => {
  return (
    <section id="Activity">
      <div className="container">
        <div className="section-title">
          <h2>What I Do</h2>
        </div>
      </div>
      <div className="activities">
        <div className="container">
          <div className="row g-3">
            <div className="col-lg-4 col-md-6">
              <div className="activity ">
                <div className="icon" align="center">
                  <i className="bx bx-atom" style={{ color: "cyan" }}></i>
                </div>
                <h3 className="title">Research</h3>
                <div className="description">
                  I am interested in many different areas of science and
                  technology, particularly in mathematics and computer science.
                  I am constantly working on my own projects and research. My
                  current interests are in secure and hybrid cryptographic
                  protocols. I am also interested in building quantum resistant
                  security protocols. I am always looking for collaboration.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="activity">
                <div className="icon" align="center">
                  <i
                    className="bx bx-chalkboard "
                    style={{ color: "yellow" }}
                  ></i>
                </div>
                <h3 className="title">Classroom Teaching</h3>
                <div className="description">
                  I have 3 years of classroom teaching experience in
                  mathematics. I plan, prepare and deliver lesson plans and
                  instructional materials that facilitate active learning. I
                  develop schemes of work, lesson plans and tests that are in
                  accordance with established procedures. Instruct and monitor
                  students in the use of learning materials and equipment.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-chart" style={{ color: "green" }}></i>
                </div>
                <h3 className="title">Tutoring</h3>
                <div className="description">
                  I have 8+ years of experience in tutoring students in
                  mathematics. I have tutored students of all ages. I am able to
                  tutor students in a variety of subjects. I have tutored
                  students from Elementary Mathematics to College Level Algebra,
                  Calculus, Differential Equations, and many more.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="activity">
                <div className="icon" align="center">
                  <i
                    className="bx bx-code-block"
                    style={{ color: "orange" }}
                  ></i>
                </div>
                <h3 className="title">Coding</h3>
                <div className="description">
                  I have experience in programming in Python, C++, and numerous
                  other languages that are used in scientific computing
                  procedures. I code often in my free time. I am also a fan of
                  the open source world. Sometimes I like to spend some quality
                  time working on programming challenges from HackerRank,
                  LeetCode, and ProjectEuler.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="activity">
                <div className="icon" align="center">
                  <i
                    className="bx bx-code-alt"
                    style={{ color: "blueviolet" }}
                  ></i>
                </div>
                <h3 className="title">Web Development</h3>
                <div className="description">
                  I am a hobbyist web developer learning new technologies and
                  frameworks. I have some experience in HTML, CSS, and basic
                  JavaScript. I am currently experimenting with the Bootstrap
                  framework and also trying to learn React JS.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-game" style={{ color: "red" }}></i>
                </div>
                <h3 className="title">Gaming</h3>
                <div className="description">
                  I am an avid gamer. I have played many different games,
                  ranging from indoor games such as monopoly and chess to
                  outdoor games like cricket and football. I love playing
                  strategic video games to keep my brain sharp. This enables me
                  to find innovative solutions to problems.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity;
