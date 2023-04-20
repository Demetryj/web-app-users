import { Button } from './ButtonUser.styled';

export const ButtonUser = ({ children, onClick }) => {
  return (
    <Button type="button" onClick={onClick}>
      {children}
    </Button>
  );
};
