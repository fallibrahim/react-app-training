const NestedExemple2 = () => {
    const fruits = [
        {name: 'Apple', image : 'https://contents.mediadecathlon.com/s1057542/k$f8f7d14e0cf9acef164e5b965b6cf197/1800x0/1871pt1943/3732xcr3886/default.jpeg?format=auto'},
        {name: 'Banana', image : 'https://mapetiteassiette.com/wp-content/uploads/2019/05/shutterstock_553887610-e1557046359887.jpg'},
];
return (
    <div>
       {fruits.map((fruit, index) => (
        <div key={index} style={{display: 'flex', alignItems: 'center', float : 'left'}}>
            <img src={fruit.image} alt={fruit.name} style={{ width: '20px', height: '20px' }} />
            <h2 style={{display: 'inline-block', marginRight: '10px'}}>{fruit.name}</h2>
        </div>
       ))}
    </div>
);
}
export default NestedExemple2;