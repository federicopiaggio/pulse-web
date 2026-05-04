## Development

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000.

## Contact Form Email Setup

The contact API uses Resend and requires these environment variables:

```bash
RESEND_API_KEY=re_...
CONTACT_EMAIL=destination@example.com
RESEND_FROM_EMAIL="Pulse Bariloche <noreply@pulsebariloche.com.ar>"
```

Important:

- `RESEND_FROM_EMAIL` must use an address from a domain verified in Resend.
- Do not use `onboarding@resend.dev` in production. That sender is limited to test deliveries.
- If you deploy on Vercel, add the same variables in the project environment settings and redeploy.

Recommended sender for this project:

```bash
RESEND_FROM_EMAIL="Pulse Bariloche <noreply@pulsebariloche.com.ar>"
```

`CONTACT_EMAIL` can be any inbox where you want to receive the form submissions.
