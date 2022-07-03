import * as React from 'react';

import * as styles from './cv.module.scss';

const Skill = (props) => {
  const rem = 100 - props.progress
  return (
    <>
      <div className={[ styles.skills, styles.list ].join(' ')}>
        <h5>{props.skill}</h5>
        <div className={ styles.measurebar }>
          <div style={{ 'width': `${props.progress}%` }}></div>
          <div style={{ 'width': '0', 'display': `${rem == 0 ? 'none' : rem}` }}></div>
        </div>
        <div className={ styles.quality }>{props.level}</div>
      </div>
    </>
  )
}


const Experience = (props) => {
  return (
    <>
      <div className={ styles.table }>
        <div className={ styles.tableCell }>
          {
            props.date ?
              props.date
              .split('-')
              .map((e, i) => i <= 0 ? `${e} -` : `${e}`) :
              ''
          }
        </div>
        <div className={ styles.tableCell }>
          <div className={ styles.bold }>{props.title}</div>
          <div>{props.company}</div>
          <div>
            <ul>
              {props.bullets.map((e, i) => <li key={`${props.title}-${props.company}-${i}`}>{e}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

const SidebarSection = (props) => {
  return (
    <>
      <div>
        <h3>{props.title}</h3>
        {props.children}
      </div>
    </>
  )
}

const Section = (props) => {
  return (
    <>
      <section>
        <h3>{props.title}</h3>
        {props.children}
      </section>
    </>
  )
}

const Page = (props) => {
  return (
    <>
      <div className={ styles.page }>
        <div className={[ styles.p1, styles.pageContent ].join(' ')}>
          <div className={ styles.contentContainer }>
            <div className={ styles.sidebar }>
              <header>
                <div className={ styles.profilePic }></div>
                <h1>Jonathan Mlacker</h1>
                <h2>Software Developer</h2>
              </header>
              <SidebarSection title={'Personal Info'}>
                <div>
                  <h5>US Citizen</h5>
                  <h5>Phone</h5>
                  <div><a href="tel:+573123921914">+57 (312) 392-1914</a></div>
                  <h5>E-mail</h5>
                  <div><a href="mailto:jmlacker@gmail.com">jmlacker@gmail.com</a></div>
                  <h5>Website</h5>
                  <div><a href="https://gammawatt.github.io/">gammawatt.github.io</a></div>
                </div>
              </SidebarSection>
              <SidebarSection title={'Skills'}>
                <Skill
                  skill={'NodeJs'}
                  level={"Advanced"}
                  progress={75}
                />
                <Skill
                  skill={'ReactJs'}
                  level={'Advanced'}
                  progress={70}
                />
                <Skill
                  skill={'TypeScript'}
                  level={'Advanced'}
                  progress={65}
                />
                <Skill
                  skill={'HTML'}
                  level={'Expert'}
                  progress={100}
                />
                <Skill
                  skill={'CSS'}
                  level={'Expert'}
                  progress={100}
                />
                <Skill
                  skill={'Python'}
                  level={'Experienced'}
                  progress={60}
                />
                <Skill
                  skill={'SQL'}
                  level={'Experienced'}
                  progress={65}
                />
                <Skill
                  skill={'Golang'}
                  level={'Experienced'}
                  progress={60}
                />
                <Skill
                  skill={'Docker'}
                  level={'Experienced'}
                  progress={60}
                />
                <Skill
                  skill={'Kubernetes'}
                  level={'Beginner'}
                  progress={30}
                />
              </SidebarSection>
            </div>
            <main className={ styles.content }>
              <section className={ styles.profile }>
                <p>
                  American software engineer residing in Columbia with an expertise in full stack web development and systems administration, delivering innovative technical solutions to expedite and reliably magnify organizational success. Constantly seeking to improve inefficient workflows and migrate to modern frameworks and systems while providing effective communication across organizations. Highly successful in achieving stakeholder satisfaction and perceptive to understanding, and delivering on, user needs and requirements. Bilingual at a native level in English and Spanish. Available to work remotely from abroad or onsite in the United States.
                </p>
              </section>
              <section>
                <h3>Experience</h3>
                <Experience
                  date={'2022 - present'}
                  title={'Technical Solutions Manager & Consulting Engineer'}
                  company={'Sprwt'}
                  bullets={[
                    'Developed custom websites and API-based modules according to customer specifications with a 5 day turn around, in JavaScript, HTML, CSS, and PHP; features included custom website behaviors, widgets, and animations.',
                    'Developed custom modules on the backend to integrate with internal content management system and implemented new features independent of any existing frameworks or libraries (aside from JavaScript and Bootstrap for standardization practices).',
                    'Maintained high levels of team synergy, morale, and satisfaction.',
                    'Trained team members and new hires in system features, onboarding procedures, and customer success and satisfaction',
                    'Creatively adapted existing systems and offerings to resolve customer needs.'
                  ]}
                />
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2018 -</div>
                    <div>2022</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>IT Director</div>
                    <div>Iglesia Cristiana Cuadrangular Central -- Fundacion Alice de Perez</div>
                    <div>
                      <ul>
                        <li>Built in-house donation registration system and certificate generator which, by way of strategic UI design, reduced user error by 80%. Tool created using Golang and SQLite3.</li>
                        <li>Designed and developed offline payment registry solution, using PHP, Apache2, and SQLite3; reducing the time-commitment required to perform data-entry tasks from 5 hours to 2 hours. Later upgraded to NodeJs.</li>
                        <li>Prototyped classroom management application with responsive mobile-first design, and extensible server interface.</li>
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
                    <div className={ styles.bold }>B.Sc in Security and Risk Analysis - Cybersecurity, Penn State University</div>
                    <div>
                      <ul>
                        <li>Pursued passion for information security and application of related tools.</li>
                        <li>Acquired orientation for intelligently distributing resources to maximize asset security and minimize related costs.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
              <section>
                <h3>Projects</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }></div>
                  <div className={ styles.tableCell }>
                    <ul>
                      <li>UPnP Server in Python, as an experiment to view application responses to packets broadcast over a multicast address.</li>
                      <li>SOCKS5 Proxy in Python for sniffing network packets being sent to and from my machine.</li>
                      <li>Developed functional spellchecker in Rust, which leverages a symmetric deletion strategy.</li>
                      <li>Animated two 3D solid objects in Python, using OpenGL Python bindings.</li>
                    </ul>
                  </div>
                </div>
              </section>
              {/* <section>
                <h3>Additional Skills</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }></div>
                  <div className={ styles.tableCell }>
                    <div><strong>Languages:</strong> Natively fluent in Spanish</div>
                    <div><strong>Additional tools:</strong>Git, Make, VS Code, VIM, NoSQL</div>
                    <div><strong>Additional technologies:</strong> Rust, C, Clojure, Java</div>
                  </div>
                </div>
                </section> */}
            </main>
          </div>
        </div>
      </div>
    </>
  )
}

const CV = () => (
  <div className={ styles.documentContainer }>
    <div className={ styles.document }>
      <Page />
      <Page />
    </div>
  </div>
);

export default CV;

