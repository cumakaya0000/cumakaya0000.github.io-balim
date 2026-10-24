/**
 * BİZİM KÜÇÜK DÜNYAMIZ ♡ 3 BOYUTLU ANI DEFTERİ
 * Tüm 8 fotoğraf "Yeni klasör" içerisinden dinamik olarak yüklenir ve 3D efektlerle sunulur.
 */

// 8 ADET GERÇEK FOTOĞRAF VE ANILAR LİSTESİ
const memories = [
  {
    id: 1,
    date: "EN GÜZEL TEBESSÜM",
    title: "Birlikte Gülmek",
    short: "Sen güldüğünde tüm dünya biraz daha aydınlanıyor.",
    caption: "en güzel gülüşün ♡",
    image: "Yeni klasör/gulenresim.jpeg",
    fallback: "images/gulenresim.jpeg",
    alt: "Birlikte en içten gülümsediğimiz o an",
    tag: "neşe & huzur",
    story: "Birlikte en içten güldüğümüz, kahkahalarımızın birbirine karıştığı ve zamanın nasıl geçtiğini unuttuğumuz o harika an... Senin yanında kendim olabilmeyi ve senin o içten gülüşünü izlemeyi her şeyden çok seviyorum."
  },
  {
    id: 2,
    date: "İLK ADIMLAR",
    title: "Güzel Bir Başlangıç",
    short: "Hayatımın en tatlı hikâyesi bu başlangıçla yazılmaya başladı.",
    caption: "iyi ki başladık ✿",
    image: "Yeni klasör/guzelbaslangıc.jpeg",
    fallback: "images/guzelbaslangıc.jpeg",
    alt: "Hikâyemizin güzel başlangıç anı",
    tag: "yeni bir sayfa",
    story: "Henüz yolun en başındayken bile bana hissettirdiğin o güven, tatlı heyecan ve sıcaklık... İyi ki hayatıma girdin ve iyi ki bu güzel yolculuğa seninle başladım. Her anı bir öncekinden daha kıymetli."
  },
  {
    id: 3,
    date: "YOLCULUK",
    title: "Sıradaki Durak: Biz",
    short: "Nereye gittiğimizin önemi yok, seninle yolda olmak güzel.",
    caption: "sıradaki durağımız ✈",
    image: "Yeni klasör/sıradakidurak.jpeg",
    fallback: "images/sıradakidurak.jpeg",
    alt: "Birlikte keşfettiğimiz yollar ve anlar",
    tag: "yol arkadaşım",
    story: "Birlikte keşfedeceğimiz nice şehirler, yeni sokaklar ve yaşayacağımız tatlı maceralar bizi bekliyor. Elini tuttuğum sürece her durak bir masal, her yolculuk bir bayram gibi."
  },
  {
    id: 4,
    date: "KÜÇÜK BİR İZ",
    title: "Aklımda Kalan Detay",
    short: "Belki sen fark etmedin ama benim aklımın bir köşesinde hep saklı.",
    caption: "aklımda kalan o bakış ♡",
    image: "Yeni klasör/aklımdakalan.jpeg",
    fallback: "images/aklımdakalan.jpeg",
    alt: "Hafızamda özel yeri olan tatlı an",
    tag: "küçük sırlar",
    story: "O gün bana bakışın, söylediğin küçücük bir söz veya yaptığın zarif bir hareket... İnsan bazen en büyük aşkı en küçük detaylarda saklar. Benim aklımda daima o sıcacık hâlin var."
  },
  {
    id: 5,
    date: "UNUTULMAZ ANLAR",
    title: "İlk Tatlı Heyecan",
    short: "Kalp atışlarımı hızlandıran o ilk buluşmalar ve sohbetler.",
    caption: "tatlı başlangıç ✧",
    image: "Yeni klasör/Ekran görüntüsü 2026-10-24 225722.png",
    fallback: "images/Ekran görüntüsü 2026-10-24 225722.png",
    alt: "İlk heyecanımızın tatlı bir hatırası",
    tag: "ilk heyecan",
    story: "Birbirimizin dünyasına ilk kez kapı araladığımız o anlar... Ekrandaki her mesajın, söylediğin her kelimenin içimde yarattığı o kelebekler bugün hâlâ ilk günkü gibi taptaze."
  },
  {
    id: 6,
    date: "BİZİM VAKTİMİZ",
    title: "Huzurlu Bir Mola",
    short: "Zamanın yavaşladığı ve sadece ikimizin olduğu anlar.",
    caption: "senin yanında huzur ♡",
    image: "Yeni klasör/Ekran görüntüsü 2026-10-24 234656.png",
    fallback: "images/Ekran görüntüsü 2026-10-24 234656.png",
    alt: "Baş başa geçirdiğimiz huzurlu bir gün",
    tag: "huzur limanı",
    story: "Tüm dünyanın gürültüsünden uzaklaşıp sadece senin sesini dinlediğim o sakin anlar... Senin yanın bana her zaman sığınılacak güvenli bir liman, dingin bir yuva hissi veriyor."
  },
  {
    id: 7,
    date: "ŞIK VE YAN YANA",
    title: "Özel ve Unutulmaz",
    short: "Birlikte kutlanan anlar ve yan yana olmanın zarafeti.",
    caption: "en şık halimiz ✨",
    image: "Yeni klasör/Ekran görüntüsü 2026-10-24 234702.png",
    fallback: "images/Ekran görüntüsü 2026-10-24 234702.png",
    alt: "Özel günümüzde yan yana çekilmiş fotoğraf",
    tag: "birlikte kutlama",
    story: "Giyinip kuşandığımız, birbirimize gurur ve sevgiyle baktığımız o özel gün... Senin zarafetin ve yanımda oluşun bana öyle bir mutluluk veriyor ki tarif etmeye kelimeler yetmez."
  },
  {
    id: 8,
    date: "GURUR & MUTLULUK",
    title: "Birlikte Başarılar",
    short: "Geleceğe umutla baktığımız ve başarılarımızı paylaştığımız gün.",
    caption: "gururla yan yana 🎓",
    image: "Yeni klasör/Ekran görüntüsü 2026-10-24 234707.png",
    fallback: "images/Ekran görüntüsü 2026-10-24 234707.png",
    alt: "Birlikte kutladığımız özel başarımız",
    tag: "yeni ufuklar",
    story: "Verdiğimiz emeklerin, ulaştığımız başarıların meyvesini toplarken el ele olmak paha biçilemez. Hayatın her dönüm noktasında, her yeni sayfasında yine böyle yan yana olacağız."
  }
];

