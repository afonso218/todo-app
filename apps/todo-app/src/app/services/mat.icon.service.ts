import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MatIconService {
  private icons = ['delete', 'favorite'];

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    this.icons.forEach(icon_name => {
      iconRegistry.addSvgIcon(
        icon_name,
        sanitizer.bypassSecurityTrustResourceUrl(
          'assets/icons/' + icon_name + '.svg'
        )
      );
    });
  }
}
