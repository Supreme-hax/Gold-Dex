import { Request, Response, NextFunction } from 'express';
import speakeasy from 'speakeasy';

export function verifyTwoFactor(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['x-2fa-token'] as string;
  const secret = process.env.TWOFA_SECRET;
  if (!token || !secret) {
    return res.status(403).json({ success: false, error: { code: 'TWO_FACTOR_REQUIRED', message: '2FA required' } });
  }
  const verified = speakeasy.totp.verify({ secret, encoding: 'base32', token });
  if (!verified) {
    return res.status(403).json({ success: false, error: { code: 'TWO_FACTOR_INVALID', message: 'Invalid 2FA token' } });
  }
  next();
}
