import { useState } from 'react';
import hero from '../../assets/me.webp';
import styles from './AboutMe.module.css';
import { constants } from '../../utils/constants';

const skills = [
  {
    name: 'CSS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg',
    href: 'https://www.w3schools.com/css/',
  },
  {
    name: 'Git',
    img: 'https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg',
    href: 'https://git-scm.com/',
  },
  {
    name: 'HTML',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
    href: 'https://www.w3.org/html/',
  },
  {
    name: 'Javascript',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    name: 'MySQL',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg',
    href: 'https://www.mysql.com/',
  },
  {
    name: 'NodeJS',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg',
    href: 'https://nodejs.org',
  },
  {
    name: 'Postman',
    img: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
    href: 'https://postman.com',
  },
  {
    name: 'Python',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg',
    href: 'https://www.python.org',
  },
  {
    name: 'React',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg',
    href: 'https://reactjs.org/',
  },
  {
    name: 'Bootstrap',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg',
    href: 'https://getbootstrap.com',
  },
  {
    name: 'Java',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg',
    href: 'https://www.java.com',
  },
  {
    name: 'Materialize',
    img: 'https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg',
    href: 'https://materializecss.com/',
  },
  {
    name: 'React Native',
    img: 'https://reactnative.dev/img/header_logo.svg',
    href: 'https://reactnative.dev/',
  },
  {
    name: 'Redux',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg',
    href: 'https://redux.js.org',
  },
  {
    name: 'Webpack',
    img: 'https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg',
    href: 'https://webpack.js.org',
  },
];
function About() {
  return (
    <div className={styles.me}>
      <h2>Who I am and more about me</h2>
      <p>
        My name is Shubham Hagawane, I am a Software developer from Pune with
        great love for the technological world, self-taught and passionate
        learning more every day about new technologies. Throughout my adventure
        in the world of web development, I got involved in the development of
        several projects, setting myself challenges, which taught me to correct
        my own mistakes when developing software.
      </p>
      <h2>Path</h2>
      <p>
        Experience in managing small teams and participating every process of an
        application (from the initial approach, extraction of necessary
        functionalities, development, testing and evolution).
        <br /> <br />
        I am looking to expand my knowledge in programming and gain experience
        being part of a productive and successful team. I have ability to
        quickly to other technologies. I am looking for a project appropriate to
        my abilities that allows me to develop, that puts me new challenges and
        new learnings.
        <br /> <br />
      </p>
      <h2>Interests and Hobbies</h2>
      <p>
        Interested in learning more about testing, clean code principles,
        improve my debugging skills and loves reading `Manhwa`.
        <br /> In the mean time like to listen Music.{' '}
        <img
          src="https://img.icons8.com/ios/20/000000/rubiks-cube.png"
          alt="rubik"
        />{' '}
        , do{' '}
        <a href={constants.profilesUrls.instagram} title="Instagram Profile">
          origami
        </a>{' '}
        🪁 and play video games🎮.
      </p>
    </div>
  );
}

function Skills() {
  return (
    <>
      <h2>Habilidades – Tecnologías - Herramientas</h2>
      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <a
            key={index}
            className={styles.a}
            href={skill.href}
            title={`${skill.name} Site`}
            target="_blank"
            rel="noreferrer noopener"
          >
            <img src={skill.img} alt="css3" width="40" height="40" />
            {skill.name}
          </a>
        ))}
      </div>
    </>
  );
}

function Education() {
  return (
    <div className={styles.educationSection}>
      <h2>Computer Engineering (2021 - 2025)</h2>
      <h4>MIT Academy Of Engineering, Alandi</h4>
      <span>CGPA: 9.32 /10</span>
      <p>
        During my studies at the MITAOE I gained the capacity for
        responsibility, effort and sacrifice, be part of work teams and work in
        projects.
      </p>
    </div>
  );
}

