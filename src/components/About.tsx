'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className="wrap">
      <div className={styles.grid}>
        <motion.div
          className={styles.photo}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image 
            src="/hero.jpg" 
            alt="Muhammad Rozaq Ma'ruf" 
            fill
            priority
            sizes="(max-width: 860px) 100vw, 400px"
            style={{ 
              objectFit: 'cover' 
            }} 
          />
        </motion.div>

        <div className={styles.story}>
          <div className="eyebrow">About</div>
          <motion.h2
            className={styles.lead}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            I care about the small decisions that make a product feel{' '}
            <span className={styles.serif}>effortless</span> to use.
          </motion.h2>

          <motion.div
            className={styles.body}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p>
              I'm a UI/UX Designer and Frontend Developer, currently interning at PT Integrasi Logistik Cipta Solusi (ILCS), where I work on enterprise dashboard redesigns — from research and wireframes to shipped interfaces.
            </p>
            <p>
              What keeps me in this field is the overlap between design and code: I enjoy understanding problems deeply enough to design the right solution, and then bringing those solutions to life through code. I'm currently majoring in Informatics Engineering at Electronic Engineering Polytechnic Institute of Surabaya.
            </p>
          </motion.div>

          <motion.div
            className={styles.interests}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="tag">UI/UX Design</span>
            <span className="tag">Frontend Dev</span>
            <span className="tag">Design Systems</span>
            <span className="tag">Problem Solving</span>
          </motion.div>

          {/* Cursive drawing signature and handwritten note */}
          <motion.div
            className={styles.signatureSection}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className={styles.handwrittenNote}>
              "Thanks for stopping by! Let's build something remarkable together."
            </p>
            <div className={styles.signatureWrapper}>
              <svg viewBox="0 0 200 100" width="100%" height="100%">
                {/* Stroke 1: Signature body */}
                <motion.path
                  d="M 75,30 C 65,22 55,25 55,42 L 55,78 M 55,45 C 55,30 65,10 75,10 C 85,10 82,32 75,45 C 68,58 55,48 55,48 C 55,48 62,38 72,40 C 82,42 78,54 86,40 C 90,32 94,48 98,40"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.3, delay: 0.4, ease: "easeInOut" }}
                />
                {/* Stroke 2: Underline slash */}
                <motion.path
                  d="M 25,82 L 175,32"
                  fill="none"
                  stroke="var(--accent)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 1.6, ease: "easeOut" }}
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
