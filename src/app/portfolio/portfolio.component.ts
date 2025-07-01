import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';
import { Tag } from '../_models/tags';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Report Management System',
      summary: 'Full-stack platform to manage, upload, and analyze reports with filters and export support.',
      description: 'Developed a scalable Angular + .NET Core reporting platform with secure REST APIs. Users can upload and query reports with validation, analytics, and export options. Optimized PostgreSQL queries and schema for large datasets.',
      projectLink: '',
      tags: [Tag.ANGULAR, Tag.DOTNET, Tag.POSTGRESQL],
      pictures: []
    },
    {
      id: 2,
      name: 'Carpentry Service Management System',
      summary: 'Real-time carpentry task tracking and worker assignment system with secure role-based access.',
      description: 'Built a web system with Angular frontend and .NET backend supporting job creation, worker assignments, and job updates. JWT-based security and modular API design. PostgreSQL schema for job and role tracking.',
      projectLink: 'https://fyxhomes.netlify.app/',
      tags: [Tag.ANGULAR, Tag.DOTNET, Tag.POSTGRESQL],
      pictures: []
    },
    {
      id: 3,
      name: 'Financial Allocation System',
      summary: 'Microservice-based financial platform using Clean Architecture, RabbitMQ, and API Gateway.',
      description: 'Designed backend services (COA, Trial Balance, Entity, Allocation) with independent DBs and logic. Used RabbitMQ for async messaging and Ocelot Gateway for routing and load balancing.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.POSTGRESQL, Tag.RABBITMQ, Tag.OCELot],
      pictures: []
    },
    {
      id: 4,
      name: 'Multi-Service Launcher Desktop App',
      summary: 'Automation tool to run, log, and kill services (Angular/.NET) from a single GUI app.',
      description: 'Created a desktop launcher using Python Tkinter + subprocess/threading to start multiple services (Angular, .NET) from JSON configs. Displays real-time logs in tabs, and dynamically tracks port usage.',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.TKINTER, Tag.DOTNET],
      pictures: []
    },
    {
      id: 5,
      name: 'Library Manager API',
      summary: 'FastAPI-based REST API to manage books, users, loans, and librarians with PostgreSQL.',
      description: 'Built using Python, FastAPI, and PostgreSQL. Supports full CRUD, book borrowing history, member management, and admin-level operations with proper DTO and service layers.',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.FASTAPI, Tag.POSTGRESQL],
      pictures: []
    },
    {
      id: 6,
      name: 'Redis Visualizer App',
      summary: 'Real-time dashboard to monitor Redis keys, TTLs, and memory stats.',
      description: 'Blazor + .NET 9 based Redis visualization tool with key browsing, filter/search, TTL monitoring, and memory usage tracking. Built using Clean Architecture.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.REDIS, Tag.TYPESCRIPT],
      pictures: []
    },
    {
      id: 7,
      name: 'EduConnect API (.NET)',
      summary: 'RESTful API for educational management — students, teachers, subjects, and grades.',
      description: 'Built using ASP.NET Core and PostgreSQL, EduConnect simplifies academic admin with modular layers, JWT authentication, DTO abstraction, and EF Core for seamless data access. Role-based access protects endpoints.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.POSTGRESQL, Tag.JWT, Tag.RESTAPI],
      pictures: []
    },
    {
      id: 8,
      name: 'Barcode Generator API (FastAPI)',
      summary: 'Lightweight FastAPI service for dynamic barcode image generation (no DB required).',
      description: 'Uses Python and FastAPI to dynamically serve barcode images. Implements in-memory buffering to avoid persistent storage. Swagger UI enabled. Designed with DRY + MVC principles.',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.FASTAPI, Tag.RESTAPI],
      pictures: []
    },
    {
      id: 9,
      name: 'NoteKeeper API (.NET)',
      summary: 'Secure note-taking API using ASP.NET Core and JWT, with PostgreSQL persistence.',
      description: 'Provides endpoints for creating notebooks, saving notes, and managing access. Role-based JWT security implemented. Structured using Clean Architecture with DDD principles.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.JWT, Tag.RESTAPI, Tag.POSTGRESQL],
      pictures: []
    },
    {
      id: 10,
      name: 'Majority Insights App (FastAPI + Dash)',
      summary: 'Political data analytics platform using Dash to show US legislator voting behavior.',
      description: 'REST backend built using FastAPI serving structured data to Dash. Features tab-based UI to explore voting stats on bills and politicians. Lightweight analytics dashboard.',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.FASTAPI, Tag.DASH, Tag.PLOTLY],
      pictures: []
    },
    {
      id: 11,
      name: 'Tutor Scheduling API (.NET)',
      summary: 'Appointment and scheduling API for tutors and students using ASP.NET Core.',
      description: 'Manages tutors, students, and appointments. Secure endpoints with JWT, structured PostgreSQL DB. Designed with separation of concerns — controllers, services, repositories.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.POSTGRESQL, Tag.JWT, Tag.RESTAPI],
      pictures: []
    },
    {
      id: 12,
      name: 'Music Time Travel API (FastAPI)',
      summary: 'Spotify integration API that builds playlists from a selected historical date.',
      description: 'Developed using FastAPI and Spotify API. Retrieves chart-topping tracks for a specific date and builds a time-travel playlist. Credentials managed securely via environment vars.',
      projectLink: '',
      tags: [Tag.PYTHON, Tag.FASTAPI, Tag.RESTAPI],
      pictures: []
    },
    {
      id: 13,
      name: 'Library Manager API (.NET)',
      summary: 'Complete library backend for books, members, loans, and visitors using ASP.NET Core.',
      description: 'Implements CRUD endpoints for all library operations. Designed PostgreSQL schema, added JWT auth and role handling. Uses EF Core and layered service architecture.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.POSTGRESQL, Tag.JWT, Tag.RESTAPI],
      pictures: []
    },
    {
      id: 14,
      name: 'EventLog Tracker API (.NET)',
      summary: 'Custom event logger service storing app-level events and logs with timestamps.',
      description: 'Built in ASP.NET Core with EF Core to log custom events by category, source, and severity. Ideal for apps needing structured internal logging without third-party tools.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.POSTGRESQL, Tag.RESTAPI],
      pictures: []
    },
    {
      id: 15,
      name: 'Online Exam API (.NET)',
      summary: 'Exam backend for students and faculties with role-based question and response handling.',
      description: 'Enables question banks, exams, student submissions, and scoring logic. JWT-protected endpoints with PostgreSQL persistence. Clean Architecture pattern.',
      projectLink: '',
      tags: [Tag.DOTNET, Tag.POSTGRESQL, Tag.JWT, Tag.RESTAPI],
      pictures: []
    }
    


  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('PB | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
