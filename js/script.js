/* Edite identidade e catálogo aqui. Preços em CENTAVOS: 2990 = R$ 29,90. */
window.BRASA_DATA = {
  brand: {
    name: "FAGULHA",
    tagline: "Fogo alto. Sabor sem limites.",
    colors: {
      background: "#0D0D0F",
      surface: "#242428",
      accent: "#FF7A00",
      text: "#F6F1E8",
    },
    // Obrigatório para ativar WhatsApp. Só dígitos: país + DDD + número real.
    whatsapp: "",
    address: "Rua Exemplo, 47 · Bairro Modelo",
    city: "Cidade demonstrativa · Brasil",
    hours: [
      "Terça a quinta · 18h às 23h",
      "Sexta e sábado · 18h à 0h",
      "Domingo · 18h às 22h",
      "Segunda · fechado",
    ],
    instagram: "",
    instagramLabel: "@fagulhaburger · perfil ilustrativo",
    heroImage: "assets/burger-hero-cutout.webp",
    story:
      "Na história que imaginamos para a FAGULHA, tudo começa com uma chapa quente, amigos em volta da mesa e uma vontade: fazer um hambúrguer que dê vontade de voltar. Pão macio, combinações generosas e personalidade em cada mordida.",
  },
  categories: [
    { id: "burgers", name: "Hambúrgueres", symbol: "01" },
    { id: "combos", name: "Combos", symbol: "02" },
    { id: "sides", name: "Acompanhamentos", symbol: "03" },
    { id: "drinks", name: "Bebidas", symbol: "04" },
    { id: "desserts", name: "Sobremesas", symbol: "05" },
  ],
  extras: {
    bacon: { name: "Bacon extra", price: 500 },
    cheese: { name: "Queijo extra", price: 350 },
    egg: { name: "Ovo", price: 300 },
    sauce: { name: "Molho da casa", price: 250 },
  },
  products: [
    {
      id: "classic47",
      name: "Clássico Fagulha",
      category: "burgers",
      price: 2990,
      description:
        "O encontro que sempre dá certo. Suculento, fresco e no ponto.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
      ],
      removable: [
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
      ],
      extras: ["bacon", "cheese", "egg", "sauce"],
      image: "assets/classico-fagulha.webp",
      badge: "O ORIGINAL",
      featured: true,
    },
    {
      id: "doublefire",
      name: "Duplo Fogo",
      category: "burgers",
      price: 3990,
      description: "Dois blends, cheddar em dobro e uma fome à altura.",
      ingredients: [
        "Pão brioche",
        "Dois blends bovinos de 120 g",
        "Queijo cheddar",
        "Picles",
        "Cebola",
        "Molho da casa",
      ],
      removable: ["Queijo cheddar", "Picles", "Cebola", "Molho da casa"],
      extras: ["bacon", "cheese", "egg", "sauce"],
      image: "assets/burger-double.webp",
      badge: "DOSE DUPLA",
      featured: true,
    },
    {
      id: "smokebacon",
      name: "Bacon na Brasa",
      category: "burgers",
      price: 3590,
      description:
        "Bacon crocante, cebola caramelizada e aquele toque de barbecue.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Bacon",
        "Queijo cheddar",
        "Cebola caramelizada",
        "Barbecue",
      ],
      removable: ["Bacon", "Queijo cheddar", "Cebola caramelizada", "Barbecue"],
      extras: ["bacon", "cheese", "egg", "sauce"],
      image: "assets/bacon-na-brasa.webp",
      badge: "INTENSO",
      featured: true,
    },
    {
      id: "frangocrocante",
      name: "Frango Crocante",
      category: "burgers",
      price: 3190,
      description: "Frango empanado, picles e maionese de limão no pão macio.",
      ingredients: [
        "Pão brioche",
        "Filé de frango empanado",
        "Picles",
        "Alface",
        "Maionese de limão",
      ],
      removable: ["Picles", "Alface", "Maionese de limão"],
      extras: ["cheese", "bacon", "sauce"],
      image: "assets/frango-crocante.webp",
      badge: "CROCANTE",
    },
    {
      id: "jalapeno",
      name: "Jalapeño na Brasa",
      category: "burgers",
      price: 3690,
      description:
        "Carne na brasa com cheddar derretido, jalapeño em rodelas e maionese defumada.",
      ingredients: [
        "Pão com gergelim",
        "Blend bovino 160 g",
        "Queijo cheddar",
        "Jalapeño",
        "Maionese defumada",
      ],
      removable: ["Queijo cheddar", "Jalapeño", "Maionese defumada"],
      extras: ["cheese", "bacon", "sauce"],
      image: "assets/jalapeno.webp",
      badge: "PICANTE",
    },
    {
      id: "horta",
      name: "Horta da Casa",
      category: "burgers",
      price: 3090,
      description:
        "Hambúrguer de grão-de-bico com casquinha dourada, tomate e molho de ervas.",
      ingredients: [
        "Pão com gergelim",
        "Hambúrguer de grão-de-bico",
        "Alface",
        "Tomate",
        "Cebola roxa",
        "Molho de ervas",
      ],
      removable: ["Alface", "Tomate", "Cebola roxa", "Molho de ervas"],
      extras: ["cheese", "egg"],
      image: "assets/horta.webp",
      badge: "VEGETARIANO",
    },
    {
      id: "ovonachapa",
      name: "Ovo na Chapa",
      category: "burgers",
      price: 3490,
      description:
        "Ovo na chapa sobre o hambúrguer, cheddar, tiras de bacon e molho da casa.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Ovo",
        "Queijo cheddar",
        "Bacon",
        "Molho da casa",
      ],
      removable: ["Ovo", "Queijo cheddar", "Bacon", "Molho da casa"],
      extras: ["egg", "bacon", "cheese", "sauce"],
      image: "assets/ovo-na-chapa.webp",
    },
    {
      id: "combo47",
      name: "Combo Clássico",
      category: "combos",
      price: 4390,
      description:
        "Clássico Fagulha + fritas de 120 g + refrigerante cola de 350 ml.",
      ingredients: [
        "Pão brioche",
        "Blend bovino 160 g",
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
        "Fritas 120 g",
        "Refrigerante cola 350 ml",
      ],
      removable: [
        "Queijo cheddar",
        "Alface",
        "Tomate",
        "Cebola",
        "Molho da casa",
      ],
      extras: ["bacon", "cheese", "egg", "sauce"],
      image: "assets/classico-fagulha.webp",
      badge: "COMPLETO",
    },
    {
      id: "combodouble",
      name: "Combo Duplo",
      category: "combos",
      price: 5390,
      description:
        "Duplo Fogo + fritas de 120 g + refrigerante cola de 350 ml.",
      ingredients: [
        "Pão brioche",
        "Dois blends bovinos de 120 g",
        "Queijo cheddar",
        "Picles",
        "Cebola",
        "Molho da casa",
        "Fritas 120 g",
        "Refrigerante cola 350 ml",
      ],
      removable: ["Queijo cheddar", "Picles", "Cebola", "Molho da casa"],
      extras: ["bacon", "cheese", "egg", "sauce"],
      image: "assets/burger-double.webp",
      badge: "FOME GRANDE",
    },
    {
      id: "fries",
      name: "Fritas da Casa",
      category: "sides",
      price: 1690,
      description: "Porção de 200 g. Douradas por fora, macias por dentro.",
      ingredients: ["Batata", "Sal", "Páprica"],
      removable: ["Sal", "Páprica"],
      extras: ["bacon", "cheese", "sauce"],
      image: "assets/fries.webp",
      badge: "CROCANTES",
    },
    {
      id: "onion",
      name: "Onion Rings",
      category: "sides",
      price: 1890,
      description: "Dez anéis de cebola empanados para acompanhar sua escolha.",
      ingredients: ["Cebola", "Empanado", "Sal"],
      removable: ["Sal"],
      extras: ["sauce"],
      image: "assets/onion-rings.webp",
      badge: "PARA DIVIDIR",
    },
    {
      id: "cola",
      name: "Refrigerante Cola",
      category: "drinks",
      price: 690,
      description: "Lata de 350 ml, servida gelada.",
      ingredients: ["Refrigerante sabor cola"],
      removable: [],
      extras: [],
      image: "assets/cola.webp",
    },
    {
      id: "lemonade",
      name: "Limonada da Casa",
      category: "drinks",
      price: 1190,
      description: "Limão, gelo e frescor. Copo de 400 ml.",
      ingredients: ["Limão", "Água", "Açúcar", "Gelo"],
      removable: ["Açúcar", "Gelo"],
      extras: [],
      image: "assets/limonada.webp",
    },
    {
      id: "water",
      name: "Água Mineral",
      category: "drinks",
      price: 490,
      description: "Sem gás. Garrafa de 500 ml.",
      ingredients: ["Água mineral"],
      removable: [],
      extras: [],
      image: "assets/agua.webp",
    },
    {
      id: "brownie",
      name: "Brownie da Brasa",
      category: "desserts",
      price: 1490,
      description:
        "Chocolate intenso, casquinha delicada e calda. Porção de 100 g.",
      ingredients: ["Brownie de chocolate", "Calda de chocolate"],
      removable: ["Calda de chocolate"],
      extras: [],
      image: "assets/brownie.webp",
    },
    {
      id: "shake",
      name: "Milk-shake Chocolate",
      category: "desserts",
      price: 1990,
      description: "Cremoso até a última gota. Copo de 400 ml.",
      ingredients: ["Sorvete de chocolate", "Leite", "Calda de chocolate"],
      removable: ["Calda de chocolate"],
      extras: [],
      image: "assets/shake.webp",
    },
  ],
};

