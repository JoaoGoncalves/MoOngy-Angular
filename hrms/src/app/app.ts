import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";
import { SignalEquality } from "./pages/examples/signal-equality";
import { Untracked } from "./pages/examples/untracked";
import { UntrackedEffect } from './pages/examples/untracked-effect';
import { CleanupEffect } from './pages/examples/cleanup-effect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer,CleanupEffect],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}
