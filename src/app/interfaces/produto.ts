export interface Produto {
    produto: string;         
    descricao: string;       
    qtdSc: number;           
    qtdCot?: number;          
    valRefSc: number;        
    valUniCot?: number;       
    um?: string;              
    dtNecessidade: string;  
    dtPrevEntrega?: string;
    valFrete?: number
    valTotItem?: number
  }