import {Component, Input, OnInit} from '@angular/core';
import {IdGeneratorService} from "apps/rosbank/src/app/core/id-generator.service";

@Component({
  selector: 'front-web-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit{

  constructor(private idGeneratorService: IdGeneratorService) {
  }
  @Input() id = this.idGeneratorService.generate();

  ngOnInit() {
    console.log(this.id)
  }


}
