import {Component, Input} from '@angular/core';
import {IdGeneratorService} from "apps/rosbank/src/app/core/id-generator.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'front-web-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent {
  public form = this.fb.group([]);

  @Input() id = this.idGeneratorService.generate();

  constructor(private idGeneratorService: IdGeneratorService, private fb: FormBuilder) {
  }


}
