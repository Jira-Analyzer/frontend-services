import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';
import { MyprojComponent } from './pages/myproj/myproj.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, RouterOutlet, ProjectsComponent, ComparisonComponent, MyprojComponent, HomeComponent, AboutComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';
}
