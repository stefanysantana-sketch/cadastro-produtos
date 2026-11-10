
import assert from 'node:assert/strict';
import { Cliente } from './src/models/Cliente';

// Criando os clientes
const cliente1 = new Cliente(
    1,
    'André Solicito',
    '068.753.540-98',
    '41.068.896-4',
    new Date(1980, 4, 23)
);

const cliente2 = new Cliente(
    2,
    'Janete de Oliveira',
    '501.764.310-98',
    '20.360.374-6',
    new Date(1970, 0, 12)
);

const cliente3 = new Cliente(
    3,
    'José de Almeida',
    '862.373.890-08',
    '42.172.423-7',
    new Date(1965, 6, 13)
);

// Lista com os clientes
const clientes = [cliente1, cliente2, cliente3];

// Executando os testes
clientes.forEach((cliente) => {

    assert.equal(cliente.getCPF().length > 0, true);
    assert.equal(cliente.getNome().length > 0, true);
    assert.equal(cliente.getRG().length > 0, true);
    assert.ok(cliente.getDtNascimento() instanceof Date);
    assert.equal(
        cliente.getIdade(),
        new Date().getFullYear() - cliente.getDtNascimento().getFullYear()
    );

    console.log('-----------------------------');
    console.log('ID:', cliente.id);
    console.log('Nome:', cliente.getNome());
    console.log('CPF:', cliente.getCPF());
    console.log('RG:', cliente.getRG());
    console.log(
        'Data de nascimento:',
        cliente.getDtNascimento().toLocaleDateString('pt-BR')
    );
    console.log('Idade:', cliente.getIdade());
    console.log('Teste realizado com sucesso!');
});

console.log('-----------------------------');
console.log('TODOS OS TESTES FORAM APROVADOS!');
