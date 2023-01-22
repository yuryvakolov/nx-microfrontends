import {AfterContentInit, Component} from '@angular/core';
import {IdGeneratorService} from "./core/id-generator.service";

@Component({
  selector: 'front-web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit{
  title = 'rosbank';

  constructor(private idGeneratorService: IdGeneratorService) {
  }

  ngAfterContentInit() {
    console.log(this.idGeneratorService.ids)
  }
}
