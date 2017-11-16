### Installation

```sh
docker-compose build
docker-compose run front yarn
docker-compose up
```

### Build

```sh
docker-compose build
docker-compose run front yarn build
```

You'll have the built files in the `build` directory.

1. Size of `index.html`: 480 B (not zipped)
1. Size of `main.js`: 70.22 KB (not zipped)
1. Size of `main.css`: 893 B (not zipped)

### Tech stack

1. Webpack
1. React
1. Redux
1. Immutable
1. SCSS

### TODO

Write tests.

Check requirements for the sizes of the data blocks. Depending on requirements the sizes
 can be hardcoded (in this case the features should be hardcoded too) or can be delivered
 within the server message. They can be adjustable from frontend (adding size dropdowns
 to the header of every feature), but this was not mentioned in the design.

Design should be prettified.

### Current logic

Example of the message from server:
```
{
  part: "A",
  feature: "One",
  status: 0, // Where 0 is error, 1 is warning, 2 is OK
  data: [
    [0.123456789, 0.123456789, 1],
    [0.123456789, 0.123456789, 2],
    [0.123456789, 0.123456789, 0],
    [0.123456789, 0.123456789, 1]
  ]
}
```

Server message mock can be found in the `src/server/message.js::message` function.

Right after the DashBoard component is mounted it simulates 10 messages arriving from the
 server and then one more every 2 seconds. This logic can be changed in the
 `src/view/DashBoard.js::DashBoardComponent::componentDidMount` method.

Server message data storing logic can be found in the `src/data/parts/reducer.js::reducer`.
 The structure of this store component is:
```
parts <ordered map of parts>:
  part_name <ordered map of features>:
    part_feature <map>:
      status <number>
      data <list>:
        unit of data from server
```

Currently only 3 last values of data from server are saved per each feature. This can be
 changed following the logic from **TODO** section. This way the store will not grow
 linearly with time but the size is limited to `O(number_of_features_in_all_parts)`.

Part names are stored in the order they come from server. The store can save any quantity
 of parts it receives. The order persists through time and doesn't change before refresh.

Feature names are stored under their part name in the order they come from server.
 The store can save any quantity of features it receives. The order persists through time
 and doesn't change before refresh.

`Data` from the message is stored unshifting the previously stored data.

### Constraints

CSS is built for the browsers supporting `flex`. This can be changed depending on the
 requirements.

In case of using old browsers the JS should be polyfielded. This is easily doable, but
 will result in increasing of the `main.js` size and lower (not much) performance.
