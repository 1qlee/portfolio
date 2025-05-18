import React from 'react';

type LinkProps = {
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
};

function IntroLink({ children, onClick, isActive }: LinkProps) {
  return (
    <a
      className={`link ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

export default IntroLink;