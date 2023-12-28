import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl : './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressCircleComponent {
  @Input() withLabel : boolean = false;

  constructor() { }

  public ngOnInit() : void
  {
  }
 }
