import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '../../components/layout';

const Notes = () => {
  return (
    <Layout>
      <div>
        <ul>
          <li>
            <details>
              <summary>Philosophies</summary>
              <p>
                <ul>
                  <li>
                    Usable is better than done, done is better than good, and 
                    good is better than perfect.
                  </li>
                </ul>
              </p>
            </details>
          </li>
          <li>
            <details>
              <summary>Design Philosophy</summary>
              <p>
                <ul>
                  <li>
                    An item must be useable in standalone execution 
                    as well as be usable as a module / API. 
                  </li>
                  <li>
                    Like what Microsoft appears to do. Anything done
                    today will be wrong tomorrow.
                    <ul>
                      <li>
                        We run every interaction via interfaces, 
                        traits, and generics, and pad those interfaces 
                        with 2 or 3 degrees of indirection. 
                        a -> b -> c -> d. Think: cat, grep, less, strings, USB, 
                        Wall outlets, HTTP, iprogramming language designs (and 
                        how keywords are defined and how you use them in the
                        language), etc...
                      </li>
                      <li>
                        Interfaces do not all need to be tightly defined 
                        from the outset. Reserved bytes and namespaces are
                        created so we have plenty of options for filling in
                        extra functions and endpoints later. This is how
                        governments have handled managing and designating
                        the limited radio frequency ranges.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Don't over-specify. Conditions on their own should be 
                    absolute; no redundancy nor repetition should be needed. A 
                    properly written answer for the fizz-buzz test would be a 
                    good example of this.
                  </li>
                  <li>
                    An extremely telling sign of a well-defined module or 
                    function, is that it can be comfortably used in unforeseen 
                    ways, without changes, and still produce correct output and
                    produce no errors, thereby deriving new functionality.
                  </li>
                  <li>
                    Functions should not require many parameters. If many
                    parameters are needed, or desired, a struct type or class
                    instance containing those parameters should be used instead.
                  </li>
                  <li>
                    Functions should tend towards being generically defined,
                    rather than being too type-specific, unless the nature of
                    the process requires that parameters match a specific type.
                    But, regardless of implementation, a function's purpose
                    and usage should still be clear from the function signature.
                  </li>
                  <li>
                    Functions should not try to correct incorrect input and bad
                    usage.
                  </li>
                  <li>
                    Prefer interfaces and generics over strict types
                  </li>
                </ul>
              </p>
            </details>
          </li>
          <li>Setup guides and checklists</li>
          <li>Troubleshooting</li>
          <li>Computer Science topics, theory, and application</li>
          <li>Cheatsheets</li>
          <li>Design Patterns</li>
          <li>Challenges and solutions</li>
          <li>Style guides</li>
          <li>Coding paradigms</li>
          <li>List of tools and programming languages</li>
        </ul>
        <p>
          <Link to="proglangs">Programming Languages</Link>
        </p>
        <p>
          <Link to="frameworks">Frameworks</Link>
        </p>
        <p>
          <Link to="cloud">Cloud</Link>
        </p>
        <p>
          <Link to="projects">Projects</Link>
        </p>
        <p>
          <h3>Current Primary Focus</h3>
          <ul>
            <li>Reactjs</li>
            <li>TypeScript</li>
            <li>DevOps</li>
            <li>Nodejs</li>
            <li>SQL</li>
            <li>AWS</li>
            <li>Golang</li>
          </ul>
          <h3>To Do, Because that's what the jobs are asking for</h3>
          <ul>
            <li>Agile, SCRUM, extreme programming (XP), TDD, BDD, unit testing, and others. Somehow give them examples of that experience.</li>
            <li>AWS... for some reason, everybody uses AWS, and nothing else...</li>
            <li>eCommerce Store</li>
            <li>DevOps (Super important)</li>
            <li>CI/CD</li>
            <li>A/B testing</li>
            <li>User Analytics</li>
            <li>Memcached (caching)</li>
            <li>Monitoring system performance</li>
            <li>Designing for scale and massively scaling your applications</li>
            <li>Kubernetes, cloud, docker, etc... for scaling applications</li>
            <li>SDLC, from conception to architectually sound systems</li>
            <li>Saelor</li>
            <li>Android</li>
            <li>Java</li>
            <li>C# .NET</li>
            <li>TypeScript</li>
            <li>Software Architecting</li>
            <li>Integration and integration testing</li>
            <li>Node.js</li>
            <li>Ruby on Rails</li>
            <li>Golang</li>
            <li>Shopify</li>
            <li>Wordpress</li>
          </ul>
        </p>
        <Link to="/">To Homepage</Link>
      </div>
    </Layout>
  );
};

export default Notes;
