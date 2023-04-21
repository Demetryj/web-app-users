import { Button } from './ButtonUser.styled';

export const ButtonUser = ({ children, onClick, type = 'button' }) => {
  return (
    <Button type={type} onClick={onClick}>
      {children}
    </Button>
  );
};
