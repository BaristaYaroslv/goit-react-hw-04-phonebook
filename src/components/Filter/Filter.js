import PropTypes from 'prop-types';
import { Label, Input } from "./Filter.styled";

const Filter = ({ value, onChange }) => {
    return (
        <Label>
            Find contacts by name:
            <Input
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
                placeholder="Name"
            />
        </Label>
    );
};

Filter.propTypes = {
    value: PropTypes.string, 
    onChange: PropTypes.func,
};
export default Filter;