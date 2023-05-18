import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { AuthService } from '@shared/services/auth.service';
import { SharedModule } from '@shared/shared.module';
import { SiteNoResponsiveModule } from '@shared/components/site-no-responsive/site-no-responsive.module';
import { openSnackBarAlert } from '@shared/utils/alert.utils';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NgxMaskDirective,
    SiteNoResponsiveModule,
    SharedModule,
    MatCardModule
  ],
  providers: [
    provideNgxMask()
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  public formUserCredentials: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.createFormUserCredentials();
  }

  private createFormUserCredentials(): void {
    this.formUserCredentials = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  public showErrorByField = (field: string, error: string): boolean =>
    this.formUserCredentials.get(field)?.hasError?.(error);

  public login(): void {
    if (this.formUserCredentials?.valid) {
      this.authService.login(this.formUserCredentials.value)
        .subscribe({
          next: () => this.router.navigateByUrl('inspecao'),
          error: () => openSnackBarAlert(this.snackBar, {
            message: 'Verifique seu login e sua senha.'
          })
        });
    }
  }
}
