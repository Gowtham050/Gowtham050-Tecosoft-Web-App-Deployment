"use client";

import { X } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function JobDetailsModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-1100 flex items-center justify-center">
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[10px]"
      />

      {/* Modal */}
      <div className="relative flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b bg-white px-6 py-4">
          <div>
            <h2 className="text-xl font-semibold">Product Designer</h2>
            <div className="mt-1 flex gap-2">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-700">
                Remote
              </span>
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                Full-time
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-8 text-gray-700">
          {/* Intro */}
          <p>
            You’ll collaborate with product managers, engineers, and
            stakeholders to design intuitive, user-centered digital products.
            You’ll take ideas from concept to execution.
          </p>

          {/* What you’ll do */}
          <section>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              What you’ll do
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>
                Design user flows, wireframes, prototypes, and high-fidelity UI
              </li>
              <li>Work closely with product and engineering teams</li>
              <li>Translate user needs into elegant solutions</li>
              <li>Conduct basic user research and iterate on feedback</li>
              <li>Maintain and contribute to design systems</li>
            </ul>
          </section>

          {/* Requirements */}
          <section>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              What we’re looking for
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>2+ years of UX / UI / Product Design experience</li>
              <li>Strong portfolio showing UX thinking</li>
              <li>Proficiency with Figma or similar tools</li>
              <li>Understanding of accessibility & usability</li>
              <li>Strong communication skills</li>
            </ul>
          </section>

          {/* Nice to have */}
          <section>
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              Nice to have
            </h3>
            <ul className="space-y-2 list-disc pl-5">
              <li>Experience with SaaS or complex platforms</li>
              <li>Design systems & agile workflows</li>
            </ul>
          </section>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 border-t bg-white px-6 py-4 flex items-center justify-between">
          <span className="text-sm text-gray-500">Posted 2 days ago</span>

          <button className="rounded-lg bg-green-600 px-6 py-2 text-white hover:bg-green-700 transition">
            Apply Job →
          </button>
        </div>
      </div>
    </div>
  );
}
