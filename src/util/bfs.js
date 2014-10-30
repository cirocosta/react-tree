var assign = Object.assign || require('object-assign');

/**
 * Super simple queue implementation. This is
 * not a big deal but it makes more clear that
 * BFS is queue-based.
 */
function Queue () {
  this.arr = [];
}

assign(Queue.prototype, {
  enqueue: function (d) {return this.arr.push(d) },
  dequeue: function () {return this.arr.pop() },
  isEmpty: function () {return !this.arr.length }
});

/**
 * Searches for an ID in a well formed tree
 * (using the "id/children" structure) and then
 * returns the object found.
 */
function bfs (tree, id) {
  var Q = new Queue();
  var t;

  Q.enqueue(tree);

  while (!Q.isEmpty()) {
    t = Q.dequeue();

    if (t.id === id)
      return t;

    for (var child in t.children)
      Q.enqueue(t.children[child]);
  }
}

// TODO multiple-bfs

module.exports = bfs;
