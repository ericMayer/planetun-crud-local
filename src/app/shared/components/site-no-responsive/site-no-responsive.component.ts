import { Component, ElementRef, ViewChild } from '@angular/core';

import lottie from 'lottie-web';

@Component({
  selector: 'app-site-no-responsive',
  templateUrl: './site-no-responsive.component.html',
  styleUrls: ['./site-no-responsive.component.scss']
})
export class SiteNoResponsiveComponent {

  @ViewChild('animationLottie') set animationLottie(animationLottie: ElementRef<HTMLDivElement>) {
    if (animationLottie?.nativeElement)
      this.loadAnimation(animationLottie);
  }

  public loadAnimation(animationLottie: ElementRef<HTMLDivElement>): void {
    lottie.loadAnimation({
      container: animationLottie?.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/animations/desktop.json',
    });
  }
}
