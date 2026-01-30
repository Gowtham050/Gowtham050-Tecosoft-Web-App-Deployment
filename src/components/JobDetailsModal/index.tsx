"use client";

import { useState, useRef } from "react";
import { X, Upload, ChevronDown } from "lucide-react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";

export interface JobData {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  intro?: string;
  whatYoullDo?: string[];
  whatWereLookingFor?: string[];
  niceToHave?: string[];
}

interface Props {
  open: boolean;
  onClose: () => void;
  job?: JobData | null;
}

interface ApplicationFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  countryCode: string;
  currentLocation: string;
  workExperience: string;
  linkedinPortfolio: string;
  attachment: File | null;
}

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must be numeric")
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone number is required"),
  currentLocation: Yup.string().required("Current location is required"),
  workExperience: Yup.string().required("Work experience is required"),
  linkedinPortfolio: Yup.string()
    .url("Please enter a valid URL")
    .required("LinkedIn/Portfolio link is required"),
  attachment: Yup.mixed()
    .required("Resume attachment is required")
    .test("fileSize", "File size must be less than 5MB", (value) => {
      if (!value) return false;
      return (value as File).size <= 5 * 1024 * 1024;
    })
    .test("fileType", "Only PDF, DOC, DOCX files are allowed", (value) => {
      if (!value) return false;
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      return allowedTypes.includes((value as File).type);
    }),
});

const WORK_EXPERIENCE_OPTIONS = [
  "Fresher",
  "0-1 years",
  "1-2 years",
  "2-3 years",
  "3-5 years",
  "5-7 years",
  "7-10 years",
  "10+ years",
];

const COUNTRY_CODES = [
  { code: "+91", country: "IN" },
  { code: "+1", country: "US" },
  { code: "+44", country: "UK" },
  { code: "+61", country: "AU" },
  { code: "+971", country: "UAE" },
];

function Tag({ text }: { text: string }) {
  return (
    <span className="rounded-full bg-[#ccf1ff] px-3 py-1 text-xs sm:text-sm font-medium text-[#005b80]">
      {text}
    </span>
  );
}

