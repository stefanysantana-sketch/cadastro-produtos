
export class Cliente {

    public id: number;
    public nome: string;
    public CPF: string;
    public RG: string;
    public dtNascimento: Date;

    constructor(
        id: number,
        nome: string,
        CPF: string,
        RG: string,
        dtNascimento: Date
    ) {
        this.id = id;
        this.nome = nome;
        this.CPF = CPF;
        this.RG = RG;
        this.dtNascimento = dtNascimento;
    }

    getCPF(): string {
        return this.CPF;
    }

    getNome(): string {
        return this.nome;
    }

    getRG(): string {
        return this.RG;
    }

    getDtNascimento(): Date {
        return this.dtNascimento;
    }

    getIdade(): number {
        const anoAtual = new Date().getFullYear();
        const anoNascimento = this.dtNascimento.getFullYear();

        return anoAtual - anoNascimento;
    }
}
