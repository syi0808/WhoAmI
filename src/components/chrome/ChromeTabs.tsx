'use client';

import { Reorder } from 'framer-motion';
import { ReactElement, useRef, useState } from 'react';
import ChromeTab from './ChromeTab';
import * as sx from '@stylexjs/stylex';

export interface ChromeTab {
  label: string;
  path: string;
  element: ReactElement<any>;
}

export default function ChromeTabs() {
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [activeItem, setActiveItem] = useState(0);
  const [items, setItems] = useState([0, 1, 2, 3]);

  return (
    <Reorder.Group
      as="div"
      ref={constraintsRef}
      axis="x"
      values={items}
      onReorder={setItems}
      {...sx.props(styles.container)}
    >
      {items.map((item) => (
        <Reorder.Item
          as="div"
          dragElastic={0.001}
          dragConstraints={constraintsRef}
          key={item}
          value={item}
          onMouseDown={() => setActiveItem(item)}
        >
          <ChromeTab label="New Tab" isActive={item === activeItem} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
}

const styles = sx.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
});
