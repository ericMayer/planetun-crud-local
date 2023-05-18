import { Component, ViewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivationEnd, Router } from '@angular/router';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { filter, map } from 'rxjs';
import { Menu } from './shared/interfaces/menu.interface';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  public pageTitle: string;
  public menuIsOpen: boolean;
  public menu: Menu[] = [
    {
      text: 'Inspeções',
      route: 'inspecoes',
      icon: 'frame_inspect'
    },
    {
      text: 'Relatórios',
      route: 'relatorios',
      icon: 'inventory'
    }
  ];
  public showMessageNoResponsive: boolean;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {
    this.getPageTitle();
    this.hideMenu();
  }

  public getPageTitle(): void {
    this.router.events
      .pipe(
        filter((event): event is ActivationEnd => event instanceof ActivationEnd),
        filter((event: ActivationEnd) => event.snapshot.firstChild === null),
        map((event: ActivationEnd) => event.snapshot.data?.['pageTitle']),
        takeUntilDestroyed()
      )
      .subscribe((pageTitle: string) => this.pageTitle = pageTitle);
  }

  public changeMenuIsOpen(): void {
    this.menuIsOpen = !this.menuIsOpen;
  }

  public openMenu(): void {
    this.changeMenuIsOpen();
    this.sidenav.toggle();
  }

  public hideMenu(): void {
    this.breakpointObserver.observe('(max-width: 630px)')
      .pipe(takeUntilDestroyed())
      .subscribe((state: BreakpointState) => {
        this.showMessageNoResponsive = state?.matches;
        if (this.menuIsOpen && state?.matches) this.openMenu();
      });
  }
}
