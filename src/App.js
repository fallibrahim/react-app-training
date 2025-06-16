import React from 'react';
import './App.css';
import Welcome from './Welcom';
import ButtonClick from './ButtonClick';
import NestedExemple from './NestedExemple';
import NestedExemple2 from './NestedExemple2';
import Navbar from './Navbar';
import FormName from './FormName';
import Message from './Message';
import UseRef from './UseRef';
import SchoolContext from './SchoolContext';
import SimpleForm from './SimpleForm';
import ControlledForm from './ControllledForm';
import UncontrolledForm from './UncontrolledForm';
import MyComponent from './MyComponent';
// import Home from './Home';
// import About from './About';
import MyRouter from './MyRouter';
import  './Globals.css';
import Api from './Api';
// const Header = () => {
//   return (
//     <header>
//       <h1>Welcome to My First React App</h1>
//       <p>This is a simple React application to demonstrate basic concepts.</p>
//     </header>
//   );
// }

// const MainContent = () => {
//   return (
//     <main>
//       <h2>Main Content</h2>
//       <p>This is where the main content of the application will go.</p>
//     </main>
//   );
// }
// const Footer = () => {
//   return (
//     <footer>
//       <p>&copy; 2023 My First React App</p>
//     </footer>
//   );
// }

const schoolInfo = {
name: "Friendly Neighborhood School",
principal: "Ms. Johnson",
founded: 1995
};
const UserProfile = ({name, age}) => {
  return (
    <div> 
      <h2>{name}</h2>
      <p>age : {age}</p>
    </div>
  )
}

const UserList = () => {
  return (
  <div>
  <h1>User List</h1>
  <UserProfile name="Ibrahima fall" age={29} />
  <UserProfile name="Assane FALL" age={28} />
  </div>
  );
}
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}

const Button = (props) => {
  return <button onClick={props.handleClick} className='btn btn-primary'>Click Me</button>;
};

Greeting.defaultProps = {
  name: 'Guest',
};

const handleClick = (buttonName) => {
  alert(`Button clicked: ${buttonName}`);
}
function App() {
  // const schoolName = "Friendly Neighborhood School";
  const showMessage = () => {
    alert('Button clicked!');
  };
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  return (
       <SchoolContext.Provider value={schoolInfo}>
    <div>
       <h2 className='text-center'>My Favorite Fruits</h2>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
       <button onClick={() => handleClick('First')} className='btn btn-primary'>First Button</button>
       <button onClick={() => handleClick('Second')} className='btn btn-primary'>Second Button</button>
      <Button handleClick={showMessage} />
        {/* <Header />
        <MainContent />
        <Footer /> */}
        <Greeting name="Ibrahima Fall"/>
        <Api/>
        <MyRouter/>
        <MyComponent/>
        <SimpleForm/>
        <ControlledForm/>
        <UncontrolledForm/>
        <UseRef/>
        <Message/>
        <FormName/>
         <Navbar/>
        <Welcome/>
        <ButtonClick/>
        <NestedExemple/>
        <NestedExemple2/>
        <UserList/>
        

    </div>
        </SchoolContext.Provider>
  );
}

export default App;
