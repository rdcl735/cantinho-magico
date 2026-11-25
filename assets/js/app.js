/**
 * ==========================================================================
 * CANTINHO MÁGICO — VITRINE, CATÁLOGO & ENCOMENDAS PERSONALIZADAS
 * Arquitetura Front-end Minimalista (Página Principal + Catálogo Completo)
 * ==========================================================================
 */

const APP_CONFIG = {
  startingPrice: 39.99,
  startingPriceFormatted: 'R$ 39,99',
  startingPriceLabel: 'A partir de R$ 39,99',
  soldOutBadgeText: 'Vendido',
  featuredLimit: 6,
  whatsappNumber: '5511999998888',
  draftStorageKey: 'cantinho_magico_custom_order_draft'
};

const AppState = {
  activeCategory: 'all',
  searchQuery: '',
  sortBy: 'featured',
  currentModalProduct: null,
  selectedReferenceProduct: null,
  selectedReferenceFiles: [],
  orderDraft: {
    clientName: '',
    clientWhatsapp: '',
    characterName: '',
    size: 'Médio (20 a 24 cm)',
    colors: '',
    clothesAccessories: '',
    physicalDetails: '',
    quantity: '1',
    desiredDate: '',
    notes: '',
    referenceProductId: null
  }
};

// Acervo de Criações (Portfólio de Referência)
const PRODUCTS = [
  {
    id: 'guardiao-mistico',
    name: 'Guardião Orion & Gato Negro',
    category: 'guardioes',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/359e53f0-106c-46cb-9622-053ae16f8b1a.png',
    gallery: [
      { url: './assets/images/359e53f0-106c-46cb-9622-053ae16f8b1a.png', label: 'Corpo inteiro' },
      { url: './assets/images/4ffd5570-7b7e-42ff-b6d2-63f2b3e8e9f2.png', label: 'Detalhe aproximado' }
    ],
    shortDesc: 'Olhos em duas cores (azul e âmbar), chapéu verde com fitas e pequeno gato negro modelado à mão.',
    fullLore: 'Figura modelada sem moldes, com destaque para a pintura de sardas, expressão serena e o pequeno gato negro acomodado no braço direito.',
    materials: 'Porcelana fria (biscuit), olhos de vidro em duas cores, feltro verde, fitas de cetim e esfera de quartzo.',
    dimensions: 'Altura ref.: 23 cm | Largura ref.: 14 cm',
    careTips: 'Manter em local interno e seco. Limpar apenas com pincel de cerdas macias.'
  },
  {
    id: 'gnomo-prosperidade',
    name: 'Gnomo Théo do Bosque Dourado',
    category: 'gnomos',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/ed84b711-0f94-4c09-b74c-4cafae94566a.png',
    gallery: [
      { url: './assets/images/ed84b711-0f94-4c09-b74c-4cafae94566a.png', label: 'Corpo inteiro' },
      { url: './assets/images/7939251c-d5bd-48c6-b107-d5082255625d.png', label: 'Detalhe do rosto' }
    ],
    shortDesc: 'Barba ruiva trançada, chapéu pontudo com medalhão dourado e pote com pedras naturais.',
    fullLore: 'Inspirado nos personagens clássicos da floresta, combina vestes em tons terrosos e verde-folha com tranças longas e medalhão metálico no chapéu.',
    materials: 'Porcelana fria (biscuit), feltro estruturado, lã ruiva, medalhão metálico e pedras polidas.',
    dimensions: 'Altura ref.: 22 cm | Largura ref.: 14 cm',
    careTips: 'Proteger da luz solar direta e da umidade. Remover o pó a seco.'
  },
  {
    id: 'bruxa-corvo-ravena',
    name: 'Bruxa Anciã Ravena & Corvo',
    category: 'bruxinhas',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/1c6e3690-9bd2-4fb2-b09d-bccc1076f317.png',
    gallery: [
      { url: './assets/images/1c6e3690-9bd2-4fb2-b09d-bccc1076f317.png', label: 'Sentada' },
      { url: './assets/images/6307e301-50ec-4b9d-b13a-31b90eed6374.png', label: 'Em pé' },
      { url: './assets/images/f9ad09bb-04ac-44c1-9a6d-d97c1aad85ab.png', label: 'Detalhe do rosto e corvo' }
    ],
    shortDesc: 'Vestido negro com pontos dourados, punhos em renda, chapéu florido e corvo pousado na mão.',
    fullLore: 'Escultura rica em expressão facial, acompanhada de tranças longas, medalhão na cintura e pequeno corvo modelado individualmente.',
    materials: 'Porcelana fria (biscuit), tecido com fios dourados, renda, feltro e flores decorativas.',
    dimensions: 'Altura ref.: 25 cm | Largura ref.: 15 cm',
    careTips: 'Conservar em ambiente interno. Limpeza suave somente com pincel seco.'
  },
  {
    id: 'duende-amor',
    name: 'Duende Léo do Coração',
    category: 'duendes',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/26fb85e3-d7bb-4ecc-9952-041d854e6d64.png',
    gallery: [
      { url: './assets/images/26fb85e3-d7bb-4ecc-9952-041d854e6d64.png', label: 'Corpo inteiro' },
      { url: './assets/images/1f7bd917-6e10-491e-9c70-057c1d147665.png', label: 'Detalhe aproximado' }
    ],
    shortDesc: 'Duende sentado com traje colorido em feltro e grande coração vermelho nos braços.',
    fullLore: 'Composição pensada para presentear e decorar ambientes internos, destacando o contraste das cores quentes com a expressão acolhedora do rosto.',
    materials: 'Porcelana fria (biscuit), barba sintética macia, vestes e coração confeccionados em feltro.',
    dimensions: 'Altura ref.: 19 cm | Largura ref.: 13 cm',
    careTips: 'Evitar contato com água ou líquidos. Limpar delicadamente com espanador seco.'
  },
  {
    id: 'bruxinha-protecao',
    name: 'Bruxinha Morgana da Vassoura',
    category: 'bruxinhas',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/c5161866-7bcf-4465-b57a-6ef808127776.png',
    gallery: [
      { url: './assets/images/c5161866-7bcf-4465-b57a-6ef808127776.png', label: 'Corpo inteiro' }
    ],
    shortDesc: 'Chapéu lilás com pequeno gato, cabelos brancos em lã, saia rendada e vassoura trançada.',
    fullLore: 'Reúne costura detalhada e modelagem manual, incluindo cabo de vassoura ornamentado e pingente aramado dourado no colar.',
    materials: 'Porcelana fria (biscuit), feltro, lã branca, renda de algodão, arame dourado e madeira.',
    dimensions: 'Altura ref.: 24 cm | Largura ref.: 15 cm',
    careTips: 'Manter longe de umidade. Utilizar pincel macio para retirar poeira.'
  },
  {
    id: 'fada-elemental',
    name: 'Flora da Primavera',
    category: 'duendes',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/c87d05a3-803b-4d05-b452-9d28e08daea4.png',
    gallery: [
      { url: './assets/images/c87d05a3-803b-4d05-b452-9d28e08daea4.png', label: 'Corpo inteiro' }
    ],
    shortDesc: 'Traje com aplicações florais, chapéu com laço e pérolas, cajado florido e pequena joaninha.',
    fullLore: 'Inspirada nos jardins floridos, combina paleta suave com aplicações de flores, borboleta na cintura e galho natural.',
    materials: 'Porcelana fria (biscuit), feltro, fita acetinada, meia-pérola, flores permanentes e galho seco.',
    dimensions: 'Altura ref.: 21 cm | Largura ref.: 13 cm',
    careTips: 'Ideal para estantes e nichos internos. Limpar apenas a seco.'
  },
  {
    id: 'mago-anciao-balthazar',
    name: 'Mago Balthazar do Cajado',
    category: 'gnomos',
    startingPrice: APP_CONFIG.startingPrice,
    soldOut: true,
    image: './assets/images/942a7957-2909-49b7-8da9-cf841c23c5de.png',
    gallery: [
      { url: './assets/images/942a7957-2909-49b7-8da9-cf841c23c5de.png', label: 'Retrato com cajado' }
    ],
    shortDesc: 'Ancião de barba grisalha, chapéu pontudo negro, túnica azul e cajado espiral preto e dourado.',
    fullLore: 'Destaca o estudo de feições marcantes em porcelana fria, acompanhado de um cajado escultural retorcido pintado em ouro envelhecido.',
    materials: 'Porcelana fria (biscuit), fibra grisalha texturizada, feltro e pintura metálica.',
    dimensions: 'Altura ref.: 24 cm | Largura ref.: 15 cm',
    careTips: 'Conservar em local seco, longe do sol direto. Limpeza com pincel macio.'
  }
];

