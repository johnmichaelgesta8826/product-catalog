# CvSU Mini Store


# CvSU Mini Store

A Mini Product Catalog built with React and Vite.

## Lab 3 Guide Questions

**1. What is the difference between props and state?**
Props are data passed from a parent to a child component and are read-only for the child. State is data owned and managed inside a component that can change over time using a setter function such as `setCartCount`, and changing it causes the component to re-render.

**2. Why can a child component not modify the props it receives?**
Props belong to the parent. React uses one-way data flow so the data always has a single source of truth, which makes the app easier to understand and debug. If a child needs a change, it asks the parent to do it.

**3. How does the onAddToCart callback let data flow from child to parent?**
The parent passes a function down as a prop. When the button is clicked, the child calls that function and passes the product title as an argument. The function runs in the parent and updates the parent's state, so data moves upward even though props only flow downward.

**4. Why is the key prop required when rendering a list with .map()?**
React uses the key to identify which item is which when the list changes. If a key is missing or duplicated, React may re-render the wrong items, show warnings, or mix up item state and order.

**5. What does the children prop allow you to do that a normal prop does not?**
It lets the parent place any JSX between the component's opening and closing tags, such as a "New" or "Sale" badge, and the component decides where to display it. A normal prop passes a single named value, while children lets you nest content.

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


