import React, { useContext } from 'react';
import Count from './Count';
import Counter from './Counter';
import SchoolContext from './SchoolContext';
const  NestedExemple = () => {
  const schoolInfo = useContext(SchoolContext);
    return (
      <div>
        <header>
            <h1>{schoolInfo.name}</h1>
            <p>Principal: {schoolInfo.principal}</p>
        </header>
        <section>
          <h2>Our Products</h2>
          <div>
            <h3>Product 1</h3>
            <p>
              <span className="scrolling-text">This is a great product!</span>
            </p>
          </div>
          <div>
            <h3>Product 2</h3>
            <p>
              <span className="scrolling-text reverse">This product is even better!</span>
            </p>
          </div>
        </section>
        <section>
          <Count />
        </section>
        <section>
          <Counter />
        </section>
      </div>
    );
}
export default NestedExemple; 