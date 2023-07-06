import { Component } from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'poolchem';

  onBasicUploadAuto($event: FileUploadEvent) {
    alert("Basic Upload Auto")
  }


  onUpload($event: FileUploadEvent) {
    alert("on Upload")
  }
}
