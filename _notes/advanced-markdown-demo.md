---
title: "Advanced Markdown Demo"
date: "2025-06-26"
---

# Advanced Markdown Features Demo

This note demonstrates all the advanced markdown features that are now supported.

## Code Blocks with Syntax Highlighting

### Python
```python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Generate first 10 fibonacci numbers
for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")
```

### JavaScript
```javascript
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
};
```

### SQL
```sql
SELECT users.name, COUNT(orders.id) as order_count
FROM users
LEFT JOIN orders ON users.id = orders.user_id
WHERE users.created_at >= '2024-01-01'
GROUP BY users.id
ORDER BY order_count DESC;
```

## Tables

| Feature | Supported | Notes |
|---------|-----------|-------|
| Tables | ✅ | GitHub Flavored Markdown |
| Code Highlighting | ✅ | Multiple languages |
| Task Lists | ✅ | Interactive checkboxes |
| Strikethrough | ✅ | ~~Like this~~ |
| Links | ✅ | [External links](https://github.com) |

## Task Lists

- [x] Set up markdown processing
- [x] Add syntax highlighting
- [x] Support tables
- [ ] Add math equations (LaTeX)
- [ ] Add diagrams support

## Lists and Formatting

### Unordered Lists
- Item 1
  - Nested item 1
  - Nested item 2
- Item 2
- Item 3

### Ordered Lists
1. First item
2. Second item
   1. Nested item
   2. Another nested item
3. Third item

### Text Formatting
- **Bold text**
- *Italic text*
- ***Bold and italic***
- ~~Strikethrough~~
- `Inline code`

## Links and Images

- [Internal link](#tables)
- [External link](https://github.com)
- Email: [contact@example.com](mailto:contact@example.com)

## Blockquotes

> This is a blockquote.
>
> It can span multiple lines and contain other markdown elements.
>
> > This is a nested blockquote.

## Horizontal Rules

---

## Line Breaks

This line has two spaces at the end.
So this line appears on a new line.

This line has a manual line break.

This line appears after a paragraph break.

## Inline HTML

You can also use <em>inline HTML</em> and <strong>HTML tags</strong>.

<div style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">
This is a custom HTML div with styling.
</div>

## Mathematical Expressions

LaTeX math expressions are now fully supported!

### Inline Math
Here's an inline equation: $E = mc^2$ and another one: $a^2 + b^2 = c^2$.

### Block Math
Here's Einstein's mass-energy equivalence:

$$E = mc^2$$

### Complex Equations
The quadratic formula:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

### Summation
The sum of first n natural numbers:

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

### Matrix
A 2x2 matrix:
$$
\begin{pmatrix}
a & b \\
c & d
\end{pmatrix}
$$

### Integral
The fundamental theorem of calculus:

$$\int_a^b f'(x) \, dx = f(b) - f(a)$$

This demonstrates that math rendering is working perfectly!
