import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GPU & NPU Compute | Supadirect - Run AI Models at Scale',
  description: 'GPU compute for LLM fine-tuning and image generation. NPU compute for real-time inference. Pay per second, not per month. H100, A100, RTX 4090 available. Starting at $0.10/hour.',
  keywords: ['GPU compute', 'NPU compute', 'AI inference', 'LLM fine-tuning', 'AWS Sagemaker alternative', 'machine learning', 'H100', 'A100'],
  openGraph: {
    title: 'GPU & NPU Compute | Supadirect',
    description: 'Run AI workloads with GPU/NPU compute. Pay per second. No AWS Sagemaker needed. $0.10-0.50/hour.',
    type: 'website',
    url: 'https://supadirect.dev/features/compute',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GPU & NPU Compute | Supadirect',
    description: 'AI compute without AWS. GPU for training, NPU for inference. Pay per second.',
  },
};

export default function ComputeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
