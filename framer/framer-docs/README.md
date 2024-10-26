# Framer Motion Documentation

Framer Motion is a powerful animation library for React, enabling developers to create
complex animations with ease. This guide covers the most useful and professionally
utilized attributes of Framer Motion, explaining their functions, correct application,
and their effects on components.

## Table of Contents

1. [Core Components](#core-components)
2. [Animation Props](#animation-props)
3. [Transition Props](#transition-props)
4. [Gesture Props](#gesture-props)
5. [Layout Props](#layout-props)
6. [Variants](#variants)
7. [Motion Values](#motion-values)
8. [Accessibility](#accessibility)
9. [Best Practices](#best-practices)

---

## Core Components

Framer Motion extends standard HTML and SVG elements with motion capabilities. The primary component is the `motion` component factory.

### `motion.<element>`

Transforms any HTML or SVG element into a motion-enabled component.

```jsx
import { motion } from "framer-motion";

<motion.div>Animated Content</motion.div>;
```

---

## Animation Props

### `animate`

Defines the target animation state. Accepts an object of style properties or a variant name.

```jsx
<motion.div animate={{ x: 100, opacity: 1 }} />
```

### `initial`

Sets the initial state before the animation begins. Can be an object or a variant name.

```jsx
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} />
```

### `exit`

Specifies the animation state when a component is removed from the DOM, used with `AnimatePresence`.

```jsx
<motion.div exit={{ opacity: 0 }} />
```

### `whileHover`

Defines the animation state while the component is hovered.

```jsx
<motion.button whileHover={{ scale: 1.1 }} />
```

### `whileTap`

Specifies the animation state while the component is being clicked or tapped.

```jsx
<motion.button whileTap={{ scale: 0.9 }} />
```

### `whileDrag`

Sets the animation state while the component is being dragged.

```jsx
<motion.div drag whileDrag={{ scale: 1.2, rotate: 10 }} />
```

### `useAnimation`

The `useAnimation` hook allows for programmatic control of animations by providing an animation controller that can start, stop, or sequence animations.

#### Usage

```jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Example = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 100,
      opacity: 1,
      transition: { duration: 2 },
    });
  }, [controls]);

  return <motion.div initial={{ opacity: 0 }} animate={controls} />;
};
```

#### Use Cases

- **Triggering Animations on Events:** Start animations in response to user interactions or external events.
- **Sequencing Animations:** Control multiple animations in a specific order.
- **Conditional Animations:** Animate components based on state changes or other conditions.

---

## Transition Props

### `transition`

Controls the timing and behavior of animations. Can define duration, ease, type, and more.

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ duration: 2, ease: "easeOut" }}
/>
```

### Transition Properties

- **duration**: Length of the animation in seconds.
- **ease**: Easing function (`"linear"`, `"easeIn"`, `"easeOut"`, `"easeInOut"`, etc.).
- **type**: Defines the animation type (`"spring"`, `"tween"`, `"keyframes"`).
- **delay**: Time to wait before starting the animation.
- **stiffness**, **damping**: Spring physics parameters for `"spring"` type.
- **repeat**, **repeatType**, **repeatDelay**: Controls for repeating animations.

```jsx
<motion.div
  animate={{ scale: 1.5 }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
    repeat: Infinity,
    repeatType: "reverse",
  }}
/>
```

---

## Gesture Props

### Dragging

Enables dragging functionality.

```jsx
<motion.div drag />
```

### `dragConstraints`

Limits the draggable area. Can be defined with pixel values or a reference to a DOM element.

```jsx
<motion.div
  drag
  dragConstraints={{ left: 0, right: 300, top: 0, bottom: 300 }}
/>
```

### `dragElastic`

Controls the elasticity of the drag response. Values range from `0` (no elasticity) to `1` (fully elastic).

```jsx
<motion.div drag dragElastic={0.2} />
```

### `dragTransition`

Customizes the transition when dragging ends.

```jsx
<motion.div drag dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }} />
```

---

## Layout Props

### `layout`

Enables automatic layout animations when a component's position or size changes.

```jsx
<motion.div layout />
```

### `layoutId`

Allows shared layout animations between components by assigning a unique ID.

```jsx
<motion.div layoutId="shared-element" />
```

---

## Variants

Variants are predefined animation states that can be referenced by name. They promote reusability and consistency across components.

```jsx
const variants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0 },
};

<motion.div variants={variants} initial="hidden" animate="visible" />;
```

### Nested Variants

Child components can inherit and respond to parent variant changes.

```jsx
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

<motion.ul variants={container} initial="hidden" animate="visible">
  <motion.li variants={item} />
  <motion.li variants={item} />
  <motion.li variants={item} />
</motion.ul>;
```

### Dynamic Variants

Variants can be functions that accept custom parameters.

```jsx
const itemVariants = {
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.2 },
  }),
  hidden: { opacity: 0 },
};

<motion.div
  custom={2}
  variants={itemVariants}
  initial="hidden"
  animate="visible"
/>;
```

---

## Motion Values

Motion Values are reactive values that drive animations. They can be used to create complex, interconnected animations.

### `useMotionValue`

Creates a motion value for a specific property.

```jsx
import { useMotionValue } from "framer-motion";

const x = useMotionValue(0);

<motion.div style={{ x }} />;
```

### `useTransform`

Transforms one motion value into another, enabling derived animations.

```jsx
import { useMotionValue, useTransform } from "framer-motion";

const x = useMotionValue(0);
const rotate = useTransform(x, [0, 100], [0, 360]);

<motion.div style={{ x, rotate }} />;
```

---

## Accessibility

### `useReducedMotion`

Detects if the user has requested reduced motion in their system settings.

```jsx
import { useReducedMotion, motion } from "framer-motion";

const shouldReduceMotion = useReducedMotion();

<motion.div
  animate={shouldReduceMotion ? { opacity: 1 } : { x: 100, opacity: 1 }}
/>;
```

### `MotionConfig`

Configures global motion settings, including reduced motion preferences.

```jsx
import { MotionConfig } from "framer-motion";

<MotionConfig reducedMotion="user">
  <App />
</MotionConfig>;
```

---

## Best Practices

- **Use Variants:** Promote code reusability and maintainability by defining variants for common animation states.
- **Optimize Transitions:** Adjust transition properties like `duration`, `ease`, and `type` to create natural and performant animations.
- **Leverage Motion Values:** Utilize motion values and transforms to create interconnected and dynamic animations.
- **Respect Accessibility:** Implement reduced motion preferences to enhance user experience for all users.
- **Modularize Animations:** Keep animation configurations modular, especially when reused across multiple components.
- **Test Performance:** Ensure that complex animations do not degrade performance, particularly on lower-end devices.

---

## References

- [Framer Motion Animation Guide](https://www.framer.com/motion/animation/)
- [Framer Motion Accessibility Guide](https://www.framer.com/motion/guide-accessibility/)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)

For more detailed information and advanced usage, refer to the [official Framer Motion documentation](https://www.framer.com/motion/).

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