/* ==========================================================================
   1. BÖLÜM: 3 BOYUTLU SİLİNDİR ÇARK (3D CYLINDER CAROUSEL)
   ========================================================================== */

const carouselCylinder = document.getElementById("carouselCylinder");
const carouselViewport = document.getElementById("carouselViewport");
const carouselPrevBtn = document.getElementById("carouselPrev");
const carouselNextBtn = document.getElementById("carouselNext");
const carouselPlayToggle = document.getElementById("carouselPlayToggle");
const playToggleIcon = document.getElementById("playToggleIcon");
const playToggleText = document.getElementById("playToggleText");
const carouselIndicators = document.getElementById("carouselIndicators");

let currentCarouselAngle = 0;
let carouselAutoPlay = true;
let carouselAnimationId = null;
let isDraggingCarousel = false;
let startX = 0;
let currentX = 0;
let previousDeltaX = 0;
const totalCards = memories.length;
const anglePerCard = 360 / totalCards; // 45 derece
let cylinderRadius = 380; // Kart genişliğine göre 3D yarıçap

function updateCylinderRadius() {
  if (window.innerWidth <= 540) {
    cylinderRadius = 260;
  } else if (window.innerWidth <= 860) {
    cylinderRadius = 310;
  } else {
    cylinderRadius = 370;
  }
}

