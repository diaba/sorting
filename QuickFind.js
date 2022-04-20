let root = [];
const unionFind = (sz) => {
  for (let i = 0; i < sz; i++) {
    root.push(i);
  }
};

const find = (x) => {
 if(x === root[x]){
return x;
 }
 return root[x] = find(root[x]);

};

const unionSet = (x, y) => {
  let rootX = find(x);
  let rootY = find(y);
  if (rootX != rootY) {
   root[rootY] = rootX;
  }
};

const connected = (x, y) => {
return find(x) === find(y);
}

unionFind(10);
console.log(root);
unionSet(1,2);
unionSet(2, 5);
unionSet(5, 6);
unionSet(6, 7);
unionSet(3, 8);
unionSet(8, 9);
console.log("1,5 connected:"+ connected(1,5));
console.log("5,7 connected:" + connected( 5,7));
console.log("4,9 connected:" + connected(4,9));
unionSet(4, 9);
console.log("4,9 connected:" + connected(4, 9));