;
/* FAGULHA — sem dependências.
   1. Regras de preço e validação (funções puras).
   2. Estado e persistência do carrinho.
   3. Renderização e eventos da interface. */
(() => {
  "use strict";
  const data = window.BRASA_DATA;
  const productById = (id) =>
    data.products.find((product) => product.id === id);
  const money = (cents) =>
    (cents / 100).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  const quantity = (value) =>
    Math.min(99, Math.max(1, Math.floor(Number(value)) || 1));
  const unique = (values) => [...new Set(values)];
  const newId = () =>
    "item-" +
    (globalThis.crypto?.randomUUID?.() ||
      Date.now() + "-" + Math.random().toString(36).slice(2));
  const text = (value, max = 180) =>
    typeof value === "string" ? value.trim().slice(0, max) : "";
  // Qualquer texto inserido em um template HTML passa por escapeHTML.
  // Observações e dados pessoais nunca são interpretados como marcação.
  const escapeHTML = (value) =>
    String(value).replace(
      /[&<>"']/g,
      (char) =>
        ({
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;",
        })[char],
    );

  function normalizeItem(raw) {
    if (!raw || typeof raw !== "object") return null;
    const product = productById(raw.productId);
    if (!product) return null;
    return {
      id:
        typeof raw.id === "string" && /^item-[a-z0-9-]+$/i.test(raw.id)
          ? raw.id
          : newId(),
      productId: product.id,
      quantity: quantity(raw.quantity),
      extras: unique(Array.isArray(raw.extras) ? raw.extras : []).filter(
        (id) => product.extras.includes(id) && Object.hasOwn(data.extras, id),
      ),
      removed: unique(Array.isArray(raw.removed) ? raw.removed : []).filter(
        (name) =>
          product.removable.includes(name) &&
          product.ingredients.includes(name),
      ),
      notes: text(raw.notes),
    };
  }

  // O armazenamento é uma entrada não confiável. Ignoramos preços salvos,
  // itens fora do catálogo e adicionais que não pertencem ao produto.
  function normalizeCart(raw) {
    if (!Array.isArray(raw)) return [];
    const usedIds = new Set();
    return raw
      .slice(0, 50)
      .map(normalizeItem)
      .filter(Boolean)
      .map((item) => {
        if (usedIds.has(item.id)) item.id = newId();
        usedIds.add(item.id);
        return item;
      });
  }

  function unitPrice(item) {
    const product = productById(item.productId);
    return (
      product.price +
      item.extras.reduce((sum, id) => sum + data.extras[id].price, 0)
    );
  }
  const subtotal = (item) => unitPrice(item) * item.quantity;
  const total = (items) => items.reduce((sum, item) => sum + subtotal(item), 0);
  // Verifica formato internacional; não comprova que existe uma conta WhatsApp.
  const validPhone = (phone) =>
    typeof phone === "string" &&
    /^[1-9]\d{7,14}$/.test(phone) &&
    !/^(\d)\1+$/.test(phone);

  function validateCustomer(customer) {
    if (!text(customer.customerName, 80))
      return "Informe seu nome para organizar o pedido.";
    if (!["pickup", "delivery"].includes(customer.fulfillment))
      return "Selecione retirada ou entrega.";
    if (customer.fulfillment === "delivery") {
      if (!text(customer.street, 140))
        return "Informe a rua ou avenida da entrega.";
      if (!text(customer.number, 20)) return "Informe o número ou S/N.";
      if (!text(customer.neighborhood, 100))
        return "Informe o bairro da entrega.";
    }
    return "";
  }

  function buildMessage(items, customer) {
    const lines = [`Cliente: ${text(customer.customerName, 80)}`];
    items.forEach((item) => {
      const product = productById(item.productId);
      lines.push("");
      lines.push(
        `${item.quantity}x ${product.name}`,
        item.extras.length
          ? "Adicionais: " +
              item.extras.map((id) => data.extras[id].name).join(", ")
          : "Sem adicionais",
      );
      if (item.removed.length)
        lines.push("Retirar: " + item.removed.join(", "));
      lines.push("", `Preço unitário: ${money(unitPrice(item))}`);
      if (text(item.notes))
        lines.push("Observação: " + text(item.notes));
    });
    lines.push("", `Total estimado: ${money(total(items))}`,
      "Podem confirmar meu pedido e o valor final?", "");
    if (customer.fulfillment === "delivery") {
      const address = [
        `${text(customer.street, 140)}, ${text(customer.number, 20)}`,
        text(customer.neighborhood, 100),
        text(customer.complement, 140),
      ]
        .filter(Boolean)
        .join(" — ");
      lines.push("Meu endereço é " + address);
    } else {
      lines.push("Retirada no local.");
    }
    return lines.join("\n");
  }
  const whatsappUrl = (phone, message) =>
    validPhone(phone)
      ? `https://wa.me/${phone}?text=${encodeURIComponent(message)}`
      : null;

  // Permite testar as regras com Node sem precisar de um navegador.
  window.BrasaCore = {
    normalizeCart,
    normalizeItem,
    unitPrice,
    subtotal,
    total,
    money,
    validPhone,
    validateCustomer,
    buildMessage,
    whatsappUrl,
    escapeHTML,
  };
  if (typeof document === "undefined") return;

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const STORAGE_KEY = "brasa47.cart.v1";
  const catalogSignature = JSON.stringify({
    products: data.products,
    extras: data.extras,
  });
  let cart = [];
  let draft = null;
  let editingId = null;
  let returnToCart = false;
  let storageWarning = "";
  let toastTimer;
  const dialogTriggers = new WeakMap();

  function toast(message) {
    $("#toast").textContent = message;
    $("#toast").classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(
      () => $("#toast").classList.remove("visible"),
      4000,
    );
  }

  function loadCart() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (!saved) return;
      if (saved.version !== 1 || !Array.isArray(saved.items))
        throw new Error("Formato inválido");
      cart = normalizeCart(saved.items);
      storageWarning =
        saved.catalogSignature !== catalogSignature ||
        JSON.stringify(cart) !== JSON.stringify(saved.items)
          ? "O catálogo ou os dados salvos mudaram. Seu carrinho foi atualizado; confira itens, personalizações e preços."
          : "";
    } catch {
      cart = [];
      storageWarning =
        "Não foi possível restaurar o carrinho. Você pode montar um novo pedido normalmente.";
    }
  }

  function saveCart() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ version: 1, items: cart, catalogSignature }),
      );
    } catch {
      storageWarning =
        "Seu navegador não permitiu salvar o carrinho. O pedido funciona nesta página, mas pode ser perdido ao fechá-la.";
    }
  }

  function openDialog(id) {
    const dialog = document.getElementById(id);
    if (dialog.open) return;
    dialogTriggers.set(dialog, document.activeElement);
    dialog.showModal();
    dialog.scrollTop = 0;
  }

  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("close", () => {
      if (dialog.id === "product-dialog" && returnToCart) {
        returnToCart = false;
        renderCart();
        openDialog("cart-dialog");
        return;
      }
      const trigger = dialogTriggers.get(dialog);
      if (trigger?.isConnected && !document.querySelector("dialog[open]"))
        trigger.focus();
    });
    // Clique no próprio fundo, fora do retângulo do dialog.
    dialog.addEventListener("click", (event) => {
      if (event.target !== dialog) return;
      const box = dialog.getBoundingClientRect();
      if (
        event.clientX < box.left ||
        event.clientX > box.right ||
        event.clientY < box.top ||
        event.clientY > box.bottom
      )
        dialog.close();
    });
  });

  function cardHTML(product) {
    return `<article class="product-card"><button type="button" data-product="${escapeHTML(product.id)}" aria-label="Personalizar ${escapeHTML(product.name)} — ${escapeHTML(money(product.price))}"><div class="card-photo"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)} — imagem ilustrativa" loading="lazy" decoding="async" width="700" height="500">${product.badge ? `<span class="card-badge">${escapeHTML(product.badge)}</span>` : ""}</div><div class="card-body"><h3>${escapeHTML(product.name)}</h3><p>${escapeHTML(product.description)}</p><div class="card-bottom"><span class="card-price">${money(product.price)}</span><span class="add-button" aria-hidden="true">+</span></div></div></button></article>`;
  }

  function renderProducts(category) {
    const products = data.products.filter(
      (product) => product.category === category,
    );
    $("#product-grid").innerHTML = products.length
      ? products.map(cardHTML).join("")
      : '<p class="inline-empty">Nenhum produto nesta categoria.</p>';
    const categoryName =
      data.categories.find((item) => item.id === category)?.name || "Produtos";
    $("#menu-count").textContent =
      `${categoryName} · ${products.length} opções`;
    $$(".filter-button").forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === category),
      ),
    );
  }

  function quantityHTML(item, context) {
    const id = context === "product" ? "product-quantity" : `qty-${item.id}`;
    return `<div class="quantity" data-context="${context}" data-item="${item.id || ""}"><button type="button" data-step="-1" aria-label="Diminuir quantidade" ${item.quantity <= 1 ? "disabled" : ""}>−</button><input id="${id}" type="number" min="1" max="99" step="1" value="${item.quantity}" aria-label="Quantidade${context === "cart" ? " de " + escapeHTML(productById(item.productId).name) : ""}" inputmode="numeric"><button type="button" data-step="1" aria-label="Aumentar quantidade" ${item.quantity >= 99 ? "disabled" : ""}>+</button></div>`;
  }

  function openProduct(productId, itemId = null) {
    const product = productById(productId);
    if (!product) return;
    editingId = itemId;
    draft = normalizeItem(
      itemId
        ? cart.find((item) => item.id === itemId)
        : { productId, quantity: 1, extras: [], removed: [], notes: "" },
    );
    if (!draft) return;
    const extras = product.extras.filter((id) =>
      Object.hasOwn(data.extras, id),
    );
    const extraHTML = extras.length
      ? `<fieldset class="customization-group"><legend>Capriche nos adicionais</legend><p class="group-hint">Valores por unidade. Marque o que quiser.</p>${extras.map((id) => `<label class="option-label"><input type="checkbox" name="extra" value="${escapeHTML(id)}" ${draft.extras.includes(id) ? "checked" : ""}><span>${escapeHTML(data.extras[id].name)}</span><span class="option-price">+ ${money(data.extras[id].price)}</span></label>`).join("")}</fieldset>`
      : '<p class="notice">Este produto não possui adicionais pagos.</p>';
    const removedHTML = product.removable.length
      ? `<fieldset class="customization-group"><legend>Prefere sem algum ingrediente?</legend><p class="group-hint">Marque para retirar. O preço não diminui.</p>${product.removable.map((name) => `<label class="option-label"><input type="checkbox" name="removed" value="${escapeHTML(name)}" ${draft.removed.includes(name) ? "checked" : ""}><span>Sem ${escapeHTML(name.toLowerCase())}</span></label>`).join("")}</fieldset>`
      : "";
    $("#product-content").innerHTML =
      `<div class="product-modal-photo"><img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)} — imagem ilustrativa" width="700" height="400"></div><div class="product-info"><p class="eyebrow">DO SEU JEITO · IMAGEM ILUSTRATIVA</p><h2 id="product-title" tabindex="-1">${escapeHTML(product.name)}</h2><p class="product-price">${money(product.price)} <small>preço base</small></p><p class="product-description">${escapeHTML(product.description)}</p><p class="ingredients-description"><strong>Ingredientes:</strong> ${escapeHTML(product.ingredients.join(", "))}.</p>${extraHTML}${removedHTML}<label class="field" for="product-notes">Alguma observação?<textarea id="product-notes" maxlength="180" rows="3" placeholder="Ex.: cortar ao meio. Alterações sujeitas à confirmação."></textarea></label><p class="privacy-note">Até 180 caracteres. Para unidades com personalizações diferentes, adicione cada versão separadamente ao carrinho.</p></div><div class="product-modal-footer">${quantityHTML(draft, "product")}<button id="add-product" class="button primary" type="button"><span id="add-label">${itemId ? "Salvar" : "Adicionar"}</span><strong id="product-total" aria-live="polite"></strong></button></div>`;
    $("#product-notes").value = draft.notes;
    if ($("#cart-dialog").open) {
      returnToCart = true;
      $("#cart-dialog").close();
    }
    openDialog("product-dialog");
    updateProductTotal();
  }

  function readDraft() {
    draft.extras = $$("#product-content input[name=extra]:checked").map(
      (input) => input.value,
    );
    draft.removed = $$("#product-content input[name=removed]:checked").map(
      (input) => input.value,
    );
    draft.notes = text($("#product-notes").value);
    draft.quantity = quantity($("#product-quantity").value);
  }

  function updateProductTotal() {
    readDraft();
    $("#product-total").textContent = money(subtotal(draft));
    const group = $("#product-content .quantity");
    group.querySelector('[data-step="-1"]').disabled = draft.quantity <= 1;
    group.querySelector('[data-step="1"]').disabled = draft.quantity >= 99;
  }

  function resetReview() {
    $("#order-review").hidden = true;
    $("#checkout-form").hidden = false;
    $("#message-preview").value = "";
    $("#whatsapp-link").removeAttribute("href");
  }

  function renderCart() {
    resetReview();
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    $$(".cart-count").forEach((badge) => (badge.textContent = count));
    $$(".cart-trigger").forEach((button) =>
      button.setAttribute(
        "aria-label",
        `Abrir meu pedido, ${count} itens, ${money(total(cart))}`,
      ),
    );
    $("#mobile-total").textContent = money(total(cart));
    $("#mobile-cart").classList.toggle("is-empty", !count);
    $("#cart-total").textContent = money(total(cart));
    $("#cart-details").hidden = !count;
    $("#storage-warning").hidden = !storageWarning;
    $("#storage-warning").textContent = storageWarning;
    $("#cart-items").innerHTML = !cart.length
      ? '<div class="empty-cart"><span aria-hidden="true">✦</span><h3>Sua fome merece companhia.</h3><p>O carrinho está vazio. Encontre seu primeiro favorito no cardápio.</p><button class="button primary" type="button" data-browse>Explorar cardápio ↗</button></div>'
      : cart
          .map((item) => {
            const product = productById(item.productId);
            return `<article class="cart-item" data-cart-item="${item.id}"><div class="cart-item-top"><img src="${escapeHTML(product.image)}" alt="" width="70" height="70"><div class="cart-item-title"><h3>${escapeHTML(product.name)}</h3><p>${item.quantity} × ${money(unitPrice(item))} / unidade</p></div><strong>${money(subtotal(item))}</strong></div>${item.extras.length ? `<p>Adicionais: ${escapeHTML(item.extras.map((id) => `${data.extras[id].name} (+${money(data.extras[id].price)}/un.)`).join(", "))}</p>` : ""}${item.removed.length ? `<p>Retirar: ${escapeHTML(item.removed.join(", "))} (sem desconto)</p>` : ""}${item.notes ? `<p>Observações: ${escapeHTML(item.notes)}</p>` : ""}<div class="cart-item-controls">${quantityHTML(item, "cart")}<button class="plain-button" type="button" data-edit="${item.id}" aria-label="Editar ${escapeHTML(product.name)}">Editar</button><button class="plain-button" type="button" data-remove="${item.id}" aria-label="Remover ${escapeHTML(product.name)}">Remover</button></div></article>`;
          })
          .join("");
  }

  function commitCart() {
    saveCart();
    renderCart();
  }

  function updateFulfillment() {
    const delivery =
      $("#checkout-form").elements.fulfillment.value === "delivery";
    $("#address-fields").hidden = !delivery;
    $$("#address-fields input").forEach((input) => {
      input.disabled = !delivery;
      input.required = delivery && input.name !== "complement";
    });
    $("#checkout-error").hidden = true;
  }

  function reviewOrder(event) {
    event.preventDefault();
    if (!cart.length) {
      toast("Adicione um produto antes de revisar o pedido.");
      return;
    }
    const customer = Object.fromEntries(new FormData($("#checkout-form")));
    const error = validateCustomer(customer);
    $("#checkout-error").hidden = !error;
    $("#checkout-error").textContent = error;
    if (error) return;
    const message = buildMessage(cart, customer);
    const url = whatsappUrl(data.brand.whatsapp, message);
    $("#message-preview").value = message;
    $("#whatsapp-link").hidden = !url;
    $("#copy-order").hidden = Boolean(url);
    if (url) $("#whatsapp-link").href = url;
    $("#whatsapp-status").textContent = url
      ? "Confira os detalhes. O próximo botão abre o WhatsApp com a mensagem preenchida; você decide quando enviar."
      : "MODO DE DEMONSTRAÇÃO — Nenhum WhatsApp válido foi configurado. Você pode copiar o resumo para testar. Nada será enviado.";
    $("#checkout-form").hidden = true;
    $("#order-review").hidden = false;
    $("#review-title").focus();
  }

  // Delegação: um único ouvinte atende os botões criados dinamicamente.
  document.addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    if (button.dataset.close)
      document.getElementById(button.dataset.close).close();
    if (button.classList.contains("cart-trigger")) {
      renderCart();
      openDialog("cart-dialog");
    }
    if (button.dataset.product) openProduct(button.dataset.product);
    if (button.dataset.category) renderProducts(button.dataset.category);
    if (button.hasAttribute("data-browse")) {
      $("#cart-dialog").close();
      $("#cardapio").scrollIntoView();
      $(".filter-button").focus({ preventScroll: true });
    }
    if (button.dataset.edit) {
      const item = cart.find((item) => item.id === button.dataset.edit);
      if (item) openProduct(item.productId, item.id);
    }
    if (button.dataset.remove) {
      cart = cart.filter((item) => item.id !== button.dataset.remove);
      commitCart();
      ($("#cart-items button") || $("#cart-dialog .icon-button")).focus();
      toast("Item removido do pedido.");
    }
    if (button.dataset.step) {
      const group = button.closest(".quantity");
      const input = group.querySelector("input");
      input.value = quantity(Number(input.value) + Number(button.dataset.step));
      input.dispatchEvent(new Event("change", { bubbles: true }));
      if (group.dataset.context === "cart") {
        const replacement = document
          .getElementById(`qty-${group.dataset.item}`)
          ?.closest(".quantity")
          .querySelector(`[data-step="${button.dataset.step}"]`);
        if (replacement && !replacement.disabled) replacement.focus();
        else document.getElementById(`qty-${group.dataset.item}`)?.focus();
      }
    }
    if (button.id === "add-product") {
      readDraft();
      if (!editingId && cart.length >= 50) {
        toast("Limite de 50 versões por pedido. Edite um item existente.");
        return;
      }
      if (editingId)
        cart = cart.map((item) =>
          item.id === editingId ? normalizeItem(draft) : item,
        );
      else cart.push(normalizeItem({ ...draft, id: newId() }));
      commitCart();
      $("#product-dialog").close();
      toast(
        editingId ? "Personalização atualizada." : "Adicionado ao seu pedido.",
      );
    }
    if (button.id === "clear-cart") {
      if (!window.confirm("Esvaziar todos os itens do carrinho?")) return;
      cart = [];
      commitCart();
      $("#checkout-form").reset();
      updateFulfillment();
      $("#cart-items button").focus();
      toast("Carrinho esvaziado.");
    }
  });

  $("#product-content").addEventListener("change", () => {
    $("#product-quantity").value = quantity($("#product-quantity").value);
    updateProductTotal();
  });
  $("#product-content").addEventListener("input", updateProductTotal);
  $("#cart-items").addEventListener("change", (event) => {
    if (!event.target.matches(".quantity input")) return;
    const group = event.target.closest(".quantity");
    const item = cart.find((item) => item.id === group.dataset.item);
    if (!item) return;
    item.quantity = quantity(event.target.value);
    const id = event.target.id;
    commitCart();
    document.getElementById(id)?.focus();
  });
  $("#checkout-form").addEventListener("submit", reviewOrder);
  $$("input[name=fulfillment]").forEach((input) =>
    input.addEventListener("change", updateFulfillment),
  );
  $("#back-checkout").addEventListener("click", () => {
    resetReview();
    $("#customer-name").focus();
  });
  $("#copy-order").addEventListener("click", async () => {
    const preview = $("#message-preview");
    try {
      if (!navigator.clipboard)
        throw new Error("Área de transferência indisponível");
      await navigator.clipboard.writeText(preview.value);
      $("#whatsapp-status").textContent =
        "Resumo copiado. Este é um teste; nenhum pedido foi enviado.";
    } catch {
      preview.focus();
      preview.select();
      $("#whatsapp-status").textContent =
        "Selecione e copie o resumo acima usando Ctrl+C ou a opção Copiar do celular. Nenhum pedido foi enviado.";
    }
  });
  $("#nav-toggle").addEventListener("click", () => {
    const isOpen = $("#main-nav").classList.toggle("is-open");
    $("#nav-toggle").setAttribute("aria-expanded", String(isOpen));
    $("#nav-toggle").setAttribute(
      "aria-label",
      isOpen ? "Fechar menu" : "Abrir menu",
    );
  });
  $$("#main-nav a").forEach((link) =>
    link.addEventListener("click", () => {
      $("#main-nav").classList.remove("is-open");
      $("#nav-toggle").setAttribute("aria-expanded", "false");
      $("#nav-toggle").setAttribute("aria-label", "Abrir menu");
    }),
  );
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      $("#main-nav").classList.contains("is-open")
    ) {
      $("#main-nav").classList.remove("is-open");
      $("#nav-toggle").setAttribute("aria-expanded", "false");
      $("#nav-toggle").setAttribute("aria-label", "Abrir menu");
      $("#nav-toggle").focus();
    }
  });
  $("#credits-button").addEventListener("click", () =>
    openDialog("credits-dialog"),
  );
  // Se outra aba mudar o carrinho, o resumo anterior deixa de ser válido.
  window.addEventListener("storage", (event) => {
    if (event.key !== STORAGE_KEY && event.key !== null) return;
    cart = [];
    loadCart();
    renderCart();
    if ($("#product-dialog").open) $("#product-dialog").close();
    toast("Carrinho atualizado em outra aba. Confira seu pedido.");
  });
  // Falha de imagem mantém um placeholder local, sem botão ou imagem quebrados.
  document.addEventListener(
    "error",
    (event) => {
      if (
        event.target.tagName === "IMG" &&
        !event.target.src.endsWith("/placeholder.svg")
      )
        event.target.src = "assets/placeholder.svg";
    },
    true,
  );

  function init() {
    const brand = data.brand;
    $$(".logo").forEach((logo) =>
      logo.setAttribute("aria-label", `${brand.name} — início`),
    );
    $$("[data-brand]").forEach((element) => (element.textContent = brand.name));
    document.title = `${brand.name} — ${brand.tagline}`;
    const colors = {
      background: "--bg",
      surface: "--surface",
      accent: "--accent",
      text: "--text",
    };
    Object.entries(colors).forEach(([key, variable]) =>
      document.documentElement.style.setProperty(variable, brand.colors[key]),
    );
    $("#hero-photo").src = brand.heroImage;
    $("#brand-story").textContent = brand.story;
    $("#brand-address").textContent = brand.address;
    $("#brand-city").textContent = brand.city;
    $("#brand-hours").innerHTML = brand.hours
      .map((hour) => `<li>${escapeHTML(hour)}</li>`)
      .join("");
    $("#brand-social").textContent = brand.instagramLabel;
    if (/^https:\/\/(www\.)?instagram\.com\//i.test(brand.instagram)) {
      const link = document.createElement("a");
      link.href = brand.instagram;
      link.textContent = brand.instagramLabel;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "text-link";
      $("#brand-social").replaceChildren(link);
      $("#social-note").hidden = true;
    }
    $("#year").textContent = new Date().getFullYear();
    $("#featured-grid").innerHTML = data.products
      .filter((product) => product.featured)
      .map(cardHTML)
      .join("");
    $("#category-filters").innerHTML = data.categories
      .map(
        (category) =>
          `<button type="button" class="filter-button" data-category="${escapeHTML(category.id)}" aria-pressed="false"><small aria-hidden="true">${escapeHTML(category.symbol)}</small>${escapeHTML(category.name)}</button>`,
      )
      .join("");
    renderProducts(data.categories[0]?.id);
    loadCart();
    renderCart();
    updateFulfillment();
  }
  init();
})();

