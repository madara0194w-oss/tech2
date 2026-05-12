function computeFallbackDeadlineIso(hoursFromNow: number) {
  const deadline = new Date(Date.now() + hoursFromNow * 60 * 60 * 1000);
  return deadline.toISOString();
}

export default function handler(req: any, res: any) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');

  const configured = process.env.OFFER_DEADLINE_ISO;
  if (configured) {
    const parsed = new Date(configured);
    if (!Number.isNaN(parsed.getTime())) {
      return res.status(200).json({ deadlineIso: parsed.toISOString(), source: 'env' });
    }
  }

  // Fallback: not shared across all users reliably (depends on serverless instance).
  // Set `OFFER_DEADLINE_ISO` in Vercel project env vars for a truly global deadline.
  return res
    .status(200)
    .json({ deadlineIso: computeFallbackDeadlineIso(72), source: 'fallback' });
}
