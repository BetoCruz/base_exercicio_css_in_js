// src/components/FormVagas/styles.ts
import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  /* Corrigido: Sintaxe correta para acessar o tema */
  background-color: ${(props) => props.theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const Input = styled.input`
  padding: 0 16px;
  /* Corrigido: Sintaxe correta para acessar o tema */
  outline-color: ${(props) => props.theme.corPrincipal};
  /* Removido: Atributos HTML devem ir no JSX */
  /* placeholder="Front-end, fullstack, node, design"; */
  /* type="search"; */
  border: none; /* Adicionado para remover a borda padrão, se desejado */
  border-radius: 8px 0 0 8px; /* Exemplo de arredondamento */

  /* Adicionar estilos de fonte, etc., conforme necessário */
  font-size: 16px;
`

export const Button = styled.button`
  /* Corrigido: Sintaxe correta para acessar o tema */
  background-color: ${(props) => props.theme.corPrincipal};
  border: 1px solid ${(props) => props.theme.corPrincipal};
  height: 40px; /* Ajustar altura se necessário para alinhar com input */
  padding: 0 16px;
  font-size: 18px;
  color: ${(props) => props.theme.corSecundaria};
  margin-left: -1px; /* Para sobrepor levemente a borda se houver */
  cursor: pointer;
  border-radius: 0 8px 8px 0; /* Exemplo de arredondamento */
`
