'use client';

import { useState, FormEvent } from 'react';
import Container from "@/components/Container";
import Button from "@/components/Button";

export default function ContactFormClient() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    enquiryType: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // Static form — no backend yet
    setSubmitted(true);
  }

  return (
    <>
      <section className="py-20" aria-labelledby="contact-heading">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <aside className="space-y-6" aria-label="Contact information">
              <div>
                <h2 id="contact-heading" className="text-2xl font-bold text-[#003366] mb-6">Get in Touch</h2>
                <div className="space-y-5">
                  {[
                    {
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
                      label: "Address",
                      value: "123 Fitness Street\nSydney NSW 2000\nAustralia",
                    },
                    {
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>,
                      label: "Phone",
                      value: "+61 2 9999 9999",
                      href: "tel:+61299999999",
                    },
                    {
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                      label: "General Enquiries",
                      value: "info@csf.edu.au",
                      href: "mailto:info@csf.edu.au",
                    },
                    {
                      icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                      label: "Agent Enquiries",
                      value: "agents@csf.edu.au",
                      href: "mailto:agents@csf.edu.au",
                    },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-[#003366] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-medium mb-0.5">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-[#003366] font-medium text-sm hover:text-[#FF6B00] transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-[#003366] font-medium text-sm whitespace-pre-line">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[#f8f9fa] rounded-xl p-5">
                <h3 className="font-bold text-[#003366] mb-2 text-sm">Office Hours</h3>
                <dl className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Monday – Friday</dt>
                    <dd className="text-gray-700 font-medium">9:00am – 5:00pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Saturday</dt>
                    <dd className="text-gray-700 font-medium">10:00am – 2:00pm</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-gray-500">Sunday</dt>
                    <dd className="text-gray-700 font-medium">Closed</dd>
                  </div>
                </dl>
                <p className="text-xs text-gray-400 mt-2">All times AEST</p>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden bg-[#e5e7eb] h-48 flex items-center justify-center" aria-label="Map placeholder">
                <div className="text-center">
                  <svg className="w-8 h-8 text-gray-400 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-gray-500 text-xs">Map embed placeholder</p>
                </div>
              </div>
            </aside>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                  <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
                  <p className="text-green-700">Thank you for your enquiry. A member of our team will be in touch within 1–2 business days.</p>
                  <Button className="mt-6" href="/" variant="primary">Back to Home</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-6" aria-label="Contact form">
                  <h2 className="text-2xl font-bold text-[#003366]">Send Us a Message</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1.5">First Name <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input
                        id="firstName"
                        name="firstName"
                        type="text"
                        required
                        autoComplete="given-name"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                        placeholder="Jane"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1.5">Last Name <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input
                        id="lastName"
                        name="lastName"
                        type="text"
                        required
                        autoComplete="family-name"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                        placeholder="Smith"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address <span className="text-red-500" aria-hidden="true">*</span></label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                        placeholder="jane@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                        placeholder="+61 4XX XXX XXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="enquiryType" className="block text-sm font-medium text-gray-700 mb-1.5">Enquiry Type <span className="text-red-500" aria-hidden="true">*</span></label>
                    <select
                      id="enquiryType"
                      name="enquiryType"
                      required
                      value={formData.enquiryType}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent bg-white"
                    >
                      <option value="">Select an enquiry type</option>
                      <option value="course-info">Course Information</option>
                      <option value="admissions">Admissions</option>
                      <option value="international">International Students</option>
                      <option value="agents">Education Agents</option>
                      <option value="fees">Fees &amp; Scholarships</option>
                      <option value="current-student">Current Student Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1.5">Subject <span className="text-red-500" aria-hidden="true">*</span></label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message <span className="text-red-500" aria-hidden="true">*</span></label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent resize-y"
                      placeholder="Tell us more about your enquiry..."
                    />
                  </div>

                  <p className="text-xs text-gray-500">
                    By submitting this form, you agree to our{' '}
                    <a href="/privacy" className="text-[#003366] hover:underline">Privacy Policy</a>.
                    We will respond within 1–2 business days.
                  </p>

                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
