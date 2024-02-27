import { Component } from '@angular/core';

@Component({
  selector: 'app-unauthorized',
  template: `
    <div>
      <h1 style="font-weight: bolder; color: black ">UNAUTHORIZED ACCESS!!</h1>
      <h3 style="font-weight: bolder; font-style: italic; color: #C70039">
        You need specific permission to access this resource
      </h3>
      <div class="pic">
        <img
          src="../../../assets/unauthorized.jpg"
          class="img-fluid"
          alt="Sample image"
        />
      </div>
    </div>
  `,
  styles: [
    `
      div {
        text-align: center;
        margin-top: 20px;
        background-repeat: no-repeat;
        background-size: cover;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    `,
  ],
})
export class UnauthorizedComponent {}
