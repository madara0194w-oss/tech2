function computeFallbackDeadlineIso(hoursFromNow: number) {
  const deadline = new Date(Date.now() + hoursFromNow * 60 * 60 * 1000);
  return deadline.toISOString();
}

function computeDeterministicWindowDeadlineIso(windowHours: number) {
  const windowMs = windowHours * 60 * 60 * 1000;
  const now = Date.now();
  const nextBoundary = Math.ceil(now / windowMs) * windowMs;
  return new Date(nextBoundary).toISOString();
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

  // Deterministic fallback (same for all users/devices, and won't reset on refresh):
  // rounds up to the next 72-hour boundary from Unix epoch.
  return res.status(200).json({
    deadlineIso: computeDeterministicWindowDeadlineIso(72),
    source: 'deterministic'
  });
}
