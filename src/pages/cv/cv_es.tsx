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
                <h2>Ingeniero de Software</h2>
              </header>
              <div>
                <h3>Info Personal</h3>
                <div>
                  <h5>Ciudadano EEUU</h5>
                  <h5>Teléfono</h5>
                  <div><a href="tel:+573123921914">+57 (312) 392-1914</a></div>
                  <h5>Correo Electrónico</h5>
                  <div><a href="mailto:jmlacker@gmail.com">jmlacker@gmail.com</a></div>
                  <h5>Página Web</h5>
                  <div><a href="https://gammawatt.github.io/">gammawatt.github.io</a></div>
                </div>
              </div>
              <div>
                <h3>Habilidades Comportamentales</h3>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Bilingüe (EN, ES)</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '100%' }}></div>
                    <div style={{ 'width': '0', 'display': 'none' }}></div>
                  </div>
                  <div className={ styles.quality }>Nativo</div>
                  <h5>Habilidades Interpersonales</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '100%' }}></div>
                    <div style={{ 'width': '0', 'display': 'none' }}></div>
                  </div>
                  <div className={ styles.quality }>Experto</div>
                  <h5>Troubleshooting / Resolución de Problemas</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '100%' }}></div>
                    <div style={{ 'width': '0', 'display': 'none' }}></div>
                  </div>
                  <div className={ styles.quality }>Experto</div>
                  <h5>Presentaciones / Comunicación</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '80%' }}></div>
                    <div style={{ 'width': '20%' }}></div>
                  </div>
                  <div className={ styles.quality }>Avanzado</div>
                </div>
              </div>
              <div>
                <h3>Habilidades Técnicas</h3>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Scripting</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '70%' }}></div>
                    <div style={{ 'width': '30%' }}></div>
                  </div>
                  <div className={ styles.quality }>Avanzado</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Python</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '60%' }}></div>
                    <div style={{ 'width': '40%' }}></div>
                  </div>
                  <div className={ styles.quality }>Competente</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>SQL</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '65%' }}></div>
                    <div style={{ 'width': '35%' }}></div>
                  </div>
                  <div className={ styles.quality }>Competente</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Kubernetes</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '20%' }}></div>
                    <div style={{ 'width': '80%' }}></div>
                  </div>
                  <div className={ styles.quality }>Hábil</div>
                </div>
                <div className={[ styles.skills, styles.list ].join(' ')}>
                  <h5>Seguridad</h5>
                  <div className={ styles.measurebar }>
                    <div style={{ 'width': '45%' }}></div>
                    <div style={{ 'width': '55%' }}></div>
                  </div>
                  <div className={ styles.quality }>Competente</div>
                </div>
              </div>
            </div>
            <main className={ styles.content }>
              <section className={ styles.profile }>
                <p>Administrador de Sistemas versátil y motivado por los resultados. 10 años de experiencia en mantenimiento y manejo de sistemas. Busca hacer transición hacia el desarrollo de software. Dedicado a la satisfaccion del usuario, con enfoque de hacer entrega de soluciones seguras. Diseñó e implementó aplicaciones para empleados; algunos de la cual redujeron errores por el 87% o más y reportes de problemas.</p>
              </section>
              <section>
                <h3>Experiencia</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2017-02 -</div>
                    <div>actualidad</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>Director de las TICs</div>
                    <div>Iglesia Cristiana Cuadrangular Central - ICCC <br /> Barrancabermeja, Santander</div>
                    <div>
                      <ul>
                        <li>Contruyó sistema de registro de donaciones y generación de certificados. La cual, por diseño estratégico del interfaz, redujo errores por un 80%. Herramienta creado con Golang y SQLite3.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2014-06 -</div>
                    <div>actualidad</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>Director de las TICs</div>
                    <div>Fundación Alice de Pérez - Colegio de Las Americas <br /> Barrancabermeja, Santander</div>
                    <div>
                      <ul>
                        <li>Ejecutó una solución de registro de pagos offline, usando PHP, Apache2, and SQLite3; reduciendo el costo del tiempo requerido para cumplir tareas de ingreso de datos de 5 horas a 2 horas. Luego actualizado a NodeJs.</li>
                        <li>Realizó prototipo en aplicación de administración de salón de clases, con un diseño responsivo mobile-first e interfaz extensible del servidor.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }>
                    <div>2011-08 -</div>
                    <div>actualidad</div>
                  </div>
                  <div className={ styles.tableCell }>
                    <div className={ styles.bold }>Experiencia en Desarrollo de Software</div>
                    <div>Varios</div>
                    <div>
                      <ul>
                        <li>Desarrolló corrector de deletreo en Rust, la cual utiliza una estratégia de eliminación simétrica.</li>
                        <li>Animación de dos objetos sólidos en 3D usando Python, con uniones OpenGL para Python.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>
            <section>
              <h3>Educación</h3>
              <div className={ styles.table }>
                <div className={ styles.tableCell }>
                  <div>2014 -</div>
                  <div>2018</div>
                </div>
                <div className={ styles.tableCell }>
                  <div className={ styles.bold }>BR. en Seguridad y Análisis de Riesgos - Ciberseguridad, Penn State University</div>
                  <div>
                    <ul>
                      <li>Efectuó interés por la seguridad de la informática y la aplicación de sus herramientas asociadas.</li>
                      <li>Adquirió orientación en asignar efectivamente los recursos y poder maximizar la seguridad e interés del ente y reducir costos vinculados.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
              <section>
                <h3>Actividades Adicionales</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }></div>
                  <div className={ styles.tableCell }>
                    <ul>
                      <li>Voluntariado en centro comunitario para liderar brigadas semanales para población vulnerable.</li>
                      <li>Tutorías de Inglés para profesionales y estudiantes.</li>
                      <li>Administra taller de estudio para probar herramientas, conceptos, e ideas nuevas; también suministra varios servicios por la red local.</li>
                    </ul>
                  </div>
                </div>
              </section>
              <section>
                <h3>Habilidades Adicionales</h3>
                <div className={ styles.table }>
                  <div className={ styles.tableCell }></div>
                  <div className={ styles.tableCell }>
                    <ul>
                      <li>Programación: Python, Clojure, Rust, Go, C, Java, JavaScript / NodeJs, PHP, SQL</li>
                      <li>Infraestructuras: ExpressJs, VueJs, ReactJs, Rocket, Flask</li>
                      <li>Herramientas: Docker, Qemu / KVM / LibVirt, Gradle, Maven, Gulp, Make, CMake, Pandas, Git</li>
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

