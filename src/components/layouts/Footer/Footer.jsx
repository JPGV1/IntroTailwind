import React from "react";
import backgroundimg from '../../../assets/headerAndFooter.jpg'
export const Footer = () => {
  return (
    <footer className=" h-16 text-white text-center py-4 flex justify-center items-center" style={{ backgroundImage: `url(${backgroundimg})`, backgroundSize: 'cover' }}>
      <p>© 2024 Juan Pablo Garcia Villa. Todos los derechos reservados.</p>
    </footer>
  );
};
