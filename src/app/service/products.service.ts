import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductsService {

    cart: any[] = [];

    products: any[] = [
        {
            '_id': '5d515979736802000415a561',
            'vendor': 'NEXTEL',
            'name_produto': 'PÓS - RC - PLANO G 22GB',
            'valor_compra': null,
            'valor_venda': 110,
            'impostos': 17.6,
            'outros_gastos': 33,
            'comissao': 13,
            'lucro': 59.4,
            'resumo': 'Minutos ilimitados\n20GB + 2GB',
            'observacoes': '+100 pontos sem pagar nada a mais por isso.\nVocê pode dividir com +4 pessoas\nGanhe 2GB a cada 6 meses\nMinutos ilimitados\nRoaming nacional\nSem portabilidade 10GB + 2GB',
            'status': true,
            'updaterecord': [
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612408,
                    'edittype': 'new'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612558,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612989,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565613341,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565614905,
                    'edittype': 'edit'
                }
            ]
        },
        {
            '_id': '5d515979736802000415a561',
            'vendor': 'NEXTEL',
            'name_produto': 'PÓS - RC - PLANO G 22GB',
            'valor_compra': null,
            'valor_venda': 110,
            'impostos': 17.6,
            'outros_gastos': 33,
            'comissao': 13,
            'lucro': 59.4,
            'resumo': 'Minutos ilimitados\n20GB + 2GB',
            'observacoes': '+100 pontos sem pagar nada a mais por isso.\nVocê pode dividir com +4 pessoas\nGanhe 2GB a cada 6 meses\nMinutos ilimitados\nRoaming nacional\nSem portabilidade 10GB + 2GB',
            'status': true,
            'updaterecord': [
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612408,
                    'edittype': 'new'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612558,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612989,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565613341,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565614905,
                    'edittype': 'edit'
                }
            ]
        },
        {
            '_id': '5d515979736802000415a561',
            'vendor': 'NEXTEL',
            'name_produto': 'PÓS - RC - PLANO G 22GB',
            'valor_compra': null,
            'valor_venda': 110,
            'impostos': 17.6,
            'outros_gastos': 33,
            'comissao': 13,
            'lucro': 59.4,
            'resumo': 'Minutos ilimitados\n20GB + 2GB',
            'observacoes': '+100 pontos sem pagar nada a mais por isso.\nVocê pode dividir com +4 pessoas\nGanhe 2GB a cada 6 meses\nMinutos ilimitados\nRoaming nacional\nSem portabilidade 10GB + 2GB',
            'status': true,
            'updaterecord': [
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612408,
                    'edittype': 'new'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612558,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612989,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565613341,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565614905,
                    'edittype': 'edit'
                }
            ]
        },
        {
            '_id': '5d515979736802000415a561',
            'vendor': 'NEXTEL',
            'name_produto': 'PÓS - RC - PLANO G 22GB',
            'valor_compra': null,
            'valor_venda': 110,
            'impostos': 17.6,
            'outros_gastos': 33,
            'comissao': 13,
            'lucro': 59.4,
            'resumo': 'Minutos ilimitados\n20GB + 2GB',
            'observacoes': '+100 pontos sem pagar nada a mais por isso.\nVocê pode dividir com +4 pessoas\nGanhe 2GB a cada 6 meses\nMinutos ilimitados\nRoaming nacional\nSem portabilidade 10GB + 2GB',
            'status': true,
            'updaterecord': [
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612408,
                    'edittype': 'new'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612558,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565612989,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565613341,
                    'edittype': 'edit'
                },
                {
                    'user': 'VDRAMOS',
                    'timestamp': 1565614905,
                    'edittype': 'edit'
                }
            ]
        }
    ];


    constructor() { }

    getProducts() {
        return this.products;
    }

    getCart() {
        return this.cart;
    }
}
