window.addEventListener("load", windowLoad);

function windowLoad() {
  function digitalCountersInit(digitsCountersItems) {
    let digitsCounters = digitsCountersItems
      ? digitsCountersItems
      : document.querySelectorAll("[data-digits-counter]");
    if (digitsCounters) {
      digitsCounters.forEach((digitsCounter) => {
        digitsCountersAnimate(digitsCounter);
      });
    }
  }

  function digitsCountersAnimate(digitsCounter) {
    let startTimesTamp = null;

    const duration = parseInt(digitsCounter.dataset.digitsCounter)
      ? parseInt(digitsCounter.dataset.digitsCounter)
      : 1000;
    const startValue = parseInt(digitsCounter.innerHTML);
    const startPosition = 0;

    const step = (timesTamp) => {
      if (!startTimesTamp) startTimesTamp = timesTamp;
      const progress = Math.min((timesTamp - startTimesTamp) / duration, 1);
      digitsCounter.innerHTML = Math.floor(
        progress * (startPosition + startValue)
      );
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  //   digitalCountersInit();
  let option = {
    threshold: 0.9,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll(
          "[data-digits-counter]"
        );
        if (digitsCountersItems.length) {
          digitalCountersInit(digitsCountersItems);
        }
        observer.unobserve(targetElement);
      }
    });
  }, option);

  let sections = document.querySelectorAll(".animationCounter");
  if (sections.length) {
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}
