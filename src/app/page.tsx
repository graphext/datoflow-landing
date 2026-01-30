import { Logo } from '@/components/logo';
import { Header } from '@/components/header';
import { GradientBlobs } from '@/components/gradient-blobs';
import { AnimateOnScroll } from '@/components/animate-on-scroll';
import {
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Eye,
  Globe,
  MessageSquare,
  Search,
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

function BtnPrimary({ href, children, className = '' }: { href?: string; children: React.ReactNode; className?: string }) {
  const cls = `inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-[15px] font-medium text-white transition-all hover:scale-[1.03] hover:shadow-lg active:scale-[0.97] ${className}`;
  const style = {
    boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.15), 0 1px 3px rgba(40,77,205,0.4), 0 4px 12px rgba(40,77,205,0.15)',
  };
  if (href) return <a href={href} className={cls} style={style}>{children}</a>;
  return <button className={cls} style={style}>{children}</button>;
}

function BtnSecondary({ href, children, className = '' }: { href?: string; children: React.ReactNode; className?: string }) {
  const cls = `inline-flex items-center gap-2 rounded-lg border border-border bg-card backdrop-blur-sm px-6 py-3 text-[15px] font-medium text-foreground transition-all hover:border-primary/30 hover:bg-accent hover:scale-[1.03] active:scale-[0.97] ${className}`;
  if (href) return <a href={href} className={cls}>{children}</a>;
  return <button className={cls}>{children}</button>;
}

