import { Produto } from "./produto";

export interface InformacaoCotacao extends Partial<Produto>{
  name: string;
  dataProposta: string,
  validadeProposta:string,
  valorFrete: number,
  saving: string,
  tipoFrete: string,
  condPgto: string,
  observacao: string,
  valTotal: number,
  numCot?: string,
  filial?: string,
  numSc?: string,
  dataSolic?: string
}

