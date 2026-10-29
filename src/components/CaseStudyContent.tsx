'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { CASE_STUDIES, CaseStudySlug } from '@/lib/caseStudies';
import styles from '@/app/work/tanos-erp/CaseStudy.module.css';

export default function CaseStudyContent({ slug }: { slug: CaseStudySlug }) {
  const { lang, t } = useLanguage();
  const data = CASE_STUDIES[slug][lang];

  return (
    <>
      <Navbar />
      <article className={styles.caseStudy}>
        <header className={styles.header}>
          <div className="wrap">
            <Link href="/work" className={styles.backBtn}>
              {t.caseStudyUi.backBtn}
            </Link>

            <div className={styles.titleArea}>
              <div className="eyebrow">{data.eyebrow}</div>
              <h1 className={styles.title}>
                {data.titleMain} <span className={styles.titleSerif}>{data.titleSerif}</span>
              </h1>
              <p className={styles.subtitle}>{data.subtitle}</p>
              <div style={{ marginTop: '24px' }}>
                <a
                  href={data.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  {t.caseStudyUi.githubBtn}
                </a>
              </div>
            </div>

            <div className={styles.metaGrid}>
              {data.meta.map((m) => (
                <div key={m.label} className={styles.metaItem}>
                  <span className={styles.metaLabel}>{m.label}</span>
                  <span className={styles.metaVal}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </header>

        <div className={styles.heroImage}>
          <div className={styles.imageWrapper}>
            <Image
              src={data.coverSrc}
              alt={data.coverAlt}
              width={data.coverWidth}
              height={data.coverHeight}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </div>

        <div className="wrap">
          <div className={styles.contentGrid}>
            <aside className={styles.aside}>
              <div className={styles.toc}>
                <h3>{t.caseStudyUi.indexTitle}</h3>
                <ul>
                  {data.sections.map((sec) => (
                    <li key={sec.id}>
                      <a href={`#${sec.id}`}>{sec.tocLabel}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className={styles.body}>
              {data.sections.map((sec, idx) => (
                <section key={sec.id} id={sec.id} className={styles.bodySection}>
                  <h2>
                    <span className={styles.secNum}>{sec.num}</span> {sec.heading}
                  </h2>
                  <p>{sec.body}</p>

                  {sec.codeTokens && sec.codeTokens.length > 0 && (
                    <div className={styles.tokenList}>
                      {sec.codeTokens.map((tok) => (
                        <code key={tok}>{tok}</code>
                      ))}
                    </div>
                  )}

                  {/* Render Before vs After & Pipeline right after Problem/Bottleneck section */}
                  {idx === 1 && (
                    <div className={styles.transformBox}>
                      <div className={styles.transformHeader}>{data.transformation.title}</div>
                      <div className={styles.transformGrid}>
                        <div className={styles.transformCol}>
                          <span className={styles.transformBadgeBefore}>
                            {t.caseStudyUi.beforeLabel}
                          </span>
                          <ul className={styles.transformList}>
                            {data.transformation.beforePoints.map((pt) => (
                              <li key={pt}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                        <div className={`${styles.transformCol} ${styles.transformColAfter}`}>
                          <span className={styles.transformBadgeAfter}>
                            {t.caseStudyUi.afterLabel}
                          </span>
                          <ul className={styles.transformList}>
                            {data.transformation.afterPoints.map((pt) => (
                              <li key={pt}>{pt}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className={styles.pipelineRow}>
                        {data.transformation.pipelineSteps.map((step, sIdx) => (
                          <div key={step} className={styles.pipelineStep}>
                            <span className={styles.pipelineIndex}>0{sIdx + 1}</span>
                            <span className={styles.pipelineText}>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Render Metrics at the last section */}
                  {idx === data.sections.length - 1 && (
                    <div className={styles.metricsGrid}>
                      {data.metrics.map((metric) => (
                        <div key={metric.label} className={styles.metricCard}>
                          <div className={styles.metricNum}>{metric.num}</div>
                          <div className={styles.metricLabel}>{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>

        <div className="wrap">
          <div className={styles.nextTeaser}>
            <span className={styles.nextLabel}>{t.caseStudyUi.continueExploring}</span>
            <div className={styles.nextGrid}>
              {data.nextProjects.map((np) => (
                <Link key={np.href} href={np.href} className={styles.nextCard}>
                  <span className={styles.nextCardLabel}>{np.label}</span>
                  <h3 className={styles.nextCardTitle}>{np.title}</h3>
                  <p className={styles.nextCardDesc}>{np.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