function init3DCarousel() {
  if (!carouselCylinder) return;
  updateCylinderRadius();
  carouselCylinder.innerHTML = "";
  carouselIndicators.innerHTML = "";

  memories.forEach((memory, index) => {
    // 3D Kart Öğesi
    const card = document.createElement("div");
    card.className = "carousel-card-3d";
    card.dataset.index = index;

    // Kartın 3D Silindirdeki Konumu: Y ekseninde döndür ve Z ekseninde ileri it
    const cardAngle = index * anglePerCard;
    card.style.transform = `rotateY(${cardAngle}deg) translateZ(${cylinderRadius}px)`;

    card.innerHTML = `
      <div class="carousel-card-badge">${memory.tag}</div>
      <div class="carousel-card-photo">
        <img src="${encodeURI(memory.image)}" alt="${memory.alt}" loading="lazy" onerror="this.onerror=null; this.src='${memory.fallback}';">
      </div>
      <div class="carousel-card-caption">${memory.caption}</div>
    `;

    // Karta tıklayınca büyütme modalını aç
    card.addEventListener("click", () => {
      openMemoryModal(index);
    });

    carouselCylinder.appendChild(card);

    // İndikatör Noktası
    const dot = document.createElement("button");
    dot.className = `carousel-dot ${index === 0 ? "active" : ""}`;
    dot.setAttribute("aria-label", `${memory.title} anısına git`);
    dot.addEventListener("click", () => {
      rotateCarouselTo(index);
    });
    carouselIndicators.appendChild(dot);
  });

  applyCarouselTransform();
  startCarouselAutoPlay();
}

function applyCarouselTransform() {
  if (!carouselCylinder) return;
  carouselCylinder.style.transform = `rotateY(${currentCarouselAngle}deg)`;
  updateActiveIndicator();
}

function updateActiveIndicator() {
  const normalizedAngle = ((-currentCarouselAngle % 360) + 360) % 360;
  const activeIndex = Math.round(normalizedAngle / anglePerCard) % totalCards;
  const dots = document.querySelectorAll(".carousel-dot");
  dots.forEach((dot, idx) => {
    dot.classList.toggle("active", idx === activeIndex);
  });
}

function rotateCarouselTo(index) {
  const targetAngle = -(index * anglePerCard);
  // En yakın yönden dönme hesabı
  currentCarouselAngle = targetAngle;
  applyCarouselTransform();
}

function nextCarouselCard() {
  currentCarouselAngle -= anglePerCard;
  applyCarouselTransform();
}

function prevCarouselCard() {
  currentCarouselAngle += anglePerCard;
  applyCarouselTransform();
}

// Otomatik Döndürme
function startCarouselAutoPlay() {
  if (carouselAnimationId) clearInterval(carouselAnimationId);
  carouselAnimationId = setInterval(() => {
    if (carouselAutoPlay && !isDraggingCarousel) {
      currentCarouselAngle -= 0.25; // Yumuşak akıcı dönüş
      applyCarouselTransform();
    }
  }, 25);
}

function stopCarouselAutoPlay() {
  if (carouselAnimationId) {
    clearInterval(carouselAnimationId);
    carouselAnimationId = null;
  }
}

// Oynat / Duraklat Butonu
if (carouselPlayToggle) {
  carouselPlayToggle.addEventListener("click", () => {
    carouselAutoPlay = !carouselAutoPlay;
    if (carouselAutoPlay) {
      playToggleIcon.textContent = "⏸";
      playToggleText.textContent = "Duraklat";
      startCarouselAutoPlay();
    } else {
      playToggleIcon.textContent = "▶";
      playToggleText.textContent = "Başlat";
    }
  });
}

if (carouselPrevBtn) carouselPrevBtn.addEventListener("click", prevCarouselCard);
if (carouselNextBtn) carouselNextBtn.addEventListener("click", nextCarouselCard);

// Fare ve Dokunma ile 3D Sürükleme (Drag & Swipe)
if (carouselViewport) {
  // Mouse Olayları
  carouselViewport.addEventListener("mousedown", (e) => {
    isDraggingCarousel = true;
    startX = e.clientX;
    previousDeltaX = 0;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDraggingCarousel) return;
    const deltaX = e.clientX - startX;
    currentCarouselAngle += (deltaX - previousDeltaX) * 0.4;
    previousDeltaX = deltaX;
    applyCarouselTransform();
  });

  window.addEventListener("mouseup", () => {
    if (isDraggingCarousel) {
      isDraggingCarousel = false;
    }
  });

  // Touch (Dokunmatik Ekran) Olayları
  carouselViewport.addEventListener("touchstart", (e) => {
    if (e.touches.length === 1) {
      isDraggingCarousel = true;
      startX = e.touches[0].clientX;
      previousDeltaX = 0;
    }
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (!isDraggingCarousel || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - startX;
    currentCarouselAngle += (deltaX - previousDeltaX) * 0.45;
    previousDeltaX = deltaX;
    applyCarouselTransform();
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDraggingCarousel = false;
  });
}

