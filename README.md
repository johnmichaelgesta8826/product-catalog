# CvSU Mini Store

## Lab 4 Guide Questions

**1. Why do we use two separate states, searchText and debouncedSearch?**
`searchText` is tied to the input box and updates on every keystroke so typing feels instant. `debouncedSearch` only updates after the user pauses for 300 ms, and it is the value used for filtering. This keeps the input responsive without re-filtering the list on every key press.

**2. What would happen if the debounce effect did not return a cleanup function?**
Every keystroke would leave its own timer running. Each timer would still fire after 300 ms and call `setDebouncedSearch`, so the list would update once per keystroke instead of only after the final pause. That defeats the purpose of debouncing.

**3. What is the purpose of the dependency array? What if it is `[]`? What if it is left out?**
It tells React when to re-run the effect: only when a listed value changes. With `[]`, the effect runs only once, after the first render. If it is left out completely, the effect runs after every render.

**4. Why should we avoid sorting the original products array directly?**
`sort()` mutates the array it is called on. Changing the original data can cause bugs elsewhere, and the "Default" order could not be restored. We sort a copy (`[...filteredProducts]`) instead.

**5. Is the filtered list better stored in state, or calculated during rendering?**
It is better to calculate it during rendering. It can be derived from `debouncedSearch`, `category`, and `sortOrder`, so storing it in its own state would duplicate data and could go out of sync. Calculating it each render keeps a single source of truth.
