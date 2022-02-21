const map = new Map();

map.set("test", 1234);
map.set(10, 121);

const isDeleted = map.delete(10);
console.log(isDeleted);
let items = [...map.keys()];
items.forEach((key) => console.log(map.get(key)));
const obj = { name: "luccas" };
const copyObj = { name: "luccas" };
map.set(obj, "Luccas");
console.log(map.size);
console.log(map.has(10));
console.log(map.has(20));
console.log(map.has(obj));
console.log(map.has(copyObj));

const [...m] = map.entries();
const [...n] = map.values();
console.log(m);
console.log(n);
console.clear();
const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

for (const iterator of set) {
  console.log(iterator);
}
console.log(set.values());

const diffValues = (set1, set2) => {
  const setNew = new Set();

  set1.forEach((v) => {
    if (!set2.has(v)) setNew.add(v);
  });

  return setNew;
};

const union = (set1, set2) => {
  const newSet = new Set();

  [...set1.values(), ...set2.values()]
    .sort((a, b) => a - b)
    .forEach((n) => newSet.add(n));

  return newSet;
};

const intersec = (set1, set2) => {
  const newSet = new Set();

  set1.forEach((n) => {
    if (set2.has(n)) newSet.add(n);
  });

  return newSet;
};
const set1 = new Set([1, 2, 3, 4, 5, 6, 7]);
const set2 = new Set([1, 2, 3, 4, 5, 6]);

const set3 = new Set([6, 7]);
const set4 = new Set([6, 7, 8, 9]);

console.log(diffValues(set1, set2));
console.log(union(set1, set2));
console.log(intersec(set3, set4));

const weakSet = new WeakSet();

weakSet.add([]);
weakSet.add({});

(function () {
  const obj = {};
  weakSet.add(obj);
})();

console.log(weakSet);

class Node {
  constructor(element, next) {
    this.next = next;
    this.element = element;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  push(element) {
    if (element != null) {
      const node = new Node(element);

      if (this.head === null) {
        this.head = node;
        this.count++;
      } else {
        let current = this.head;

        while (current.next) {
          current = current.next;
        }

        current.next = node;
        this.count++;
      }
    }
  }

  addStart(element) {
    if (element != null) {
      const node = new Node(element);

      node.next = this.head;

      this.head = node;
    }
  }

  addEnd(element) {
    if (element != null) {
      const node = new Node(element);
      let curr = this.head;

      if (curr === null) {
        this.head = node;
        return;
      }

      while (curr != null && curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
  }
}

const link = new LinkedList();

link.push(2);
link.push(3);
link.push(4);
link.push(5);
link.addEnd(2);

link.addStart(33);
console.log(link.head);
