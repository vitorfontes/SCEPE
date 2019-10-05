import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EmployeeService } from './services/employees.service';
import { Employees } from '../shared/models/employees.model';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  public employeeForm: FormGroup
  public employees: Employees[]
  private action: string = '---'
  public update_flag: boolean = false
  public id: number

  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployees()
  }

  private getEmployees() {
    this.employeeService.getEmployees()
      .subscribe(
        employees => this.employees = [...employees],
        err => console.log(err),
        () => this.modalService.hasOpenModals() ? this.modalService.dismissAll() : null
      )
  }

  public openModal = (content) => {
    this.update_flag = false
    this.generateEmployeeForm()
    this.modalService.open(content, { centered: true, backdrop: 'static' })
  }

  private generateEmployeeForm = (): void => {
    this.employeeForm = this.fb.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      salario: [null, Validators.required],
      statusFerias: [null, Validators.required],
      dataAfastamento: [null, Validators.required],
      dataRetorno: [null, Validators.required]
    })
  }

  private generateEmployeeUpdateForm = (employee: Employees): void => {
    console.log(employee)
    this.employeeForm = this.fb.group({
      idFuncionario: [employee.idFuncionario, Validators.required],
      nome: [employee.nome, Validators.required],
      sobrenome: [employee.sobrenome, Validators.required],
      salario: [employee.salario, Validators.required],
      statusFerias: [employee.statusFerias, Validators.required],
      dataAfastamento: [employee.dataAfastamento, Validators.required],
      dataRetorno: [employee.dataRetorno, Validators.required]
    })
  }

  public postEmployee = (): void => {
    let employee: Employees = this.employeeForm.getRawValue()

    this.employeeService.postEmployees(employee).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => this.getEmployees()
    )
  }

  public putEmployee = (): void => {
    let employee_update: Employees = this.employeeForm.getRawValue()
    this.employeeService.putEmployees(employee_update, employee_update.idFuncionario).subscribe(() => this.getEmployees())
  }

  public deleteEmployee = (): void => {
    this.employeeService.deleteEmployees(this.id).subscribe(() => this.getEmployees())
  }

  public set_action = (action: string): string => this.action = action

  public execute_action = (employee: Employees, employee_form_modal: any, delete_modal: any): void => {
    switch (this.action) {
      case 'Atualizar':
        this.update_flag = true
        this.generateEmployeeUpdateForm(employee)
        this.modalService.open(employee_form_modal, { centered: true, backdrop: 'static' })
        break;
      case 'Deletar':
        this.id = employee.idFuncionario
        this.modalService.open(delete_modal, { centered: true, backdrop: 'static' })
        break;
      default:
        alert('Favor selecionar uma ação!!!')
        break;
    }
  }
}
