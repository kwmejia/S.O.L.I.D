type Size = '' | 'S' | 'M' | 'XL';

class Product {
  constructor(
    public name: String = '',
    public price: number = 0,
    public size: Size = '',
  ) { }

  toString() {
    // if (this.name.length <= 0) throw Error('name is Empty')
    // if (this.price <= 0) throw Error('price is Empty')
    // if (this.size.length <= 0) throw Error('size is Empty')

    for (const key in this) {
      switch (typeof this[key]) {
        case 'string':
          if ((<string><unknown>this[key]).length <= 0) throw Error(`${key} is empty`)
          break;
      }

    }
    const stringProperties = ['name', 'size']
    return `${this.name} (${this.price}), (${this.size})`
  }
}

(() => {
  const bluePants = new Product('Blue Large Pants', 10, 'M');
  console.log(bluePants.toString());
})();