import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

type ProjectType = 'ecommerce' | 'portfolio' | 'saas';
type PlanType = 'basic' | 'pro' | 'premium';

const PROJECT_LABEL: Record<ProjectType, string> = {
  ecommerce: 'E-commerce',
  portfolio: 'Portfolio',
  saas: 'SaaS'
};

const PRICING_BDT: Record<ProjectType, Record<PlanType, number>> = {
  ecommerce: { basic: 5000, pro: 15000, premium: 20000 },
  portfolio: { basic: 4000, pro: 12000, premium: 16000 },
  saas: { basic: 8000, pro: 20000, premium: 30000 }
};

const BASIC_FEATURES = ['Responsive design', 'Basic SEO setup', 'Speed optimized'] as const;
const PRO_EXTRA_FEATURES = ['Advanced UI/UX polish', 'Content sections + revisions'] as const;
const PREMIUM_EXTRA_FEATURES = ['Custom animations', 'Priority delivery'] as const;

const PLAN_META: Array<{
  key: PlanType;
  title: string;
  blurb: string;
  highlight?: boolean;
}> = [
  { key: 'basic', title: 'Basic', blurb: 'Perfect for a simple start' },
  { key: 'pro', title: 'Pro', blurb: 'Best value for growing teams', highlight: true },
  { key: 'premium', title: 'Premium', blurb: 'For high-impact launches' }
];

function formatBDT(amount: number) {
  return `৳${amount.toLocaleString('en-US')}`;
}

export function Pricing() {
  const [projectType, setProjectType] = useState<ProjectType>('ecommerce');

  const projectOptions = useMemo(
    () =>
      (Object.keys(PROJECT_LABEL) as ProjectType[]).map((key) => ({
        value: key,
        label: PROJECT_LABEL[key]
      })),
    []
  );

  return (
    <section id="pricing" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6 text-gray-900"
          >
            Pricing <span className="text-gray-900">Plans</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 text-lg"
          >
            Choose your project type to see updated pricing.
          </motion.p>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="inline-flex items-center gap-2 p-2 rounded-2xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-sm">
            {projectOptions.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => setProjectType(opt.value)}
                className={[
                  'px-4 py-2 rounded-xl text-sm font-semibold transition-all',
                  projectType === opt.value
                    ? 'bg-gray-900 text-white shadow'
                    : 'text-gray-700 hover:bg-gray-100'
                ].join(' ')}
                aria-pressed={projectType === opt.value}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PLAN_META.map((plan, index) => {
            const price = PRICING_BDT[projectType][plan.key];
            const features =
              plan.key === 'basic'
                ? [...BASIC_FEATURES]
                : plan.key === 'pro'
                  ? [...BASIC_FEATURES, ...PRO_EXTRA_FEATURES]
                  : [...BASIC_FEATURES, ...PRO_EXTRA_FEATURES, ...PREMIUM_EXTRA_FEATURES];
            return (
              <motion.div
                key={plan.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={[
                  'bg-white/80 backdrop-blur-md border shadow-xl p-8 rounded-2xl relative overflow-hidden',
                  plan.highlight
                    ? 'border-gray-900 ring-1 ring-gray-900/10'
                    : 'border-gray-200',
                  'hover:-translate-y-2 hover:shadow-2xl transition-all duration-300'
                ].join(' ')}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {plan.highlight ? (
                    <div className="inline-flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-gray-900 text-white mb-5">
                      Most Popular
                    </div>
                  ) : (
                    <div className="h-7 mb-5" />
                  )}

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600 mb-6">{plan.blurb}</p>

                  <div className="flex items-end gap-2 mb-8">
                    <div className="text-4xl font-extrabold text-gray-900 leading-none">
                      {formatBDT(price)}
                    </div>
                    <div className="text-sm text-gray-600 pb-1">tk</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-gray-700">
                        <span className="mt-0.5 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gray-900 text-white">
                          <Check size={14} />
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    type="button"
                    className={[
                      'w-full py-3 rounded-xl font-semibold transition',
                      plan.highlight
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    ].join(' ')}
                  >
                    Get Started
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
