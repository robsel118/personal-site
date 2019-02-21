const storage = localStorage;

/**
 * Store a given JSON item with a given name.
 *
 * @param name The name to store the object under.
 * @param item The item to store.
 */
export const storeItem = (name: string, item) => {
  storage.setItem(name, JSON.stringify(item));
};

/**
 * Retrieve a stored item.
 *
 * @param name The name the item was stored under.
 * @returns {any} The item if available, else null is returned.
 */
export const retrieveItem = (name: string) => JSON.parse(storage.getItem(name));
