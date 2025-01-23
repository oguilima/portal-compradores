import { InformacaoCotacao } from "./informacao-cotacao";

export interface Fornecedor extends Partial<InformacaoCotacao>{
    codigo: string,
    loja: string,
    filial: string,
    descricao: string,
}
