# react-tree

> React component that represents a tree from a given array consistent with d3js tree examples (without requiring D3).

vertical tree:

![Vertical Tree](http://i.imgur.com/pmppl3p.png)

horizontal tree:

![Horizontal Tree](http://i.imgur.com/0ju5bAS.png)

from:

```json
var treeData = [
  {
    "name": "A",
    "id": "A",
    "children": [
      {
        "name": "B",
        "id": "B",
        "children": [
          {"name": "C", "id": "C"},
          {
            "name": "D",
            "id": "D",
            "children": [
              {"name": "F", "id": "F"},
            ]
          }
        ]
      },
      {
        "name": "E",
        "id": "E"
      }
    ]
  }
];
```


## Building

For developing:

```sh
$ npm run dev  # build for dev
$ npm run build # builds for prod
```

### Examples

Go to the `/examples` folder and then:

```sh
$ webpack
$ http-server
```

Now you're ready to rock! :neckbeard:

## MIT LICENSE
