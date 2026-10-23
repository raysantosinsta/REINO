/**
 * REINO — ALTA ALFAIATARIA & COUTURE FEMININA
 * Motor de Interações, Experiência Soberana & Estado Comercial
 * Vanilla JavaScript puro (ES6+) — Sem dependências externas
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  /* ==========================================================================
     01. Catálogo de Silhuetas & Dados de Alta Costura REINO
     ========================================================================== */
  const PRODUCTS_DATABASE = {
    'reino-01': {
      id: 'reino-01',
      title: "Blazer Soberano 'Reino Vendôme'",
      price: 5850,
      priceFormatted: 'R$ 5.850',
      installments: 'ou 6x de R$ 975 sem juros',
      category: 'alfaiataria',
      badge: 'EDIÇÃO REAL • 50 UNIDADES',
      refCode: 'REF: REINO-2026-BL01',
      description: 'Corte arquitetural inspirado na tradição secular dos ateliês parisienses com ombros estruturados em crina de cavalo flutuante. Fechamento frontal discreto e fendas posteriores milimétricas que conferem postura inabalável.',
      fabric: '100% Lã Fria 140s de Biella (Itália) • Forro interno 100% Cupro Francês antiestático • Botões em chifre natural entalhado à mão.',
      images: [
        'https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1000&q=85'
      ]
    },
    'reino-02': {
      id: 'reino-02',
      title: "Vestido Midi Drapé 'Aura Real'",
      price: 4980,
      priceFormatted: 'R$ 4.980',
      installments: 'ou 6x de R$ 830 sem juros',
      category: 'vestidos',
      badge: 'SEDA ORGÂNICA CERTIFICADA',
      refCode: 'REF: REINO-2026-DR02',
      description: 'Fluidez líquida em corte em viés genuíno. A seda envolve a anatomia feminina com sutileza, proporcionando movimento hipnótico ao caminhar e o peso característico das grandes criações soberanas.',
      fabric: '100% Seda Pura Mulberry 22 Momme de Lyon • Toque perolado fosco • Acabamento com costura francesa invisível.',
      images: [
        'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=1000&q=85'
      ]
    },
    'reino-03': {
      id: 'reino-03',
      title: "Manteau Imperial 'Palácio'",
      price: 9400,
      priceFormatted: 'R$ 9.400',
      installments: 'ou 6x de R$ 1.566 sem juros',
      category: 'manteaux',
      badge: 'CASHMERE DUPLA FACE',
      refCode: 'REF: REINO-2026-CO03',
      description: 'Peça monumental confeccionada em técnica dupla-face, onde duas camadas de puro cashmere são unidas manualmente pelas bordas com pontos imperceptíveis. Aquece com leveza ímpar e soberania.',
      fabric: '100% Cashmere Virgem dos Alpes Piemonteses • Pesponto manual ponto-Paris • Faixa de amarração com reforço interno.',
      images: [
        'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=1000&q=85'
      ]
    },
    'reino-04': {
      id: 'reino-04',
      title: "Chemise Arquitetural 'Reino Cetim'",
      price: 2950,
      priceFormatted: 'R$ 2.950',
      installments: 'ou 6x de R$ 491 sem juros',
      category: 'alfaiataria',
      badge: 'ALGODÃO EGÍPCIO 200/2',
      refCode: 'REF: REINO-2026-SH04',
      description: 'A camisa branca definitiva da marca REINO. Colarinho com estrutura impecável, punhos duplos alongados para abotoadura e prega dorsal que confere volume escultural quando vista de perfil.',
      fabric: '100% Algodão Egípcio Giza 88 fio 200/2 • Botões legítimos em madrepérola australiana gravados a laser.',
      images: [
        'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=1000&q=85'
      ]
    },
    'reino-05': {
      id: 'reino-05',
      title: "Calça Pantalona 'Majestosa'",
      price: 3650,
      priceFormatted: 'R$ 3.650',
      installments: 'ou 6x de R$ 608 sem juros',
      category: 'alfaiataria',
      badge: 'CAIMENTO ESCULTURAL',
      refCode: 'REF: REINO-2026-TR05',
      description: 'Cintura alta desenhada com cós entretelado rígido e pernas ultra amplas com vinco prensado a vapor. Alonga a silhueta com imponência e elegância descomplicada.',
      fabric: 'Crepe Encorpado de Lã Virgem com 2% de elastano nobre • Bolso faca lateral e forro parcial em seda.',
      images: [
        'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1000&q=85'
      ]
    },
    'reino-06': {
      id: 'reino-06',
      title: "Bolsa Escultural 'A Coroa'",
      price: 6200,
      priceFormatted: 'R$ 6.200',
      installments: 'ou 6x de R$ 1.033 sem juros',
      category: 'acessorios',
      badge: 'MAROQUINERIE NUMERADA',
      refCode: 'REF: REINO-2026-BG06',
      description: 'Objeto de arte funcional da marroquinaria do REINO. Couro curtido vegetalmente, moldado em formato curvo geométrico com fecho magnético oculto e ferragens de latão banhado em ouro ocre.',
      fabric: 'Couro Box Calf Francês de primeira seleção • Interior forrado em camurça natural macia • Banho de ouro 18k fosco.',
      images: [
        'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1000&q=85',
        'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=1000&q=85'
      ]
    }
  };

  /* Looks do Studio Interativo Reino */
  const STUDIO_LOOKS = {
    '1': {
      badge: "LOOK REINO 01 — O SMOKING SOBERANO",
      category: "CONJUNTO COUTURE COMPLETO REINO",
      title: "Smoking Soberano & Pantalona Majestosa",
      price: "R$ 9.500",
      priceNum: 9500,
      desc: "A síntese definitiva do poder feminino refinado. Blazer alongado com abotoamento trespassado sutil e ombros suavemente estruturados com entretela italiana, acompanhado da pantalona de cós limpo e pregas profundas.",
      fabric: "98% Lã Fria 140s Biella, 2% Elastano Nobre",
      lining: "100% Cupro Francês com acabamento antiestático",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=85"
    },
    '2': {
      badge: "LOOK REINO 02 — O VESTIDO IMPERIAL",
      category: "ALTA COSTURA SOB MEDIDA",
      title: "Vestido de Gala 'Aura Real' em Seda Pura",
      price: "R$ 6.800",
      priceNum: 6800,
      desc: "Modelagem drapeada que desafia a simetria convencional. A seda pura de 22 momme cai em cascata assimétrica pelas costas, criando um contraste dramático com a gola alta escultural frontal.",
      fabric: "100% Seda Pura Mulberry de Lyon (França)",
      lining: "Duplo crepe de seda no busto para sustentação pura",
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1200&q=85"
    },
    '3': {
      badge: "LOOK REINO 03 — O MANTEAU DA COROA",
      category: "SÉRIE LIMITADA 25 PEÇAS",
      title: "Manteau Palácio & Chemise Reino Cetim",
      price: "R$ 12.350",
      priceNum: 12350,
      desc: "A personificação da sobriedade atemporal. O sobretudo em cashmere virgem corta o vento com amplitude generosa sobreposto à clássica camisa de popelina com gola estruturada e abotoamento oculto.",
      fabric: "100% Cashmere Piemontês Dupla-Face & Algodão Giza 88",
      lining: "Desprovido de forro sintético — acabamento interno debruado",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1200&q=85"
    }
  };

  /* ==========================================================================
     02. Estado da Sacola de Compras Reino (Cart State)
     ========================================================================== */
  let cart = [];

  function formatBRL(amount) {
    return amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  }

  function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    const badge = document.getElementById('cartCountBadge');
    if (badge) {
      badge.textContent = totalItems;
      badge.setAttribute('aria-label', `${totalItems} itens na sacola`);
    }

    const drawerCount = document.getElementById('cartTotalItemsCount');
    if (drawerCount) {
      drawerCount.textContent = `${totalItems} ${totalItems === 1 ? 'ITEM' : 'ITENS'}`;
    }

    const subtotalEl = document.getElementById('cartSubtotalAmount');
    if (subtotalEl) {
      subtotalEl.textContent = formatBRL(subtotal);
    }

    const installmentsEl = document.getElementById('cartInstallmentsNote');
    if (installmentsEl) {
      const installmentValue = subtotal > 0 ? formatBRL(Math.round(subtotal / 6)) : 'R$ 0';
      installmentsEl.textContent = `em até 6x sem juros de ${installmentValue} no cartão de crédito`;
    }

    const container = document.getElementById('cartItemsContainer');
    const emptyState = document.getElementById('cartEmptyState');
    const footer = document.getElementById('cartDrawerFooter');

    if (!container) return;

    if (cart.length === 0) {
      if (emptyState) emptyState.style.display = 'flex';
      if (footer) footer.style.opacity = '0.5';
      const renderedItems = container.querySelectorAll('.cart-item');
      renderedItems.forEach(item => item.remove());
    } else {
      if (emptyState) emptyState.style.display = 'none';
      if (footer) footer.style.opacity = '1';

      const renderedItems = container.querySelectorAll('.cart-item');
      renderedItems.forEach(item => item.remove());

      cart.forEach((item, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'cart-item';
        itemEl.innerHTML = `
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-details">
            <h4 class="cart-item-title">${item.title}</h4>
            <div class="cart-item-size">Tamanho: ${item.size}</div>
            <div class="cart-item-price">${formatBRL(item.price)}</div>
            <div class="cart-item-actions">
              <div class="quantity-controls">
                <button class="qty-btn" data-action="decrease" data-index="${index}" aria-label="Reduzir quantidade">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" data-action="increase" data-index="${index}" aria-label="Aumentar quantidade">+</button>
              </div>
              <button class="cart-item-remove-btn" data-action="remove" data-index="${index}">Remover</button>
            </div>
          </div>
        `;
        container.appendChild(itemEl);
      });
    }
  }

  function addToCart(item) {
    const existingIndex = cart.findIndex(i => i.id === item.id && i.size === item.size);
    if (existingIndex > -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({
        id: item.id,
        title: item.title,
        price: item.price,
        size: item.size || '38',
        image: item.image,
        quantity: 1
      });
    }

    updateCartUI();
    showToast('Adicionado à Sacola Real', `${item.title} (Tam: ${item.size || '38'}) foi reservado para você.`, '👑');
    openCartDrawer();
  }

  const cartContainer = document.getElementById('cartItemsContainer');
  if (cartContainer) {
    cartContainer.addEventListener('click', (e) => {
      const target = e.target.closest('button');
      if (!target) return;

      const action = target.getAttribute('data-action');
      const index = parseInt(target.getAttribute('data-index'), 10);

      if (action === 'increase') {
        cart[index].quantity += 1;
        updateCartUI();
      } else if (action === 'decrease') {
        if (cart[index].quantity > 1) {
          cart[index].quantity -= 1;
        } else {
          cart.splice(index, 1);
        }
        updateCartUI();
      } else if (action === 'remove') {
        const removed = cart.splice(index, 1);
        updateCartUI();
        if (removed.length > 0) {
          showToast('Item Removido', `${removed[0].title} foi retirado da sacola.`, '✕');
        }
      }
    });
  }

  /* ==========================================================================
     03. Drawer da Sacola de Compras (Abrir / Fechar)
     ========================================================================== */
  const cartToggleBtn = document.getElementById('cartToggleBtn');
  const cartDrawerOverlay = document.getElementById('cartDrawerOverlay');
  const cartBackdrop = document.getElementById('cartBackdrop');
  const cartCloseBtn = document.getElementById('cartCloseBtn');

  function openCartDrawer() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.add('open');
      cartDrawerOverlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeCartDrawer() {
    if (cartDrawerOverlay) {
      cartDrawerOverlay.classList.remove('open');
      cartDrawerOverlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  if (cartToggleBtn) cartToggleBtn.addEventListener('click', openCartDrawer);
  if (cartBackdrop) cartBackdrop.addEventListener('click', closeCartDrawer);
  if (cartCloseBtn) cartCloseBtn.addEventListener('click', closeCartDrawer);

  document.addEventListener('click', (e) => {
    if (e.target.closest('.close-cart-link')) {
      closeCartDrawer();
    }
  });

  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cart.length === 0) {
        showToast('Sacola Vazia', 'Selecione uma peça da coleção para iniciar o atendimento real.', '👑');
        return;
      }
      showToast('Atendimento Real Iniciado', 'Você está sendo transferida para a suíte de atendimento com a Concierge Reino.', '👑');
      setTimeout(() => {
        alert('REINO — Simulação de Reserva Exclusiva:\n\nSua reserva soberana foi gerada com sucesso sob protocolo REAL-2026. Nossa concierge entrará em contato via WhatsApp para confirmar horários de entrega ou ajuste em domicílio.');
        cart = [];
        updateCartUI();
        closeCartDrawer();
      }, 1000);
    });
  }

  /* ==========================================================================
     04. Modal de Olhar Rápido (Quick View Modal)
     ========================================================================== */
  const quickViewModal = document.getElementById('quickViewModal');
  const modalBackdrop = document.getElementById('modalBackdrop');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  let currentModalProductId = null;
  let currentSelectedSize = '38';

  function openQuickView(productId) {
    const product = PRODUCTS_DATABASE[productId];
    if (!product || !quickViewModal) return;

    currentModalProductId = productId;
    currentSelectedSize = '38';

    document.getElementById('modalProductTitle').textContent = product.title;
    document.getElementById('modalPrice').textContent = product.priceFormatted;
    document.getElementById('modalInstallments').textContent = product.installments;
    document.getElementById('modalDesc').textContent = product.description;
    document.getElementById('modalFabricDetail').textContent = product.fabric;
    document.getElementById('modalSeriesTag').textContent = product.badge;
    document.getElementById('modalRefCode').textContent = product.refCode;

    const mainImg = document.getElementById('modalMainImg');
    mainImg.src = product.images[0];
    mainImg.alt = product.title;

    const thumbsContainer = document.getElementById('modalThumbs');
    thumbsContainer.innerHTML = '';
    product.images.forEach((imgSrc, idx) => {
      const thumb = document.createElement('div');
      thumb.className = `modal-thumb ${idx === 0 ? 'active' : ''}`;
      thumb.innerHTML = `<img src="${imgSrc}" alt="${product.title} ângulo ${idx + 1}">`;
      thumb.addEventListener('click', () => {
        thumbsContainer.querySelectorAll('.modal-thumb').forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = imgSrc;
      });
      thumbsContainer.appendChild(thumb);
    });

    const sizeBtns = document.querySelectorAll('#modalSizeButtons .size-btn');
    sizeBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-size') === '38');
    });

    quickViewModal.classList.add('open');
    quickViewModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuickView() {
    if (quickViewModal) {
      quickViewModal.classList.remove('open');
      quickViewModal.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      currentModalProductId = null;
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeQuickView);
  if (modalBackdrop) modalBackdrop.addEventListener('click', closeQuickView);

  const modalSizesContainer = document.getElementById('modalSizeButtons');
  if (modalSizesContainer) {
    modalSizesContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.size-btn');
      if (!btn) return;
      modalSizesContainer.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSelectedSize = btn.getAttribute('data-size');
    });
  }

  const modalAddToBagBtn = document.getElementById('modalAddToBagBtn');
  if (modalAddToBagBtn) {
    modalAddToBagBtn.addEventListener('click', () => {
      if (!currentModalProductId) return;
      const product = PRODUCTS_DATABASE[currentModalProductId];
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        size: currentSelectedSize,
        image: product.images[0]
      });
      closeQuickView();
    });
  }

  document.addEventListener('click', (e) => {
    const quickViewTrigger = e.target.closest('.quick-view-btn');
    if (quickViewTrigger) {
      const prodId = quickViewTrigger.getAttribute('data-product-id');
      openQuickView(prodId);
      return;
    }

    const quickAddTrigger = e.target.closest('.quick-add-btn');
    if (quickAddTrigger) {
      const prodId = quickAddTrigger.getAttribute('data-product-id');
      const product = PRODUCTS_DATABASE[prodId];
      if (product) {
        addToCart({
          id: product.id,
          title: product.title,
          price: product.price,
          size: '38',
          image: product.images[0]
        });
      }
      return;
    }

    const hotspotTrigger = e.target.closest('.lookbook-hotspot');
    if (hotspotTrigger) {
      openQuickView('reino-01');
      return;
    }
  });

  /* ==========================================================================
     05. Filtros de Categoria da Coleção
     ========================================================================== */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(20px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 300);
        }
      });
    });
  });

  /* ==========================================================================
     06. Seção 06: Lookbook Studio Interativo Reino
     ========================================================================== */
  const studioThumbBtns = document.querySelectorAll('.studio-thumbnails .thumb-btn');
  const studioActiveImage = document.getElementById('studioActiveImage');
  const studioBadge = document.getElementById('studioBadge');
  const studioCategory = document.getElementById('studioCategory');
  const studioTitle = document.getElementById('studioTitle');
  const studioPrice = document.getElementById('studioPrice');
  const studioDesc = document.getElementById('studioDesc');
  const studioSpecFabric = document.getElementById('studioSpecFabric');
  const studioSpecLining = document.getElementById('studioSpecLining');
  const studioAddToCartBtn = document.getElementById('studioAddToCartBtn');
  let currentStudioLook = '1';
  let currentStudioSize = '38';

  studioThumbBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      studioThumbBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const lookId = btn.getAttribute('data-look');
      const lookData = STUDIO_LOOKS[lookId];
      if (!lookData) return;

      currentStudioLook = lookId;

      if (studioActiveImage) {
        studioActiveImage.style.opacity = '0.3';
        setTimeout(() => {
          studioActiveImage.src = lookData.image;
          studioActiveImage.style.opacity = '1';
        }, 200);
      }

      if (studioBadge) studioBadge.textContent = lookData.badge;
      if (studioCategory) studioCategory.textContent = lookData.category;
      if (studioTitle) studioTitle.textContent = lookData.title;
      if (studioPrice) studioPrice.textContent = lookData.price;
      if (studioDesc) studioDesc.textContent = lookData.desc;
      if (studioSpecFabric) studioSpecFabric.textContent = lookData.fabric;
      if (studioSpecLining) studioSpecLining.textContent = lookData.lining;
    });
  });

  const studioSizePills = document.querySelectorAll('.studio-size-picker .size-pill');
  studioSizePills.forEach(pill => {
    pill.addEventListener('click', () => {
      studioSizePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentStudioSize = pill.getAttribute('data-size');
    });
  });

  if (studioAddToCartBtn) {
    studioAddToCartBtn.addEventListener('click', () => {
      const look = STUDIO_LOOKS[currentStudioLook];
      addToCart({
        id: `studio-look-${currentStudioLook}`,
        title: look.title,
        price: look.priceNum,
        size: currentStudioSize,
        image: look.image
      });
    });
  }

  /* ==========================================================================
     07. Sintetizador de Trilha Sonora Ambiente (Web Audio API)
     ========================================================================== */
  const soundToggleBtn = document.getElementById('soundToggleBtn');
  const soundStatusText = document.getElementById('soundStatusText');
  let audioCtx = null;
  let isSoundPlaying = false;
  let masterGain = null;
  let osc1 = null;
  let osc2 = null;
  let lfo = null;

  function initAmbientAudio() {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return false;

      audioCtx = new AudioContext();

      masterGain = audioCtx.createGain();
      masterGain.gain.setValueAtTime(0.001, audioCtx.currentTime);

      const filter = audioCtx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(400, audioCtx.currentTime);

      // Frequência harmônica acolhedora (D# 77.78 Hz & A# 116.54 Hz)
      osc1 = audioCtx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(77.78, audioCtx.currentTime);

      osc2 = audioCtx.createOscillator();
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(116.54, audioCtx.currentTime);

      lfo = audioCtx.createOscillator();
      lfo.frequency.setValueAtTime(0.1, audioCtx.currentTime);
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.setValueAtTime(0.03, audioCtx.currentTime);
      lfo.connect(lfoGain);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(masterGain);
      masterGain.connect(audioCtx.destination);

      osc1.start();
      osc2.start();
      lfo.start();

      return true;
    } catch (e) {
      console.warn('Web Audio API não inicializada:', e);
      return false;
    }
  }

  function toggleSound() {
    if (!audioCtx) {
      const ok = initAmbientAudio();
      if (!ok) return;
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isSoundPlaying) {
      masterGain.gain.exponentialRampToValueAtTime(0.08, audioCtx.currentTime + 1.5);
      isSoundPlaying = true;
      soundToggleBtn.classList.add('playing');
      if (soundStatusText) soundStatusText.textContent = 'ON';
      showToast('Atmosfera Real Ativada', 'Trilha sonora ambiente inspirada no atelier REINO.', '👑');
    } else {
      masterGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 1.0);
      isSoundPlaying = false;
      soundToggleBtn.classList.remove('playing');
      if (soundStatusText) soundStatusText.textContent = 'OFF';
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener('click', toggleSound);
  }

  /* ==========================================================================
     08. Modal de Vídeo da Campanha (Filme 35mm)
     ========================================================================== */
  const videoModal = document.getElementById('videoModal');
  const videoModalBackdrop = document.getElementById('videoModalBackdrop');
  const videoModalClose = document.getElementById('videoModalClose');
  const campaignVideoTrigger = document.getElementById('campaignVideoTrigger');
  const campaignVideoPlayer = document.getElementById('campaignVideoPlayer');

  function openVideoModal() {
    if (!videoModal) return;
    videoModal.classList.add('open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (campaignVideoPlayer) {
      campaignVideoPlayer.play().catch(() => {});
    }
  }

  function closeVideoModal() {
    if (!videoModal) return;
    videoModal.classList.remove('open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (campaignVideoPlayer) {
      campaignVideoPlayer.pause();
    }
  }

  if (campaignVideoTrigger) campaignVideoTrigger.addEventListener('click', openVideoModal);
  if (videoModalClose) videoModalClose.addEventListener('click', closeVideoModal);
  if (videoModalBackdrop) videoModalBackdrop.addEventListener('click', closeVideoModal);

  /* ==========================================================================
     09. Formulário do Círculo Real Privado
     ========================================================================== */
  const cercleForm = document.getElementById('cercleForm');
  const cercleEmail = document.getElementById('cercleEmail');
  const formFeedback = document.getElementById('formFeedback');

  if (cercleForm) {
    cercleForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = (cercleEmail.value || '').trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        if (formFeedback) {
          formFeedback.textContent = 'Por favor, insira um endereço de e-mail corporativo ou pessoal válido.';
          formFeedback.className = 'form-feedback error';
        }
        return;
      }

      const submitBtn = document.getElementById('cercleSubmitBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>PROCESSANDO ADMISSÃO...</span>';
      }

      setTimeout(() => {
        if (formFeedback) {
          formFeedback.textContent = 'Solicitação recebida com sucesso. O comitê privativo do REINO entrará em contato.';
          formFeedback.className = 'form-feedback success';
        }
        cercleEmail.value = '';
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>ADMISSÃO CONFIRMADA ✓</span>';
        }
        showToast('Círculo Real REINO', 'Seu convite para a lista seleta de desfiles da Maison foi reservado.', '👑');
      }, 1200);
    });
  }

  /* ==========================================================================
     10. Menu Mobile Drawer
     ========================================================================== */
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileCloseBtn = document.getElementById('mobileCloseBtn');
  const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openMobileNav() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.add('open');
      mobileNavDrawer.setAttribute('aria-hidden', 'false');
      menuToggleBtn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeMobileNav() {
    if (mobileNavDrawer) {
      mobileNavDrawer.classList.remove('open');
      mobileNavDrawer.setAttribute('aria-hidden', 'true');
      menuToggleBtn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
  }

  if (menuToggleBtn) menuToggleBtn.addEventListener('click', openMobileNav);
  if (mobileCloseBtn) mobileCloseBtn.addEventListener('click', closeMobileNav);
  if (mobileNavBackdrop) mobileNavBackdrop.addEventListener('click', closeMobileNav);
  mobileNavLinks.forEach(link => link.addEventListener('click', closeMobileNav));

  /* ==========================================================================
     11. Scroll Progress Bar & Header Glassmorphism Scroll State
     ========================================================================== */
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const mainHeader = document.getElementById('mainHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    if (scrollProgressBar) {
      scrollProgressBar.style.width = `${scrollPercent}%`;
    }

    if (mainHeader) {
      if (scrollTop > 60) {
        mainHeader.classList.add('scrolled');
      } else {
        mainHeader.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ==========================================================================
     12. Intersection Observer para Revelações Esculturais
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal-slide-up, .reveal-fade');

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -80px 0px',
      threshold: 0.12
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }

  /* ==========================================================================
     13. Sistema de Notificações Toast de Alto Padrão
     ========================================================================== */
  function showToast(title, message, icon = '👑') {
    const center = document.getElementById('toastCenter');
    if (!center) return;

    const toast = document.createElement('div');
    toast.className = 'toast-item';
    toast.innerHTML = `
      <span class="toast-icon">${icon}</span>
      <div class="toast-body">
        <div class="toast-title">${title}</div>
        <div class="toast-msg">${message}</div>
      </div>
    `;

    center.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('hide');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  }

  /* ==========================================================================
     14. Acessibilidade pelo Teclado (Tecla Escape)
     ========================================================================== */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCartDrawer();
      closeQuickView();
      closeVideoModal();
      closeMobileNav();
    }
  });

  // Inicialização da interface
  updateCartUI();
});
