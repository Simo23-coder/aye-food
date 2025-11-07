const foods = [
  {
    "id": 1,
    "name": "干捞面",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "友记茶室"
  },
  {
    "id": 2,
    "name": "鸡粥",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "金山茶室"
  },
  {
    "id": 3,
    "name": "猪肝面线",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "新南茶室"
  },
  {
    "id": 4,
    "name": "云吞面",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "福来茶室"
  },
  {
    "id": 5,
    "name": "咖椰吐司",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "金猪咖啡店"
  },
  {
    "id": 6,
    "name": "烧卖",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 7,
    "name": "虾饺",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 8,
    "name": "流沙包",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 9,
    "name": "炒萝卜糕",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "大茄来"
  },
  {
    "id": 10,
    "name": "粿汁",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "联发茶室"
  },
  {
    "id": 11,
    "name": "叉烧包",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "和记点心"
  },
  {
    "id": 12,
    "name": "油条配豆浆",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "老字号豆浆店"
  },
  {
    "id": 13,
    "name": "福建面 (干)",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 14,
    "name": "蛋挞",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "老杨烘焙"
  },
  {
    "id": 15,
    "name": "面包与半熟蛋",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "金丰茶室"
  },
  {
    "id": 16,
    "name": "牛肉粿条",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "家乡牛肉面"
  },
  {
    "id": 17,
    "name": "干捞面",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "友记茶室"
  },
  {
    "id": 18,
    "name": "鸡粥",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "金山茶室"
  },
  {
    "id": 19,
    "name": "猪肝面线",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "新南茶室"
  },
  {
    "id": 20,
    "name": "云吞面",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "福来茶室"
  },
  {
    "id": 21,
    "name": "咖椰吐司",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "金猪咖啡店"
  },
  {
    "id": 22,
    "name": "烧卖",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 23,
    "name": "虾饺",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 24,
    "name": "流沙包",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 25,
    "name": "炒萝卜糕",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "大茄来"
  },
  {
    "id": 26,
    "name": "粿汁",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "联发茶室"
  },
  {
    "id": 27,
    "name": "叉烧包",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "和记点心"
  },
  {
    "id": 28,
    "name": "油条配豆浆",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "老字号豆浆店"
  },
  {
    "id": 29,
    "name": "福建面 (干)",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 30,
    "name": "蛋挞",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "老杨烘焙"
  },
  {
    "id": 31,
    "name": "面包与半熟蛋",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "金丰茶室"
  },
  {
    "id": 32,
    "name": "牛肉粿条",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "家乡牛肉面"
  },
  {
    "id": 33,
    "name": "干捞面",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "友记茶室"
  },
  {
    "id": 34,
    "name": "鸡粥",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "金山茶室"
  },
  {
    "id": 35,
    "name": "猪肝面线",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "新南茶室"
  },
  {
    "id": 36,
    "name": "云吞面",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "福来茶室"
  },
  {
    "id": 37,
    "name": "咖椰吐司",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "金猪咖啡店"
  },
  {
    "id": 38,
    "name": "烧卖",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 39,
    "name": "虾饺",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 40,
    "name": "流沙包",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "皇朝点心"
  },
  {
    "id": 41,
    "name": "炒萝卜糕",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "大茄来"
  },
  {
    "id": 42,
    "name": "粿汁",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "联发茶室"
  },
  {
    "id": 43,
    "name": "叉烧包",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "和记点心"
  },
  {
    "id": 44,
    "name": "油条配豆浆",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "老字号豆浆店"
  },
  {
    "id": 45,
    "name": "福建面 (干)",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 46,
    "name": "蛋挞",
    "meal": "breakfast",
    "taste": "light",
    "spice": "none",
    "place": "老杨烘焙"
  },
  {
    "id": 47,
    "name": "面包与半熟蛋",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "金丰茶室"
  },
  {
    "id": 48,
    "name": "牛肉粿条",
    "meal": "breakfast",
    "taste": "normal",
    "spice": "none",
    "place": "家乡牛肉面"
  },
  {
    "id": 49,
    "name": "叉烧饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "三民食堂"
  },
  {
    "id": 50,
    "name": "烧鸭饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "华兴酒家"
  },
  {
    "id": 51,
    "name": "福建炒面",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 52,
    "name": "干炒牛河",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 53,
    "name": "咕噜肉",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "明记小炒"
  },
  {
    "id": 54,
    "name": "姜葱鸡",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "顺记饭店"
  },
  {
    "id": 55,
    "name": "蒸鱼饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "渔港海鲜"
  },
  {
    "id": 56,
    "name": "海南鸡饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "海南鸡饭档"
  },
  {
    "id": 57,
    "name": "咖喱鸡饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "medium",
    "place": "阿福咖喱"
  },
  {
    "id": 58,
    "name": "烧腊双拼",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "烧腊大王"
  },
  {
    "id": 59,
    "name": "咸鱼茄子煲",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "家常菜馆"
  },
  {
    "id": 60,
    "name": "砂锅豆腐",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "顺兴饭店"
  },
  {
    "id": 61,
    "name": "客家小炒",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "客家小馆"
  },
  {
    "id": 62,
    "name": "三杯鸡",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "家常小炒"
  },
  {
    "id": 63,
    "name": "猪脚饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "福来饭店"
  },
  {
    "id": 64,
    "name": "牛腩面",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "福来牛腩"
  },
  {
    "id": 65,
    "name": "肉骨茶 (清汤)",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "药膳肉骨茶"
  },
  {
    "id": 66,
    "name": "叻沙 (本地版)",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "medium",
    "place": "叻沙之家"
  },
  {
    "id": 67,
    "name": "海南咖啡烤肉饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "咖啡馆"
  },
  {
    "id": 68,
    "name": "叉烧饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "三民食堂"
  },
  {
    "id": 69,
    "name": "烧鸭饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "华兴酒家"
  },
  {
    "id": 70,
    "name": "福建炒面",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 71,
    "name": "干炒牛河",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 72,
    "name": "咕噜肉",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "明记小炒"
  },
  {
    "id": 73,
    "name": "姜葱鸡",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "顺记饭店"
  },
  {
    "id": 74,
    "name": "蒸鱼饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "渔港海鲜"
  },
  {
    "id": 75,
    "name": "海南鸡饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "海南鸡饭档"
  },
  {
    "id": 76,
    "name": "咖喱鸡饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "medium",
    "place": "阿福咖喱"
  },
  {
    "id": 77,
    "name": "烧腊双拼",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "烧腊大王"
  },
  {
    "id": 78,
    "name": "咸鱼茄子煲",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "家常菜馆"
  },
  {
    "id": 79,
    "name": "砂锅豆腐",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "顺兴饭店"
  },
  {
    "id": 80,
    "name": "客家小炒",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "客家小馆"
  },
  {
    "id": 81,
    "name": "三杯鸡",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "家常小炒"
  },
  {
    "id": 82,
    "name": "猪脚饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "福来饭店"
  },
  {
    "id": 83,
    "name": "牛腩面",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "福来牛腩"
  },
  {
    "id": 84,
    "name": "肉骨茶 (清汤)",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "药膳肉骨茶"
  },
  {
    "id": 85,
    "name": "叻沙 (本地版)",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "medium",
    "place": "叻沙之家"
  },
  {
    "id": 86,
    "name": "海南咖啡烤肉饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "咖啡馆"
  },
  {
    "id": 87,
    "name": "叉烧饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "三民食堂"
  },
  {
    "id": 88,
    "name": "烧鸭饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "华兴酒家"
  },
  {
    "id": 89,
    "name": "福建炒面",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 90,
    "name": "干炒牛河",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "阿辉福建面"
  },
  {
    "id": 91,
    "name": "咕噜肉",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "明记小炒"
  },
  {
    "id": 92,
    "name": "姜葱鸡",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "顺记饭店"
  },
  {
    "id": 93,
    "name": "蒸鱼饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "渔港海鲜"
  },
  {
    "id": 94,
    "name": "海南鸡饭",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "海南鸡饭档"
  },
  {
    "id": 95,
    "name": "咖喱鸡饭",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "medium",
    "place": "阿福咖喱"
  },
  {
    "id": 96,
    "name": "烧腊双拼",
    "meal": "lunch",
    "taste": "heavy",
    "spice": "none",
    "place": "烧腊大王"
  },
  {
    "id": 97,
    "name": "咸鱼茄子煲",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "家常菜馆"
  },
  {
    "id": 98,
    "name": "砂锅豆腐",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "顺兴饭店"
  },
  {
    "id": 99,
    "name": "客家小炒",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "客家小馆"
  },
  {
    "id": 100,
    "name": "三杯鸡",
    "meal": "lunch",
    "taste": "normal",
    "spice": "none",
    "place": "家常小炒"
  }
];


