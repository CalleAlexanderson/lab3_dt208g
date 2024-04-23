import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-unit-convertion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './unit-convertion.component.html',
  styleUrl: './unit-convertion.component.scss'
})
export class UnitConvertionComponent {

  gMass: number = 0;
  cMass: number = 0;
  sMoney: number = 0;
  cMoney: number = 0;
  mlength: number = 0;
  flength: number = 0;
  ctemp: number = 0;
  ftemp: number = 32;
  massConversionG():void{
    this.cMass = this.gMass*2;
  }

  massConversionC():void{
    this.gMass = this.cMass/2;
  }

  moneyConversionSEK():void{
    this.cMoney = this.sMoney*0.67;
  }

  moneyConversionCNY():void{
    this.sMoney = this.cMoney*1.5;
  }

  lengthConversionM():void{
    this.flength = this.mlength*3.281;
  }

  lengthConversionF():void{
    this.mlength = this.flength*0.305;
  }

  tempConversionC():void{
    this.ftemp = 32 + (this.ctemp * 1.8);
  }

  tempConversionF():void{
    this.ctemp = (this.ftemp*0.556) - 17.778;
  }
}
