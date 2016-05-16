# Models

#### sortie

| name			| type		| description	|
| -				| -			| -				|
| `id`			| int		| Ground team sortie ID (`XXXX`, e.g. "G-0001")
| `callsign`	| string	| Ground team radio callsign (e.g. `SAR-124`)
| `active`		| boolean	| Whether the sortie is 'active' or 'staged' / 'complete'
| `status`		| int		| Current sortie status: `0` (deploying), `1` (enroute), `2` (inserted), `3` (rtb)

#### track

| name			| type		| description	|
| -				| -			| -				|
| `id`			| int		| GUID for the track event
| `timestamp`	| datetime	| UNIX timestamp
| `coord`		| object	| Lat/lon pair
| `status`		| int		| Current sortie status: `0` (deploying), `1` (enroute), `2` (inserted), `3` (rtb)

#### waypoint

| name			| type		| description	|
| -				| -			| -				|
| `id`			| int		| GUID for the waypoint
| `type`		| int		| Type of waypoint: `0` (auto), `1` (manual)
| `timestamp`	| datetime	| UNIX timestamp
| `coord`		| object	| Lat/lon pair

# Routes

### /getSorties
###### Description
Retrieves a list of all sorties, ordered by `id`, `asc`.

### /getSortie/:id
###### Description
Retrieves a specific sortie
###### Params
* `id`: GUID of sortie

### /getTracks
###### Description
Retrieves a list of all track events, ordered by `timestamp`, `desc`

### /getTrack/:id
###### Description
Retrieves a specific track event
###### Params
* `id`: GUID of track event

### /getWaypoints
###### Description
Retrieves a list of all waypoints, ordered by `timestamp`, `desc`

### /getWaypoint/:id
###### Description
Retrieves a specific waypoint
###### Params
* `id`: GUID of waypoint

### /postTrack
###### Description
Creates a track event, requested from mobile device.
###### Params
* `coord`: lat/lon pair object
* `status`: `1` (deploying), `2` (enroute), `3` (inserted), `4` (rtb)

### /postWaypoint
###### Description
Create a waypoint, either automatic or manual, requested from webapp. Connected mobile devices will receive an alert after creation.
###### Params
* `type`: `auto`, `manual`
* `coord`: lat/lon pair object

### /postMessage
###### Description
Sends a message to all connected mobile devices.
###### Params
* `type`: `pause`, `sitrep`, `alert`
* `message`: freeform string, only for `alert` type