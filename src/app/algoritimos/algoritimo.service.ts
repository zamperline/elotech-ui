import { environment } from './../../environments/environment';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

export class ArrayInput {
  matrix: string[];
}


@Injectable({
  providedIn: 'root'
})
export class AlgoritimoService {

  algoritimoUrl: string;

  constructor(private http: HttpClient) { 
    this.algoritimoUrl = `${environment.apiUrl}/algoritimos`;
  }

  isLucky(n: number): Promise<boolean> {
    return this.http.get<boolean>(`${this.algoritimoUrl}/isLucky/${n}`)
      .toPromise()
      .then(response => {
        const resultado = response;
        return resultado;
      });
  }

  circleOfNumbers(n1: number, n2: number): Promise<number> {
    return this.http.get<number>(`${this.algoritimoUrl}/circleOfNumbers/${n1}/${n2}`)
      .toPromise()
      .then(response => {
        const resultado = response;
        return resultado;
      });
  }

  alphabeticShift(str: Array<any>): Promise<Array<any>> {
    return this.http.get<Array<any>>(`${this.algoritimoUrl}/alphabeticShift/${str}`)
      .toPromise()
      .then(response => {
        const resultado = response;
        return resultado;
      });
  }
  
  allLongestStrings(arrayInput:Array<string>): Promise<Array<string>> {
    return this.http.put<Array<string>>(`${this.algoritimoUrl}/allLongestStrings`,arrayInput)
      .toPromise()
      .then(response => {
        const resultado = response;
        return resultado;
      });
  }

  minesweeper(arrayInput:boolean[][]): Promise<number[][]> {
    return this.http.put<number[][]>(`${this.algoritimoUrl}/minesweeper`,arrayInput)
      .toPromise()
      .then(response => {
        const resultado = response;
        return resultado;
      });
  }

  almostIncreasingSequence(arrayInput:number[]): Promise<boolean> {
    return this.http.put<boolean>(`${this.algoritimoUrl}/almostIncreasingSequence`,arrayInput)
      .toPromise()
      .then(response => {
        const resultado = response;
        return resultado;
      });
  }
}
