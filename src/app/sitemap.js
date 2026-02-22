export default function sitemap() {
    const baseUrl = 'https://webx4.in'; // Replace with actual domain
    const lastModified = new Date();

    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/portfolio',
        '/pricing',
        '/contact',
        '/blog',
    ].map(route => ({
        url: `${baseUrl}${route}`,
        lastModified,
        changeFrequency: route === '/blog' || route === '/services' || route === '/portfolio' ? 'weekly' : 'monthly',
        priority: route === '' ? 1 : 0.8,
    }));

    const services = [
        'saas-development',
        'ai-automation',
        'startup-launch',
        'creator-tech',
        'growth-engineering',
        'web3-development',
        'web-development',
        'shopify-stores',
        'custom-web-apps',
        'wordpress-development',
    ].map(slug => ({
        url: `${baseUrl}/services/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.7,
    }));

    const blogPosts = [
        'ai-first-saas-strategy-2026',
        'building-scalable-mvp-6-weeks',
        'agentic-ai-workflows-2026',
        'real-world-asset-tokenization',
        'platform-engineering-for-startups',
        'finops-cloud-cost-optimization',
        'edge-computing-ai-latency',
        'vertical-saas-industry-disruption',
        'account-abstraction-web3-usage',
        'quantum-resistant-security-2026',
        'zero-knowledge-proofs-privacy',
        'sustainable-ai-energy-optimization',
        'ai-governance-ethical-frameworks',
        'multimodal-interfaces-modern-saas',
        'gitops-ia-maturation-2026',
        'augmented-scientific-research-ai',
        'decentralized-identity-frameworks',
        'micro-saas-niche-problems',
        'quarterly-tech-retrospective-2025',
        'usage-based-pricing-models',
    ].map(slug => ({
        url: `${baseUrl}/blog/${slug}`,
        lastModified,
        changeFrequency: 'monthly',
        priority: 0.6,
    }));

    return [...staticRoutes, ...services, ...blogPosts];
}
