export interface Proposta {
    fornecedor: string;
    nProposta : string;
    condPag : string;
    tipoFrete: string;
    qtdEntregueFornec: number;
    dtPrevEntrega: string;
    valorFrete: number;
    valorUn: number;
    valorT: number;
    vencedora: boolean;
}