// ==========================================
// INICIALIZAÇÃO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  syncCentralizedPricingInDOM();
  loadOrderDraftFromStorage();
  renderShowcase();
  renderProducts();
  setupEventListeners();
});

function syncCentralizedPricingInDOM() {
  document.querySelectorAll('.starting-price-text').forEach(el => {
    el.textContent = APP_CONFIG.startingPriceFormatted;
  });
  document.querySelectorAll('.starting-price-label').forEach(el => {
    el.textContent = APP_CONFIG.startingPriceLabel;
  });
}

// ==========================================
// PERSISTÊNCIA DO RASCUNHO DE ENCOMENDA
// ==========================================
function loadOrderDraftFromStorage() {
  try {
    const saved = localStorage.getItem(APP_CONFIG.draftStorageKey);
    if (saved) {
      const parsed = JSON.parse(saved);
      AppState.orderDraft = { ...AppState.orderDraft, ...parsed };
      populateFormFromDraft();
    }
  } catch (e) {}
}

function saveOrderDraftToStorage() {
  try {
    localStorage.setItem(APP_CONFIG.draftStorageKey, JSON.stringify(AppState.orderDraft));
  } catch (e) {}
}

function populateFormFromDraft() {
  const form = document.getElementById('customOrderForm');
  if (!form) return;

  const fieldsMap = {
    orderClientName: 'clientName',
    orderClientWhatsapp: 'clientWhatsapp',
    orderCharacterName: 'characterName',
    orderSize: 'size',
    orderColors: 'colors',
    orderClothesAccessories: 'clothesAccessories',
    orderPhysicalDetails: 'physicalDetails',
    orderQuantity: 'quantity',
    orderDesiredDate: 'desiredDate',
    orderNotes: 'notes'
  };

  Object.entries(fieldsMap).forEach(([inputId, draftKey]) => {
    const input = document.getElementById(inputId);
    if (input && AppState.orderDraft[draftKey] !== undefined && AppState.orderDraft[draftKey] !== '') {
      input.value = AppState.orderDraft[draftKey];
    }
  });

  if (AppState.orderDraft.referenceProductId) {
    const refProd = PRODUCTS.find(p => p.id === AppState.orderDraft.referenceProductId);
    if (refProd) {
      AppState.selectedReferenceProduct = refProd;
      updateReferenceProductCardUI(refProd);
    }
  }
}

