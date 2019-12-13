const store = {
  activeTab: { name: "frontEnd", key: 0 },
  categories: [
    {
      id: 0,
      name: "Front-end"
    },
    {
      id: 1,
      name: "Back-end"
    },
    {
      id: 2,
      name: "Database"
    },
    {
      id: 3,
      name: "Misc"
    }
  ],
  subCategories: [
    {
      id: 0,
      categoryId: 0,
      name: "Fundementals"
    },
    {
      id: 1,
      categoryId: 0,
      name: "React"
    },
    {
      id: 2,
      categoryId: 1,
      name: "Node.js"
    }
  ],
  notes: [
    {
      id: 0,
      subCategoryId: 0,
      note: "item 1"
    }
  ]
};