const cardsEl = document.getElementById('cards');
const resultCountEl = document.getElementById('resultCount');
let filtered = [...foods];

function renderCards(list) {
  cardsEl.innerHTML = '';
  if (list.length === 0) {
    cardsEl.innerHTML = '<div class="card empty">没有符合条件的食物。</div>';
    resultCountEl.textContent = '共有 0 项结果';
    return;
  }
  resultCountEl.textContent = `共有 ${list.length} 项结果`;
  list.forEach(f => {
    const div = document.createElement('div');
    div.className = 'card';
    div.innerHTML = `
      <div class="card-title">${f.name}</div>
      <div class="card-meta">时段：${f.meal === 'breakfast' ? '早餐' : f.meal === 'lunch' ? '午餐' : '晚餐'} · 口味：${f.taste === 'heavy' ? '重口味' : f.taste === 'light' ? '清淡' : '普通'} · 辣度：${f.spice === 'none' ? '不辣' : f.spice === 'medium' ? '中辣' : '很辣'}</div>
      <div class="card-place">可以买到：${f.place}</div>
    `;
    cardsEl.appendChild(div);
  });
}

document.getElementById('applyFilter').addEventListener('click', () => {
  const meal = document.getElementById('mealSelect').value;
  const taste = document.getElementById('tasteSelect').value;
  const spice = document.getElementById('spiceSelect').value;
  filtered = foods.filter(f => {
    const mealOk = (meal === 'all') || (f.meal === meal);
    const tasteOk = (taste === 'all') || ( (taste === 'light' && f.taste === 'light') || (taste === 'heavy' && f.taste === 'heavy') || (taste === 'normal' && f.taste === 'normal') );
    const spiceOk = (spice === 'all') || (f.spice === spice);
    return mealOk && tasteOk && spiceOk;
  });
  renderCards(filtered);
});

