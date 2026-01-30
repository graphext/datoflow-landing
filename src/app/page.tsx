import Link from 'next/link';
import { Logo } from '@/components/logo';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  CreditCard,
  Database,
  Eye,
  Filter,
  Globe,
  MessageSquare,
  Newspaper,
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

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo href="/" size="md" />
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#features" className="text-muted-foreground transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#how-it-works" className="text-muted-foreground transition-colors hover:text-foreground">
              How It Works
            </a>
            <a href="#pricing" className="text-muted-foreground transition-colors hover:text-foreground">
              Pricing
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href={`${appUrl}/login`}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Log in
            </a>
            <a
              href={`${appUrl}/login`}
              className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-20 pt-20 md:pt-28">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                PR &amp; Market Research intelligence
              </div>
              <h1
                className="mb-6 text-5xl leading-tight tracking-tight md:text-7xl md:leading-tight"
                style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                PR &amp; market research data
                <br />
                nobody else can get you
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Social media and news intelligence for PR and research teams.
                AI scrapes, cleans, and analyzes — you only pay for what you use.
                Transparent pricing. No surprises.
              </p>

              {/* Platform logos strip */}
              <div className="mx-auto mb-4 flex max-w-lg items-center justify-center gap-4 text-muted-foreground">
                <XIcon className="h-5 w-5" />
                <InstagramIcon className="h-5 w-5" />
                <TikTokIcon className="h-5 w-5" />
                <LinkedInIcon className="h-5 w-5" />
                <YouTubeIcon className="h-5 w-5" />
                <GoogleNewsIcon className="h-5 w-5" />
                <RedditIcon className="h-5 w-5" />
                <FacebookIcon className="h-5 w-5" />
                <span className="text-sm text-muted-foreground">+more</span>
              </div>
              <p className="mx-auto mb-10 text-xs text-muted-foreground">
                All major social platforms and thousands of news sources
              </p>

              {/* Value props row */}
              <div className="mx-auto mb-10 flex max-w-2xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5 text-primary" />
                  Transparent pay-per-use pricing
                </span>
                <span className="hidden text-border sm:inline">|</span>
                <span className="flex items-center gap-1.5">
                  <Newspaper className="h-3.5 w-3.5 text-primary" />
                  Social + news in one place
                </span>
                <span className="hidden text-border sm:inline">|</span>
                <span className="flex items-center gap-1.5">
                  <Zap className="h-3.5 w-3.5 text-primary" />
                  Results in minutes
                </span>
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`${appUrl}/login`}
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start analyzing
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button className="inline-flex h-12 items-center gap-2 rounded-md border px-8 text-base font-medium transition-colors hover:bg-muted">
                  See it in action
                </button>
              </div>
            </div>
          </div>
          {/* Decorative gradient */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          </div>
        </section>

        {/* Social Proof */}
        <section className="border-y bg-muted/30 py-10">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-6 text-center text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trusted by PR agencies and research teams
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 opacity-50">
              {['Havas', 'LLYC', 'Atrevia', 'Apple Tree', 'Marco', 'Kreab'].map(
                (company) => (
                  <span
                    key={company}
                    className="text-lg font-semibold tracking-tight text-muted-foreground"
                  >
                    {company}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* The Shift: Old Game vs New Game */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2
                className="mb-4 text-4xl tracking-tight md:text-5xl"
                style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                Social listening was built
                <br />
                for a different era
              </h2>
              <p className="text-lg text-muted-foreground">
                Legacy tools charge enterprise prices for regex filters and
                rigid dashboards. You deserve AI-native intelligence at a
                fraction of the cost.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-8">
                <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-destructive">
                  The old way
                </div>
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
              </div>

              <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8">
                <div className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary">
                  The Datoflow way
                </div>
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
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="border-y bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2
                className="mb-4 text-4xl tracking-tight md:text-5xl"
                style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                From raw data to
                <br />
                actionable insights
              </h2>
              <p className="text-lg text-muted-foreground">
                Three steps. No training needed. Start getting results in
                minutes, not weeks.
              </p>
            </div>

            <div className="mb-12 flex items-center justify-center gap-4">
              {['Gather', 'Enrich', 'Report'].map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                      {i + 1}
                    </div>
                    <span className="text-sm font-medium">{step}</span>
                  </div>
                  {i < 2 && <div className="h-px w-12 bg-border" />}
                </div>
              ))}
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Step 1: Gather */}
              <div className="group rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Search className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Gather</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Pull data from Twitter, Instagram, TikTok, and thousands of
                  news sources. Or upload your own datasets — CSV, Excel, JSON,
                  Parquet.
                </p>
                <div className="rounded-xl border bg-muted/50 p-4">
                  <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5" />
                    Connected sources
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-2">
                      <div className="flex items-center gap-2">
                        <XIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">X / Twitter</span>
                      </div>
                      <span className="text-xs text-green-500">24,891 posts</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-2">
                      <div className="flex items-center gap-2">
                        <InstagramIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">Instagram</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Soon</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-2">
                      <div className="flex items-center gap-2">
                        <TikTokIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">TikTok</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Soon</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border bg-background px-3 py-2">
                      <div className="flex items-center gap-2">
                        <GoogleNewsIcon className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">News &amp; Media</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Soon</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-dashed bg-background/50 px-3 py-2">
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
              </div>

              {/* Step 2: Enrich */}
              <div className="group rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Enrich</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  AI filters irrelevant content semantically — not with regex.
                  Extracts topics, subtopics, sentiment, emotions, and
                  narrative structure automatically.
                </p>
                <div className="rounded-xl border bg-muted/50 p-4">
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
                        className="flex items-center justify-between rounded-lg border bg-background px-3 py-2"
                      >
                        <div className="flex items-center gap-2">
                          {step.status === 'done' ? (
                            <Check className="h-3.5 w-3.5 text-green-500" />
                          ) : (
                            <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
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
              </div>

              {/* Step 3: Report */}
              <div className="group rounded-2xl border bg-card p-6 transition-shadow hover:shadow-lg">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <BarChart3 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Report</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Create visualizations and full reports with a prompt. Match
                  your brand colors and style. Export to share with clients and
                  stakeholders.
                </p>
                <div className="rounded-xl border bg-muted/50 p-4">
                  <div className="mb-3 text-xs text-muted-foreground">Report builder</div>
                  <div className="mb-3 flex items-center gap-2 rounded-lg border bg-background px-3 py-2">
                    <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      &quot;Show sentiment evolution by topic with brand colors&quot;
                    </span>
                  </div>
                  <div className="rounded-lg border bg-background p-3">
                    <div className="mb-2 text-[10px] font-medium">Sentiment by Topic</div>
                    <div className="flex items-end gap-1">
                      {[40, 65, 35, 80, 55, 70, 45, 60, 75, 50, 85, 65].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-primary/60 transition-all"
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
              </div>
            </div>
          </div>
        </section>

        {/* Feature Deep Dive */}
        <section id="features" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-20 max-w-3xl text-center">
              <h2
                className="mb-4 text-4xl tracking-tight md:text-5xl"
                style={{ fontFamily: 'var(--font-serif), serif' }}
              >
                Intelligence that goes
                <br />
                deeper than keywords
              </h2>
              <p className="text-lg text-muted-foreground">
                Beyond basic sentiment. Understand the narratives, emotions,
                and discourse shaping public opinion.
              </p>
            </div>

            {/* Feature 1: Semantic Filtering */}
            <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Filter className="h-3 w-3" />
                  AI Semantic Filtering
                </div>
                <h3 className="mb-4 text-3xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
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
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <div className="mb-4 text-xs font-medium text-muted-foreground">Semantic filtering results</div>
                <div className="space-y-3">
                  <div className="rounded-xl border-l-2 border-l-green-500 bg-green-500/5 p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span className="text-[10px] font-semibold text-green-600">RELEVANT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      &quot;The new sustainability report from @BrandX shows a 40% reduction in emissions...&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border-l-2 border-l-green-500 bg-green-500/5 p-3">
                    <div className="mb-1 flex items-center gap-2">
                      <Check className="h-3 w-3 text-green-500" />
                      <span className="text-[10px] font-semibold text-green-600">RELEVANT</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      &quot;Critics question the greenwashing claims in BrandX&apos;s latest campaign...&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border-l-2 border-l-red-400 bg-red-500/5 p-3 opacity-50">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-red-500">FILTERED</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-through">
                      &quot;Just bought a brand X phone case, love the color!&quot;
                    </p>
                  </div>
                  <div className="rounded-xl border-l-2 border-l-red-400 bg-red-500/5 p-3 opacity-50">
                    <div className="mb-1 flex items-center gap-2">
                      <span className="text-[10px] font-semibold text-red-500">FILTERED</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-through">
                      &quot;RT if you love weekends 🎉 #brand #viral #follow&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Emotion & Discourse */}
            <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="rounded-2xl border bg-card p-6">
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
                        <span key={marker} className="rounded-full border bg-muted/50 px-2 py-0.5 text-[10px]">{marker}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Brain className="h-3 w-3" />
                  Linguistic Analysis
                </div>
                <h3 className="mb-4 text-3xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
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
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Feature 3: Topic Extraction */}
            <div className="mb-20 grid items-center gap-12 md:grid-cols-2">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Sparkles className="h-3 w-3" />
                  AI Topic Extraction
                </div>
                <h3 className="mb-4 text-3xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
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
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border bg-card p-6">
                <div className="mb-4 text-xs font-medium text-muted-foreground">Extracted taxonomy</div>
                <div className="space-y-3">
                  {[
                    { topic: 'Product Quality', count: 4521, subtopics: ['Durability', 'Design', 'Features'], sentiment: 72 },
                    { topic: 'Customer Service', count: 2834, subtopics: ['Response Time', 'Resolution', 'Tone'], sentiment: 45 },
                    { topic: 'Sustainability', count: 1967, subtopics: ['Packaging', 'Supply Chain', 'Greenwashing'], sentiment: 58 },
                    { topic: 'Pricing', count: 1455, subtopics: ['Value', 'Competitors', 'Discounts'], sentiment: 38 },
                  ].map((topic) => (
                    <div key={topic.topic} className="rounded-xl border bg-background p-3">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold">{topic.topic}</span>
                        <span className="text-[10px] text-muted-foreground">{topic.count.toLocaleString()} mentions</span>
                      </div>
                      <div className="mb-2 flex gap-1.5">
                        {topic.subtopics.map((sub) => (
                          <span key={sub} className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-primary">{sub}</span>
                        ))}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 flex-1 rounded-full bg-muted">
                          <div className="h-full rounded-full bg-primary/60" style={{ width: `${topic.sentiment}%` }} />
                        </div>
                        <span className="text-[9px] text-muted-foreground">{topic.sentiment}% positive</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Feature 4: Data Sources */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="order-2 md:order-1">
                <div className="rounded-2xl border bg-card p-6">
                  <div className="mb-4 text-xs font-medium text-muted-foreground">Data sources</div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted"><XIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">X / Twitter</div><div className="text-[9px] text-green-500">Connected</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted"><InstagramIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">Instagram</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted"><TikTokIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">TikTok</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted"><GoogleNewsIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">News &amp; Media</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted"><LinkedInIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">LinkedIn</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border bg-background p-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted"><YouTubeIcon className="h-4 w-4" /></div>
                      <div><div className="text-[11px] font-medium">YouTube</div><div className="text-[9px] text-muted-foreground">Soon</div></div>
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-3 text-muted-foreground/50">
                    <RedditIcon className="h-3.5 w-3.5" />
                    <FacebookIcon className="h-3.5 w-3.5" />
                    <GoogleSearchIcon className="h-3.5 w-3.5" />
                    <span className="text-[10px]">+many more coming</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-dashed bg-muted/30 p-3">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Or upload your own data — CSV, Excel, JSON, Parquet</span>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Database className="h-3 w-3" />
                  Flexible Data Sources
                </div>
                <h3 className="mb-4 text-3xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
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
                      <Check className="h-4 w-4 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Reports & Speed */}
        <section className="border-y bg-muted/30 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="mb-4 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: 'var(--font-serif), serif' }}>
                Reports that
                <br />
                look like yours
              </h2>
              <p className="text-lg text-muted-foreground">
                Generate publication-ready reports and visualizations with a prompt. Follow your brand guidelines automatically.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border bg-card p-8">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Prompt-driven reports</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  Describe what you need in natural language. Datoflow generates charts, tables, and narrative summaries matching your brand.
                </p>
                <div className="rounded-xl border bg-muted/50 p-4">
                  <div className="mb-3 rounded-lg border bg-background p-3">
                    <p className="text-xs text-muted-foreground italic">
                      &quot;Create an executive summary with a sentiment timeline, top 5 topics by volume, and key influencer mentions. Use our brand blue (#1a3c6d) and font.&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Zap className="h-3 w-3 text-primary" />
                    <span>Generating report with brand guidelines...</span>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl border bg-card p-8">
                <div className="mb-2 flex items-center gap-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Blazing fast</h3>
                </div>
                <p className="mb-6 text-sm text-muted-foreground">
                  From query to insights in minutes, not days. Scrape, enrich, and visualize thousands of posts before your coffee gets cold.
                </p>
                <div className="rounded-xl border bg-muted/50 p-4">
                  <div className="space-y-3">
                    {[
                      { label: 'Scraping 25K tweets', time: '~2 min' },
                      { label: 'AI enrichment (topics, emotions)', time: '~3 min' },
                      { label: 'Report generation', time: '~30 sec' },
                    ].map((step) => (
                      <div key={step.label} className="flex items-center justify-between">
                        <span className="text-xs">{step.label}</span>
                        <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">{step.time}</span>
                      </div>
                    ))}
                    <div className="border-t pt-3">
                      <div className="flex items-center justify-between font-medium">
                        <span className="text-xs">Total: query to report</span>
                        <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] text-primary-foreground">~6 min</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-1.5 text-sm text-muted-foreground">
                <Eye className="h-3.5 w-3.5" />
                Radically transparent pricing
              </div>
              <h2 className="mb-4 text-4xl tracking-tight md:text-5xl" style={{ fontFamily: 'var(--font-serif), serif' }}>
                You see every cent
                <br />
                before you spend it
              </h2>
              <p className="text-lg text-muted-foreground">
                No annual contracts. No per-seat licensing. No hidden fees. Buy credits, use them when you need them. Every operation shows its cost upfront — because if you know what you&apos;re paying for, you&apos;ll keep coming back.
              </p>
            </div>

            <div className="mx-auto mb-12 max-w-2xl rounded-2xl border bg-card p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                <Eye className="h-4 w-4 text-primary" />
                You always know what you&apos;re paying
              </div>
              <div className="space-y-3">
                {[
                  { op: 'Scrape 10,000 tweets', cost: '~X credits', detail: 'Cost shown before you run' },
                  { op: 'AI topic extraction', cost: '~Y credits', detail: 'Per document, visible upfront' },
                  { op: 'Emotion & discourse analysis', cost: '~Z credits', detail: 'Itemized in your dashboard' },
                  { op: 'Upload your own CSV', cost: '0 credits', detail: 'Always free' },
                ].map((row) => (
                  <div key={row.op} className="flex items-center justify-between rounded-xl border bg-background px-4 py-3">
                    <div>
                      <div className="text-sm font-medium">{row.op}</div>
                      <div className="text-xs text-muted-foreground">{row.detail}</div>
                    </div>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{row.cost}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Every operation shows its credit cost before you confirm. No surprises. Ever.
              </p>
            </div>

            <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
              <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 opacity-60">
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-destructive">Typical competitor</div>
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
              </div>

              <div className="relative rounded-2xl border-2 border-primary bg-card p-6 shadow-lg">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-primary-foreground">
                  Recommended
                </div>
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-primary">Datoflow credits</div>
                <div className="mb-2 text-3xl font-bold">Pay per use</div>
                <div className="mb-6 text-sm text-muted-foreground">Transparent. No minimums.</div>
                <ul className="space-y-2">
                  {['See cost before every action', 'Unlimited users & projects', 'All features included', 'Credits never expire', 'Volume discounts available'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs">
                      <Check className="h-3.5 w-3.5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <a
                  href={`${appUrl}/login`}
                  className="mt-6 flex w-full items-center justify-center gap-1 rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Start free
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <div className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Enterprise</div>
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
                <button className="mt-6 w-full rounded-md border py-2 text-sm font-medium transition-colors hover:bg-muted">
                  Talk to us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="border-y bg-muted/30 py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <blockquote>
              <p className="mb-6 text-2xl leading-relaxed tracking-tight md:text-3xl" style={{ fontFamily: 'var(--font-serif), serif' }}>
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
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl rounded-2xl border bg-card p-12 text-center shadow-sm">
              <h2 className="mb-4 text-4xl tracking-tight" style={{ fontFamily: 'var(--font-serif), serif' }}>
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
                <a
                  href={`${appUrl}/login`}
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Get started free
                  <ArrowRight className="h-4 w-4" />
                </a>
                <button className="inline-flex h-12 items-center gap-2 rounded-md border px-8 text-base font-medium transition-colors hover:bg-muted">
                  Book a demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-12">
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
            © {new Date().getFullYear()} Datoflow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
