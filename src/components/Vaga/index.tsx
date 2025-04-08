// index.ts (CORRIGIDO)

// Importe os componentes estilizados do arquivo local './styles'
// Usamos 'as' para dar aliases e evitar colisão com o nome do componente React 'Vaga'
import {
  Vaga as StyledVaga, // Renomeia Vaga importado para StyledVaga
  VagaTitulo,
  VagaLink
} from './styles' // Corrigido o caminho da importação

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
  // Considere adicionar uma prop para o link real, ex: vagaUrl: string
}

// O componente React continua sendo Vaga
const Vaga = (props: Props) => (
  // Use o componente estilizado com alias (StyledVaga) como container
  <StyledVaga>
    {/* VagaTitulo e VagaLink podem manter os nomes originais pois não colidem */}
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localizacao: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de contratacao: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    {/* Idealmente, o href viria das props */}
    <VagaLink href="#"> Ver detalhes e candidatar-se </VagaLink>
  </StyledVaga>
)

export default Vaga
