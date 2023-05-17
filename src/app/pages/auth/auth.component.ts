import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';

import { AuthService } from '@shared/services/auth.service';
import { SharedModule } from '@shared/shared.module';
import { SiteNoResponsiveModule } from '@shared/components/site-no-responsive/site-no-responsive.module';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    SharedModule,
    NgxMaskDirective,
    SiteNoResponsiveModule
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
    private formBuilder: FormBuilder
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
        .subscribe(() => {
          // TODO: fazer redirect para outro módulo
        });
    }
  }
}
