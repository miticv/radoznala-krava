import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <main class="container">
      <h1>Terms of Service</h1>
      <p>Last updated: November 11, 2025</p>

      <h2>1. Acceptance of terms</h2>
      <p>
        By using our website, you agree to these Terms of Service. If you do
        not agree, please do not use the site.
      </p>

      <h2>2. Use of the service</h2>
      <p>
        You may use the site for lawful purposes only. You are responsible for
        complying with applicable laws and not using the service for any
        unlawful or harmful activities.
      </p>

      <h2>3. Intellectual property</h2>
      <p>All content on the site is protected by copyright and other laws.</p>

      <h2>4. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any
        indirect, incidental, or consequential damages arising from your use
        of the site.
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
export class TermsComponent {}

