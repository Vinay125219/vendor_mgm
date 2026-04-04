import { randomBytes } from 'node:crypto';
import type { ApiEnvelope } from '@/types/api-contracts';

export type RazorpayOrderStub = {
  id: string;
  entity: 'order';
  amount: number;
  currency: 'INR';
  receipt: string;
  status: 'created';
};

export function createRazorpayOrderStub(input: {
  amountPaise: number;
  receipt: string;
}): ApiEnvelope<RazorpayOrderStub> {
  const id = `order_${randomBytes(8).toString('hex')}`;
  return {
    ok: true,
    data: {
      id,
      entity: 'order',
      amount: input.amountPaise,
      currency: 'INR',
      receipt: input.receipt,
      status: 'created',
    },
    meta: { requestId: `req_${randomBytes(4).toString('hex')}`, version: '1' },
  };
}
