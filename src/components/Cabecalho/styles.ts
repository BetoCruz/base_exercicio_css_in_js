import styled from 'styled-components'

export const Header = styled.header`
  /* Corrigido: Sintaxe correta para acessar o tema */
  background-color: ${(props) => props.theme.corSecundaria};
  color: ${(props) => props.theme.corPrincipal};
  text-align: center;
  padding: 24px 0;
`
