import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./shared/components/footer/footer";
import { FileUpload } from "./shared/components/file-upload/file-upload";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, FileUpload],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
