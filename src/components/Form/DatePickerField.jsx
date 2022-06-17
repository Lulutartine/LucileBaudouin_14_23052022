import styled from 'styled-components';
import { Controller } from 'react-hook-form';
import { ErrorMessage } from './ErrorMessage';
import { Label } from './Label';
import { checkBirthdateValidity } from '../../utils/helpers/regex';
import { Input } from './InputField';

const DatePickerContent = styled.div`
  margin-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

/**
 * Render Form Date Picker Field
 * @param {string} input
 * @param {string} label
 * @param {object} control
 * @param {string} errorMessage
 * @param {object} pattern
 * @param {string} birthdateValue
 * @returns {JSX}
 */
export const DatePickerField = ({
  input,
  label,
  control,
  errorMessage,
  pattern,
  birthdateValue,
}) => {
  return (
    <DatePickerContent>
      <Label>{label}</Label>

      <Controller
        defaultValue=""
        control={control}
        name={input}
        rules={{
          ...(birthdateValue
            ? {
                validate: birthdateValue => {
                  if (
                    birthdateValue &&
                    checkBirthdateValidity(birthdateValue) === false
                  )
                    return 'Must be at least 18 years old';
                },
              }
            : null),
          pattern: {
            value: pattern,
            message: errorMessage,
          },
          required: {
            value: true,
            message: errorMessage,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <>
            <Input
              aria-label={label}  
              aria-required="true"
              ype="date"
              className="input--date"
              onChange={e => {
                field.onChange(e.target.value);
              }}
              value={field.value}
            />
            <ErrorMessage>{error?.message}</ErrorMessage>
          </>
        )}
      />
    </DatePickerContent>
  );
};