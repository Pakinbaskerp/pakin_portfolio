import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrls: [
    './home.component.css',
    '/src/styles.css'
  ]
})

export class HomeComponent implements OnInit {

  dynamicText: string = "";
  phrases: string[] = [
    "Software Engineer.",
    "Backend Engineer.",
    "Full-Stack Developer.",
    "Microservices Enthusiast.",
    "Scalable System Designer.",
    "API Specialist.",
    "Software Architect.",
    "Problem Solver.",
    "DevOps Learner.",
    "Code Craftsman.",
    "Clean Architecture Fanatic."
  ];
  

  currentPhraseIndex: number = 0;
  currentCharIndex: number = 0;
  isDeleting: boolean = false;
  typingSpeed: number = 10;
  deletingSpeed: number = 50;
  delayBetweenPhrases: number = 1000;

  constructor(private titleService: Title) {
    this.titleService.setTitle('PB | Home')
  }


  ngOnInit(): void {
    this.type();
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];
    if (this.isDeleting) {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex - 1);
      this.currentCharIndex--;
    } else {
      this.dynamicText = currentPhrase.substring(0, this.currentCharIndex + 1);
      this.currentCharIndex++;
    }

    if (!this.isDeleting && this.currentCharIndex === currentPhrase.length) {
      this.isDeleting = true;
      setTimeout(() => this.type(), this.delayBetweenPhrases);
    } else if (this.isDeleting && this.currentCharIndex === 0) {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      setTimeout(() => this.type(), 500);
    } else {
      const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
      setTimeout(() => this.type(), speed);
    }
  }


}
