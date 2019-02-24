import { ButtonModule } from 'primeng/button';
import { AlgoritimoService } from './algoritimo.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-algoritimos',
  templateUrl: './algoritimos.component.html',
  styleUrls: ['./algoritimos.component.css']
})
export class AlgoritimosComponent implements OnInit {

  formularioIsLucky: FormGroup;
  resultado: boolean;
  formularioCircleOfNumbers: FormGroup;
  resultado2: number;
  formularioAlphabeticShift: FormGroup;
  resultado3: string;
  formularioAllLongestStrings: FormGroup;
  resultado4: string;
  formularioMinesweeper: FormGroup;
  resultado5: string;
  formularioAlmostIncreasingSequencer: FormGroup;
  resultado6: string;

  constructor(
    private algoritimoService: AlgoritimoService,
    private formBuilder: FormBuilder
  ) { }  

  ngOnInit() {
    this.configurarFormularioIsLucky();
    this.configurarFormularioCircleOfNumbers();
    this.configurarFormularioAlphabeticShift();
    this.configurarFormularioAllLongestStrings();
    this.configurarFormularioMinesweeper();
    this.configurarFormularioAlmostIncreasingSequencer();
    
  } 

  isLucky() {
    this.algoritimoService.isLucky(this.formularioIsLucky.get('entrada').value)
      .then(resultado => {
        this.resultado = resultado;
      })
      //.catch(erro => this.errorHandler.handle(erro));
  }

  circleOfNumbers() {
    this.algoritimoService.circleOfNumbers(
      this.formularioCircleOfNumbers.get('entrada1').value,
      this.formularioCircleOfNumbers.get('entrada2').value
    )
      .then(resultado => {
        this.resultado2 = resultado;
      })
      //.catch(erro => this.errorHandler.handle(erro));
  }

  alphabeticShift() {
    this.algoritimoService.alphabeticShift(this.formularioAlphabeticShift.get('entrada').value)
      .then(resultado => {
        this.resultado3 = resultado.toString();
      })
      //.catch(erro => this.errorHandler.handle(erro));
  }

  allLongestStrings() {
    this.algoritimoService.allLongestStrings(eval(this.formularioAllLongestStrings.get('entrada').value))
      .then(resultado => {
        this.resultado4 = JSON.stringify(resultado);
      })
      //.catch(erro => this.errorHandler.handle(erro));
  }

  minesweeper() {
    const matrix: boolean[][] = eval(this.formularioMinesweeper.get('entrada').value);
    this.algoritimoService.minesweeper(matrix)
    .then(resultado => {
        this.resultado5 = JSON.stringify(resultado);
      })
      //.catch(erro => this.errorHandler.handle(erro));
  }  

  almostIncreasingSequence() {
    const seq: number[] = eval(this.formularioAlmostIncreasingSequencer.get('entrada').value);
    this.algoritimoService.almostIncreasingSequence(seq)
    .then(resultado => {
        this.resultado6 = JSON.stringify(resultado);
      })
      //.catch(erro => this.errorHandler.handle(erro));
  }  
  


  configurarFormularioIsLucky() {
    this.formularioIsLucky = this.formBuilder.group({
      entrada: [1230]
    });
  }  

  configurarFormularioCircleOfNumbers() {
    this.formularioCircleOfNumbers = this.formBuilder.group({
      entrada1: [10],
      entrada2: [2]
    });
  }  

  configurarFormularioAlphabeticShift() {
    this.formularioAlphabeticShift = this.formBuilder.group({
      entrada: ['crazy']
    });
  }  

  configurarFormularioAllLongestStrings() {
    this.formularioAllLongestStrings = this.formBuilder.group({
      entrada: ["['aba', 'aa', 'ad', 'vcd', 'aba']"]
    });
  }  

  configurarFormularioMinesweeper() {
    this.formularioMinesweeper = this.formBuilder.group({
      entrada: ["[[true, false, false],\n[false, true, false],\n[false, false, false]]"]
    });
  }

  configurarFormularioAlmostIncreasingSequencer() {
    this.formularioAlmostIncreasingSequencer = this.formBuilder.group({
      entrada: ["[1,3,2,1]"]
    });
  }

  
}
