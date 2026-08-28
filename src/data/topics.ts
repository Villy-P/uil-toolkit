export interface TopicData {
    [key: string]: {
        name: string;
        cheatsheet?: boolean;
        guide?: boolean;
        questions?: boolean;
    };
};

export const topics: TopicData = {
    ascii: {
        name: "ASCII",
        cheatsheet: true,
        guide: true,
    },
    bases: {
        name: "Bases",
        cheatsheet: true,
        guide: true,
        questions: true,
    },
    bigo: {
        name: "Big O Notation",
        cheatsheet: true,
    },
    boxing: {
        name: "Autoboxing/Unboxing",
        cheatsheet: true,
    },
    math: {
        name: "Mathematical Concepts",
        cheatsheet: true,
        questions: true,
    }, 
    precedence: {
        name: "Operator Precedence",
        cheatsheet: true,
        questions: true,
    }, 
    primitives: {
        name: "Primitive Data Types",
        cheatsheet: true,
    }, 
    strings: {
        name: "Strings",
        cheatsheet: true,
        questions: true,
    },
    switch: {
        name: "Switch Statements",
        cheatsheet: true,
    },
    bst: {
        name: "Binary Search Trees",
        cheatsheet: true,
    },
    sorting: {
        name: "Sorting Algorithms",
        cheatsheet: true,
    },
    classes: {
        name: "Classes and Objects",
        cheatsheet: true,
    },
    generics: {
        name: "Generics",
        cheatsheet: true,
    },
    designpatterns: {
        name: "Design Patterns",
        cheatsheet: true,
    },
    booleanalgebra: {
        name: "Boolean Algebra",
        cheatsheet: true,
    },
    formatting: {
        name: "String Formatting",
        cheatsheet: true,
    },
    graph: {
        name: "Graph Theory",
        cheatsheet: true,
    },
    builtinpackage: {
        name: "Built-in Packages",
        cheatsheet: true,
    },
};

// export const topics: TopicScores = {
//     ascii: 100,
//     bases: 111,
//     bigo: 100,
//     math: 101,
//     precedence: 101,
//     primitives: 100,
//     strings: 101
// };