import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fadeInUp400ms } from '../../../../../@vex/animations/fade-in-up.animation';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInUp400ms
  ]
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;
  publicForm: UntypedFormGroup;
  ticketForm: UntypedFormGroup;
  municipality: string;
  selectedMunicipality: string;
  selectedFile: any;
  description: any;
  email: string;

  inputType = 'password';
  visible = false;

  constructor(private router: Router,
              private fb: UntypedFormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.publicForm = this.fb.group({
      municipality: ['', Validators.required],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      subject: ['', Validators.required],
      email: ['', Validators.required],
      cellphone: ['', Validators.required],
      file: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.ticketForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', Validators.required],
      cellphone: ['', Validators.required]
    });

    // this.showErrorAlert();
  }

  send() {
    this.router.navigate(['/app']);
    this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'LOL THANKS', {
      duration: 10000
    });
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;
  }

  selectMunicipality(event: any): void {
    this.selectedMunicipality = event.target.value;
  }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }

  showErrorAlert() {
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'DENIED',
      showDenyButton: true,
      denyButtonText: '<a style="width: 48% !important;float: center; margin-top: 20px !important; color: white !important;" data-toggle="modal" data-target="#ticketModal"><b class="forgot-password"><i class="fa fa-angle-left"></i> Log A Ticket</b></a>',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: 'OK',
      denyButtonColor: 'transparent',
      cancelButtonText: '<a href="/#/forgot-password" class="bg-light" routerLink="/forgot-password" style="width: 48% !important;float: center; margin-top: 20px !important; color: white !important;"><b class="forgot-password">Forgot Password <i class="fa fa-angle-right"></i></b></a>',
      cancelButtonColor: 'transparent',
      customClass: {
        confirmButton: 'order-2',
        cancelButton: 'order-2',
        denyButton: 'order-1'
      },
      width: '400px'
    });
  }
}
