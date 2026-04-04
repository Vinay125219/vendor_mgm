export function getRazorpayKeyId(): string {
  return import.meta.env.PUBLIC_RAZORPAY_KEY_ID ?? 'rzp_test_mock_key';
}

export function getRazorpayWebhookSecret(): string {
  return import.meta.env.RAZORPAY_WEBHOOK_SECRET ?? 'whsec_mock_change_in_production';
}

export function getRazorpayKeySecret(): string {
  return import.meta.env.RAZORPAY_KEY_SECRET ?? 'key_secret_mock';
}