function syncDraftFromFormInputs() {
  const form = document.getElementById('customOrderForm');
  if (!form) return;

  const getVal = (id) => {
    const el = document.getElementById(id);
    return el ? el.value : '';
  };

  AppState.orderDraft = {
    ...AppState.orderDraft,
    clientName: getVal('orderClientName'),
    clientWhatsapp: getVal('orderClientWhatsapp'),
    characterName: getVal('orderCharacterName'),
    size: getVal('orderSize'),
    colors: getVal('orderColors'),
    clothesAccessories: getVal('orderClothesAccessories'),
    physicalDetails: getVal('orderPhysicalDetails'),
    quantity: getVal('orderQuantity') || '1',
    desiredDate: getVal('orderDesiredDate'),
    notes: getVal('orderNotes'),
    referenceProductId: AppState.selectedReferenceProduct ? AppState.selectedReferenceProduct.id : null
  };

  saveOrderDraftToStorage();
}

// ==========================================
// EVENT LISTENERS
// ==========================================
function setupEventListeners() {
  // Filtros de categoria (página de catálogo completo)
  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      categoryButtons.forEach(b => {
        b.classList.remove('bg-forest', 'text-ivory', 'shadow-sm');
        b.classList.add('bg-ivory', 'text-bark', 'border', 'border-sand');
      });
      btn.classList.add('bg-forest', 'text-ivory', 'shadow-sm');
      btn.classList.remove('bg-ivory', 'text-bark', 'border', 'border-sand');
      
      AppState.activeCategory = btn.dataset.category;
      renderProducts();
    });
  });

  // Busca no catálogo completo
  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.searchQuery = e.target.value.toLowerCase().trim();
      renderProducts();
    });
  }

  // Ordenação no catálogo completo
  const sortSelect = document.getElementById('productSortSelect');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      AppState.sortBy = e.target.value;
      renderProducts();
    });
  }

  // Máscara de WhatsApp
  const whatsappInput = document.getElementById('orderClientWhatsapp');
  if (whatsappInput) {
    whatsappInput.addEventListener('input', (e) => {
      let v = e.target.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6) {
        v = v.replace(/^(\d{2})(\d{4,5})(\d{0,4}).*/, '($1) $2-$3');
      } else if (v.length > 2) {
        v = v.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
      } else if (v.length > 0) {
        v = v.replace(/^(\d*)/, '($1');
      }
      e.target.value = v;
    });
  }

  // Formulário de encomenda
  const customOrderForm = document.getElementById('customOrderForm');
  if (customOrderForm) {
    const formControls = customOrderForm.querySelectorAll('input, select, textarea');
    formControls.forEach(control => {
      control.addEventListener('input', () => {
        clearFieldError(control);
        syncDraftFromFormInputs();
      });
      control.addEventListener('change', () => {
        clearFieldError(control);
        syncDraftFromFormInputs();
      });
    });

    customOrderForm.addEventListener('submit', handleCustomOrderSubmit);
  }

  // Upload de imagens de referência
  const refImagesInput = document.getElementById('orderReferenceImages');
  if (refImagesInput) {
    refImagesInput.addEventListener('change', handleReferenceImagesChange);
  }

  // Data mínima = hoje
  const desiredDateInput = document.getElementById('orderDesiredDate');
  if (desiredDateInput) {
    const todayStr = new Date().toISOString().split('T')[0];
    desiredDateInput.setAttribute('min', todayStr);
  }

  // Menu mobile compacto
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');
  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }
  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
      if (mobileMenuDrawer) mobileMenuDrawer.classList.add('hidden');
    });
  });

  // Fechamento de modais
  document.querySelectorAll('.close-modal-btn').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
  });

  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeAllModals();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

