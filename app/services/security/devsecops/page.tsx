import type { Metadata } from "next";
import SecurityServicePage, {
  type SecurityServiceContent,
} from "../_components/SecurityServicePage";

export const metadata: Metadata = {
  title: "DevSecOps & CI/CD Security | Cloudlem",
  description:
    "Integrate security into CI/CD with secure pipeline design, SAST, dependency scanning, secrets protection, IaC checks, and release controls. Explore Cloudlem DevSecOps services.",
};

const content: SecurityServiceContent = {
  title: "DevSecOps &",
  accent: "CI/CD Security",
  eyebrow: "Security / Secure Software Delivery",
  description:
    "Make security part of how software is designed, built, tested, and deployed. Cloudlem helps teams introduce practical security controls into delivery workflows without losing the speed and consistency of automation.",
  image: "/images/backgrounds/section-3-2.jpg",
  imageAlt: "Technology infrastructure representing secure software delivery",
  outcomes: [
    "Earlier visibility into code and dependency risks",
    "More consistent security checks across releases",
    "Clear ownership and remediation workflows",
  ],
  problems: [
    {
      title: "Security arrives too late",
      description:
        "Vulnerabilities discovered just before release create rework, delay delivery, and increase operational risk.",
    },
    {
      title: "Pipelines hold sensitive access",
      description:
        "Build agents, tokens, secrets, and deployment permissions need controls that fit automated delivery processes.",
    },
    {
      title: "Findings lack context",
      description:
        "Disconnected scanners and noisy alerts can make it difficult to prioritize vulnerabilities and track fixes.",
    },
  ],
  capabilities: [
    {
      title: "Secure Pipeline Architecture",
      description:
        "Review CI/CD identities, permissions, runners, approval gates, artifact handling, and the trust boundaries between build and deployment environments.",
    },
    {
      title: "Code & Dependency Scanning",
      description:
        "Integrate static application security testing (SAST) and software composition analysis (SCA) into pull-request and build workflows.",
    },
    {
      title: "Secrets Protection",
      description:
        "Introduce secret detection, safe credential storage, rotation practices, and short-lived access where supported by the platform.",
    },
    {
      title: "Infrastructure-as-Code Security",
      description:
        "Evaluate Terraform, cloud templates, and Kubernetes manifests for risky configurations before infrastructure changes reach production.",
    },
    {
      title: "Container & Artifact Integrity",
      description:
        "Assess image scanning, software bill of materials practices, artifact provenance, and controls for trusted release packages.",
    },
    {
      title: "Security Gates & Remediation",
      description:
        "Create risk-based policies, actionable findings, exception workflows, and verification steps that teams can operate over time.",
    },
  ],
  approach: [
    {
      title: "Assess",
      description:
        "Review repositories, pipeline design, permissions, existing scanners, and release processes.",
    },
    {
      title: "Prioritize",
      description:
        "Identify high-value security controls and agree on thresholds, ownership, and exceptions.",
    },
    {
      title: "Integrate",
      description:
        "Implement approved scanning and policy checks in the workflows your team already uses.",
    },
    {
      title: "Validate",
      description:
        "Test pipeline behavior, tune noisy findings, document controls, and hand over operating guidance.",
    },
  ],
  deliverables: [
    "CI/CD security assessment and prioritized recommendations",
    "Documented pipeline security architecture and control plan",
    "Agreed automated scans, policies, and release gates",
    "Remediation guidance with ownership and exception handling",
    "Validation results and operational handover documentation",
  ],
  technologies: [
    "GitHub Actions",
    "Azure DevOps",
    "GitLab CI/CD",
    "Jenkins",
    "SAST / DAST / SCA",
    "Terraform",
    "Secret Scanning",
    "Container Scanning",
    "SBOM",
  ],
  faqs: [
    {
      question: "Can DevSecOps be added to our existing CI/CD pipelines?",
      answer:
        "Yes. The starting point is a review of your existing tools and workflow. Security checks can be introduced incrementally, with suitable thresholds and clear ownership.",
    },
    {
      question: "Will security scanning slow down our deployments?",
      answer:
        "Some scans take time, so we choose when they run and which findings should block a release. A risk-based design can balance protection and delivery speed.",
    },
    {
      question: "Do we need to replace our development tools?",
      answer:
        "Usually not. We first evaluate security integrations for your current source control, build systems, registries, and cloud platforms.",
    },
  ],
  related: [
    { title: "Cloud Security & Posture Management", href: "/services/security/cloud-security" },
    { title: "Kubernetes & Container Security", href: "/services/security/kubernetes-security" },
  ],
};

export default function DevSecOpsPage() {
  return <SecurityServicePage content={content} />;
}
