import { ContainerHeader, ContentHeader, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg'

export function Header() {
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </ContentHeader>
    </ContainerHeader>
  )
}