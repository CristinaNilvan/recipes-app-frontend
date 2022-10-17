import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  adminLoggedIn!: boolean;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.adminLoggedIn = this.authService.isLoggedIn;
  }

  onToggleSidenav() {
    this.sidenavToggle.emit();
  }
}
