import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";
import { SignalEquality } from "./pages/examples/signal-equality";
import { Untracked } from "./pages/examples/untracked";
import { UntrackedEffect } from './pages/examples/untracked-effect';
import { CleanupEffect } from './pages/examples/cleanup-effect';
import { Header } from "./shared/components/header/header";
import { Zone1 } from "./pages/examples/zone1";
import { Zone2 } from "./pages/examples/zone2";
import { FileUpload } from "./shared/components/file-upload/file-upload";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Header, FileUpload],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  
}
