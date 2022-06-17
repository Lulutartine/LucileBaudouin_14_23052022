import styled from 'styled-components';

const LabelContent = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xs};
  padding-left: 16px;
`;

/**
 * Render Form Label
 * @param {object} children
 * @returns {JSX}
 */
export const Label = ({ children }) => {
  return <LabelContent>{children}</LabelContent>;
};