import { useState } from 'react';
import App from './App';
import Nav from './components/Nav';
import Cart from './components/Cart';

const AppContainer = () => {
  const [amount, setAmount] = useState(0);

  const handleAmountChange = (newAmount) => {
    setAmount(newAmount);
  };

  return (
    <>
      <Nav amount={amount} />
      <App onAmountChange={handleAmountChange} />
      <Cart amount={amount} />
    </>
  );
};

export default AppContainer;
