import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

const SelectContent = styled.div`
  margin-bottom: 16px;
  width: 100%;
`;

/**
 * Custom styles for reactSelect component based on react-select library
 */
const customStyles = {
  control: (base, state) => ({
    ...base,
    background: state.isFocused ? '#fff' : '#f1f4f8',
    borderRadius: '10px',
    border: 'none',
    padding: '4.5px',
    marginTop: '8px',
    color: '#38393b',
    outline: '1px solid #fff',
    boxShadow: state.isFocused ? '0px 0px 7px #d7dade' : null,
  }),
  option: (provided, state) => ({
    ...provided,
    borderRadius: '10px',
    color: state.isSelected ? '#fff' : '#38393b',
    backgroundColor: state.isSelected
      ? '#38393b'
      : '#fff' && state.isFocused
      ? '#f1f4f8'
      : '#fff',
  }),
  menu: base => ({
    ...base,
    borderRadius: '10px',
  }),
  menuList: base => ({
    ...base,
    padding: '5px',
    '::-webkit-scrollbar': {
      borderRadius: '20px',
    },
    '::-webkit-scrollbar-track': {
      borderRadius: '20px',
    },
    '::-webkit-scrollbar-thumb': {
      background: '#d7dade',
      borderRadius: '20px',
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: '#38393b',
    fontSize: '0.85rem',
    fontWeight: '500',
  }),
  placeholder: base => {
    return {
      ...base,
      color: 'rgba(56, 57, 59, 0.5)',
      fontFamily: 'Poppins',
      fontSize: '0.85rem',
      fontWeight: '500',
    };
  },
};

/**
 * Render Form Select Field
 * @param {string} input
 * @param {string} label
 * @param {object} control
 * @param {object} options
 * @param {string} errorMessage
 * @param {string} placeholder
 * @returns {JSX}
 */
export const SelectField = ({
  input,
  label,
  control,
  options,
  errorMessage,
  placeholder,
}) => {
  return (
    <SelectContent>
      <Label>{label}</Label>
      <Controller
        name={input}
        control={control}
        rules={{
          required: {
            value: true,
            message: errorMessage,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <ReactSelect
              isClearable
              {...field}
              placeholder={placeholder}
              options={options}
              styles={customStyles}
            />
            <ErrorMessage>{error?.message}</ErrorMessage>
          </>
        )}
      />
    </SelectContent>
  );
};