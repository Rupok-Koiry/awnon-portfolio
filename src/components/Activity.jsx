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
          <div className="row">
            <div className="col-lg-4 col-md-6 item">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-atom bx-md"></i>
                </div>
                <h4 className="title" style={{ textAlign: "center" }}>
                  <b>Research</b>
                </h4>
                <div className="description">
                  {" "}
                  <p>
                    I am interested in many different areas of science and
                    technology, particularly in mathematics and computer
                    science. I am constantly working on my own projects and
                    research. My current interests are in secure and hybrid
                    cryptographic protocols. I am also interested in building
                    quantum resistant security protocols. I am always looking
                    for collaboration.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-chalkboard bx-md"></i>
                </div>
                <h4 className="title" style={{ textAlign: "center" }}>
                  <b>Classroom Teaching</b>
                </h4>
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
            <div className="col-lg-4 col-md-6 item">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-chart bx-md"></i>
                </div>
                <h4 className="title" style={{ textAlign: "center" }}>
                  <b>Tutoring</b>
                </h4>
                <div className="description">
                  I have 8+ years of experience in tutoring students in
                  mathematics. I have tutored students of all ages. I am able to
                  tutor students in a variety of subjects. I have tutored
                  students from Elementary Mathematics to College Level Algebra,
                  Calculus, Differential Equatons, and many more.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-code-block bx-md"></i>
                </div>
                <h4 className="title" style={{ textAlign: "center" }}>
                  <b>Coding</b>
                </h4>
                <div className="description">
                  I have experience in programming in Python, C++, and numerous
                  other languages that are used in scientific computing
                  procedures. I code often in my free time. I am also a fan of
                  the open source world. Sometimes I like to spend some quality
                  time working on progamming challenges from HackerRank,
                  LeetCode, and ProjectEuler.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-code-alt bx-md"></i>
                </div>
                <h4 className="title" style={{ textAlign: "center" }}>
                  <b>Web Development</b>
                </h4>
                <div className="description">
                  I am a hobbyist web developer learning new technologies and
                  frameworks. I have some experience in HTML, CSS, and basic
                  JavaScript. I am currently experimenting with the Bootstrap
                  framework and also trying to learn React JS.
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 item">
              <div className="activity">
                <div className="icon" align="center">
                  <i className="bx bx-game bx-md"></i>
                </div>
                <h4 className="title" style={{ textAlign: "center" }}>
                  <b>Gaming</b>
                </h4>
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