export class Task {
    //atributos
    nome: string;
    descricao: string;
    responsavel: string;
    dt_inicio: Date; 
    dt_fim: Date;

    constructor(){
        this.nome = '';
        this.descricao = '';
        this.responsavel = '';
        this.dt_inicio = new Date ();
        this.dt_fim = new Date ();

    }
    
}