;
/* Brasas decorativas: movimento em CSS, sem redesenhar a página a cada frame. */
(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const sections = [
    ...document.querySelectorAll(
      ".hero, .favorites, .about-section, .location-section",
    ),
  ];
  let observer;

  function refresh() {
    observer?.disconnect();
    sections.forEach((section) => {
      section.querySelector(".ember-field")?.remove();
      section.classList.remove("has-live-embers", "embers-visible");
    });
    if (reducedMotion.matches) return;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) =>
            entry.target.classList.toggle(
              "embers-visible",
              entry.isIntersecting,
            ),
          );
        },
        { rootMargin: "80px" },
      );
    }
    sections.forEach((section, sectionIndex) => {
      const field = document.createElement("div");
      field.className = "ember-field";
      field.setAttribute("aria-hidden", "true");
      const count = section.matches(".hero")
        ? 48
        : section.matches(".about-section")
          ? 32
          : section.matches(".favorites")
            ? 24
            : section.matches(".location-section")
              ? 8
              : 18;
      for (let i = 0; i < count; i++) {
        const spark = document.createElement("span");
        spark.className = "ember";
        const seed = i * 37 + sectionIndex * 19;
        spark.style.cssText = `--x:${(seed * 7 + 3) % 100}%;--y:${(seed * 11 + 13) % 100}%;--drift:${(seed % 79) - 39}px;--rise:${160 + (seed % 140)}px;--speed:${7 + (seed % 8)}s;--delay:-${(seed % 130) / 10}s;--width:${2 + (seed % 3) * 0.5}px;--length:${5 + (seed % 7)}px;--brightness:${0.75 + (seed % 25) / 100}`;
        field.append(spark);
      }
      section.prepend(field);
      section.classList.add("has-live-embers");
      if (observer) observer.observe(section);
      else section.classList.add("embers-visible");
    });
  }
  function pauseWhenHidden() {
    document.body.classList.toggle("embers-paused", document.hidden);
  }
  reducedMotion.addEventListener("change", refresh);
  document.addEventListener("visibilitychange", pauseWhenHidden);
  refresh();
  pauseWhenHidden();
})();

;
(() => {
  const header = document.querySelector(".site-header");
  if (!header) return;
  function updateOffset() {
    const height = Math.ceil(header.getBoundingClientRect().height);
    document.documentElement.style.setProperty(
      "--header-height",
      `${height}px`,
    );
  }
  updateOffset();
  if ("ResizeObserver" in window)
    new ResizeObserver(updateOffset).observe(header);
  else window.addEventListener("resize", updateOffset, { passive: true });
  // Links nativos preservam histórico, teclado e o comportamento de voltar.
  document.fonts?.ready.then(updateOffset);
})();
