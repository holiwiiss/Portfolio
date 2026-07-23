const stackFrontend = [
    { id: "icon-html5", name: "HTML 5" },
    { id: "icon-css3", name: "CSS" },
    { id: "icon-react", name: "React" },
    { id: "icon-typescript", name: "TypeScript" },
    { id: "icon-javascript", name: "JavaScript" },
  ];

  const stackTools = [
    { id: "icon-figma", name: "Figma" },
    { id: "icon-github", name: "GitHub" },
    { id: "icon-wordpress", name: "WordPress" },
    { id: "icon-mysql", name: "MySQL" },
    { id: "icon-php", name: "PHP" },
  ];

  const stackOtros = [
    { id: "icon-unity", name: "Unity", grey: true },
    { id: "icon-csharp", name: "C#", grey: true },
    { id: "icon-android-studio", name: "Android Studio", grey: true },
    { id: "icon-xml", name: "XML", grey: true },
    { id: "icon-python", name: "Python", grey: true },
  ];

  function renderStackList(container, items, hidden = false) {
    if (!container) return;
    container.innerHTML = items.map(item => `
      <li class="stack__item">
        <svg aria-hidden="true" focusable="false" fill="var(--color-text-black)" viewBox="0 0 24 24" class="icon-size-xl">
          <use href="#${item.id}"></use>
        </svg>
        <p class="text-h3${item.grey ? ' text-grey' : ''}">${item.name}</p>
      </li>
    `).join("");
    if (hidden) container.setAttribute("aria-hidden", "true");
  }

  renderStackList(document.getElementById("stack-frontend"), stackFrontend);
  renderStackList(document.getElementById("stack-frontend-copy"), stackFrontend, true);

  renderStackList(document.getElementById("stack-tools"), stackTools);
  renderStackList(document.getElementById("stack-tools-copy"), stackTools, true);

  renderStackList(document.getElementById("stack-otros"), stackOtros);
  renderStackList(document.getElementById("stack-otros-copy"), stackOtros, true);