window.addEventListener("resize", () => {
  updateCylinderRadius();
  const cards = document.querySelectorAll(".carousel-card-3d");
  cards.forEach((card, index) => {
    const cardAngle = index * anglePerCard;
    card.style.transform = `rotateY(${cardAngle}deg) translateZ(${cylinderRadius}px)`;
  });
});

/* ==========================================================================
   2. BÖLÜM: 3D POLAROID DEFTERİ (TILT & 3D FLIP KARTLAR)
   ========================================================================== */

const memory3dGrid = document.getElementById("memory3dGrid");

function renderMemoryGrid() {
  if (!memory3dGrid) return;
  memory3dGrid.innerHTML = "";

  memories.forEach((memory, index) => {
    const cardWrapper = document.createElement("div");
    cardWrapper.className = "memory-card-3d";
    cardWrapper.dataset.index = index;

    cardWrapper.innerHTML = `
      <div class="memory-card-flipper">
        <!-- ÖN YÜZ -->
        <div class="card-front">
          <div class="card-tape-deco"></div>
          <div class="card-image-wrap">
            <img src="${encodeURI(memory.image)}" alt="${memory.alt}" loading="lazy" onerror="this.onerror=null; this.src='${memory.fallback}';">
            <div class="card-glare"></div>
          </div>
          <div class="card-info">
            <div class="card-meta-row">
              <span>${memory.date}</span>
              <span>✦</span>
            </div>
            <h3 class="card-title">${memory.title}</h3>
            <p class="card-caption-hand">${memory.caption}</p>
            <div class="card-action-bar">
              <button class="card-action-btn view-detail-btn" type="button" aria-label="${memory.title} detaylarını aç">
                <span>Büyüt</span> <span>↗</span>
              </button>
              <button class="card-flip-btn" type="button" aria-label="${memory.title} kartını çevir">
                <span>Çevir ↷</span>
              </button>
            </div>
          </div>
        </div>

        <!-- ARKA YÜZ (HİKÂYE VE NOT) -->
        <div class="card-back">
          <div class="back-header">
            <span class="back-date">${memory.date}</span>
            <span class="back-tag">${memory.tag}</span>
          </div>
          <div class="back-story-body">
            "${memory.story}"
          </div>
          <div class="back-footer">
            <span class="back-heart">♡</span>
            <button class="back-flip-btn" type="button">
              <span>Fotoğrafa Dön ↺</span>
            </button>
          </div>
        </div>
      </div>
    `;

    // 3D Tilt Etkisi (Mouse ile eğilme ve yansıma açısı)
    cardWrapper.addEventListener("mousemove", (e) => {
      if (cardWrapper.classList.contains("flipped")) return;
      const rect = cardWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -12; // -12 ile 12 derece arası
      const rotateY = ((x - centerX) / centerX) * 12;

      const flipper = cardWrapper.querySelector(".memory-card-flipper");
      flipper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;

      const glare = cardWrapper.querySelector(".card-glare");
      if (glare) {
        const glareX = (x / rect.width) * 100;
        const glareY = (y / rect.height) * 100;
        glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 65%)`;
      }
    });

    cardWrapper.addEventListener("mouseleave", () => {
      const flipper = cardWrapper.querySelector(".memory-card-flipper");
      if (!cardWrapper.classList.contains("flipped")) {
        flipper.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
      }
    });

    // 3D Kart Çevirme (Flip) Olayları
    const flipBtn = cardWrapper.querySelector(".card-flip-btn");
    const backFlipBtn = cardWrapper.querySelector(".back-flip-btn");

    flipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      cardWrapper.classList.add("flipped");
      const flipper = cardWrapper.querySelector(".memory-card-flipper");
      flipper.style.transform = "rotateY(180deg)";
    });

    backFlipBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      cardWrapper.classList.remove("flipped");
      const flipper = cardWrapper.querySelector(".memory-card-flipper");
      flipper.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    });

    // Büyütme butonu
    const viewDetailBtn = cardWrapper.querySelector(".view-detail-btn");
    viewDetailBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      openMemoryModal(index);
    });

    memory3dGrid.appendChild(cardWrapper);
  });
}

/* ==========================================================================
   3. BÖLÜM: İNTERAKTİF 3D MEKTUP VE ORIGAMI ZARF
   ========================================================================== */

const envelopeWrapper = document.getElementById("envelopeWrapper");
const waxSealBtn = document.getElementById("waxSealBtn");
const foldLetterBtn = document.getElementById("foldLetterBtn");

function initEnvelope() {
  if (!waxSealBtn || !envelopeWrapper) return;

  waxSealBtn.addEventListener("click", () => {
    envelopeWrapper.classList.add("open");
    showToast("Mektubun açıldı ♡");
  });

  if (foldLetterBtn) {
    foldLetterBtn.addEventListener("click", () => {
      envelopeWrapper.classList.remove("open");
      showToast("Mektup zarfa tekrar konuldu.");
    });
  }
}

/* ==========================================================================
   4. BÖLÜM: HERO 3D TILT PARALAKSI
   ========================================================================== */

const hero3dStage = document.getElementById("hero3dStage");
if (hero3dStage) {
  hero3dStage.addEventListener("mousemove", (e) => {
    const rect = hero3dStage.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const polaroids = hero3dStage.querySelectorAll(".polaroid-3d");
    polaroids.forEach((polaroid) => {
      const depth = parseFloat(polaroid.dataset.tiltDepth || 30);
      const moveX = (x / rect.width) * depth;
      const moveY = (y / rect.height) * depth;
      
      let baseRotate = -6;
      if (polaroid.classList.contains("hero-polaroid-sub")) baseRotate = 9;
      if (polaroid.classList.contains("hero-polaroid-mini")) baseRotate = -14;

      polaroid.style.transform = `translate3d(${moveX}px, ${moveY}px, ${depth}px) rotate(${baseRotate + moveX * 0.1}deg)`;
    });
  });

  hero3dStage.addEventListener("mouseleave", () => {
    const polaroidMain = hero3dStage.querySelector(".hero-polaroid-main");
    const polaroidSub = hero3dStage.querySelector(".hero-polaroid-sub");
    const polaroidMini = hero3dStage.querySelector(".hero-polaroid-mini");

    if (polaroidMain) polaroidMain.style.transform = "rotate(-6deg) translateZ(20px)";
    if (polaroidSub) polaroidSub.style.transform = "rotate(9deg) translateZ(50px)";
    if (polaroidMini) polaroidMini.style.transform = "rotate(-14deg) translateZ(80px)";
  });
}

/* ==========================================================================
   5. BÖLÜM: 3D LIGHTBOX BÜYÜTME MODALI
   ========================================================================== */

const memoryModal = document.getElementById("memoryModal");
const modalClose = document.getElementById("modalClose");
const modalPrev = document.getElementById("modalPrev");
const modalNext = document.getElementById("modalNext");
const modalImage = document.getElementById("modalImage");
const modalPlaceholder = document.getElementById("modalPlaceholder");
const modalDate = document.getElementById("modalDate");
const modalTitle = document.getElementById("modalTitle");
const modalText = document.getElementById("modalText");
const modalCounter = document.getElementById("modalCounter");

let currentModalIndex = 0;

function openMemoryModal(index) {
  if (!memoryModal) return;
  currentModalIndex = index;
  updateModalContent();
  memoryModal.classList.add("open");
  memoryModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function updateModalContent() {
  const memory = memories[currentModalIndex];
  modalDate.textContent = memory.date;
  modalTitle.textContent = memory.title;
  modalText.textContent = memory.story;
  modalCounter.textContent = `${currentModalIndex + 1} / ${memories.length}`;

  modalImage.hidden = false;
  modalPlaceholder.hidden = true;
  modalImage.src = encodeURI(memory.image);
  modalImage.alt = memory.alt;

  modalImage.onerror = () => {
    modalImage.src = memory.fallback;
    modalImage.onerror = () => {
      modalImage.hidden = true;
      modalPlaceholder.hidden = false;
    };
  };
}

function closeMemoryModal() {
  if (!memoryModal) return;
  memoryModal.classList.remove("open");
  memoryModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

if (modalClose) modalClose.addEventListener("click", closeMemoryModal);
if (modalPrev) {
  modalPrev.addEventListener("click", () => {
    currentModalIndex = (currentModalIndex - 1 + memories.length) % memories.length;
    updateModalContent();
  });
}
if (modalNext) {
  modalNext.addEventListener("click", () => {
    currentModalIndex = (currentModalIndex + 1) % memories.length;
    updateModalContent();
  });
}

// Modal dışına tıklayınca kapatma
if (memoryModal) {
  memoryModal.querySelectorAll("[data-close-modal]").forEach((el) => {
    el.addEventListener("click", closeMemoryModal);
  });
}

// Klavye Kısayolları (Esc, Sol/Sağ Ok)
document.addEventListener("keydown", (e) => {
  if (!memoryModal || !memoryModal.classList.contains("open")) return;
  if (e.key === "Escape") closeMemoryModal();
  if (e.key === "ArrowLeft") {
    currentModalIndex = (currentModalIndex - 1 + memories.length) % memories.length;
    updateModalContent();
  }
  if (e.key === "ArrowRight") {
    currentModalIndex = (currentModalIndex + 1) % memories.length;
    updateModalContent();
  }
});

/* ==========================================================================
   5. BÖLÜM: GİZLİ SÜRPRİZ VE SON SÖZ
   ========================================================================== */

// Gizli Kapsül / Mesaj Butonu
const secretButton = document.getElementById("secretButton");
const secretMessage = document.getElementById("secretMessage");

if (secretButton && secretMessage) {
  secretButton.addEventListener("click", () => {
    const isHidden = secretMessage.hidden;
    secretMessage.hidden = !isHidden;
    secretButton.setAttribute("aria-expanded", String(isHidden));
    const btnText = secretButton.querySelector(".capsule-btn-text");
    if (btnText) {
      btnText.textContent = isHidden ? "Kocaman sarıldım! ♡" : "Son bir küçük sürpriz daha…";
    }
    if (isHidden) {
      secretMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
      showToast("Gizli mesajın açıldı ♡");
    }
  });
}

/* ==========================================================================
   7. BÖLÜM: VARSAYILAN ARKA PLAN ŞARKISI (STING - SHAPE OF MY HEART)
   ========================================================================== */

let isMusicPlaying = false;
const musicToggle = document.getElementById("musicToggle");
const bgAudio = document.getElementById("bgAudio");
const bgVideoAudio = document.getElementById("bgVideoAudio");

function onMusicPlaySuccess(silent = false) {
  isMusicPlaying = true;
  if (musicToggle) musicToggle.classList.add("playing");
  const musicLabel = musicToggle ? musicToggle.querySelector(".music-label") : null;
  if (musicLabel) musicLabel.textContent = "Shape of My Heart";
  if (!silent) {
    showToast("♫ Sting - Shape of My Heart çalıyor...");
  }
}

function startSong(silent = false) {
  if (!bgAudio) return;
  bgAudio.volume = 0.85;
  const playPromise = bgAudio.play();

  if (playPromise !== null && playPromise !== undefined) {
    playPromise.then(() => {
      onMusicPlaySuccess(silent);
    }).catch((err) => {
      console.warn("Autoplay ilk etkileşim bekliyor:", err);
    });
  }
}

function stopSong() {
  isMusicPlaying = false;
  if (bgAudio) bgAudio.pause();
  if (musicToggle) musicToggle.classList.remove("playing");
  const musicLabel = musicToggle ? musicToggle.querySelector(".music-label") : null;
  if (musicLabel) musicLabel.textContent = "Şarkıyı Başlat";
  showToast("Şarkı duraklatıldı.");
}

function toggleMusicPlayback() {
  if (isMusicPlaying) {
    stopSong();
  } else {
    startSong(false);
  }
}

function setupMusicAutoplay() {
  // 1. Sayfa açılır açılmaz şarkıyı başlatmayı dene
  startSong(true);

  // 2. Tarayıcı autoplay politikası gereği engellerse ilk etkileşimde (tıklama, kaydırma, dokunma) hemen başlat
  const interactionEvents = ["click", "pointerdown", "touchstart", "scroll", "keydown", "wheel"];
  
  function triggerOnFirstInteraction() {
    if (!isMusicPlaying) {
      startSong(false);
    }
    interactionEvents.forEach(evt => {
      window.removeEventListener(evt, triggerOnFirstInteraction, true);
      document.removeEventListener(evt, triggerOnFirstInteraction, true);
    });
  }

  interactionEvents.forEach(evt => {
    window.addEventListener(evt, triggerOnFirstInteraction, { once: true, passive: true, capture: true });
    document.addEventListener(evt, triggerOnFirstInteraction, { once: true, passive: true, capture: true });
  });
}

if (musicToggle) {
  musicToggle.addEventListener("click", toggleMusicPlayback);
}

/* ==========================================================================
   8. BÖLÜM: 3D ARKA PLAN PARÇACIK VE PARILTI TUVALİ (AMBIENT CANVAS)
   ========================================================================== */

const canvas = document.getElementById("ambientCanvas");
let ctx = canvas ? canvas.getContext("2d") : null;
let particles = [];
const particleCount = 28;

function resizeCanvas() {
  if (!canvas) return;
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

class Floating3DParticle {
  constructor() {
    this.reset(true);
  }

  reset(initial = false) {
    this.x = Math.random() * window.innerWidth;
    this.y = initial ? Math.random() * window.innerHeight : window.innerHeight + 20;
    this.z = Math.random() * 3 + 1; // 3D Derinlik katsayısı
    this.size = (Math.random() * 9 + 6) * this.z * 0.5;
    this.speedY = (Math.random() * 0.4 + 0.25) * (this.z * 0.7);
    this.speedX = (Math.random() - 0.5) * 0.35;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotSpeed = (Math.random() - 0.5) * 0.02;
    this.opacity = Math.random() * 0.35 + 0.15;
    this.type = Math.random() > 0.45 ? "heart" : "petal"; // Kalp veya taç yaprak
  }

  update() {
    this.y -= this.speedY;
    this.x += Math.sin(this.y * 0.008) * 0.6 + this.speedX;
    this.rotation += this.rotSpeed;

    if (this.y < -30 || this.x < -30 || this.x > window.innerWidth + 30) {
      this.reset();
    }
  }

  draw() {
    if (!ctx) return;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.globalAlpha = this.opacity;

    if (this.type === "heart") {
      ctx.fillStyle = "#a855f7"; // Romantik mor / lila kalp
      // 3D Perspektifli Kalp Çizimi
      const s = this.size * 0.6;
      ctx.beginPath();
      ctx.moveTo(0, s * 0.3);
      ctx.bezierCurveTo(-s, -s * 0.6, -s * 1.4, s * 0.4, 0, s * 1.5);
      ctx.bezierCurveTo(s * 1.4, s * 0.4, s, -s * 0.6, 0, s * 0.3);
      ctx.fill();
    } else {
      // Açık lavanta / eflatun taç yaprak
      ctx.fillStyle = "#d8b4fe";
      ctx.beginPath();
      ctx.ellipse(0, 0, this.size * 0.4, this.size * 0.85, 0, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }
}

function initAmbientCanvas() {
  if (!canvas || !ctx) return;
  resizeCanvas();
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Floating3DParticle());
  }

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p) => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(loop);
  }
  loop();
}

window.addEventListener("resize", resizeCanvas);

// 3D Işık Haresi (Cursor Follower)
const cursorLight = document.getElementById("ambientCursorLight");
if (cursorLight) {
  window.addEventListener("mousemove", (e) => {
    cursorLight.style.left = `${e.clientX}px`;
    cursorLight.style.top = `${e.clientY}px`;
  });
}

/* ==========================================================================
   9. BÖLÜM: BİLDİRİM TOASTI
   ========================================================================== */

let toastTimer = null;
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");

function showToast(message) {
  if (!toast) return;
  if (toastText) toastText.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

/* ==========================================================================
   SAYFA YÜKLENDİĞİNDE BAŞLAT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  init3DCarousel();
  renderMemoryGrid();
  initEnvelope();
  initAmbientCanvas();
  setupMusicAutoplay();
});
