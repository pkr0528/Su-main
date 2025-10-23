import { Shield, FileText, Heart } from 'lucide-react';
import ProductCard from './ProductCard';

export default function Products({ onSubscribe }) {
  const products = [
    {
      title: 'IDP (Intelligent Document Processing)',
      description: 'Secure, decentralized identity management solution for the Web 5.0 era. Control your digital identity with blockchain-backed verification.',
      features: [
        'Decentralized identity verification',
        'Multi-factor authentication',
        'Biometric security integration',
        'Cross-platform compatibility',
        'Real-time fraud detection',
      ],
      icon: Shield,
      gradient: 'from-cyan-500 to-blue-600',
      redirectUrl: '/products/idp',
    },
    {
      title: 'RFP (Request for Proposal)',
      description: 'Streamline your procurement process with AI-powered RFP management. Create, manage, and evaluate proposals efficiently.',
      features: [
        'AI-powered proposal generation',
        'Automated vendor matching',
        'Collaborative review workflows',
        'Smart contract integration',
        'Advanced analytics dashboard',
      ],
      icon: FileText,
      gradient: 'from-violet-500 to-purple-600',
      redirectUrl: '/products/rfp',
    },
    {
      title: 'Insurance Platform',
      description: 'Modern insurance solutions powered by smart contracts and AI. Transparent, fast, and user-friendly insurance management.',
      features: [
        'Instant claim processing',
        'Smart contract automation',
        'Risk assessment AI',
        'Multi-policy management',
        'Blockchain-verified records',
      ],
      icon: Heart,
      gradient: 'from-emerald-500 to-teal-600',
      redirectUrl: '/products/insurance',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-6">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} onSubscribe={onSubscribe} />
        ))}
      </div>
    </div>
  );
}
