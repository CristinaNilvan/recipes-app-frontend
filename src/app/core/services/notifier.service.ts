import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotifierService {
  constructor(private snackBar: MatSnackBar) {}

  showNotification(displayMessage: string) {
    this.snackBar.open(displayMessage, 'Close', {
      duration: 4000,
      panelClass: ['snackbar'],
    });
  }
}
