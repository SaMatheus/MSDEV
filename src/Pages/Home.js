import React from 'react';
// STYLES
import styles from './Home.module.css';

// DATA
import HeaderMenu from '../Data/Header-menu';
import SocialMedia from '../Data/Social-media';
import Services from '../Data/Services.js';
import ProjectsList from '../Data/Projects.js';
import ContactList from '../Data/Contacts.js';

// ICONS
import { BiCopyright } from 'react-icons/bi';

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <title>Cabecalho</title>
        <div className={styles.logo}></div>
        <nav className={styles.nav}>
          <ul>
            {HeaderMenu.map((item) => {
              return (
                <li className={styles.menuItem} key={item.id}>
                  <a href={`#${item.href}`}>{item.title}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
      <section id="home" className={styles.home}>
        <div className={styles.title}>
          <title>Conteudo inicial de programacao</title>
          <h1 className={styles.animationSurge1}>Matheus Sá</h1>
          <h3 className={styles.animationSurge2}>Front-end Developer</h3>
          <div className={styles.socialMedia}>
            {SocialMedia.map((social) => {
              return (
                <a key={social.id} href={social.href} target="_blank">
                  <img src={social.img} alt={social.title} />
                </a>
              );
            })}
          </div>
        </div>
      </section>
      <section id="services" className={styles.services}>
        <title>Servicos realizados pelo programador</title>
        <h1>minhas especialidades</h1>
        <div className={styles.serviceList}>
          {Services.map((services) => {
            return (
              <div key={services.id} className={styles.service}>
                <div className={styles.serviceIcon}>
                  <span>{services.icon}</span>
                </div>
                <article>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </article>
              </div>
            );
          })}
        </div>
      </section>
      <section id="about" className={styles.about}>
        <title>Descricao do programador</title>
        <h1>Sobre o Matheus </h1>
        <div className={styles.content}>
          <div className={styles.description}>
            <article>
              <h2>Desenvolvedor Front-end</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                sed dolores mollitia dicta, consequuntur incidunt, recusandae
                explicabo sit architecto totam magnam. Amet inventore assumenda
                quis quos, natus laboriosam excepturi necessitatibus saepe
                dolorem, ut pariatur. Tenetur sapiente magnam adipisci aperiam.
                Enim ea possimus vitae veritatis consequuntur perspiciatis
                soluta earum maxime delectus!
              </p>
            </article>
          </div>
          <div className={styles.graphic}>
            <div className={`${styles.stats} ${styles.stats1}`}>
              <div className={styles.stateHeader}>
                <h3>Desenvolvimento de Sites</h3>
                <h3>96%</h3>
              </div>
              <span></span>
            </div>

            <div className={`${styles.stats} ${styles.stats2}`}>
              <div className={styles.stateHeader}>
                <h3>Aplicativos Mobile</h3>
                <h3>90%</h3>
              </div>
              <span></span>
            </div>
            <div className={`${styles.stats} ${styles.stats3}`}>
              <div className={styles.stateHeader}>
                <h3>UI/UX</h3>
                <h3>84%</h3>
              </div>
              <span></span>
            </div>
            <div className={`${styles.stats} ${styles.stats4}`}>
              <div className={styles.stateHeader}>
                <h3>SEO</h3>
                <h3>78%</h3>
              </div>
              <span></span>
            </div>
          </div>
        </div>
      </section>
      <section id="projects" className={styles.projects}>
        <title>Potifólio</title>
        <h1>Portifólio</h1>
        <div className={styles.portfolio}>
          {ProjectsList.map((project) => {
            return (
              <div
                key={project.id}
                className={styles.project}
                style={{
                  background: `url(${project.img}) no-repeat center 5px / ${project.size}`,
                }}
              >
                <div className={styles.projectText}>
                  <h2>{project.title}</h2>
                  {project.icon}
                </div>
                <div id="modalProject" className={styles.modal}>
                  <h5>Objetivo:</h5>
                  <h3>{project.objective}</h3>
                  <h5>Descrição:</h5>
                  <p>{project.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <section id="contact" className={styles.contacts}>
        <title>Contato do desenvolvedor front-end</title>
        <h1>Fale comigo</h1>
        <div className={styles.list}>
          {ContactList.map((cont) => {
            return (
              <div key={cont.id} className={styles.contact}>
                {cont.icon}
                <p>{cont.value}</p>
              </div>
            );
          })}
        </div>
      </section>
      <footer className={styles.footer}>
        <p>Copywright</p>
        <BiCopyright />
        <p>2021 MSDEV</p>
      </footer>
    </div>
  );
};

export default Home;
