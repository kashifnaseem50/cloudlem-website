import type { Metadata } from "next";
import SecurityServicePage, {
  type SecurityServiceContent,
} from "../_components/SecurityServicePage";

export const metadata: Metadata = {
  title: "Cloud Security & Posture Management | Cloudlem",
  description:
    "Strengthen AWS, Azure, and Google Cloud security with posture assessments, IAM reviews, network and data protection, logging, and prioritized cloud remediation from Cloudlem.",
};

const content: SecurityServiceContent = {
  title: "Cloud Security &",
  accent: "Posture Management",
  eyebrow: "Security / Multi-Cloud Protection",
  description:
    "Strengthen the foundations of your AWS, Azure, and Google Cloud environments. Cloudlem helps identify configuration gaps, improve identity and data controls, and build a practical roadmap for ongoing cloud security.",
  image: "/images/backgrounds/section-2-2.jpg",
  imageAlt: "Cloud infrastructure representing secure multi-cloud systems",
  outcomes: [
    "Clear visibility into cloud configuration risks",
    "Stronger identity, network, and data controls",
    "Prioritized improvements across cloud accounts",
  ],
  problems: [
    {
      title: "Cloud estates keep changing",
      description:
        "New workloads, identities, subscriptions, and services make it difficult to keep configurations aligned with security expectations.",
    },
    {
      title: "Permissions expand over time",
      description:
        "Broad roles, unused credentials, and inconsistent access practices can increase exposure across cloud environments.",
    },
    {
      title: "Alerts are hard to prioritize",
      description:
        "Posture tools surface many findings; teams need context to determine which misconfigurations create meaningful risk.",
    },
  ],
  capabilities: [
    {
      title: "Cloud Security Assessments",
      description:
        "Review account structure, subscriptions, workloads, storage, public exposure, and security settings against agreed baselines.",
    },
    {
      title: "IAM & Privileged Access",
      description:
        "Evaluate access roles, authentication, service identities, privileged accounts, and least-privilege controls across cloud platforms.",
    },
    {
      title: "Network & Workload Protection",
      description:
        "Assess security groups, firewall rules, ingress exposure, private connectivity, and workload hardening requirements.",
    },
    {
      title: "Cloud Security Posture Management",
      description:
        "Configure and tune available posture-management capabilities, review findings, and define remediation and exception workflows.",
    },
    {
      title: "Logging & Threat Visibility",
      description:
        "Review audit logging, security alerts, monitoring coverage, and integrations with existing security operations tools.",
    },
    {
      title: "Data Protection & Encryption",
      description:
        "Evaluate data access, key management, encryption settings, backup protections, and sensitive storage configurations.",
    },
  ],
  approach: [
    {
      title: "Discover",
      description:
        "Understand cloud accounts, ownership, architecture, critical workloads, and applicable requirements.",
    },
    {
      title: "Assess",
      description:
        "Review identity, networking, data protection, logging, and posture findings.",
    },
    {
      title: "Harden",
      description:
        "Plan and implement approved improvements with change controls and operational coordination.",
    },
    {
      title: "Maintain",
      description:
        "Document baselines, ownership, monitoring priorities, and a repeatable remediation process.",
    },
  ],
  deliverables: [
    "Multi-cloud security posture assessment and findings register",
    "Risk-ranked cloud configuration and access recommendations",
    "Agreed security baseline and hardening implementation plan",
    "Monitoring, alerting, and remediation workflow guidance",
    "Validation report with operational handover notes",
  ],
  technologies: [
    "AWS",
    "Microsoft Azure",
    "Google Cloud",
    "AWS Security Hub",
    "Microsoft Defender for Cloud",
    "Security Command Center",
    "Cloud IAM",
    "CSPM",
    "Cloud Audit Logs",
  ],
  faqs: [
    {
      question: "Can you assess AWS, Azure, and Google Cloud together?",
      answer:
        "Yes. The assessment can cover one or more platforms, while documenting platform-specific controls and shared governance requirements.",
    },
    {
      question: "Is cloud security assessment the same as a penetration test?",
      answer:
        "No. This service focuses on configuration, identity, architecture, monitoring, and control gaps. Penetration testing requires separate scope, authorization, and specialist methodology.",
    },
    {
      question: "Will changes be made to production immediately?",
      answer:
        "No. Findings are reviewed and prioritized first. Any remediation in your environment should follow an agreed scope, approvals, and change-management process.",
    },
  ],
  related: [
    { title: "DevSecOps & CI/CD Security", href: "/services/security/devsecops" },
    { title: "Kubernetes & Container Security", href: "/services/security/kubernetes-security" },
  ],
};

export default function CloudSecurityPage() {
  return <SecurityServicePage content={content} />;
}
