import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HomeService {
    /* TODO: Este item deve ser substituido por um objeto*/
    navItems: any[] = [
        {
            displayName: 'Dashboards',
            iconName: 'fa-dashboard',
            route: 'dashboard',
            expand: false,
            children: [
                {
                    displayName: 'Datasys vs Bolt',
                    iconName: 'fa-dashboard',
                    route: 'dashboard/datasysbolt'
                },
                {
                    displayName: 'Diario',
                    iconName: 'fa-dashboard',
                    route: 'dashboard/diario'
                },
                {
                    displayName: 'Semanal',
                    iconName: 'fa-dashboard',
                    route: 'dashboard/semanal'
                },
                {
                    displayName: 'Mensal',
                    iconName: 'fa-dashboard',
                    route: 'dashboard/mensal'
                },
                {
                    displayName: 'Trimestral',
                    iconName: 'fa-dashboard',
                    route: 'dashboard/trimestral'
                },
                {
                    displayName: 'Anual',
                    iconName: 'fa-dashboard',
                    route: 'dashboard/anual'
                }
            ]
        },
        {
            displayName: 'Cadastro',
            iconName: 'fa-dashboard',
            route: 'cadastro',
            expand: false,
            children: [
                {
                    displayName: 'Vendas',
                    iconName: 'fa-dashboard',
                    route: 'cadastro/vendas'
                },
                {
                    displayName: 'Produtos',
                    iconName: 'fa-dashboard',
                    route: 'cadastro/produtos'
                }
            ]
        },
        {
            displayName: 'RH',
            iconName: 'fa-dashboard',
            route: 'rh',
            expand: false,
            children: [
                {
                    displayName: 'Cadastros',
                    iconName: 'fa-dashboard',
                    route: 'rh/cadastros'
                },
                {
                    displayName: 'Relatórios',
                    iconName: 'fa-dashboard',
                    route: 'rh/relatorios'
                }
            ]
        }
    ];

    // Método para recuperar os itens do Menu
    getMenuItens() {
        return this.navItems;
    }

    constructor() {}
}