function closeAllModals() {
  syncDraftFromFormInputs();
  document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.classList.remove('active');
  });
}

// ==========================================
// COMPONENTE DE CARD MINIMALISTA (REUTILIZADO NA VITRINE E NO CATÁLOGO)
// ==========================================
function buildProductCardHTML(product) {
  return `
    <article class="product-card artisan-card group rounded-2xl flex flex-col overflow-hidden">
      <div 
        class="relative w-full aspect-square overflow-hidden bg-cream cursor-pointer" 
        onclick="openProductModal('${product.id}')"
      >
        <img 
          src="${product.image}" 
          alt="${product.name}" 
          class="w-full h-full object-cover card-img-zoom"
          loading="lazy"
        />

        <span class="sold-badge absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-semibold z-10">
          ${APP_CONFIG.soldOutBadgeText}
        </span>

        ${product.gallery && product.gallery.length > 1 ? `
          <span class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded-md text-[10px] font-medium bg-bark/70 text-ivory backdrop-blur-sm">
            ${product.gallery.length} fotos
          </span>
        ` : ''}
      </div>

      <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 
            onclick="openProductModal('${product.id}')"
            class="font-playfair text-base sm:text-lg font-bold text-bark group-hover:text-forest transition-colors line-clamp-1 cursor-pointer"
          >
            ${product.name}
          </h3>
          <p class="text-xs font-semibold text-bark-muted mt-1">
            ${APP_CONFIG.startingPriceLabel}
          </p>
        </div>

        <button 
          type="button"
          onclick="openCustomOrderModal('${product.id}')" 
          class="w-full py-2.5 px-4 rounded-xl bg-forest hover:bg-forest-800 text-ivory font-semibold text-xs transition-colors text-center"
        >
          Encomendar um semelhante
        </button>
      </div>
    </article>
  `;
}

