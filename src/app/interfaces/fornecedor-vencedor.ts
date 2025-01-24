import { Fornecedor } from "./fornecedor";

export interface FornecedorVencedor extends Fornecedor{
    winnerIcon: string[];
    vencedor: boolean;
}
