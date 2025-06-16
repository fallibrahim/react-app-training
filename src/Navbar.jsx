import { useEffect } from 'react';
// import image1 from './images/IMG_UNCHK.jpg';
// import image2 from './images/edit-etudiant.png';
// import image3 from './images/login.png';
import Slider from './Slider';
const Navbar = () => {
    useEffect(() => {
      // Initialise le carrousel Bootstrap lors du chargement du composant
      if (window.bootstrap && window.bootstrap.Carousel) {
        const carouselElement = document.getElementById('carouselExampleIndicators');
        if (carouselElement) {
          new window.bootstrap.Carousel(carouselElement, { interval: 5000, ride: 'carousel' });
        }
      }
    }, []);

    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">Navbar scroll</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/link">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" href="/dropdown">
                    Link
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><a className="dropdown-item" href="/action">Action</a></li>
                    <li><a className="dropdown-item" href="/another-action">Another action</a></li>
                    <li><hr className="dropdown-divider"/></li>
                    <li><a className="dropdown-item" href="/something-else">Something else here</a></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" tabIndex="-1" aria-disabled="true" href="/">Link</a>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
       <Slider/>
      </div>
    );
}
export default Navbar;
