import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'adsi';
    constructor() {
    }

    visualiza = "0";
    memoria = "";
    operacion = "";

    uno(uno: string) {
        this.visualiza = this.visualiza + "1";
    }

    dos(dos: string) {
        this.visualiza = this.visualiza + "2";
    }

    tres(tres: string) {
        this.visualiza = this.visualiza + "3";
    }

    cuatro(cuatro: string) {
        this.visualiza = this.visualiza + "4";
    }

    cinco(cinco: string) {
        this.visualiza = this.visualiza + "5";
    }

    seis(seis: string) {
        this.visualiza = this.visualiza + "6";
    }

    siete(siete: string) {
        this.visualiza = this.visualiza + "7";
    }

    ocho(ocho: string) {
        this.visualiza = this.visualiza + "8";
    }

    nueve(nueve: string) {
        this.visualiza = this.visualiza + "9";
    }

    cero(nueve: string) {
        this.visualiza = this.visualiza + "0";
    }

    borrar() {
        this.visualiza = "";
        this.memoria = "";
    }

    suma() {
        this.memoria = this.visualiza;
        this.visualiza = "";
        this.operacion = "suma";
    }

    resta() {
        this.memoria = this.visualiza;
        this.visualiza = "";
        this.operacion = "resta";
    }

    multiplica() {
        this.memoria = this.visualiza;
        this.visualiza = "";
        this.operacion = "multiplica";
    }

    divide() {
        this.memoria = this.visualiza;
        this.visualiza = "";
        this.operacion = "divide";
    }

    resultado() {
        let valor1 = Number(this.visualiza);
        let valor2 = Number(this.memoria);

        if (this.operacion == "suma") {
            let suma = Number(valor1) + Number(valor2);
            this.visualiza = suma.toString();
        } else if (this.operacion == "resta") {
            let suma = Number(valor2) - Number(valor1);
            this.visualiza = suma.toString();
        } else if (this.operacion == "multiplica") {
            let suma = Number(valor1) * Number(valor2);
            this.visualiza = suma.toString();
        } else if (this.operacion == "divide") {
            let suma = Number(valor2) / Number(valor1);
            this.visualiza = suma.toString();
        }
    }
}
