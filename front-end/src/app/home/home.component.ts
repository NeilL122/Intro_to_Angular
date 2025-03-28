import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  photo: String =
    'https://www.google.com/imgres?q=work%20img&imgurl=https%3A%2F%2Fpng.pngtree.com%2Felement_our%2F20190528%2Fourmid%2Fpngtree-a-man-at-work-image_1169889.jpg&imgrefurl=https%3A%2F%2Fpngtree.com%2Fso%2Fhow-it-works&docid=idLJ4CtWZBgOfM&tbnid=k91oMwzTy1Y9aM&vet=12ahUKEwipxuaYjKuMAxXRJjQIHcCONUMQM3oECH8QAA..i&w=360&h=360&hcb=2&ved=2ahUKEwipxuaYjKuMAxXRJjQIHcCONUMQM3oECH8QAA';
  constructor() {}

  ngOnInit() {}
}
