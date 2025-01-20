# Linked List

This is an example of a vanilla javascript recreation of the stack object.

## Properties

- head
- size

## Types

- Singly
- Doubly
- Circularly
- Doubly Circular 

### Singly Linked 

Structure: Each node contains data and a pointer to the next node in the list.
Traversal: You can traverse the list in one direction only, from the head to the tail.
Use cases: Simple and efficient for scenarios where you primarily need to traverse the list in one direction, such as implementing stacks or queues.

#### List Methods

- append
- prepend
- insertAt
- removeFrom
- removeTarget
- removeAllOfTarget
- indexOf
- get
- printList
- size
- isEmpty
- toArray

#### Necessary Objects

- Directional, singly linked Node

### Double Linked List 

Structure: Each node contains data, a pointer to the next node, and a pointer to the previous node.
Traversal: You can traverse the list in both directions, making it more versatile than a singly linked list.
Use cases: Useful when you need to traverse a list in both directions, like in a browser's history or a music player's playlist.

#### Methods

#### Necessary Objects

- Directional, doubly linked Node

### Circular Linked List

Structure: Similar to a singly linked list, but the last node points back to the first node, creating a loop.
Traversal: You can traverse the list continuously, starting at any node and eventually reaching the starting point.
Use cases: Ideal for scenarios requiring continuous iteration, such as managing resources in a circular buffer or implementing a round-robin scheduling algorithm.

### Circlar Doubly Linked List
Structure: Combines the features of a doubly linked list and a circular linked list.
Traversal: You can traverse the list in both directions and continuously loop through the list.
Use cases: Offers the most flexibility, suitable for complex scenarios where you need both bidirectional traversal and circular iteration.

#### Multilevel Linked List

Multilevel Linked List is a 2D data structure that comprises several linked lists and each node in a multilevel linked list has a next and child pointer. All the elements are linked using pointers.

#### Skip List