// Renderiza seleção de 6 peças na Vitrine da Página Principal (index.html)
function renderShowcase() {
  const showcaseContainer = document.getElementById('featuredProductsGrid');
  if (!showcaseContainer) return;

  const featuredSelection = PRODUCTS.slice(0, APP_CONFIG.featuredLimit);
  showcaseContainer.innerHTML = featuredSelection.map(buildProductCardHTML).join('');
}

// Renderiza o Catálogo Completo na Página Secundária (catalogo.html)
function renderProducts() {
  const container = document.getElementById('productsGrid');
  if (!container) return;

  let filtered = PRODUCTS.filter(p => {
    const matchCategory = AppState.activeCategory === 'all' || p.category === AppState.activeCategory;
    const matchSearch = AppState.searchQuery === '' || 
      p.name.toLowerCase().includes(AppState.searchQuery) ||
      p.shortDesc.toLowerCase().includes(AppState.searchQuery);
    return matchCategory && matchSearch;
  });

  if (AppState.sortBy === 'name') {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  const countBadge = document.getElementById('productResultsCount');
  if (countBadge) {
    countBadge.innerText = `${filtered.length} ${filtered.length === 1 ? 'peça encontrada no acervo' : 'peças encontradas no acervo'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-14 text-center">
        <p class="font-playfair text-xl font-bold text-bark mb-2">Nenhuma peça encontrada</p>
        <p class="text-bark-muted text-xs sm:text-sm max-w-md mx-auto mb-5">Tente outro termo de busca ou solicite um personagem sob medida.</p>
        <div class="flex flex-wrap items-center justify-center gap-3">
          <button type="button" onclick="resetFilters()" class="px-5 py-2.5 rounded-full bg-ivory border border-sand text-bark font-semibold text-xs hover:bg-cream transition">
            Limpar filtros
          </button>
          <button type="button" onclick="openCustomOrderModal()" class="px-5 py-2.5 rounded-full bg-forest text-ivory font-semibold text-xs hover:bg-forest-800 transition">
            Solicitar encomenda
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(buildProductCardHTML).join('');
}

function resetFilters() {
  AppState.activeCategory = 'all';
  AppState.searchQuery = '';
  const searchInput = document.getElementById('productSearchInput');
  if (searchInput) searchInput.value = '';

  const categoryButtons = document.querySelectorAll('.category-filter-btn');
  categoryButtons.forEach(btn => {
    if (btn.dataset.category === 'all') {
      btn.classList.add('bg-forest', 'text-ivory', 'shadow-sm');
      btn.classList.remove('bg-ivory', 'text-bark', 'border', 'border-sand');
    } else {
      btn.classList.remove('bg-forest', 'text-ivory', 'shadow-sm');
      btn.classList.add('bg-ivory', 'text-bark', 'border', 'border-sand');
    }
  });

  renderProducts();
}

// ==========================================
// MODAL DE DETALHES DA PEÇA
// ==========================================
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  AppState.currentModalProduct = product;
  const modal = document.getElementById('productDetailModal');
  if (!modal) return;

  const imgEl = document.getElementById('modalProductImg');
  if (imgEl) {
    imgEl.src = product.image;
    imgEl.alt = product.name;
  }

  const thumbsContainer = document.getElementById('modalGalleryThumbs');
  if (thumbsContainer) {
    if (product.gallery && product.gallery.length > 1) {
      thumbsContainer.classList.remove('hidden');
      thumbsContainer.innerHTML = product.gallery.map((imgObj, idx) => `
        <button 
          type="button"
          onclick="selectModalGalleryImage('${imgObj.url}', this)"
          class="modal-thumb-btn flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden border-2 transition-all ${idx === 0 ? 'border-forest' : 'border-sand opacity-70 hover:opacity-100'}"
          title="${imgObj.label}"
        >
          <img src="${imgObj.url}" alt="${imgObj.label}" class="w-full h-full object-cover" />
        </button>
      `).join('');
    } else {
      thumbsContainer.classList.add('hidden');
      thumbsContainer.innerHTML = '';
    }
  }

  const setTxt = (id, val) => {
    const el = document.getElementById(id);
    if (el) el.innerText = val;
  };

  setTxt('modalProductName', product.name);
  setTxt('modalProductPrice', APP_CONFIG.startingPriceLabel);
  setTxt('modalProductLore', product.fullLore);
  setTxt('modalProductMaterials', product.materials);
  setTxt('modalProductDimensions', product.dimensions);
  setTxt('modalProductCare', product.careTips);

  const whatsappMsg = `Olá! Vi a peça *${product.name}* no acervo do Cantinho Mágico e gostaria de tirar uma dúvida.`;
  const directWhatsappBtn = document.getElementById('modalDirectWhatsappBtn');
  if (directWhatsappBtn) {
    directWhatsappBtn.href = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;
  }

  modal.classList.add('active');
}

function selectModalGalleryImage(imageUrl, btnElement) {
  const mainImg = document.getElementById('modalProductImg');
  if (mainImg) mainImg.src = imageUrl;

  document.querySelectorAll('.modal-thumb-btn').forEach(btn => {
    btn.classList.remove('border-forest');
    btn.classList.add('border-sand', 'opacity-70');
  });
  if (btnElement) {
    btnElement.classList.remove('border-sand', 'opacity-70');
    btnElement.classList.add('border-forest');
  }
}

function openCustomOrderFromModalProduct() {
  const product = AppState.currentModalProduct;
  const detailModal = document.getElementById('productDetailModal');
  if (detailModal) detailModal.classList.remove('active');
  openCustomOrderModal(product ? product.id : null);
}

// Bloqueia compra direta de peças vendidas
function addToCart(productId) {
  openCustomOrderModal(productId);
}

// ==========================================
// MODAL DE ENCOMENDA PERSONALIZADA & WHATSAPP
// ==========================================
function openCustomOrderModal(productId = null) {
  const modal = document.getElementById('customOrderModal');
  if (!modal) return;

  populateFormFromDraft();

  if (productId) {
    const refProduct = PRODUCTS.find(p => p.id === productId);
    if (refProduct) {
      AppState.selectedReferenceProduct = refProduct;
      const charInput = document.getElementById('orderCharacterName');
      if (charInput) {
        charInput.value = `Semelhante a: ${refProduct.name}`;
        clearFieldError(charInput);
      }
      updateReferenceProductCardUI(refProduct);
      syncDraftFromFormInputs();
    }
  } else if (AppState.selectedReferenceProduct) {
    updateReferenceProductCardUI(AppState.selectedReferenceProduct);
  } else {
    updateReferenceProductCardUI(null);
  }

  const errorBanner = document.getElementById('orderFormErrorBanner');
  if (errorBanner) errorBanner.classList.add('hidden');

  modal.classList.add('active');

  setTimeout(() => {
    const nameInput = document.getElementById('orderClientName');
    const charInput = document.getElementById('orderCharacterName');
    if (nameInput && !nameInput.value.trim()) {
      nameInput.focus();
    } else if (charInput) {
      charInput.focus();
    }
  }, 100);
}

function updateReferenceProductCardUI(product) {
  const card = document.getElementById('orderReferenceCard');
  const img = document.getElementById('orderReferenceImg');
  const title = document.getElementById('orderReferenceTitle');
  if (!card || !img || !title) return;

  if (product) {
    img.src = product.image;
    img.alt = product.name;
    title.textContent = product.name;
    card.classList.remove('hidden');
  } else {
    card.classList.add('hidden');
  }
}

function clearOrderReferenceProduct() {
  AppState.selectedReferenceProduct = null;
  updateReferenceProductCardUI(null);
  const charInput = document.getElementById('orderCharacterName');
  if (charInput && charInput.value.startsWith('Semelhante a:')) {
    charInput.value = '';
    charInput.focus();
  }
  syncDraftFromFormInputs();
}

function handleReferenceImagesChange(e) {
  const files = Array.from(e.target.files || []);
  AppState.selectedReferenceFiles = files.filter(f => f.type.startsWith('image/'));
  renderReferenceImagesPreview();
}

function removeReferenceImageAt(index) {
  AppState.selectedReferenceFiles.splice(index, 1);
  if (AppState.selectedReferenceFiles.length === 0) {
    const input = document.getElementById('orderReferenceImages');
    if (input) input.value = '';
  }
  renderReferenceImagesPreview();
}

function renderReferenceImagesPreview() {
  const container = document.getElementById('orderImagesPreviewContainer');
  const list = document.getElementById('orderImagesPreviewList');
  if (!container || !list) return;

  if (AppState.selectedReferenceFiles.length === 0) {
    container.classList.add('hidden');
    list.innerHTML = '';
    return;
  }

  container.classList.remove('hidden');
  list.innerHTML = AppState.selectedReferenceFiles.map((file, idx) => {
    const objectUrl = URL.createObjectURL(file);
    return `
      <div class="flex items-center gap-2 bg-ivory px-2.5 py-1 rounded-lg border border-sand text-xs">
        <img src="${objectUrl}" alt="${file.name}" class="w-8 h-8 rounded object-cover border border-sand" />
        <span class="max-w-[130px] truncate text-bark font-medium">${file.name}</span>
        <button 
          type="button" 
          onclick="removeReferenceImageAt(${idx})" 
          class="text-bark-light hover:text-bark p-0.5"
          aria-label="Remover imagem ${file.name}"
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
    `;
  }).join('');
}

// ==========================================
// VALIDAÇÃO & ENVIO PARA O WHATSAPP
// ==========================================
function setFieldError(inputEl, message) {
  if (!inputEl) return;
  inputEl.classList.add('border-[#B85D5D]', 'bg-[#FDF2F2]');
  inputEl.classList.remove('border-sand');
  inputEl.setAttribute('aria-invalid', 'true');
  const errEl = inputEl.parentElement.querySelector('.field-error-msg');
  if (errEl) {
    if (message) errEl.textContent = message;
    errEl.classList.remove('hidden');
  }
}

function clearFieldError(inputEl) {
  if (!inputEl) return;
  inputEl.classList.remove('border-[#B85D5D]', 'bg-[#FDF2F2]');
  inputEl.classList.add('border-sand');
  inputEl.removeAttribute('aria-invalid');
  const errEl = inputEl.parentElement.querySelector('.field-error-msg');
  if (errEl) errEl.classList.add('hidden');
}

function validateCustomOrderForm() {
  let isValid = true;
  let firstInvalidEl = null;

  const markInvalid = (el, msg) => {
    setFieldError(el, msg);
    if (!firstInvalidEl) firstInvalidEl = el;
    isValid = false;
  };

  const clientNameEl = document.getElementById('orderClientName');
  if (!clientNameEl || clientNameEl.value.trim().length < 2) {
    markInvalid(clientNameEl, 'Informe seu nome.');
  }

  const whatsappEl = document.getElementById('orderClientWhatsapp');
  const rawPhone = whatsappEl ? whatsappEl.value.replace(/\D/g, '') : '';
  if (!whatsappEl || rawPhone.length < 10) {
    markInvalid(whatsappEl, 'Informe um WhatsApp válido com DDD.');
  }

  const charNameEl = document.getElementById('orderCharacterName');
  if (!charNameEl || charNameEl.value.trim().length < 2) {
    markInvalid(charNameEl, 'Informe o personagem ou modelo desejado.');
  }

  const sizeEl = document.getElementById('orderSize');
  if (!sizeEl || !sizeEl.value.trim()) {
    markInvalid(sizeEl, 'Selecione o tamanho aproximado.');
  }

  const colorsEl = document.getElementById('orderColors');
  if (!colorsEl || colorsEl.value.trim().length < 2) {
    markInvalid(colorsEl, 'Informe as cores predominantes.');
  }

  const clothesEl = document.getElementById('orderClothesAccessories');
  if (!clothesEl || clothesEl.value.trim().length < 2) {
    markInvalid(clothesEl, 'Informe roupas e acessórios.');
  }

  const detailsEl = document.getElementById('orderPhysicalDetails');
  if (!detailsEl || detailsEl.value.trim().length < 3) {
    markInvalid(detailsEl, 'Descreva as características da peça.');
  }

  const qtyEl = document.getElementById('orderQuantity');
  const qtyVal = qtyEl ? parseInt(qtyEl.value, 10) : 0;
  if (!qtyEl || isNaN(qtyVal) || qtyVal < 1) {
    markInvalid(qtyEl, 'Informe uma quantidade válida (mín. 1).');
  }

  const errorBanner = document.getElementById('orderFormErrorBanner');
  if (!isValid) {
    if (errorBanner) errorBanner.classList.remove('hidden');
    if (firstInvalidEl) firstInvalidEl.focus();
  } else if (errorBanner) {
    errorBanner.classList.add('hidden');
  }

  return isValid;
}

function formatDateBR(isoDate) {
  if (!isoDate) return 'Sem data específica';
  const parts = isoDate.split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function handleCustomOrderSubmit(e) {
  e.preventDefault();

  if (!validateCustomOrderForm()) {
    showToast('Verifique os campos obrigatórios destacados.');
    return;
  }

  syncDraftFromFormInputs();
  const d = AppState.orderDraft;

  let msg = `*SOLICITAÇÃO DE ORÇAMENTO — CANTINHO MÁGICO*\n\n`;
  msg += `Olá! Gostaria de solicitar um orçamento de encomenda com os seguintes detalhes:\n\n`;

  msg += `*Cliente:* ${d.clientName.trim()}\n`;
  msg += `*WhatsApp:* ${d.clientWhatsapp.trim()}\n\n`;

  msg += `*Especificações da Peça*\n`;
  msg += `• *Personagem / Modelo:* ${d.characterName.trim()}\n`;
  if (AppState.selectedReferenceProduct) {
    msg += `• *Referência do portfólio:* ${AppState.selectedReferenceProduct.name}\n`;
  }
  msg += `• *Tamanho aproximado:* ${d.size}\n`;
  msg += `• *Cores predominantes:* ${d.colors.trim()}\n`;
  msg += `• *Roupas e acessórios:* ${d.clothesAccessories.trim()}\n`;
  msg += `• *Características e detalhes:* ${d.physicalDetails.trim()}\n`;
  msg += `• *Quantidade:* ${d.quantity} ${parseInt(d.quantity, 10) === 1 ? 'unidade' : 'unidades'}\n`;
  msg += `• *Data desejada:* ${formatDateBR(d.desiredDate)}\n`;

  if (d.notes && d.notes.trim()) {
    msg += `• *Observações:* ${d.notes.trim()}\n`;
  }

  if (AppState.selectedReferenceFiles && AppState.selectedReferenceFiles.length > 0) {
    const fileNames = AppState.selectedReferenceFiles.map(f => f.name).join(', ');
    msg += `\n*Imagens de referência (${AppState.selectedReferenceFiles.length}):* enviarei os arquivos (${fileNames}) em seguida aqui na conversa.\n`;
  }

  msg += `\n_Ciente de que os valores começam em ${APP_CONFIG.startingPriceFormatted}, aguardo a análise para orçamento e prazo de produção._`;

  const whatsappUrl = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(msg)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

  if (AppState.selectedReferenceFiles && AppState.selectedReferenceFiles.length > 0) {
    showToast('Solicitação aberta no WhatsApp. Anexe suas imagens na conversa.');
  } else {
    showToast('Solicitação gerada! Continue o atendimento no WhatsApp.');
  }
}

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-item bg-forest text-ivory border border-gold/35 px-4 py-3 rounded-xl shadow-lg flex items-center gap-2.5 max-w-sm mb-2.5';
  toast.innerHTML = `
    <i class="fa-solid fa-seedling text-gold text-xs"></i>
    <p class="text-xs font-medium leading-snug flex-1">${message}</p>
    <button type="button" onclick="this.parentElement.remove()" class="text-cream/60 hover:text-ivory text-xs" aria-label="Fechar">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation = 'toastSlideOut 0.25s forwards';
    setTimeout(() => toast.remove(), 250);
  }, 4000);
}
