import { ClienteIdPipe  } from "./";

describe('Suíte de testes de formatação do id do cliente', () => {
    let clienteIdPipe: ClienteIdPipe;

    beforeEach(() => {
        clienteIdPipe = new ClienteIdPipe();
    });

    it('deve retornar o valor do id formatado com ####-######/##', () =>{
        expect(clienteIdPipe.transform('1234567890123')).toEqual('1234-5678901/23');
    });

    it('deve retornar o mesmo valor quando id não conter 13 dígitos', () => {
        expect(clienteIdPipe.transform('1234')).toEqual('1234');
        expect(clienteIdPipe.transform('12345678901234'))
            .toEqual('12345678901234');
    });
});