function JobDetailsView({
  job,
  onApply,
  onClose,
}: {
  job: JobData;
  onApply: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl mx-4 sm:mx-0">
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-start justify-between border-b border-gray-200 bg-white px-4 sm:px-6 py-4 rounded-t-2xl">
        <div className="flex-1 pr-4">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
            {job.title}
          </h2>
          <div className="mt-2 flex flex-wrap gap-2">
            {job.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <button
            onClick={onApply}
            className="flex items-center gap-1 sm:gap-2 rounded-md bg-[#07af40] px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-[#069935] transition-colors"
          >
            Apply Job
            <svg
              className="h-4 w-4 sm:h-5 sm:w-5 -rotate-90"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <button
            onClick={onClose}
            className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-6 text-gray-700">
        {/* Intro */}
        {job.intro && (
          <p className="text-sm sm:text-base leading-relaxed">{job.intro}</p>
        )}

        {/* What you'll do */}
        {job.whatYoullDo && job.whatYoullDo.length > 0 && (
          <section>
            <h3 className="mb-3 text-base sm:text-lg font-semibold text-gray-900">
              What you'll do
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {job.whatYoullDo.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* What we're looking for */}
        {job.whatWereLookingFor && job.whatWereLookingFor.length > 0 && (
          <section>
            <h3 className="mb-3 text-base sm:text-lg font-semibold text-gray-900">
              What we're looking for
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {job.whatWereLookingFor.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Nice to have */}
        {job.niceToHave && job.niceToHave.length > 0 && (
          <section>
            <h3 className="mb-3 text-base sm:text-lg font-semibold text-gray-900">
              Nice to have
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {job.niceToHave.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}

function ApplicationFormView({
  job,
  onBack,
  onClose,
}: {
  job: JobData;
  onBack: () => void;
  onClose: () => void;
}) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const initialValues: ApplicationFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    countryCode: "+91",
    currentLocation: "",
    workExperience: "",
    linkedinPortfolio: "",
    attachment: null,
  };

  const handleSubmit = (
    values: ApplicationFormValues,
    { setSubmitting, resetForm }: FormikHelpers<ApplicationFormValues>
  ) => {
    console.log("Application submitted:", values);
    // Here you would typically send the data to your backend
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
      setFileName(null);
      alert("Application submitted successfully!");
      onClose();
    }, 1000);
  };

  return (
    <div className="relative flex h-[90vh] w-full max-w-4xl flex-col rounded-2xl bg-white shadow-2xl mx-4 sm:mx-0">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, isSubmitting, errors, touched }) => (
          <Form className="flex flex-col h-full">
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-start justify-between border-b border-gray-200 bg-white px-4 sm:px-6 py-4 rounded-t-2xl">
              <div className="flex-1 pr-4">
                <h2 className="text-xl sm:text-2xl font-semibold text-gray-900">
                  {job.title}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                  {job.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center gap-1 sm:gap-2 rounded-md bg-[#07af40] px-3 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-semibold text-white hover:bg-[#069935] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 -rotate-90"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg border border-gray-200 p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>
            </div>

            {/* Form Content */}
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <label className="form-label">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="firstName"
                    className={`form-input ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="form-label">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="lastName"
                    className={`form-input ${
                      errors.lastName && touched.lastName
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your last name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="form-label">
                    Email address<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className={`form-input ${
                      errors.email && touched.email ? "border-red-500" : ""
                    }`}
                    placeholder="Enter your email address"
                  />
                  <ErrorMessage
                    name="email"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="form-label">
                    Phone number<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="relative">
                      <Field
                        as="select"
                        name="countryCode"
                        className="h-full rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-2 sm:px-3 py-2 text-sm text-gray-600 focus:border-green-500 focus:outline-none appearance-none pr-6 sm:pr-8"
                      >
                        {COUNTRY_CODES.map((item) => (
                          <option key={item.code} value={item.code}>
                            {item.code}
                          </option>
                        ))}
                      </Field>
                      <ChevronDown className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
                    </div>
                    <Field
                      name="phone"
                      className={`form-input rounded-l-none flex-1 ${
                        errors.phone && touched.phone ? "border-red-500" : ""
                      }`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* Current Location */}
                <div>
                  <label className="form-label">
                    Current location<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="currentLocation"
                    className={`form-input ${
                      errors.currentLocation && touched.currentLocation
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your current location"
                  />
                  <ErrorMessage
                    name="currentLocation"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* Work Experience */}
                <div>
                  <label className="form-label">
                    Work Experience<span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Field
                      as="select"
                      name="workExperience"
                      className={`form-input appearance-none pr-10 ${
                        errors.workExperience && touched.workExperience
                          ? "border-red-500"
                          : ""
                      }`}
                    >
                      <option value="">Select</option>
                      {WORK_EXPERIENCE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </Field>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                  </div>
                  <ErrorMessage
                    name="workExperience"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* LinkedIn/Portfolio */}
                <div className="sm:col-span-2">
                  <label className="form-label">
                    Linkedin/Portfolio<span className="text-red-500">*</span>
                  </label>
                  <Field
                    name="linkedinPortfolio"
                    className={`form-input ${
                      errors.linkedinPortfolio && touched.linkedinPortfolio
                        ? "border-red-500"
                        : ""
                    }`}
                    placeholder="Enter your portfolio link"
                  />
                  <ErrorMessage
                    name="linkedinPortfolio"
                    component="p"
                    className="form-error"
                  />
                </div>

                {/* File Attachment */}
                <div className="sm:col-span-2">
                  <label className="form-label">
                    Attachment<span className="text-red-500">*</span>
                  </label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      errors.attachment && touched.attachment
                        ? "border-red-300 bg-red-50"
                        : "border-gray-300 hover:border-gray-400"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(event) => {
                        const file = event.currentTarget.files?.[0];
                        if (file) {
                          setFieldValue("attachment", file);
                          setFileName(file.name);
                        }
                      }}
                    />
                    <p className="text-sm text-gray-500 mb-3">
                      {fileName || "No file chosen"}
                    </p>
                    <button
                      type="button"
                      onClick={() => fileInputRef.current?.click()}
                      className="inline-flex items-center gap-2 rounded-md border border-[#0098d4] px-4 py-2 text-sm font-medium text-[#0098d4] hover:bg-[#0098d4]/5 transition-colors"
                    >
                      Upload file
                      <Upload className="h-4 w-4" />
                    </button>
                    <p className="mt-3 text-xs text-gray-400">
                      File Format: PDF, DOCX, DOC | File Size: Max upto 5 MB
                    </p>
                  </div>
                  <ErrorMessage
                    name="attachment"
                    component="p"
                    className="form-error"
                  />
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default function JobDetailsModal({ open, onClose, job }: Props) {
  const [showApplicationForm, setShowApplicationForm] = useState(false);

  // Default job data if none provided
  const defaultJob: JobData = {
    id: 0,
    title: "Product Designer",
    description: "We're seeking a passionate product designer.",
    tags: ["Remote", "Full time"],
    category: "Design",
    intro:
      "You'll collaborate with product managers, engineers, and stakeholders to design intuitive, user-centered digital products. You'll take ideas from concept to execution and turn complex problems into simple, elegant solutions.",
    whatYoullDo: [
      "Design user flows, wireframes, prototypes, and high-fidelity UI",
      "Work closely with product and engineering teams throughout the design process",
      "Translate user needs and business goals into clear design solutions",
      "Conduct basic user research and iterate based on feedback",
      "Contribute to and maintain design systems",
    ],
    whatWereLookingFor: [
      "2+ years of experience in product, UX, or UI design",
      "Strong portfolio demonstrating UX thinking and visual design",
      "Proficiency with Figma or similar design tools",
      "Good understanding of usability, accessibility, and interaction design",
      "Strong communication and collaboration skills",
    ],
    niceToHave: [
      "Experience with SaaS or complex digital products",
      "Familiarity with design systems and agile workflows",
    ],
  };

  const currentJob = job || defaultJob;

  const handleClose = () => {
    setShowApplicationForm(false);
    onClose();
  };

  const handleApply = () => {
    setShowApplicationForm(true);
  };

  const handleBack = () => {
    setShowApplicationForm(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div
        onClick={handleClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-[10px]"
      />

      {/* Modal Content */}
      <div className="relative z-10 w-full max-w-4xl">
        {showApplicationForm ? (
          <ApplicationFormView
            job={currentJob}
            onBack={handleBack}
            onClose={handleClose}
          />
        ) : (
          <JobDetailsView
            job={currentJob}
            onApply={handleApply}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  );
}
