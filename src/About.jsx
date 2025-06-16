import { useNavigate } from 'react-router-dom';

function About() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>This is the About page!</h1>
      <button onClick={() => navigate('/home')}>Go to Home page</button>
      <button onClick={() => navigate(-1)}>Go back one page</button>
    </div>
  );
}

export default About;