function Studies() {
  return (
    <>
      <h2>Certificates and courses</h2>
      <ul className={styles.studiesContainer}>
        <li>
          <a
            title="Certificado NoCountry"
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.noCountry}
          >
            • NPTEL Online Certification, Cloud Computing , 2024
          </a>
        </li>
        <li>
          <a
            title="Certificado Ingles"
            target="_blank"
            rel="noreferrer noopener"
            href={constants}
          >
            • CCNAv7: Introduction to Networks, 2023
          </a>
        </li>
        <li>
          <a
            title="Titulo Ing. en Software"
            target="_blank"
            rel="noreferrer noopener"
            href={constants}
          >
            • CCNAv7: Enterprise Networking, Security, and Automation, 2023
          </a>
        </li>
        <li>
          <a
            title="Platzi Profile"
            target="_blank"
            rel="noreferrer noopener"
            href="https:/"
          >
            • CCNAv7: Switching, Routing, and Wireless Essentials, 2023
          </a>
        </li>
        <li>
          <a
            title="Certificado Ingles"
            target="_blank"
            rel="noreferrer noopener"
            href={constants}
          >
            • Introduction to Cybersecurity,2023
          </a>
        </li>
        <li>
          <a
            title="Certificado SCRUM"
            target="_blank"
            rel="noreferrer noopener"
            href={constants}
          >
            • Cybersecurity Essentials, 2023
          </a>
        </li>
        {/*  <li>
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={constants.cursos.IntroduccionAPIRest}
          >
            • Escuela Js - Platzi - 20%
          </a>
        </li> */}
      </ul>
    </>
  );
}
function CV() {
  return (
    <>
      <h2>Private CV</h2>
      <p>Go to the contact section.</p>
      <button type="button" className="boxShadow" disabled>
        DOWNLOAD CV
      </button>
    </>
  );
}
function Experience() {
  return (
    <>
      <h2>Private</h2>
      <h3>ElasticRun, Pune (Jan 2025 - Present)</h3>
      <br />
      <h4>Software Development Intern</h4>
      <br />
      <p>
        • Actively exploring the Frappe framework to build proficiency in
        backend development for ERP systems.
        <br /> • Technologies: Frappe, Python, Node.Js MariaDB, Redis, Kafka,
        GitLab, Agile
      </p>
      <br />
      <br />
      <h2>Private</h2>
      <h3>Eumentis Informatics, Pune (Feb 2024 - Apr 2024)</h3>
      <br />
      <h4>Machine Learning Intern</h4>
      <br />
      <p>
        • Developed and optimized image classification models, achieving a 15%
        improvement in prediction accuracy across datasets.
        <br /> • Fine-tuned multiple algorithms, selecting the best performing
        model, which led to a 20% reduction in training time.
        <br /> • Technologies: : Python, OpenCV, TensorFlow, Deep Learning, Git,
        Agile.
      </p>
      <button type="button" className="boxShadow" disabled>
        Timeline...
      </button>
    </>
  );
}

function AboutMe() {
  const [activeSection, setActiveSection] = useState(0);
  return (
    <section className={styles.aboutMe} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.AboutLeft}>
          <span>Updated Feb 20, 2025</span>
          <div className={styles.leftImg}>
            <img
              src={hero}
              alt="Shubham Hagawane Profile"
              className={styles.img}
            />
            <h1>{'<Shubham Hagawane/>'}</h1>
            <a
              title="Buy me a coffe"
              className={styles.supportBtn}
              href={constants.profilesUrls.buymeacoffee}
              target="_blank"
              rel="noreferrer noopener"
            >
              SUPPORT ME
            </a>
            {/* <button className={styles.supportBtn} type="button">
              APOYAME
            </button> */}
            <p>Software development with ❤️ and ☕️</p>
            <p> &#x1F1F2;&#x1F1FD;</p>
          </div>
        </div>
        <div className={styles.AboutRight}>
          <div>
            {/* <span>Actualizado el 5 de Marzo, 2022</span> */}
            <ul className={styles.tabs}>
              <li className={activeSection === 0 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(0)}
                  className={styles.tabBtn}
                  aria-label="about"
                >
                  about
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 1 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(1)}
                  className={styles.tabBtn}
                  aria-label="skills"
                >
                  skills
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 2 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(2)}
                  className={styles.tabBtn}
                  aria-label="formación"
                >
                  Training
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 3 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(3)}
                  className={styles.tabBtn}
                  aria-label="certificados"
                >
                  Certificates
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 4 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(4)}
                  className={styles.tabBtn}
                  aria-label="experiencia"
                >
                  Experiece
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              <li className={activeSection === 5 ? styles.active : null}>
                <button
                  type="button"
                  onClick={() => setActiveSection(5)}
                  className={styles.tabBtn}
                  aria-label="cv"
                >
                  CV
                </button>
                {/* <span className={styles.divider}>|</span> */}
              </li>
              {/* <li>
                <span>Actualizado el 5 de Marzo, 2022</span>
              </li> */}
            </ul>
            <hr />
          </div>
          <div className={styles.tabContent}>
            {activeSection === 0 && <About />}
            {activeSection === 1 && <Skills />}
            {activeSection === 2 && <Education />}
            {activeSection === 3 && <Studies />}
            {activeSection === 4 && <Experience />}
            {activeSection === 5 && <CV />}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
