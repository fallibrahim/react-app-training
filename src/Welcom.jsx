import logo from './images/IMG_UNCHK.jpg';
import './App.css';
const Welcome = () => {
  const nous = 'nous';
return (
  <div>
    <header style={{ backgroundColor: 'rgb(255, 100, 140)', padding: '10px' }}>
      <h1>Bienvenue sur mon site web</h1>
    </header>
    <nav style={{ backgroundColor: 'rgb(100, 150, 255)', padding: '10px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '5px' }}>
      <a href="#home" style={{ color: 'white', textDecoration: 'none' }}>Accueil</a>
      <a href="#about" style={{ color: 'white', textDecoration: 'none' }}>À propos</a>
      <a href="#contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</a>
    </nav>
    <section>
      <h2 className='about-title'>À propos de {nous}</h2>
      <p>Nous sommes une entreprise cool qui fait des choses incroyables !</p>
      <img src={logo} alt="Logo UNCHK"/>
      <img src="/logo192.png" alt="logo"/>
    </section>
    <footer>
      <p>Droits d'auteur 2024</p>
    </footer>
   </div>
);
}

export default Welcome;