function CardClean({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card backdrop-blur-sm p-8 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden">
          <GradientBlobs />
          <div className="relative mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 md:pb-32 md:pt-44">
            <div className="mx-auto max-w-4xl text-center">
              <AnimateOnScroll animation="fade-up" duration={900}>
                <h1 className="mb-5 text-[44px] font-medium leading-[1.05] tracking-[-0.025em] sm:text-[56px] md:mb-6 md:text-[80px]">
                  Social Listening & PR
                  <br />
                  <span className="text-gradient-blue">for the AI era</span>
                </h1>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-up" delay={150} duration={800}>
                <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-muted-foreground tracking-[0.01em] sm:text-base md:mb-8 md:text-lg">
                  Effortlessly gather social & news data at scale. AI enrichment.
                  No legacy contracts. Pay per use.
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-in" delay={300} duration={800}>
                <div className="mx-auto mb-3 flex max-w-lg items-center justify-center gap-3 text-muted-foreground/50 sm:gap-5">
                  <XIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <InstagramIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <TikTokIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <LinkedInIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <YouTubeIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <GoogleNewsIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <RedditIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <FacebookIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-xs text-muted-foreground/50 sm:text-sm">+more</span>
                </div>
                <p className="mx-auto mb-10 text-xs text-muted-foreground md:mb-14">
                  All major social platforms and thousands of news sources
                </p>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={450}>
                <div className="flex items-center justify-center gap-3 sm:gap-4">
                  <BtnPrimary href={`${appUrl}/login`}>
                    Book an intro call
                  </BtnPrimary>
                  <BtnSecondary href={`${appUrl}/login`}>
                    Start for Free
                    <ArrowRight className="h-4 w-4" />
                  </BtnSecondary>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Social Proof ── */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-in">
              <SectionLabel className="mb-8 text-center">[&nbsp;&nbsp;Trusted by&nbsp;&nbsp;]</SectionLabel>
              <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-4 opacity-40">
                {['Havas', 'LLYC', 'Atrevia', 'Apple Tree', 'Marco', 'Kreab'].map((company) => (
                  <span key={company} className="text-lg font-semibold tracking-tight text-foreground">{company}</span>
                ))}
              </div>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Problem ── */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Problem&nbsp;&nbsp;]</SectionLabel>
                <h2 className="mb-4 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                  Social listening was built
                  <br />
                  <span className="text-gradient-blue">for a different era</span>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Legacy tools charge enterprise prices for regex filters and
                  rigid dashboards. You deserve AI-native intelligence at a
                  fraction of the cost.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-2">
              <AnimateOnScroll animation="slide-left" delay={100}>
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
              </AnimateOnScroll>

              <AnimateOnScroll animation="slide-right" delay={200}>
                <CardClean className="border-primary/20">
                  <SectionLabel className="mb-4 text-primary">[&nbsp;&nbsp;Solution&nbsp;&nbsp;]</SectionLabel>
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
                </CardClean>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section id="how-it-works" className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;How it works&nbsp;&nbsp;]</SectionLabel>
                <h2 className="mb-4 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                  From raw data to
                  <br />
                  <span className="text-gradient-blue">actionable insights</span>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Three steps. No training needed. Start getting results in
                  minutes, not weeks.
                </p>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-in">
              <div className="mb-12 flex items-center justify-center gap-4">
                {['Gather', 'Enrich', 'Report'].map((step, i) => (
                  <div key={step} className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-medium text-white">
                        {i + 1}
                      </div>
                      <span className="text-sm font-medium">{step}</span>
                    </div>
                    {i < 2 && <div className="h-px w-12 bg-border" />}
                  </div>
                ))}
              </div>
            </AnimateOnScroll>

            <div className="grid gap-8 md:grid-cols-3">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <CardClean>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                      <Search className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Gather</h3>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Pull data from Twitter, Instagram, TikTok, and thousands of
                    news sources. Or upload your own datasets.
                  </p>
                  <div className="rounded-xl border bg-muted p-4">
                    <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <Globe className="h-3.5 w-3.5" />
                      Connected sources
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2">
                        <div className="flex items-center gap-2"><XIcon className="h-3.5 w-3.5" /><span className="text-xs font-medium">X / Twitter</span></div>
                        <span className="text-xs text-green-600">24,891 posts</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2">
                        <div className="flex items-center gap-2"><InstagramIcon className="h-3.5 w-3.5" /><span className="text-xs font-medium">Instagram</span></div>
                        <span className="text-xs text-muted-foreground">Soon</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2">
                        <div className="flex items-center gap-2"><TikTokIcon className="h-3.5 w-3.5" /><span className="text-xs font-medium">TikTok</span></div>
                        <span className="text-xs text-muted-foreground">Soon</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border bg-card px-3 py-2">
                        <div className="flex items-center gap-2"><GoogleNewsIcon className="h-3.5 w-3.5" /><span className="text-xs font-medium">News &amp; Media</span></div>
                        <span className="text-xs text-muted-foreground">Soon</span>
                      </div>
                      <div className="flex items-center justify-between rounded-lg border border-dashed bg-card/50 px-3 py-2">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <LinkedInIcon className="h-3 w-3" /><YouTubeIcon className="h-3 w-3" /><RedditIcon className="h-3 w-3" /><FacebookIcon className="h-3 w-3" />
                          <span className="text-[10px]">+more</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardClean>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={150}>
                <CardClean>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                      <Brain className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Enrich</h3>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">
                    AI filters irrelevant content semantically — not with regex.
                    Extracts topics, sentiment, emotions, and narrative structure.
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
                        <div key={step.label} className="flex items-center justify-between rounded-lg border bg-card px-3 py-2">
                          <div className="flex items-center gap-2">
                            {step.status === 'done' ? (
                              <Check className="h-3.5 w-3.5 text-green-600" />
                            ) : (
                              <div className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                            )}
                            <span className="text-xs font-medium">{step.label}</span>
                          </div>
                          <span className="text-[10px] text-muted-foreground">{step.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardClean>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={300}>
                <CardClean>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent">
                      <BarChart3 className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold">Report</h3>
                  </div>
                  <p className="mb-6 text-sm text-muted-foreground">
                    Create visualizations and full reports with a prompt. Match
                    your brand colors and style. Export to share.
                  </p>
                  <div className="rounded-xl border bg-muted p-4">
                    <div className="mb-3 text-xs text-muted-foreground">Report builder</div>
                    <div className="mb-3 flex items-center gap-2 rounded-lg border bg-card px-3 py-2">
                      <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        &quot;Show sentiment evolution by topic with brand colors&quot;
                      </span>
                    </div>
                    <div className="rounded-lg border bg-card p-3">
                      <div className="mb-2 text-[10px] font-medium">Sentiment by Topic</div>
                      <div className="flex items-end gap-1">
                        {[40, 65, 35, 80, 55, 70, 45, 60, 75, 50, 85, 65].map((h, i) => (
                          <div key={i} className="flex-1 rounded-sm bg-primary/40 transition-all" style={{ height: `${h * 0.5}px` }} />
                        ))}
                      </div>
                      <div className="mt-2 flex justify-between text-[8px] text-muted-foreground">
                        <span>Jan</span><span>Jun</span><span>Dec</span>
                      </div>
                    </div>
                  </div>
                </CardClean>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Features ── */}
        <section id="features" className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mb-20 max-w-3xl text-center">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Features&nbsp;&nbsp;]</SectionLabel>
                <h2 className="mb-4 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                  Intelligence that goes
                  <br />
                  <span className="text-gradient-blue">deeper than keywords</span>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Beyond basic sentiment. Understand the narratives, emotions,
                  and discourse shaping public opinion.
                </p>
              </div>
            </AnimateOnScroll>

            {/* Feature 1 */}
            <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
              <AnimateOnScroll animation="slide-left">
                <div>
                  <SectionLabel className="mb-4">[&nbsp;&nbsp;Semantic filtering&nbsp;&nbsp;]</SectionLabel>
                  <h3 className="mb-4 text-3xl font-medium tracking-[-0.025em]">
                    No more regex.
                    <br />
                    <span className="text-gradient-blue">AI understands context.</span>
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Traditional tools make you write complex boolean queries
                    to filter noise. Datoflow uses LLMs to semantically
                    understand whether a post is relevant — regardless of the exact words used.
                  </p>
                  <ul className="space-y-3">
                    {['Filters by meaning, not keyword matching', 'Removes spam, bots, and off-topic content automatically', 'Works across languages without translation'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" delay={150}>
                <CardClean>
                  <div className="mb-4 text-xs font-medium text-muted-foreground">Semantic filtering results</div>
                  <div className="space-y-3">
                    <div className="rounded-xl border-l-2 border-l-green-600 bg-muted p-3">
                      <div className="mb-1 flex items-center gap-2"><Check className="h-3 w-3 text-green-600" /><span className="text-[10px] font-semibold text-green-700">RELEVANT</span></div>
                      <p className="text-xs text-muted-foreground">&quot;The new sustainability report from @BrandX shows a 40% reduction in emissions...&quot;</p>
                    </div>
                    <div className="rounded-xl border-l-2 border-l-green-600 bg-muted p-3">
                      <div className="mb-1 flex items-center gap-2"><Check className="h-3 w-3 text-green-600" /><span className="text-[10px] font-semibold text-green-700">RELEVANT</span></div>
                      <p className="text-xs text-muted-foreground">&quot;Critics question the greenwashing claims in BrandX&apos;s latest campaign...&quot;</p>
                    </div>
                    <div className="rounded-xl border-l-2 border-l-red-400 bg-muted p-3 opacity-50">
                      <div className="mb-1 flex items-center gap-2"><span className="text-[10px] font-semibold text-red-500">FILTERED</span></div>
                      <p className="text-xs text-muted-foreground line-through">&quot;Just bought a brand X phone case, love the color!&quot;</p>
                    </div>
                    <div className="rounded-xl border-l-2 border-l-red-400 bg-muted p-3 opacity-50">
                      <div className="mb-1 flex items-center gap-2"><span className="text-[10px] font-semibold text-red-500">FILTERED</span></div>
                      <p className="text-xs text-muted-foreground line-through">&quot;RT if you love weekends #brand #viral #follow&quot;</p>
                    </div>
                  </div>
                </CardClean>
              </AnimateOnScroll>
            </div>

            {/* Feature 2 */}
            <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
              <AnimateOnScroll animation="slide-left" delay={100} className="order-2 md:order-1">
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
                          <div className="mx-auto mb-1 h-8 w-8 overflow-hidden rounded-full bg-accent">
                            <div className={`${emotion.color} w-full transition-all`} style={{ height: `${emotion.value}%`, marginTop: `${100 - emotion.value}%` }} />
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
                        <span key={marker} className="rounded-full border bg-accent px-2 py-0.5 text-[10px]">{marker}</span>
                      ))}
                    </div>
                  </div>
                </CardClean>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" className="order-1 md:order-2">
                <div>
                  <SectionLabel className="mb-4">[&nbsp;&nbsp;Linguistic analysis&nbsp;&nbsp;]</SectionLabel>
                  <h3 className="mb-4 text-3xl font-medium tracking-[-0.025em]">
                    Beyond sentiment.
                    <br />
                    <span className="text-gradient-blue">Emotions and discourse.</span>
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    While others give you positive/negative/neutral, Datoflow
                    detects 8 fine-grained emotions, identifies discourse
                    patterns, narrative structures, and rhetorical strategies.
                  </p>
                  <ul className="space-y-3">
                    {['8 Plutchik emotions + intensity levels', 'Discourse and narrative analysis', 'Rhetorical strategy detection', 'Cross-cultural linguistic awareness'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>

            {/* Feature 3 */}
            <div className="mb-24 grid items-center gap-12 md:grid-cols-2">
              <AnimateOnScroll animation="slide-left">
                <div>
                  <SectionLabel className="mb-4">[&nbsp;&nbsp;Topic extraction&nbsp;&nbsp;]</SectionLabel>
                  <h3 className="mb-4 text-3xl font-medium tracking-[-0.025em]">
                    Clean topics.
                    <br />
                    <span className="text-gradient-blue">Not word clouds.</span>
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Forget noisy word clouds. Datoflow generates clean,
                    hierarchical topic taxonomies with subtopics — refined by AI
                    to match what a human analyst would produce, but in seconds.
                  </p>
                  <ul className="space-y-3">
                    {['Hierarchical topics → subtopics → taxonomy', 'AI-refined for quality and coherence', 'Multi-label classification per document', 'Customizable to your domain and terminology'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" delay={150}>
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
                            <span key={sub} className="rounded-md bg-primary/10 px-1.5 py-0.5 text-[9px] font-medium text-primary">{sub}</span>
                          ))}
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="h-1.5 flex-1 rounded-full bg-border">
                            <div className="h-full rounded-full bg-primary/50" style={{ width: `${topic.sentiment}%` }} />
                          </div>
                          <span className="text-[9px] text-muted-foreground">{topic.sentiment}% positive</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardClean>
              </AnimateOnScroll>
            </div>

            {/* Feature 4 */}
            <div className="grid items-center gap-12 md:grid-cols-2">
              <AnimateOnScroll animation="slide-left" delay={100} className="order-2 md:order-1">
                <CardClean>
                  <div className="mb-4 text-xs font-medium text-muted-foreground">Data sources</div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: XIcon, name: 'X / Twitter', status: 'Connected', connected: true },
                      { icon: InstagramIcon, name: 'Instagram', status: 'Soon', connected: false },
                      { icon: TikTokIcon, name: 'TikTok', status: 'Soon', connected: false },
                      { icon: GoogleNewsIcon, name: 'News & Media', status: 'Soon', connected: false },
                      { icon: LinkedInIcon, name: 'LinkedIn', status: 'Soon', connected: false },
                      { icon: YouTubeIcon, name: 'YouTube', status: 'Soon', connected: false },
                    ].map((src) => (
                      <div key={src.name} className="flex items-center gap-3 rounded-xl border bg-muted p-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-card"><src.icon className="h-4 w-4" /></div>
                        <div><div className="text-[11px] font-medium">{src.name}</div><div className={`text-[9px] ${src.connected ? 'text-green-600' : 'text-muted-foreground'}`}>{src.status}</div></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center justify-center gap-3 text-muted-foreground/50">
                    <RedditIcon className="h-3.5 w-3.5" /><FacebookIcon className="h-3.5 w-3.5" /><GoogleSearchIcon className="h-3.5 w-3.5" />
                    <span className="text-[10px]">+many more coming</span>
                  </div>
                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-dashed bg-muted p-3">
                    <Upload className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">Or upload your own data — CSV, Excel, JSON, Parquet</span>
                  </div>
                </CardClean>
              </AnimateOnScroll>
              <AnimateOnScroll animation="slide-right" className="order-1 md:order-2">
                <div>
                  <SectionLabel className="mb-4">[&nbsp;&nbsp;Data sources&nbsp;&nbsp;]</SectionLabel>
                  <h3 className="mb-4 text-3xl font-medium tracking-[-0.025em]">
                    Your data.
                    <br />
                    <span className="text-gradient-blue">From everywhere.</span>
                  </h3>
                  <p className="mb-6 text-muted-foreground">
                    Collect from social platforms, import news from thousands of
                    sources, or bring your own datasets. Combine multiple sources
                    into a single analysis.
                  </p>
                  <ul className="space-y-3">
                    {['Built-in collectors for all major social platforms', 'Import CSV, Excel, JSON, Parquet up to 50MB', 'URL-based import for external data', 'Combine multiple sources in a single project'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm"><Check className="h-4 w-4 text-primary" />{item}</li>
                    ))}
                  </ul>
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Reports ── */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Reports&nbsp;&nbsp;]</SectionLabel>
                <h2 className="mb-4 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                  Reports that
                  <br />
                  <span className="text-gradient-blue">look like yours</span>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  Generate publication-ready reports and visualizations with a prompt. Follow your brand guidelines automatically.
                </p>
              </div>
            </AnimateOnScroll>
            <div className="grid gap-8 md:grid-cols-2">
              <AnimateOnScroll animation="scale-in" delay={0}>
                <CardClean>
                  <div className="mb-2 flex items-center gap-2"><MessageSquare className="h-5 w-5 text-primary" /><h3 className="text-lg font-semibold">Prompt-driven reports</h3></div>
                  <p className="mb-6 text-sm text-muted-foreground">Describe what you need in natural language. Datoflow generates charts, tables, and narrative summaries matching your brand.</p>
                  <div className="rounded-xl border bg-muted p-4">
                    <div className="mb-3 rounded-lg border bg-card p-3">
                      <p className="text-xs text-muted-foreground italic">&quot;Create an executive summary with a sentiment timeline, top 5 topics by volume, and key influencer mentions. Use our brand blue (#1a3c6d) and font.&quot;</p>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground"><Zap className="h-3 w-3 text-primary" /><span>Generating report with brand guidelines...</span></div>
                  </div>
                </CardClean>
              </AnimateOnScroll>
              <AnimateOnScroll animation="scale-in" delay={150}>
                <CardClean>
                  <div className="mb-2 flex items-center gap-2"><Zap className="h-5 w-5 text-primary" /><h3 className="text-lg font-semibold">Blazing fast</h3></div>
                  <p className="mb-6 text-sm text-muted-foreground">From query to insights in minutes, not days. Collect, enrich, and visualize thousands of posts before your coffee gets cold.</p>
                  <div className="rounded-xl border bg-muted p-4">
                    <div className="space-y-3">
                      {[
                        { label: 'Collecting 25K tweets', time: '~2 min' },
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
                          <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] text-white">~6 min</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardClean>
              </AnimateOnScroll>
            </div>
          </div>
        </section>

        {/* ── Pricing ── */}
        <section id="pricing" className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="fade-up">
              <div className="mx-auto mb-16 max-w-3xl text-center">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Pricing&nbsp;&nbsp;]</SectionLabel>
                <h2 className="mb-4 text-4xl font-medium tracking-[-0.025em] md:text-5xl">
                  You see every cent
                  <br />
                  <span className="text-gradient-blue">before you spend it</span>
                </h2>
                <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                  No annual contracts. No per-seat licensing. No hidden fees.
                </p>
              </div>
            </AnimateOnScroll>

            <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
              <AnimateOnScroll animation="fade-up" delay={0}>
                <CardClean className="opacity-60">
                  <SectionLabel className="mb-4 text-destructive">[&nbsp;&nbsp;Legacy pricing&nbsp;&nbsp;]</SectionLabel>
                  <div className="mb-2 text-3xl font-medium">$2,500</div>
                  <div className="mb-6 text-sm text-muted-foreground">/month, annual contract</div>
                  <ul className="space-y-2">
                    {['1 user seat included', 'Extra seats $500/mo each', 'Limited data volume', 'Hidden overage fees', 'Opaque pricing tiers'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted-foreground"><span className="text-destructive">✕</span>{item}</li>
                    ))}
                  </ul>
                </CardClean>
              </AnimateOnScroll>

              <AnimateOnScroll animation="scale-in" delay={150}>
                <div className="relative rounded-2xl border-2 border-primary bg-card backdrop-blur-sm p-8 shadow-lg">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-white" style={{ boxShadow: '0 2px 8px rgba(40,77,205,0.3)' }}>Recommended</div>
                  <SectionLabel className="mb-4 text-primary">[&nbsp;&nbsp;Datoflow&nbsp;&nbsp;]</SectionLabel>
                  <div className="mb-2 text-3xl font-medium">Pay per use</div>
                  <div className="mb-6 text-sm text-muted-foreground">Transparent. No minimums.</div>
                  <ul className="space-y-2">
                    {['See cost before every action', 'Unlimited users & projects', 'All features included', 'Credits never expire', 'Volume discounts available'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs"><Check className="h-3.5 w-3.5 text-primary" />{item}</li>
                    ))}
                  </ul>
                  <BtnPrimary href={`${appUrl}/login`} className="mt-6 w-full justify-center text-sm">
                    Start for Free <ArrowRight className="h-3.5 w-3.5" />
                  </BtnPrimary>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={300}>
                <CardClean>
                  <SectionLabel className="mb-4">[&nbsp;&nbsp;Enterprise&nbsp;&nbsp;]</SectionLabel>
                  <div className="mb-2 text-3xl font-medium">Custom</div>
                  <div className="mb-6 text-sm text-muted-foreground">For agencies &amp; large teams</div>
                  <ul className="space-y-2">
                    {['Same transparent pricing', 'Dedicated support', 'Custom integrations', 'SLA guarantees', 'White-label reports'].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs"><Check className="h-3.5 w-3.5 text-muted-foreground" />{item}</li>
                    ))}
                  </ul>
                  <BtnSecondary className="mt-6 w-full justify-center text-sm">Talk to us</BtnSecondary>
                </CardClean>
              </AnimateOnScroll>
            </div>

            <AnimateOnScroll animation="fade-up" delay={200}>
              <CardClean className="mx-auto mt-12 max-w-2xl">
                <div className="mb-4 flex items-center gap-2 text-sm font-semibold"><Eye className="h-4 w-4 text-primary" />You always know what you&apos;re paying</div>
                <div className="space-y-3">
                  {[
                    { op: 'Collect 10,000 tweets', cost: '~X credits', detail: 'Cost shown before you run' },
                    { op: 'AI topic extraction', cost: '~Y credits', detail: 'Per document, visible upfront' },
                    { op: 'Emotion & discourse analysis', cost: '~Z credits', detail: 'Itemized in your dashboard' },
                    { op: 'Upload your own CSV', cost: '0 credits', detail: 'Always free' },
                  ].map((row) => (
                    <div key={row.op} className="flex items-center justify-between rounded-xl border bg-muted px-4 py-3">
                      <div><div className="text-sm font-medium">{row.op}</div><div className="text-xs text-muted-foreground">{row.detail}</div></div>
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{row.cost}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-center text-xs text-muted-foreground">Every operation shows its credit cost before you confirm. No surprises. Ever.</p>
              </CardClean>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── Testimonial ── */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <SectionLabel className="mb-8">[&nbsp;&nbsp;Testimonial&nbsp;&nbsp;]</SectionLabel>
            <AnimateOnScroll animation="fade-up">
              <blockquote>
                <p className="mb-6 text-2xl font-medium italic leading-relaxed tracking-[-0.01em] md:text-3xl">
                  &quot;We replaced a $40K Brandwatch subscription with Datoflow
                  and got deeper insights in a fraction of the time. The
                  emotion analysis alone is worth it.&quot;
                </p>
                <footer className="text-sm text-muted-foreground">— PR Research Director, Top 10 Global Agency</footer>
              </blockquote>
            </AnimateOnScroll>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-28">
          <div className="mx-auto max-w-7xl px-6">
            <AnimateOnScroll animation="scale-in">
              <CardClean className="mx-auto max-w-3xl border-primary/10 p-16 text-center shadow-lg">
                <SectionLabel className="mb-4">[&nbsp;&nbsp;Get started&nbsp;&nbsp;]</SectionLabel>
                <h2 className="mb-4 text-4xl font-medium tracking-[-0.025em]">
                  Start getting the data
                  <br />
                  <span className="text-gradient-blue">nobody else can</span>
                </h2>
                <p className="mx-auto mb-8 max-w-lg text-muted-foreground">
                  Join PR agencies and research teams who switched from
                  legacy social listening tools to AI-native intelligence.
                  No credit card required.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <BtnPrimary href={`${appUrl}/login`}>Start for Free <ArrowRight className="h-4 w-4" /></BtnPrimary>
                  <BtnSecondary>Get a demo</BtnSecondary>
                </div>
              </CardClean>
            </AnimateOnScroll>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <Logo href="/" size="md" />
              <p className="mt-3 text-sm text-muted-foreground">Social listening & PR intelligence for the AI era.</p>
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
          <div className="mt-8 border-t border-border/30 pt-8 text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Datoflow. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
