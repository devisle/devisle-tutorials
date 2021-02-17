/**
 * All fields are required:
 *
 * title - The title of the tutorial as it should appear to readers
 * description - The description as it will appear in main page
 * category - The category of the tutorial as it should appear to readers
 * fileName - The markdown file without the .md, super important to get right
 * author - The author of the tutorial as it should appear to readers
 *
 * How to use:
 *
 * Each category is a key in Catalog
 * The order of the tutorials are their placement in the category array
 * This will affect the previous and next tutorial links at the tutorial page
 */

export const Catalog = {
  Craftsmanship: [
    {
      title: "Evolve your Developer Game",
      description: "Software Developer/Engineer: Starting out and Evolving",
      category: "Craftsmanship",
      fileName: "evolve-developer",
      author: "Shreyas Balachandran",
    },
    {
      title: "Code Craftsmanship",
      description: "Three simple rules to become a better code craftsman",
      category: "Craftsmanship",
      fileName: "code-craftsmanship",
      author: "Natedeploys",
    },
    {
      title: "10x Developers",
      description: "10x Developer attributes, road to success",
      category: "Craftsmanship",
      fileName: "10x-developer",
      author: "Natedeploys",
    },
    {
      title: "The difference between statically and dynamically typed",
      description: "The difference between statically and dynamically typed and also strongly typed and weakly typed",
      category: "Craftsmanship",
      fileName: "difference-between-statically-and-dynamically-typed",
      author: "Endormi",
    },
  ],
  Node: [
    {
      title: "Setting up NVM",
      description:
        "NVM for Node Version Manager, allows you to have multiple node versions on the same machine",
      category: "Node",
      fileName: "nvm-setup",
      author: "Natedeploys",
    },
  ],
  Javascript: [
    {
      title: "Javascript V8 Engine",
      description: "What is a Javascript Engine, what is the V8 engine",
      category: "Javascript",
      fileName: "javascript-engine",
      author: "Natedeploys",
    },
    {
      title: "What is Babel and Typescript?",
      description:
        "We explain in a few words what babel does and what typescript is",
      category: "Javascript",
      fileName: "what-is-babel-typescript",
      author: "Natedeploys",
    },
    {
      title: "Optimized V8 code",
      description: "What does the V8 engine like and dislike",
      category: "Javascript",
      fileName: "optimized-v8-code",
      author: "Natedeploys",
    },
    {
      title: "Callstack and Memory Heap",
      description:
        "How does JS keep track of what to run and how does it allocate memory",
      category: "Javascript",
      fileName: "callstack-memory-heap",
      author: "Natedeploys",
    },
  ],
  Python: [
    {
      title: "Introduction To Discord.py",
      description: "A small Introduction to Discord.py",
      category: "Python",
      fileName: "introduction-to-discord-py",
      author: "Raghav Mrituanjaya",
    },
  ],
};
