import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  adminLoggedIn!: boolean;
  @Output() sidenavClose = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.adminLoggedIn = this.authService.isLoggedIn;
  }
  onSidenavClose = () => {
    this.sidenavClose.emit();
  };
}
