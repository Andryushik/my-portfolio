export async function sendContactForm(data) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
    // Longer than the server's SMTP timeouts, so the server's error usually wins.
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error("Failed to send message.");
}
