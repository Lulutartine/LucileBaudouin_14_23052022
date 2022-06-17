import styled from 'styled-components';

const MessageContent = styled.p`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.colors.errorMessage};
  margin: 0;
  padding-left: 16px;
`;

/**
 * Render Forms error message
 * @param {object} children
 * @returns {JSX}
 */
export const ErrorMessage = ({ children }) => {
  return <MessageContent>{children}</MessageContent>;
};