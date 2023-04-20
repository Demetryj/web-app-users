import { useSelector, useDispatch } from 'react-redux';
import { selectFilterValue } from '../../redux/filter/selectors';
import { changeFilter } from '../../redux/filter/feilterSlice';
import { WrapperFilter, Label, Input } from './SearchUser.styled';

export const SearchUser = () => {
  const valueFilter = useSelector(selectFilterValue);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <WrapperFilter>
      <Label htmlFor="filterId">
        Search user
        <Input
          id="filterId"
          type="text"
          name="filter"
          value={valueFilter}
          onChange={onChangeFilter}
          placeholder=" "
        />
      </Label>
    </WrapperFilter>
  );
};
