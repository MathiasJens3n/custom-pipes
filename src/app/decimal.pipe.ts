import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number): string {
    let valueString = value.toString();
    // Splits the string into two parts if it contains a dot.
    const splitter = valueString.split(".");

    // If the string contains decimals, either shortens the string to 3 decimals or pads the string to 3 decimals.
    if(splitter.length > 1){
      valueString = splitter[0] + ',' + splitter[1].substring(0,3).padEnd(3,'0')
    }
    else{
      // If entered string doesn't contain decimals, it pads the string to 3 deciamls.
      valueString += ','.padEnd(4,'0')
    }

    return valueString;
  }

}
