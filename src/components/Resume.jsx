import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="section section-blank">
      <div className="container" data-aos="zoom-in">
        <div className="row">
          <div className="col-sm-12">
            <div className="section-title">
              <h2>Resume</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="tabs skill-resume-tabs">
              <a className="tab active" href="/" data-target="#education">
                <h4>Academics</h4>
              </a>
              <a
                className="tab "
                href="/"
                data-target="#publications
                "
              >
                <h4>Publications </h4>
              </a>
              <a className="tab" href="/" data-target="#boardmember">
                <h4>Research Experience </h4>
              </a>
              <a className="tab" href="/" data-target="#archaeology">
                <h4>Professional Experience </h4>
              </a>
              <a className="tab" href="/" data-target="#impacts">
                <h4>Broader Impacts </h4>
              </a>
              <a className="tab" href="/" data-target="#conferences">
                <h4>Achievements </h4>
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content" id="education">
          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading resume-sub-heading">Education</h3>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>2022 - 2027 </span>
                </time>
                <div className="v-icon">
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>DOCTOR OF PHILOSOPHY </h4>
                  <p>
                    University of Central Florida
                    <br />
                    <strong>Mathematics</strong>
                  </p>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>2020 - 2022 </span>
                </time>
                <div className="v-icon">
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>MASTER OF SCIENCE</h4>
                  <p>
                    City College of New York
                    <br />
                    <strong>Mathematics</strong>
                  </p>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Jan 2018 - Jan 2020 </span>
                </time>
                <div className="v-icon">
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>BACHELOR OF SCIENCE</h4>
                  <p>
                    CUNY York College
                    <br />
                    <strong>Mathematics & Computer Science</strong>
                  </p>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span> Jan 2014 - Aug 2015 </span>
                </time>
                <div className="v-icon">
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>ASSOCIATE OF SCIENCE</h4>
                  <p>
                    CUNY BMCC
                    <br />
                    <strong>Mathematics</strong>
                  </p>
                </div>
              </li>
            </ul>

            <div className="tab-background">
              <ul className="v-timeline">
                <li>
                  <h3 className="v-heading resume-sub-heading">Affiliation</h3>

                  <div
                    className="v-icon"
                    data-toggle="collapse"
                    data-target="#toggle-1"
                  >
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="v-label wow fadeInRight">
                    <h4>AMERICAN MATHEMATICAL SOCIETY</h4>
                    <p>
                      Graduate Student Member
                      <br />
                      <strong>Member ID: BHAWXA</strong>
                    </p>
                  </div>
                  <div
                    className="v-icon"
                    data-toggle="collapse"
                    data-target="#toggle-1"
                  >
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="v-label wow fadeInRight">
                    <h4>SOCIETY OF INDUSTRIAL AND APPLIED MATHEMATICS</h4>
                    <p>
                      Graduate Student Member
                      <br />
                      <strong>Member ID: 020945503</strong>
                    </p>
                  </div>
                  <div
                    className="v-icon"
                    data-toggle="collapse"
                    data-target="#toggle-1"
                  >
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="v-label wow fadeInRight">
                    <h4>PHI THETA KAPPA HONOR SOCIETY</h4>
                    <p>Student Member</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tab-content hidden" id="publications">
          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading resume-sub-heading">Articles</h3>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Published: Aug 16, 2021 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    <a href="https://peerj.com/articles/cs-637/">
                      AN ADAPTIVE CRYPTOSYSTEM ON A FINITE FIELD
                    </a>
                  </h4>
                  <p align="justify" className="mb-2">
                    <b>Abstract:</b> Owing to mathematical theory and
                    computational power evolution, modern cryptosystems demand
                    ingenious trapdoor functions as their foundation to extend
                    the gap between an enthusiastic interceptor and sensitive
                    information. This paper introduces an adaptive block
                    encryption scheme. This system is based on product,
                    exponent, and modulo operation on a finite field. At the
                    heart of this algorithm lies an innovative and robust
                    trapdoor function that operates in the Galois Field and is
                    responsible for the superior speed and security offered by
                    it. Prime number theorem plays a fundamental role in this
                    system, to keep unwelcome adversaries at bay. This is a
                    self-adjusting cryptosystem that autonomously optimizes the
                    system parameters thereby reducing effort on the user’s side
                    while enhancing the level of security. This paper provides
                    an extensive analysis of a few notable attributes of this
                    cryptosystem such as its exponential rise in security with
                    an increase in the length of plaintext while simultaneously
                    ensuring that the operations are carried out in feasible
                    runtime. Additionally, an experimental analysis is also
                    performed to study the trends and relations between the
                    cryptosystem parameters, including a few edge cases.
                  </p>
                  <strong> Journal: </strong>
                  <i>PeerJ Computer Science</i>
                  <br />
                  <strong> Authors: </strong>
                  <i>Awnon Bhowmik and Unnikrishnan Menon</i>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Published: Dec 8, 2020 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    <a href="https://www.mecs-press.org/ijmsc/ijmsc-v6-n6/IJMSC-V6-N6-2.pdf">
                      AN ENCODING SCHEMATIC BASED ON COORDINATE TRANSFORMATIONS
                    </a>
                  </h4>
                  <p align="justify" className="mb-2">
                    <b>Abstract:</b> This paper outlines an encoding schematic
                    that is dependent on simple Cartesian coordinate
                    transformations. Namely, the change of axes and the rotation
                    of axes. A combination of these two is incorporated after
                    turning singular ASCII values into 2D points. This system is
                    based on multiple private keys that can also act as a
                    potential candidate for threshold cryptography.
                    Comprehensive initial testing has been performed on certain
                    parameters by altering their values within a range. Further
                    testing is required for more insights about the system. For
                    now, the list of parameters that amounts to successful
                    decryption is to be noted down for future use with this
                    system.
                  </p>
                  <strong> Journal: </strong>
                  <i>
                    International Journal of Mathematical Sciences and Computing
                  </i>
                  <br />
                  <strong> Authors: </strong>
                  <i>Awnon Bhowmik</i>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Published: Jul 7, 2020 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    <a href="https://www.ijcaonline.org/archives/volume176/number36/bhowmik-2020-ijca-920479.pdf">
                      MES – MODERN ENCRYPTION STANDARD
                    </a>
                  </h4>
                  <p align="justify" className="mb-2">
                    <b>Abstract:</b> As mathematical theory has evolved and
                    computing capabilities have improved, what initially seemed
                    to be adequately difficult trapdoor functions, were deemed
                    not to be later. In this paper, a new block-encryption
                    scheme named Modern Encryption Standard (MES) is proposed
                    based on the multiple concepts arising from number theory
                    for a highly secure and fast cryptosystem that can be
                    considered as an alternative to the existing systems. This
                    is a block cipher like AES, but the inherent algorithm is
                    quite different. The security of the proposed MES algorithm
                    stands on the fundamentals of the Chinese Remainder Theorem,
                    Cantor Pairing Function and the Prime Number Theorem for
                    creating an ingenious trapdoor function. Breaking this
                    algorithm proves to be quite a daunting obstacle to overcome
                    for an unwelcome interceptor.
                  </p>
                  <strong> Journal: </strong>
                  <i>International Journal of Computer Applications</i>
                  <br />
                  <strong> Authors: </strong>
                  <i> Awnon Bhowmik and Unnikrishnan Menon</i>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Published: Jun 18, 2020 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    <a href="https://arxiv.org/pdf/2008.12645.pdf">
                      DRAGON CRYPTO - AN INNOVATIVE CRYPTOSYSTEM
                    </a>
                  </h4>
                  <p align="justify" className="mb-2">
                    <b>Abstract:</b> In recent years cyber-attacks are
                    continuously developing. This means that hackers can find
                    their way around the traditional cryptosystems. This calls
                    for new and more secure cryptosystems to take their place.
                    This paper outlines a new cryptosystem based on the dragon
                    curve fractal. The security level of this scheme is based on
                    multiple private keys, that are crucial for effective
                    encryption and decryption of data. This paper discusses, how
                    core concepts emerging from fractal geometry can be used as
                    a trapdoor function for this cryptosystem.
                  </p>
                  <strong> Journal: </strong>
                  <i> International Journal of Computer Applications</i>
                  <br />
                  <strong> Authors: </strong>
                  <i> Awnon Bhowmik and Unnikrishnan Menon</i>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Published: Jun 18, 2020 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    <a href="https://www.ijcaonline.org/archives/volume176/number29/bhowmik-2020-ijca-920320.pdf">
                      ENHANCING THE NTRU CRYPTOSYSTEM
                    </a>
                  </h4>
                  <p align="justify" className="mb-2">
                    <b>Abstract:</b> NTRU is an open-source public key
                    cryptosystem that uses lattice-based cryptography to encrypt
                    and decrypt data. Unlike other popular public-key
                    cryptosystems, it is resistant to attacks using Shor's
                    Algorithm and its performance has been shown to be
                    significantly greater. This paper talks about how Koblitz
                    encoding from Elliptic Curve Cryptography (ECC) can be used
                    to convert each character in a dataset to a point on an
                    elliptic curve. A sum of squares analogy is pitted against
                    the cantor pairing function to turn the point to a single
                    number, which is converted to a sequence of coefficients in
                    ℤ. A polynomial is then generated for each of these
                    characters. Then the polynomial is reduced, and then shown
                    that choosing appropriate parameters for the cryptosystem
                    can make it highly secure and that the decryption algorithm
                    turns out taking linear time. Since each character is
                    represented by its own polynomial, it increases obscurity
                    thereby increasing the complexity for decryption and thus
                    the security level. A form of data compression has also been
                    implemented and it has been tested whether data compression
                    and expansion during the encryption-decryption process
                    results in original data with no or minimal loss.
                  </p>
                  <strong> Journal: </strong>
                  <i> International Journal of Computer Applications</i>
                  <br />
                  <strong> Authors: </strong>
                  <i> Awnon Bhowmik and Unnikrishnan Menon</i>
                </div>
              </li>
            </ul>
          </div>

          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading resume-sub-heading">Conferences</h3>
              </li>
              <li>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <time className="v-time wow fadeInLeft">
                  <span>Coming Soon</span>
                </time>
                <div className="v-label wow fadeInRight">
                  <h4>COMING SOON</h4>
                  <p>COMING SOON</p>
                  <p>COMING SOON</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading resume-sub-heading">Presentations</h3>
              </li>
              <li>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <time className="v-time wow fadeInLeft">
                  <span>November 2019</span>
                </time>
                <div className="v-label wow fadeInRight">
                  <h4>
                    Interior Point Algorithm for the Linear Programming Problem
                  </h4>
                  <p>
                    <strong>Course:</strong> Operations Research
                  </p>
                  <p>
                    <strong>Organizer:</strong> CUNY York College
                  </p>
                </div>

                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <time className="v-time wow fadeInLeft">
                  <span>March 2015</span>
                </time>
                <div className="v-label wow fadeInRight">
                  <h4>
                    The Electrolytic Properties of Protein in the Cell Membrane
                    Channel
                  </h4>
                  <p>
                    <strong>Organizer:</strong> CUNY CSTEP
                  </p>
                  <p>
                    <strong>Venue:</strong> CUNY BMCC
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="tab-content hidden" id="boardmember">
          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading">&nbsp;</h3>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Nov 27, 2019 - Dec 3, 2019 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>ANALYSIS OF SEARCHING & SORTING ALGORITHMS </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Used files with varying number of inputs, applied linear
                      and binary search. Analyzed the execution time for
                      different inputs and proved algebraically and graphically
                      - the time complexity of those algorithms{" "}
                    </li>
                    <li>
                      Implemented various common sorting algorithms such as
                      bubble sort, merge sort, etc. on files containing varying
                      amount of data. Analyzed the execution time for different
                      inputs and proved algebraically and graphically - the time
                      complexity of those algorithms{" "}
                    </li>
                  </ul>
                  <strong> Advisor: Dr. Louis D`Alotto </strong> <br />
                  Department of Mathematics & Computer Science, CUNY York
                  College
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Sep 9, 2019 - Sep 26, 2019 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>BATTERY POWERED CAR PROBLEM </h4>
                  <ul className="my-3">
                    <li>
                      Given a pile of n batteries assuming a mileage of k
                      kilometers per battery, derived a recursive function that
                      models the effective distance traveled by the car since it
                      can only carry one spare battery in it along with the
                      other that powers its engine.
                    </li>
                    <li>
                      Came up with two different algorithms and implemented
                      using C++ code, to demonstrate the validity of the
                      mathematical perspective. Illustrated with graphs to
                      further support the claims.
                    </li>
                  </ul>
                  <strong> Advisor: Dr. Louis D`Alotto </strong>
                  <br />
                  Department of Mathematics & Computer Science, CUNY York
                  College
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span> Sep 2014 - Aug 2015 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    CSTEP RESEARCH PROJECT: THE ELECTROLYTIC PROPERTIES OF
                    PROTEIN IN THE CELL MEMBRANE CHANNEL
                  </h4>
                  <ul className="my-3">
                    <li>
                      Studied the Gramicidin A ion channel of the bacillus
                      brevis bacteria cell, containing the major amino acid
                      Tryptophan.
                    </li>
                    <li>
                      Modeled and conjectured that the conformational change in
                      the Tryptophan produces changes in the cell membrane, thus
                      behaving like a capacitive dielectric thereby influencing
                      the ion current.
                    </li>
                    <li>
                      Applied classical physics to a biological problem to
                      mathematically model the ion current under the influence
                      of a variable membrane dielectric, as a function of amino
                      acid conformation.{" "}
                    </li>
                  </ul>
                  <strong> Advisor: Dr. Brett A. Sims </strong>
                  <br />
                  Department of Mathematics, CUNY BMCC
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span> Nov 2014 - Dec 2014 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>PROJECT: SAFE DISTANCE </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Modeled the relationship between the initial speed of two
                      cars, the reaction time and braking distance, relating to
                      "average car lengths" as the unit of measure – essentially
                      proving the "Two Second Rule" implemented by New York City
                      Department of Motor Vehicles (NY DMV){" "}
                    </li>
                    <li>
                      Used classical probability and graphs to determine that
                      this rule may change during weathers that hinder
                      visibility, and that the distance between two cars must be
                      greater in monsoon and winter than in summer – before the
                      brakes are applied to avoid collision.{" "}
                    </li>
                  </ul>
                  <strong> Advisor: Dr. David Waldman </strong> <br />
                  Department of Science, CUNY BMCC
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content hidden" id="impacts">
          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading">&nbsp;</h3>
              </li>
              <li>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>QUORA </h4>

                  <ul className="my-3">
                    <li>
                      {" "}
                      Contributed to about 3500 answers related to mathematics
                      and computer science.
                    </li>
                    <li>
                      Dubbed the Top Writer in Calculus, Integration, and many
                      other topics, numerous times.{" "}
                    </li>
                    <li>
                      Answers became part of Quora Digest, multiple times.{" "}
                    </li>
                    <li>
                      Impacted people all around the world, garnering a combined
                      leadership of 4000 followers.{" "}
                    </li>
                    <li>Praised by experts in mathematics​. </li>
                  </ul>
                </div>
              </li>
              <li>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>MATHEMATICS STACK EXCHANGE </h4>

                  <ul className="my-3">
                    <li> Contributed 50+ answers to the community. </li>
                    <li>
                      Used this platform to learn about numerous books and
                      problem-solving techniques.{" "}
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-11"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>HACKERRANK </h4>

                  <ul className="my-3">
                    <li> C++ & Python - Gold Badge </li>
                    <li>Problem Solving - Silver Badge </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content hidden" id="conferences">
          <div className="tab-background">
            <ul className="v-timeline">
              <ul className="v-timeline">
                <li>
                  <h3 className="v-heading">&nbsp;</h3>
                </li>
                <li>
                  <time className="v-time wow fadeInLeft">
                    <span>Spring 2015 </span>
                  </time>
                  <div className="v-icon">
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="v-label wow fadeInRight">
                    <h4>ERNESTO MALAVE MERIT SCHOLARSHIP </h4>
                    <p>
                      <b> University Student Senate (USS) of CUNY</b>
                    </p>
                  </div>
                </li>
                <li>
                  <time className="v-time wow fadeInLeft">
                    <span> September 2015 </span>
                  </time>
                  <div className="v-icon">
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="v-label wow fadeInRight">
                    <h4>GUTTMAN TRANSFER SCHOLARSHIP </h4>
                    <p>
                      <b> Stella and Charles Guttman Foundation</b>
                    </p>
                  </div>
                </li>
                <li>
                  <time className="v-time wow fadeInLeft">
                    <span> July 2011 </span>
                  </time>
                  <div className="v-icon">
                    <i className="fa fa-plus"></i>
                  </div>
                  <div className="v-label wow fadeInRight">
                    <h4>INTER UNIVERSITY MATH OLYMPIAD CHAMPION </h4>
                    <p>
                      <b> University of Dhaka, Bangladesh</b>
                    </p>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="tab-content hidden" id="archaeology">
          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading resume-sub-heading">Teaching</h3>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Jan 2022 - Present</span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>GRADUATE TEACHING GRADER</h4>
                  <ul className="my-3">
                    <li>
                      Assisting a faculty member in the noninstructional aspects
                      of course teaching
                    </li>
                    <li>
                      Provides assistance to the students as required by the
                      instructor
                    </li>
                    <li>Running Office Hours in Zoom</li>
                    <li>Grading Quiz Papers and Test Papers</li>
                    <li>Providing feedback to the students</li>
                    <li>
                      Inputting grades into WebcoursesUCF after grading and
                      answering queries from students
                    </li>
                  </ul>
                  <strong>
                    Department of Mathematics, University of Central Florida
                  </strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Jan 2022 - Present</span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>GRADUATE TEACHING ASSISTANT</h4>
                  <ul className="my-3">
                    <li>
                      Assists students in setting up their accounts with online
                      mathematics platform such as ALEKS, WebAssign, etc.
                    </li>
                    <li>
                      Provides assistance to the students as required by the
                      instructor
                    </li>
                    <li>
                      Provides students with reading and writing material such
                      as pen and paper, if requested
                    </li>
                    <li>
                      Be available to answer students' queries during Open Lab
                      sessions
                    </li>
                    <li>
                      Ocassionally provides students with short lectures if
                      requested by the instructor.
                    </li>
                    <li>
                      Suggests a variety of resources such as videos, books, and
                      other materials
                    </li>
                    <li>
                      Performs proctoring duties during exam or testing hours if
                      needed
                    </li>
                    <li>
                      Adheres to the policies set by the mathematics lab and
                      enforce the students to follow suit
                    </li>
                  </ul>
                  <strong>
                    Mathematics Assistance &amp; Learning Lab (MALL), University
                    of Central Florida
                  </strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Oct 2020 - Present </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>SUBSTITUTE TEACHER </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Perform instructional and classroom management processes
                      for teachers for one or more days.
                    </li>
                    <li>
                      Perform instructional and classroom management processes
                      for teachers for one or more days.
                    </li>
                    <li>
                      Oversee students outside of the classroom including in the
                      hallways and cafeteria.{" "}
                    </li>
                    <li>Take attendance and document daily notes. </li>
                  </ul>
                  <strong>NYC Department of Education</strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Jan 2020 - May 2020 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>MATHEMATICS TUTOR - ASAP PROGRAM </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Tutored around 30 college students each semester in
                      subjects of Algebra, Quantitative Reasoning, Calculus,
                      Differential Equations, and Physics to help them
                      understand concepts and solve problems.{" "}
                    </li>
                    <li>
                      Served as a liaison between professors and students and
                      provided the students with updates regarding their
                      progress and areas of challenge.{" "}
                    </li>
                  </ul>
                  <strong>Department of Mathematics, CUNY BMCC</strong>
                </div>
              </li>

              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Sep 2017 - Aug 2019 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>ADJUNCT CLT </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Teach Calculus I in accordance to the professor’s
                      syllabus. Assist students with setting up learning
                      exercises with the use of the software Maple and other
                      laboratory materials. Provid extensive visual
                      understanding of the theory taught in class.
                    </li>
                    <li>
                      Use current technology to enhance educational
                      eﬀectiveness, including Maple and other online resources
                      such as Desmos. Evaluate students’ progress in attaining
                      educational goals and objectives.{" "}
                    </li>
                    <li>
                      Frequently meet in person or communicate via email with
                      course instructor to discuss students’ instructional
                      programs.{" "}
                    </li>
                    <li>
                      Track student assignments, attendance and test scores and
                      enter into online database to provide real-time progress
                      monitoring.{" "}
                    </li>
                  </ul>
                  <strong>Department of Mathematics, CUNY BMCC</strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Jan 2017 - Aug 2019 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>LEAD SUPPLEMENTAL INSTRUCTOR </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Attended all classes for the assigned class and took notes
                      in preparation for upcoming supplemental instructor
                      sessions.
                    </li>
                    <li>
                      Facilitated student learning and helped students better
                      understand concepts or applications of course content{" "}
                    </li>
                    <li>
                      Frequently meet in person or communicate via email with
                      course instructor to discuss students’ instructional
                      programs.{" "}
                    </li>
                    <li>
                      Supported students and assisted them in gaining effective
                      study skills by utilize diverse learning strategies and
                      maximizing their potential for their academic success.{" "}
                    </li>
                    <li>
                      Provided bi-weekly small group sessions covering the
                      course content{" "}
                    </li>
                    <li>
                      Prepared structured SI sessions to review and reinforce
                      difficult material introduced in class. In addition to
                      group study and discussion, sometimes it included
                      administering practice quizzes or teaching organizational
                      and study practices to enhance mystery of the coursework
                      and subject matter.{" "}
                    </li>
                  </ul>
                  <strong>Department of Mathematics, CUNY BMCC</strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Dec 2015 - Jan 2018</span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>MATHEMATICS & PHYSICS TUTOR</h4>
                  <ul className="my-3">
                    <li>
                      Tutored students ranging from 5th grade to undergraduate
                      level on various mathematics and science courses.
                    </li>
                    <li>
                      Reviewed classroom or curricula topics and assignments.
                    </li>
                    <li>
                      Assisted students with homework, projects, test
                      preparation, papers, research and other academic tasks.
                    </li>
                    <li>
                      Worked with students to help them understand key concepts,
                      especially those learned in the classroom.
                    </li>
                  </ul>
                  <strong>Varsity Tutors</strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Jun 2014 - Jun 2015 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>
                    MATHEMATICS INSTRUCTOR - BMCC IMMERSION PROJECT (SUMMER
                    PROGRAM){" "}
                  </h4>
                  <ul className="my-3">
                    <li>
                      Conducted classes of 10 - 20 students and instructed them
                      on various courses such as
                      <ul>Basic Arithmetic and Algebra (MAT 012)</ul>
                      <ul>Mathematics Literacy (MAT 041)</ul>
                      <ul>Elementary Algebra (MAT 051)</ul>
                    </li>
                    <li>
                      The program gave students the opportunity to redo the
                      material of a course they didn’t pass so that they can
                      complete the course. The Immersion workshops also provide
                      incoming students with an opportunity to enroll in one
                      course to reduce or eliminate the number of basic skills
                      courses they would be required to take in the fall and or
                      spring semester.
                    </li>
                    <li>
                      The program also gave continuing students who were close
                      to passing a basic skills course an opportunity to work
                      with a tutor in a small group or one-on-one setting. Upon
                      completion of the tutorial program, students are able to
                      test in order to satisfy their basic skills requirement
                      prior to the fall or spring semester.
                    </li>
                  </ul>
                  <strong>Department of Mathematics, CUNY BMCC</strong>
                </div>
              </li>
              <li>
                <time className="v-time wow fadeInLeft">
                  <span>Mar 2014 - Aug 2015 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>MATHEMATICS TUTOR - MATH LAB </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Tutored around 30 college students each semester in
                      subjects of Algebra, Quantitative Reasoning, Calculus,
                      Differential Equations, and Physics to help them
                      understand concepts and solve problems.
                    </li>
                    <li>
                      Served as a liaison between professors and students and
                      provided the students with updates regarding their
                      progress and areas of challenge.{" "}
                    </li>
                  </ul>
                  <strong>Department of Mathematics, CUNY BMCC</strong>
                </div>
              </li>
            </ul>
          </div>
          <div className="tab-background">
            <ul className="v-timeline">
              <li>
                <h3 className="v-heading resume-sub-heading">Others</h3>
                <time className="v-time wow fadeInLeft">
                  <span>Sep 2019 - Mar 2020 </span>
                </time>
                <div
                  className="v-icon"
                  data-toggle="collapse"
                  data-target="#toggle-6"
                >
                  <i className="fa fa-plus"></i>
                </div>
                <div className="v-label wow fadeInRight">
                  <h4>COLLEGE ASSISTANT </h4>
                  <ul className="my-3">
                    <li>
                      {" "}
                      Patched software and installed new versions to eliminate
                      security problems and protect data.
                    </li>
                    <li>
                      Removed and replaced malfunctioning components to correct
                      hardware problems.{" "}
                    </li>
                    <li>Supported all computer lab operations. </li>
                    <li>
                      Handled lab equipment, cleaned keyboards, monitors and
                      disk drives.{" "}
                    </li>
                    <li>
                      Explained technical information in clear terms to
                      non-technical individuals to promote better understanding.{" "}
                    </li>
                  </ul>
                  <strong>
                    Department of Mathematics & Computer Science, CUNY York
                    College
                  </strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
