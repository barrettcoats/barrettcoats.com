---
slug: "/notes/sandbox"
date: "2022-02-21"
title: "Sandbox"
---

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Example of `inline code` in a paragraph.

```text
Text code block
```

Normal  
_Italics_  
**Bold**  
**_Bold and Italics_**  
~~Strikethrough~~

[Link](/)

[Link with annotation](/ "annotation")

---

1. Ordered
2. List
3. Items

- Unordered
- List
- Items
  - Level 2
    - Level 3
- Done

Paragraph (again)

> Blockquotes
>
> with added lines

```bash
echo asdf // highlight-line
#multiline code blocks
```

```javascript{numberLines:5}
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`, // highlight-line
    options: {
      plugins: [
        `gatsby-remark-prismjs`,
      ]
    }
  }
]
```
