import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="container">
      <h1>Privacy Statement</h1>
      <p>Last updated: November 11, 2025</p>
      <p>
        Your privacy is important to us. This privacy statement explains how we
        collect, use, and protect your personal information when you use our
        website.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Information you provide directly (e.g., contact forms).</li>
        <li>Automatically collected usage data (cookies and analytics).</li>
      </ul>

      <h2>How we use information</h2>
      <p>
        We use the information to provide, maintain and improve our services,
        respond to requests, and personalize user experience.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell personal information. We may share data with service
        providers who perform services on our behalf under appropriate
        confidentiality agreements.
      </p>

      <h2>Your choices</h2>
      <p>
        You can manage cookies in your browser settings and request access to
        or deletion of personal data by contacting us at privacy@example.com.
      </p>

      <p>
        <a routerLink="/">← Back to home</a>
      </p>
    </main>
  `,
  styles: [
    `
      .container { max-width: 720px; margin: 2rem auto; padding: 0 1rem; }
      h1 { font-size: 1.75rem; margin-bottom: 0.5rem; }
      h2 { font-size: 1.125rem; margin-top: 1rem; }
      a { color: #1e88e5; text-decoration: none; }
    `,
  ],
})
export class PrivacyComponent {}

