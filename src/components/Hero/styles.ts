// src/components/Hero/styles.ts
import styled from 'styled-components'

export const Form = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* Corrigido: Usando props.theme para consistência */
    background-color: ${(props) => props.theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 24px 0;
  }
`

// Renomeado de FormDiv para StyledInput para clareza
export const StyledDiv = styled.div`
  position: relative; /* Considerar se 'relative' é realmente necessário aqui */
  color: ${(props) => props.theme.corSecundaria};
  /* Outros estilos para o input podem ser adicionados aqui */
`

export const HeroTitle = styled.h1`
  font-family: Gloock, serif;
  font-size: 48px;
  color: ${(props) => props.theme.corSecundaria};
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
