import type { Metadata } from "next";
import SecurityServicePage, {
  type SecurityServiceContent,
} from "../_components/SecurityServicePage";

export const metadata: Metadata = {
  title: "Kubernetes & Container Security | Cloudlem",
  description:
    "Secure Kubernetes clusters and container workloads across EKS, AKS, and GKE with image scanning, RBAC review, policy controls, network security, and workload hardening.",
};

const content: SecurityServiceContent = {
  title: "Kubernetes &",
  accent: "Container Security",
  eyebrow: "Security / Cloud-Native Workloads",
  description:
    "Protect the platforms that run modern applications. Cloudlem helps teams assess Kubernetes clusters, harden container workloads, and introduce security guardrails that fit cloud-native operations.",
  image: "/images/backgrounds/section-1-4.jpg",
  imageAlt: "Modern technology systems representing protected container workloads",
  outcomes: [
    "More consistent cluster and workload controls",
    "Earlier detection of container image risks",
    "Reduced unnecessary access and network exposure",
  ],
  problems: [
    {
      title: "Clusters are complex to secure",
      description:
        "Kubernetes combines control-plane access, workloads, networking, secrets, and add-ons, each with different security responsibilities.",
    },
    {
      title: "Unsafe defaults reach production",
      description:
        "Privileged containers, overly broad permissions, and permissive network policies can leave workloads more exposed than intended.",
    },
    {
      title: "Images introduce hidden risk",
      description:
        "Base images and dependencies change frequently, making it important to scan, track, and update container artifacts.",
    },
  ],
  capabilities: [
    {
      title: "Cluster Security Assessments",
      description:
        "Review Kubernetes configuration, managed-service settings, RBAC, admission controls, audit logging, and cluster exposure.",
    },
    {
      title: "Container Image Security",
      description:
        "Introduce image scanning, approved registries, image provenance considerations, and a process for updating vulnerable dependencies.",
    },
    {
      title: "Workload & Pod Hardening",
      description:
        "Evaluate security contexts, service accounts, privilege settings, resource controls, and pod security policies or standards.",
    },
    {
      title: "Kubernetes Network Security",
      description:
        "Review ingress exposure, service connectivity, namespace segmentation, and enforceable network policies.",
    },
    {
      title: "Secrets & Identity Controls",
      description:
        "Assess secret handling, workload identities, cloud IAM integrations, least-privilege RBAC, and credential access practices.",
    },
    {
      title: "Policy & Runtime Visibility",
      description:
        "Consider admission policy enforcement, audit events, suspicious workload activity, and integration with monitoring workflows.",
    },
  ],
  approach: [
    {
      title: "Discover",
      description:
        "Review clusters, namespaces, workloads, ingress paths, registries, and deployment patterns.",
    },
    {
      title: "Assess",
      description:
        "Identify high-impact configuration, identity, image, and network security issues.",
    },
    {
      title: "Harden",
      description:
        "Apply approved controls, policies, and pipeline checks in a safe, phased manner.",
    },
    {
      title: "Validate",
      description:
        "Confirm expected workload behavior and hand over repeatable standards and review processes.",
    },
  ],
  deliverables: [
    "Kubernetes and container security assessment report",
    "Prioritized findings for cluster, RBAC, image, and network risks",
    "Recommended workload hardening and policy baselines",
    "Approved image-scanning and policy-control integration plan",
    "Validation results and guidance for platform and application teams",
  ],
  technologies: [
    "Kubernetes",
    "Amazon EKS",
    "Azure AKS",
    "Google GKE",
    "Helm",
    "Trivy",
    "Kyverno",
    "OPA / Gatekeeper",
    "NetworkPolicy",
    "RBAC",
  ],
  faqs: [
    {
      question: "Do you support managed Kubernetes services?",
      answer:
        "The service is designed for Kubernetes environments including EKS, AKS, and GKE. The assessment scope distinguishes cloud-provider responsibilities from controls managed by your team.",
    },
    {
      question: "Can security policies be introduced without disrupting workloads?",
      answer:
        "Policies should be tested in an appropriate environment and phased in with monitoring, exceptions, and rollback planning before broad enforcement.",
    },
    {
      question: "How is container security connected to DevSecOps?",
      answer:
        "Container scans and policy checks can start during image builds, continue through deployment, and feed into runtime monitoring and remediation workflows.",
    },
  ],
  related: [
    { title: "DevSecOps & CI/CD Security", href: "/services/security/devsecops" },
    { title: "Cloud Security & Posture Management", href: "/services/security/cloud-security" },
  ],
};

export default function KubernetesSecurityPage() {
  return <SecurityServicePage content={content} />;
}
