const ConditionalRenderingExample = () => {
    // const isLoggedIn = true;
    const hasNewMessages = true;
    // if(isLoggedIn) {
    //     return <h1>Welcome back!</h1>;
    // }
    // else {
    //     return <h1>Please log in.</h1>;
    // }

    // return (
    //     <div>
    //         {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}
    //     </div>
    // );
    //  L'opérateur ternaire vérifie si isLoggedInla valeur est vraie. 
    //  Si la valeur est vraie, il affiche « Bienvenue ! ». 
    //  Si la valeur est fausse, il affiche « Veuillez vous connecter ».
    //   Cette approche est plus courte et utile pour les conditions simples.

    return (
      <div>
        <h1>Welcome to Your dashboard</h1>
        {hasNewMessages && <p>You have new messages.</p>}
      </div> 
    );
}
export default ConditionalRenderingExample;