document.getElementById('resetFilter').addEventListener('click', () => {
  document.getElementById('mealSelect').value = 'all';
  document.getElementById('tasteSelect').value = 'all';
  document.getElementById('spiceSelect').value = 'all';
  filtered = [...foods];
  renderCards(filtered);
});

const randomBtn = document.getElementById('randomBtn');
const randomModal = document.getElementById('randomModal');
const modalTitle = document.getElementById('modalTitle');
const modalMeta = document.getElementById('modalMeta');
const againBtn = document.getElementById('againBtn');
const closeModal = document.getElementById('closeModal');

function pickRandom() {
  const pool = filtered.length ? filtered : foods;
  const item = pool[Math.floor(Math.random() * pool.length)];
  showModal(item);
}

function showModal(item) {
  modalTitle.textContent = item.name;
  modalMeta.textContent = `可以买到：${item.place} · 时段：${item.meal === 'breakfast' ? '早餐' : item.meal === 'lunch' ? '午餐' : '晚餐'} · 口味：${item.taste === 'heavy' ? '重口味' : item.taste === 'light' ? '清淡' : '普通'} · 辣度：${item.spice === 'none' ? '不辣' : item.spice === 'medium' ? '中辣' : '很辣'}`;
  randomModal.classList.remove('hidden');
  randomModal.classList.add('flex');
}

randomBtn.addEventListener('click', pickRandom);
againBtn.addEventListener('click', pickRandom);
closeModal.addEventListener('click', () => { randomModal.classList.add('hidden'); randomModal.classList.remove('flex'); });
randomModal.addEventListener('click', (e) => { if (e.target === randomModal) { randomModal.classList.add('hidden'); randomModal.classList.remove('flex'); } });

// Initial render
renderCards(filtered);
