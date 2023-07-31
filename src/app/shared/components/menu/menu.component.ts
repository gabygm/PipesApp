import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'share-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  public items: MenuItem[] = [];
  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-deskttop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: ''
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No Comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-deskttop',
        items: [
          {
            label: 'Otro Elemento',
            icon: 'pi pi-align-left',
          },
        ],
      },
    ];
  }
}
