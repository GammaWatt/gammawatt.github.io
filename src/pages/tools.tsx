import * as React from 'react';

const list = [
  'C',
  'C++',
  'Python (Cython, and custom modules)',
  '(fun) F#',
  '.NET',
  'Java (and custom modules)',
  'JavaScript',
  'Clojure',
  '(fun) Haskell (and custom modules)',
  '(fun) ChickenScheme',
  '(fun) Racket',
  '(fun) Guile',
  '(fun) Pharo',
  '(fun) Squeak',
  '(fun) Chezscheme',
  '(fun) Scala',
  '(fun) Erlang',
  '(fun) Elixir',
  'PHP (and custom modules)',
  'Kotlin',
  '(fun) Perl',
  '(fun) Pascal',
  '(fun) FORTRAN',
  '(fun) COBOL',
  '(fun) NASM',
  '(fun) VHDL',
  'Ruby (and custom modules)',
  'TypeScript',
  'Rust (and C FFI, import from C and export to C)',
  'Go (and C FFI, import from C and export to C)',
  'HTML',
  'XML',
  'CSS',
  'SQL',
  '(fun) R',
  '(fun) Julia'
]

const frameworks = [
  'ASP.NET',
  'React.js',
  'Angular',
  'Vue.js',
  'Gatsby.js',
  'Next.js',
  'Nuxt.js',
  'Ruby on Rails',
  'Laravel',
  'CakePHP',
  'Wordpress (making themes and plugins)',
  'Joomla (themes and plugins)',
  'Drupal (themes and plugins)'
]

const other = [
  'Software design (like authentication for webapps. Do you use 1 db or two, and stuff like that. There is a right answer.)',
  'RxJS',
  'Algorithms and datastructures (programming challenges)',
  'Gradle (and custom plugins)',
  'Pandas',
  'Bootstrap',
  'TailwindCSS',
  'GCP',
  'AWS',
  'Twisted',
  'Oracle Cloud (Free Tier)',
  'IBM Cloud (Free Tier)',
  'Alibaba Cloud (Free Tier)',
  'Tencent Cloud (Free Tier)',
  'RackSpace (Free Tier)',
  'Yandex.Cloud (Free Tier)',
  'RedHat OpenShift (Free Tier)',
  'Digital Ocean (not free, but super cheap and handy and no ecosystem lock-in)',
  'TeamCity',
  'Google Analytics',
  'Crazyegg analytics',
  'Code review',
  'Code smell',
  'DevOps',
  'lowendtalk.com (good forum for low end vps and other stuff)',
  'Vultr (not free)',
  'MicroLXC (not free)',
  'NanoKVM (not free)',
  'AccuWebHosting (not free)',
  'EvolutionHost (not free)',
  'Atlantic.net (not free)',
  'infinityfree.net (might be free)',
  'byet.host (might be free)',
  'googiehost.com (might be free)',
  'freehostingnoads.net (might be free)',
  '000webhost.com (kind of free)',
  'freewebhostingarea.com (kind of free)',
  'lowendbox.com (not free, but super cheap VPS)',
  'scaleway.com (not free, but also cheap cloud)',
  'euserv.com (not free, but an option)',
  'Apache2',
  'NGINX',
  'Hadoop',
  'MongoDB',
  'Redis',
  'RabbitMQ',
  'ZeroMQ',
  'Apache Active MQ',
  'Apache CloudStack (not a service. a thing you download to manage cloud infrastructures like AWS)',
  'Apache CouchDB',
  'Apache Cassandra',
  'Apache HBase',
  'Apache Ignite',
  'Apache Tomcat',
  'Apache Camel',
  'Apache SpamAssassin',
  'Apache Solr',
  'Apache Syncope',
  'Apache Fortress',
  'Apache Kerby',
  'Apache Helix',
  'Apache Spark',
  'Apache Kafka',
  'Apache Qpid',
  'Azure Queue Storage',
  'IBM MQ on the Cloud',
  'Iron MQ',
  'Tornado',
  'Django',
  'Scrapy',
  'Packer',
  'PyTorch',
  'Pygal',
  'Seaborn',
  'Flask',
  'SQLAlchemy',
  'BeautifulSoup',
  'Azure',
  'Scikit-learn',
  'Keras',
  'Theano',
  'Bulma',
  'Foundation',
  'UIkit',
  'Milligram',
  'Pure.css',
  'Tachyons',
  'Materialize CSS',
  'Sci-kit',
  'SciPy',
  'Matplotlib',
  'Linode (not free)',
  'Arsys, Acens, CloudSigma, SmartCloud, Gogrid (none free)',
  'UpCloud (not free)',
  'Numpy',
  'TensorFlow',
  'Gulp',
  'Maven (and custom plugins)',
  'Apache Ant',
  'Apache Ivy',
  'Jenkins',
  'TravisCI',
  'CircleCI',
  'GitLab',
  'Github Actions',
  'Git',
  'Hg',
  'Docker',
  'Kubernetes',
  'RESTful',
  'CRUD',
  'SCRUM',
  'Agile',
  'XP',
  'TDD',
  'FDD',
  'Microservices architecture',
  'Software architecting'
]

const Tools = () => (
  <div>
    <p>
      Projects: 1) Stuff that works offline. Self contained stuff, interfaces hosted on github pages and other things like that... maybe free webhosts or something...
      2) Same thing as the offline stuff, but makes requests to public APIs, or to a custom API to showcase a working knowledge of AWS and other clodu platforms.
    </p>
    <div>
      <h2>Programming Languages</h2>
      <ul>
        {
          list
          .sort()
          .map(e => <li>{e}</li>)
        }
      </ul>
    </div>
    <div>
      <h2>Frameworks</h2>
      <ul>
        {
          frameworks
          .sort()
          .map( e => <li>{e}</li> )
        }
      </ul>
    </div>
    <div>
      <aside>
        <p>
          When it comes to VPS hosting. The major cloud providers are best.
        </p>
        <p>
          If you need to stretch your VPS boxes or get more apps out
          for greater functionality,
          you could probably use docker on app engines for BaaS, or PaaS
          providers (since the major cloud stuff for VPS are IaaS)
          to try to squeeze more out of them.
        </p>
        <p>
          Another option, depending on your bandwidth, would be to have
          a reverse proxy vpn to forward the traffic to your home machines.
        </p>
      </aside>
      <h2>Tools</h2>
      <ul>
        {
          other
          .sort()
          .map( e => <li>{e}</li> )
        }
      </ul>
    </div>
  </div>
)

export default Tools;
