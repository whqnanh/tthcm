(() => {
  "use strict";

  const STORAGE_KEY = "tthcm_pixel_quiz_v1";
  const LABELS = ["A", "B", "C", "D"];

  const defaultStats = {
    answeredIds: [],
    correctCount: 0,
    totalAttempts: 0,
    wrongIds: [],
    customAnswers: {},
    rawShuffleQ: false,
    hintShuffleQ: true,
    rawShuffleOpt: true,
    tone: "warm",
    shuffleOptions: true,
    instantCheck: true
  };

  const TONE_ORDER = ["warm", "pink", "green", "blue", "mono"];
  const TONE_LABELS = {
    warm: "Màu: Vàng cam",
    pink: "Màu: Hồng",
    green: "Màu: Xanh lá",
    blue: "Màu: Xanh nước",
    mono: "Màu: Trắng đen"
  };

  let stats = loadStats();

  let session = {
    items: [],
    index: 0,
    answers: {},
    correct: 0,
    wrong: 0,
    finished: false,
    autoNextTimer: null,
    lastConfig: null
  };

  function clearAutoNext() {
    if (session.autoNextTimer) {
      clearTimeout(session.autoNextTimer);
      session.autoNextTimer = null;
    }
  }

  function scheduleAutoNext() {
    clearAutoNext();
    const expectedIndex = session.index;
    session.autoNextTimer = setTimeout(() => {
      session.autoNextTimer = null;
      if (screens.quiz.classList.contains("hidden") || session.finished) return;
      if (session.index !== expectedIndex) return;
      btnNext.click();
    }, 2500);
  }

  let studyState = {
    query: "",
    filter: "all",
    showAnswers: true,
    editingId: null
  };

  const screens = {
    home: document.getElementById("screen-home"),
    quiz: document.getElementById("screen-quiz"),
    result: document.getElementById("screen-result"),
    study: document.getElementById("screen-study"),
    rawSetup: document.getElementById("screen-raw-setup"),
    hintSetup: document.getElementById("screen-hint-setup"),
    hint: document.getElementById("screen-hint")
  };

  const btnTone = document.getElementById("btn-tone");
  const btnHomeTop = document.getElementById("btn-home-top");

  const statTotal = document.getElementById("stat-total");
  const statAnswered = document.getElementById("stat-answered");
  const statAccuracy = document.getElementById("stat-accuracy");
  const wrongCountEl = document.getElementById("wrong-count");
  const wrongCountBtn = document.getElementById("wrong-count-btn");
  const emptyCountBtn = document.getElementById("empty-count-btn");

  const btnResetStats = document.getElementById("btn-reset-stats");

  const hudProgress = document.getElementById("hud-progress");
  const hudCorrect = document.getElementById("hud-correct");
  const hudWrong = document.getElementById("hud-wrong");
  const progressSegments = document.getElementById("progress-segments");

  const qOriginId = document.getElementById("q-origin-id");
  const qKeySource = document.getElementById("q-key-source");
  const qText = document.getElementById("q-text");
  const optionsList = document.getElementById("options-list");

  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnFinish = document.getElementById("btn-finish");
  const btnToggleMap = document.getElementById("btn-toggle-map");
  const questionMapPanel = document.getElementById("question-map-panel");
  const questionMapGrid = document.getElementById("question-map-grid");

  const resCorrect = document.getElementById("res-correct");
  const resPercent = document.getElementById("res-percent");
  const btnRetryWrong = document.getElementById("btn-retry-wrong");
  const btnRetryAll = document.getElementById("btn-retry-all");
  const btnResultHome = document.getElementById("btn-result-home");
  const reviewList = document.getElementById("review-list");

  const studySearch = document.getElementById("study-search");
  const studyCount = document.getElementById("study-count");
  const studyList = document.getElementById("study-list");

  const rawSetupOfficial = document.getElementById("raw-setup-official");
  const rawSetupCustom = document.getElementById("raw-setup-custom");
  const toggleRawShuffleQ = document.getElementById("toggle-raw-shuffle-q");
  const btnStartRawCustom = document.getElementById("btn-start-raw-custom");
  const btnStartRawOfficial = document.getElementById("btn-start-raw-official");
  const btnStartRawBoth = document.getElementById("btn-start-raw-both");
  const btnRawSetupBack = document.getElementById("btn-raw-setup-back");

  const hintSetupOfficial = document.getElementById("hint-setup-official");
  const hintSetupCustom = document.getElementById("hint-setup-custom");
  const toggleHintShuffleQ = document.getElementById("toggle-hint-shuffle-q");
  const btnHintModeCustom = document.getElementById("btn-hint-mode-custom");
  const btnHintModeOfficial = document.getElementById("btn-hint-mode-official");
  const btnHintModeBoth = document.getElementById("btn-hint-mode-both");
  const btnHintSetupBack = document.getElementById("btn-hint-setup-back");

  const hintProgress = document.getElementById("hint-progress");
  const hintCharCount = document.getElementById("hint-char-count");
  const hintOriginId = document.getElementById("hint-origin-id");
  const hintSource = document.getElementById("hint-source");
  const hintQText = document.getElementById("hint-q-text");
  const hintAnswerBox = document.getElementById("hint-answer-box");
  const hintWordBank = document.getElementById("hint-word-bank");
  const btnHintPrev = document.getElementById("btn-hint-prev");
  const btnHintReveal = document.getElementById("btn-hint-reveal");
  const btnHintAll = document.getElementById("btn-hint-all");
  const btnHintReset = document.getElementById("btn-hint-reset");
  const btnHintNext = document.getElementById("btn-hint-next");

  const pixelModal = document.getElementById("pixel-modal");
  const pixelModalTitle = document.getElementById("pixel-modal-title");
  const pixelModalMsg = document.getElementById("pixel-modal-msg");
  const pixelModalCancel = document.getElementById("pixel-modal-cancel");
  const pixelModalOk = document.getElementById("pixel-modal-ok");
  let modalConfirmCb = null;

  function showPixelAlert(msg, title = "Thông báo") {
    modalConfirmCb = null;
    pixelModalTitle.textContent = title;
    pixelModalMsg.textContent = msg;
    pixelModalCancel.classList.add("hidden");
    pixelModalOk.textContent = "Đóng";
    pixelModal.classList.remove("hidden");
  }

  function showPixelConfirm(msg, onConfirm, title = "Xác nhận") {
    modalConfirmCb = onConfirm;
    pixelModalTitle.textContent = title;
    pixelModalMsg.textContent = msg;
    pixelModalCancel.classList.remove("hidden");
    pixelModalOk.textContent = "Đồng ý";
    pixelModal.classList.remove("hidden");
  }

  function closePixelModal() {
    pixelModal.classList.add("hidden");
    modalConfirmCb = null;
  }

  pixelModalCancel.addEventListener("click", closePixelModal);
  pixelModalOk.addEventListener("click", () => {
    const cb = modalConfirmCb;
    closePixelModal();
    if (cb) cb();
  });

  let hintSession = {
    items: [],
    index: 0,
    targetWords: [],
    bankWords: [],
    selectedBankIndices: [],
    revealedAll: false,
    autoNextTimer: null
  };

  function loadStats() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultStats };
      const saved = JSON.parse(raw);
      const parsed = { ...defaultStats, ...saved };
      if (!saved.hintShuffleMigrated) {
        parsed.hintShuffleQ = true;
        parsed.hintShuffleMigrated = true;
      }
      return parsed;
    } catch {
      return { ...defaultStats };
    }
  }

  function saveStats() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
    } catch {
      // Bỏ qua lỗi bộ nhớ trình duyệt
    }
  }

  function applyTone() {
    const t = TONE_ORDER.includes(stats.tone) ? stats.tone : "warm";
    stats.tone = t;
    document.body.setAttribute("data-tone", t);
    btnTone.textContent = TONE_LABELS[t];
  }

  function renderHomeStats() {
    statTotal.textContent = String(QUESTIONS.length);
    statAnswered.textContent = String(stats.answeredIds.length);
    const acc = stats.totalAttempts > 0
      ? Math.round((stats.correctCount / stats.totalAttempts) * 100)
      : 0;
    statAccuracy.textContent = `${acc}%`;
    wrongCountEl.textContent = String(stats.wrongIds.length);
    wrongCountBtn.textContent = String(stats.wrongIds.length);
    emptyCountBtn.textContent = String(
      RAW_DATA.filter(
        (x) => (x.answer === null || x.answer === "") && !(stats.customAnswers[x.id] || "").trim()
      ).length
    );
  }

  function showScreen(name) {
    if (name !== "quiz") clearAutoNext();
    Object.keys(screens).forEach((k) => {
      screens[k].classList.toggle("hidden", k !== name);
    });
    btnHomeTop.classList.toggle("hidden", name === "home");
    if (name === "home") {
      renderHomeStats();
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  function prepareQuizItems(rawQuestions) {
    return rawQuestions.map((q) => {
      const indexed = q.options.map((text, idx) => ({
        text,
        isCorrect: idx === q.answer
      }));

      let prepared = indexed;
      if (stats.shuffleOptions) {
        const hasAllOption = indexed.some((o) =>
          o.text.trim().toLowerCase().startsWith("tất cả")
        );
        if (hasAllOption && indexed.length === 4) {
          const head = shuffleArray(indexed.slice(0, 3));
          prepared = [...head, indexed[3]];
        } else {
          prepared = shuffleArray(indexed);
        }
      }

      return {
        id: q.id,
        hasOfficialKey: q.hasOfficialKey,
        hasAnswer: q.hasAnswer !== false,
        question: q.question,
        options: prepared.map((o) => o.text),
        correctIndex: q.hasAnswer === false ? -1 : prepared.findIndex((o) => o.isCorrect)
      };
    });
  }

  function startQuiz(rawQuestions, config) {
    if (!rawQuestions || rawQuestions.length === 0) {
      showPixelAlert("Không có câu hỏi nào trong chế độ này!");
      return;
    }

    clearAutoNext();
    session = {
      items: prepareQuizItems(rawQuestions),
      index: 0,
      answers: {},
      correct: 0,
      wrong: 0,
      finished: false,
      autoNextTimer: null,
      lastConfig: config
    };

    questionMapPanel.classList.add("hidden");
    showScreen("quiz");
    renderQuizQuestion();
  }

  function pad3(n) {
    return String(n).padStart(3, "0");
  }

  function renderProgressBar() {
    const total = session.items.length;
    const maxSegs = Math.min(total, 50);
    progressSegments.innerHTML = "";

    for (let s = 0; s < maxSegs; s++) {
      const startIdx = Math.floor((s * total) / maxSegs);
      const endIdx = Math.floor(((s + 1) * total) / maxSegs);
      const seg = document.createElement("div");
      seg.className = "px-progress-seg";

      let hasCurrent = false;
      let allAnswered = true;
      let anyWrong = false;
      let allCorrect = true;

      for (let i = startIdx; i < endIdx; i++) {
        if (i === session.index) hasCurrent = true;
        const chosen = session.answers[i];
        if (chosen === undefined) {
          allAnswered = false;
          allCorrect = false;
        } else if (stats.instantCheck) {
          if (chosen !== session.items[i].correctIndex) {
            anyWrong = true;
            allCorrect = false;
          }
        }
      }

      if (hasCurrent) {
        seg.classList.add("is-current");
      } else if (allAnswered) {
        if (stats.instantCheck) {
          seg.classList.add(anyWrong ? "is-wrong" : allCorrect ? "is-correct" : "is-done");
        } else {
          seg.classList.add("is-done");
        }
      }
      progressSegments.appendChild(seg);
    }
  }

  function renderQuestionMap() {
    if (questionMapPanel.classList.contains("hidden")) return;
    questionMapGrid.innerHTML = "";

    session.items.forEach((item, idx) => {
      const cell = document.createElement("button");
      cell.type = "button";
      cell.className = "map-cell";
      cell.textContent = String(idx + 1);

      const chosen = session.answers[idx];
      if (idx === session.index) {
        cell.classList.add("is-current");
      } else if (chosen !== undefined) {
        if (stats.instantCheck) {
          cell.classList.add(chosen === item.correctIndex ? "is-correct" : "is-wrong");
        } else {
          cell.classList.add("is-done");
        }
      }

      cell.addEventListener("click", () => {
        clearAutoNext();
        session.index = idx;
        renderQuizQuestion();
      });

      questionMapGrid.appendChild(cell);
    });
  }

  function renderQuizQuestion() {
    const total = session.items.length;
    const item = session.items[session.index];
    const chosen = session.answers[session.index];
    const isAnswered = chosen !== undefined;

    hudProgress.textContent = `${session.index + 1} / ${total}`;
    hudCorrect.textContent = String(session.correct);
    hudWrong.textContent = String(session.wrong);

    qOriginId.textContent = `Câu #${pad3(item.id)}`;
    qKeySource.textContent = !item.hasAnswer
      ? "Chưa có đáp án"
      : item.hasOfficialKey
        ? "Gợi ý gốc"
        : "Tự thêm";
    qText.textContent = item.question;

    optionsList.innerHTML = "";
    item.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";

      const keySpan = document.createElement("span");
      keySpan.className = "option-key";
      keySpan.textContent = `[${LABELS[optIdx]}]`;

      const textSpan = document.createElement("span");
      textSpan.className = "option-text";
      textSpan.textContent = optText;

      btn.appendChild(keySpan);
      btn.appendChild(textSpan);

      if (isAnswered) {
        if (!item.hasAnswer) {
          if (optIdx === chosen) btn.classList.add("is-selected");
        } else if (stats.instantCheck) {
          btn.disabled = true;
          if (optIdx === item.correctIndex) {
            btn.classList.add("is-correct");
          } else if (optIdx === chosen) {
            btn.classList.add("is-wrong");
          }
        } else if (optIdx === chosen) {
          btn.classList.add("is-selected");
        }
      }

      btn.addEventListener("click", () => selectAnswer(optIdx));
      optionsList.appendChild(btn);
    });

    btnPrev.disabled = session.index === 0;
    btnNext.textContent = session.index === total - 1 ? "Xem kết quả" : "Câu tiếp";

    renderProgressBar();
    renderQuestionMap();
  }

  function selectAnswer(optIdx) {
    const item = session.items[session.index];
    if (!item.hasAnswer) {
      session.answers[session.index] = optIdx;
      renderQuizQuestion();
      return;
    }
    if (stats.instantCheck && session.answers[session.index] !== undefined) {
      return;
    }

    session.answers[session.index] = optIdx;

    if (stats.instantCheck) {
      const isOk = optIdx === item.correctIndex;
      if (isOk) {
        session.correct += 1;
        stats.correctCount += 1;
        stats.wrongIds = stats.wrongIds.filter((id) => id !== item.id);
      } else {
        session.wrong += 1;
        if (!stats.wrongIds.includes(item.id)) {
          stats.wrongIds.push(item.id);
        }
      }
      stats.totalAttempts += 1;
      if (!stats.answeredIds.includes(item.id)) {
        stats.answeredIds.push(item.id);
      }
      saveStats();
    }

    renderQuizQuestion();
    scheduleAutoNext();
  }

  function finishQuiz() {
    if (session.finished) return;
    session.finished = true;
    clearAutoNext();

    if (!stats.instantCheck) {
      session.correct = 0;
      session.wrong = 0;

      session.items.forEach((item, idx) => {
        const chosen = session.answers[idx];
        if (chosen === undefined) return;
        const isOk = chosen === item.correctIndex;
        if (isOk) {
          session.correct += 1;
          stats.correctCount += 1;
          stats.wrongIds = stats.wrongIds.filter((id) => id !== item.id);
        } else {
          session.wrong += 1;
          if (!stats.wrongIds.includes(item.id)) {
            stats.wrongIds.push(item.id);
          }
        }
        stats.totalAttempts += 1;
        if (!stats.answeredIds.includes(item.id)) {
          stats.answeredIds.push(item.id);
        }
      });
      saveStats();
    }

    const total = session.items.length;
    const percent = total > 0 ? Math.round((session.correct / total) * 100) : 0;

    resCorrect.textContent = `${session.correct} / ${total}`;
    resPercent.textContent = `${percent}%`;

    const wrongItemsExist = session.items.some(
      (item, idx) => session.answers[idx] !== item.correctIndex
    );
    btnRetryWrong.disabled = !wrongItemsExist;

    renderReview("all");
    showScreen("result");
  }

  function renderReview(filter) {
    document.querySelectorAll("[data-review-filter]").forEach((btn) => {
      btn.classList.toggle("is-on", btn.dataset.reviewFilter === filter);
    });

    reviewList.innerHTML = "";
    let count = 0;

    session.items.forEach((item, idx) => {
      const chosen = session.answers[idx];
      const isCorrect = chosen === item.correctIndex;

      if (filter === "wrong" && isCorrect) return;
      count += 1;

      const card = document.createElement("div");
      card.className = `review-item ${isCorrect ? "is-correct" : "is-wrong"}`;

      const meta = document.createElement("div");
      meta.className = "q-meta";
      meta.innerHTML = `<span class="px-badge">Câu ${idx + 1} (Gốc #${pad3(item.id)})</span>
        <span class="px-badge">${isCorrect ? "Đúng" : chosen === undefined ? "Bỏ qua" : "Sai"}</span>`;

      const qEl = document.createElement("div");
      qEl.className = "review-q";
      qEl.textContent = item.question;

      const userAns = document.createElement("div");
      userAns.className = `review-ans-row ${isCorrect ? "text-green" : "text-red"}`;
      userAns.textContent =
        chosen !== undefined
          ? `Bạn chọn [${LABELS[chosen]}]: ${item.options[chosen]}`
          : "Bạn chọn: Chưa trả lời";

      card.appendChild(meta);
      card.appendChild(qEl);
      card.appendChild(userAns);

      if (!isCorrect) {
        const rightAns = document.createElement("div");
        rightAns.className = "review-ans-row text-green";
        rightAns.textContent = `Đáp án đúng [${LABELS[item.correctIndex]}]: ${item.options[item.correctIndex]}`;
        card.appendChild(rightAns);
      }

      reviewList.appendChild(card);
    });

    if (count === 0) {
      const empty = document.createElement("div");
      empty.className = "review-item";
      empty.textContent = "Không có câu nào trong mục này.";
      reviewList.appendChild(empty);
    }
  }

  function renderStudyList() {
    const q = studyState.query.trim().toLowerCase();
    const filtered = RAW_DATA.filter((item) => {
      const userAns = stats.customAnswers[item.id] || "";
      const hasOfficial = item.answer !== null && item.answer !== "";
      if (studyState.filter === "has_answer" && !hasOfficial) return false;
      if (studyState.filter === "empty" && hasOfficial) return false;
      if (!q) return true;
      const inQuestion = item.question.toLowerCase().includes(q);
      const inOfficial = hasOfficial && item.answer.toLowerCase().includes(q);
      const inUser = userAns.toLowerCase().includes(q);
      const inId = String(item.id).includes(q);
      return inQuestion || inOfficial || inUser || inId;
    });

    studyCount.textContent = `Hiển thị: ${filtered.length} / ${RAW_DATA.length} câu`;
    studyList.innerHTML = "";

    filtered.forEach((item) => {
      const card = document.createElement("div");
      card.className = "study-item";

      const hasOfficial = item.answer !== null && item.answer !== "";
      const userAns = stats.customAnswers[item.id] || "";

      const meta = document.createElement("div");
      meta.className = "q-meta";
      const badgeId = document.createElement("span");
      badgeId.className = "px-badge px-badge-gold";
      badgeId.textContent = `Câu #${pad3(item.id)}`;

      const badgeSrc = document.createElement("span");
      badgeSrc.className = "px-badge";
      badgeSrc.textContent = hasOfficial
        ? "Gợi ý gốc"
        : userAns
          ? "Tự thêm"
          : "Chưa có đáp án";

      meta.appendChild(badgeId);
      meta.appendChild(badgeSrc);

      const qEl = document.createElement("div");
      qEl.className = "study-q";
      qEl.textContent = item.question;

      card.appendChild(meta);
      card.appendChild(qEl);

      if (true) {
        const ansBox = document.createElement("div");
        if (hasOfficial) {
          ansBox.className = "raw-answer-box";
          ansBox.textContent = `Đáp án: ${item.answer}`;
        } else if (userAns) {
          ansBox.className = "raw-answer-box is-user";
          ansBox.textContent = `Trả lời của bạn: ${userAns}`;
        } else {
          ansBox.className = "raw-answer-box is-empty";
          ansBox.textContent = "Chưa có đáp án trong file gợi ý (để trống).";
        }
        card.appendChild(ansBox);
      }

      if (!hasOfficial) {
        if (studyState.editingId === item.id) {
          const textarea = document.createElement("textarea");
          textarea.className = "raw-edit-area";
          textarea.placeholder = "Nhập câu trả lời của bạn cho câu này...";
          textarea.value = userAns;

          const row = document.createElement("div");
          row.className = "raw-answer-actions";

          const btnSave = document.createElement("button");
          btnSave.type = "button";
          btnSave.className = "px-btn px-btn-sm px-btn-primary";
          btnSave.textContent = "Lưu trả lời";
          btnSave.addEventListener("click", () => {
            const val = textarea.value.trim();
            if (val) {
              stats.customAnswers[item.id] = val;
            } else {
              delete stats.customAnswers[item.id];
            }
            saveStats();
            studyState.editingId = null;
            renderStudyList();
          });

          const btnCancel = document.createElement("button");
          btnCancel.type = "button";
          btnCancel.className = "px-btn px-btn-sm";
          btnCancel.textContent = "Hủy";
          btnCancel.addEventListener("click", () => {
            studyState.editingId = null;
            renderStudyList();
          });

          row.appendChild(btnSave);
          row.appendChild(btnCancel);
          card.appendChild(textarea);
          card.appendChild(row);
        } else {
          const row = document.createElement("div");
          row.className = "raw-answer-actions";

          const btnAdd = document.createElement("button");
          btnAdd.type = "button";
          btnAdd.className = "px-btn px-btn-sm";
          btnAdd.textContent = userAns ? "Sửa trả lời" : "+ Tự thêm trả lời";
          btnAdd.addEventListener("click", () => {
            studyState.editingId = item.id;
            renderStudyList();
          });
          row.appendChild(btnAdd);

          if (userAns) {
            const btnDel = document.createElement("button");
            btnDel.type = "button";
            btnDel.className = "px-btn px-btn-sm px-btn-danger";
            btnDel.textContent = "Xóa";
            btnDel.addEventListener("click", () => {
              delete stats.customAnswers[item.id];
              saveStats();
              renderStudyList();
            });
            row.appendChild(btnDel);
          }

          card.appendChild(row);
        }
      }

      studyList.appendChild(card);
    });
  }

  // SỰ KIỆN
  btnTone.addEventListener("click", () => {
    const curIdx = TONE_ORDER.indexOf(stats.tone);
    const nextIdx = (curIdx + 1) % TONE_ORDER.length;
    stats.tone = TONE_ORDER[nextIdx];
    saveStats();
    applyTone();
  });

  btnHomeTop.addEventListener("click", () => {
    showScreen("home");
  });

  btnResetStats.addEventListener("click", () => {
    showPixelConfirm("Xóa toàn bộ lịch sử làm bài và danh sách câu sai?", () => {
      stats.answeredIds = [];
      stats.correctCount = 0;
      stats.totalAttempts = 0;
      stats.wrongIds = [];
      saveStats();
      renderHomeStats();
    });
  });

  document.querySelectorAll("[data-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.mode;
      if (mode === "all") {
        startQuiz(QUESTIONS, { type: "all" });
      } else if (mode === "official") {
        startQuiz(QUESTIONS.filter((q) => q.hasOfficialKey), { type: "official" });
      } else if (mode === "wrong") {
        const list = QUESTIONS.filter((q) => stats.wrongIds.includes(q.id));
        if (list.length === 0) {
          showPixelAlert("Bạn chưa có câu nào làm sai để ôn lại!");
          return;
        }
        startQuiz(list, { type: "wrong" });
      }
    });
  });

  document.getElementById("btn-open-empty-study").addEventListener("click", () => {
    studyState.filter = "empty";
    document.querySelectorAll("[data-study-filter]").forEach((b) => {
      b.classList.toggle("is-on", b.dataset.studyFilter === "empty");
    });
    showScreen("study");
    renderStudyList();
  });

  document.querySelectorAll("[data-random]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const count = Number(btn.dataset.random);
      const picked = shuffleArray(QUESTIONS).slice(0, count);
      startQuiz(picked, { type: "random", count });
    });
  });

  function renderRawSetup() {
    const officialCount = RAW_DATA.filter((x) => x.answer !== null && x.answer !== "").length;
    const customCount = RAW_DATA.filter(
      (x) => (x.answer === null || x.answer === "") && Boolean((stats.customAnswers[x.id] || "").trim())
    ).length;

    rawSetupOfficial.textContent = String(officialCount);
    rawSetupCustom.textContent = String(customCount);

    toggleRawShuffleQ.textContent = stats.rawShuffleQ
      ? "Trộn thứ tự câu: Bật"
      : "Trộn thứ tự câu: Tắt";
    toggleRawShuffleQ.classList.toggle("is-on", stats.rawShuffleQ);
  }

  function buildRawQuizQuestions(mode) {
    const qMap = new Map(QUESTIONS.map((q) => [q.id, q]));

    const list = RAW_DATA.map((item) => {
      const official = item.answer !== null && item.answer !== "" ? item.answer.trim() : "";
      const custom = (stats.customAnswers[item.id] || "").trim();
      const correctText = official || custom;
      return {
        id: item.id,
        hasOfficialKey: Boolean(official),
        isCustom: !official && Boolean(custom),
        question: item.question,
        correctText
      };
    }).filter((x) => {
      if (mode === "custom") return x.isCustom;
      if (mode === "official") return x.hasOfficialKey;
      return x.correctText !== "";
    });

    const built = list.map((item) => {
      const refQ = qMap.get(item.id);
      const refDistractors = refQ
        ? refQ.options.filter((_, idx) => idx !== refQ.answer)
        : [];
      const distractors = refDistractors.filter((d) => d !== item.correctText).slice(0, 3);
      while (distractors.length < 3) {
        distractors.push(`Phương án khác ${distractors.length + 1}`);
      }
      return {
        id: item.id,
        hasOfficialKey: item.hasOfficialKey,
        hasAnswer: true,
        question: item.question,
        options: [item.correctText, ...distractors],
        answer: 0
      };
    });

    return stats.rawShuffleQ ? shuffleArray(built) : built;
  }

  function openRawSetup() {
    renderRawSetup();
    showScreen("rawSetup");
  }

  function startRawQuiz(mode) {
    const list = buildRawQuizQuestions(mode);
    if (list.length === 0) {
      showPixelAlert(mode === "custom" ? "Bạn chưa tự thêm câu trả lời nào!" : "Chưa có câu hỏi nào để làm!");
      return;
    }
    const typeMap = {
      custom: "raw-quiz-custom",
      official: "raw-quiz-official",
      both: "raw-quiz-both"
    };
    startQuiz(list, { type: typeMap[mode] || "raw-quiz-both" });
  }

  document.getElementById("btn-open-study").addEventListener("click", () => {
    showScreen("study");
    renderStudyList();
  });

  document.getElementById("btn-raw-quiz").addEventListener("click", openRawSetup);
  document.getElementById("btn-raw-quiz-inline").addEventListener("click", openRawSetup);

  toggleRawShuffleQ.addEventListener("click", () => {
    stats.rawShuffleQ = !stats.rawShuffleQ;
    saveStats();
    renderRawSetup();
  });

  btnStartRawCustom.addEventListener("click", () => startRawQuiz("custom"));
  btnStartRawOfficial.addEventListener("click", () => startRawQuiz("official"));
  btnStartRawBoth.addEventListener("click", () => startRawQuiz("both"));
  btnRawSetupBack.addEventListener("click", () => showScreen("home"));

  // CHẾ ĐỘ GỢI Ý TỪ (KHÔNG A/B/C/D)
  function getHintItems(mode) {
    return RAW_DATA.map((item) => {
      const official = item.answer !== null && item.answer !== "" ? item.answer.trim() : "";
      const custom = (stats.customAnswers[item.id] || "").trim();
      const answerText = official || custom;
      return {
        id: item.id,
        hasOfficialKey: Boolean(official),
        isCustom: !official && Boolean(custom),
        question: item.question,
        answerText
      };
    }).filter((x) => {
      if (mode === "custom") return x.isCustom;
      if (mode === "official") return x.hasOfficialKey;
      return x.answerText !== "";
    });
  }

  function renderHintSetup() {
    const officialCount = RAW_DATA.filter((x) => x.answer !== null && x.answer !== "").length;
    const customCount = RAW_DATA.filter(
      (x) => (x.answer === null || x.answer === "") && Boolean((stats.customAnswers[x.id] || "").trim())
    ).length;

    hintSetupOfficial.textContent = String(officialCount);
    hintSetupCustom.textContent = String(customCount);

    toggleHintShuffleQ.textContent = stats.hintShuffleQ
      ? "Trộn thứ tự câu: Bật"
      : "Trộn thứ tự câu: Tắt";
    toggleHintShuffleQ.classList.toggle("is-on", stats.hintShuffleQ);
  }

  function openHintSetup() {
    renderHintSetup();
    showScreen("hintSetup");
  }

  function clearHintAutoNext() {
    if (hintSession.autoNextTimer) {
      clearTimeout(hintSession.autoNextTimer);
      hintSession.autoNextTimer = null;
    }
  }

  function splitIntoPhraseChunks(text) {
    const words = text.split(/\s+/).filter(Boolean);
    if (words.length <= 3) return [words.join(" ")];

    const chunkCount = words.length <= 8 ? 3 : words.length <= 14 ? 4 : 5;
    const chunks = [];
    let start = 0;
    for (let i = 0; i < chunkCount; i++) {
      const remainingWords = words.length - start;
      const remainingChunks = chunkCount - i;
      const size = Math.ceil(remainingWords / remainingChunks);
      if (size > 0) {
        chunks.push(words.slice(start, start + size).join(" "));
        start += size;
      }
    }
    return chunks.filter(Boolean);
  }

  function setupHintWordsForCurrent() {
    clearHintAutoNext();
    const item = hintSession.items[hintSession.index];
    const chunks = splitIntoPhraseChunks(item.answerText);
    hintSession.targetWords = chunks;
    hintSession.selectedBankIndices = [];
    hintSession.revealedAll = false;
    hintSession.bankWords = shuffleArray(chunks.slice());
  }

  function renderHintQuestion() {
    const total = hintSession.items.length;
    const item = hintSession.items[hintSession.index];
    const targetWords = hintSession.targetWords;
    const selectedIndices = hintSession.selectedBankIndices;
    const selectedWords = selectedIndices.map((bi) => hintSession.bankWords[bi]);

    const isComplete = selectedWords.join(" ") === targetWords.join(" ");
    const isFullWrong = !isComplete && selectedWords.length >= targetWords.length;

    hintProgress.textContent = `${hintSession.index + 1} / ${total}`;
    hintCharCount.textContent = `${selectedWords.length} / ${targetWords.length}`;
    hintOriginId.textContent = `Câu #${pad3(item.id)}`;
    hintSource.textContent = item.hasOfficialKey ? "Gợi ý gốc" : "Tự thêm";
    hintQText.textContent = item.question;

    hintAnswerBox.classList.remove("is-correct", "is-wrong");
    if (isComplete) hintAnswerBox.classList.add("is-correct");
    else if (isFullWrong) hintAnswerBox.classList.add("is-wrong");

    hintAnswerBox.innerHTML = "";
    selectedIndices.forEach((bankIdx, pos) => {
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip word-chip-placed";
      chip.textContent = hintSession.bankWords[bankIdx];
      chip.disabled = isComplete;
      chip.addEventListener("click", () => {
        if (isComplete) return;
        hintSession.selectedBankIndices.splice(pos, 1);
        renderHintQuestion();
      });
      hintAnswerBox.appendChild(chip);
    });

    hintWordBank.innerHTML = "";
    hintSession.bankWords.forEach((word, bankIdx) => {
      const isUsed = selectedIndices.includes(bankIdx);
      const chip = document.createElement("button");
      chip.type = "button";
      chip.className = "word-chip";
      if (isUsed) chip.classList.add("is-used");
      chip.disabled = isUsed || isComplete;
      chip.textContent = word;
      chip.addEventListener("click", () => {
        if (isUsed || isComplete) return;
        hintSession.selectedBankIndices.push(bankIdx);
        renderHintQuestion();
      });
      hintWordBank.appendChild(chip);
    });

    btnHintPrev.disabled = hintSession.index === 0;
    btnHintNext.disabled = hintSession.index === total - 1;
    btnHintReveal.disabled = isComplete;

    if (isComplete && !hintSession.revealedAll && hintSession.index < total - 1) {
      clearHintAutoNext();
      const curIdx = hintSession.index;
      hintSession.autoNextTimer = setTimeout(() => {
        hintSession.autoNextTimer = null;
        if (screens.hint.classList.contains("hidden") || hintSession.index !== curIdx) return;
        hintSession.index += 1;
        setupHintWordsForCurrent();
        renderHintQuestion();
      }, 1200);
    } else if (isFullWrong) {
      clearHintAutoNext();
      const curIdx = hintSession.index;
      hintSession.autoNextTimer = setTimeout(() => {
        hintSession.autoNextTimer = null;
        if (screens.hint.classList.contains("hidden") || hintSession.index !== curIdx) return;
        hintSession.selectedBankIndices = [];
        renderHintQuestion();
      }, 850);
    }
  }

  function openHintMode(mode) {
    const rawList = getHintItems(mode);
    if (rawList.length === 0) {
      showPixelAlert(mode === "custom" ? "Bạn chưa tự thêm câu trả lời nào!" : "Chưa có câu nào có đáp án để nối từ!");
      return;
    }
    const list = stats.hintShuffleQ ? shuffleArray(rawList) : rawList;
    hintSession = {
      items: list,
      index: 0,
      targetWords: [],
      bankWords: [],
      selectedBankIndices: [],
      revealedAll: false,
      autoNextTimer: null
    };
    setupHintWordsForCurrent();
    showScreen("hint");
    renderHintQuestion();
  }

  document.getElementById("btn-open-hint").addEventListener("click", openHintSetup);
  toggleHintShuffleQ.addEventListener("click", () => {
    stats.hintShuffleQ = !stats.hintShuffleQ;
    saveStats();
    renderHintSetup();
  });
  btnHintModeCustom.addEventListener("click", () => openHintMode("custom"));
  btnHintModeOfficial.addEventListener("click", () => openHintMode("official"));
  btnHintModeBoth.addEventListener("click", () => openHintMode("both"));
  btnHintSetupBack.addEventListener("click", () => showScreen("home"));

  btnHintReveal.addEventListener("click", () => {
    const targetWords = hintSession.targetWords;
    // Giữ phần tiền tố đúng hiện tại, bỏ phần sai nếu có, rồi điền thêm 1 từ đúng tiếp theo
    let matchLen = 0;
    while (
      matchLen < hintSession.selectedBankIndices.length &&
      matchLen < targetWords.length &&
      hintSession.bankWords[hintSession.selectedBankIndices[matchLen]] === targetWords[matchLen]
    ) {
      matchLen += 1;
    }
    hintSession.selectedBankIndices = hintSession.selectedBankIndices.slice(0, matchLen);
    if (matchLen < targetWords.length) {
      const neededWord = targetWords[matchLen];
      const foundIdx = hintSession.bankWords.findIndex(
        (w, idx) => w === neededWord && !hintSession.selectedBankIndices.includes(idx)
      );
      if (foundIdx !== -1) {
        hintSession.selectedBankIndices.push(foundIdx);
      }
    }
    renderHintQuestion();
  });

  btnHintAll.addEventListener("click", () => {
    clearHintAutoNext();
    const nextSelected = [];
    hintSession.targetWords.forEach((neededWord) => {
      const foundIdx = hintSession.bankWords.findIndex(
        (w, idx) => w === neededWord && !nextSelected.includes(idx)
      );
      if (foundIdx !== -1) nextSelected.push(foundIdx);
    });
    hintSession.revealedAll = true;
    hintSession.selectedBankIndices = nextSelected;
    renderHintQuestion();
  });

  btnHintReset.addEventListener("click", () => {
    clearHintAutoNext();
    hintSession.revealedAll = false;
    hintSession.selectedBankIndices = [];
    renderHintQuestion();
  });

  btnHintPrev.addEventListener("click", () => {
    if (hintSession.index > 0) {
      hintSession.index -= 1;
      setupHintWordsForCurrent();
      renderHintQuestion();
    }
  });

  btnHintNext.addEventListener("click", () => {
    if (hintSession.index < hintSession.items.length - 1) {
      hintSession.index += 1;
      setupHintWordsForCurrent();
      renderHintQuestion();
    }
  });

  btnPrev.addEventListener("click", () => {
    clearAutoNext();
    if (session.index > 0) {
      session.index -= 1;
      renderQuizQuestion();
    }
  });

  btnNext.addEventListener("click", () => {
    clearAutoNext();
    if (session.index < session.items.length - 1) {
      session.index += 1;
      renderQuizQuestion();
    } else {
      finishQuiz();
    }
  });

  btnFinish.addEventListener("click", () => {
    const unanswered = session.items.length - Object.keys(session.answers).length;
    if (unanswered > 0) {
      showPixelConfirm(`Còn ${unanswered} câu chưa trả lời. Bạn muốn nộp bài luôn không?`, finishQuiz);
      return;
    }
    finishQuiz();
  });

  btnToggleMap.addEventListener("click", () => {
    questionMapPanel.classList.toggle("hidden");
    renderQuestionMap();
  });

  btnRetryWrong.addEventListener("click", () => {
    const wrongOriginIds = session.items
      .filter((item, idx) => session.answers[idx] !== item.correctIndex)
      .map((item) => item.id);
    const cfgType = session.lastConfig ? session.lastConfig.type : "";
    const isRaw = cfgType.startsWith("raw-quiz-");
    const rawMode = cfgType.replace("raw-quiz-", "");
    const source = isRaw
      ? buildRawQuizQuestions(rawMode)
      : QUESTIONS;
    const list = source.filter((q) => wrongOriginIds.includes(q.id));
    startQuiz(list, { type: isRaw ? cfgType : "retry-wrong" });
  });

  btnRetryAll.addEventListener("click", () => {
    const ids = session.items.map((i) => i.id);
    const cfgType = session.lastConfig ? session.lastConfig.type : "";
    const isRaw = cfgType.startsWith("raw-quiz-");
    const rawMode = cfgType.replace("raw-quiz-", "");
    const source = isRaw
      ? buildRawQuizQuestions(rawMode)
      : QUESTIONS;
    const list = source.filter((q) => ids.includes(q.id));
    startQuiz(list, session.lastConfig);
  });

  btnResultHome.addEventListener("click", () => {
    showScreen("home");
  });

  document.querySelectorAll("[data-review-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      renderReview(btn.dataset.reviewFilter);
    });
  });

  studySearch.addEventListener("input", () => {
    studyState.query = studySearch.value;
    renderStudyList();
  });

  document.querySelectorAll("[data-study-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      studyState.filter = btn.dataset.studyFilter;
      document.querySelectorAll("[data-study-filter]").forEach((b) => {
        b.classList.toggle("is-on", b.dataset.studyFilter === studyState.filter);
      });
      renderStudyList();
    });
  });

  // Phím tắt bàn phím khi làm bài
  document.addEventListener("keydown", (e) => {
    if (screens.quiz.classList.contains("hidden")) return;
    if (e.target.tagName === "INPUT" || e.target.tagName === "TEXTAREA") return;

    const key = e.key.toLowerCase();
    if (key === "1" || key === "a") selectAnswer(0);
    else if (key === "2" || key === "b") selectAnswer(1);
    else if (key === "3" || key === "c") selectAnswer(2);
    else if (key === "4" || key === "d") selectAnswer(3);
    else if (key === "arrowright" || key === "enter" || e.key === " ") {
      e.preventDefault();
      btnNext.click();
    } else if (key === "arrowleft") {
      e.preventDefault();
      btnPrev.click();
    }
  });

  applyTone();
  renderHomeStats();
})();
