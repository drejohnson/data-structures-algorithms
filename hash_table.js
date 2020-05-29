// Implement a hash table data structure in JavaScript

const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1
}

const nextPrime = (n) => {
    // Base case 
    if (n <= 1)
        return 2

    let prime = n
    let found = false

    // Loop continuously until isPrime returns 
    // true for a number greater than n 
    while (!found) {
        prime++

        if (isPrime(prime))
            found = true
    }

    return prime;
}

class HashTable {
    constructor(capacity = 7, loadFactor = 0.85) {
        this.capacity = capacity
        this.buckets = new Array(this.capacity)
        this.collisions = 0
        this.size = 0
        this.loadFactor = loadFactor
        this.keys = {}

        // populate buckets with map
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map()
        }
    }

    // set
    hash(key) {
        let hashedKey = 7
        const stringTypeKey = `${key}${typeof key}`;

        for (let i = 0; i < stringTypeKey.length; i++) {
            const charCode = stringTypeKey.charCodeAt(i);
            hashedKey += charCode << (i * 7);
        }

        return hashedKey
    }

    _getBucketIndex(key) {
        const hashValue = this.hash(key);
        const bucketIndex = 13 * hashValue % this.buckets.length;
        return bucketIndex;
    }

    // set
    set(key, value) {
        let idx = this._getBucketIndex(key)
        this.buckets[idx].set(key, value)
        if (this.buckets[idx].size > 1) this.collisions++
        this.keys[key] = idx

        this.size++
        // check if a rehash is due
        if (this.loadFactor > 0 && this.getLoadFactor() > this.loadFactor) {
            this.rehash(nextPrime(this.buckets.length * 2));
        }
    }

    // get
    get(key) {
        let idx = this._getBucketIndex(key)
        return this.buckets[idx].get(key)
    }

    // remove
    remove(key) {
        let idx = this._getBucketIndex(key)
        let deleted = this.buckets[idx].get(key)
        this.buckets[idx].delete(key)

        delete this.keys[key]
        this.size--

        return deleted
    }

    // rehash
    rehash(newCapacity) {
        const newMap = new HashTable(newCapacity);

        for (let key in this.keys) {
            if (key) {
                newMap.set(key, this.get(key))
            }
        }

        // update bucket
        this.buckets = newMap.buckets
        this.capacity = newMap.capacity
        this.collisions = newMap.collisions
        this.keys = newMap.keys;
    }

    getLoadFactor() {
        return this.size / this.buckets.length;
    }
}

let hashTable = new HashTable()

hashTable.set('hendrix', 'tiggly')
hashTable.set('shani', 'shorty wop')
hashTable.set('dylan', 'dyl pickle')
hashTable.set('mecca', 'dre face')
hashTable.set('dre', 'stilts')
hashTable.set('nai', 'lemon pound cake')

// hashTable.remove('nai')
// hashTable.remove('dylan')
// console.log(hashTable.get('hendrix'))

hashTable