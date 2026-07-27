'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './WorkspaceMap.module.css';

interface DeskItem {
  id: string;
  name: string;
  className: string;
  label: string;
  desc: string;
}

const items: DeskItem[] = [
  {
    id: 'monitor',
    name: 'Samsung Essential S3 24"',
    className: styles.monitor,
    label: 'Samsung 24" Display',
    desc: 'Dual display configuration aligned vertically to read through documentation files and code structures without scaling down.'
  },
  {
    id: 'laptop',
    name: 'HP Pavilion Laptop',
    className: styles.laptop,
    label: 'HP Pavilion',
    desc: 'My primary work machine for UI design in Figma, local code compilation, and full-stack system testing.'
  },
  {
    id: 'keyboard',
    name: 'Mechanical Keyboard',
    className: styles.keyboard,
    label: 'Keyboard',
    desc: 'Compact layout keyboard for distraction-free typing during long software development sprints.'
  },
  {
    id: 'mouse',
    name: 'Logitech Pebble M350',
    className: styles.mouse,
    label: 'Pebble',
    desc: 'A silent, pocket-sized travel mouse that provides swift navigation while keeping my workstation completely quiet.'
  },
  {
    id: 'notebook',
    name: 'Analog Sketchbook',
    className: styles.notebook,
    label: 'Sketchbook',
    desc: 'Where all user flows, database relational maps, and wireframe drafts are hand-drawn before touching software.'
  },
  {
    id: 'coffee',
    name: 'Double Espresso Mug',
    className: styles.coffee,
    label: '☕',
    desc: 'Essential fuel for early morning code reviews and late night visual prototyping sprints.'
  }
];

export default function WorkspaceMap() {
  const [activeItem, setActiveItem] = useState<DeskItem | null>(null);

  return (
    <section className={`${styles.section} wrap`}>
      <div className="section-head">
        <div className="eyebrow">Workspace blueprint</div>
        <h2 className="section-title">
          My digital <span className={styles.serif}>workshop</span>.
        </h2>
        <p className="section-note">
          Hover over any item on the interactive desk layout below to inspect my hardware setup and workstation blueprint.
        </p>
      </div>

      <div className={styles.mapContainer}>
        <div className={styles.desk}>
          {items.map((item) => (
            <div
              key={item.id}
              className={`${styles.deskItem} ${item.className}`}
              onMouseEnter={() => setActiveItem(item)}
              onMouseLeave={() => setActiveItem(null)}
            >
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>

        {/* Dynamic Tooltip Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem ? activeItem.id : 'default'}
            className={styles.tooltip}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <h4 className={styles.tooltipTitle}>
              {activeItem ? activeItem.name : 'Inspect Workspace'}
            </h4>
            <p className={styles.tooltipDesc}>
              {activeItem 
                ? activeItem.desc 
                : 'Hover over the wireframe desk elements to explore my physical and analog workstation setup.'
              }
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
