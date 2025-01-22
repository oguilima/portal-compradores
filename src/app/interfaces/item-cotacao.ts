export interface ItemCotacao {
    produto: string;         
    descricao: string;       
    qtdSc: number;           
    qtdCot: number;          
    valRefSc: number;        
    valUniCot: number;       
    um?: string;              
    dtNescessidade: string;  
    dtPrevEntrega: string;
    valFrete: number
    valTotItem: number
  }