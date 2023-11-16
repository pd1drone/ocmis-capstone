import React from 'react';
import { useRouter } from 'next/navigation'

const Button = () => {
  const router = useRouter();

  const handleClick = () => {
    // Redirect to "/login" when the button is clicked
    router.push('/login');
  };

  return (
    <button
      className="h-12 rounded-lg bg-white font-bold px-5"
      onClick={handleClick}
    >
      Login
    </button>
  );
};

export default Button;