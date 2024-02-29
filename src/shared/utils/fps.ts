'use client';

export const getFps = async (): Promise<number> => {
  return new Promise((resolve) => {
    let frame = 0;
    let prevTime = Date.now();

    function step() {
      const time = Date.now();

      if (frame > 1) {
        return void resolve(Math.round(1000 / (time - prevTime)));
      }

      frame += 1;
      prevTime = time;

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  });
};
