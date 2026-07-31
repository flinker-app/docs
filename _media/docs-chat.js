(() => {
  const endpoint = "https://func-ifcgpt-prod-001.azurewebsites.net/api/docs-answer";
  let trigger = document.getElementById("docs-chat-open");

  if (!trigger) {
    trigger = document.createElement("button");
    trigger.className = "docs-chat-page-trigger";
    trigger.id = "docs-chat-open";
    trigger.type = "button";
    trigger.innerHTML = '<i class="bi bi-stars" aria-hidden="true"></i><span>Ask docs</span>';
    const actionbar = document.querySelector("main > .content > .actionbar");
    (actionbar || document.body).appendChild(trigger);
  }

  document.body.insertAdjacentHTML("beforeend", `
    <div class="docs-chat-layer" id="docs-chat-layer" hidden>
      <section class="docs-chat-dialog" role="dialog" aria-labelledby="docs-chat-title">
        <header class="docs-chat-header">
          <div class="docs-chat-identity">
            <span class="docs-chat-logo" aria-hidden="true"><i class="bi bi-stars"></i></span>
            <strong id="docs-chat-title">Ask docs</strong>
          </div>
          <div class="docs-chat-header-actions">
            <button class="docs-chat-reset" id="docs-chat-reset" type="button" title="Start a new chat" aria-label="Start a new chat">
              <i class="bi bi-plus-circle" aria-hidden="true"></i>
            </button>
            <button class="docs-chat-close" type="button" data-chat-close aria-label="Close chat">
              <i class="bi bi-x-lg" aria-hidden="true"></i>
            </button>
          </div>
        </header>
        <div class="docs-chat-content">
          <div class="docs-chat-starters" id="docs-chat-starters" aria-label="Suggested prompts">
            <button type="button" data-fill-prompt="Tell me more about [concept]">
              <i class="bi bi-text-left" aria-hidden="true"></i>
              <span><strong>Clarify</strong><span>Tell me more about [concept]</span></span>
            </button>
            <button type="button" data-fill-prompt="Tell me the meaning of [term/concept]">
              <i class="bi bi-pencil" aria-hidden="true"></i>
              <span><strong>Define</strong><span>Tell me the meaning of [term/concept]</span></span>
            </button>
            <button type="button" data-fill-prompt="Tell me how to [concept]">
              <i class="bi bi-patch-question" aria-hidden="true"></i>
              <span><strong>Guide</strong><span>Tell me how to [concept]</span></span>
            </button>
          </div>
          <div class="docs-chat-transcript" id="docs-chat-transcript" role="log" aria-live="polite" aria-relevant="additions text"></div>
        </div>
        <form class="docs-chat-composer" id="docs-chat-form">
          <div class="docs-chat-quick-actions">
            <button type="button" data-submit-prompt="Summarize this page">Summarize this page</button>
            <button type="button" data-submit-prompt="Help me troubleshoot">Help me troubleshoot</button>
            <button class="docs-chat-show-starters" id="docs-chat-show-starters" type="button" title="Show suggested prompts" aria-label="Show suggested prompts"><i class="bi bi-stars" aria-hidden="true"></i></button>
          </div>
          <div class="docs-chat-input-shell">
            <label class="visually-hidden" for="docs-chat-input">Ask the documentation assistant</label>
            <textarea id="docs-chat-input" rows="2" maxlength="500" placeholder="Describe what you'd like to do"></textarea>
            <div class="docs-chat-input-footer">
              <span id="docs-chat-character-count">0/500</span>
              <button id="docs-chat-send" type="submit" aria-label="Send message" disabled><i class="bi bi-send" aria-hidden="true"></i></button>
            </div>
          </div>
        </form>
      </section>
    </div>`);

  const layer = document.getElementById("docs-chat-layer");
  const transcript = document.getElementById("docs-chat-transcript");
  const form = document.getElementById("docs-chat-form");
  const input = document.getElementById("docs-chat-input");
  const sendButton = document.getElementById("docs-chat-send");
  const resetButton = document.getElementById("docs-chat-reset");
  const starters = document.getElementById("docs-chat-starters");
  const showStartersButton = document.getElementById("docs-chat-show-starters");
  const characterCount = document.getElementById("docs-chat-character-count");
  const promptButtons = layer.querySelectorAll("[data-fill-prompt], [data-submit-prompt]");
  let messages = [];
  let busy = false;
  let previousFocus = null;
  let pageContext = "";

  function getPageContext() {
    const heading = document.querySelector("article h1, main h1");
    const title = heading?.textContent?.trim()
      || document.title.replace(/\s*\|.*$/, "").trim();
    const url = new URL(window.location.href);
    url.hash = "";
    url.search = "";

    if (url.hostname === "localhost" || url.hostname === "127.0.0.1") {
      url.protocol = "https:";
      url.hostname = "docs.flinker.app";
      url.port = "";
    }

    return JSON.stringify({
      currentDocumentationPage: {
        title,
        url: url.toString(),
      },
    });
  }

  function openChat() {
    previousFocus = document.activeElement;
    pageContext = getPageContext();
    layer.hidden = false;
    document.body.classList.add("docs-chat-open");
    trigger.setAttribute("aria-expanded", "true");
    window.requestAnimationFrame(() => {
      layer.classList.add("is-open");
      input.focus();
    });
  }

  function closeChat() {
    layer.classList.remove("is-open");
    document.body.classList.remove("docs-chat-open");
    trigger.setAttribute("aria-expanded", "false");
    window.setTimeout(() => {
      layer.hidden = true;
      if (previousFocus instanceof HTMLElement) {
        previousFocus.focus();
      }
    }, 180);
  }

  function appendInlineMarkdown(container, text) {
    const tokenPattern = /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)|\*\*([^*]+)\*\*|`([^`]+)`)/g;
    let cursor = 0;
    let match;

    while ((match = tokenPattern.exec(text)) !== null) {
      if (match.index > cursor) {
        container.appendChild(document.createTextNode(text.slice(cursor, match.index)));
      }

      if (match[2] && match[3]) {
        const link = document.createElement("a");
        link.href = match[3];
        link.textContent = match[2];
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        container.appendChild(link);
      } else if (match[4]) {
        const strong = document.createElement("strong");
        strong.textContent = match[4];
        container.appendChild(strong);
      } else if (match[5]) {
        const code = document.createElement("code");
        code.textContent = match[5];
        container.appendChild(code);
      }

      cursor = tokenPattern.lastIndex;
    }

    if (cursor < text.length) {
      container.appendChild(document.createTextNode(text.slice(cursor)));
    }
  }

  function renderAssistantContent(content) {
    const body = document.createElement("div");
    body.className = "docs-chat-answer";
    const lines = content.replace(/\r\n/g, "\n").split("\n");
    let paragraphLines = [];
    let activeList = null;
    let activeListType = "";

    function flushParagraph() {
      if (!paragraphLines.length) {
        return;
      }

      const paragraph = document.createElement("p");
      appendInlineMarkdown(paragraph, paragraphLines.join(" "));
      body.appendChild(paragraph);
      paragraphLines = [];
    }

    function closeList() {
      activeList = null;
      activeListType = "";
    }

    lines.forEach((rawLine) => {
      const line = rawLine.trim();

      if (!line) {
        flushParagraph();
        closeList();
        return;
      }

      const headingMatch = line.match(/^#{1,4}\s+(.+)$/);
      const orderedMatch = line.match(/^\d+\.\s+(.+)$/);
      const unorderedMatch = line.match(/^[-*]\s+(.+)$/);

      if (headingMatch) {
        flushParagraph();
        closeList();
        const heading = document.createElement("p");
        heading.className = "docs-chat-answer-heading";
        appendInlineMarkdown(heading, headingMatch[1]);
        body.appendChild(heading);
        return;
      }

      if (orderedMatch || unorderedMatch) {
        flushParagraph();
        const listType = orderedMatch ? "ol" : "ul";

        if (!activeList || activeListType !== listType) {
          closeList();
          activeList = document.createElement(listType);
          activeListType = listType;
          body.appendChild(activeList);
        }

        const item = document.createElement("li");
        appendInlineMarkdown(item, (orderedMatch || unorderedMatch)[1]);
        activeList.appendChild(item);
        return;
      }

      closeList();
      paragraphLines.push(line);
    });

    flushParagraph();
    return body;
  }

  function appendSources(container, sources) {
    if (!Array.isArray(sources) || !sources.length) {
      return;
    }

    const uniqueSources = sources.filter((source, index, all) => (
      source
      && typeof source.url === "string"
      && typeof source.title === "string"
      && all.findIndex((candidate) => candidate && candidate.url === source.url) === index
    ));

    if (!uniqueSources.length) {
      return;
    }

    const sourceBlock = document.createElement("div");
    sourceBlock.className = "docs-chat-sources";
    const label = document.createElement("span");
    label.className = "docs-chat-sources-label";
    label.textContent = "Sources";
    sourceBlock.appendChild(label);

    uniqueSources.forEach((source) => {
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = source.title.replace(/\s+\|\s+Documentation$/i, "");
      const icon = document.createElement("i");
      icon.className = "bi bi-box-arrow-up-right";
      icon.setAttribute("aria-hidden", "true");
      link.appendChild(icon);
      sourceBlock.appendChild(link);
    });

    container.appendChild(sourceBlock);
  }

  function appendMessage(role, content, sources) {
    const row = document.createElement("div");
    row.className = `docs-chat-row docs-chat-row-${role}`;

    if (role === "assistant") {
      const avatar = document.createElement("span");
      avatar.className = "docs-chat-avatar";
      avatar.setAttribute("aria-hidden", "true");
      avatar.innerHTML = '<i class="bi bi-stars"></i>';
      row.appendChild(avatar);
    }

    const bubble = document.createElement("div");
    bubble.className = "docs-chat-message";

    if (role === "assistant") {
      bubble.appendChild(renderAssistantContent(content));
      appendSources(bubble, sources);
    } else {
      const paragraph = document.createElement("p");
      paragraph.textContent = content;
      bubble.appendChild(paragraph);
    }

    row.appendChild(bubble);
    transcript.appendChild(row);
    transcript.scrollTop = transcript.scrollHeight;
    return row;
  }

  function appendLoadingMessage() {
    const row = document.createElement("div");
    row.className = "docs-chat-row docs-chat-row-assistant";
    row.innerHTML = `
      <span class="docs-chat-avatar" aria-hidden="true"><i class="bi bi-stars"></i></span>
      <div class="docs-chat-message docs-chat-loading" aria-label="Searching the documentation"><span></span><span></span><span></span></div>`;
    transcript.appendChild(row);
    transcript.scrollTop = transcript.scrollHeight;
    return row;
  }

  function requestMessages() {
    const selected = [];
    let totalCharacters = 0;

    for (let index = messages.length - 1; index >= 0 && selected.length < 20; index -= 1) {
      const message = messages[index];
      const isLatestUserMessage = index === messages.length - 1 && message.role === "user";
      const prefix = isLatestUserMessage && pageContext ? `${pageContext}\n\n` : "";
      const content = prefix + message.content.slice(0, 4000 - prefix.length);

      if (selected.length && totalCharacters + content.length > 20000) {
        break;
      }

      selected.unshift({ role: message.role, content });
      totalCharacters += content.length;
    }

    return selected;
  }

  function updateInputState() {
    characterCount.textContent = `${input.value.length}/500`;
    sendButton.disabled = busy || !input.value.trim();
  }

  function fillPrompt(value) {
    input.value = value;
    updateInputState();
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
  }

  function setBusy(value) {
    busy = value;
    input.disabled = value;
    resetButton.disabled = value;
    showStartersButton.disabled = value;
    promptButtons.forEach((button) => {
      button.disabled = value;
    });
    updateInputState();
  }

  async function submitQuestion(question) {
    const cleanQuestion = question.trim();

    if (!cleanQuestion || busy) {
      return;
    }

    starters.hidden = true;
    messages.push({ role: "user", content: cleanQuestion });
    appendMessage("user", cleanQuestion);
    input.value = "";
    updateInputState();
    setBusy(true);
    const loadingRow = appendLoadingMessage();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: requestMessages() }),
      });
      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(payload.error || "The documentation assistant is temporarily unavailable.");
      }

      const answer = payload.message && typeof payload.message.content === "string"
        ? payload.message.content
        : payload.answer;

      if (typeof answer !== "string" || !answer.trim()) {
        throw new Error("The documentation assistant returned an empty answer.");
      }

      messages.push({ role: "assistant", content: answer });
      loadingRow.remove();
      appendMessage("assistant", answer, payload.sources);
    } catch (error) {
      loadingRow.remove();
      appendMessage(
        "assistant",
        error instanceof Error ? error.message : "The documentation assistant is temporarily unavailable.",
      );
    } finally {
      setBusy(false);
      input.focus();
    }
  }

  trigger.setAttribute("aria-controls", "docs-chat-layer");
  trigger.setAttribute("aria-expanded", "false");
  trigger.addEventListener("click", openChat);
  layer.addEventListener("click", (event) => {
    if (event.target.closest("[data-chat-close]")) {
      closeChat();
    }
  });
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    submitQuestion(input.value);
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      form.requestSubmit();
    }
  });
  input.addEventListener("input", () => {
    updateInputState();
  });
  starters.addEventListener("click", (event) => {
    const button = event.target.closest("[data-fill-prompt]");
    if (button) {
      fillPrompt(button.dataset.fillPrompt || "");
    }
  });
  form.addEventListener("click", (event) => {
    const button = event.target.closest("[data-submit-prompt]");
    if (button) {
      submitQuestion(button.dataset.submitPrompt || "");
    }
  });
  showStartersButton.addEventListener("click", () => {
    starters.hidden = false;
  });
  resetButton.addEventListener("click", () => {
    messages = [];
    transcript.innerHTML = "";
    starters.hidden = false;
    input.value = "";
    updateInputState();
    input.focus();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !layer.hidden) {
      closeChat();
    }
  });
  if (window.location.hash === "#docs-chat") {
    window.setTimeout(openChat, 0);
  }
})();
