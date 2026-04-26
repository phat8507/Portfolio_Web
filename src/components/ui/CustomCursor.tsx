import { useEffect, useRef, useState } from "react";

const HOVER_SELECTOR = [
  "a",
  "button",
  '[role="button"]',
  ".project-card",
  ".skill-card",
  ".education-card",
  ".contact-card",
  '[data-cursor="hover"]',
].join(",");

const INPUT_SELECTOR = [
  "input",
  "textarea",
  "select",
  "pre",
  "code",
  '[contenteditable="true"]',
  '[data-cursor="input"]',
].join(",");

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const ringRefPosition = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (min-width: 768px) and (prefers-reduced-motion: no-preference)"
    );

    const syncEnabled = () => {
      setEnabled(mediaQuery.matches);
      document.documentElement.classList.toggle("custom-cursor-enabled", mediaQuery.matches);
    };

    syncEnabled();
    mediaQuery.addEventListener("change", syncEnabled);

    return () => {
      mediaQuery.removeEventListener("change", syncEnabled);
      document.documentElement.classList.remove("custom-cursor-enabled");
    };
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!cursor || !dot || !ring) {
      return;
    }

    const setCursorMode = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null;
      const isInput = Boolean(element?.closest(INPUT_SELECTOR));
      const isHover = !isInput && Boolean(element?.closest(HOVER_SELECTOR));

      cursor.classList.toggle("is-input", isInput);
      cursor.classList.toggle("is-hover", isHover);
    };

    const moveCursor = (event: MouseEvent) => {
      targetRef.current.x = event.clientX;
      targetRef.current.y = event.clientY;

      dot.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0) translate(-50%, -50%)`;
      setCursorMode(event.target);
    };

    const animateRing = () => {
      const target = targetRef.current;
      const position = ringRefPosition.current;

      position.x += (target.x - position.x) * 0.18;
      position.y += (target.y - position.y) * 0.18;

      ring.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`;
      frameRef.current = window.requestAnimationFrame(animateRing);
    };

    const showCursor = () => {
      cursor.classList.add("is-visible");
    };

    const hideCursor = () => {
      cursor.classList.remove("is-visible", "is-hover", "is-input");
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    window.addEventListener("mouseenter", showCursor);
    window.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseover", showCursor, { passive: true });
    frameRef.current = window.requestAnimationFrame(animateRing);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseenter", showCursor);
      window.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseover", showCursor);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) {
    return null;
  }

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="custom-cursor-ring" />
      <div ref={dotRef} className="custom-cursor-dot" />
    </div>
  );
}
