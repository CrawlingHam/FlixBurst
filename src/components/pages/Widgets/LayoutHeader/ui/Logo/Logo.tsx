import { FC } from 'react';
import { LogoType } from '../../model/types';

interface LogoProps {
  logoName: string;
}

export const Logo: FC<LogoProps> = ({ logoName }) => {
  return (
    <div className="navbar-center">
      <a className="btn-ghost btn text-xl normal-case">{logoName}</a>
    </div>
  );
};
