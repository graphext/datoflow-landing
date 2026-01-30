import Link from 'next/link';
import { Logo } from '@/components/logo';
import { Header } from '@/components/header';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Database,
  Eye,
  Filter,
  Globe,
  MessageSquare,
  Search,
  Sparkles,
  Upload,
  Zap,
} from 'lucide-react';
import {
  XIcon,
  InstagramIcon,
  TikTokIcon,
  LinkedInIcon,
  YouTubeIcon,
  GoogleNewsIcon,
  GoogleSearchIcon,
  RedditIcon,
  FacebookIcon,
} from '@/components/platform-icons';

const appUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://app.datoflow.com';

function SectionLabel({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`font-mono text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground ${className}`}>
      {children}
    </div>
  );
}

function BtnPill({ href, children, className = '' }: { href?: string; children: React.ReactNode; className?: string }) {
  const cls = `inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-[15px] font-medium text-white transition-all hover:opacity-90 hover:-translate-y-px ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

function BtnPillOutline({ href, children, className = '' }: { href?: string; children: React.ReactNode; className?: string }) {
  const cls = `inline-flex items-center gap-2 rounded-full border border-border bg-transparent px-8 py-3 text-[15px] font-medium text-foreground transition-all hover:bg-muted hover:border-muted-foreground ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

function CardClean({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-8 ${className}`}>
      {children}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f0f4ff]">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative overflow-hidden"
          style={{ background: 'linear-gradient(180deg, #f0f4ff 0%, #e8eeff 30%, #dde5f9 60%, #ffffff 100%)' }}
        >
          <div className="mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-40">
            <div className="mx-auto max-w-4xl text-center">
              <SectionLabel className="mb-4 md:mb-6">[&nbsp;&nbsp;Intelligence&nbsp;&nbsp;]</SectionLabel>
              <h1 className="mb-5 text-4xl font-bold leading-[1.15] tracking-tight sm:text-5xl md:mb-6 md:text-7xl md:leading-[1.1]">
                PR &amp; Market Research Data
                <br />
                nobody else can get you
              </h1>
              <p className="mx-auto mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:mb-8 md:text-xl">
                Social media and news intelligence for PR and research teams.
                AI scrapes, cleans, and analyzes — you only pay for what you use.
              </p>

              {/* Platform logos strip */}
              <div className="mx-auto mb-3 flex max-w-lg items-center justify-center gap-3 text-muted-foreground/60 sm:gap-5">
                <XIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <TikTokIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <YouTubeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <GoogleNewsIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <RedditIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs text-muted-foreground/60 sm:text-sm">+more</span>
              </div>
              <p className="mx-auto mb-8 text-xs text-muted-foreground md:mb-12">
                All major social platforms and thousands of news sources
              </p>

              <div className="flex items-center justify-center gap-3 sm:gap-4">
                <BtnPill href={`${appUrl}/login`}>
                  Start for Free
                  <ArrowRight className="h-4 w-4" />
                </BtnPill>
                <BtnPillOutline>
                  Get a demo
                </BtnPillOutline>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="bg-muted py-12">
          <div className="mx-auto max-w-7xl px-6">
            <SectionLabel className="mb-8 text-center">[&nbsp;&nbsp;Trusted by&nbsp;&nbsp;]</SectionLabel>
            <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4 opacity-40">
              {['Havas', 'LLYC', 'Atrevia', 'Apple Tree', 'Marco', 'Kreab'].map(
                (company) => (
                  <span
                    key={company}
                    className="text-lg font-semibold tracking-tight text-foreground"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* The Shift: Old Game vs New Game */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <SectionLabel className="mb-4">[&nbsp;&nbsp;Problem&nbsp;&nbsp;]</SectionLabel>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Social listening was built
                <br />
                for a different era
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Legacy tools charge enterprise prices for regex filters and
                rigid dashboards. You deserve AI-native intelligence at a
                fraction of the cost.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <CardClean>
                <SectionLabel className="mb-4 text-destructive">[&nbsp;&nbsp;Old way&nbsp;&nbsp;]</SectionLabel>
                <h3 className="mb-6 text-xl font-semibold">Brandwatch, Sprinklr, Talkwalker...</h3>
                <ul className="space-y-4">
                  {[
                    '$30K–$100K/year subscriptions you barely use',
                    'Regex-based boolean queries to filter noise',
                    'Coarse sentiment (positive/negative/neutral)',
                    'Manual data cleaning and topic tagging',
                    'Static dashboards that take weeks to set up',
                    'Limited data sources, walled gardens',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="mt-0.5 text-destructive">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardClean>

              <CardClean>
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Solution&nbsp;&nbsp;]</SectionLabel>
                <h3 className="mb-6 text-xl font-semibold">AI-native, pay-per-use</h3>
                <ul className="space-y-4">
                  {[
                    'Pay only for what you use — credits, not contracts',
                    'AI semantic filtering removes irrelevant content',
                    'Fine-grained emotions, discourse, and narrative analysis',
                    'Auto-generated topics, subtopics, and taxonomies',
                    'Prompt-driven reports matching your brand guidelines',
                    'Twitter, Instagram, TikTok, news — from everywhere',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardClean>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="bg-muted py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <SectionLabel className="mb-4">[&nbsp;&nbsp;How it works&nbsp;&nbsp;]</SectionLabel>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                From raw data to
                <br />
                actionable insights
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Three steps. No training needed. Start getting results in
                minutes, not weeks.
              </p>
            </div>

            <div className="mb-12 flex items-center justify-center gap-4">
              {['Gather', 'Enrich', 'Report'].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-foreground text-sm font-medium text-white">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {i < 2 && <div className="h-px w-12 bg-border" />}
                </div>
              ))}
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Step 1: Gather */}
              <CardClean>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <Search className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Gather</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Pull data from Twitter, Instagram, TikTok, and thousands of
                  news sources. Or upload your own datasets — CSV, Excel, JSON,
                  Parquet.
                </p>
                <div className="rounded-xl border bg-muted p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5" />
                    Connected sources
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <XIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">X / Twitter</span>
                      </div>
                      <span className="text-xs text-green-600">24,891 posts</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <InstagramIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">Instagram</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Soon</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <TikTokIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">TikTok</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Soon</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-white px-3 py-2">
                      <div className="flex items-center gap-2">
                        <GoogleNewsIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">News &amp; Media</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Soon</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-dashed bg-white/50 px-3 py-2">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <LinkedInIcon className="h-3 w-3" />
                        <YouTubeIcon className="h-3 w-3" />
                        <RedditIcon className="h-3 w-3" />
                        <FacebookIcon className="h-3 w-3" />
                        <span className="text-[10px]">+more</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardClean>

              {/* Step 2: Enrich */}
              <CardClean>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <Brain className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Enrich</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  AI filters irrelevant content semantically — not with regex.
                  Extracts topics, subtopics, sentiment, emotions, and
                  narrative structure automatically.
                </p>
                <div className="rounded-xl border bg-muted p-4">
                  <div className="mb-3 text-xs text-muted-foreground">AI enrichment pipeline</div>
                  <div className="space-y-2">
                    {[
                      { label: 'Semantic filter', status: 'done', detail: '6,231 irrelevant removed' },
                      { label: 'Topic extraction', status: 'done', detail: '23 topics, 89 subtopics' },
                      { label: 'Emotion analysis', status: 'done', detail: '8 dimensions detected' },
                      { label: 'Discourse mapping', status: 'running', detail: 'Processing...' },
                    ].map((step) => (
                      <div
                        key={step.label}
                        className="flex items-center justify-between rounded-lg border bg-white px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          {step.status === 'done' ? (
                            <Check className="h-3.5 w-3.5 text-green-600" />
                          ) : (
                            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-foreground border-t-transparent" />
                          )}
                          <span className="text-xs font-medium">{step.label}</span>
                        </div>
                        <span className="text-[10px] text-muted-foreground">
                          {step.detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardClean>

              {/* Step 3: Report */}
              <CardClean>
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                    <BarChart3 className="h-5 w-5 text-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold">Report</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Create visualizations and full reports with a prompt. Match
                  your brand colors and style. Export to share with clients and
                  stakeholders.
                </p>
                <div className="rounded-xl border bg-muted p-4">
                  <div className="mb-3 text-xs text-muted-foreground">Report builder</div>
                  <div className="mb-3 flex items-center gap-2 rounded-lg border bg-white px-3 py-2">
                    <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      &quot;Show sentiment evolution by topic with brand colors&quot;
                    </span>
                  </div>
                  <div className="rounded-lg border bg-white p-3">
                    <div className="mb-2 text-[10px] font-medium">Sentiment by Topic</div>
                    <div className="flex items-end gap-1">
                      {[40, 65, 35, 80, 55, 70, 45, 60, 75, 50, 85, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-foreground/40 transition-all"
                          style={{ height: `${h * 0.5}px` }}
                        />
                      ))}
                    </div>
                    <div className="mt-2 flex justify-between text-[8px] text-muted-foreground">
                      <span>Jan</span>
                      <span>Jun</span>
                      <span>Dec</span>
                    </div>
                  </div>
                </div>
              </CardClean>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section id="features" className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <SectionLabel className="mb-4">[&nbsp;&nbsp;Features&nbsp;&nbsp;]</SectionLabel>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Intelligence that goes
                <br />
                deeper than keywords
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond basic sentiment. Understand the narratives, emotions,
                and discourse shaping public opinion.
              </p>
            </div>

            {/* Feature 1: Semantic Filtering */}
            <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
              <div>
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Semantic filtering&nbsp;&nbsp;]</SectionLabel>
                <h3 className="mb-4 text-3xl font-bold tracking-tight">
                  No more regex.
                  <br />
                  AI understands context.
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Traditional tools make you write complex boolean queries
                  to filter noise. Datoflow uses LLMs to semantically
                  understand whether a post is relevant to your research —
                  regardless of the exact words used.
                </p>
                <ul className="space-y-3">
                  {[
                    'Filters by meaning, not keyword matching',
                    'Removes spam, bots, and off-topic content automatically',
                    'Works across languages without translation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CardClean>
                <div className="mb-4 text-xs font-medium text-muted-foreground">Semantic filtering results</div>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-2 border-l-green-600 bg-muted p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-[10px] font-semibold text-green-700">RELEVANT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      &quot;The new sustainability report from @BrandX shows a 40% reduction in emissions...&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border-l-2 border-l-green-600 bg-muted p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-600" />
                      <span className="text-[10px] font-semibold text-green-700">RELEVANT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      &quot;Critics question the greenwashing claims in BrandX&apos;s latest campaign...&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border-l-2 border-l-red-400 bg-muted p-3 opacity-50">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-red-500">FILTERED</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-through">
                      &quot;Just bought a brand X phone case, love the color!&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border-l-2 border-l-red-400 bg-muted p-3 opacity-50">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-red-500">FILTERED</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-through">
                      &quot;RT if you love weekends #brand #viral #follow&quot;
                    </p>
                  </div>
                </div>
              </CardClean>
            </div>

            {/* Feature 2: Emotion & Discourse */}
            <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <CardClean>
                  <div className="mb-4 text-xs font-medium text-muted-foreground">Linguistic analysis output</div>
                  <div className="mb-4">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Emotions detected</div>
                    <div className="grid grid-cols-4 gap-2">
                      {[
                        { name: 'Joy', value: 34, color: 'bg-yellow-400' },
                        { name: 'Trust', value: 28, color: 'bg-green-400' },
                        { name: 'Anger', value: 18, color: 'bg-red-400' },
                        { name: 'Fear', value: 12, color: 'bg-purple-400' },
                        { name: 'Surprise', value: 22, color: 'bg-blue-400' },
                        { name: 'Sadness', value: 8, color: 'bg-gray-400' },
                        { name: 'Disgust', value: 6, color: 'bg-orange-400' },
                        { name: 'Anticipation', value: 31, color: 'bg-teal-400' },
                      ].map((emotion) => (
                        <div key={emotion.name} className="text-center">
                          <div className="mx-auto mb-1 h-8 w-8 overflow-hidden rounded-full bg-muted">
                            <div
                              className={`${emotion.color} w-full transition-all`}
                              style={{ height: `${emotion.value}%`, marginTop: `${100 - emotion.value}%` }}
                            />
                          </div>
                          <div className="text-[9px] font-medium">{emotion.name}</div>
                          <div className="text-[9px] text-muted-foreground">{emotion.value}%</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Discourse markers</div>
                    <div className="flex flex-wrap gap-1.5">
                      {['Calls to action', 'Expert citations', 'Personal anecdotes', 'Statistical claims', 'Moral framing', 'Us vs Them', 'Urgency signals'].map((marker) => (
                        <span key={marker} className="rounded-full border bg-muted px-2 py-0.5 text-[10px]">{marker}</span>
                      ))}
                    </div>
                  </div>
                </CardClean>
              </div>
              <div className="order-1 md:order-2">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Linguistic analysis&nbsp;&nbsp;]</SectionLabel>
                <h3 className="mb-4 text-3xl font-bold tracking-tight">
                  Beyond sentiment.
                  <br />
                  Emotions and discourse.
                </h3>
                <p className="mb-6 text-muted-foreground">
                  While others give you positive/negative/neutral, Datoflow
                  detects 8 fine-grained emotions, identifies discourse
                  patterns, narrative structures, and rhetorical strategies.
                  Understand not just what people feel, but how they argue.
                </p>
                <ul className="space-y-3">
                  {['8 Plutchik emotions + intensity levels', 'Discourse and narrative analysis', 'Rhetorical strategy detection', 'Cross-cultural linguistic awareness'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Topic Extraction */}
            <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
              <div>
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Topic extraction&nbsp;&nbsp;]</SectionLabel>
                <h3 className="mb-4 text-3xl font-bold tracking-tight">
                  Clean topics.
                  <br />
                  Not word clouds.
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Forget noisy word clouds and basic keyword frequency.
                  Datoflow generates clean, hierarchical topic taxonomies
                  with subtopics — refined by AI to match what a human
                  analyst would produce, but in seconds.
                </p>
                <ul className="space-y-3">
                  {['Hierarchical topics → subtopics → taxonomy', 'AI-refined for quality and coherence', 'Multi-label classification per document', 'Customizable to your domain and terminology'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <CardClean>
                <div className="mb-4 text-xs font-medium text-muted-foreground">Extracted taxonomy</div>
                <div className="space-y-3">
                  {[
                    { topic: 'Product Quality', count: 4521, subtopics: ['Durability', 'Design', 'Features'], sentiment: 72 },
                    { topic: 'Customer Service', count: 2834, subtopics: ['Response Time', 'Resolution', 'Tone'], sentiment: 45 },
                    { topic: 'Sustainability', count: 1967, subtopics: ['Packaging', 'Supply Chain', 'Greenwashing'], sentiment: 58 },
                    { topic: 'Pricing', count: 1455, subtopics: ['Value', 'Competitors', 'Discounts'], sentiment: 38 },
                  ].map((topic) => (
                    <div key={topic.topic} className="rounded-xl border bg-muted p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold">{topic.topic}</span>
                        <span className="text-[10px] text-muted-foreground">{topic.count.toLocaleString()} mentions</span>
                      </div>
                      <div className="mb-2 flex gap-1.5">
                        {topic.subtopics.map((sub) => (
                          <span key={sub} className="rounded-md bg-foreground/10 px-1.5 py-0.5 text-[9px] font-medium text-foreground">{sub}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 rounded-full bg-border">
                          <div className="h-full rounded-full bg-foreground/40" style={{ width: `${topic.sentiment}%` }} />
                        </div>
                        <span className="text-[9px] text-muted-foreground">{topic.sentiment}% positive</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardClean>
            </div>

            {/* Feature 4: Data Sources */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <CardClean>
                  <div className="mb-4 text-xs font-medium text-muted-foreground">Data sources</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><XIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">X / Twitter</div><div className="text-[9px] text-green-600">Connected</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><InstagramIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">Instagram</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><TikTokIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">TikTok</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><GoogleNewsIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">News &amp; Media</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><LinkedInIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">LinkedIn</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white"><YouTubeIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">YouTube</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-3 text-muted-foreground/50">
                    <RedditIcon className="h-3.5 w-3.5" />
                    <FacebookIcon className="h-3.5 w-3.5" />
                    <GoogleSearchIcon className="h-3.5 w-3.5" />
                    <span className="text-[10px]">+many more coming</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-dashed bg-muted p-3">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Or upload your own data — CSV, Excel, JSON, Parquet</span>
                  </div>
                </CardClean>
              </div>
              <div className="order-1 md:order-2">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Data sources&nbsp;&nbsp;]</SectionLabel>
                <h3 className="mb-4 text-3xl font-bold tracking-tight">
                  Your data.
                  <br />
                  From everywhere.
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Scrape social platforms with a query, import news from
                  thousands of sources, or bring your own datasets. CSV, Excel,
                  JSON, Parquet — all welcome. Combine multiple sources into
                  a single analysis.
                </p>
                <ul className="space-y-3">
                  {['Built-in scrapers for all major social platforms', 'Import CSV, Excel, JSON, Parquet up to 50MB', 'URL-based import for external data', 'Combine multiple sources in a single project'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reports & Speed */}
        <section className="bg-muted py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <SectionLabel className="mb-4">[&nbsp;&nbsp;Reports&nbsp;&nbsp;]</SectionLabel>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                Reports that
                <br />
                look like yours
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Generate publication-ready reports and visualizations with a prompt. Follow your brand guidelines automatically.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <CardClean>
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-foreground" />
                  <h3 className="text-lg font-semibold">Prompt-driven reports</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Describe what you need in natural language. Datoflow generates charts, tables, and narrative summaries matching your brand.
                </p>
                <div className="rounded-xl border bg-muted p-4">
                  <div className="mb-3 rounded-lg border bg-white p-3">
                    <p className="text-xs text-muted-foreground italic">
                      &quot;Create an executive summary with a sentiment timeline, top 5 topics by volume, and key influencer mentions. Use our brand blue (#1a3c6d) and font.&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="h-3 w-3 text-foreground" />
                    <span>Generating report with brand guidelines...</span>
                  </div>
                </div>
              </CardClean>
              <CardClean>
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-foreground" />
                  <h3 className="text-lg font-semibold">Blazing fast</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  From query to insights in minutes, not days. Scrape, enrich, and visualize thousands of posts before your coffee gets cold.
                </p>
                <div className="rounded-xl border bg-muted p-4">
                  <div className="space-y-3">
                    {[
                      { label: 'Scraping 25K tweets', time: '~2 min' },
                      { label: 'AI enrichment (topics, emotions)', time: '~3 min' },
                      { label: 'Report generation', time: '~30 sec' },
                    ].map((step) => (
                      <div key={step.label} className="flex items-center justify-between">
                        <span className="text-xs">{step.label}</span>
                        <span className="rounded-full bg-foreground/10 px-2 py-0.5 text-[10px] font-medium text-foreground">{step.time}</span>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-xs">Total: query to report</span>
                        <span className="rounded-full bg-foreground px-2 py-0.5 text-[10px] text-white">~6 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardClean>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <SectionLabel className="mb-4">[&nbsp;&nbsp;Pricing&nbsp;&nbsp;]</SectionLabel>
              <h2 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
                You see every cent
                <br />
                before you spend it
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                No annual contracts. No per-seat licensing. No hidden fees. Buy credits, use them when you need them. Every operation shows its cost upfront.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              <CardClean className="opacity-60">
                <SectionLabel className="mb-4 text-destructive">[&nbsp;&nbsp;Legacy pricing&nbsp;&nbsp;]</SectionLabel>
                <div className="mb-2 text-3xl font-bold">$2,500</div>
                <div className="mb-6 text-sm text-muted-foreground">/month, annual contract</div>
                <ul className="space-y-2">
                  {['1 user seat included', 'Extra seats $500/mo each', 'Limited data volume', 'Hidden overage fees', 'Opaque pricing tiers'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="text-destructive">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardClean>

              <div className="relative rounded-2xl border-2 border-foreground bg-card p-8">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground px-4 py-1 text-xs font-semibold text-white">
                  Recommended
                </div>
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Datoflow&nbsp;&nbsp;]</SectionLabel>
                <div className="mb-2 text-3xl font-bold">Pay per use</div>
                <div className="mb-6 text-sm text-muted-foreground">Transparent. No minimums.</div>
                <ul className="space-y-2">
                  {['See cost before every action', 'Unlimited users & projects', 'All features included', 'Credits never expire', 'Volume discounts available'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs">
                      <Check className="h-3.5 w-3.5 text-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
                <BtnPill href={`${appUrl}/login`} className="mt-6 w-full justify-center text-sm">
                  Start for Free
                  <ArrowRight className="h-3.5 w-3.5" />
                </BtnPill>
              </div>

              <CardClean>
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Enterprise&nbsp;&nbsp;]</SectionLabel>
                <div className="mb-2 text-3xl font-bold">Custom</div>
                <div className="mb-6 text-sm text-muted-foreground">For agencies &amp; large teams</div>
                <ul className="space-y-2">
                  {['Same transparent pricing', 'Dedicated support', 'Custom integrations', 'SLA guarantees', 'White-label reports'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs">
                      <Check className="h-3.5 w-3.5 text-muted-foreground" />
                      {item}
                    </li>
                  ))}
                </ul>
                <BtnPillOutline className="mt-6 w-full justify-center text-sm">
                  Talk to us
                </BtnPillOutline>
              </CardClean>
            </div>

            <CardClean className="mx-auto mt-12 max-w-2xl">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <Eye className="h-4 w-4 text-foreground" />
                You always know what you&apos;re paying
              </div>
              <div className="space-y-3">
                {[
                  { op: 'Scrape 10,000 tweets', cost: '~X credits', detail: 'Cost shown before you run' },
                  { op: 'AI topic extraction', cost: '~Y credits', detail: 'Per document, visible upfront' },
                  { op: 'Emotion & discourse analysis', cost: '~Z credits', detail: 'Itemized in your dashboard' },
                  { op: 'Upload your own CSV', cost: '0 credits', detail: 'Always free' },
                ].map((row) => (
                  <div key={row.op} className="flex items-center justify-between rounded-xl border bg-muted px-4 py-3">
                    <div>
                      <div className="text-sm font-medium">{row.op}</div>
                      <div className="text-xs text-muted-foreground">{row.detail}</div>
                    </div>
                    <span className="rounded-full bg-foreground/10 px-3 py-1 text-xs font-semibold text-foreground">{row.cost}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Every operation shows its credit cost before you confirm. No surprises. Ever.
              </p>
            </CardClean>
          </div>
        </section>

        {/* Testimonial */}
        <section className="bg-muted py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionLabel className="mb-8">[&nbsp;&nbsp;Testimonial&nbsp;&nbsp;]</SectionLabel>
            <blockquote>
              <p className="mb-6 text-2xl font-medium italic leading-relaxed tracking-tight md:text-3xl">
                &quot;We replaced a $40K Brandwatch subscription with Datoflow
                and got deeper insights in a fraction of the time. The
                emotion analysis alone is worth it.&quot;
              </p>
              <footer className="text-sm text-muted-foreground">
                — PR Research Director, Top 10 Global Agency
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <CardClean className="mx-auto max-w-3xl p-16 text-center">
              <SectionLabel className="mb-4">[&nbsp;&nbsp;Get started&nbsp;&nbsp;]</SectionLabel>
              <h2 className="mb-4 text-4xl font-bold tracking-tight">
                Start getting the data
                <br />
                nobody else can
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                Join PR agencies and research teams who switched from
                legacy social listening tools to AI-native intelligence.
                No credit card required.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <BtnPill href={`${appUrl}/login`}>
                  Start for Free
                  <ArrowRight className="h-4 w-4" />
                </BtnPill>
                <BtnPillOutline>
                  Get a demo
                </BtnPillOutline>
              </div>
            </CardClean>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Logo href="/" size="md" />
              <p className="mt-3 text-sm text-muted-foreground">
                AI-native social media intelligence. Pay per use.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="transition-colors hover:text-foreground">Features</a></li>
                <li><a href="#pricing" className="transition-colors hover:text-foreground">Pricing</a></li>
                <li><a href="#how-it-works" className="transition-colors hover:text-foreground">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-foreground">Documentation</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">API</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-sm font-semibold">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="transition-colors hover:text-foreground">About</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">Contact</a></li>
                <li><a href="#" className="transition-colors hover:text-foreground">Privacy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Datoflow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
