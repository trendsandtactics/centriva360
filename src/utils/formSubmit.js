/**
 * Utility to send contact form submissions to info@centriva360.com via FormSubmit.co
 * FormSubmit handles delivery without requiring backend mail server configuration.
 *
 * NOTE: On the first submission ever made to info@centriva360.com, FormSubmit.co
 * sends an activation email to info@centriva360.com with a confirmation button.
 * Once clicked, all future submissions are delivered instantly to the inbox.
 */

const FORMSUBMIT_EMAIL = 'info@centriva360.com';
const FORMSUBMIT_URL = `https://formsubmit.co/ajax/${FORMSUBMIT_EMAIL}`;

export const sendViaFormSubmit = async ({ name, email, company, capability, message }) => {
  const payload = {
    name: name,
    email: email,
    _replyto: email,
    _subject: `New Centriva360 Inquiry: ${capability} (${company || name})`,
    _template: 'table',
    _captcha: 'false',
    'Full Name': name,
    'Work Email': email,
    'Company': company || 'Individual',
    'Capability Needed': capability,
    'Outsource Details': message,
    'Submitted On': new Date().toLocaleString()
  };

  const response = await fetch(FORMSUBMIT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    const errorMsg = data?.message || `FormSubmit service error (${response.status})`;
    throw new Error(errorMsg);
  }

  return data;
};
