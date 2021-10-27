import * as React from 'react';

import * as styles from './cv.module.scss';

const CV = () => (
  <div className={ styles.documentContainer }>
    <div className={ styles.document }>
      <div className={ styles.page }>
        <div className={[ styles.p1, styles.pageContent ].join(' ')}>
          <div className={ styles.contentContainer }>
            <div className={ styles.sidebar }>
              <header>
                <div className={ styles.profilePic }></div>
                <h1>Jonathan Mlacker</h1>
                <h2>Software Developer</h2>
              </header>
              <div>
                <h3>Personal Info</h3>
                <div>
                  <h5>US Citizen</h5>
                  <h5>Phone</h5>
                  <div><a href="tel:+573123921914">+57 (312) 392-1914</a></div>
                  <h5>E-mail</h5>
                  <div><a href="mailto:jmlacker@gmail.com">jmlacker@gmail.com</a></div>
                  <h5>Website</h5>
                  <div><a href="https://gammawatt.github.io/">gammawatt.github.io</a></div>
                </div>
              </div>
              <div>
                <h3>Soft Skills</h3>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Bilingual (EN, ES)</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '100%' }}></div>
                    <div style={{ 'width': '0', 'display': 'none' }}></div>
                  </div>
                  <div className={ styles.quality }>Native</div>
                  <h5>Interpersonal Skills</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '100%' }}></div>
                    <div style={{ 'width': '0', 'display': 'none' }}></div>
                  </div>
                  <div className={ styles.quality }>Expert</div>
                  <h5>Troubleshooting / Problem Solving</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '100%' }}></div>
                    <div style={{ 'width': '0', 'display': 'none' }}></div>
                  </div>
                  <div className={ styles.quality }>Expert</div>
                  <h5>Presentations / Speaking</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '80%' }}></div>
                    <div style={{ 'width': '20%' }}></div>
                  </div>
                  <div className={ styles.quality }>Advanced</div>
                </div>
              </div>
              <div>
                <h3>Technical Skills</h3>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Scripting</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '70%' }}></div>
                    <div style={{ 'width': '30%' }}></div>
                  </div>
                  <div className={ styles.quality }>Advanced</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Python</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '60%' }}></div>
                    <div style={{ 'width': '40%' }}></div>
                  </div>
                  <div className={ styles.quality }>Experienced</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>SQL</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '65%' }}></div>
                    <div style={{ 'width': '35%' }}></div>
                  </div>
                  <div className={ styles.quality }>Experienced</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Kubernetes</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '20%' }}></div>
                    <div style={{ 'width': '80%' }}></div>
                  </div>
                  <div className={ styles.quality }>Beginner</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Security</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '45%' }}></div>
                    <div style={{ 'width': '55%' }}></div>
                  </div>
                  <div className={ styles.quality }>Experienced</div>
                </div>
              </div>
            </div>
            <main className={ styles.content }>
              <section className={ styles.profile }>
                <p>Versatile and results driven system administrator with 10 years experience in maintenance and management of systems, looking to transition into software development. Dedicated to user satisfaction with focused delivery of reliable solutions.  Designed and implemented applications for employees; some of which reduced user error by 87% or more and issue reports.</p>
              </section>
              <section>
                <h3>Experience</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2017-02 -</div>
                    <div>present</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>IT Director</div>
                    <div>Iglesia Cristiana Cuadrangular Central - ICCC <br /> Barrancabermeja, Santander</div>
                    <div>
                      <ul>
                        <li>Built in-house donation registration system and certificate generator which, by way of strategic UI design, reduced user error by 80%. Tool created using Golang and SQLite3.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2014-06 -</div>
                    <div>present</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>IT Director</div>
                    <div>Fundacion Alice de Perez - Colegio de Las Americas <br /> Barrancabermeja, Santander</div>
                    <div>
                      <ul>
                        <li>Designed and developed offline payment registry solution, using PHP, Apache2, and SQLite3; reducing the time-commitment required to perform data-entry tasks from 5 hours to 2 hours. Later upgraded to NodeJs.</li>
                        <li>Prototyped classroom management application with responsive mobile-first design, and extensible server interface.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2011-08 -</div>
                    <div>present</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>Software Developer Experience</div>
                    <div>Various</div>
                    <div>
                      <ul>
                        <li>Developed functional spellchecker in Rust, which leverages a symmetric deletion strategy.</li>
                        <li>Animated two 3D solid objects in Python, using OpenGL Python bindings.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            <section>
              <h3>Education</h3>
              <div className={ styles.table }>
                <div className={ styles.tableCell }>
                  <div>2014 -</div>
                  <div>2018</div>
                </div>
                <div className={ styles.tableCell }>
                  <div className={ styles.bold }>BS in Security and Risk Analysis - Cybersecurity, Penn State University</div>
                  <div>
                    <ul>
                      <li>Pursued passion about information security and application of related tools.</li>
                      <li>Acquired orientation for intelligently distributing resources to maximize asset security and minimize related costs.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
              <section>
                <h3>Additional Activities</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }></div>
                  <div className={ styles.tableCell }>
                    <ul>
                      <li>Volunteer at community center to lead weekly food brigades for the disadvantaged.</li>
                      <li>English tutoring for professionals and students.</li>
                      <li>Maintain homelab for testing new tools, concepts, and ideas; while also providing various services over the network.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <h3>Additional Skills</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }></div>
                  <div className={ styles.tableCell }>
                    <ul>
                      <li>Languages: Python, Clojure, Rust, Go, C, Java, JavaScript / NodeJs, PHP, SQL</li>
                      <li>Frameworks: ExpressJs, VueJs, ReactJs, Rocket, Flask</li>
                      <li>Tools: Docker, Qemu / KVM / LibVirt, Gradle, Maven, Gulp, Make, CMake, Pandas, Git</li>
                    </ul>
                  </div>
                </div>
              </section>
            </main>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CV;

