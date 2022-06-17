import styled from 'styled-components';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';

const InputFieldContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  width: 100%;
`;

export const Input = styled.input`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSize.sm};
  border-radius: ${({ theme }) => theme.borderRadius.field};
  background-color: ${({ theme }) => theme.colors.lightBackground};
  margin-top: 8px;
  padding: 12px;
  border: none;
  ::placeholder {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme }) => theme.colors.placeholder};
    font-size: ${({ theme }) => theme.fontSize.sm};
  }
  &:focus {
    background-color: ${({ theme }) => theme.colors.light};
    outline: 1px solid ${({ theme }) => theme.colors.light};
    box-shadow: 0px 0px 7px ${({ theme }) => theme.colors.shadow};
  }
`;

/**
 * Render Form Input Field
 * @param {string} input
 * @param {string} label
 * @param {function} register
 * @param {boolean} required
 * @param {object} pattern
 * @param {object} errors
 * @param {string} errorMessage
 * @param {string} type
 * @param {string} placeholder
 * @returns {JSX}
 */
export const InputField = ({
  input,
  label,
  register,
  required,
  pattern,
  errors,
  errorMessage,
  type,
  placeholder,
}) => {
  return (
    <InputFieldContent>
      <Label>{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        {...register(input, {
          required,
          pattern: pattern,
        })}
      />
      {errors && <ErrorMessage>{errorMessage} </ErrorMessage>}
    </InputFieldContent>
  );
};