import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    padding: 1rem;
    border: 0;
    border-radius: 6px;

    background-color: ${(props) => props.theme["gray-900"]};
    color: ${(props) => props.theme["gray-300"]};

    &::placeholder {
      color: ${(props) => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    padding: 1rem;

    border-radius: 6px;
    border: 1px solid ${(props) => props.theme["green-300"]};
    background-color: transparent;
    color: ${(props) => props.theme["green-300"]};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      border-color: ${(props) => props.theme["green-500"]};
      background-color: ${(props) => props.theme["green-500"]};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`