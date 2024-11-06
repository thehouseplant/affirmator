import { FC } from 'react';

const Footer: FC = () => (
  <footer className="w-full h-16 bg-gray-800 text-white flex items-center justify-center shadow-inner">
    <p>&copy; {new Date().getFullYear()} Affirmator. All rights reserved.</p>
  </footer>
);

export default Footer;
